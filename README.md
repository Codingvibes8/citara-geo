# Citara — AI SEO / GEO for Cosmetic Surgery Practices

Marketing website for **Citara**, the AI SEO agency that gets cosmetic surgery
practices recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews —
for high-value procedures like breast augmentation, body contouring, facelifts,
tummy tucks and liposuction.

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Tech stack

| Layer      | Choice                                        | Notes                                                      |
| ---------- | --------------------------------------------- | ---------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router) | Turbopack dev/build; React Server Components               |
| UI runtime | React 19.3                                    | `app/page.tsx` stays a server component                    |
| Language   | TypeScript 5                                  | `strict` mode, path alias `@/*` → project root             |
| Styling    | Tailwind CSS v4                               | CSS-first config — **no `tailwind.config.js`**             |
| Icons      | [lucide-react](https://lucide-dev)            | Tree-shakeable icon set                                    |
| Utilities  | `clsx` + `tailwind-merge`                     | Exposed through the `cn()` helper in `lib/utils.ts`        |
| Fonts      | `next/font/google`                            | Inter, Bricolage Grotesque, JetBrains Mono (self-hosted)   |
| Linting    | ESLint 9 (flat config)                        | `eslint-config-next` core-web-vitals + TypeScript presets  |
| Validation | [zod](https://zod.dev)                        | Audit form schema (`lib/validation.ts`)                    |
| Data       | [Supabase](https://supabase.com)              | Lead storage (`audit_requests` table, RLS-enabled)         |
| Email      | [Resend](https://resend.com)                  | Owner notifications + lead confirmations (`lib/email.ts`)  |
| Analytics  | [Vercel Analytics](https://vercel.com/analytics) | `audit_submit` + `booking_click` custom events          |

## Getting started

### Prerequisites

- **Node.js 20.9 or later** (required by Next.js 16)
- npm (a `package-lock.json` is committed; pnpm/yarn also work)

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page
hot-reloads as you edit, and the terminal reports compile and lint errors.

## Available scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint (flat config)             |

## Project structure

```
app/
  layout.tsx        Root layout: fonts (next/font), metadata + viewport
  page.tsx          Home route — server component that renders <Home />
  globals.css       Tailwind v4 import, @theme tokens, keyframes, base styles
  favicon.ico
components/
  Home.tsx          "use client" shell; owns the shared `domain` state
  Navbar.tsx        Sticky nav with scroll state + mobile menu
  Hero.tsx          Above-the-fold hero + domain capture form
  PlatformStrip.tsx Marquee of the AI answer engines we optimize for
  Shift.tsx         "The shift" narrative section
  Services.tsx      What we do (GEO, audits, tech SEO, content, PR, tracking)
  Tracker.tsx       Visibility dashboard / share-of-voice chart (#visibility)
  Process.tsx       90-day, four-phase playbook
  Results.tsx       Outcome metrics and case-style results
  Testimonials.tsx  Client quotes
  Pricing.tsx       Retainer tiers
  FAQ.tsx           Frequently asked questions (accordion)
  AuditCTA.tsx      Free-audit lead form (#audit)
  Footer.tsx        Footer with link columns and contact details
  ui.tsx            Shared primitives: Logo, Eyebrow, SectionHeading, Button
  Reveal.tsx        Scroll-reveal wrapper (client)
  CountUp.tsx       Animated number counter (client)
hooks/
  useScrollReveal.ts  First-interaction–armed IntersectionObserver hook
lib/
  utils.ts            cn() class-name helper (clsx + tailwind-merge)
```

## Site sections

The single home page is composed top-to-bottom in `components/Home.tsx`:

| Section        | Component           | Anchor        |
| -------------- | ------------------- | ------------- |
| Hero           | `Hero.tsx`          | `#top`        |
| Platform strip | `PlatformStrip.tsx` | —             |
| The shift      | `Shift.tsx`         | —             |
| Services       | `Services.tsx`      | `#services`   |
| Visibility     | `Tracker.tsx`       | `#visibility` |
| Process        | `Process.tsx`       | `#process`    |
| Results        | `Results.tsx`       | `#results`    |
| Testimonials   | `Testimonials.tsx`  | —             |
| Pricing        | `Pricing.tsx`       | `#pricing`    |
| FAQ            | `FAQ.tsx`           | `#faq`        |
| Free audit CTA | `AuditCTA.tsx`      | `#audit`      |

## Architecture notes

- **Next.js 16 App Router** with Turbopack. Tailwind CSS v4 is compiled via the
  `@tailwindcss/turbopack` loader wired up in `next.config.ts`.
- **Server/client split.** `app/page.tsx` remains a server component; the
  interactive marketing sections live in client components under `components/`,
  gated behind a single `"use client"` shell (`Home.tsx`).
- **Shared form state.** `Home.tsx` owns a single `domain` `useState` passed down
  to both `Hero` (initial capture) and `AuditCTA` (pre-filled lead form), so a
  visitor's website carries through the whole page.
- **SEO-safe animation.** `Reveal` and `CountUp` render their final, visible
  state on first paint / on the server, so crawlers and screenshots never see
  blank content. Animation only arms after a real user interaction and is
  disabled under `prefers-reduced-motion`.
- **Tailwind v4 in CSS.** Design tokens (colors, fonts, keyframe animations) are
  declared with `@theme` in `app/globals.css`; there is no JS Tailwind config.
- **Fonts** are loaded with `next/font/google` (Inter, Bricolage Grotesque,
  JetBrains Mono) and exposed to Tailwind as `--font-sans`, `--font-display`
  and `--font-mono`.

## Customization

- **Colors, radii, animations** — edit the `@theme` block in `app/globals.css`.
  Brand colors are exposed as `ink-*`, `lime-brand`, `violet-brand` and
  `cyan-brand`.
- **Fonts** — swap the `next/font/google` imports in `app/layout.tsx` and update
  the `--font-sans`, `--font-display` and `--font-mono` mappings in
  `app/globals.css`.
- **Copy and sections** — each section is a self-contained component; edit the
  file directly or reorder/add sections in `components/Home.tsx`.
- **SEO metadata** — title, description, keywords, Open Graph and Twitter cards
  are defined in `app/layout.tsx`.

## Deployment

The app produces a standard Next.js build and deploys with zero config to
[Vercel](https://vercel.com/new):

```bash
npm run build
npm run start   # or let the platform run the build
```

Set the canonical URL in `metadataBase` (`app/layout.tsx`) to your production
domain so Open Graph and Twitter cards resolve correctly.

## Conversion path

The audit form (`components/AuditCTA.tsx`) POSTs to `app/api/audit/route.ts`,
which:

1. **Blocks bots** — a hidden honeypot field (`website`) silently discards
   spam submissions.
2. **Validates input** — Zod schema in `lib/validation.ts` (domain format,
   name, email) with inline field errors returned to the form.
3. **Rate limits** — max 3 submissions/email/hour and 10/IP/hour
   (in-memory, per instance).
4. **Stores the lead** — inserts into `public.audit_requests` in Supabase
   using the service-role key (RLS enabled, no client access).
5. **Sends email via Resend** — a notification to `NOTIFICATION_EMAIL` and a
   confirmation to the lead (templates in `lib/email.ts`).

### Setup checklist

1. **Supabase** — run `supabase/migrations/20251011_create_audit_requests.sql`
   in the SQL editor, then set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
   in your Vercel project env vars.
2. **Resend** — create an API key, verify the `citara.ai` domain in Resend
   (this also produces the DKIM records you need for deliverability), and set
   `RESEND_API_KEY`.
3. **Cal.com** — set `NEXT_PUBLIC_CAL_URL` to your booking link. It is the
   primary CTA (navbar, hero, pricing, testimonials, visibility section); the
   audit form is the secondary CTA.
4. **Analytics** — Vercel Analytics is mounted in `app/layout.tsx` and tracks
   two custom events: `audit_submit` (successful form submission) and
   `booking_click` (Cal.com link clicks, with a `location` property). To use
   Plausible instead, load its script and set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
   — events fan out automatically via `lib/analytics.ts`.

See `.env.example` for the full list of environment variables.

## License

Private and proprietary to **Citara Ltd**. All rights reserved. This
repository is not licensed for redistribution or reuse.

## Contact

- **Email:** [hello@citara.ai](mailto:hello@citara.ai)
- **Website:** [citara.ai](https://citara.ai)
