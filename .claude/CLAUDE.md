# Burien Best Care Home - Project Instructions

## Project Overview
Website for Burien Best Care Home (burienbestcarehome.site), a licensed adult family home in Burien, WA. Max 6 residents. Services: Memory Care, Daily Living Assistance, Respite Care, Post-Hospital Recovery.

## Tech Stack
- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4 with `@theme` tokens in `nextjs-site/src/app/globals.css`
- Framer Motion for animations
- Static export (`output: 'export'`) for Vercel deployment
- Source code in `/nextjs-site/`
- Deploys automatically to `burienbestcarehome.site` on every push to `master`

## Content Rules (MANDATORY)
- NEVER use em dashes anywhere in copy
- Voice: compassionate, trustworthy, professional but deeply human
- Wellness brand aesthetic, NOT clinical/institutional
- Two CTA types always: Direct ("Schedule a Visit") + Transitional ("Download Our Family Guide")
- Primary ICP: Adult daughter (38-55) making care decision for parent
- StoryBrand framework: Family is the HERO, facility is the GUIDE

## Design System (updated April 22, 2026)

### Primary palette
- Slate `#2D3E4A` — headlines, primary dark
- Slate Soft `#3A4D5A` — secondary dark
- Moss `#5A6E58` — brand green
- Moss Light `#8FA58B` — secondary green
- Fog `#E8ECE6` — cool section wash
- Bone `#FDFBF7` — warm off-white (primary surface)
- Clay `#B8876B` — sparing warm accent
- Clay Deep `#8F6245` — warm accent dark
- Ink `#1A2028` — body text
- Ink Soft `#4A5560` — secondary text

### Legacy aliases (preserved in globals.css — don't remove)
Old Tailwind class names still work and now resolve to the new palette:
- `bg-sage` / `text-sage` → moss
- `bg-cream` → warmer off-white
- `bg-terracotta-light` → cool fog (was the pink-peach)
- `bg-terracotta` → clay
- `text-forest` → deep slate (fixes green-on-H1 readability)

### Backdrop
- Body has layered radial gradients + cream→fog linear wash, `background-attachment: fixed`, and a subtle SVG fractalNoise grain overlay at 3.5% opacity.
- Pages should keep `<section>` tags as `bg-transparent` so the backdrop shows through.
- For contained content surfaces, use `<div className="glass-panel p-8 sm:p-12 lg:p-16 ...">`.

### Glass surfaces
- `.glass-panel` utility class — preferred for large content containers.
- `GlassCard` component with three variants:
  - `glass` (default) — semi-transparent bone, blurred
  - `white` — solid bone, no blur
  - `tinted` — moss-tinted frosted glass (replaces old `terracotta` variant)
- `prefers-reduced-transparency` is respected (falls back to opaque bone).

### Typography
- DM Serif Display 400 — headlines only (defaults to slate)
- Inter 300-700 — body, nav, buttons
- Minimum body size 18px with clamp-based responsiveness

## Accessibility Requirements
- WCAG AA minimum
- 48px+ touch targets
- 4.5:1 contrast ratios
- No heading level skips
- All images need descriptive alt text
- Keyboard navigable with visible focus states
- Respect `prefers-reduced-motion` and `prefers-reduced-transparency`

## Deployment
- Push to `master` on `YourNextStepTeam/burienbestcarehome-site` → Vercel auto-builds and deploys.
- Build from `/nextjs-site/` subdirectory.
- No manual deploy step required.

## When Making Changes
- Whenever a meaningful change ships, update `SESSION_LOG.md` (append a new dated session) and `LIVING_NOTES.md` (adjust design decisions or open items).
- Commit these doc updates alongside the code change so the record stays in sync.
- Prefer palette/aliases in `globals.css` over one-off color values in components.

## Related Brands
- yourbestseason.com (senior transition education)
- yournextstephome.com (real estate for families in transition)

## Key Files
- `SESSION_LOG.md` — append-only build history
- `LIVING_NOTES.md` — current design decisions + open items (edit in place)
- `.claude/CLAUDE.md` — this file (project instructions)
- `nextjs-site/src/app/globals.css` — single source of truth for palette tokens
