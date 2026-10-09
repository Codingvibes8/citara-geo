const platforms = [
  { name: "ChatGPT", color: "#34d399" },
  { name: "Perplexity", color: "#4be1ec" },
  { name: "Google AI Overviews", color: "#fbbf24" },
  { name: "Gemini", color: "#8b7bff" },
  { name: "Claude", color: "#f59e7b" },
  { name: "Microsoft Copilot", color: "#60a5fa" },
  { name: "Grok", color: "#e5e7eb" },
  { name: "Meta AI", color: "#818cf8" },
  { name: "DeepSeek", color: "#38bdf8" },
];

export default function PlatformStrip() {
  const loop = [...platforms, ...platforms];

  return (
    <section aria-label="AI platforms we optimize for" className="relative py-14">
      <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
        We get you recommended on every answer engine
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-4 pr-4">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-ink-950"
                style={{ backgroundColor: p.color }}
              >
                {p.name[0]}
              </span>
              <span className="whitespace-nowrap font-display text-lg font-medium text-zinc-200">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
