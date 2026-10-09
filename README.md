# Citara — AI SEO Agency Website

Marketing site for Citara, an AI SEO (GEO/AEO) agency, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint (flat config)             |

## Project structure

```
app/
  layout.tsx        Root layout: fonts (next/font), metadata, viewport
  page.tsx          Home route (server component)
  globals.css       Tailwind v4 theme tokens, animations and base styles
  favicon.ico
components/
  Home.tsx          "use client" shell that owns the shared domain state
  Navbar.tsx  Hero.tsx  PlatformStrip.tsx  Shift.tsx  Services.tsx
  Tracker.tsx  Process.tsx  Results.tsx  Testimonials.tsx
  Pricing.tsx  FAQ.tsx  AuditCTA.tsx  Footer.tsx
  ui.tsx            Shared primitives (Logo, Eyebrow, SectionHeading, Button)
  Reveal.tsx        Scroll-reveal wrapper
  CountUp.tsx       Animated number counter
hooks/
  useScrollReveal.ts
lib/
  utils.ts          cn() class-name helper (clsx + tailwind-merge)
```

## Tech notes

- **Next.js 16 App Router** with Turbopack. Tailwind CSS v4 is compiled via the
  `@tailwindcss/turbopack` loader wired up in `next.config.ts`.
- **Tailwind v4** is configured entirely in CSS (`app/globals.css`) using `@theme`
  tokens — there is no `tailwind.config.js`.
- **Fonts** are loaded with `next/font/google` (Inter, Bricolage Grotesque,
  JetBrains Mono) and exposed to Tailwind as `--font-sans`, `--font-display`
  and `--font-mono`.
- **Server/client split:** `app/page.tsx` stays a server component; the
  interactive sections are client components under `components/`.
