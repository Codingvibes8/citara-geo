"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="Citara home">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-lime-brand shadow-[0_0_24px_-4px_rgba(200,255,62,0.7)]">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-ink-950" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round">
          <path d="M17.5 7.5A7 7 0 1 0 17.5 16.5" />
          <circle cx="18.2" cy="12" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="font-display text-[22px] font-semibold tracking-tight text-white">citara</span>
    </a>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime-brand" />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ children, href, variant = "primary", className, type = "button", onClick }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
    variant === "primary" &&
      "bg-lime-brand text-ink-950 shadow-[0_0_0_0_rgba(200,255,62,0)] hover:shadow-[0_8px_30px_-6px_rgba(200,255,62,0.55)] hover:-translate-y-0.5",
    variant === "ghost" && "border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.07]",
    className
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
