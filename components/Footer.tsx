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
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["Cookie Policy", "/cookies"],
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
              The AI SEO agency helping cosmetic surgery practices get discovered, cited and recommended across every
              answer engine.
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

        <div className="mt-14 border-t border-white/[0.07] py-6">
          <div className="flex flex-col gap-4 text-xs text-zinc-500 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <p>© {new Date().getFullYear()} Citara Ltd. All rights reserved.</p>
              <p>Citara Ltd is a company registered in England and Wales.</p>
              <p>Company number: [YOUR COMPANY NUMBER]</p>
              <p>Registered address: [YOUR REGISTERED ADDRESS]</p>
            </div>
            <div className="flex gap-6 sm:flex-shrink-0">
              <a href="/privacy" className="transition-colors hover:text-zinc-300">
                Privacy
              </a>
              <a href="/terms" className="transition-colors hover:text-zinc-300">
                Terms
              </a>
              <a href="/cookies" className="transition-colors hover:text-zinc-300">
                Cookies
              </a>
            </div>
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
