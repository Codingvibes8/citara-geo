"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export default function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const { ref, phase } = useScrollReveal<HTMLElement>(0.1);
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref} style={style} className={cn("reveal", phase === "waiting" && "reveal-hidden", className)}>
      {children}
    </Tag>
  );
}
