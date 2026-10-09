import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

const quotes = [
  {
    body: "We went from never being mentioned to being the first recommendation in ChatGPT for our category. Our sales team now hears “ChatGPT told me about you” on half of their discovery calls.",
    name: "Maya Okonkwo",
    role: "VP Marketing, Flowdesk",
    grad: "from-lime-brand to-cyan-brand",
  },
  {
    body: "Other agencies sent us keyword reports. Citara sent us prompt-level share of voice and a roadmap tied to revenue. It's the first SEO partner our CFO actually understands.",
    name: "Daniel Reyes",
    role: "Founder, Stridewell",
    grad: "from-violet-brand to-cyan-brand",
  },
  {
    body: "The technical audit alone found issues that were blocking AI crawlers from our best content. Fixed in a week. Visible in AI Overviews within a month.",
    name: "Priya Raman",
    role: "Head of Growth, Lexora",
    grad: "from-amber-300 to-lime-brand",
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Client love" title="Marketing leaders who've made the shift" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7">
                <div>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-lime-brand text-lime-brand" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-[15.5px] leading-relaxed text-zinc-200">{q.body}</blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3.5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${q.grad} font-display text-sm font-bold text-ink-950`}
                  >
                    {q.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{q.name}</span>
                    <span className="block text-[13px] text-zinc-500">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
