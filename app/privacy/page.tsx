import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Citara",
  description: "How Citara Ltd collects, uses and protects your personal data. UK GDPR compliant privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-ink-950 px-5 pb-24 pt-32 sm:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: October 2026</p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-zinc-400">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">1. Who we are</h2>
            <p className="mt-3">
              Citara Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a company registered in England and Wales.
              We are the &quot;data controller&quot; for the personal data we collect through this website — meaning we
              decide how and why your data is processed. Our company number and registered address are listed in the
              footer of this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">2. What data we collect</h2>
            <p className="mt-3">When you request a free AI visibility audit or contact us, we may collect:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Your name and work email address</li>
              <li>Your practice website URL</li>
              <li>Any information you choose to share about your practice or marketing goals</li>
              <li>Technical data such as your IP address, browser type and pages visited (via cookies — see our Cookie Policy)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">3. How we use your data</h2>
            <p className="mt-3">We use your personal data to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Provide the free AI visibility audit you requested</li>
              <li>Respond to your enquiries and communicate with you about our services</li>
              <li>Send you the audit report and any follow-up communications related to your request</li>
              <li>Improve our website and services based on aggregated usage patterns</li>
            </ul>
            <p className="mt-4">
              <strong className="text-zinc-200">Legal basis:</strong> We process your data under Article 6(1)(b) of the UK GDPR
              (performance of a contract or pre-contractual steps at your request) and Article 6(1)(a) (your consent, where
              you opt in to marketing communications). You may withdraw consent at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">4. Marketing communications</h2>
            <p className="mt-3">
              We will only send you marketing emails if you have explicitly opted in. Every marketing email includes a clear
              unsubscribe link. You can opt out at any time by clicking that link or emailing us at{" "}
              <a href="mailto:hello@citara.ai" className="text-lime-brand hover:underline">
                hello@citara.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">5. Data sharing</h2>
            <p className="mt-3">
              We do not sell your personal data. We may share your data with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Email delivery providers (to send you your audit report and respond to enquiries)</li>
              <li>Hosting and infrastructure providers (to operate this website)</li>
              <li>Professional advisers (such as our accountants or lawyers), where necessary</li>
            </ul>
            <p className="mt-4">
              All third-party processors are bound by data processing agreements and comply with UK GDPR. We do not
              transfer your personal data outside the UK unless adequate safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">6. Data retention</h2>
            <p className="mt-3">
              We retain your personal data for as long as necessary to fulfil the purposes for which it was collected,
              including to comply with legal, accounting or reporting requirements. Audit enquiries are typically retained
              for 24 months from last contact, after which they are securely deleted unless you have an active engagement
              with us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">7. Your rights</h2>
            <p className="mt-3">Under the UK GDPR, you have the right to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Request portability of your data in a structured, machine-readable format</li>
              <li>Withdraw consent at any time, where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@citara.ai" className="text-lime-brand hover:underline">
                hello@citara.ai
              </a>
              . We will respond within 30 days. If you are not satisfied with our response, you have the right to lodge a
              complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-lime-brand hover:underline">
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">8. Security</h2>
            <p className="mt-3">
              We use appropriate technical and organisational measures to protect your personal data against unauthorised
              access, alteration, disclosure or destruction. All data transmission is encrypted via HTTPS/TLS.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">9. Changes to this policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will post any changes on this page and update the
              &quot;Last updated&quot; date above. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">10. Contact</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="mt-4 rounded-2xl border border-white/[0.08] bg-ink-900 p-6">
              <p className="text-zinc-200">Citara Ltd</p>
              <p className="mt-1">Company number: [YOUR COMPANY NUMBER]</p>
              <p>Registered address: [YOUR REGISTERED ADDRESS]</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:hello@citara.ai" className="text-lime-brand hover:underline">
                  hello@citara.ai
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
