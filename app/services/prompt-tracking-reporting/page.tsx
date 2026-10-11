import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Prompt Tracking & Reporting for AI Search — Citara",
  description:
    "Weekly share-of-voice across AI engines, tied to pipeline — not vanity metrics. Track exactly how often your practice is recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  alternates: {
    canonical: "/services/prompt-tracking-reporting",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Prompt Tracking & Reporting", href: "/services/prompt-tracking-reporting" },
];

const jsonLd = {
  name: "Prompt Tracking & Reporting for AI Search",
  description:
    "Weekly share-of-voice across AI engines, tied to pipeline — not vanity metrics.",
  url: `${config.siteUrl}/services/prompt-tracking-reporting`,
  provider: {
    "@type": "Organization",
    name: "Citara",
    url: config.siteUrl,
  },
};

export default function PromptTrackingReportingPage() {
  return (
    <>
      <JsonLd type="Service" data={jsonLd} />
      <ContentPage
        title="Prompt Tracking & Reporting for AI Search"
        description="Weekly share-of-voice across AI engines, tied to pipeline — not vanity metrics. Track exactly how often your practice is recommended."
        jsonLd={jsonLd}
        jsonLdType="Service"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What is prompt tracking?</h2>
          <p className="mt-4">
            Prompt tracking is the practice of systematically querying AI engines with the exact prompts your potential
            patients use, and measuring how often your practice is mentioned, in what position, and with what context. It
            is the AI search equivalent of rank tracking in traditional SEO.
          </p>
          <p className="mt-4">
            Unlike traditional rank tracking, which measures a single URL&apos;s position for a keyword, prompt tracking
            measures entity-level visibility across a dynamic, non-deterministic output. The same prompt can produce
            different answers on different days, for different users, or across different engines.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What we track</h2>
          <p className="mt-4">
            Our prompt tracking covers the full spectrum of AI engines and query types relevant to cosmetic surgery:
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Engines monitored</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>ChatGPT (OpenAI)</li>
                <li>Perplexity</li>
                <li>Gemini (Google)</li>
                <li>Google AI Overviews</li>
                <li>Claude (Anthropic)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Query categories</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong className="text-zinc-200">Recommendation queries:</strong> &quot;Best breast augmentation surgeon in [city]&quot;</li>
                <li><strong className="text-zinc-200">Cost queries:</strong> &quot;How much does a facelift cost in the UK?&quot;</li>
                <li><strong className="text-zinc-200">Recovery queries:</strong> &quot;Tummy tuck recovery timeline&quot;</li>
                <li><strong className="text-zinc-200">Comparison queries:</strong> &quot;VASER vs traditional liposuction&quot;</li>
                <li><strong className="text-zinc-200">Candidacy queries:</strong> &quot;Am I a candidate for a breast lift?&quot;</li>
                <li><strong className="text-zinc-200">Location queries:</strong> &quot;Cosmetic surgeon near me&quot;</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Metrics captured</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong className="text-zinc-200">Mention rate:</strong> Percentage of queries where your practice is mentioned</li>
                <li><strong className="text-zinc-200">Position:</strong> Where in the answer your practice appears (first, second, not mentioned)</li>
                <li><strong className="text-zinc-200">Share of voice:</strong> Your mentions as a percentage of total practice mentions across all competitors</li>
                <li><strong className="text-zinc-200">Context:</strong> How your practice is described — credentials, specialities, patient feedback</li>
                <li><strong className="text-zinc-200">Trend:</strong> Week-over-week and month-over-month change in all metrics</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">How prompt tracking works</h2>
          <p className="mt-4">
            Our tracking process combines automated querying with human analysis:
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">1</span>
              <div>
                <h3 className="font-medium text-zinc-200">Prompt library construction</h3>
                <p className="mt-1">We build a library of 100–300 prompts specific to your practice, procedures, location and patient demographics — based on the prompt mapping phase of our GEO engagement.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">2</span>
              <div>
                <h3 className="font-medium text-zinc-200">Automated querying</h3>
                <p className="mt-1">We query each engine with each prompt on a regular cadence, capturing the full response, your practice&apos;s position, and the competitive landscape.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">3</span>
              <div>
                <h3 className="font-medium text-zinc-200">Human analysis</h3>
                <p className="mt-1">AI-generated answers require human interpretation. Our team analyses each response for accuracy, context and competitive dynamics — identifying not just whether you are mentioned, but how.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">4</span>
              <div>
                <h3 className="font-medium text-zinc-200">Reporting and recommendations</h3>
                <p className="mt-1">Weekly reports show your visibility trends, competitive positioning and specific actions to improve. Monthly reports tie visibility metrics to consultation enquiries and pipeline.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What a weekly report includes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Share of voice dashboard</strong> — your visibility across all tracked prompts and engines, with week-over-week trend</li>
            <li><strong className="text-zinc-200">Engine-by-engine breakdown</strong> — how each engine currently sees your practice vs. competitors</li>
            <li><strong className="text-zinc-200">Prompt-level detail</strong> — for each tracked prompt, whether you are mentioned, your position, and the competitive set</li>
            <li><strong className="text-zinc-200">Competitive intelligence</strong> — how your key competitors are performing across the same prompts</li>
            <li><strong className="text-zinc-200">Action items</strong> — specific, prioritised recommendations based on the week&apos;s findings</li>
            <li><strong className="text-zinc-200">Pipeline correlation</strong> — where possible, correlation between AI visibility changes and consultation enquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Why this matters for cosmetic surgery practices</h2>
          <p className="mt-4">
            Cosmetic surgery is a high-value, long-consideration-cycle purchase. Patients typically research for weeks
            or months before booking a consultation. AI engines are increasingly the first stop in that research process.
            Practices that can measure and improve their AI visibility have a significant advantage in reaching patients
            earlier in their decision journey — before they have already been influenced by a competitor&apos;s AI
            recommendation.
          </p>
          <p className="mt-4">
            Prompt tracking provides the measurement framework that makes AI SEO accountable — tying investment in GEO,
            content, citations and technical SEO to a concrete, trackable outcome: how often AI engines recommend your
            practice.
          </p>
        </section>

        <section>
          <p className="text-lg font-medium text-zinc-200">
            See how your practice currently performs across AI engines —{" "}
            <a href="/#audit" className="text-lime-brand hover:underline">
              request a free AI visibility audit
            </a>{" "}
            and we will show you your current share of voice.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
