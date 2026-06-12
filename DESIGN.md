# Riverbase Landing — Design System

## Shell layout: the "hug-bar" pattern

The page is structured like a KOOMPI OS desktop (reference: KOOMPI UX brainstorm,
`docs/brainstorm/css/bar.css`, `.bar-hug` + `.hug-fillet`):

- **Header = desktop panel.** Full-width fixed bar, flush to the viewport top,
  flat bottom, `backdrop-blur(20px)`, `bg-background/80`, no border (a border
  would break the seam with the fillets). Sticky: always visible; only the
  shadow reacts to scroll.
- **Hug fillets.** Two bar-colored concave quarter-rounds pinned below the bar
  at both screen edges (`.hug-fillet-left/right` in `globals.css`), built with
  the radial-gradient trick. They make the bar "curve down and hug" the page.
- **Page body = floating window.** All sections live in ONE rounded container
  (`src/app/page.tsx`), inset by a uniform **8px gutter** on left, right,
  bottom, and between bar and window top (`px-2 pb-2 pt-16` under a 56px bar).
- **Frame.** `--frame` (deeper icy blue) is the desktop "wallpaper" showing
  through the gutter.

### Invariants — do not break

1. **One radius token.** `--hug-radius` drives BOTH the fillet curves and the
   window corner radius. Never hardcode either.
2. **Seamless fillets.** `--panel-fill` must equal the bar background exactly:
   same color, same alpha, same `color-mix(in oklab, ...)` space Tailwind uses
   for `/80`. Bar fill is constant (only shadow animates on scroll).
3. **Uniform gutter.** Sides, bottom, and bar-to-window gap are the same size.
4. **Mobile overlay is a sibling of `<header>`**, never a child: the header's
   auto-hide `transform` would become the fixed overlay's containing block and
   shrink it to the bar's box.

## Tokens (globals.css `:root`)

- `--background` near-white green-tinted; `--foreground` deep green-grey
- `--primary` forest green `oklch(0.42 0.08 165)` (logo green)
- `--frame` icy blue `oklch(0.88 0.03 237)` (logo river blue family)
- `--hug-radius: 1rem`
- `--panel-fill: color-mix(in oklab, var(--background) 80%, transparent)`

## Type

- Headings: Bricolage Grotesque (`--font-display`), tracking -0.02em
- Body: Inter; mono: Geist Mono

## Header content

Brand block left (logo + two-line: name over "Commerce platform" descriptor),
centered nav with active-section pill highlight (IntersectionObserver), green
CTA right. Mobile: brand + hamburger, full-screen blurred overlay menu.

## Conventions

- CTAs point to `SIGNUP_URL` / `DEMO_URL` from `src/lib/links.ts`, never
  hardcoded URLs.
- No gradient text, no side-stripe accent borders, no glassmorphism-as-default.
- Entrance animations must stay visible under `prefers-reduced-motion`
  (handled in `globals.css`).
