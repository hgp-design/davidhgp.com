# Design Tokens

All tokens are defined as CSS custom properties in `src/index.css` under `:root`.

## Colors

| Token | Value |
|---|---|
| `--color-background` | `hsl(0, 0%, 7%)` |
| `--color-surface` | `hsl(0, 0%, 11%)` |
| `--color-surface-hover` | `hsl(0, 0%, 14%)` |
| `--color-border` | `hsl(0, 0%, 18%)` |
| `--color-text-primary` | `hsl(0, 0%, 87%)` |
| `--color-text-secondary` | `hsl(0, 0%, 55%)` |
| `--color-text-muted` | `hsl(0, 0%, 35%)` |
| `--color-accent` | `hsl(40, 65%, 55%)` |
| `--color-accent-hover` | `hsl(40, 65%, 65%)` |

## Typography

| Token | Value |
|---|---|
| `--font-primary` | `'Geist Sans', sans-serif` |
| `--font-mono` | `'Geist Mono', monospace` |
| `--font-display` | `'Fraunces', serif` |

### Type scale

| Token | Size |
|---|---|
| `--text-display-lg` | 57px |
| `--text-display-md` | 45px |
| `--text-display-sm` | 36px |
| `--text-headline-lg` | 32px |
| `--text-headline-md` | 28px |
| `--text-headline-sm` | 24px |
| `--text-title-xl` | 22px |
| `--text-title-lg` | 18px |
| `--text-title-md` | 16px |
| `--text-title-sm` | 14px |
| `--text-body-xl` | 18px |
| `--text-body-lg` | 16px |
| `--text-body-md` | 14px |
| `--text-body-sm` | 12px |
| `--text-label-xl` | 16px |
| `--text-label-lg` | 14px |
| `--text-label-md` | 13px |
| `--text-label-sm` | 12px |
| `--text-label-xs` | 11px |

## Tracking

| Token | Value |
|---|---|
| `--tracking-display` | `-0.02em` |

## Elevation

| Token | Value |
|---|---|
| `--shadow-level-1` | `0 1px 3px hsl(0, 0%, 0%, 0.4)` |

## Tooltip

| Token | Maps to |
|---|---|
| `--tooltip-font-size` | `--text-label-md` (13px) |
| `--tooltip-color` | `--color-text-primary` |
| `--tooltip-bg` | `--color-surface` |
| `--tooltip-border` | `1px solid --color-border` |
| `--tooltip-radius` | `--space-1` (4px) |
| `--tooltip-padding` | `--space-1 --space-2` (4px 8px) |
| `--tooltip-shadow` | `--shadow-level-1` |
| `--tooltip-offset` | `--space-2` (8px) |

## Layout

| Token | Value |
|---|---|
| `--layout-content-center` | `720px` |
| `--layout-content-wide` | `960px` |

## Spacing

4px base unit. Tokens `--space-1` through `--space-12`.

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-7` | 28px |
| `--space-8` | 32px |
| `--space-9` | 36px |
| `--space-10` | 40px |
| `--space-11` | 44px |
| `--space-12` | 48px |
