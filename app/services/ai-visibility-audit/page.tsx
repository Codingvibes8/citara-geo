import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Visibility Audit for Cosmetic Surgery — Citara",
  description:
    "A full diagnostic of how AI models see, understand and rank your cosmetic surgery practice. Free audit covering entity clarity, citation footprint, crawl accessibility and answer-readiness.",
  alternates: {
    canonical: "/services/ai-visibility-audit",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "AI Visibility Audit", href: "/services/ai-visibility-audit" },
];

const jsonLd = {
  name: "AI Visibility Audit for Cosmetic Surgery",
  description:
    "Diagnostic of how AI models see, understand and rank your brand. Covers entity clarity, citation footprint, crawl accessibility and answer-readiness.",
  url: `${config.siteUrl}/services/ai-visibility-audit`,
  provider: {
    "@type": "Organization",
    name: "Citara",
    url: config.siteUrl,
  },
};

export default function AiVisibilityAuditPage() {
  return (
    <>
      <JsonLd type="Service" data={jsonLd} />
      <ContentPage
        title="AI Visibility Audit for Cosmetic Surgery Practices"
        description="A full diagnostic of how AI models see, understand and rank your brand today — with a clear action plan for improvement."
        jsonLd={jsonLd}
        jsonLdType="Service"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What is an AI Visibility Audit?</h2>
          <p className="mt-4">
            An AI Visibility Audit is a structured diagnostic that measures how your cosmetic surgery practice currently
            appears to AI answer engines — ChatGPT, Perplexity, Gemini and Google AI Overviews. It identifies the specific
            gaps preventing your practice from being discovered, cited and recommended for high-value procedure queries.
          </p>
          <p className="mt-4">
            Unlike a traditional SEO audit, which measures backlinks, rankings and technical health against Google&apos;s
            algorithm, an AI Visibility Audit measures the signals that matter for generative engine outputs: entity
            clarity, citation footprint, answer-readiness and machine-parseable content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What the audit covers</h2>
          <p className="mt-4">
            Our free audit evaluates your practice across four dimensions. Each is scored and benchmarked against
            comparable UK cosmetic surgery practices.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">1. Entity &amp; brand clarity</h3>
              <p className="mt-2">
                Can AI models identify your practice as a distinct, credible entity? We assess naming consistency across
                your website, Google Business Profile, RealSelf, Doctify, Companies House and professional body listings.
                We check whether surgeon profiles are complete, credential-rich and consistently linked to the practice
                entity.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Typical finding: Practices often have fragmented naming, missing GMC numbers on surgeon profiles, or
                inconsistent practice names across platforms — all of which reduce entity recognition by AI models.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">2. Citation footprint</h3>
              <p className="mt-2">
                Where do AI models encounter your practice&apos;s name? We map your presence across the platforms that
                LLMs actually cite for medical queries — RealSelf, Doctify, Healthgrades, BAAPS, medical publications,
                patient forums and press. We identify which platforms are missing and which have incomplete or outdated
                profiles.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Typical finding: Practices often have strong Google reviews but zero presence on RealSelf or Doctify —
                two of the most-cited platforms for cosmetic surgery AI queries.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">3. Crawl accessibility</h3>
              <p className="mt-2">
                Can AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) access and parse your content? We check
                robots.txt configurations, llms.txt presence, structured data markup, page renderability for headless
                browsers, and whether key content is hidden behind JavaScript or login walls.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Typical finding: Many practices have no llms.txt file, no structured data, or robots.txt configurations
                that inadvertently block AI crawlers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">4. Answer-readiness</h3>
              <p className="mt-2">
                Do your pages contain the direct, specific answers that AI models extract and cite? We sample your
                top procedure pages and evaluate whether they answer patient questions in the first 40 words with concrete
                data — or whether they lead with marketing copy that models cannot use.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Typical finding: Procedure pages typically lead with brand language (&quot;luxury&quot;,
                &quot;bespoke&quot;, &quot;world-class&quot;) rather than the specific data patients and AI models are
                looking for.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">How the audit works</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">1</span>
              <div>
                <h3 className="font-medium text-zinc-200">Submit your details</h3>
                <p className="mt-1">Tell us your practice name, website URL and location via the audit request form on our homepage.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">2</span>
              <div>
                <h3 className="font-medium text-zinc-200">We run the diagnostic</h3>
                <p className="mt-1">Over 5–7 days, we query AI engines with your target prompts, crawl your site, and map your citation footprint.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">3</span>
              <div>
                <h3 className="font-medium text-zinc-200">You receive your report</h3>
                <p className="mt-1">A clear, prioritised report showing your current visibility, specific gaps, and a recommended action plan.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What you receive</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Visibility score</strong> — a composite score across all four dimensions, benchmarked against comparable practices</li>
            <li><strong className="text-zinc-200">Engine-by-engine breakdown</strong> — how ChatGPT, Perplexity, Gemini and Google AI Overviews currently see your practice</li>
            <li><strong className="text-zinc-200">Prompt-level results</strong> — for each of your target queries, whether you are currently cited and by which engines</li>
            <li><strong className="text-zinc-200">Prioritised action plan</strong> — the specific fixes that will have the greatest impact on AI visibility, ordered by effort-to-impact ratio</li>
            <li><strong className="text-zinc-200">Competitive context</strong> — how your visibility compares to up to three competitor practices we include in the analysis</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Who is the audit for?</h2>
          <p className="mt-4">
            The AI Visibility Audit is designed for cosmetic surgery practices — from single-surgeon clinics to
            multi-location groups — that want to understand their current position in AI search. It is particularly
            valuable if:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>You have invested in traditional SEO but are unsure whether it is translating to AI visibility</li>
            <li>You are losing patients to competitors who seem to be &quot;everywhere&quot; in AI answers</li>
            <li>You are planning a content or marketing investment and want to baseline your starting position</li>
            <li>You want to understand what AI models currently say about your practice when patients ask for recommendations</li>
          </ul>
        </section>

        <section>
          <p className="text-lg font-medium text-zinc-200">
            Request your free AI visibility audit{" "}
            <a href="/#audit" className="text-lime-brand hover:underline">
              on our homepage
            </a>{" "}
            — no commitment required.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
