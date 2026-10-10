"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Globe, Mail, User } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  domain: string;
  onDomainChange: (v: string) => void;
};

const perks = [
  "Share of voice across 8 AI engines for your top procedures",
  "Where competing practices outrank you, prompt by prompt",
  "Technical blockers hurting AI crawling of your procedure pages",
  "Your top 10 quick-win opportunities for high-value procedures",
];

export default function AuditCTA({ domain, onDomainChange }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 1100);
  };

  const reset = () => {
    setStatus("idle");
    setName("");
    setEmail("");
    onDomainChange("");
  };

  const field =
    "h-12 w-full rounded-xl border border-white/10 bg-black/30 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-lime-brand/60 focus:outline-none focus:ring-2 focus:ring-lime-brand/20";

  return (
    <section id="audit" className="relative scroll-mt-16 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lime-brand/[0.14] blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-violet-brand/[0.18] blur-[110px]" />

        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-brand/30 bg-lime-brand/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-lime-brand">
              Free · Takes 30 seconds
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find out what AI says about <span className="text-gradient animate-shimmer">your practice.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
              Get a free AI visibility report for your cosmetic surgery practice in 48 hours. No sales pitch, just data
              you can act on, whether or not we work together.
            </p>

            <ul className="mt-8 space-y-3.5">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-lime-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl bg-ink-950/60 p-6 sm:p-8">
            {status === "done" ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-brand text-ink-950 shadow-[0_0_40px_-4px_rgba(200,255,62,0.7)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-white">You&apos;re on the list{name ? `, ${name.split(" ")[0]}` : ""}!</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
                  We&apos;re running prompts for <span className="text-white">{domain || "your site"}</span> right now. Expect your
                  report at <span className="text-white">{email}</span> within 48 hours.
                </p>
                <button
                  onClick={reset}
                  className="mt-7 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  Audit another site
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">Request your free audit</h3>
                  <p className="mt-1.5 text-sm text-zinc-500">We&apos;ll email your report within 48 hours.</p>
                </div>

                <div className="relative">
                  <label htmlFor="f-site" className="sr-only">
                    Website
                  </label>
                  <Globe className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    id="f-site"
                    required
                    value={domain}
                    onChange={(e) => onDomainChange(e.target.value)}
                    placeholder="yourwebsite.com"
                    className={field}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="f-name" className="sr-only">
                    Full name
                  </label>
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    id="f-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    autoComplete="name"
                    className={field}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="f-email" className="sr-only">
                    Work email
                  </label>
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    id="f-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    autoComplete="email"
                    className={field}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-brand text-sm font-semibold text-ink-950 transition-all hover:shadow-[0_8px_30px_-6px_rgba(200,255,62,0.6)] disabled:opacity-80"
                  )}
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                      Scanning AI engines…
                    </>
                  ) : (
                    <>
                      Send my free audit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-zinc-500">No spam. No credit card. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
