"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Audit & baseline",
    time: "Week 1–2",
    summary:
      "We run hundreds of buyer prompts across every major engine to learn who gets recommended today, which sources models trust, and exactly where you're invisible.",
    deliverables: [
      "Prompt universe of 200–500 buyer questions",
      "Share-of-voice baseline vs. 5 competitors",
      "Technical AI-readiness scorecard",
      "Citation source map",
    ],
  },
  {
    n: "02",
    title: "Strategy & roadmap",
    time: "Week 3",
    summary:
      "We turn the gaps into a prioritized 90-day plan, ranking every opportunity by impact on pipeline, not just on mentions.",
    deliverables: [
      "Prioritized opportunity backlog",
      "Content & entity architecture plan",
      "Digital PR target list",
      "KPI model tied to revenue",
    ],
  },
  {
    n: "03",
    title: "Build & publish",
    time: "Week 4–12",
    summary:
      "Our strategists, writers and engineers ship in parallel: fixing technical blockers, publishing answer-first content and earning third-party citations.",
    deliverables: [
      "Schema, llms.txt and crawler fixes",
      "8–20 answer-first pages per month",
      "Earned mentions on trusted sources",
      "Wikipedia, review-site and forum presence",
    ],
  },
  {
    n: "04",
    title: "Measure & compound",
    time: "Ongoing",
    summary:
      "Weekly tracking shows what moved. We double down on what models reward, and retire what they ignore. Gains compound month over month.",
    deliverables: [
      "Live share-of-voice dashboard",
      "Monthly strategy & revenue review",
      "Competitor movement alerts",
      "Quarterly roadmap refresh",
    ],
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From invisible to indispensable in 90 days"
          description="A transparent, four-phase playbook. You'll always know what we're doing, why, and what it moved."
        />

        <Reveal delay={100} className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-3" role="tablist" aria-label="Process steps">
            {steps.map((s, i) => (
              <button
                key={s.n}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "group flex items-center gap-5 rounded-2xl border p-5 text-left transition-all duration-300",
                  active === i
                    ? "border-lime-brand/40 bg-lime-brand/[0.06]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-sm transition-colors",
                    active === i ? "text-lime-brand" : "text-zinc-600 group-hover:text-zinc-400"
                  )}
                >
                  {s.n}
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block font-display text-xl font-semibold tracking-tight transition-colors",
                      active === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wider text-zinc-500">{s.time}</span>
                </span>
                <span
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    active === i ? "bg-lime-brand shadow-[0_0_12px_rgba(200,255,62,0.9)]" : "bg-white/15"
                  )}
                />
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-ink-800 to-ink-900 p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-brand/[0.08] blur-3xl" />
            <span className="pointer-events-none absolute -bottom-10 right-4 select-none font-display text-[180px] font-semibold leading-none text-white/[0.03] sm:text-[240px]">
              {step.n}
            </span>

            <div key={step.n} className="relative animate-[fade-in_0.5s_ease-out_both]">
              <span className="inline-flex rounded-full border border-lime-brand/30 bg-lime-brand/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-lime-brand">
                {step.time}
              </span>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{step.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">{step.summary}</p>

              <p className="mb-4 mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">You receive</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-black/25 p-4 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-brand" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
