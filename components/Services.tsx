import type { ReactNode } from "react";
import { Check, FileSearch, FileText, Link2, LineChart, Network, ScanSearch } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: ReactNode;
  tag: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  children?: ReactNode;
};

function ServiceCard({ icon, tag, title, description, className, delay = 0, children }: ServiceCardProps) {
  return (
    <Reveal delay={delay} className={cn("h-full", className)}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-ink-850 to-ink-900 p-7 transition-colors duration-300 hover:border-lime-brand/30">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-brand/0 blur-3xl transition-all duration-500 group-hover:bg-lime-brand/10" />
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lime-brand">
            {icon}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{tag}</span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-400">{description}</p>
        {children && <div className="mt-7 flex-1 pt-1">{children}</div>}
      </article>
    </Reveal>
  );
}

function PromptVisual() {
  const prompts = [
    { q: "best crm for startups", hit: true, pos: "#1" },
    { q: "hubspot alternatives under $50", hit: true, pos: "#2" },
    { q: "crm with built-in email sequences", hit: true, pos: "#1" },
    { q: "easiest crm to migrate to", hit: false, pos: "—" },
  ];
  return (
    <div className="space-y-2">
      {prompts.map((p) => (
        <div
          key={p.q}
          className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-black/25 px-4 py-2.5"
        >
          <span className="truncate font-mono text-[12.5px] text-zinc-300">&quot;{p.q}&quot;</span>
          <span
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px]",
              p.hit ? "bg-lime-brand/15 text-lime-brand" : "bg-white/5 text-zinc-500"
            )}
          >
            {p.hit ? <Check className="h-3 w-3" /> : null}
            {p.hit ? `Mentioned ${p.pos}` : "Not mentioned"}
          </span>
        </div>
      ))}
    </div>
  );
}

function AuditVisual() {
  const items = [
    ["Entity & brand clarity", 86],
    ["Citation footprint", 54],
    ["Crawl accessibility", 92],
    ["Answer-readiness", 38],
  ] as const;
  return (
    <div className="space-y-3.5">
      {items.map(([label, v]) => (
        <div key={label}>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-400">{label}</span>
            <span className="font-mono text-zinc-300">{v}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className={cn("h-full rounded-full", v < 60 ? "bg-amber-400" : "bg-lime-brand")}
              style={{ width: `${v}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CodeVisual() {
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/[0.07] bg-black/40 p-4 font-mono text-[12px] leading-[1.75] text-zinc-400">
      <code>
        <span className="text-zinc-600"># robots.txt</span>
        {"\n"}
        <span className="text-violet-brand">User-agent:</span> GPTBot{"\n"}
        <span className="text-lime-brand">Allow:</span> /{"\n"}
        <span className="text-violet-brand">User-agent:</span> PerplexityBot{"\n"}
        <span className="text-lime-brand">Allow:</span> /{"\n"}
        {"\n"}
        <span className="text-zinc-600"># llms.txt</span>
        {"\n"}
        <span className="text-cyan-brand">## Key pages</span>
        {"\n"}- [Pricing](/pricing): plans & limits
      </code>
    </pre>
  );
}

function ContentVisual() {
  const steps = [
    { k: "H1", t: "How much does solar cost for a 2,000 sq ft home?", tone: "text-white" },
    { k: "A", t: "40-word direct answer, with the number first", tone: "text-lime-brand" },
    { k: "Proof", t: "Data table · expert quote · cited source", tone: "text-cyan-brand" },
    { k: "Schema", t: "FAQPage · Article · Organization", tone: "text-violet-brand" },
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {steps.map((s) => (
        <div key={s.k} className="rounded-xl border border-white/[0.07] bg-black/25 p-3.5">
          <span className={cn("font-mono text-[10px] uppercase tracking-wider", s.tone)}>{s.k}</span>
          <p className="mt-1.5 text-[13px] leading-snug text-zinc-300">{s.t}</p>
        </div>
      ))}
    </div>
  );
}

function PRVisual() {
  const sources = [
    ["g2.com", 94],
    ["reddit.com", 88],
    ["industry press", 76],
    ["wikipedia.org", 71],
  ] as const;
  return (
    <div className="space-y-2">
      {sources.map(([s, v]) => (
        <div key={s} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/25 px-4 py-2.5">
          <span className="w-28 shrink-0 truncate font-mono text-[12px] text-zinc-300">{s}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-brand to-violet-brand" style={{ width: `${v}%` }} />
          </div>
          <span className="w-6 text-right font-mono text-[11px] text-zinc-500">{v}</span>
        </div>
      ))}
    </div>
  );
}

function ReportVisual() {
  const bars = [18, 24, 22, 34, 41, 38, 56, 63, 71, 84, 92, 100];
  return (
    <div className="rounded-xl border border-white/[0.07] bg-black/25 p-4">
      <div className="flex items-end justify-between gap-1.5" style={{ height: 88 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-lime-brand/30 to-lime-brand transition-all duration-500 group-hover:opacity-100"
            style={{ height: `${h}%`, opacity: 0.35 + (i / bars.length) * 0.65 }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        <span>Month 1</span>
        <span>AI citations</span>
        <span>Month 12</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One system to win <span className="text-gradient">AI search</span> and Google
            </>
          }
          description="We combine technical SEO, answer-first content and authority building into a single program, tuned for how large language models find, trust and cite sources."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-6">
          <ServiceCard
            className="lg:col-span-4"
            icon={<ScanSearch className="h-5 w-5" />}
            tag="Core"
            title="Generative Engine Optimization"
            description="We map the exact prompts your buyers ask, then engineer your brand, pages and third-party footprint to be the answer across every major model."
          >
            <PromptVisual />
          </ServiceCard>

          <ServiceCard
            className="lg:col-span-2"
            delay={80}
            icon={<FileSearch className="h-5 w-5" />}
            tag="Start here"
            title="AI Visibility Audit"
            description="A full diagnostic of how models see, understand and rank your brand today."
          >
            <AuditVisual />
          </ServiceCard>

          <ServiceCard
            className="lg:col-span-2"
            icon={<Network className="h-5 w-5" />}
            tag="Technical"
            title="AI-Ready Technical SEO"
            description="Crawler access, structured data, entity markup and llms.txt, so machines can parse you."
          >
            <CodeVisual />
          </ServiceCard>

          <ServiceCard
            className="lg:col-span-4"
            delay={80}
            icon={<FileText className="h-5 w-5" />}
            tag="Content"
            title="Answer-First Content Engine"
            description="Pages built to be quoted: direct answers up top, original data, expert proof and clean structure. Written by strategists, accelerated by AI, edited by humans."
          >
            <ContentVisual />
          </ServiceCard>

          <ServiceCard
            className="lg:col-span-4"
            icon={<Link2 className="h-5 w-5" />}
            tag="Authority"
            title="Citation & Digital PR"
            description="LLMs trust consensus. We earn mentions on the review sites, forums, publications and databases that models actually pull from."
          >
            <PRVisual />
          </ServiceCard>

          <ServiceCard
            className="lg:col-span-2"
            delay={80}
            icon={<LineChart className="h-5 w-5" />}
            tag="Reporting"
            title="Prompt Tracking & Reporting"
            description="Weekly share-of-voice across engines, tied to pipeline, not vanity."
          >
            <ReportVisual />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
