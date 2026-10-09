"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

/**
 * Counts from 0 up to `to` the first time it scrolls into view.
 *
 * The final value is what renders on the server (and whenever
 * IntersectionObserver is unavailable), so the content is never blank or wrong
 * for crawlers and screenshots. The animation itself only runs on the client,
 * inside requestAnimationFrame callbacks.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          if (cancelled) return;
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setValue(to * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };

        setValue(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
