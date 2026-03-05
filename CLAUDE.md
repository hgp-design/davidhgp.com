# davidhgp.com

Personal portfolio site for David Hong.

## Stack
- Vite + React (JavaScript)
- Tailwind CSS v4
- Fonts: Geist Sans (primary), Geist Mono (code/technical accent)

## Before writing styles or components
Read `docs/tokens.md` for all design token values. Use CSS custom properties only — no arbitrary hex colors.

## After completing any task
If the task changes design tokens, component structure, or project architecture, update `docs/decisions.md` with: date, what changed, and why. Keep entries concise — one to two sentences max per decision.

## Hard rules
- All spacing must be multiples of 4px
- No arbitrary hex colors — use CSS custom properties only
- No inline styles
- Component files go in `/src/components/`

## File structure
```
/src/
  App.jsx
  main.jsx
  index.css
  /components/
/docs/
  tokens.md
  decisions.md
```
