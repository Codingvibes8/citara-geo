"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import CalLink from "@/components/CalLink";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Launch",
    price: 3500,
    blurb: "For cosmetic surgery practices taking their first steps in AI search.",
    cta: "Start with Launch",
    popular: false,
    features: [
      "100 tracked procedure prompts",
      "ChatGPT, Perplexity & Google AI Overviews",
      "Full AI visibility audit & roadmap",
      "Technical AI-readiness fixes",
      "4 answer-first procedure pages / month",
      "Monthly strategy call & report",
    ],
  },
  {
    name: "Growth",
    price: 7500,
    blurb: "For practices that want to own their specialty in AI answers.",
    cta: "Book a Growth call",
    popular: true,
    features: [
      "300 tracked procedure prompts",
      "All 8 major answer engines",
      "Live share-of-voice dashboard",
      "12 answer-first procedure pages / month",
      "4 earned medical citation placements / month",
      "Dedicated strategist + shared Slack",
      "Weekly reporting & competitor alerts",
    ],
  },
  {
    name: "Scale",
    price: null,
    blurb: "For multi-location, multi-specialty and enterprise practices.",
    cta: "Talk to our team",
    popular: false,
    features: [
      "1,000+ tracked prompts, multi-language",
      "Multi-location & multi-specialty programs",
      "Custom content & medical PR volume",
      "Engineering support for implementation",
      "Executive & board-ready reporting",
      "Priority access to new research",
    ],
  },
];

export default function Pricing() {
  const [quarterly, setQuarterly] = useState(true);

  return (
    <section id="pricing" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple retainers. Serious outcomes."
          description="No lock-in contracts and no hidden fees. Every plan starts with a full audit so we build on facts, not guesses."
        />

        <Reveal delay={80} className="mt-10 flex items-center justify-center gap-4">
          <span className={cn("text-sm transition-colors", !quarterly ? "text-white" : "text-zinc-500")}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={quarterly}
            aria-label="Toggle quarterly billing"
            onClick={() => setQuarterly((v) => !v)}
            className={cn(
              "relative h-7 w-12 rounded-full border transition-colors",
              quarterly ? "border-lime-brand bg-lime-brand" : "border-white/15 bg-white/10"
            )}
          >
            <span
              className={cn(
                "absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition-transform duration-300",
                quarterly ? "translate-x-5 bg-ink-950" : "translate-x-0 bg-white"
              )}
            />
          </button>
          <span className={cn("flex items-center gap-2 text-sm transition-colors", quarterly ? "text-white" : "text-zinc-500")}>
            Quarterly
            <span className="rounded-full bg-lime-brand/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime-brand">
              Save 10%
            </span>
          </span>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => {
            const price = t.price ? Math.round(quarterly ? t.price * 0.9 : t.price) : null;
            return (
              <Reveal key={t.name} delay={i * 90} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8",
                    t.popular
                      ? "border-lime-brand/50 bg-gradient-to-b from-lime-brand/[0.09] to-ink-900 shadow-[0_0_80px_-20px_rgba(200,255,62,0.35)]"
                      : "border-white/[0.08] bg-ink-900"
                  )}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-8 rounded-full bg-lime-brand px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-950">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold text-white">{t.name}</h3>
                  <p className="mt-2 min-h-[44px] text-sm leading-relaxed text-zinc-400">{t.blurb}</p>

                  <div className="mt-6 flex h-14 items-baseline gap-1.5">
                    {price ? (
                      <>
                        <span className="font-display text-5xl font-semibold tracking-tight text-white">
                          £{price.toLocaleString("en-GB")}
                        </span>
                        <span className="text-sm text-zinc-500">/ month</span>
                      </>
                    ) : (
                      <span className="font-display text-5xl font-semibold tracking-tight text-white">Custom</span>
                    )}
                  </div>

                  <CalLink
                    location={`pricing-${t.name}`}
                    className={cn(
                      "mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all",
                      t.popular
                        ? "bg-lime-brand text-ink-950 hover:shadow-[0_8px_30px_-6px_rgba(200,255,62,0.55)]"
                        : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]"
                    )}
                  >
                    {t.cta}
                  </CalLink>

                  <ul className="mt-8 space-y-3.5 border-t border-white/[0.07] pt-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
