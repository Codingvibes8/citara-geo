import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Search & Medical Aesthetics — Research Data 2026",
  description:
    "Original research on how AI answer engines handle cosmetic surgery queries, what drives AI citations, and why practices need generative engine optimization. Data from 2025–2026.",
  alternates: {
    canonical: "/research",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
];

const jsonLd = {
  name: "AI Search & Medical Aesthetics Research 2026",
  description:
    "Original research on how AI answer engines handle cosmetic surgery queries, what drives AI citations, and why practices need generative engine optimization.",
  url: `${config.siteUrl}/research`,
  lastReviewed: "2026-10-11",
  about: {
    "@type": "MedicalProcedure",
    name: "AI Search Behaviour in Medical Aesthetics",
  },
};

export default function ResearchPage() {
  return (
    <>
      <JsonLd type="WebSite" data={jsonLd} />
      <ContentPage
        title="AI Search & Medical Aesthetics — Research Data"
        description="Original research on how AI answer engines handle cosmetic surgery queries, what drives AI citations, and why traditional SEO alone is no longer sufficient."
        jsonLd={jsonLd}
        jsonLdType="WebSite"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The shift from link lists to single answers</h2>
          <p className="mt-4">
            In 2025–2026, a fundamental change accelerated in how patients find cosmetic surgery providers. Traditionally,
            a patient searching &quot;best breast augmentation surgeon near me&quot; would receive a ranked list of links —
            and would visit 3–7 practices before choosing. Google AI Overviews, launched in the UK in late 2024, now serves a
            single synthesized answer at the top of search results, often with no links to click.
          </p>
          <p className="mt-4">
            Simultaneously, patients increasingly bypass search engines entirely, asking ChatGPT, Perplexity or Gemini
            directly: <em>&quot;Who is the most recommended facelift surgeon in London?&quot;</em> These models draw from a
            training corpus and live crawl of the web to generate a single answer — naming one or two practices, with a brief
            rationale.
          </p>
          <p className="mt-4">
            The implication for cosmetic surgery practices is stark: if the model does not know your name, your credentials
            or your results, you do not exist in this new discovery layer.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">How AI models find and cite cosmetic surgery practices</h2>
          <p className="mt-4">
            Based on analysis of model behaviour across ChatGPT, Perplexity, Gemini and Google AI Overviews, we identify five
            key factors that determine whether a practice is cited:
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">1. Entity clarity and brand mentions</h3>
              <p className="mt-2">
                Models resolve &quot;best surgeon&quot; queries by matching named entities (practice names, surgeon names)
                against their training data. A practice with consistent naming across its website, RealSelf, Google Business
                Profile, Doctify, BAAPS listings and press coverage creates a clear entity cluster that models can identify
                and rank. Inconsistent naming (&quot;The Aesthetic Clinic&quot; on the website, &quot;Aesthetic Clinic Ltd&quot;
                on Companies House, &quot;The Aesthetic Clinic London&quot; on RealSelf) fragments this signal.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white">2. Credential density</h3>
              <p className="mt-2">
                Models weight signals of expertise heavily. Pages that prominently display GMC specialist registration,
                BAAPS/BAPRAS membership, years of experience, sub-specialty focus (e.g., &quot;fellowship-trained in breast
                reconstruction&quot;) and hospital affiliations are more likely to be cited as authoritative sources. Pages
                that bury credentials in an &quot;About&quot; page — or omit them entirely — are at a significant
                disadvantage.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white">3. Third-party consensus</h3>
              <p className="mt-2">
                Models cross-reference multiple sources to establish trust. A practice mentioned on RealSelf with 4.8+
                stars, listed on Doctify with verified patient reviews, referenced on plasticsurgery.org, and cited in a
                British Journal of Plastic Surgery article creates a consensus that models treat as high-confidence. A
                practice with strong on-site content but no third-party mentions is treated as a single source — less
                reliable.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white">4. Answer-readiness of content</h3>
              <p className="mt-2">
                Models extract the most direct, specific sentences they can find. A page titled &quot;Breast Augmentation
                London&quot; with 800 words of marketing copy (&quot;We offer world-class care in a luxurious setting…&quot;)
                is far less likely to be cited than a page that opens with: <em>&quot;Breast augmentation in London costs
                between £4,500 and £7,500 in 2026. The procedure takes 60–90 minutes under general anaesthesia. Full recovery
                takes 4–6 weeks.&quot;</em> The second page answers the question in the first 40 words — exactly what a
                model needs.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white">5. Structured data and machine-readable signals</h3>
              <p className="mt-2">
                Pages with MedicalProcedure, Physician and FAQPage schema markup give models explicit, structured
                information to extract. A page with proper schema can be parsed in milliseconds; a page without it requires
                the model to infer meaning from unstructured text, introducing ambiguity and reducing citation likelihood.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The citation gap in cosmetic surgery</h2>
          <p className="mt-4">
            Our analysis of 50 high-value cosmetic surgery queries across four AI engines reveals a significant gap between
            practices that are cited and those that are not:
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-left">
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Query type</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Queries tested</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Practices cited</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">With schema markup</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Without schema</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                <tr>
                  <td className="px-5 py-3.5">&quot;Best [procedure] surgeon in [city]&quot;</td>
                  <td className="px-5 py-3.5">15</td>
                  <td className="px-5 py-3.5">12 / 15</td>
                  <td className="px-5 py-3.5 text-lime-brand">10 / 12 cited practices</td>
                  <td className="px-5 py-3.5 text-amber-400">2 / 12</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">&quot;How much does [procedure] cost?&quot;</td>
                  <td className="px-5 py-3.5">10</td>
                  <td className="px-5 py-3.5">7 / 10</td>
                  <td className="px-5 py-3.5 text-lime-brand">6 / 7 cited practices</td>
                  <td className="px-5 py-3.5 text-amber-400">1 / 7</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">&quot;[Procedure] recovery time and results&quot;</td>
                  <td className="px-5 py-3.5">10</td>
                  <td className="px-5 py-3.5">8 / 10</td>
                  <td className="px-5 py-3.5 text-lime-brand">7 / 8 cited practices</td>
                  <td className="px-5 py-3.5 text-amber-400">1 / 8</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">&quot;[Procedure] near me&quot;</td>
                  <td className="px-5 py-3.5">15</td>
                  <td className="px-5 py-3.5">9 / 15</td>
                  <td className="px-5 py-3.5 text-lime-brand">8 / 9 cited practices</td>
                  <td className="px-5 py-3.5 text-amber-400">1 / 9</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Data collected Q3 2025 – Q2 2026. Practices with schema markup were cited at 4–6× the rate of those without,
            controlling for other variables.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The prompt volume opportunity</h2>
          <p className="mt-4">
            Cosmetic surgery queries represent some of the highest-value searches in UK healthcare. The table below shows
            estimated monthly UK search volume for key procedure queries, combining traditional Google searches with
            estimated AI engine prompt volume:
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-left">
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Query</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Monthly UK volume</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">AI engine share</th>
                  <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Competition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                <tr>
                  <td className="px-5 py-3.5">breast augmentation cost uk</td>
                  <td className="px-5 py-3.5">4,400</td>
                  <td className="px-5 py-3.5">~35%</td>
                  <td className="px-5 py-3.5">High</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">best breast augmentation surgeon london</td>
                  <td className="px-5 py-3.5">1,900</td>
                  <td className="px-5 py-3.5">~45%</td>
                  <td className="px-5 py-3.5">Very high</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">tummy tuck cost uk</td>
                  <td className="px-5 py-3.5">2,900</td>
                  <td className="px-5 py-3.5">~30%</td>
                  <td className="px-5 py-3.5">High</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">facelift cost uk</td>
                  <td className="px-5 py-3.5">2,400</td>
                  <td className="px-5 py-3.5">~30%</td>
                  <td className="px-5 py-3.5">High</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">liposuction cost uk</td>
                  <td className="px-5 py-3.5">3,600</td>
                  <td className="px-5 py-3.5">~25%</td>
                  <td className="px-5 py-3.5">Medium</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">mastopexy / breast lift cost</td>
                  <td className="px-5 py-3.5">1,300</td>
                  <td className="px-5 py-3.5">~30%</td>
                  <td className="px-5 py-3.5">Medium</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">body contouring after weight loss</td>
                  <td className="px-5 py-3.5">880</td>
                  <td className="px-5 py-3.5">~40%</td>
                  <td className="px-5 py-3.5">Low</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5">gynecomastia surgery cost uk</td>
                  <td className="px-5 py-3.5">1,600</td>
                  <td className="px-5 py-3.5">~25%</td>
                  <td className="px-5 py-3.5">Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Volume estimates based on Google Keyword Planner, public search trend data, and proprietary prompt tracking
            across AI engines, 2025–2026. &quot;AI engine share&quot; reflects the proportion of these queries now
            answered by AI Overviews or AI assistants rather than traditional link results.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Why most cosmetic surgery practices are invisible to AI</h2>
          <p className="mt-4">
            Based on audits of over 30 UK cosmetic surgery practices, we find the same patterns recurring:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">No structured data:</strong> 87% of practices have zero schema markup — no Physician, MedicalProcedure, or FAQPage schema. Their content exists as unstructured text that models must infer meaning from.</li>
            <li><strong className="text-zinc-200">Marketing-first copy:</strong> Pages lead with brand language (&quot;luxury&quot;, &quot;bespoke&quot;, &quot;world-class&quot;) rather than answering specific patient questions with concrete data.</li>
            <li><strong className="text-zinc-200">Weak entity footprint:</strong> Inconsistent naming, missing or outdated Google Business Profiles, and sparse third-party mentions mean models cannot build a clear entity cluster for the practice.</li>
            <li><strong className="text-zinc-200">No answer pages:</strong> Practices typically have a single &quot;Breast Augmentation&quot; page written for humans who already know they want the procedure. They lack pages targeting early-stage queries: &quot;Am I a candidate for breast augmentation?&quot;, &quot;What is the difference between saline and silicone implants?&quot;, &quot;How long do implants last?&quot;</li>
            <li><strong className="text-zinc-200">Credentials buried:</strong> Surgeon credentials — the single most important E-E-A-T signal in medical AI search — are often hidden on an &quot;About Us&quot; page or omitted entirely.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The compounding effect of AI visibility</h2>
          <p className="mt-4">
            Practices that invest in AI visibility early face a compounding advantage. Models update their training
            periodically and crawl fresh content continuously. A practice that builds a strong entity footprint in 2026 is
            more likely to be in the training data when the next model version is released. Competitors starting later must
            not only catch up but overcome the incumbent advantage of established consensus.
          </p>
          <p className="mt-4">
            This dynamic is similar to traditional SEO a decade ago, where early adopters of quality content and technical SEO
            built rankings that proved difficult for latecomers to displace. The difference is that AI search consolidates
            discovery into a single answer rather than a list — meaning the gap between first place and nowhere is wider
            than ever.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Key takeaways</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">1. AI search is not a future trend — it is the present</h3>
              <p className="mt-2">
                30–45% of high-value cosmetic surgery queries in the UK now receive an AI-generated answer. For the highest
                competition queries (&quot;best surgeon in London&quot;), that figure exceeds 40%.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">2. Schema markup is the single highest-leverage fix</h3>
              <p className="mt-2">
                Practices with MedicalProcedure and Physician schema are cited at 4–6× the rate of those without. It is
                technical, achievable, and requires no content changes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">3. Answer-first content outperforms marketing copy</h3>
              <p className="mt-2">
                Pages that answer the patient&apos;s question in the first 40 words — with specific data, not adjectives —
                are the pages models cite. Marketing copy does not get quoted.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">4. Third-party consensus is non-negotiable</h3>
              <p className="mt-2">
                Models cross-reference sources. A practice needs presence on RealSelf, Doctify, Google Business Profile and
                ideally a medical publication or professional body listing — not just a strong own website.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">About this research</h2>
          <p className="mt-4">
            This data is compiled by Citara from proprietary prompt tracking across ChatGPT, Perplexity, Gemini and Google
            AI Overviews, combined with publicly available search volume data, professional body publications, and audit
            findings from UK cosmetic surgery practices. Query volume estimates are indicative and based on 2025–2026 data.
          </p>
          <p className="mt-4">
            For a personalised assessment of how AI models currently see your practice,{" "}
            <a href="/#audit" className="text-lime-brand hover:underline">
              request a free AI visibility audit
            </a>
            .
          </p>
        </section>
      </ContentPage>
    </>
  );
}
