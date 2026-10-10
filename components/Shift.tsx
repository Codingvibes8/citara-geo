"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

const rows = [
  {
    label: "The goal",
    old: "Rank #1 for a keyword",
    next: "Be the answer AI gives for the question",
  },
  {
    label: "What gets rewarded",
    old: "Backlinks and keyword density",
    next: "Entity authority, consensus and citable facts",
  },
  {
    label: "What the user sees",
    old: "Ten blue links to choose from",
    next: "One synthesized recommendation, with sources",
  },
  {
    label: "How it's measured",
    old: "Rankings, clicks, impressions",
    next: "Share of voice, citations, sentiment, pipeline",
  },
  {
    label: "Content that wins",
    old: "Long pages targeting head terms",
    next: "Answer-first, structured, evidence-rich pages",
  },
];

export default function Shift() {
  const [mode, setMode] = useState<"old" | "next">("next");

  return (
    <section className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The shift"
          title={
            <>
              Your patients ask AI first.
              <br className="hidden sm:block" /> <span className="text-zinc-500">Does it mention you?</span>
            </>
          }
          description="Cosmetic surgery patients now research procedures on AI before they ever see a surgeon. Discovery is moving from lists of links to single, synthesized answers. Practices that AI trusts get recommended. Everyone else gets left out of the conversation. SEO isn't dead, but it's no longer enough."
        />

        <Reveal delay={100} className="mx-auto mt-14 max-w-4xl">
          {/* toggle */}
          <div className="mx-auto mb-6 flex w-fit items-center rounded-full border border-white/10 bg-white/[0.03] p-1 lg:hidden">
            {(
              [
                ["old", "Traditional SEO"],
                ["next", "AI SEO"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setMode(key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  mode === key ? "bg-lime-brand text-ink-950" : "text-zinc-400"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70">
            {/* desktop header */}
            <div className="hidden grid-cols-[180px_1fr_1fr] border-b border-white/[0.07] lg:grid">
              <div />
              <div className="flex items-center gap-2 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                <Minus className="h-3.5 w-3.5" /> Traditional SEO
              </div>
              <div className="flex items-center gap-2 border-l border-white/[0.07] bg-lime-brand/[0.06] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-lime-brand">
                <Check className="h-3.5 w-3.5" /> AI SEO · The Citara way
              </div>
            </div>

            {rows.map((r, i) => (
              <div
                key={r.label}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-[180px_1fr_1fr]",
                  i !== rows.length - 1 && "border-b border-white/[0.07]"
                )}
              >
                <div className="px-6 pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 lg:py-6">
                  {r.label}
                </div>
                <div
                  className={cn(
                    "px-6 pb-5 pt-2 text-[15px] text-zinc-400 lg:block lg:py-6",
                    mode === "old" ? "block" : "hidden"
                  )}
                >
                  {r.old}
                </div>
                <div
                  className={cn(
                    "px-6 pb-5 pt-2 text-[15px] font-medium text-white lg:block lg:border-l lg:border-white/[0.07] lg:bg-lime-brand/[0.04] lg:py-6",
                    mode === "next" ? "block" : "hidden"
                  )}
                >
                  {r.next}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
