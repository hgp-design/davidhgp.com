# DESIGN.md - Kontakt.io UI Design System

**Version:** 1.0  
**Last Updated:** 2026-02-12  
**Status:** Operational Control Surface for AI-Assisted Development

---

## Purpose

This document defines design constraints and patterns for AI-assisted UI development at Kontakt.io. It establishes operational rules that Claude (AI), engineers, and design tools must follow when generating or modifying interface code.

**This is not comprehensive documentation** - it's a control surface. Think of it as the design equivalent of CLAUDE.md: constraints that eliminate cold starts, reduce risk, and make large-scale change safe.

---

## Design System Foundation & Attribution

This design system combines Kontakt.io-specific patterns with industry-standard baselines.

### Our Custom Work

**Layout frameworks:** Reflow, Expand, Fluid (optimized for healthcare operational interfaces)  
**Typography scale:** 17-class system (high-density enterprise, utilitarian product design)  
**Color system:** Eclipse purple theme, clinical semantic rules (green=success, red=critical)  
**Component patterns:** Dialog system, slot architecture, shell layout (healthcare workflow-specific)  
**Spacing scale:** 4px base system with healthcare-specific token values

### Material Design 3 Baselines

The following systems use **Material Design 3 specifications as v1.0 baseline:**

- **Elevation:** Shadow values and z-index scale
- **Shape:** Border radius scale
- **Motion:** Duration values and easing curves
- **Interactive states:** State layer opacity percentages
- **Icon sizing:** Size scale

**Attribution:** Material Design 3 specifications © Google  
**License:** Material Design is available under Apache License 2.0

---

### Why Start with MD3 Baselines?

**Battle-tested:** Proven across billions of users and thousands of products  
**Accessible:** WCAG 2.1 AA compliance built into specifications  
**Comprehensive:** Years of design research and iteration already applied  
**Efficient:** Allows us to focus customization efforts on differentiating systems (layout, typography, color)

---

### When Will We Customize?

MD3 baselines are starting points, not constraints. We'll customize when:

- **Brand evolution:** Visual refresh requires different elevation or motion style
- **Product feedback:** Teams report baseline values don't feel right for our use cases
- **Use case gaps:** Healthcare workflows need values outside baseline ranges
- **Performance:** Motion durations need adjustment for application responsiveness

---

### How We'll Evolve MD3 Baselines

**Document changes:** Updated in this file with rationale  
**Explain why:** Document why baseline was insufficient  
**Maintain structure:** Keep same token naming (easy migration)  
**Preserve accessibility:** Maintain or exceed WCAG 2.1 AA standards

**Status tracking:** Each MD3 baseline section notes customization status:
- "Using MD3 baseline" = unchanged from specification
- "Customized from MD3 baseline" = adjusted for Kontakt.io needs
- Details of customizations documented in section

---

### Basic UI Components (Buttons, Inputs, Form Controls)

Standard UI components follow **Material Design 3 specifications:**

**Component Documentation:**
- **Buttons:** https://m3.material.io/components/buttons
- **Text fields:** https://m3.material.io/components/text-fields
- **Selection controls:** https://m3.material.io/components (checkbox, radio, switch)
- **Menus & lists:** https://m3.material.io/components (dropdown, autocomplete, lists)

**Implementation:**
- Use MD3 specifications for structure, behavior, and accessibility
- Apply design tokens from this document for styling:
  - **Colors:** Use tokens like `--color-brand-primary`, `--color-status-error`
  - **Typography:** Use tokens like `--type-label-lg` for button text, `--type-body-md` for input text
  - **Spacing:** Use tokens like `--space-3` for padding, `--space-2` for gaps
  - **Shape:** Use tokens like `--shape-sm` for border radius
  - **Interactive states:** Apply state layer patterns from Interactive States section (8% hover, 12% focus)

**When to escalate:**
- MD3 specification doesn't cover your use case
- Healthcare context requires custom pattern (e.g., patient ID validation)
- Creating variant not in MD3 (e.g., ghost button, icon-only button, specialized input)

---

### Complex UI Patterns (Forms, Validation, Workflows)

The following complex patterns are **not yet formalized** in v1.0. Design will standardize these case-by-case based on business needs as they arise.

**Patterns in development:**

**Error Handling & Validation:**
- Inline errors vs field-level vs form-level error display
- Validation timing (on blur, on change, on submit)
- Error message patterns for clinical context
- Required field indicators
- Server-side validation feedback

**Multi-Step Forms & Workflows:**
- Stepper component (progress indication across steps)
- Navigation between steps (next/back/skip patterns)
- Step validation (can user proceed to next step?)
- Save progress patterns (draft states, auto-save)
- Exit/cancel handling (data loss warnings)

**Healthcare-Specific Patterns:**
- Patient ID validation and verification
- Equipment ID lookups
- Date/time pickers for scheduling (clinical context)
- Signatures and attestations
- Medication dose calculations and confirmations

**When you encounter these needs:**
1. Check if similar pattern exists in current products (reference existing implementation)
2. Escalate to Design with use case description
3. Design will create pattern documentation specific to that workflow
4. Once formalized, pattern will be added to DESIGN.md in future version

**Why not documented now:** These patterns are highly context-dependent and require deep understanding of specific healthcare workflows. Design prefers to document proven patterns rather than theoretical ones. Patterns will be added to DESIGN.md as they're built and validated in real product contexts.

---

## Naming Conventions & Taxonomy

**Purpose:** Consistent naming prevents chaos, enables scaling, and helps everyone contribute confidently regardless of background.

**Governance:** Design team owns naming taxonomy. Final decisions on token names, component names, and system terminology rest with Design.

---

### Core Naming Principles (Apply to Everything)

#### Principle 1: Semantic Over Descriptive

✅ **Good (semantic):** `--color-status-success` (role-based)  
❌ **Bad (descriptive):** `--color-green-500` (appearance-based)

**Why:** Semantic names allow values to change without breaking meaning. "Success" can be any color, but "green-500" is locked to one shade.

---

#### Principle 2: Use Lowercase with Hyphens (kebab-case)

✅ **Good:** `--space-between-sections`, `--color-text-primary`  
❌ **Bad:** `--spaceBetweenSections`, `--Color_Text_Primary`

**Why:** Kebab-case is CSS standard and most readable across different coding backgrounds.

**Exception:** JavaScript/TypeScript variables use camelCase (`colorTextPrimary`)

---

#### Principle 3: Hierarchy from General to Specific

✅ **Good:** `--color-surface-elevated` (category → role → variant)  
❌ **Bad:** `--elevated-surface-color` (backwards hierarchy)

**Pattern:** `--{system}-{category}-{variant}`

**Examples:**
- `--type-title-lg` (typography → title role → large variant)
- `--space-6` (spacing → scale position)
- `--color-status-warning` (color → status category → warning variant)

---

#### Principle 4: Use Standard English Terms

Use common, simple English words from Material Design 3 vocabulary:

**Standard terms:**
- Size: `xs`, `sm`, `md`, `lg`, `xl` (not `tiny`, `big`, `huge`)
- State: `hover`, `focus`, `active`, `disabled` (not `over`, `selected`, `inactive`)
- Position: `top`, `bottom`, `left`, `right`, `start`, `end`
- Color: `primary`, `secondary`, `success`, `warning`, `error`, `info`

**Avoid slang or colloquialisms:**
- ❌ Don't use: `jumbo`, `ginormous`, `whopper`, `teeny`
- ✅ Use: `xl`, `lg`, `xs` (standardized abbreviations)

