/**
 * Transactional email templates for the audit flow (server-only).
 * Rendered as plain HTML with inline styles — no external CSS in email.
 */

type LeadData = {
  domain: string;
  name: string;
  email: string;
};

const shell = (title: string, body: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#06070a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#06070a;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
            <tr>
              <td style="padding:0 0 24px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;color:#ffffff;">citara</span>
              </td>
            </tr>
            <tr>
              <td style="background-color:#0d0f14;border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:36px;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding-top:24px;">
                <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#71717a;margin:0;">
                  Citara Ltd · AI SEO for cosmetic surgery practices · hello@citara.ai
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

/** Sent to the owner (NOTIFICATION_EMAIL) for every new audit request. */
export function renderOwnerNotification(lead: LeadData): string {
  return shell(
    "New AI audit request",
    `
    <h1 style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:700;color:#ffffff;margin:0 0 8px;">
      New AI audit request
    </h1>
    <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#a1a1aa;margin:0 0 24px;">
      A practice requested a free AI visibility audit from the website.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#71717a;margin:0 0 4px;">WEBSITE</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#c8ff3e;margin:0;font-weight:600;">${lead.domain}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#71717a;margin:0 0 4px;">NAME</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#ffffff;margin:0;">${lead.name}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;">
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#71717a;margin:0 0 4px;">EMAIL</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#ffffff;margin:0;">${lead.email}</p>
        </td>
      </tr>
    </table>
    <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#71717a;margin:0;">
      The lead has been stored in Supabase (<code style="color:#a1a1aa;">audit_requests</code>) and a confirmation email was sent to them.
    </p>
  `
  );
}

/** Sent to the lead as an immediate confirmation their audit is queued. */
export function renderLeadConfirmation(lead: LeadData): string {
  return shell(
    "Your AI visibility audit is queued",
    `
    <h1 style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:700;color:#ffffff;margin:0 0 8px;">
      Your audit is queued
    </h1>
    <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#a1a1aa;margin:0 0 24px;">
      Thanks${lead.name ? `, ${lead.name.split(" ")[0]}` : ""} — we&apos;re running prompts for
      <strong style="color:#c8ff3e;">${lead.domain}</strong> across ChatGPT, Perplexity, Gemini and Google AI Overviews.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="background-color:rgba(200,255,62,0.06);border:1px solid rgba(200,255,62,0.2);border-radius:16px;padding:20px;">
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#a1a1aa;margin:0 0 12px;">WHAT HAPPENS NEXT</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#e4e4e7;margin:0 0 8px;">1. We analyse your share of voice for your top procedures</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#e4e4e7;margin:0 0 8px;">2. We identify where competitors outrank you, prompt by prompt</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#e4e4e7;margin:0;">3. Your report lands in this inbox within 48 hours</p>
        </td>
      </tr>
    </table>
    <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#71717a;margin:0;">
      Questions? Just reply to this email. No sales pitch attached — the report speaks for itself.
    </p>
  `
  );
}
