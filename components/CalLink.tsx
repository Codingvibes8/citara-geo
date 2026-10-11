"use client";

import type { ReactNode } from "react";
import { config } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type Props = {
  children: ReactNode;
  className?: string;
  /** Where the click happened, e.g. "navbar" | "hero" | "pricing". */
  location?: string;
  onClick?: () => void;
};

/**
 * Primary CTA — opens the Cal.com booking page in a new tab and fires a
 * `booking_click` analytics event.
 */
export default function CalLink({ children, className, location, onClick }: Props) {
  return (
    <a
      href={config.calUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackEvent("booking_click", location ? { location } : undefined);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
