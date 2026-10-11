import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Answer-First Content Engine for Cosmetic Surgery — Citara",
  description:
    "Pages built to be quoted by AI: direct answers up top, original data, expert proof and clean structure. Written by strategists, accelerated by AI, edited by humans.",
  alternates: {
    canonical: "/services/answer-first-content-engine",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Answer-First Content Engine", href: "/services/answer-first-content-engine" },
];

const jsonLd = {
  name: "Answer-First Content Engine for Cosmetic Surgery",
  description:
    "Pages built to be quoted: direct answers up top, original data, expert proof and clean structure.",
  url: `${config.siteUrl}/services/answer-first-content-engine`,
  provider: {
    "@type": "Organization",
    name: "Citara",
    url: config.siteUrl,
  },
};

export default function AnswerFirstContentEnginePage() {
  return (
    <>
      <JsonLd type="Service" data={jsonLd} />
      <ContentPage
        title="Answer-First Content Engine for Cosmetic Surgery"
        description="Pages built to be quoted by AI models — direct answers up top, original data, expert proof and clean structure."
        jsonLd={jsonLd}
        jsonLdType="Service"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What is answer-first content?</h2>
          <p className="mt-4">
            Answer-first content is a writing and structuring approach designed for both human readers and AI extraction.
            The core principle: answer the patient&apos;s question in the first 40 words, with specific data — then expand
            with supporting detail, credentials and proof.
          </p>
          <p className="mt-4">
            Traditional web content often leads with context, brand language or narrative setup before reaching the
            substantive answer. AI models, which extract the most direct sentences they can find, cannot use this content
            effectively. Answer-first content is engineered to be citable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The answer-first page structure</h2>
          <p className="mt-4">
            Every page we produce follows a consistent structure optimised for AI extraction:
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-lime-brand">H1 — The question</h3>
              <p className="mt-2">
                The page title is the exact question the patient asks. Not &quot;Breast Augmentation at [Practice
                Name]&quot; — but <em>&quot;How much does breast augmentation cost in 2026?&quot;</em> or{" "}
                <em>&quot;What is the recovery time for a tummy tuck?&quot;</em>
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-lime-brand">Direct answer — first 40 words</h3>
              <p className="mt-2">
                The opening paragraph answers the question completely, with specific numbers, timeframes or facts. No
                preamble, no brand introduction, no &quot;welcome to our page&quot;. Example:{" "}
                <em>&quot;Breast augmentation in the UK costs between £4,500 and £7,500 in 2026. The procedure takes 60–90
                minutes under general anaesthesia. Most patients return to desk work within 2 weeks and full activity
                within 6 weeks.&quot;</em>
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-lime-brand">Proof and credentials</h3>
              <p className="mt-2">
                Surgeon credentials, professional body memberships, years of experience, before/after data, patient
                outcomes and relevant citations. This is the E-E-A-T layer that establishes authority for both readers and
                AI models.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-lime-brand">Structured data</h3>
              <p className="mt-2">
                FAQPage, MedicalProcedure and Physician schema markup that gives AI models explicit, machine-readable
                information to extract — complementing the human-readable content.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-lime-brand">Supporting depth</h3>
              <p className="mt-2">
                Detailed sections for readers who want to go deeper — candidacy criteria, technique comparisons,
                recovery timelines, financing options, FAQs. This content serves human readers and provides additional
                citable material for AI models.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Our content production process</h2>
          <p className="mt-4">
            Every page is produced through a structured process that combines AI efficiency with human expertise:
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">1</span>
              <div>
                <h3 className="font-medium text-zinc-200">Research and data gathering</h3>
                <p className="mt-1">We gather the specific data, statistics and clinical information needed for the page — from published research, professional body data, and your practice&apos;s own outcomes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">2</span>
              <div>
                <h3 className="font-medium text-zinc-200">AI-accelerated drafting</h3>
                <p className="mt-1">We use AI to accelerate the initial drafting process — structuring information, identifying gaps, and producing a first draft that is then extensively refined.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">3</span>
              <div>
                <h3 className="font-medium text-zinc-200">Human strategist review</h3>
                <p className="mt-1">A human strategist with medical marketing experience reviews, restructures and enriches the content — ensuring it is accurate, compliant, and genuinely useful to patients.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">4</span>
              <div>
                <h3 className="font-medium text-zinc-200">Senior editor polish</h3>
                <p className="mt-1">A senior writer performs the final edit — refining tone, ensuring readability, and verifying that the answer-first structure is maintained throughout.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-brand font-mono text-sm font-bold text-ink-950">5</span>
              <div>
                <h3 className="font-medium text-zinc-200">Compliance check</h3>
                <p className="mt-1">All content is reviewed for compliance with ASA/CAP guidance on cosmetic surgery advertising — no misleading claims, no guaranteed outcomes, no before/after images that could be considered promotional.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Types of content we produce</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Procedure cost pages</strong> — specific pricing data with breakdowns of what is included, variables that affect cost, and financing options</li>
            <li><strong className="text-zinc-200">Recovery and results pages</strong> — week-by-week recovery timelines, expected results at 30/90/180 days, and factors that affect healing</li>
            <li><strong className="text-zinc-200">Candidacy and suitability pages</strong> — who is a good candidate, what alternatives exist, and what factors affect outcomes</li>
            <li><strong className="text-zinc-200">Comparison pages</strong> — procedure vs. procedure (e.g., VASER vs traditional liposuction), implant types, surgical vs. non-surgical alternatives</li>
            <li><strong className="text-zinc-200">Surgeon profile pages</strong> — credential-rich profiles with GMC numbers, special interests, before/after galleries and patient testimonials</li>
            <li><strong className="text-zinc-200">FAQ pages</strong> — structured question-and-answer content with FAQPage schema, targeting the specific questions patients ask AI engines</li>
            <li><strong className="text-zinc-200">Location-specific pages</strong> — content tailored to your practice&apos;s geographic area, targeting &quot;near me&quot; and city-specific queries</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Why AI-accelerated content still needs human expertise</h2>
          <p className="mt-4">
            AI models are increasingly sophisticated at generating fluent, well-structured text. But they cannot verify
            medical accuracy, ensure regulatory compliance, or incorporate the specific data that makes a page genuinely
            citable. Models reward content that is:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Specific</strong> — &quot;£4,500–£7,500&quot; not &quot;competitive prices&quot;</li>
            <li><strong className="text-zinc-200">Verifiable</strong> — claims supported by data, credentials or citations</li>
            <li><strong className="text-zinc-200">Original</strong> — unique data, insights or perspectives not found elsewhere</li>
            <li><strong className="text-zinc-200">Compliant</strong> — adhering to ASA/CAP guidance on cosmetic surgery advertising</li>
          </ul>
          <p className="mt-4">
            Our human strategists and editors ensure every page meets these criteria — producing content that is not just
            AI-friendly, but genuinely useful to patients making significant decisions about their care.
          </p>
        </section>

        <section>
          <p className="text-lg font-medium text-zinc-200">
            See how your current content performs against AI models —{" "}
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
