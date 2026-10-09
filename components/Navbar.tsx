"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Visibility", href: "#visibility" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#audit"
            className="group inline-flex items-center gap-1.5 rounded-full bg-lime-brand px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:shadow-[0_8px_30px_-6px_rgba(200,255,62,0.55)]"
          >
            Free AI audit
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-5 pb-6 pt-2 sm:px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base text-zinc-300 hover:bg-white/[0.05] hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#audit"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-lime-brand px-5 py-3 text-sm font-semibold text-ink-950"
          >
            Get my free AI audit
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
