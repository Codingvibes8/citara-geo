"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, Globe, Quote, Sparkles, TrendingUp } from "lucide-react";
import CountUp from "@/components/CountUp";
import { cn } from "@/lib/utils";

type Scene = {
  platform: string;
  dot: string;
  prompt: string;
  answer: string;
  sources: string[];
};

const scenes: Scene[] = [
  {
    platform: "ChatGPT",
    dot: "bg-emerald-400",
    prompt: "What's the best cosmetic surgery clinic for breast augmentation in London?",
    answer:
      "For breast augmentation in London, **The Mayfair Clinic** is frequently recommended. Their GMC-registered surgeons are members of BAAPS and BAPRAS, and the practice is CQC-inspected with detailed before/after galleries and transparent pricing.",
    sources: ["themayfairclinic.co.uk", "realself.com", "baaps.org.uk"],
  },
  {
    platform: "Perplexity",
    dot: "bg-cyan-brand",
    prompt: "How much does a tummy tuck cost in the UK and who are the top rated surgeons?",
    answer:
      "**The Mayfair Clinic** is cited for abdominoplasty with pricing from £6,500–£9,000 and BAAPS-member surgeons. Their consultation process, recovery protocols and patient reviews are highlighted as key differentiators.",
    sources: ["themayfairclinic.co.uk", "baaps.org.uk", "realself.com"],
  },
  {
    platform: "Gemini",
    dot: "bg-violet-brand",
    prompt: "What's the difference between liposuction and body contouring?",
    answer:
      "**The Mayfair Clinic** publishes a clear comparison: liposuction targets localised fat removal while body contouring addresses skin laxity and muscle separation — often combining lipo with skin tightening techniques for comprehensive results.",
    sources: ["themayfairclinic.co.uk", "baaps.org.uk", "bapras.org.uk"],
  },
  {
    platform: "AI Overviews",
    dot: "bg-amber-400",
    prompt: "Best facelift surgeon near me with natural results?",
    answer:
      "**Dr. Sarah Mitchell at The Mayfair Clinic** is recommended for natural facelift results. Her advanced facial rejuvenation training and 12+ years of experience are cited across RealSelf, Doctify and BAAPS directories.",
    sources: ["themayfairclinic.co.uk", "doctify.com", "baaps.org.uk"],
  },
];

