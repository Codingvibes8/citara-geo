import { Logo } from "@/components/ui";

const columns = [
  {
    title: "Services",
    links: [
      ["Generative Engine Optimization", "#services"],
      ["AI Visibility Audit", "#services"],
      ["Technical SEO", "#services"],
      ["Content Engine", "#services"],
      ["Citation & PR", "#services"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Results", "#results"],
      ["Process", "#process"],
      ["Pricing", "#pricing"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["hello@citara.ai", "mailto:hello@citara.ai"],
      ["Book a call", "#audit"],
      ["Free AI audit", "#audit"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] px-5 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-500">
              The AI SEO agency helping brands get discovered, cited and recommended across every answer engine.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-zinc-300 transition-colors hover:text-lime-brand">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.07] py-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Citara Labs, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-zinc-300">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-zinc-300">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-zinc-300">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none -mb-[0.22em] select-none text-center font-display text-[30vw] font-semibold leading-none tracking-tighter text-white/[0.035] lg:text-[22rem]"
      >
        citara
      </div>
    </footer>
  );
}
