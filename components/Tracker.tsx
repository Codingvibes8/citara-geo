"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Eye, Hash, Quote, SmilePlus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/utils";

type PlatformKey = "all" | "chatgpt" | "perplexity" | "gemini" | "aio" | "claude";

type PlatformData = {
  label: string;
  sov: number[];
  mentions: number;
  position: number;
  sentiment: number;
  trend: number[];
};

const brands = ["Your brand", "Competitor A", "Competitor B", "Competitor C", "Competitor D"];

const data: Record<PlatformKey, PlatformData> = {
  all: {
    label: "All engines",
    sov: [38, 24, 18, 12, 8],
    mentions: 1284,
    position: 1.8,
    sentiment: 92,
    trend: [9, 11, 12, 15, 17, 19, 24, 27, 31, 34, 36, 38],
  },
  chatgpt: {
    label: "ChatGPT",
    sov: [44, 22, 16, 10, 8],
    mentions: 512,
    position: 1.5,
    sentiment: 94,
    trend: [10, 13, 15, 19, 22, 27, 31, 35, 38, 41, 43, 44],
  },
  perplexity: {
    label: "Perplexity",
    sov: [41, 26, 15, 11, 7],
    mentions: 296,
    position: 1.7,
    sentiment: 91,
    trend: [8, 10, 13, 15, 18, 22, 26, 30, 33, 37, 40, 41],
  },
  gemini: {
    label: "Gemini",
    sov: [33, 28, 21, 11, 7],
    mentions: 188,
    position: 2.1,
    sentiment: 89,
    trend: [6, 8, 9, 11, 13, 16, 19, 22, 25, 28, 31, 33],
  },
  aio: {
    label: "Google AI Overviews",
    sov: [36, 25, 19, 12, 8],
    mentions: 241,
    position: 1.9,
    sentiment: 90,
    trend: [12, 12, 14, 16, 18, 20, 23, 26, 29, 32, 34, 36],
  },
  claude: {
    label: "Claude",
    sov: [31, 24, 22, 14, 9],
    mentions: 147,
    position: 2.3,
    sentiment: 93,
    trend: [4, 5, 7, 9, 12, 14, 17, 21, 24, 27, 29, 31],
  },
};

const order: PlatformKey[] = ["all", "chatgpt", "perplexity", "gemini", "aio", "claude"];

function AnimatedNumber({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    const duration = 700;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = from + (value - from) * eased;
      fromRef.current = v;
      setDisplay(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <>
      {display.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </>
  );
}

function buildPath(values: number[], w: number, h: number, pad = 12) {
  const max = 50;
  const pts = values.map((v, i) => [pad + (i / (values.length - 1)) * (w - pad * 2), h - pad - (v / max) * (h - pad * 2)]);
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  const last = pts[pts.length - 1];
  return { line: d, area: `${d} L ${last[0]},${h} L ${pts[0][0]},${h} Z`, last };
}

function TrendChart({ values, animKey }: { values: number[]; animKey: string }) {
  const W = 600;
  const H = 200;
  const { line, area, last } = useMemo(() => buildPath(values, W, H), [values]);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Share of voice over 12 weeks">
      <defs>
        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c8ff3e" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c8ff3e" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 6" />
      ))}
      <g key={animKey}>
        <path d={area} fill="url(#trendFill)" className="animate-[fade-in_0.9s_ease-out_both]" />
        <path
          d={line}
          fill="none"
          stroke="#c8ff3e"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          className="draw-line"
        />
        <circle cx={last[0]} cy={last[1]} r="5" fill="#c8ff3e" className="animate-[fade-in_0.4s_ease-out_1s_both]" />
        <circle
          cx={last[0]}
          cy={last[1]}
          r="11"
          fill="none"
          stroke="#c8ff3e"
          strokeOpacity="0.35"
          className="animate-[fade-in_0.4s_ease-out_1s_both]"
        />
      </g>
    </svg>
  );
}

export default function Tracker() {
  const [active, setActive] = useState<PlatformKey>("all");
  const d = data[active];

  const tiles = [
    { icon: <Quote className="h-4 w-4" />, label: "Brand mentions", value: d.mentions, decimals: 0, suffix: "" },
    { icon: <Hash className="h-4 w-4" />, label: "Avg. position", value: d.position, decimals: 1, suffix: "" },
    { icon: <SmilePlus className="h-4 w-4" />, label: "Positive sentiment", value: d.sentiment, decimals: 0, suffix: "%" },
  ];

  return (
    <section id="visibility" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[600px] -translate-y-1/2 bg-gradient-to-b from-transparent via-violet-brand/[0.05] to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:pt-6">
          <Eyebrow>Visibility tracking</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            See exactly where AI mentions you.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Every client gets a live dashboard tracking hundreds of buyer prompts across every major engine. See your
            share of voice, your competitors and the sources models pull from.
          </p>

          <div className="mt-8" role="tablist" aria-label="Select AI platform">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">Explore by platform</p>
            <div className="flex flex-wrap gap-2">
              {order.map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={active === k}
                  onClick={() => setActive(k)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    active === k
                      ? "border-lime-brand bg-lime-brand text-ink-950"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:text-white"
                  )}
                >
                  {data[k].label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="#audit"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-lime-brand"
          >
            See your own baseline
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <Eye className="h-4 w-4 text-lime-brand" />
                <span className="text-sm font-medium text-white">AI Visibility · {d.label}</span>
              </div>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-lime-brand" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-brand" />
                </span>
                Live
              </span>
            </div>

            <div className="grid gap-px bg-white/[0.07] sm:grid-cols-3">
              {tiles.map((t) => (
                <div key={t.label} className="bg-ink-900/90 px-5 py-5 sm:px-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="text-zinc-400">{t.icon}</span>
                    {t.label}
                  </div>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-white">
                    <AnimatedNumber value={t.value} decimals={t.decimals} suffix={t.suffix} />
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 p-5 sm:p-6 xl:grid-cols-2">
              {/* trend */}
              <div>
                <div className="mb-3 flex items-baseline justify-between">
                  <p className="text-sm font-medium text-white">Your share of voice</p>
                  <p className="font-mono text-[11px] text-zinc-500">Last 12 weeks</p>
                </div>
                <TrendChart values={d.trend} animKey={active} />
                <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                  <span>Wk 1</span>
                  <span>Wk 6</span>
                  <span>Wk 12</span>
                </div>
              </div>

              {/* bars */}
              <div>
                <div className="mb-4 flex items-baseline justify-between">
                  <p className="text-sm font-medium text-white">Share of voice vs. competitors</p>
                  <p className="font-mono text-[11px] text-zinc-500">%</p>
                </div>
                <div className="space-y-3.5">
                  {brands.map((b, i) => (
                    <div key={b}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className={cn(i === 0 ? "font-semibold text-lime-brand" : "text-zinc-400")}>{b}</span>
                        <span className="font-mono text-zinc-300">{d.sov[i]}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className={cn(
                            "h-full rounded-full transition-[width] duration-700 ease-out",
                            i === 0 ? "bg-lime-brand shadow-[0_0_14px_rgba(200,255,62,0.6)]" : "bg-zinc-600/70"
                          )}
                          style={{ width: `${(d.sov[i] / 50) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
