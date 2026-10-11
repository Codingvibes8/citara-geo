import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Citara",
  description: "How Citara Ltd uses cookies and similar technologies on this website. PECR compliant cookie policy.",
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen bg-ink-950 px-5 pb-24 pt-32 sm:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: October 2026</p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-zinc-400">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">1. What are cookies?</h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you visit a website. They are widely used to make
              websites work efficiently, remember your preferences and provide information to the website owner. Cookies
              may be &quot;session&quot; cookies (deleted when you close your browser) or &quot;persistent&quot; cookies
              (which remain on your device for a set period).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">2. How we use cookies</h2>
            <p className="mt-3">
              We use cookies and similar technologies for the following purposes:
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08]">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.03]">
                  <tr>
                    <th className="px-5 py-3 font-medium text-zinc-200">Category</th>
                    <th className="px-5 py-3 font-medium text-zinc-200">Purpose</th>
                    <th className="px-5 py-3 font-medium text-zinc-200">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="px-5 py-4">
                      <span className="font-medium text-lime-brand">Strictly necessary</span>
                    </td>
                    <td className="px-5 py-4">
                      Required for the website to function. These cannot be switched off.
                    </td>
                    <td className="px-5 py-4">Security, load balancing, cookie consent preferences</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">
                      <span className="font-medium text-cyan-brand">Analytics</span>
                    </td>
                    <td className="px-5 py-4">
                      Help us understand how visitors use our website so we can improve it.
                    </td>
                    <td className="px-5 py-4">Pages visited, time on site, referring source</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">
                      <span className="font-medium text-violet-brand">Functional</span>
                    </td>
                    <td className="px-5 py-4">
                      Remember your preferences and choices to provide a more personalised experience.
                    </td>
                    <td className="px-5 py-4">Language preference, region, display settings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">3. Consent</h2>
            <p className="mt-3">
              Under the Privacy and Electronic Communications Regulations (PECR), we must ask your consent before
              placing non-essential cookies on your device. When you first visit our website, you will be presented with
              a cookie consent banner that allows you to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Accept all cookies</li>
              <li>Reject all non-essential cookies</li>
              <li>Customise your preferences by category</li>
            </ul>
            <p className="mt-4">
              You can change or withdraw your consent at any time by clearing your browser cookies and refreshing this
              page, which will display the consent banner again.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">4. Third-party cookies</h2>
            <p className="mt-3">
              Some cookies on our website are set by third parties. We do not control these cookies and encourage you to
              review the relevant third party&apos;s privacy policy. Third parties we may use include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Website analytics providers (to help us understand site usage)</li>
              <li>Hosting and CDN providers (for website performance and security)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">5. Managing cookies in your browser</h2>
            <p className="mt-3">
              Most web browsers allow you to control cookies through their settings. You can typically find these in the
              &quot;Preferences&quot; or &quot;Settings&quot; menu of your browser. You can block all cookies, block
              third-party cookies only, or delete existing cookies. Note that blocking all cookies may affect the
              functionality of our website.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-lime-brand hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-lime-brand hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-lime-brand hover:underline">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-lime-brand hover:underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">6. Changes to this policy</h2>
            <p className="mt-3">
              We may update this Cookie Policy from time to time to reflect changes in technology or legislation. We
              will post any changes on this page and update the &quot;Last updated&quot; date above.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">7. Contact</h2>
            <p className="mt-3">
              If you have any questions about our use of cookies, contact us at:
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
