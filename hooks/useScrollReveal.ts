import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal that is safe by default:
 *  - Everything is fully visible on first paint (no hidden content, SEO/screenshot friendly).
 *  - Only after the user's first scroll/wheel/touch/key interaction are elements that sit
 *    below the fold put into a "waiting" state, then revealed as they enter the viewport.
 */

const listeners = new Set<() => void>();
let armed = false;
let attached = false;
const events: (keyof WindowEventMap)[] = ["scroll", "wheel", "touchmove", "keydown"];

function fire() {
  if (armed) return;
  armed = true;
  events.forEach((e) => window.removeEventListener(e, fire));
  listeners.forEach((fn) => fn());
  listeners.clear();
}

function onFirstInteraction(fn: () => void) {
  if (armed) {
    fn();
    return () => {};
  }
  if (!attached) {
    attached = true;
    events.forEach((e) => window.addEventListener(e, fire, { passive: true }));
  }
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export type RevealPhase = "idle" | "waiting" | "shown";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [phase, setPhase] = useState<RevealPhase>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    let observer: IntersectionObserver | undefined;

    const arm = () => {
      const rect = node.getBoundingClientRect();
      // Already on screen (or scrolled past): leave it visible.
      if (rect.top < window.innerHeight * 0.92) return;

      setPhase("waiting");
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setPhase("shown");
            observer?.disconnect();
          }
        },
        { threshold, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(node);
    };

    const unsubscribe = onFirstInteraction(arm);
    return () => {
      unsubscribe();
      observer?.disconnect();
    };
  }, [threshold]);

  return { ref, phase };
}
