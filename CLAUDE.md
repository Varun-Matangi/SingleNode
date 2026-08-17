# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is npm (`package-lock.json`); Node version is pinned via `.node-version` (22).

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, `eslint-config-next`)
- `npm run preview` — build for Cloudflare via OpenNext, then preview the Workers build locally
- `npm run deploy` — build for Cloudflare via OpenNext, then deploy to Workers
- `npm run upload` — build for Cloudflare via OpenNext, then upload (versioned deploy)
- `npm run cf-typegen` — regenerate `cloudflare-env.d.ts` from `wrangler.jsonc` bindings

There is no test framework configured (no Jest/Vitest/Playwright, no `test` script) — don't assume one exists.

## Architecture

Single-page marketing site on the Next.js App Router — there are no nested routes. `app/page.tsx` composes the whole page out of section components in order (Hero, About, Services, Approach, Stack/scrollytelling, Process, CTA, etc.); `app/layout.tsx` holds fonts/metadata and `app/globals.css` holds the Tailwind v4 theme (Tailwind v4 is CSS-first — there is no `tailwind.config.js`, theme tokens live in `app/globals.css` via `@theme`).

`app/components/` mixes shell primitives (`Navbar`, `Footer`, `Container`, `Logo`, `Button`) with one component (or pair) per page section (`Hero`, `About`, `Services`/`SpotlightCard`, `Approach`/`SignalTerminal`, `Process`/`ProcessStep`, `CTA`/`ContactForm`/`Select`, `Marquee`).

Scroll behavior is layered across a few components and is the one thing worth understanding before touching animation code:
- `SmoothScroll` wraps the app in a Lenis smooth-scroll provider.
- `Reveal` is a generic scroll-triggered reveal wrapper used throughout the page.
- `ScrollyFeature` + `StagePanel` implement the pinned, Framer-Motion-driven "Stack" scrollytelling section (Apple-style scroll-scrubbed panels) — these two are tightly coupled and should be read together.

Site contact info is centralized in `app/lib/site-config.ts`, which exports `SITE_EMAIL`, `SITE_PHONE`, `SITE_URL` read from `NEXT_PUBLIC_SITE_EMAIL`/`NEXT_PUBLIC_SITE_PHONE`/`NEXT_PUBLIC_SITE_URL` with hardcoded fallbacks; `SITE_URL` also feeds `metadataBase`. Real values live in gitignored `.env`/`.env.local`; `.env.example` documents the shape (these are public site content, not secrets).

## Deployment

This deploys to **Cloudflare Workers via the OpenNext adapter** (`@opennextjs/cloudflare`, `wrangler.jsonc`) — not Cloudflare Pages static export, and not Vercel. A static `output: 'export'` config was tried and reverted (it conflicts with OpenNext's server build) — don't reintroduce it. There is no CI/CD; deploys are run manually via the npm scripts above.

`README.md` is unmodified `create-next-app` boilerplate (still references Vercel) and does not reflect the actual deployment setup — don't rely on it.
