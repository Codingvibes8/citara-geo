import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { SectionHeading } from "@/components/ui";

const cases = [
  {
    client: "Lumière Aesthetics",
    industry: "Cosmetic Surgery · Miami",
    headline: { to: 340, prefix: "+", suffix: "%", label: "AI citations in 90 days" },
    metrics: [
      { v: "5.2x", l: "Consultation bookings from AI referrals" },
      { v: "#1", l: "Recommended in ChatGPT for breast augmentation queries" },
    ],
    accent: "from-lime-brand/20",
  },
  {
    client: "Velvet Contour",
    industry: "Body Contouring · LA",
    headline: { to: 86, prefix: "+", suffix: "%", label: "Revenue from AI-referred patients" },
    metrics: [
      { v: "12", l: "Procedure categories where AI names them first" },
      { v: "3.4x", l: "Higher conversion vs. organic average" },
    ],
    accent: "from-cyan-brand/20",
  },
  {
    client: "Maison Visage",
    industry: "Facial Plastic Surgery · NYC",
    headline: { to: 3.1, prefix: "", suffix: "x", decimals: 1, label: "Qualified patient pipeline in 6 months" },
    metrics: [
      { v: "64", l: "Queries now featured in AI Overviews" },
      { v: "−38%", l: "Cost per qualified patient lead" },
    ],
    accent: "from-violet-brand/25",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Results"
          title={
            <>
              Visibility that shows up in <span className="text-gradient">revenue</span>
            </>
          }
          description="AI-referred visitors arrive pre-sold: they've already been told you're the right choice. Here's what that looks like."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${c.accent} to-transparent opacity-60 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{c.client}</h3>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">{c.industry}</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors group-hover:bg-lime-brand group-hover:text-ink-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="relative mt-10">
                  <p className="font-display text-7xl font-semibold leading-none tracking-tighter text-white">
                    <CountUp
                      to={c.headline.to}
                      prefix={c.headline.prefix}
                      suffix={c.headline.suffix}
                      decimals={c.headline.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-3 text-[15px] text-zinc-400">{c.headline.label}</p>
                </div>

                <div className="relative mt-10 space-y-4 border-t border-white/[0.07] pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.l} className="flex items-baseline gap-4">
                      <span className="w-14 shrink-0 font-display text-2xl font-semibold text-lime-brand">{m.v}</span>
                      <span className="text-sm leading-snug text-zinc-400">{m.l}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
