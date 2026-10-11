import { track } from "@vercel/analytics";

type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

/**
 * Fire a custom analytics event.
 *
 * Fans out to Vercel Analytics (always on once <Analytics /> is mounted in
 * the root layout) and to Plausible if its script happens to be loaded
 * (window.plausible). Never throws — analytics must not break the UX.
 */
export function trackEvent(name: string, props?: AnalyticsProps) {
  if (typeof window === "undefined") return;

  try {
    track(name, props);
  } catch {
    // ignore
  }

  try {
    const plausible = (
      window as unknown as {
        plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
      }
    ).plausible;
    plausible?.(name, { props });
  } catch {
    // ignore
  }
}
