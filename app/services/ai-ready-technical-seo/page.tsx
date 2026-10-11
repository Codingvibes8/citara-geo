import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI-Ready Technical SEO for Cosmetic Surgery — Citara",
  description:
    "Crawler access, structured data, entity markup and llms.txt — the technical foundation that makes your practice parseable and citable by AI models.",
  alternates: {
    canonical: "/services/ai-ready-technical-seo",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "AI-Ready Technical SEO", href: "/services/ai-ready-technical-seo" },
];

const jsonLd = {
  name: "AI-Ready Technical SEO for Cosmetic Surgery",
  description:
    "Crawler access, structured data, entity markup and llms.txt — the technical foundation for machine parseability.",
  url: `${config.siteUrl}/services/ai-ready-technical-seo`,
  provider: {
    "@type": "Organization",
    name: "Citara",
    url: config.siteUrl,
  },
};

export default function AiReadyTechnicalSeoPage() {
  return (
    <>
      <JsonLd type="Service" data={jsonLd} />
      <ContentPage
        title="AI-Ready Technical SEO for Cosmetic Surgery"
        description="The technical foundation that makes your practice discoverable, parseable and citable by AI models — crawler access, structured data, entity markup and llms.txt."
        jsonLd={jsonLd}
        jsonLdType="Service"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Why technical SEO matters more for AI than for Google</h2>
          <p className="mt-4">
            Google&apos;s crawler (Googlebot) is sophisticated at rendering JavaScript, parsing complex page structures and
            inferring meaning from unstructured content. AI crawlers are more constrained. GPTBot, PerplexityBot,
            ClaudeBot and similar agents typically:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Crawl with tighter token budgets — they read less of your page</li>
            <li>Rely more heavily on explicit structured signals (schema, meta tags, semantic HTML)</li>
            <li>May not execute JavaScript at all, or execute it with limitations</li>
            <li>Often read only the first portion of a page before extracting what they need</li>
          </ul>
          <p className="mt-4">
            This means a site that ranks well on Google may still be invisible to AI models if it lacks the specific
            technical signals these crawlers depend on.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What we implement</h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Structured data (schema.org)</h3>
              <p className="mt-2">
                We implement MedicalProcedure, Physician, MedicalBusiness, FAQPage and Organization schema across your site.
                This gives AI models explicit, machine-parseable information about your procedures, surgeons, practice
                details and FAQs — rather than requiring them to infer meaning from unstructured text.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Impact: Practices with MedicalProcedure and Physician schema are cited at 4–6× the rate of those without,
                based on our research data.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Crawler access configuration</h3>
              <p className="mt-2">
                We configure robots.txt to explicitly allow AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended,
                Applebot-Extended, Anthropic-AI) while maintaining appropriate restrictions on other bots. Many practices
                inadvertently block AI crawlers with overly restrictive robots.txt rules.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">llms.txt implementation</h3>
              <p className="mt-2">
                llms.txt is a proposed standard — a plain text file at the root of your domain that tells AI crawlers
                exactly what your site offers, what your key pages are, and how to cite you. While adoption is still
                growing, early implementation signals to AI systems that you are a machine-friendly source and provides
                them a structured map of your content.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Semantic HTML and content structure</h3>
              <p className="mt-2">
                We ensure your content uses proper heading hierarchy, semantic HTML5 elements (article, section, nav,
                main), descriptive alt text, and clear information architecture. This helps AI crawlers parse your content
                more effectively and extract the specific answers they need.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Entity markup and knowledge graph signals</h3>
              <p className="mt-2">
                We add sameAs links, Wikidata references where appropriate, and consistent entity markup that helps AI
                models connect your practice to the broader medical aesthetics knowledge graph — linking your surgeons to
                their GMC registrations, your practice to its CQC registration, and your procedures to established medical
                taxonomies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Core Web Vitals and render performance</h3>
              <p className="mt-2">
                While AI crawlers may not weight Core Web Vitals the same way Google does, fast-loading, server-rendered
                content is more accessible to all crawlers. We address render-blocking resources, ensure critical content is
                in initial HTML, and optimise for headless browser rendering.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The technical audit checklist</h2>
          <p className="mt-4">
            Our technical SEO engagement begins with a comprehensive audit. Key areas we evaluate:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Robots.txt configuration — are AI crawlers allowed?</li>
            <li>Schema markup presence and validity — MedicalProcedure, Physician, Organization, FAQPage</li>
            <li>llms.txt presence and accuracy</li>
            <li>Server-side rendering vs client-side rendering — is critical content in initial HTML?</li>
            <li>Semantic HTML structure — heading hierarchy, landmark elements, article/section markup</li>
            <li>Meta tags — title, description, Open Graph, Twitter cards, canonical URLs</li>
            <li>Page speed and Core Web Vitals — LCP, INP, CLS</li>
            <li>Mobile crawlability — responsive design, mobile-first rendering</li>
            <li>Internal linking architecture — how entities are connected across pages</li>
            <li>XML sitemap accuracy and coverage</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Ongoing technical maintenance</h2>
          <p className="mt-4">
            AI crawler behaviour evolves continuously. New bots emerge, existing ones update their parsing logic, and
            standards like llms.txt gain or lose adoption. We monitor these changes and update your technical
            configuration accordingly — ensuring you remain accessible and parseable as the AI search landscape matures.
          </p>
        </section>

        <section>
          <p className="text-lg font-medium text-zinc-200">
            Not sure where your practice stands technically?{" "}
            <a href="/#audit" className="text-lime-brand hover:underline">
              Request a free AI visibility audit
            </a>{" "}
            — the technical component is included.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
