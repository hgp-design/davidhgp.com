# 02 — Figma Dev Handoff Frame Template
**Version:** 1.0
**Last Updated:** 2026-02-23
**Owner:** Design Team — Kontakt.io
**Status:** Active

---

## Purpose

This file defines the standard for creating Figma dev handoff frames at Kontakt.io. It is an instruction set for any agent (Claude Code, Cursor, or other AI tools) and any designer creating delivery-ready Figma frames from a source prototype or codebase.

Every handoff frame must tell the complete story of a screen — design intent, product context, engineering specs, and interaction behavior — in one place, for multiple audiences.

**This file must be read in full before creating any Figma handoff frame.**

---

## Design System Reference

This template aligns to the Kontakt.io Design System (`DESIGN.md`).

- **Spacing:** 4px base system. All spacing values must be multiples of 4.
- **Tokens:** Semantic naming only — `--color-surface-elevated`, not raw hex values.
- **Shape:** MD3 baseline border radius scale (`--shape-sm`, `--shape-md`, `--shape-full`).
- **Elevation:** MD3 baseline shadow scale (`--elevation-1` through `--elevation-5`).
- **Typography:** 17-class system. Use semantic tokens (`--type-title-lg`, `--type-body-md`).
- **Motion:** MD3 baseline durations and easing (`--duration-medium-1`, `--ease-standard`).
- **Interactive states:** MD3 state layer opacity (8% hover, 12% focus, 16% pressed, 38% disabled).

When a token is unknown or not yet defined, use a descriptive placeholder in brackets: `[token: --color-surface-panel]`.

---

## Canvas Specification

| Property | Value |
|---|---|
| Width | 2400px (fixed) |
| Height | Hug contents (auto — no minimum) |
| Background | `--color-surface-default` (dark variant for iOS frames) |
| Outer padding | 80px all sides |
| Gap between zones | 80px (device to Panel A), 40px (Panel A to Panel B) |

**Note:** Canvas height is always auto. Figma and any screenshot tool will capture the full vertical length regardless of content height. Never set a fixed height constraint.

---

## Zone Layout

```
|-- 80px --|-- ZONE 1: 768px --|-- 80px --|-- ZONE 2: 560px --|-- 40px --|-- ZONE 3: 560px --|-- 80px+ --|
           Device Frame                   Panel A: What/Why              Panel B: How
```

Total at minimum: 80 + 768 + 80 + 560 + 40 + 560 + 80 = 2168px (remaining 232px absorbed by right padding)

All three zones align to the top edge. Height follows the tallest zone.

---

## Header Bar

**Dimensions:** Full canvas width × 72px
**Background:** `--color-surface-container` (dark)
**Border bottom:** 1px `--color-outline-variant`
**Padding:** 0 80px

| Element | Content | Style |
|---|---|---|
| Flow label | e.g. "Photo Upload Flow" | `--type-label-sm`, `--color-text-secondary`, uppercase, tracking 0.08em |
| Step indicator | "Step 01 of 11" | `--type-label-sm`, `--color-text-secondary` |
| Screen ID + Name | "B1 — Photo Options (no photo)" | `--type-title-md`, `--color-text-primary`, semibold |
| Date | Feb 23, 2026 | `--type-label-sm`, `--color-text-secondary`, right-aligned |

---

## Footer Bar

**Dimensions:** Full canvas width × 56px
**Background:** `--color-surface-container` (dark)
**Border top:** 1px `--color-outline-variant`
**Padding:** 0 80px

| Element | Content | Style |
|---|---|---|
| Prev step | "← [Screen ID]" | `--type-label-md`, `--color-brand-primary` |
| Next step | "[Screen ID] →" | `--type-label-md`, `--color-brand-primary` |
| Source link | "Source prototype" | `--type-label-md`, `--color-brand-primary` |
| Jira ticket | "KIO-XXX" or "— No ticket linked" | `--type-label-md`, `--color-brand-primary` |

All footer links spaced evenly. If a value is unknown, use placeholder: `— [description] not yet linked`.

---

## Zone 1 — Device Frame

**Purpose:** Shows the actual screen in realistic device context.

| Platform | Frame size | Corner radius | Notes |
|---|---|---|---|
| iPad 11" | 768 × 1024px | `--shape-xl` (28px) | Primary platform for BHA/RoundGuard |
| Web (desktop) | 1440px wide | — | Render at full width, scale to fit zone |
| iPhone | TBD | — | To be defined in DESIGN-iOS.md |

**Rules:**
- Always render the device in its realistic context (bezel, home indicator where applicable)
- For modal screens: show dark overlay (`--color-scrim`, 50% opacity) behind the modal
- Do not crop or clip the device frame
- Device frame background: `--color-surface-default` (matches hardware bezel)

---

## Zone 2 — Panel A: What & Why

**Audience:** Product managers, designers, stakeholders
**Purpose:** Explains what this screen is and why it exists

