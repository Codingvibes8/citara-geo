import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Generative Engine Optimization (GEO) for Cosmetic Surgery — Citara",
  description:
    "Generative Engine Optimization maps the exact prompts your patients ask AI engines, then engineers your brand, content and citations to be the recommended answer. The core of AI SEO.",
  alternates: {
    canonical: "/services/generative-engine-optimization",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Generative Engine Optimization", href: "/services/generative-engine-optimization" },
];

const jsonLd = {
  name: "Generative Engine Optimization (GEO) for Cosmetic Surgery",
  description:
    "Core service: map buyer prompts, engineer brand/pages/footprint to be the answer across ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  url: `${config.siteUrl}/services/generative-engine-optimization`,
  provider: {
    "@type": "Organization",
    name: "Citara",
    url: config.siteUrl,
  },
};

export default function GenerativeEngineOptimizationPage() {
  return (
    <>
      <JsonLd type="Service" data={jsonLd} />
      <ContentPage
        title="Generative Engine Optimization for Cosmetic Surgery"
        description="The core service: map the exact prompts your patients ask, then engineer your brand, pages and footprint to be the answer."
        jsonLd={jsonLd}
        jsonLdType="Service"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What is Generative Engine Optimization?</h2>
          <p className="mt-4">
            Generative Engine Optimization (GEO) is the practice of making your cosmetic surgery practice discoverable,
            citable and recommendable by AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Overviews, Claude and
            others. Unlike traditional SEO, which optimizes for ranked lists of links, GEO optimizes for a single
            synthesized answer.
          </p>
          <p className="mt-4">
            When a patient asks <em>&quot;Who is the best breast augmentation surgeon in London?&quot;</em> or{" "}
            <em>&quot;How much does a facelift cost?&quot;</em>, the model generates a response from sources it has crawled
            and learned from. GEO ensures your practice is the source it finds, trusts and names.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">How we implement GEO for cosmetic surgery practices</h2>
          <p className="mt-4">
            Our GEO engagement follows a structured process designed for the specifics of medical aesthetics — high-value
            procedures, long buying cycles, and patients who increasingly research providers through AI before ever
            visiting a website.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">1. Prompt mapping</h3>
              <p className="mt-2">
                We identify the exact prompts your potential patients use when asking AI engines about your procedures.
                These differ significantly from traditional search keywords. Patients ask complete questions:{" "}
                <em>&quot;What is the difference between a mini facelift and a full facelift?&quot;</em>,{" "}
                <em>&quot;How long do breast implants last?&quot;</em>,{" "}
                <em>&quot;What is the best age to get a tummy tuck?&quot;</em>.
              </p>
              <p className="mt-2">
                We map 100–300 prompts per engagement, categorised by funnel stage — awareness (&quot;what is a
                bodyskin?&quot;), consideration (&quot;VASER vs traditional liposuction&quot;), and decision (&quot;best
                BAAPS surgeon for breast uplift in Manchester&quot;).
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">2. Brand entity engineering</h3>
              <p className="mt-2">
                AI models identify practices as named entities. We ensure your practice has a clear, consistent entity
                footprint across your website, Google Business Profile, RealSelf, Doctify, Companies House, BAAPS/BAPRAS
                listings and any press coverage. Inconsistent naming — different practice names, abbreviations, or
                fragmented surgeon profiles — dilutes entity recognition.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">3. Answer architecture</h3>
              <p className="mt-2">
                For each mapped prompt, we engineer a page or section that provides the direct answer in the first 40
                words, supported by structured data, surgeon credentials and original data. The goal is for the model to
                find a complete, citable answer on your domain — not just marketing copy.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">4. Citation footprint expansion</h3>
              <p className="mt-2">
                Models cross-reference multiple sources. We build and strengthen your presence on the third-party
                platforms that LLMs actually cite for medical queries — RealSelf, Doctify, Healthgrades, BAAPS, medical
                publications, and professional forums. A practice mentioned on five trusted sources is far more likely to
                be recommended than one that exists only on its own website.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">5. Measurement and iteration</h3>
              <p className="mt-2">
                We track your share of voice across engines weekly — how often you are mentioned, in what position, and for
                which prompts. We correlate this with consultation enquiries and adjust strategy based on what the models
                are actually rewarding.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">GEO vs traditional SEO for cosmetic surgery</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-left">
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Factor</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Traditional SEO</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">GEO (AI SEO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                <tr>
                  <td className="px-5 py-3.5">Patient intent format</td>
                  <td className="px-5 py-3.5">Keywords: &quot;breast augmentation London&quot;</td>
                  <td className="px-5 py-3.5">Prompts: &quot;Who is the best breast surgeon in London?&quot;</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">Output format</td>
                  <td className="px-5 py-3.5">Ranked list of 10 links</td>
                  <td className="px-5 py-3.5">Single synthesized answer naming 1–2 practices</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">Key signal</td>
                  <td className="px-5 py-3.5">Backlinks, domain authority, technical health</td>
                  <td className="px-5 py-3.5">Entity clarity, third-party consensus, answer-readiness, schema</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">Content that wins</td>
                  <td className="px-5 py-3.5">Comprehensive, keyword-optimised pages</td>
                  <td className="px-5 py-3.5">Direct answers in first 40 words with specific data</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">Success metric</td>
                  <td className="px-5 py-3.5">Google position, organic traffic</td>
                  <td className="px-5 py-3.5">Share of voice across AI engines, AI citations</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">Patient behaviour</td>
                  <td className="px-5 py-3.5">Clicks 3–7 links, visits multiple practice sites</td>
                  <td className="px-5 py-3.5">Accepts AI recommendation, visits one practice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What cosmetic surgery practices can expect</h2>
          <p className="mt-4">
            GEO is not an overnight fix — models update periodically and crawl fresh content continuously. However, the
            compounding nature of entity footprint and citation building means early investment creates durable advantage.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Weeks 1–4:</strong> Technical fixes (schema, entity consistency, llms.txt) can improve crawler access immediately</li>
            <li><strong className="text-zinc-200">Weeks 4–12:</strong> New answer-first content begins appearing in model responses for targeted prompts</li>
            <li><strong className="text-zinc-200">Months 3–6:</strong> Citation footprint builds; share of voice measurably increases across engines</li>
            <li><strong className="text-zinc-200">Months 6–12:</strong> Entity cluster strengthens; practice becomes a &quot;known&quot; entity for procedure + location queries</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium text-zinc-200">Is GEO the same as traditional SEO?</h3>
              <p className="mt-2">
                No. Traditional SEO targets Google&apos;s ranked link results. GEO targets the AI-generated answer layer
                that increasingly sits above or replaces those results. The disciplines share fundamentals — quality content,
                technical health, authority signals — but the optimisation targets differ significantly.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-zinc-200">Which AI engines do you optimise for?</h3>
              <p className="mt-2">
                We track and optimise for ChatGPT, Perplexity, Gemini, Google AI Overviews, and Claude — the engines UK
                patients most commonly use for medical queries. The specific mix is weighted based on your practice&apos;s
                location, patient demographics and procedure mix.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-zinc-200">Can you guarantee we will be mentioned by ChatGPT?</h3>
              <p className="mt-2">
                No honest provider can. These models are probabilistic and their outputs vary by query phrasing, user
                context and model updates. What we commit to is a structured program with transparent weekly tracking and
                defined visibility milestones in your contract.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="text-lg font-medium text-zinc-200">
            Ready to see how AI engines currently see your practice?{" "}
            <a href="/#audit" className="text-lime-brand hover:underline">
              Request a free AI visibility audit
            </a>{" "}
            — we will show you exactly where you stand.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
