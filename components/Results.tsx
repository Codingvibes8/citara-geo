import { BarChart3, FileSearch, Globe, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

const auditSections = [
  {
    icon: Globe,
    title: "Share of voice by platform",
    description: "How often your practice is cited across ChatGPT, Perplexity, Gemini, Google AI Overviews and other answer engines — compared to your top competitors.",
    metric: "8 platforms tracked",
  },
  {
    icon: FileSearch,
    title: "Prompt-level gap analysis",
    description: "The exact procedure queries where patients are asking for recommendations and your practice is missing — ranked by search volume and commercial intent.",
    metric: "100+ prompts analysed",
  },
  {
    icon: TrendingUp,
    title: "Technical AI-readiness score",
    description: "Whether AI crawlers can access, parse and trust your procedure pages — including structured data, schema markup and content architecture.",
    metric: "40+ signals checked",
  },
  {
    icon: BarChart3,
    title: "Quick-win roadmap",
    description: "Your top 10 highest-impact fixes, ordered by effort vs. impact — so you know exactly what to do first, whether or not you work with us.",
    metric: "Ranked by ROI",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sample audit output"
          title={
            <>
              What your free <span className="text-gradient">AI visibility audit</span> covers
            </>
          }
          description="Every audit is tailored to your practice, your competitors and your top procedures. Here's what the report includes — this is illustrative output from a sample audit, not a real client result."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {auditSections.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-lime-brand/[0.08] to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-brand/15 text-lime-brand">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    {s.metric}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-zinc-400">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <p className="text-center text-sm text-zinc-500">
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-600">Sample output</span>
            <br />
            The above is illustrative of what an audit covers. Your actual report will be based on real data from your practice and your competitors.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