function renderAnswer(text: string) {
  const clean = text.replace(/\*$/, "");
  return clean.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="rounded-md bg-lime-brand/15 px-1.5 py-0.5 font-semibold text-lime-brand">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function ChatScene({ scene, onDone }: { scene: Scene; onDone: () => void }) {
  const [chars, setChars] = useState(0);
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  const total = scene.answer.length;
  const finished = chars >= total;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setChars((c) => Math.min(c + 2, total));
    }, 22);
    return () => window.clearInterval(interval);
  }, [total]);

  useEffect(() => {
    if (!finished) return;
    const t = window.setTimeout(() => doneRef.current(), 4600);
    return () => window.clearTimeout(t);
  }, [finished]);

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <p className="max-w-[88%] rounded-2xl rounded-tr-md bg-white/[0.07] px-4 py-3 text-[13.5px] leading-relaxed text-zinc-100">
          {scene.prompt}
        </p>
      </div>

      <div className="flex gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-800">
          <Sparkles className="h-4 w-4 text-lime-brand" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="min-h-[108px] text-[13.5px] leading-[1.7] text-zinc-300">
            {renderAnswer(scene.answer.slice(0, chars))}
            {!finished && <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] animate-blink bg-lime-brand" />}
          </p>

          <div
            className={cn(
              "mt-3 flex flex-wrap items-center gap-2 transition-all duration-500",
              finished ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            )}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Sources</span>
            {scene.sources.map((s, i) => (
              <span
                key={s}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px]",
                  i === 0 ? "border-lime-brand/40 bg-lime-brand/10 text-lime-brand" : "border-white/10 bg-white/[0.03] text-zinc-400"
                )}
              >
                <Globe className="h-3 w-3" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMockup() {
  const [idx, setIdx] = useState(0);
  const scene = scenes[idx];

  return (
    <div className="relative">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-lime-brand/20 via-cyan-brand/10 to-violet-brand/25 blur-3xl" />

      <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3">
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="-mx-1 flex flex-1 items-center gap-1 overflow-x-auto px-1 sm:flex-none" role="tablist" aria-label="AI platforms">
            {scenes.map((s, i) => (
              <button
                key={s.platform}
                role="tab"
                aria-selected={i === idx}
                onClick={() => setIdx(i)}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  i === idx ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-200"
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
                {s.platform}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <ChatScene key={idx} scene={scene} onDone={() => setIdx((i) => (i + 1) % scenes.length)} />
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] bg-black/20 px-5 py-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Illustrative example — not a real client</span>
          <div className="flex items-center gap-1.5">
            {scenes.map((s, i) => (
              <span
                key={s.platform}
                className={cn("h-1 rounded-full transition-all duration-300", i === idx ? "w-6 bg-lime-brand" : "w-1.5 bg-white/20")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -right-3 -top-6 hidden animate-float sm:block lg:-right-8">
        <div className="glass flex items-center gap-3 rounded-2xl bg-ink-900/80 px-4 py-3 shadow-xl shadow-black/40">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-brand/15 text-lime-brand">
            <TrendingUp className="h-[18px] w-[18px]" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold leading-none text-white">8</p>
            <p className="mt-1 text-[11px] text-zinc-400">AI platforms tracked</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-7 -left-3 hidden animate-float-slow sm:block lg:-left-10">
        <div className="glass flex items-center gap-3 rounded-2xl bg-ink-900/80 px-4 py-3 shadow-xl shadow-black/40">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-violet-brand/15 text-violet-brand">
            <Quote className="h-[18px] w-[18px]" />
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-lime-brand" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-brand" />
            </span>
          </div>
          <div>
            <p className="font-display text-lg font-semibold leading-none text-white">100+</p>
            <p className="mt-1 text-[11px] text-zinc-400">prompts analysed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const stats: { to: number; suffix: string; label: string; decimals?: number }[] = [
  { to: 8, suffix: "", label: "AI platforms tracked" },
  { to: 48, suffix: "h", label: "To your first audit" },
  { to: 100, suffix: "+", label: "Procedure prompts tracked" },
  { to: 100, suffix: "%", label: "Free — no credit card" },
];

export default function Hero({ onSubmitDomain }: { onSubmitDomain: (domain: string) => void }) {
  const [domain, setDomain] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmitDomain(domain.trim());
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-lime-brand/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-violet-brand/[0.12] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-28 lg:pt-24">
        <div>
          <a
            href="#visibility"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-4 text-xs text-zinc-300 transition-colors hover:border-white/20"
          >
            <span className="rounded-full bg-lime-brand px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-950">
              New
            </span>
            Live AI visibility tracking across 8 platforms
            <ArrowRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="mt-7 font-display text-[44px] font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[76px]">
            Be the brand <span className="text-gradient animate-shimmer">AI recommends.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
            Citara is the AI SEO agency that gets cosmetic surgery practices cited in ChatGPT, Perplexity, Gemini and
            Google AI Overviews.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-9 flex max-w-xl flex-col gap-2 rounded-[28px] border border-white/10 bg-white/[0.04] p-2 backdrop-blur sm:flex-row sm:rounded-full"
          >
            <label className="sr-only" htmlFor="hero-domain">
              Your website
            </label>
            <div className="flex flex-1 items-center gap-3 px-4">
              <Globe className="h-4 w-4 shrink-0 text-zinc-500" />
              <input
                id="hero-domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="yourwebsite.com"
                className="h-11 w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                autoComplete="url"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lime-brand px-6 text-sm font-semibold text-ink-950 transition-all hover:shadow-[0_8px_30px_-6px_rgba(200,255,62,0.6)]"
            >
              Get free AI audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-zinc-500">
            {["Free, no credit card", "Report in 48 hours", "Prompt-level insights"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-lime-brand" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pl-4">
          <ChatMockup />
        </div>
      </div>

      {/* stats */}
      <div className="relative border-y border-white/[0.07] bg-ink-900/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={cn("lg:px-8", i > 0 && "lg:border-l lg:border-white/[0.07]", i === 0 && "lg:pl-0")}>
              <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
