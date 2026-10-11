import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { auditRequestSchema } from "@/lib/validation";
import { config } from "@/lib/config";
import { renderLeadConfirmation, renderOwnerNotification } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* -------------------------------------------------------------------------- */
/*  Rate limiting (in-memory, per serverless instance — basic protection;     */
/*  swap for Upstash Ratelimit when you need account-wide limits)             */
/* -------------------------------------------------------------------------- */

const attempts = new Map<string, number[]>();

function isRateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    attempts.set(key, recent);
    return true;
  }
  recent.push(now);
  attempts.set(key, recent);
  return false;
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function normalizeDomain(raw: string): string {
  return raw
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .split(/[/?#]/)[0]
    .toLowerCase();
}

function getClientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}

/* -------------------------------------------------------------------------- */
/*  POST /api/audit                                                            */
/* -------------------------------------------------------------------------- */

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill the hidden "website" field. Pretend success, store nothing.
  if (typeof body === "object" && body !== null && "website" in body && (body as { website?: unknown }).website) {
    return NextResponse.json({ ok: true });
  }

  // Validate input
  let input;
  try {
    input = auditRequestSchema.parse(body);
  } catch (err) {
    if (err instanceof ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of err.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !errors[field]) errors[field] = issue.message;
      }
      return NextResponse.json({ ok: false, error: "Please fix the highlighted fields.", errors }, { status: 400 });
    }
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Rate limit: 3 per email / hour, 10 per IP / hour
  const ip = getClientIp(request);
  if (isRateLimited(`email:${input.email}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json({ ok: false, error: "Too many requests for this email. Please try again later." }, { status: 429 });
  }
  if (isRateLimited(`ip:${ip}`, 10, 60 * 60 * 1000)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  // Dependencies — fail loudly (500) so misconfiguration is obvious in logs
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("[api/audit] Supabase env vars are not configured");
    return NextResponse.json({ ok: false, error: "Server is not fully configured. Please contact us at hello@citara.ai." }, { status: 500 });
  }
  if (!process.env.RESEND_API_KEY) {
    console.error("[api/audit] RESEND_API_KEY is not configured");
    return NextResponse.json({ ok: false, error: "Email delivery is not configured yet. Please contact us at hello@citara.ai." }, { status: 500 });
  }

  const domain = normalizeDomain(input.domain);
  const lead = { domain, name: input.name.trim(), email: input.email.trim().toLowerCase() };

  // 1. Persist the lead
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { error: dbError } = await supabase.from("audit_requests").insert({
    domain: lead.domain,
    name: lead.name,
    email: lead.email,
    status: "new",
  });
  if (dbError) {
    console.error("[api/audit] Supabase insert failed:", dbError.message);
    return NextResponse.json({ ok: false, error: "Could not save your request. Please email hello@citara.ai instead." }, { status: 500 });
  }

  // 2. Send emails — owner notification is critical, lead confirmation is best-effort
  const resend = new Resend(process.env.RESEND_API_KEY);

  const [ownerResult, leadResult] = await Promise.allSettled([
    resend.emails.send({
      from: `Citara Audits <${config.emailFrom}>`,
      to: config.notificationEmail,
      subject: `New AI audit request — ${lead.domain}`,
      html: renderOwnerNotification(lead),
    }),
    resend.emails.send({
      from: `Citara <${config.emailFrom}>`,
      to: lead.email,
      subject: "Your AI visibility audit is queued",
      html: renderLeadConfirmation(lead),
    }),
  ]);

  if (ownerResult.status === "rejected") {
    console.error("[api/audit] Owner notification email failed:", ownerResult.reason);
    return NextResponse.json(
      { ok: false, error: "Your request was saved, but we couldn't notify the team. Please email hello@citara.ai." },
      { status: 500 }
    );
  }
  if (leadResult.status === "rejected") {
    console.error("[api/audit] Lead confirmation email failed:", leadResult.reason);
  }

  return NextResponse.json({ ok: true, confirmationEmail: leadResult.status === "fulfilled" });
}
