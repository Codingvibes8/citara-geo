import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Citation & Digital PR for Cosmetic Surgery — Citara",
  description:
    "LLMs trust consensus. We earn mentions on the review sites, forums, publications and databases that AI models actually pull from for medical queries.",
  alternates: {
    canonical: "/services/citation-digital-pr",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Citation & Digital PR", href: "/services/citation-digital-pr" },
];

const jsonLd = {
  name: "Citation & Digital PR for Cosmetic Surgery",
  description:
    "Earn mentions on the review sites, forums, publications and databases that AI models actually pull from.",
  url: `${config.siteUrl}/services/citation-digital-pr`,
  provider: {
    "@type": "Organization",
    name: "Citara",
    url: config.siteUrl,
  },
};

export default function CitationDigitalPrPage() {
  return (
    <>
      <JsonLd type="Service" data={jsonLd} />
      <ContentPage
        title="Citation & Digital PR for Cosmetic Surgery"
        description="LLMs trust consensus. We earn mentions on the review sites, forums, publications and databases that AI models actually pull from."
        jsonLd={jsonLd}
        jsonLdType="Service"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Why citations matter more than backlinks for AI search</h2>
          <p className="mt-4">
            In traditional SEO, backlinks from high-authority sites are the primary ranking signal. In AI search, the
            dynamic is different. Models do not count links — they assess consensus. When a practice is mentioned across
            multiple independent, trusted sources, the model treats that consensus as evidence of credibility and is more
            likely to recommend it.
          </p>
          <p className="mt-4">
            A practice with 50 backlinks but zero mentions on RealSelf, Doctify, or any medical publication is invisible
            to AI models. A practice with 10 meaningful mentions across the right platforms is far more likely to be cited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The citation platforms that matter for cosmetic surgery AI</h2>
          <p className="mt-4">
            Based on our analysis of what AI models actually cite for cosmetic surgery queries, we prioritise the
            following platforms:
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">RealSelf</h3>
              <p className="mt-2">
                The largest community for cosmetic surgery reviews and Q&amp;A. RealSelf is one of the most-cited platforms
                for AI queries about cosmetic procedures. A strong RealSelf presence — with verified reviews, surgeon
                profiles and before/after photos — is essential.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Doctify</h3>
              <p className="mt-2">
                A UK-focused platform for verified patient reviews of specialists. Doctify is increasingly cited by AI
                models for UK-specific medical queries. Complete profiles with verified reviews, consultant credentials
                and procedure specialities are critical.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">BAAPS / BAPRAS</h3>
              <p className="mt-2">
                Membership of the British Association of Aesthetic Plastic Surgeons or British Association of Plastic,
                Reconstructive and Aesthetic Surgeons is a strong authority signal. Models recognise these as markers of
                professional standards and patient safety.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Healthgrades / IWantGreatCare</h3>
              <p className="mt-2">
                UK and international platforms for patient feedback and hospital/clinic ratings. While less
                cosmetic-surgery-specific than RealSelf, these platforms contribute to the broader consensus signal.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Medical publications and journals</h3>
              <p className="mt-2">
                Mentions in the British Journal of Plastic Surgery, Aesthetic Surgery Journal, or similar publications
                carry significant weight. These are the sources models treat as highest-confidence for medical claims.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-900/50 p-6">
              <h3 className="font-display text-lg font-semibold text-white">Press and media</h3>
              <p className="mt-2">
                Features in mainstream media, health publications, and lifestyle press contribute to entity recognition.
                A practice mentioned in The Guardian, Cosmopolitan, or a health supplement is more likely to be in model
                training data.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Our citation building approach</h2>
          <p className="mt-4">
            We do not buy links or engage in artificial citation schemes. Our approach focuses on earning genuine mentions
            through:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Profile optimisation:</strong> Ensuring your practice has complete, accurate and consistent profiles on every relevant platform</li>
            <li><strong className="text-zinc-200">Review generation:</strong> Implementing ethical, compliant processes for encouraging patient reviews on RealSelf, Doctify and Google</li>
            <li><strong className="text-zinc-200">PR and media outreach:</strong> Securing features, expert comments and mentions in relevant publications</li>
            <li><strong className="text-zinc-200">Professional body engagement:</strong> Supporting BAAPS/BAPRAS membership and participation in their public-facing content</li>
            <li><strong className="text-zinc-200">Original research and data:</strong> Creating newsworthy data and insights that journalists and publications want to cite</li>
            <li><strong className="text-zinc-200">Conference and event presence:</strong> Securing speaking opportunities, panel participation and event coverage</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Measuring citation impact</h2>
          <p className="mt-4">
            We track your citation footprint monthly, measuring:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Number of platforms where your practice is mentioned</li>
            <li>Quality and authority of each citing source</li>
            <li>Consistency of naming and entity information across sources</li>
            <li>Correlation between citation growth and AI share of voice</li>
            <li>Competitor citation comparison — where you stand relative to key competitors</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">The compounding effect of citations</h2>
          <p className="mt-4">
            Citations compound over time. Each new mention adds to the consensus signal that AI models use to assess
            credibility. A practice that builds 4–6 quality citations per month will, within 12 months, have a citation
            footprint that is extremely difficult for a competitor to replicate quickly — creating a durable competitive
            advantage in AI search.
          </p>
        </section>

        <section>
          <p className="text-lg font-medium text-zinc-200">
            Want to know where your practice is currently cited?{" "}
            <a href="/#audit" className="text-lime-brand hover:underline">
              Request a free AI visibility audit
            </a>{" "}
            — we will map your full citation footprint.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
