import type { ReactNode } from "react";
import { config } from "@/lib/config";
import JsonLd from "@/components/JsonLd";

type ContentPageProps = {
  title: string;
  description: string;
  children: ReactNode;
  jsonLd?: Record<string, unknown>;
  jsonLdType?: "Organization" | "Service" | "FAQPage" | "MedicalBusiness" | "WebSite";
  lastUpdated?: string;
  breadcrumbs?: { label: string; href: string }[];
};

export default function ContentPage({
  title,
  description,
  children,
  jsonLd,
  jsonLdType = "WebSite",
  lastUpdated,
  breadcrumbs,
}: ContentPageProps) {
  const canonicalUrl = `${config.siteUrl}${breadcrumbs?.[breadcrumbs.length - 1]?.href ?? ""}`;

  return (
    <>
      <JsonLd type={jsonLdType} data={jsonLd} />
      <main className="relative min-h-screen bg-ink-950 px-5 pb-24 pt-32 sm:px-8">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-4xl">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {i > 0 && <span className="text-zinc-600">/</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-zinc-300" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <a href={crumb.href} className="transition-colors hover:text-zinc-300">
                        {crumb.label}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {lastUpdated && <p className="mt-4 text-sm text-zinc-500">Last updated: {lastUpdated}</p>}

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-zinc-400">{children}</div>
        </div>
      </main>
    </>
  );
}
