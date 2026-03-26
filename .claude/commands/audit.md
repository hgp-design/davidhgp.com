# /audit — Codebase Audit

Perform a structured audit of this portfolio codebase and output a dated report. Work through the following checks in order.

---

## 1. File inventory

List every file under `src/` and `docs/` with line counts. Flag any file over 150 lines.

## 2. Token compliance

Scan all `.css` files for:
- Hardcoded hex colors, rgb(), or hsl() values that aren't inside `:root` in `index.css`
- Hardcoded pixel spacing values that aren't multiples of 4px or that bypass `--space-*` tokens
- Any `style=` attributes in `.jsx` files (inline styles)

Report violations with file + line number. If none, say "clean".

## 3. Structure compliance

Check that:
- All component files are under `src/components/`
- Pages are under `src/pages/`
- No component logic lives in `App.jsx` (should be router-only)

## 4. Dead code / zombie files

- Check for `.css` files that are not imported by any `.jsx` file
- Check for `.jsx` or `.js` files that are not imported anywhere
- Check for assets in `src/assets/` that are not referenced in any source file

## 5. LLM hackiness check

Look for patterns that suggest AI-generated code that wasn't cleaned up:
- Files with large blocks of repetitive, mechanically-similar rules (flag file + rough line range)
- Hardcoded data arrays inside component files that would be cleaner as a separate data file
- CSS classes that are never used in JSX
- Note: hand-crafted visual components (ToolChaosField, ToolPairingsGrid) are **intentional** — flag their patterns only if they've grown beyond their original scope

## 6. CLAUDE.md completeness

Check that `CLAUDE.md` includes:
- Project goals and purpose (not just technical rules)
- Stack summary
- Hard rules

Flag any missing sections.

---

## Output format

Write a markdown report to `docs/audits/YYYY-MM-DD.md` (use today's date) with:

```
# Audit — YYYY-MM-DD

## Summary
One paragraph.

## Issues

### [Severity: High/Medium/Low] Issue title
File, line range if relevant. What it is, why it matters, suggested fix.

## Clean passes
Bullet list of checks that came back clean.
```

Then print the report to the conversation.
