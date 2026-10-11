import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Citara",
  description: "Terms of service for Citara Ltd. Governed by the laws of England and Wales.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-ink-950 px-5 pb-24 pt-32 sm:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: October 2026</p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-zinc-400">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">1. Agreement to terms</h2>
            <p className="mt-3">
              These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by Citara Ltd
              (&quot;Citara&quot;, &quot;we&quot;, &quot;our&quot;) and any services provided by Citara. By accessing this
              website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not
              use our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">2. Our services</h2>
            <p className="mt-3">
              Citara provides AI SEO and generative engine optimisation services for cosmetic surgery and medical
              aesthetics practices. This includes AI visibility audits, technical SEO, content strategy, citation building
              and related marketing services. The specific scope of any engagement will be set out in a separate
              agreement or statement of work.
            </p>
            <p className="mt-4">
              The free AI visibility audit is provided at no cost and does not create a client relationship. A client
              relationship is formed only when both parties have signed a separate engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">3. No guarantees</h2>
            <p className="mt-3">
              We do not guarantee specific results, rankings, citation volumes, traffic increases or revenue outcomes.
              AI search platforms are third-party systems that change frequently and unpredictably. Any case studies,
              examples or illustrative output shown on this website are not guarantees of future performance. Past
              performance is not indicative of future results.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">4. Fees and payment</h2>
            <p className="mt-3">
              Fees for our services are as set out in your individual engagement agreement. Unless otherwise agreed:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Monthly retainers are billed monthly in advance</li>
              <li>Quarterly retainers are billed quarterly in advance</li>
              <li>All fees are exclusive of VAT unless stated otherwise</li>
              <li>Payment is due within 14 days of invoice date</li>
            </ul>
            <p className="mt-4">
              Late payments may incur interest at 8% per annum above the Bank of England base rate, in accordance with
              the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">5. Cancellation</h2>
            <p className="mt-3">
              Unless your engagement agreement states otherwise, either party may terminate the engagement by providing
              30 days&apos; written notice. You remain liable for all fees incurred up to the date of termination.
              Prepaid fees for undelivered services will be refunded on a pro-rata basis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">6. Intellectual property</h2>
            <p className="mt-3">
              All content on this website — including text, graphics, logos, design, code and proprietary methodology —
              is the property of Citara Ltd or its licensors and is protected by UK and international intellectual
              property laws. You may not reproduce, distribute or create derivative works without our prior written
              consent.
            </p>
            <p className="mt-4">
              Upon full payment, deliverables created specifically for you under an engagement agreement are assigned to
              you. Our pre-existing tools, frameworks, know-how and methodologies remain our property.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">7. Limitation of liability</h2>
            <p className="mt-3">
              Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence,
              fraud, or any other liability that cannot be excluded by law.
            </p>
            <p className="mt-4">
              Subject to the above, our total aggregate liability to you for any claim arising out of or in connection
              with these Terms or our services shall not exceed the total fees paid by you to Citara in the 12 months
              preceding the claim. We shall not be liable for any indirect, consequential, special or punitive damages,
              including lost profits, lost revenue or lost data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">8. Confidentiality</h2>
            <p className="mt-3">
              We treat all non-public information you share with us as confidential. We will not disclose your
              confidential information to third parties except as necessary to deliver our services, as required by law,
              or with your written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">9. Governing law and jurisdiction</h2>
            <p className="mt-3">
              These Terms are governed by the laws of England and Wales. Any disputes arising out of or in connection
              with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">10. Changes to these terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. We will post any changes on this page and update the
              &quot;Last updated&quot; date above. Continued use of our website or services after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">11. Contact</h2>
            <p className="mt-3">For questions about these Terms, contact us at:</p>
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
