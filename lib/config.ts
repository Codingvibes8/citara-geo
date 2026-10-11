/**
 * Central site configuration.
 *
 * Server-safe values (no NEXT_PUBLIC_ prefix) are only readable in route
 * handlers / server components. Public values are inlined at build time.
 */
export const config = {
  /** Canonical production URL (used for metadata + links). */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://citara.ai",

  /**
   * Cal.com booking link — the primary CTA across the site.
   * Set NEXT_PUBLIC_CAL_URL in your env (see .env.example).
   */
  calUrl: process.env.NEXT_PUBLIC_CAL_URL ?? "https://cal.com/citara",

  /** Where "new audit request" notification emails are delivered. */
  notificationEmail: process.env.NOTIFICATION_EMAIL ?? "hello@citara.ai",

  /** From address for transactional email (must be verified in Resend). */
  emailFrom: process.env.EMAIL_FROM ?? "hello@citara.ai",
};
