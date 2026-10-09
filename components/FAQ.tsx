"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What exactly is AI SEO (GEO / AEO)?",
    a: "AI SEO (also called Generative Engine Optimization or Answer Engine Optimization) is the practice of making your brand easy for AI systems like ChatGPT, Perplexity, Gemini and Google AI Overviews to find, trust and recommend. It extends classic SEO with entity optimization, citation building and answer-first content.",
  },
  {
    q: "How is this different from traditional SEO?",
    a: "Traditional SEO optimizes for ranked lists of links. AI search returns a single synthesized answer built from sources the model trusts. We still do the fundamentals that drive Google rankings, but we layer on what influences model recommendations: brand consensus across the web, structured data, quotable content and presence on the sources LLMs cite most.",
  },
  {
    q: "How long until we see results?",
    a: "Technical fixes and new content can start being picked up by AI crawlers within weeks. Most clients see measurable gains in AI share of voice within 60–90 days, with citation and pipeline impact compounding over the following quarters. Authority-building takes longer, but it's also the hardest for competitors to copy.",
  },
  {
    q: "Can you guarantee we'll be mentioned by ChatGPT?",
    a: "No honest agency can. These models are probabilistic and change often. What we do commit to is a clear roadmap, transparent weekly tracking, and defined visibility milestones in your contract. If we're not hitting them, you'll know early and we'll adjust the plan.",
  },
  {
    q: "Do you use AI to write our content?",
    a: "We use AI to accelerate research, outlining and analysis, but every page is shaped by a human strategist, fact-checked, enriched with original data or expert input, and edited by a senior writer. Models reward genuinely useful, verifiable content, not generic output.",
  },
  {
    q: "Will this hurt our existing Google rankings?",
    a: "The opposite. Clear structure, strong E-E-A-T signals, schema and authoritative citations are also what Google rewards. Most of our work improves traditional organic performance as a side effect.",
  },
  {
    q: "What do we need to get started?",
    a: "Just your website and a short call. We'll run a free AI visibility audit showing where you stand today against your top competitors, with no commitment required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-zinc-400">
            Can&apos;t find what you&apos;re looking for? Our team replies within one business day.
          </p>
          <a
            href="mailto:hello@citara.ai"
            className="mt-6 inline-flex rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30"
          >
            hello@citara.ai
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-white/[0.08] overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900/70">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-8"
                    >
                      <span className={cn("text-base font-medium transition-colors sm:text-lg", isOpen ? "text-white" : "text-zinc-300")}>
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen ? "rotate-45 border-lime-brand bg-lime-brand text-ink-950" : "border-white/15 text-zinc-400"
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pr-14 text-[15px] leading-relaxed text-zinc-400 sm:px-8 sm:pr-16">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
