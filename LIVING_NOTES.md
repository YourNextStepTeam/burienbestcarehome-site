# Living Notes - Burien Best Care Home Website

## Design Decisions

### Sunshine Polish Pass (April 22, 2026 — Phase C)
Second iteration on the glassmorphic redesign. Brett flagged that slate-blue H1s read too cool, terracotta accent bars looked brown/muddy, and the CTA button didn't pop. Locked in **sunshine yellow** as the site's single accent/pop color — "lemons in a glass bowl on a kitchen table" energy.

**New tokens (in addition to the Phase B palette):**
- Sunshine: `#F3B94D` — pop accent, filled CTA buttons, horizontal accent bars, italic highlights on dark surfaces.
- Sunshine Deep: `#D99A2B` — CTA hover, italic highlights on light surfaces, sunshine-deep button hover.

**Homepage changes:**
- Hero H1 color: slate → **ink** (`#1A2028`, near-black) for maximum weight + readability.
- "safety" italic in the H1: moss green → **sunshine deep**, italic, font-semibold.
- Schedule a Visit button (`ScheduleVisitButton` component, all four `surface` variants): outlined clay → **filled sunshine with dark ink text**, deep-sunshine on hover.
- Every `<GlassCard variant="white">` on the homepage → **`variant="glass"`** so cards read as true frosted glass over the warm-cream backdrop.
- `GlassCard` `tinted` variant: mint-tinted → **sunshine-tinted frosted glass** (`rgba(253,244,222,0.55)` body with sunshine-deep-tinted border).
- Feature-grid accent bars ("Two Futures…", "Care Shaped Around Your Family"): all 10 bars now sunshine, consistent across sections.
- "stepping up" italic emphasis → sunshine deep; "What Becomes Possible?" italic on the dark card → sunshine.
- "What Happens If You Do Nothing?" italic "Nothing" and "can't unsee" phrases kept in slate (problem-agitation tone) with a sunshine underline accent — warmth without making warning copy read cheery.

**Inner pages (about, services, contact, next-steps) — same transforms batched:**
- All `bg-terracotta`/`bg-terracotta-deep` horizontal accent bars → sunshine.
- All `text-terracotta[-deep] italic` emphasis on light surfaces → sunshine-deep italic font-semibold.
- All outlined `border-terracotta-deep` CTA buttons → filled sunshine buttons with ink text.
- Uppercase-eyebrow pill labels (`text-terracotta` on light bg) → `text-slate-soft` for legibility.

**Backdrop simplification:**
- The 3-blob radial gradient backdrop (moss top-right + slate bottom-left + clay bottom-right) from Phase B read as "dirty" against section transitions. Replaced with a single soft sunshine wash at 88% -10% (12% opacity) over a clean `cream → bone` vertical gradient. Grain overlay preserved.

**Forms left alone:** `ContactForm`, `OpenHouseForm`, and the terracotta-deep error text / required-field asterisks stay muted clay so validation states remain high-contrast and unambiguous. The `terracotta` tokens are NOT aliased to sunshine — instead, sunshine is its own explicit token and applied directly where the pop is wanted.

### Glassmorphic Redesign (April 22, 2026)

Full visual refresh away from the terracotta/pink-peach palette. The site now reads modern, natural, and Mac-like.

**New palette (primary tokens):**
- Slate: #2D3E4A (primary dark — headlines, deep accents)
- Slate Soft: #3A4D5A (secondary dark)
- Moss: #5A6E58 (primary brand green)
- Moss Light: #8FA58B (secondary green)
- Fog: #E8ECE6 (cool section wash)
- Bone: #FDFBF7 (warm off-white)
- Clay: #B8876B (warm accent, minimal use)
- Clay Deep: #8F6245 (warm accent dark)
- Ink: #1A2028 (body text)
- Ink Soft: #4A5560 (secondary text)