**Panel container:**
- Background: `--color-surface-container`
- Corner radius: `--shape-md`
- Padding: `--space-8` (32px)
- Gap between sections: `--space-6` (24px)

### Section 1 — Product Requirement
What user need or business requirement this screen addresses.
Reference Jira ticket or PM decision if known.

**Placeholder:** `— No product requirement linked yet`

---

### Section 2 — Design Intent
Why the screen is designed this way. Key decisions, tradeoffs, and constraints that shaped it.

**Placeholder:** `— No design intent documented yet`

---

### Section 3 — Scope: In
What is explicitly included in this screen for the current release.

**Placeholder:** `— Scope not yet defined`

---

### Section 4 — Scope: Out
What is explicitly excluded. Deferred features, removed scope, known gaps.

**Placeholder:** `— No exclusions recorded`

---

### Section 5 — Open Questions
Unresolved design or product decisions. Tag owner and date if known.
Format: `[Owner] — [Question] — [Date raised]`

**Placeholder:** `— No open questions`

---

## Zone 3 — Panel B: How

**Audience:** Engineers, QA
**Purpose:** Everything needed to build and test the screen

**Panel container:** Same spec as Panel A.

### Section 1 — Component Source
File path(s) in the source codebase for this screen.
Format: `src/components/[platform]/[ComponentName].tsx`

**Placeholder:** `— No source file linked`

---

### Section 2 — Design Tokens
All relevant tokens for this screen. Pull directly from the mission file or extracted spec.

Format:
```
Color:      --color-brand-primary (#value)
Background: --color-surface-container (#value)
Radius:     --shape-md (8px)
Spacing:    --space-6 (24px) — internal padding
Typography: --type-title-md — dialog title
```

**Placeholder:** `— Tokens not yet extracted`

---

### Section 3 — States & Variants
All states this screen or its components can be in.
Format: `Default · Loading · Error · Empty · Disabled`

**Placeholder:** `— States not yet documented`

---

### Section 4 — Interactions & Transitions
Every interactive element, what it does, and where it leads.

Format:
```
[Element label] → [Outcome or target screen]
[Element label] → [Outcome or target screen]
```

Example:
```
Take Photo with iPad → Screen B2 (Camera Viewfinder)
Choose from Photos  → Screen B3 (Confirm Photo)
Cancel              → Close modal, reset to options
```

**Placeholder:** `— Interactions not yet documented`

---

### Section 5 — Dev Notes
Anything engineering needs to know that isn't obvious from the visual design. Edge cases, known prototype limitations, backend dependencies, accessibility requirements.

**Placeholder:** `— No dev notes`

---

## Annotation Typography

| Role | Token | Color |
|---|---|---|
| Section header | `--type-label-sm` uppercase, tracking 0.08em | `--color-text-secondary` |
| Body text | `--type-body-sm` | `--color-text-primary` |
| Code / path | `--type-body-sm` monospace | `--color-status-success` |
| Link | `--type-body-sm` | `--color-brand-primary` |
| Placeholder text | `--type-body-sm` italic | `--color-text-disabled` |
| Screen title (header) | `--type-title-md` semibold | `--color-text-primary` |

---

## Frame Naming Convention

**Format:** `[Screen ID] — [Screen Name] ([state])`

**Screen ID structure:** `[Flow letter][Step number]`
- Flow A = Add Patient
- Flow B = Photo Capture
- Flow C = [next flow], etc.

**Examples:**
```
B1 — Photo Options (no photo)
B1 — Photo Options (has photo)
A2 — Configure BH Settings (validation error)
```

**Rules:**
- Always use em dash (—), not hyphen (-)
- State in parentheses is required when multiple variants exist
- IDs must be sequential within a flow

---

## Placeholder Convention

When any content is unknown, not yet defined, or not applicable, always render a visible placeholder. **Never leave a section blank.**

**Format:** `— [Description of what belongs here] not yet defined`

Placeholders signal intent and make gaps visible to reviewers. They are preferable to empty space.

---

## Agent Instructions

Follow these rules exactly when creating Figma handoff frames:

1. Read this file in full before creating any frame
2. Read the relevant screen spec or mission file for the specific screen content
3. Create **one frame at a time** unless explicitly instructed otherwise
4. Always include the Header Bar and Footer Bar — never omit them
5. Always populate every section with content or a placeholder — no empty sections
6. Use semantic design tokens, not raw hex values or hardcoded pixel values
7. Confirm the created frame's node ID after each creation
8. Name frames exactly per the naming convention above
9. Place all frames on the designated Figma page specified in the mission file
10. Escalate to the designer if a design decision is required that is not covered by this file or the mission file

---

## Version History

**v1.0 (2026-02-23)** — Initial template. BHA/RoundGuard iPad scoped. Agnostic structure ready for expansion to web and other platforms.