**When unsure:** Check Material Design 3 documentation for terminology (https://m3.material.io/foundations/glossary)

---

#### Principle 5: Avoid Abbreviations (Except Standard Ones)

✅ **Good:** `--color-background`, `--button-primary`  
❌ **Bad:** `--clr-bg`, `--btn-prim`

**Exceptions (standard abbreviations allowed):**
- Size scale: `xs`, `sm`, `md`, `lg`, `xl`
- Measurements: `px`, `rem`, `em`
- Directions: `x`, `y` (for coordinates)

**Why:** Full words are clearer and reduce ambiguity.

---

### Token Naming Patterns

**Design tokens follow strict naming structure:**

#### Pattern: `--{system}-{role}-{variant}`

**Examples:**

**Typography:**
- `--type-display-lg` (system: type, role: display, variant: lg)
- `--type-title-md` (system: type, role: title, variant: md)

**Spacing:**
- `--space-4` (system: space, scale: 4)
- `--icon-lg` (system: icon, scale: lg)

**Color:**
- `--color-brand-primary` (system: color, category: brand, role: primary)
- `--color-status-success` (system: color, category: status, role: success)
- `--color-surface-elevated` (system: color, category: surface, role: elevated)

**Elevation:**
- `--elevation-3` (system: elevation, level: 3)
- `--z-modal` (system: z-index, context: modal)

**Shape:**
- `--shape-sm` (system: shape, size: sm)
- `--shape-full` (system: shape, type: full/circular)

**Motion:**
- `--duration-medium-1` (system: duration, scale: medium-1)
- `--ease-standard` (system: easing, type: standard)

---

### Component Naming Patterns

**Components use BEM (Block Element Modifier) convention:**

#### Pattern: `.block__element--modifier`

**Structure:**
- **Block:** Component name (`.card`, `.dialog`, `.button`)
- **Element:** Part of component (`.card__title`, `.dialog__footer`)
- **Modifier:** Variant or state (`.button--primary`, `.card--elevated`)

**Examples:**

```css
/* Block (component) */
.card { }

/* Elements (parts) */
.card__header { }
.card__title { }
.card__content { }
.card__actions { }

/* Modifiers (variants) */
.card--elevated { }
.card--compact { }

/* Element modifiers */
.card__title--large { }
```

**Why BEM:**
- Clear hierarchy (block > element > modifier)
- Avoids naming conflicts
- Standard industry convention (Google, widespread adoption)

---

### Common Naming Mistakes (And How to Fix)

#### Mistake 1: Mixing Naming Conventions

❌ **Wrong:** `.cardTitle` (camelCase in CSS)  
✅ **Right:** `.card__title` (BEM with kebab-case)

---

#### Mistake 2: Backwards Hierarchy

❌ **Wrong:** `--large-title-type` (specific to general)  
✅ **Right:** `--type-title-lg` (general to specific)

---

#### Mistake 3: Overly Abbreviated

❌ **Wrong:** `--clr-txt-prim` (hard to understand)  
✅ **Right:** `--color-text-primary` (clear meaning)

---

#### Mistake 4: Non-Standard Terms

❌ **Wrong:** `--color-really-dark` (informal)  
✅ **Right:** `--color-text-primary` (standard semantic)

---

#### Mistake 5: Regional Spelling Variations

❌ **Wrong:** `colour`, `centre`, `grey` (non-US English)  
✅ **Right:** `color`, `center`, `gray` (US English - CSS/MD3 standard)

**Note:** Design systems use US English spelling to match CSS specifications and Material Design 3 conventions.

---

### Governance & Approval Process

**Who decides if a name is correct?**

#### Design Team Authority

**Design owns naming taxonomy:**
- Final decisions on all token names
- Final decisions on all component names
- Final decisions on all system terminology

**Why:** Consistent naming is a design decision. Without central authority, chaos returns.

---

#### Collaborative Naming Process

**Engineers and Product can propose names proactively:**

1. **Use AI to suggest names** (encouraged)
   - Prompt Claude, ChatGPT, etc.: "Following Material Design 3 conventions and the patterns in DESIGN.md, suggest token names for [use case]"
   - AI generates name following documented patterns
   - Present AI-suggested name in proposal to Design

2. **Design reviews and approves**
   - Validates name follows conventions
   - Checks for consistency with existing system
   - Approves or suggests refinement

**Why collaborative:** Speeds up process. Engineers don't wait for Design to invent names - they propose, Design validates. This is especially useful when working with AI tools that can generate convention-compliant names.

---

### When Approval is Required

**Three tiers of approval:**

#### Tier 1: No Approval Needed (Proceed Immediately)

If name fits perfectly within existing patterns:
- ✅ Adding `--space-7` to spacing scale (follows `--space-{n}` pattern)
- ✅ Adding `--type-body-xs` to typography (follows role + size pattern)
- ✅ Adding `.card__metadata` element class (follows BEM pattern)
- ✅ Adding `--color-surface-secondary` (follows existing surface variants)

**Proceed confidently if:**
- Pattern is obvious
- Fits existing token structure exactly
- No reclassification of existing tokens needed
- Nothing unique or novel about the name

---

#### Tier 2: Approval Recommended (Show to Design, Not Blocking)

If name requires reclassification but follows conventions:
- ⚠️ Adding `--type-title-xl` when current scale only goes to `lg` (shifts hierarchy)
- ⚠️ Adding `--color-surface-sunken` (new surface variant concept)
- ⚠️ Reclassifying existing tokens to fit improved structure

**Show to Design:**
- Post in #design: "Proposing `--type-title-xl` which requires reclassifying current `xl` to `xxl`"
- Explain reclassification needed
- Design can approve quickly or suggest adjustment
- If Design doesn't respond in 24 hours, proceed (assume approval)

---

#### Tier 3: Approval Required (Don't Proceed Without Design)

If name is completely net-new or breaks patterns:
- ❌ New token system (e.g., `--texture-{name}` - entirely new system)
- ❌ New naming pattern that doesn't follow conventions
- ❌ Concept not covered by Material Design 3 vocabulary
- ❌ Name that might conflict with future system direction

**Escalate to Design:**
- Slack #design or tag @David
- Format: "Proposing new token: `--[name]` for [use case]"
- Explain: Why existing tokens don't work, what this enables
- Wait for Design approval before implementing

---

### Helpful Resources

**Material Design 3 Glossary:**
- **URL:** https://m3.material.io/foundations/glossary
- Comprehensive list of standard design terms
- Use these terms when creating new names

**When Unsure About Naming:**
- Check existing token names in this document (DESIGN.md)
- Search codebase style files for similar patterns
- Reference Material Design 3 documentation
- Post in #design: "What's the correct name for [concept]?"
- Use AI to suggest names following documented patterns
- Better to ask than guess

**Getting Help:**
- **For naming questions:** Slack #design channel
- **For quick validation:** Tag @David with proposed name
- **For AI assistance:** Prompt with "Follow DESIGN.md naming conventions..."

---

### Examples: Good vs Bad Naming

**Typography:**
- ✅ `--type-title-lg` (semantic, hierarchical, standard)
- ❌ `--font-18px-bold` (descriptive, inflexible)
- ❌ `--BigTitleFont` (camelCase in CSS, informal term)

**Color:**
- ✅ `--color-status-success` (semantic category + role)
- ❌ `--green-color` (descriptive, backwards hierarchy)
- ❌ `--colour-success` (non-US spelling)

**Spacing:**
- ✅ `--space-6` (system + scale)
- ❌ `--margin-24px` (descriptive, locks to value)
- ❌ `--space_large` (underscore, subjective term)

**Components:**
- ✅ `.card__title` (BEM, clear hierarchy)
- ❌ `.cardTitle` (camelCase in CSS)
- ❌ `.card-title-text` (too verbose without BEM structure)

---

## Layout System

### Page Frameworks

Every screen must be assigned to one of three structural frameworks based on user task intent and information density.

#### Reflow (Centered)

**Definition:** Single flexible pane with maximum width, centered horizontally.

**Technical Rule:**
```css
max-width: 1280px;
margin: 0 auto;
```

**Usage:** Focused "reading modes" for narrative reports, insight summaries, and research views. Centering prevents horizontal eye strain on large monitors.

**Examples:** Compliance reports, patient summaries, documentation pages.

---

#### Expand (Left-Anchored)

**Definition:** Content anchored to primary navigation edge with capped expansion.

**Technical Rule:**
```css
max-width: 1600px;
margin-left: 24px;
```

**Usage:** Standard "productivity" layout. Keeps data physically connected to navigation sidebar while preventing excessive stretching on 4K displays. **This is the default framework for most operational views.**

**Examples:** Management dashboards, equipment lists, operational overviews.

---

#### Fluid (Full-Bleed)

**Definition:** Layout utilizing 100% viewport width to maximize data density.

**Technical Rule:**
```css
width: 100%;
padding: 0 24px;
```

**Usage:** High-stakes analytical tasks requiring maximum horizontal space for detailed schematics, maps, or wide data tables.

**Examples:** Facility maps, complex equipment schematics, multi-column data analysis.

---

### Framework Extensibility

These three frameworks (Reflow, Expand, Fluid) form the **foundational set** for V1. They cover the majority of operational interface needs.

**Adding New Frameworks:**

If a legitimate use case arises that cannot be solved by these three frameworks:

1. **Document the specific need:**
   - What user task/workflow requires different layout?
   - Why don't existing frameworks work?
   - What would the new framework solve?

2. **Escalate to Design for review:**
   - Present use case and constraints
   - Propose framework characteristics (width, alignment, behavior)
   - Get Design approval before implementation

3. **Once approved:**
   - New framework added to this document
   - Clear usage guidelines defined
   - Pattern examples provided

**Rule:** Don't create custom layout patterns without Design approval. The constraint of three frameworks is intentional - it prevents layout fragmentation and maintains system consistency.

**AI/LLM Implementation:** When generating page layouts, only use Reflow, Expand, or Fluid frameworks. Never create hybrid layouts or custom max-width values. If none of the three frameworks fit the use case, flag for Design review.

---

### Grid System

- **Columns:** 12 (standard for all active breakpoints)
- **Page Margin:** 24px fixed (safe zone between navigation and content)
- **Grid Gutter:** 24px standard, 16px for high-density components

---

### Window Size Classes (Breakpoints)

| Class | Range (px) | Device Target | V1 Status |
|-------|------------|---------------|-----------|
| Extra-Large | 1600+ | Ultra-wide monitors, 1920px desktop | Active |
| Large | 1200-1599 | Standard desktop displays | Active |
| Expanded | 840-1199 | Laptops, landscape tablets | Active |
| Medium | 600-839 | Small tablets, foldables | Deferred |
| Compact | <600 | Mobile devices | Deferred |

**Note:** V1 focuses on desktop resolutions. Medium and Compact classes provide foundation for future cross-platform scaling.

---

### Layout Selection Rules

**Priority of Content:** If a layout requires text smaller than 12px to fit, the layout has failed. Switch to Fluid framework immediately to gain horizontal space.

**Context Preservation:** When transitioning from overview (Expand) to deep dive (Fluid), use animations that visually expand the content area rather than full-page refreshes.

**Readability Constraint:** Never let a single line of text span full viewport width. Body text should be constrained to 40-60 characters per line for optimal legibility.

---

## Spacing System

**Base Unit:** 4px

All spacing values MUST be multiples of 4. This ensures consistent visual rhythm across all interfaces.

### Core Spacing Scale

| Token | Value | Intent / Use Case |
|-------|-------|-------------------|
| `--space-1` | 4px | Micro-adjustments, icon-to-text gaps |
| `--space-2` | 8px | Smallest grouped element separation |
| `--space-3` | 12px | Standard internal card content padding |
| `--space-4` | 16px | Default gutter for high-density equipment lists |
| `--space-6` | 24px | **System Standard:** Page margins, card gutters, section gaps |
| `--space-8` | 32px | Major functional block separation |
| `--space-10` | 40px | Hero section headers, large vertical breaks |
| `--space-12` | 48px | Maximum allowable margin for ultra-wide desktop views |

**The scale intentionally skips certain increments** (5, 7, 9, 11) to enforce distinct hierarchy between sections.

---

### Interactive Target Tokens

To ensure accessibility for hospital staff in high-stress environments, all interactive elements must meet minimum physical dimensions:

- **Touch Target Minimum:** 44px × 44px (WCAG 2.5.5 compliance)
- **Default Input Height:** 44px
- **Large Input Variant:** 56px (standard for search bars on 1920px displays)

---

### Framework Tokens

| Token | Value | Framework Intent |
|-------|-------|------------------|
| `--framework-max-reflow` | 1280px | Centered focus for narrative and research views |
| `--framework-max-expand` | 1600px | Left-anchored standard for management dashboards |
| `--framework-margin` | 24px | Fixed safe zone between sidebar and content |
| `--framework-gutter` | 24px or 16px | Standard horizontal gap between layout columns |

---

### Spacing Safety Rules

**CRITICAL - DO NOT VIOLATE:**

1. **Strict Multiples:** Any spacing value not divisible by 4 (e.g., 10px, 15px) is a system failure and must be rejected.

2. **Vertical Rhythm Over Margins:** Prefer `gap` utilities on container classes rather than applying individual `margin-top` or `margin-bottom` to child elements.

3. **Dialog Asymmetry:** For professional "hand-crafted" feel, dialogue headers and footers use asymmetric padding:
   - 24px on left (anchor edge)
   - 16px on right (action edge)

4. **Icon Column Standard:** All form rows and list items must reserve 40px fixed width for leading icons to ensure vertical text alignment.

---

## Typography System

**Framework:** 17-class semantic token system based on Material Design 3, adapted for high-density enterprise environments.

### The 16-Class Semantic Token Map

AI agents and engineers must exclusively use these tokens. **Weight is decoupled** from these tokens to allow semantic flexibility at component level.

#### Display Role (Large Metrics)

| Token | Size | Intent / Use Case |
|-------|------|-------------------|
| `--type-display-lg` | 57px | Hero KPIs, World View big numbers |
| `--type-display-md` | 45px | Secondary large metrics |
| `--type-display-sm` | 36px | Tertiary metrics |

---

#### Headline Role (Major Module Headers)

| Token | Size | Intent / Use Case |
|-------|------|-------------------|
| `--type-headline-lg` | 32px | Major module headers |
| `--type-headline-md` | 28px | Standard page titles |
| `--type-headline-sm` | 24px | Sub-page titles, large dialog headers |

---

#### Title Role (Standard Headers - The Workhorse)

| Token | Size | Intent / Use Case |
|-------|------|-------------------|
| `--type-title-xl` | 22px | Primary navigation anchors |
| `--type-title-lg` | 18px | **Task card primary headers (DEFAULT for most components)** |
| `--type-title-md` | 16px | Secondary component headers |
| `--type-title-sm` | 14px | Low-profile section headers |

**Note:** `--type-title-lg` (18px) is the default for all hospital/unit cards in operational views. This ensures high-density readability across dashboard modules.

---

### Typography Role Usage Guidance

Not all roles are appropriate for all product contexts. This guidance helps determine which typography scale to use based on interface type.

#### Display Role - Marketing/Editorial Only

**When to use:**
- Marketing landing pages
- Blog posts and articles
- Editorial content
- Hero sections on public-facing sites

**When NOT to use:**
- ❌ Operational SaaS dashboards
- ❌ Healthcare workflow interfaces
- ❌ Data-dense management views
- ❌ Mobile/tablet applications

**Rule:** Display typography (57px/45px/36px) is too large for utilitarian product design. If you're building an operational interface, you shouldn't need Display tokens.

---

#### Headline Role - Use Sparingly in Products

**When to use (sparingly):**
- Top-level page titles in wide desktop views (32px)
- Major section headers in marketing-adjacent product areas (28px)
- Modal/dialog titles for high-prominence workflows (24px)

**Standard usage:**
- Most product work should use Headline-md (28px) or Headline-sm (24px)
- Headline-lg (32px) is rare - only for primary page titles on wide screens

**When NOT to use:**
- ❌ Card headers (use Title role)
- ❌ Dashboard module titles (use Title role)
- ❌ Operational list headers (use Title role)

**Rule:** If you're reaching for Headline-lg (32px) in an operational interface, reconsider. Most SaaS product work stays at 28px and below.

---

#### Title Role - The Product Workhorse

**Primary usage for operational interfaces:**
- This is the **default scale for SaaS product design**
- Card headers, section titles, component headers
- Navigation labels, tab headers
- Dashboard module titles

**Scale guidance:**
- Title-lg (18px): Most common - card headers, primary labels
- Title-md (16px): Secondary headers, subsections
- Title-sm (14px): Tertiary headers, compact views

**Rule:** When in doubt for operational interfaces, start with Title role. This scale is optimized for high-density, utilitarian product design.

---

#### Body & Label Roles - Standard UI Text

**Body:** Content, descriptions, form labels, standard UI text  
**Label:** Buttons, badges, timestamps, metadata

These roles are universal across all product types (marketing, SaaS, mobile).

---

#### Body Role (Content)

| Token | Size | Intent / Use Case |
|-------|------|-------------------|
| `--type-body-lg` | 16px | Narrative content, description text |
| `--type-body-md` | 14px | Standard UI text, form labels |
| `--type-body-sm` | 12px | Captions, supplemental info |

---

#### Label Role (UI Elements)

| Token | Size | Intent / Use Case |
|-------|------|-------------------|
| `--type-label-lg` | 14px | Actionable text, button labels |
| `--type-label-md` | 13px | Badges, pills, chip content |
| `--type-label-sm` | 12px | Timestamps, tooltips, aria-labels |
| `--type-label-xs` | 11px | **Use extremely sparingly** (edge cases only) |

**Label Usage Rules:**
- `--type-label-lg` (14px): Buttons, actionable text
- `--type-label-md` (13px): Badges, pills, status chips (common for compact UI elements)
- `--type-label-sm` (12px): Timestamps, tooltips, aria-labels (standard for metadata)
- `--type-label-xs` (11px): Use only in extreme space constraints with Design approval

**Minimum Standard:** Most micro-content should use `--type-label-sm` (12px). The 11px size exists for rare edge cases but should not be the default for small text.

---

### Typography Implementation

```css
:root {
  /* Display Role */
  --type-display-lg: 57px;
  --type-display-md: 45px;
  --type-display-sm: 36px;

  /* Headline Role */
  --type-headline-lg: 32px;
  --type-headline-md: 28px;
  --type-headline-sm: 24px;

  /* Title Role (Primary Workhorse) */
  --type-title-xl: 22px;
  --type-title-lg: 18px;
  --type-title-md: 16px;
  --type-title-sm: 14px;

  /* Body Role */
  --type-body-lg: 16px;
  --type-body-md: 14px;
  --type-body-sm: 12px;

  /* Label Role */
  --type-label-lg: 14px;
  --type-label-md: 13px;
  --type-label-sm: 12px;
  --type-label-xs: 11px;
}
```

---

### Typography Extensibility

This 17-class system covers the majority of interface typography needs. Each role (Display, Headline, Title, Body, Label) is designed to scale from 3-5 classes.

**Current Scale Per Role:**
- Display: 3 classes (lg, md, sm)
- Headline: 3 classes (lg, md, sm)
- Title: 4 classes (xl, lg, md, sm)
- Body: 3 classes (lg, md, sm)
- Label: 4 classes (lg, md, sm, xs)

**Adding New Typography Tokens:**

If a legitimate need arises for additional type sizes:

1. **Determine which role** the new size belongs to (Display, Headline, Title, Body, or Label)

2. **Use standard size classification only:**
   - Valid: `xs`, `sm`, `md`, `lg`, `xl`
   - Invalid: ❌ `md-pro`, ❌ `lg-plus`, ❌ `medium`, ❌ `large-2`

3. **Adjust existing classifications if needed:**
   - Example: If adding larger Title size, current `xl` might become `lg`, new size becomes `xl`
   - Maintain logical progression: xs < sm < md < lg < xl

4. **Escalate to Design for approval:**
   - Document why existing tokens don't work
   - Propose where new token fits in hierarchy
   - Get Design approval before implementation

**Rule:** Never create custom size suffixes. Stick to the 5-tier classification (xs/sm/md/lg/xl). If you need more than 5 sizes in a single role, escalate to Design to discuss if role should be split or hierarchy restructured.

**AI/LLM Implementation:** When generating code, never invent token names like `--type-body-medium` or `--type-title-lg-2`. Only use documented tokens. If size needed doesn't exist, flag for Design review.

---

### Usage & Semantic Hierarchy

**Primary Focus:** The Title role is the workhorse for operational interfaces. Use `--type-title-lg` (18px) as default for all hospital/unit cards to ensure high-density readability.

**Decoupled Weights:** Weight (Bold, Medium, Regular) is not hard-coded into tokens. For card headers, apply `font-weight: 600` via CSS class; for body text, use `font-weight: 400`.

**Minimum Size Rule:** Text smaller than `--type-body-sm` (12px) indicates layout failure. If content requires text below 12px to fit, switch to Fluid framework to gain horizontal space.

---

## Color System

### Section Overview

This section documents:
1. **Universal semantic rules** (stable, use now)
2. **Current token landscape** (in transition)
3. **Future naming strategy** (where we're headed)
4. **Dark/light theme approach** (theming vision)
5. **Safe implementation practices** (how to use colors today)
6. **Color introduction process** (how to add new colors)

---

### 1. Universal Semantic Rules (Stable)

These semantic color rules apply **regardless of theme, token naming, or brand evolution**. They are grounded in clinical safety and universal user expectations.

#### Core Semantic Rules

```
🟢 Green = Success / Healthy / Good / Compliant
🟡 Yellow/Amber = Warning / Caution / Approaching Threshold
🔴 Red = Critical / Error / Bad / Urgent
🔵 Blue = Info / Neutral / Standard Priority
```

#### Usage Guidelines

| Color | Use For | Never Use For |
|-------|---------|---------------|
| Green | Confirmations, completion, success states, compliant status, on-track metrics | Warnings, errors, destructive actions |
| Yellow/Amber | Warnings, approaching limits, attention needed, due soon | Success states, errors, neutral info |
| Red | Errors, destructive actions, critical alerts, missed rounds, urgent status | Primary branding, success states, neutral info |
| Blue | Informational messages, neutral states, standard priority | Warnings, errors, success confirmation |

**Clinical Context:** These mappings are consistent across healthcare environments. They must be preserved for patient safety and clinical staff expectations.

**Rule:** Follow semantic meaning always. Even as token names change during consolidation, these principles remain constant.

---

### 2. Current Token Landscape (In Transition)

**Status:** Token system is chaotic and being harmonized.

#### What Exists Today

- **OLD theme (production):** Green primary `#67b219`
- **NEW theme (development):** Eclipse purple `#5C2D82`
- **Mix of naming conventions:**
  - Color scale tokens: `--kio-color-[name]-[number]`
  - Functional tokens: `--kio-button-primary-color`
  - Component tokens: `--kio-custom-link-primary-text-color`
  - Semantic tokens: `--status-success`, `--status-critical`

#### Current Challenges

**Inconsistent naming makes it hard to find the right token:**
- Multiple tokens for similar purposes with different names
- Unclear hierarchy (which token is "correct" for a given use case)
- Mix of descriptive, functional, and component-specific naming

**Example of current inconsistency:**
- `--kio-color-green-t-500` (unclear what "t" means)
- `--kio-custom-link-primary-text-color` (too verbose)
- `--kio-button-primary-hover-color` (component-specific)

#### Current Best Practice

- **Look for semantic tokens first:** `--status-success` is better than `--kio-color-green-500`
- **When unclear:** Escalate to Design
- **Never add new color tokens** without Design approval

---

### 3. Color Strategy & Future Vision

**Design is harmonizing the color system** (Q1/Q2 2026):

#### Goals

1. Semantic, role-based naming (like typography tokens)
2. Clear usage guidance (which token for which scenario)
3. Consolidate redundant tokens
4. Material Design 3 tonal palette system
5. Support for dark/light theming from the start

#### Proposed Token Structure

Moving from current chaos to semantic, role-based tokens:

| Category | Example Tokens | Purpose |
|----------|---------------|---------|
| **Brand** | `--color-brand-primary`, `--color-brand-hover` | Identity, primary actions |
| **Status** | `--color-status-success`, `--color-status-error` | Semantic meaning (clinical context) |
| **Surface** | `--color-surface-primary`, `--color-surface-elevated` | Backgrounds, cards (theme-aware) |
| **Interactive** | `--color-interactive-hover`, `--color-interactive-pressed` | State layers |
| **Text** | `--color-text-primary`, `--color-text-secondary` | Typography colors (theme-aware) |
| **Border** | `--color-border-primary`, `--color-border-subtle` | Dividers, outlines |

**Key Principle:** Token names describe **role** (what it's for), not **appearance** (what it looks like). This allows tokens to work across themes.

#### Why This Matters

✅ **Easier for engineers** to find right token (role-based = intuitive)  
✅ **Easier for AI** to generate correct colors (semantic meaning is clear)  
✅ **Reduces Design escalations** (clear naming = clear usage)  
✅ **Supports theming** (same token, different values per theme)

#### Migration Approach

When consolidation happens:
- Old tokens will be deprecated with clear alternatives documented
- Migration guide will show old → new mappings
- Grace period before removal (no surprise breaking changes)
- Communication via changelog and team announcements

---

### 4. Dark/Light Theme Strategy

**Current State:** Light theme only in production.

**Future Vision:** Dual theme support (light + dark modes) aligned with Material Design 3 dynamic color system.

---

#### Theming Approach

**Token-based theme switching:**
- Token names remain the same (`--color-surface-primary`)
- Values change based on theme context
- Components don't need theme-specific code

**Example:**
```css
/* Light theme (default) */
:root {
  --color-surface-primary: #ffffff;
  --color-text-primary: #212121;
  --color-border-primary: #e0e0e0;
}

/* Dark theme */
[data-theme="dark"] {
  --color-surface-primary: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-border-primary: #424242;
}
```

Component code uses: `background: var(--color-surface-primary)` - works in both themes automatically.

---

#### User Control (Google-Style Approach)

Users will have three theme options:

1. **System preference** (default)
   - Follows operating system dark mode setting
   - Automatically switches when OS setting changes
   - Recommended for most users

2. **Light** (always light)
   - Force light mode regardless of system preference
   - User override for personal preference

3. **Dark** (always dark)
   - Force dark mode regardless of system preference
   - User override for personal preference

**Implementation:** Theme preference stored per user, persists across sessions.

---

#### Material Design 3 Tonal Palette System

**MD3 approach:** Each color has tones from 0 (black) to 100 (white).

**Benefits:**
- Automatic dark mode generation
- Consistent contrast ratios across themes
- Harmonious color relationships
- WCAG accessibility compliance built-in

**Example - Eclipse Purple Tonal Palette:**
```
--eclipse-0: #000000 (pure black)
--eclipse-10: #1a0d26 (very dark purple)
--eclipse-20: #2e1a47 (dark purple - Dark mode surfaces)
--eclipse-30: #432562
--eclipse-40: #5C2D82 (Light mode primary - brand color)
--eclipse-50: #734099
--eclipse-60: #8b57b0
--eclipse-70: #a36fc7
--eclipse-80: #c29ddb (Dark mode primary - lighter for contrast)
--eclipse-90: #e0caed
--eclipse-95: #f0e5f7
--eclipse-99: #fdfbff
--eclipse-100: #ffffff (pure white)
```

**How it works:**
- **Light mode:** Uses darker tones (40-10) for text, lighter tones (95-99) for surfaces
- **Dark mode:** Uses lighter tones (80-90) for text, darker tones (10-20) for surfaces

**Status:** Tonal palette generation is part of NEW theme development (Q1/Q2 2026).

---

#### Healthcare Context: Dark Mode Guidance

Dark mode in healthcare environments requires thoughtful application. Not all clinical contexts benefit from dark mode.

**When Dark Mode Works Well:**

✅ **Night shifts / low-light environments**
- Reduces eye strain during overnight monitoring
- Helps maintain circadian rhythm for staff
- Appropriate for observation/monitoring stations

✅ **Administrative & operational areas**
- Back-office dashboards
- Scheduling and management interfaces
- Non-clinical workflow tools

✅ **Monitoring stations (long observation)**
- Real-time status dashboards
- Equipment monitoring
- Long-duration surveillance tasks

---

**When Dark Mode May Not Be Appropriate:**

⚠️ **Clinical areas requiring bright screens**
- X-ray viewing and medical imaging review
- Detailed diagnostic work requiring color accuracy
- Procedures requiring precise visual assessment

⚠️ **Surgical/procedure areas**
- Lighting critical for patient safety
- Standardized brightness protocols
- Color accuracy requirements

⚠️ **Areas with specific lighting protocols**
- Regulatory requirements for screen brightness
- Facility-specific clinical standards

---

**Implementation Recommendation:**

**Allow user/facility choice, don't force dark mode universally.**

- Users should control their preference (system, light, or dark)
- Facilities may set defaults based on area type (clinical vs administrative)
- Status colors (red/yellow/green) remain semantically consistent in both themes
- Critical alerts maintain high contrast regardless of theme

**For Product experimentation:**
- Dark mode can be prototyped in non-clinical contexts first
- Gather feedback from night shift staff and monitoring roles
- Test contrast ratios meet WCAG AA standards (minimum 4.5:1)
- Validate status colors remain clear and unambiguous in dark theme

---

#### Dark Mode Implementation Rules

**When building components (now, even though only light theme exists):**

✅ **Do:**
- Use semantic surface tokens (`--color-surface-primary`, `--color-surface-elevated`)
- Use semantic text tokens (`--color-text-primary`, `--color-text-secondary`)
- Use semantic border tokens (`--color-border-primary`, `--color-border-subtle`)

❌ **Don't:**
- Hardcode absolute colors (`background: white`, `color: black`)
- Use color names in tokens (`--color-white-bg`, `--color-dark-text`)
- Create theme-specific components (`ButtonLight`, `ButtonDark`)
- Write conditional logic based on theme (`if dark mode, use X color`)

**Why:** Semantic tokens allow single component to work in both themes. Theme values change, component code doesn't.

---

#### Current Guidance (Light Theme Only)

**While dark mode is in development:**

1. **Use semantic tokens** (even though only light theme exists today)
   - Makes future dark mode implementation seamless
   - Tokens like `--color-surface-primary` are forward-compatible
   - Component code won't need changes when dark mode launches

2. **Avoid absolute color assumptions** in code logic
   - Don't write: `if background is white, use black text`
   - Do write: `use --color-text-primary on --color-surface-primary`

3. **Status colors remain consistent**
   - Critical (red), Warning (yellow), Success (green), Info (blue)
   - These semantic meanings stay the same in dark mode
   - Specific shades may adjust for contrast, but meaning doesn't change

4. **Escalate dark mode questions**
   - If component needs dark mode behavior not covered here
   - Tag Design to discuss approach before implementing

---

#### Timeline & Scope

**Phase 1 (Current):** Light theme with semantic tokens (foundation)  
**Phase 2 (Q1/Q2 2026):** Tonal palette generation for NEW theme  
**Phase 3 (Q2/Q3 2026):** Dark mode implementation & testing  
**Phase 4 (TBD):** User theme control (system/light/dark preference)

**Note:** Dark mode strategy is being defined alongside color consolidation. Updates will be added to this document as decisions are made. Healthcare-specific guidance will be refined based on clinical feedback during testing.

---

### 5. Safe Implementation (Use Now)

Until color consolidation is complete, follow these practices:

#### Use Semantic Tokens (Not Raw Values)

❌ **Don't:** `color: #67b219` (hardcoded hex)  
✅ **Do:** `color: var(--kio-button-primary-color)` (semantic token)

**Why:** Tokens can be updated globally. Hardcoded values create maintenance burden and prevent theming.

---

#### Follow Semantic Meaning

❌ **Don't:** Red for primary buttons or branding  
✅ **Do:** Red exclusively for errors, destructive actions, critical alerts

❌ **Don't:** Green for warnings or cautions  
✅ **Do:** Green only for success, healthy states, confirmations

**Why:** Clinical safety requires consistent color meaning. Red = danger is universal in healthcare.

---

#### When Token Choice is Unclear

**If you're unsure which token to use:**

1. **Look for semantic token first**
   - `--status-success` is better than `--kio-color-green-500`
   - `--kio-button-primary-color` is better than `--kio-color-green-t-500`

2. **Check if similar component exists**
   - Look at button implementations for button colors
   - Look at card implementations for surface colors
   - Match existing patterns when possible

3. **If still unclear: Escalate to Design**
   - Slack #design channel or tag @David
   - Describe use case (button? background? text? status indicator?)
   - Design will point you to correct token or add new one

**Don't:**
- ❌ Guess and pick arbitrary token
- ❌ Hardcode hex value "temporarily"
- ❌ Add new token without Design approval

---

#### For AI/LLM Implementation

When generating UI code:

1. **Use semantic color rules**
   - Green = success, healthy, compliant
   - Red = error, critical, dangerous
   - Yellow = warning, caution
   - Blue = info, neutral

2. **Use existing design tokens**
   - Never hardcode hex values
   - Look for semantic tokens first
   - Use CSS custom properties: `var(--token-name)`

3. **If token choice ambiguous: Flag for Design review**
   - Don't guess between similar tokens
   - Don't invent new token names
   - Explicitly note what needs clarification

4. **Never invent new color tokens**
   - Even if current tokens seem inadequate
   - Flag the gap for Design to address
   - Use closest existing token temporarily if urgent

---

### 6. How to Introduce New Colors

**If you need a color not covered by existing tokens:**

#### Process

1. **Check if token exists**
   - Search through style files (`design-tokens.css` or similar)
   - Ask in #design channel: "Does a token exist for [use case]?"
   - Check similar components to see what they use

2. **Describe use case clearly:**
   - **What's the color for?** (button, status indicator, background, text, border, etc.)
   - **What state?** (default, hover, focus, pressed, disabled)
   - **What context?** (operational UI, marketing page, error state, success feedback, etc.)
   - **Why existing tokens don't work?** (too saturated, wrong contrast, wrong semantic meaning, etc.)

3. **Escalate to Design:**
   - Slack #design channel or tag @David
   - Provide context from step 2 above
   - Include screenshot/mockup if helpful
   - Design will either:
     - Point you to existing token you missed
     - Add new token with proper naming (aligned with consolidation strategy)
     - Explain why use case should use different approach

4. **Use the approved token**
   - Don't implement color until Design confirms approach
   - Use exact token name provided by Design
   - Document in code comment if token usage is non-obvious

---

#### Why This Process

**Prevents token proliferation:**
- Avoids adding duplicate tokens with different names
- Maintains naming consistency
- Ensures new tokens fit consolidation strategy

**Maintains semantic integrity:**
- Design validates color choice makes sense
- Ensures accessibility (contrast ratios)
- Confirms semantic meaning aligns with healthcare context

**Enables theming:**
- New tokens designed to work with future dark mode
- Proper naming supports theme-aware values
- Component code stays theme-agnostic

---

#### Examples

**Good escalation:**
> "Need a color for warning state on input fields. Current `--status-warning` is too saturated for border usage. Need subtle yellow/amber that works at 1px border thickness. Context: form validation feedback."

**Why this is good:**
- ✅ Specific use case (input field border)
- ✅ Explains why existing token doesn't work (too saturated)
- ✅ Technical context (1px border)
- ✅ Semantic context (form validation)

---

**Poor escalation:**
> "Need a new shade of blue."

**Why this is poor:**
- ❌ No use case provided
- ❌ Doesn't explain why existing blues don't work
- ❌ No context for decision-making

---

## Elevation System

**Source:** Material Design 3 specification  
**Status:** Using MD3 baseline (v1.0)  
**Future:** May be customized based on brand requirements

Elevation creates visual hierarchy through shadows. Use these standardized values to maintain consistency.

### Elevation Tokens

| Token | Shadow Values | Z-Index | Usage |
|-------|---------------|---------|-------|
| `--elevation-0` | `none` | 0 | Flat surfaces, dividers |
| `--elevation-1` | `0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.15)` | 1 | Raised cards |
| `--elevation-2` | `0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14)` | 2 | Raised buttons |
| `--elevation-3` | `0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14)` | 3 | Menus, dropdowns |
| `--elevation-4` | `0 2px 4px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14)` | 4 | Dialogs, modals |
| `--elevation-5` | `0 4px 5px rgba(0,0,0,0.2), 0 8px 10px rgba(0,0,0,0.14)` | 5 | Navigation drawer |

---

### Z-Index Scale

Consistent layering prevents z-index conflicts across the application.

| Token | Value | Layer Purpose |
|-------|-------|---------------|
| `--z-base` | 0 | Default content layer |
| `--z-raised` | 1 | Slightly elevated content |
| `--z-dropdown` | 1000 | Dropdown menus |
| `--z-sticky` | 1020 | Sticky headers/footers |
| `--z-fixed` | 1030 | Fixed position elements |
| `--z-modal-backdrop` | 1040 | Modal overlay backgrounds |
| `--z-modal` | 1050 | Modal dialogs |
| `--z-popover` | 1060 | Popovers, tooltips |
| `--z-tooltip` | 1070 | Tooltips (highest standard UI) |
| `--z-notification` | 1080 | Toast notifications |

**Rule:** Never use arbitrary z-index values. Always reference these tokens.

---

## Shape System

**Source:** Material Design 3 specification  
**Status:** Using MD3 baseline (v1.0)  
**Future:** May be adjusted for brand aesthetic

Border radius tokens create consistent component shapes across the system.

### Shape Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--shape-none` | 0 | Full bleed elements, dividers |
| `--shape-xs` | 4px | Small chips, badges |
| `--shape-sm` | 8px | **Buttons, inputs, standard cards (DEFAULT)** |
| `--shape-md` | 12px | Emphasized cards |
| `--shape-lg` | 16px | Large containers, bottom sheets, dialogs |
| `--shape-xl` | 28px | FABs, prominent circular elements |
| `--shape-full` | 9999px | Pills, circular buttons |

**Default Shape:** Most components use `--shape-sm` (8px) for buttons, inputs, and standard cards.

---

### Component Shape Assignments

| Component | Token | Rationale |
|-----------|-------|-----------|
| Buttons | `--shape-sm` | Standard interactive elements |
| Input fields | `--shape-sm` | Form consistency |
| Standard cards | `--shape-sm` | Default card treatment |
| Dialogs | `--shape-lg` | Prominent, large surfaces |
| Chips/Badges | `--shape-xs` | Small, compact elements |
| Pills | `--shape-full` | Complete rounding |

---

## Motion System

**Source:** Material Design 3 specification  
**Status:** Using MD3 baseline (v1.0)  
**Future:** May be tuned based on application performance feedback

Consistent animation timing and easing creates polished, predictable interactions.

### Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-short-1` | 50ms | Micro-interactions (hover feedback) |
| `--duration-short-2` | 100ms | Simple component transitions |
| `--duration-medium-1` | 250ms | **Standard transitions (DEFAULT)** |
| `--duration-medium-2` | 300ms | Emphasized transitions |
| `--duration-long-1` | 400ms | Large expanding animations |
| `--duration-long-2` | 500ms | Full-screen transitions |
| `--duration-extra-long` | 1000ms | Complex choreographed sequences (rare) |

**Default Duration:** Most transitions use `--duration-medium-1` (250ms).

---

### Easing Curves

| Token | Cubic Bezier | Usage |
|-------|--------------|-------|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | **Default for most transitions** |
| `--ease-emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Attention-grabbing animations |
| `--ease-decelerated` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Elements entering screen |
| `--ease-accelerated` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Elements exiting screen |
| `--ease-linear` | `cubic-bezier(0, 0, 1, 1)` | Constant velocity (rarely used) |

---

### Common Motion Patterns

```css
/* Standard hover transition */
.button {
  transition: all var(--duration-short-2) var(--ease-standard);
}

/* Sidebar expand/collapse */
.sidebar {
  transition: width var(--duration-medium-1) var(--ease-standard);
}

/* Dialog enter */
@keyframes dialogEnter {
  /* animation properties */
}
.dialog-enter {
  animation: dialogEnter var(--duration-medium-2) var(--ease-decelerated);
}

/* Dialog exit */
@keyframes dialogExit {
  /* animation properties */
}
.dialog-exit {
  animation: dialogExit var(--duration-medium-1) var(--ease-accelerated);
}
```

---

## Interactive States

**Source:** Material Design 3 specification  
**Status:** Using MD3 baseline (v1.0)  
**Future:** May be adjusted for brand-specific interaction feel

All interactive elements must implement consistent state feedback using state layer opacity overlays.

### State Layer Opacity Values

| State | Opacity | Color Layer | Usage |
|-------|---------|-------------|-------|
| **Hover** | 8% | On surface | Mouse over interactive element |
| **Focus** | 12% | Primary | Keyboard focus indicator |
| **Pressed** | 12% | Primary | Active click/tap |
| **Dragged** | 16% | Primary | Element being dragged (rare) |
| **Disabled** | 38% | On surface | Non-interactive state (applied to element, not overlay) |

---

### Implementation Pattern

```css
.interactive-element {
  position: relative;
  /* Base styling from design tokens */
  background: var(--element-background);
  color: var(--element-text);
  cursor: pointer;
}

/* State layer overlay */
.interactive-element::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0;
  transition: opacity var(--duration-short-2) var(--ease-standard);
  pointer-events: none;
}

/* Hover state */
.interactive-element:hover::before {
  opacity: 0.08;
}

/* Focus state */
.interactive-element:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.interactive-element:focus-visible::before {
  opacity: 0.12;
}

/* Pressed/Active state */
.interactive-element:active::before {
  opacity: 0.12;
}

/* Disabled state (no overlay, affects element directly) */
.interactive-element:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
```

---

### Focus Indicators (WCAG 2.1 AA Compliant)

All interactive elements must have visible focus indicators:

- **Outline Width:** 2px
- **Outline Style:** solid
- **Outline Color:** Primary brand color
- **Outline Offset:** 2px
- **Pseudo-class:** Use `:focus-visible` (not `:focus`) to avoid showing outline on mouse clicks

---

## Icon System

**Source:** Material Design 3 specification  
**Status:** Using MD3 baseline (v1.0)  
**Future:** May be expanded for specialized healthcare iconography needs

Consistent icon sizing ensures visual harmony and proper touch targets.

### Icon Size Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--icon-xs` | 16px | Inline text icons, dense UI |
| `--icon-sm` | 20px | Secondary actions, list items |
| `--icon-md` | 24px | **Standard interactive icons (DEFAULT)** |
| `--icon-lg` | 32px | Prominent actions |
| `--icon-xl` | 48px | Large touch targets, feature icons |

**Default Icon Size:** `--icon-md` (24px) for most UI icons.

---

### Icon Sources

**Primary Source (Recommended):** Material Symbols

Use **Material Symbols** as primary icon library to maintain consistency with Material Design 3 foundation:

- **Library:** Material Symbols (Google)
- **URL:** https://fonts.google.com/icons
- **License:** Apache License 2.0 (free for commercial use)
- **Count:** 2,500+ icons
- **Styles Available:** Outlined (default), Filled, Rounded, Sharp

**Why Material Symbols:**
- Consistent with MD3 design language
- Variable font format (adjustable weight, fill, optical size)
- Comprehensive coverage (UI actions, objects, navigation, medical basics)
- Well-maintained and regularly updated
- Free for commercial use

**Recommended Style:** Outlined (stroke-based)
- Matches utilitarian product design aesthetic
- Clearer at small sizes
- Consistent stroke weight across icon set

---

### Alternative Icon Source

If Material Symbols doesn't have the specific icon needed:

**Lucide Icons**
- **URL:** https://lucide.dev
- **License:** ISC (free, open source)
- **Style:** Clean, minimal, consistent stroke (similar to Material Symbols Outlined)
- **Count:** ~1,400 icons
- **Usage:** Secondary source when Material Symbols doesn't have required icon

**Consistency Rule:** Stick to one icon library per product interface. Don't mix Material Symbols and Lucide in the same view - pick one and use consistently throughout that product.

---

### Custom Icons (Healthcare-Specific or Unavailable)

For specialized icons not available in Material Symbols or Lucide:

**When to request custom icons:**
- Healthcare-specific equipment or procedures
- Company/product-specific concepts
- Industry-specific workflows not covered by standard libraries

**Request Process:**

1. **Check both libraries first**
   - Search Material Symbols (https://fonts.google.com/icons)
   - Search Lucide (https://lucide.dev)
   - Verify icon truly doesn't exist in either library

2. **Document the need:**
   - What concept does the icon represent?
   - Where will it be used? (context: button, list item, status indicator, etc.)
   - What size will it display at? (use icon size tokens)
   - Is it decorative or functional?

3. **Escalate to Design:**
   - Slack #design channel or tag @David
   - Provide context from step 2
   - Include reference images if helpful (similar icons, actual equipment/concept photos)
   - Design will either:
     - Find suitable existing icon you missed
     - Create custom icon matching Material Symbols outlined style
     - Suggest alternative approach (text label, different visual treatment)

4. **Custom icon delivery:**
   - Design provides SVG optimized for web use
   - Icon follows Material Symbols style guidelines (2px stroke, rounded endpoints, 24×24 base size)
   - Icon added to project icon library with proper naming
   - Documentation updated with new icon usage

**Custom Icon Standards:**
- Match Material Symbols outlined style (consistent stroke weight, rounded endpoints)
- Scalable from 16px to 48px without loss of clarity
- Monochrome (single color, uses currentColor for theming)
- Properly labeled for accessibility

---

### Icon Implementation Guidelines

**Using Material Symbols (Web Font Method):**

```html
<!-- Include in HTML head -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

<!-- Use in markup -->
<span class="material-symbols-outlined">
  favorite
</span>
```

```css
/* Sizing with design tokens */
.icon-md {
  font-size: var(--icon-md); /* 24px default */
}

.icon-lg {
  font-size: var(--icon-lg); /* 32px */
}
```

**Using Material Symbols (Package Method):**

For React/Angular applications, use component libraries:
- React: `@material-symbols/react` or similar package
- Angular: Import Material Icons module

**Using Lucide:**

For React/Angular applications:
- React: `lucide-react` package
- Angular: `lucide-angular` package

```jsx
// React example
import { Heart } from 'lucide-react';

<Heart size={24} />
```

**Consistency Rules:**
- Stick to one icon library per product (don't mix styles within same interface)
- Use outlined/stroke style consistently across product
- Match icon visual weight to surrounding typography weight

---

### Icon Usage Rules

**Accessibility:**
- **Functional icons** need accessible labels
  - Add `aria-label` for icon-only buttons: `<button aria-label="Delete item">...</button>`
  - Or include visually-hidden text: `<span class="sr-only">Delete item</span>`
- **Decorative icons** should be hidden from screen readers
  - Add `aria-hidden="true"` to purely decorative icons
  - Example: Icon next to text label where text conveys full meaning

**Color:**
- Icons inherit text color by default: `color: currentColor`
- Use semantic text tokens: `color: var(--color-text-primary)`
- Status icons use status colors:
  - Success: `color: var(--color-status-success)`
  - Warning: `color: var(--color-status-warning)`
  - Critical: `color: var(--color-status-critical)`
- Don't hardcode icon colors (use tokens for theming support)

**Sizing:**
- Always use icon size tokens (`--icon-xs`, `--icon-sm`, `--icon-md`, `--icon-lg`, `--icon-xl`)
- Don't use arbitrary pixel values
- If standard sizes don't work, escalate to Design to discuss if new token needed

---

### Icon Spacing Rules

- **Icon-to-text gap:** `var(--space-2)` (8px)
- **Icon-only button padding:** Ensure 44px × 44px minimum touch target
  - For 24px icon: `(44px - 24px) / 2 = 10px padding`

---

### Icon Weight/Stroke

When using icon font systems (Material Symbols, etc.):

- **Outlined (stroke 2px):** Default for most UI icons
- **Filled (solid):** Selected states, primary actions
- **Rounded:** Alternative style (softer feel)
- **Sharp:** Alternative style (technical feel)

**Consistency Rule:** Pick one icon style (Outlined recommended) and use it consistently across the application.

---

## Component Patterns

### Dialog & Modal System

**Note:** "Dialog" and "modal" are used interchangeably in this document. They refer to the same component type (overlay windows that require user interaction before returning to main content).

All dialogs and modals follow Material Design 3 modal specification with sticky header/footer scrolling.

---

### Width Tiers

AI agents and engineers must exclusively use these three width tiers to prevent layout drift.

| Token | Value | Intent / Use Case | Examples |
|-------|-------|-------------------|----------|
| `--dialog-sm` | 320px | Simple confirmations or alerts | Delete confirmation, Reject task |
| `--dialog-md` | 440px | Standard data entry or task details | Add task, Modify task |
| `--dialog-lg` | 560px | High-density, multi-section views | Escalation detail, Resolution workflow |

---

### Structural Anatomy

All dialogs must follow standardized vertical stack:

```css
.dialog-content {
  display: flex;
  flex-direction: column;
  max-height: 85vh; /* Prevents viewport overflow */
}

.dialog-header {
  flex-shrink: 0; /* Fixed, never scrolls */
}

.dialog-body {
  flex: 1;
  overflow-y: auto; /* Scrolls independently */
}

.dialog-footer {
  flex-shrink: 0; /* Fixed at bottom */
}
```

---

### Spacing & Padding (Asymmetric)

Professional "hand-crafted" feel through asymmetric padding:

| Region | Left | Right | Top | Bottom |
|--------|------|-------|-----|--------|
| Header | 24px | 16px | 24px | 8px |
| Body (Content) | 24px | 24px | 12px | 12px |
| Footer | 24px | 16px | 8px | 16px |

**Internal Gaps:**
- Title to body: 16px
- Body to actions: 24px
- Between action buttons: 8px

---

### Visual Standards

- **Backdrop:** `background: rgba(0, 0, 0, 0.8)` (80% opacity for maximum focus)
- **Corner Radius:** `var(--shape-lg)` (16px)
- **Elevation:** `var(--elevation-4)`
- **Smart Positioning:**
  - If content height < 70% viewport: Vertically centered
  - If content height ≥ 70%: Top-anchored (5vh from top) for easier scrolling

---

### Typography Standards for Dialogs

| Element | Token | Additional Styling |
|---------|-------|-------------------|
| Dialog Title | `--type-title-lg` (18px) | `font-weight: 600` |
| Dialog Description | `--type-body-md` (14px) | Muted foreground color |
| Section Headers (Internal) | `--type-title-md` (16px) | `font-weight: 600` |
| Body text | `--type-body-md` (14px) | Regular weight |

---

### Dialog System Evolution & Principles

**Status:** This dialog specification represents v1.0 foundational pattern. It is not the only dialog system - additional dialog types and patterns may be added as product needs emerge.

**Future Evolution:**
- Additional width tiers may be added (e.g., `--dialog-xl` for complex workflows)
- Multiple dialog system variants may emerge (e.g., full-screen dialogs, side sheets, bottom sheets)
- Specific padding values may be adjusted for different dialog types or product contexts

**For Additional Guidance:**

Reference Material Design 3 dialog specifications for patterns not covered here:
- **URL:** https://m3.material.io/components/dialogs/overview
- **Covers:** Confirmation dialogs, full-screen dialogs, side sheets, accessibility guidelines, interaction patterns

---

### Dialog Layout Principles (Apply to All Dialog Systems)

When creating new dialog patterns or adjusting existing ones, follow these principles:

#### Principle 1: Vertical Content Alignment

**Rule:** Left and right content gutters must be **consistent across header, body, and footer** so content aligns vertically.

**Example (correct alignment):**
```
Header:   |<-- 24px --> Content <-- 24px -->|
Body:     |<-- 24px --> Content <-- 24px -->|  ✅ Content edges align
Footer:   |<-- 24px --> Content <-- 24px -->|
```

**Example (incorrect - misaligned):**
```
Header:   |<-- 24px --> Content <-- 16px -->|
Body:     |<-- 24px --> Content <-- 24px -->|  ❌ Content edges don't align
Footer:   |<-- 24px --> Content <-- 16px -->|
```

**Why:** Consistent gutters create clean vertical rhythm and make dialog feel structured, not haphazard.

**Exception:** Asymmetry is allowed **if it's consistent** across all three regions. Current v1.0 pattern uses 24px left / 16px right for header and footer (action edge emphasis), but body uses 24px both sides. This is intentional for specific visual effect, but content still aligns on the left edge (24px).

---

#### Principle 2: Respect Total Inter-Section Gaps

**Rule:** When adjusting top/bottom padding, consider the **total gap** between adjacent sections, not individual padding values in isolation.

**How section gaps work:**
```
Header (padding-bottom: 8px)
         ↓
    [8px + 12px = 20px total gap]
         ↓
Body (padding-top: 12px)
```

**If you change one value, adjust the other to maintain gap:**
- Change header `padding-bottom` from 8px → 16px
- Then change body `padding-top` from 12px → 4px
- Result: Still 20px total gap between sections

**Why:** The visual gap between header and body content is what users perceive, not individual padding values. Maintain consistent perceived spacing even if individual values change.

**Current v1.0 gaps:**
- Header to body: 8px (header bottom) + 12px (body top) = **20px total**
- Body to footer: 12px (body bottom) + 8px (footer top) = **20px total**

**Principle:** If creating new dialog system with different density, adjust padding values but maintain consistent gap proportions. The gap between header-to-body should match body-to-footer for visual balance.

---

#### Principle 3: Structural Consistency

**Rule:** All dialog systems must follow the three-region structure with defined scroll behavior:

```css
.dialog-content {
  display: flex;
  flex-direction: column;
  max-height: 85vh;
}

.dialog-header { flex-shrink: 0; }  /* Never scrolls */
.dialog-body { flex: 1; overflow-y: auto; }  /* Scrolls independently */
.dialog-footer { flex-shrink: 0; }  /* Never scrolls */
```

**Why:** Sticky header/footer with scrolling body is proven pattern for usability. Users always see context (header) and actions (footer) regardless of content length. This is especially critical in healthcare workflows where action context must remain visible.

**Exception:** Full-screen dialogs or side sheets may use different scroll patterns - document these as distinct dialog systems if needed.

---

### When to Create New Dialog System

**Add new dialog pattern when:**
- Existing width tiers (sm/md/lg) don't accommodate use case
- Different interaction pattern needed (e.g., bottom sheet for mobile, side drawer for contextual info)
- Specific product area needs distinct dialog behavior (e.g., complex multi-step workflow)

**Process:**
1. **Document why existing dialog system doesn't work**
   - What use case requires different pattern?
   - Why don't current width tiers or patterns work?
   - What would new pattern solve?

2. **Propose new pattern with rationale**
   - Sketch or describe new dialog structure
   - Explain how it differs from current system
   - Show how it maintains or adapts the three principles above

3. **Escalate to Design for review**
   - Slack #design or tag @David
   - Provide context from steps 1-2
   - Get approval before implementation

4. **Once approved, add to this document**
   - New section: e.g., "Full-Screen Dialog System" or "Side Sheet System"
   - Document width, spacing, behavior
   - Explain when to use vs standard dialog

**Maintain principles:** Even new dialog systems should follow vertical alignment and gap consistency principles above. If structural consistency (Principle 3) needs to differ, document why and how the new pattern maintains usability.

---

### Slot Architecture

**What is slot architecture?**

Slot architecture is a compositional pattern for building complex components by breaking them into **atomic regions (slots)** with **fixed responsibilities** and **token-based styling**.

**Think of slots as:**
- Structural regions within a component (header, title, content, actions)
- Each with a specific purpose and styling rules
- Composed together to build the complete component

**Slots are NOT tokens.** Slots USE tokens.
- **Token** = Value (e.g., `--space-3: 12px`)
- **Slot** = Structure (e.g., title region within card)
- **Implementation** = Tokens applied to slot (`.card__title { font-size: var(--type-title-lg); }`)

**Slot names follow BEM convention** - see "Naming Conventions & Taxonomy" section for complete patterns.

---

#### When to Use Slot Architecture

**Use slot architecture for:**
- ✅ Complex components with multiple distinct sections (cards, list items, panels)
- ✅ Reusable patterns across product (task cards, equipment cards, patient cards)
- ✅ High-density operational UI requiring consistent structure

**Don't use slot architecture for:**
- ❌ Simple components (buttons, badges, inputs)
- ❌ One-off specialized components
- ❌ Components with unpredictable structure that varies significantly per use case

---

#### How to Implement Slots (Frontend)

**Option A: CSS Class-Based (Recommended for consistency)**

```css
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4); /* Spacing between slots */
  padding: var(--space-3);
  border-radius: var(--shape-sm);
  background: var(--color-surface-primary);
}

.card__header {
  font-size: var(--type-label-md);
  color: var(--color-text-secondary);
}

.card__title {
  font-size: var(--type-title-lg);
  font-weight: 600;
  color: var(--color-text-primary);
}

.card__metadata {
  font-size: var(--type-body-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.card__content {
  font-size: var(--type-body-md);
  color: var(--color-text-primary);
}

.card__progress {
  height: 4px;
  background: var(--color-surface-elevated);
  border-radius: var(--shape-full);
}

.card__actions {
  display: flex;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-primary);
}
```

**HTML:**
```html
<div class="card">
  <div class="card__header">
    <span class="badge">URGENT</span>
  </div>
  <div class="card__title">
    Equipment Request #1234
  </div>
  <div class="card__metadata">
    ICU Ward • Requested 2 hours ago
  </div>
  <div class="card__content">
    Need portable X-ray machine for Room 301
  </div>
  <div class="card__progress">
    <!-- Progress bar fill -->
  </div>
  <div class="card__actions">
    <button>Approve</button>
    <button>Reject</button>
  </div>
</div>
```

**Naming convention:** `.component__slot-name` (BEM-style)

---

**Option B: Component Props (React/Angular)**

```tsx
// React example
interface CardProps {
  header?: React.ReactNode;
  title: string;
  metadata?: string;
  content: string;
  progress?: number;
  actions?: React.ReactNode;
}

function Card({ header, title, metadata, content, progress, actions }: CardProps) {
  return (
    <div className="card">
      {header && <div className="card__header">{header}</div>}
      <div className="card__title">{title}</div>
      {metadata && <div className="card__metadata">{metadata}</div>}
      <div className="card__content">{content}</div>
      {progress !== undefined && (
        <div className="card__progress">
          <div className="card__progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}
      {actions && <div className="card__actions">{actions}</div>}
    </div>
  );
}

// Usage
<Card
  header={<Badge>URGENT</Badge>}
  title="Equipment Request #1234"
  metadata="ICU Ward • Requested 2 hours ago"
  content="Need portable X-ray machine for Room 301"
  progress={65}
  actions={
    <>
      <Button>Approve</Button>
      <Button>Reject</Button>
    </>
  }
/>
```

**Naming convention:** `slotName` (camelCase props)

---

#### Slot Architecture Principles

**Principle 1: Fixed Responsibilities**

Each slot has one clear purpose:
- Header slot: Badge, status, or priority indicator (optional)
- Title slot: Primary identifier (always present)
- Metadata slot: Secondary contextual info (optional)
- Content slot: Main operational detail (always present)
- Progress slot: Visual feedback indicator (optional)
- Actions slot: Interactive buttons (optional)

**Never:** Mix responsibilities (don't put actions in header slot, don't put metadata in title slot)

---

**Principle 2: Token Wiring**

Every slot must wire to design tokens. No arbitrary styling.

```css
/* Good - uses tokens */
.card__title {
  font-size: var(--type-title-lg);
  margin-bottom: var(--space-2);
}

/* Bad - arbitrary values */
.card__title {
  font-size: 18px;
  margin-bottom: 9px;
}
```

---

**Principle 3: Conditional Visibility**

Slots with no data must not occupy space.

```tsx
// Good - conditional rendering
{metadata && <div className="card__metadata">{metadata}</div>}

// Bad - empty slots take up space
<div className="card__metadata">{metadata}</div>
```

Use `display: none` or conditional rendering to collapse empty slots.

---

**Principle 4: Density Rule**

If a slot requires text smaller than `--type-body-sm` (12px) to fit, the layout has failed.

**Solution:** Switch parent page framework from Expand/Reflow to Fluid to gain horizontal space. Don't shrink text below 12px.

---

#### Designing with Slot Architecture (For Design Team)

When designing components that should use slot architecture:

**1. Identify Slots First**

Before designing visuals, break component into logical slots:
- What are the distinct regions? (header, title, content, actions)
- What's the responsibility of each region? (identification, metadata, interaction)
- Which slots are always present vs conditional?

**Example - Equipment Card:**
- Header slot: Priority badge (conditional - only for urgent items)
- Title slot: Equipment name + ID (always present)
- Metadata slot: Location, requested by, timestamp (always present)
- Content slot: Description of need (always present)
- Progress slot: Request status visual (conditional - only for in-progress)
- Actions slot: Approve/Reject buttons (conditional - only for pending requests)

---

**2. Organize Figma Components by Slots**

Structure Figma components to mirror slot architecture:

```
Equipment Card Component
├── Header (variant: visible/hidden)
├── Title (text layer)
├── Metadata (text layer)
├── Content (text layer)
├── Progress (variant: visible/hidden)
└── Actions (variant: visible/hidden)
```

**Why:** Engineers can map Figma structure directly to code slots. This reduces ambiguity and speeds up implementation.

---

**3. Use Design Tokens in Figma**

Apply design tokens at slot level in Figma:
- Header text: `Typography/Label-MD` (13px)
- Title text: `Typography/Title-LG` (18px)
- Metadata text: `Typography/Body-SM` (12px)
- Spacing between slots: `Spacing/4` (16px)
- Card padding: `Spacing/3` (12px)

**Why:** Engineers know exactly which tokens to use when implementing. No guessing "is this 14px or 16px?"

---

**4. Design for Conditional Slots**

Show component states with slots present/absent:
- **Full state:** All slots visible (header, title, metadata, content, progress, actions)
- **Minimal state:** Only required slots (title, metadata, content)
- **In-progress state:** With progress bar visible
- **Completed state:** No actions slot

**Why:** Engineers need to handle empty slots gracefully. Showing all states prevents implementation confusion.

---

**5. Document Slot Responsibilities in Figma**

Add notes in Figma or design handoff documentation:
- "Header slot: Optional. Shows priority badge when equipment request is urgent."
- "Title slot: Required. Always displays equipment name + request ID."
- "Actions slot: Optional. Shows Approve/Reject buttons when user has admin permissions and request is pending."

**Why:** Engineers understand conditional logic and data requirements for each slot.

---

**6. Maintain Slot Consistency Across Components**

If multiple card types use slot architecture:
- Title slot should always be second position (after optional header)
- Metadata slot should always be below title
- Actions slot should always be at bottom
- Spacing between slots should be consistent (`--space-4`)

**Why:** Creates predictable patterns across product. Users and engineers both benefit from consistency.

---

#### Design Handoff Checklist (Slot Architecture)

When handing off designs using slot architecture:

- [ ] Component broken into named slots (header, title, metadata, content, actions)
- [ ] Each slot labeled in Figma with clear responsibility
- [ ] Design tokens specified for each slot (typography, spacing, color)
- [ ] Conditional slots documented (when they appear/hide based on data or permissions)
- [ ] All slot states shown (full, minimal, in-progress, completed, etc.)
- [ ] Spacing between slots uses design tokens (e.g., `--space-4` between sections)
- [ ] Empty slot behavior specified (collapse, show placeholder, etc.)

---

### Shell Architecture (3-Zone System)

The application uses persistent 3-zone layout with fixed viewport and internal scrolling.

#### Zone Sizing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--header-height` | 64px | Zone 1 (Global header) fixed height |
| `--sidebar-width` | 256px | Zone 2 (Navigation) expanded width |
| `--sidebar-mini` | 64px | Zone 2 collapsed width |
| `--z-index-header` | 50 | Header layer priority |
| `--z-index-sidebar` | 40 | Sidebar layer priority |

---

#### 3-Zone Structure

**Zone 1: Global Header (Persistent)**
- Fixed to top, 100% viewport width
- Height: `var(--header-height)` (64px)
- Z-index: `var(--z-index-header)` (50)
- Bottom border: 1px solid `var(--border-color)`

**Slots:**
1. Left: Toggle button (44×44px) + product logo/name
2. Center: Flexible/empty (reserved for global search)
3. Right: Global utilities (system status, profile)

---

**Zone 2: Navigation Sidebar (Persistent)**
- Fixed to left edge, sits below or alongside header
- Width: `var(--sidebar-width)` (256px expanded) or `var(--sidebar-mini)` (64px collapsed)
- Z-index: `var(--z-index-sidebar)` (40)
- Transition: `width var(--duration-medium-1) var(--ease-standard)` (250ms)
- Internal vertical spacing: `var(--space-4)` (16px) for menu groups

---

**Zone 3: Main Content Area (Dynamic)**
- **CRITICAL RULE:** Must use `flex: 1` and `overflow-y: auto`
- This zone provides scrollable window for application
- Internal layout inherits assigned Page Framework (Reflow/Expand/Fluid)

---

#### Navigation Menu Standards

- **Touch Target:** Every nav link minimum 44px height
- **Icon Size:** 24px for primary links, 20px for secondary footer links
- **Active State:** Highlight using primary brand color
- **Mini Mode:** Text labels hidden (`display: none`), tooltips enabled on right side
- **Transition:** 200ms ease-in-out for expand/collapse

**Reference Pattern:** Navigation behavior and interaction should follow YouTube's global nav/menu pattern:
- Persistent sidebar with expand/collapse toggle
- Hamburger menu (☰) in header toggles sidebar state
- Smooth width transition when expanding/collapsing
- Tooltip labels appear on hover in collapsed (mini) mode
- Active page highlighted in navigation
- Responsive: Sidebar overlays content on smaller screens (not yet implemented in v1.0)

**Why YouTube:** Proven pattern used by millions daily, familiar to users, accessible, well-tested interaction model for healthcare operational interfaces.

---

#### Shell Critical Rule

**Total app height:** Locked to `100vh`. No element should cause entire browser window to scroll. Zone 3 provides the scrollable window for content.

---

## Safety Constraints (DO NOT VIOLATE)

These are non-negotiable rules. Violating them creates technical debt, accessibility issues, or breaks the design system.

### Spacing Constraints

❌ **Never use spacing values not divisible by 4**
- Invalid: `margin: 10px`, `padding: 15px`, `gap: 7px`
- Valid: `margin: 12px`, `padding: 16px`, `gap: 8px`

❌ **Never apply individual margins to child elements**
- Invalid: Each card has `margin-bottom: 16px`
- Valid: Parent container uses `gap: 16px` or `space-y-4`

✅ **Always use spacing tokens**
- Use `var(--space-6)` not `24px`
- Use `gap` utilities over individual margins

---

### Typography Constraints

❌ **Never use arbitrary pixel values**
- Invalid: `font-size: 15px`, `font-size: 19px`
- Valid: `font-size: var(--type-title-lg)` (18px)

❌ **Never use text smaller than 12px**
- If content requires text below `--type-body-sm` (12px), layout has failed
- Solution: Switch to Fluid framework to gain horizontal space

✅ **Always use semantic tokens**
- Use `var(--type-body-md)` not `14px`
- Apply weight separately: `font-weight: 600`

---

### Color Constraints

❌ **Never hardcode hex values**
- Invalid: `color: #67b219`, `background: #5C2D82`
- Valid: `color: var(--kio-button-primary-color)`

❌ **Never violate semantic color meaning**
- Invalid: Red for primary action buttons
- Invalid: Green for warning states
- Invalid: Red for branding
- Valid: Red exclusively for errors, destructive actions, critical alerts
- Valid: Green for success, healthy states, confirmations

✅ **Always use design tokens**
- Use `var(--status-critical)` not `#EF4444`
- Follow semantic rules: green=good, yellow=warning, red=bad, blue=info

---

### Component Constraints

❌ **Never create dialog widths outside defined tiers**
- Invalid: `width: 500px`, `width: 600px`
- Valid: `width: var(--dialog-sm)` (320px), `var(--dialog-md)` (440px), `var(--dialog-lg)` (560px)

❌ **Never create touch targets smaller than 44×44px**
- All buttons, links, and interactive elements must meet minimum size
- Invalid: 32px height button without padding
- Valid: 44px minimum touch target

❌ **Never skip state layer patterns for interactive elements**
- All buttons, cards, links must implement hover/focus/pressed states
- Invalid: Only background color change on hover
- Valid: 8% state layer overlay on hover, 12% on focus, outline on focus-visible

---

### Implementation Constraints

❌ **Never use arbitrary z-index values**
- Invalid: `z-index: 999`, `z-index: 5`, `z-index: 100`
- Valid: `z-index: var(--z-modal)` (1050)

❌ **Never create custom elevation shadows**
- Invalid: `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`
- Valid: `box-shadow: var(--elevation-2)`

---

## When to Escalate to Design

Not everything is covered by this document. Here's when to involve Design team:

### Immediate Escalation Required

**Creating new patterns:**
- New layout framework variant (beyond Reflow/Expand/Fluid)
- New component pattern not documented here
- Slot architecture for new component type

**Modifying system tokens:**
- Changing spacing scale values
- Adding new typography sizes
- Modifying elevation or shape values

**Color decisions:**
- Adding colors outside defined semantic system
- Determining color for ambiguous use case
- Theme-specific decisions during NEW theme development

**Framework uncertainty:**
- Unclear which framework to use (Reflow/Expand/Fluid)
- Edge case not covered by framework definitions
- Responsive behavior not documented

**Breaking safety constraints:**
- Any scenario requiring spacing not divisible by 4
- Text smaller than 12px legitimately needed
- Touch target cannot meet 44×44px minimum

---

### Communication Channels

**For Design Review:**
- Tag @David or Design team in Figma
- Request design review in pull request

**For Quick Questions:**
- Slack: #design channel
- Direct message for urgent clarifications

**For Implementation Questions:**
- GitHub PR comments
- Slack thread with context

---

### What NOT to Escalate

**Don't escalate for:**
- Choosing between defined tokens (e.g., `--space-4` vs `--space-6` for specific use case)
- Standard component implementations following documented patterns
- Color choices following semantic rules (green for success, red for error)
- Typography choices using defined tokens appropriately

**Trust the system** - if pattern is documented and constraint is clear, proceed with confidence.

---

## System Vision & Scaling

### Design Principles

This system is built to support four core objectives:

**1. Scale with AI-First Development**

Design tokens allow Claude and other AI tools to generate consistent UI without human intervention on every decision. By encoding constraints once (in this document), AI reads them on every interaction.

**Example:** Engineer asks Claude Code to create a new dashboard card. Claude reads DESIGN.md, uses `--type-title-lg` for header, applies `var(--space-6)` for padding, implements state layers for hover. Result: Consistent with design system without designer review.

---

**2. Support Rapid Iteration**

Clear patterns reduce decision paralysis. When there are three layout frameworks (not infinite choices), engineers and AI can move faster. When there are 16 semantic typography classes (not arbitrary sizing), implementation accelerates.

**Speed comes from constraints, not freedom.**

---

**3. Maintain Quality at Scale**

Safety constraints prevent common mistakes before they happen. By making certain patterns invalid (spacing not divisible by 4, text below 12px, hardcoded colors), the system enforces quality automatically.

**Quality is encoded, not inspected.**

---

**4. Enable Team Velocity**

Documented patterns reduce back-and-forth between Design and Engineering. When component patterns are defined (dialog structure, slot architecture, shell layout), teams can implement independently and escalate only edge cases.

**Documentation eliminates recurring questions.**

---

### Token Philosophy

Tokens are organized by **semantic role**, not visual properties. This is intentional and critical to system evolution.

#### Good Token Naming (Semantic)

✅ `--type-title-lg` (role: title, size: large)  
✅ `--space-6` (scale: 6th position in spacing scale)  
✅ `--elevation-3` (level: 3 in elevation hierarchy)  
✅ `--shape-sm` (size: small in shape scale)

#### Bad Token Naming (Visual)

❌ `--font-18px` (brittle, breaks if size changes)  
❌ `--margin-card` (context-specific, doesn't scale)  
❌ `--shadow-dropdown` (component-specific, inflexible)  
❌ `--radius-button` (tied to one component)

---

#### Why Semantic Naming Matters

**System can evolve without breaking implementations:**
- Change `--type-title-lg` from 18px to 20px globally
- All components using token update automatically
- No find/replace across codebase

**AI understands intent, not just values:**
- Claude knows `--type-title-lg` is for headers, not just "18px"
- Can apply appropriate weight, color, spacing based on semantic role
- Makes smarter decisions about typography hierarchy

**Components adapt across contexts:**
- Same `--elevation-3` token works for dropdowns, popovers, menus
- Token encodes "moderately elevated" concept, not specific shadow
- Implementation details can change without touching components

---

### Evolution Strategy

As the design system matures, we will:

**1. Consolidate Color Tokens (In Progress)**

Current state: OLD theme has inconsistent naming, NEW theme has core tokens defined but incomplete tonal palettes.

Next steps:
- Complete NEW theme tonal palettes (50-900 scales for Eclipse purple, status colors, neutrals)
- Systematize OLD theme tokens to match NEW theme structure
- Define migration path and theme-switching architecture

**Timeline:** Q1/Q2 2026

---

**2. Add Component-Specific Patterns (As Needed)**

Not every component pattern is documented yet. As teams build new interfaces and patterns emerge, we'll add them to this document.

**Process:**
- Team builds component following existing system
- If pattern is reusable, document it here
- If pattern requires new tokens, escalate to Design first

**Rule:** Only document patterns that will be reused 3+ times. Don't prematurely abstract.

---

**3. Refine Based on Real Usage**

AI-generated code will surface edge cases and ambiguities. As Claude Code and other tools use this system, we'll learn:
- Which patterns are unclear
- Which constraints are too rigid
- Which tokens are missing
- Where engineers repeatedly escalate

**Feedback loop:** Document learnings, update system, improve AI results.

---

**4. Expand Platform Coverage (Future)**

Current version focuses on web (desktop breakpoints). Future versions will add:
- Native iOS specifications (separate DESIGN-iOS.md)
- Native Android specifications (separate DESIGN-Android.md)
- Mobile web patterns (when Medium/Compact breakpoints activate)

**Approach:** Create separate, platform-specific supplements that reference this core system. Don't muddy the web-focused foundation with native details.

---

### Living System Philosophy

**This is a living system - expect updates as we learn.**

Key principles:
- **Document after doing:** Don't write patterns before they're proven in real interfaces
- **Iterate based on usage:** Update system when patterns prove useful across multiple contexts
- **Evolve, don't rebuild:** Refine existing tokens and patterns rather than creating parallel systems
- **Maintain backward compatibility:** When tokens change, provide migration path

**Version history at bottom of document tracks major changes.**

---

## Version History

**v1.0 (2026-02-12)** - Initial operational control surface
- Foundation: Layout frameworks (Reflow/Expand/Fluid), spacing (4px base), typography (16 classes), component patterns (dialogs, slots, shell)
- Material Design 3 baseline systems: Elevation, shape, motion, interactive states, icon sizing
- Color system: Semantic rules documented, theme consolidation in progress (OLD/NEW themes defined with disclaimers)
- Safety constraints and escalation triggers defined
- System vision and scaling philosophy established

---

**Future versions will document:**
- Completed color theme consolidation (tonal palettes, migration path)
- Additional component patterns as they emerge
- Platform-specific supplements (iOS, Android)
- Learnings from AI-assisted development in practice

---

## Document Maintenance

**Owner:** Design Team (David Hong, Principal Product Designer)  
**Review Cycle:** Quarterly or as major patterns emerge  
**Feedback:** Slack #design channel or direct to Design team  

**How to contribute:**
1. Identify pattern used 3+ times that's not documented
2. Draft pattern documentation following existing structure
3. Submit to Design team for review
4. Once approved, update this document and increment version

**What not to add:**
- One-off component solutions
- App-specific business logic
- Implementation details that belong in code comments
- Platform-specific patterns (use separate supplements)

---

*This document is the operational control surface for AI-assisted UI development at Kontakt.io. It eliminates cold starts, reduces risk, and makes large-scale change safe.*