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

## 2026-03-04 — Architecture

**Decision:** Vite + React + Tailwind CSS v4. No Next.js.

**Rationale:** Next.js is unnecessary for current scope — no SSR, no routing complexity, no API routes needed. Modular `.md` docs files keep Claude Code context usage minimal.
