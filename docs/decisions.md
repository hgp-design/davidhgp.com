# Design Decisions

## 2026-03-04 — Typeface

**Decision:** Geist Sans as primary typeface. Geist Mono for code and technical accents.

**Rationale:** Tight proportions similar to SF Pro, screen-optimized, variable font. Clean and modern without being generic.

**Rejected:**
- Proxima Nova — feels saturated in SaaS contexts
- Inter — used at Kontakt.io, too familiar
- Instrument Sans — proportions too wide

---

## 2026-03-04 — Color

**Decision:** Dark monochrome base with warm amber/gold accent (`hsl(40, 65%, 55%)`).

**Rationale:** Near-black backgrounds and off-white text with a single accent color. Minimalist and senior-read. Avoids competing with portfolio content.

---

## 2026-03-04 — Tooltip container (MD3)

Upgraded tooltips to MD3 plain tooltip spec: added surface container, 4px border-radius, padding, and `--shadow-level-1` elevation token.

---

## 2026-03-04 — Display tracking

Added `--tracking-display: -0.02em` token and applied it to `.name`; display headings read tighter at 36px.

---

## 2026-03-04 — Tooltip tokens

Added `--tooltip-*` component tokens to centralize tooltip styling and switched font size to `--text-label-md` (13px).

---

## 2026-03-05 — Fixed footer

Added fixed footer with "Under construction. Check back soon." to signal the site is a placeholder without disrupting the centered layout.

---

## 2026-03-05 — BackgroundAnimation

Added `BackgroundAnimation` component: fullscreen 2D canvas constellation mesh (slow-moving dots + proximity lines) rendered at z-index 0 behind all content. Throttled to 30fps; dot count scales by breakpoint (80/50/30) for performance.

---

## 2026-03-22 — React Router + page architecture

Added `react-router-dom`; moved landing page content into `src/pages/Home.jsx` with a `useEffect`-based `home-active` class for scoped `overflow: hidden`. Created `src/layouts/CaseStudyLayout.jsx` and `src/components/common/PlaceholderBlock.jsx` as reusable primitives for case study pages.

---

## 2026-03-22 — Case study Layer 3

Added Fraunces as display font (`--font-display`) for article titles, `--layout-content-center` token to replace hardcoded 720px, article meta block (author/date), share links row, and `PlaceholderPair` component for side-by-side placeholder layouts; improves editorial structure and visual hierarchy of case study pages.

---

## 2026-03-22 — PlaceholderBlock breakout width

Added `--layout-content-wide: 960px` token and a `width` prop to `PlaceholderBlock` (default `"wide"`) that applies a negative-margin breakout pattern, allowing image placeholders to exceed the 720px article column while keeping body text at content width.

---

## 2026-03-04 — Architecture

**Decision:** Vite + React + Tailwind CSS v4. No Next.js.

**Rationale:** Next.js is unnecessary for current scope — no SSR, no routing complexity, no API routes needed. Modular `.md` docs files keep Claude Code context usage minimal.
