import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

const benefits = [
  {
    title: "Priority onboarding",
    description: "Founding clients are onboarded first, with a dedicated strategist and a tailored 90-day roadmap from day one.",
  },
  {
    title: "Founding rate locked in",
    description: "The rate you sign up at is locked for the duration of your engagement — even as pricing increases for later clients.",
  },
  {
    title: "Direct senior access",
    description: "Work directly with our senior strategists and founding team. No account managers, no hand-offs, no junior staff learning on your budget.",
  },
  {
    title: "Quarterly strategy sessions",
    description: "In-depth quarterly reviews where we walk through your visibility data, competitor movements and the next quarter's priorities together.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Founding client program"
          title={
            <>
              Be one of the <span className="text-gradient">first practices</span> we work with
            </>
          }
          description="We're selecting a small number of cosmetic surgery practices for our founding client program. In exchange for your feedback and a candid reference at the end of the engagement, you get priority access, a locked-in founding rate and direct access to our senior team."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-brand/15 text-lime-brand">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-lime-brand/20 bg-lime-brand/[0.06] p-8 text-center sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-brand text-ink-950">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Applications are reviewed weekly
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                We're intentionally keeping the founding program small so every practice gets senior attention. Request a free audit to start the conversation — there's no obligation.
              </p>
            </div>
            <a
              href="#audit"
              className="group inline-flex items-center gap-2 rounded-full bg-lime-brand px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:shadow-[0_8px_30px_-6px_rgba(200,255,62,0.55)]"
            >
              Apply for the founding program
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