**Legacy token aliases (auto-map in globals.css so old class names still work):**
- `bg-sage` / `text-sage` → moss (#5A6E58)
- `bg-cream` → warmer off-white (#F7F3EC)
- `bg-terracotta-light` → cool fog (#E8ECE6)  *(was the pink-peach)*
- `bg-terracotta` → clay (#B8876B)
- `text-forest` → deep slate (#2D3E4A)  *(this kills the green-on-H1 readability issue)*

**Backdrop system (globals.css):**
- Body uses layered radial gradients + a linear cream→fog wash, `background-attachment: fixed`.
- `body::before` overlays a low-opacity SVG fractalNoise grain (data URI, 300x300 tile, opacity 0.035, `mix-blend-mode: multiply`) for a subtle paper texture.
- `main`, `nav`, `footer` are set to `position: relative; z-index: 1` so the backdrop sits underneath.
- `h1, h2, h3, h4` default to `var(--color-slate)`.

**Glass system:**
- `.glass-panel` utility class: `backdrop-filter: blur(22px) saturate(130%)`, semi-transparent bone background, subtle inset highlight, soft slate-tinted drop shadow, 1.25rem radius.
- `GlassCard` component now supports three variants: `glass` (default, ~62% bone blur), `white` (solid bone), `tinted` (moss-tinted frosted glass — replaces the old `terracotta` variant).
- Accessibility: `@media (prefers-reduced-transparency: reduce)` strips backdrop-filter and falls back to 95% opaque bone.

**Section background rule:**
- Inside page files, `<section>` tags use `bg-transparent` so the body backdrop shows through.
- For contained content that needs a surface, wrap in `<div className="glass-panel p-8 sm:p-12 lg:p-16 ...">`.

### Copywriting Framework (April 9, 2026)
Applied integrated Dan Kennedy + Alex Hormozi + Donald Miller StoryBrand framework:
- **StoryBrand SB7 structure** flows through the entire homepage: Character (family) > Problem (fear/guilt) > Guide (our team) > Plan (3 steps) > CTA (dual) > Failure stakes > Success vision
- **Primary ICP**: Adult daughter, 38-55, making care decisions for aging parent
- **Voice**: Speaks directly to guilt, overwhelm, and fear of making the wrong choice
- **Headlines** address PAIN, not welcome messages. Example: "Your parent's safety shouldn't keep you up at night."
- **Services framed as OUTCOMES** (Hormozi value stacking), not features. Example: "A home, not a room number" instead of "Home-Like Environment"
- **Dual CTAs on every page**: Direct ("Schedule a Visit") + Transitional ("Download Our Family Guide")

### Technology Migration (April 9, 2026)
Migrated from static HTML/CSS/JS to Next.js:
- Chose App Router for modern routing and metadata API
- Tailwind CSS v4 with `@theme` tokens in `globals.css` (all color/font tokens live there)
- Framer Motion replaces vanilla JS Intersection Observer for animations
- Static export enabled for Vercel deployment compatibility
- Google Fonts loaded via `next/font/google` (DM Serif Display + Inter)

### Typography
- DM Serif Display 400: Headlines only (defaults to slate color)
- Inter 300-700: Body text, navigation, buttons
- Minimum body text: 18px (clamp for responsiveness)

### Content Rules (Permanent)
- NEVER use em dashes anywhere in copy
- No clinical or institutional language
- Wellness brand aesthetic, not healthcare aesthetic
- Photography: candid caregiving moments, NOT posed, NOT looking at camera

## Deployment Pipeline (April 22, 2026)
- GitHub repo: `YourNextStepTeam/burienbestcarehome-site` (master branch)
- Vercel auto-deploys on every push to master
- Live site: `burienbestcarehome.site`
- Source lives in `/nextjs-site/` subdirectory of the repo
- When pushing changes: commit to master from anywhere (CLI, GitHub web UI, Claude via MCP) and Vercel will build and deploy within ~1–2 min

## Open Items
- Family Guide PDF needs to be created for the transitional CTA
- Form backend not yet connected (placeholder handlers)
- Real photography needed to replace Unsplash images
- About page team photos needed
- Google Maps embed for contact page (API key required)
- Phone number and address are placeholders
- `/blog` infrastructure + 15 SEO/AEO/GEO-optimized posts still pending
- `/next-steps` exists as stub — needs full buildout
- Accessibility audit pass + CTA functional QA still pending
- Schema markup overhaul site-wide still pending
