# Riverbase — Landing Page

The marketing landing page for **Riverbase**, the all-in-one commerce platform
built for Cambodian merchants. It introduces the product, shows a live dashboard
preview, and points merchants to where they can create a shop.

The page uses a **hug-bar shell**: a sticky frosted navbar styled like a
desktop panel, with concave fillets curving it into a floating, rounded page
window framed by an icy-blue gutter. The full design system and its
invariants are documented in [DESIGN.md](DESIGN.md).

> Storefront builder, POS, B2B credit, and direct bank settlement, with native
> KHQR and Bakong payments, in one platform.

## What Riverbase does

Riverbase lets a merchant launch and run an online business without stitching
tools together:

- **Storefronts** with custom domains, themes, and a Telegram Mini App
- **Selling everywhere** through web, POS, and on-site fulfillment
- **Local payments** via KHQR and the Bakong network, plus direct bank deposits
- **B2B commerce** with credit lines, quotations, and installment plans
- **Operations** for catalog, orders, delivery, discounts, and analytics

The page links merchants straight to shop creation at
[riverbase.org/shops/create](https://riverbase.org/shops/create), with a live
demo store at [thith.riverbase.org](https://thith.riverbase.org/en).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with shadcn-style UI primitives
- [Bun](https://bun.sh) as package manager and runtime
- Bricolage Grotesque (display) + Inter (body) via `next/font`
- `lucide-react` icons

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

```bash
bun run build   # production build + type-check
bun run start   # serve the production build
bun run lint    # eslint
```

## Project structure

```
src/
  app/            # App Router entry, layout, metadata, favicons
  components/     # Page sections (header, hero, stats, features, …)
    ui/           # Reusable primitives (button, card, badge, separator)
  lib/            # Shared helpers and links
public/           # Logo, OG image, static assets
DESIGN.md         # Design system: hug-bar shell, tokens, invariants
```

## Notes

- Brand and metadata live in `src/app/layout.tsx`; outbound links to the
  product live in `src/lib/links.ts`.
- App icons (`favicon.ico`, `icon.png`, `apple-icon.png`) are generated from
  `public/logo.png` and resolved via the App Router metadata file convention.
- The header (`src/components/header.tsx`) is sticky and translucent
  (`bg-background/80` + blur); its hug fillets live in `src/app/globals.css`
  and must keep the same fill as the bar — see DESIGN.md before touching
  either.
