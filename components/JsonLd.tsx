import { config } from "@/lib/config";

type JsonLdProps = {
  type: "Organization" | "Service" | "FAQPage" | "MedicalBusiness" | "WebSite";
  data?: Record<string, unknown>;
};

const defaultOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Citara",
  url: config.siteUrl,
  logo: `${config.siteUrl}/icon.svg`,
  description:
    "AI SEO agency for cosmetic surgery practices. Get recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  email: "hello@citara.ai",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [],
};

const defaultWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Citara",
  url: config.siteUrl,
  description:
    "AI SEO agency for cosmetic surgery practices. Get recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews.",
};

export default function JsonLd({ type, data }: JsonLdProps) {
  let json: Record<string, unknown>;

  switch (type) {
    case "Organization":
      json = { ...defaultOrganization, ...data };
      break;
    case "WebSite":
      json = { ...defaultWebSite, ...data };
      break;
    case "Service":
    case "FAQPage":
    case "MedicalBusiness":
      json = { "@context": "https://schema.org", "@type": type, ...data };
      break;
    default:
      json = { "@context": "https://schema.org", "@type": type, ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
