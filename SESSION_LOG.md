# Session Log

## Session: April 22, 2026 - Phase C Sunshine Polish

### What Was Built
Second-pass visual polish after Brett reviewed the deployed glassmorphic redesign. Core complaint: site was "too slate-y + brown-y," accent bars looked muddy, Schedule a Visit button looked like "an ugly brown outline." Brett described wanting the sunshine/lemon energy of "a glass bowl of lemons on the kitchen table." This session locked in **sunshine yellow (`#F3B94D`)** as the site's single pop/accent color.

### Token Changes
- Added `--color-sunshine: #F3B94D` and `--color-sunshine-deep: #D99A2B` to `@theme` in `globals.css`.
- Kept terracotta/clay family aliases pointed at muted clay (NOT aliased to sunshine) so form validation colors stay visible.
- Removed the 3-blob radial backdrop (moss + slate + clay). Replaced with a single soft sunshine wash top-right over a cream→bone vertical gradient.
- Removed the blanket `h1,h2,h3,h4 { color: slate; }` rule — explicit text-color classes now win per-heading, which unblocks dark-on-dark fixes on the Possibility card.

### Component Changes
- `ScheduleVisitButton`: all four surface variants flipped from outlined-clay to filled-sunshine with dark ink text and deep-sunshine on hover.
- `GlassCard`: `tinted` variant rebuilt from mint-tint to sunshine-tint (warm frosted glass that keeps the yellow accent family visible).
- `HeroSection`: H1 slate → ink (near-black), "safety" italic swapped from moss green to sunshine-deep semibold italic.

### Page Changes
- `app/page.tsx`: all 6 feature-grid accent bars + all 4 Care Shaped accent bars now use sunshine. "stepping up" italic → sunshine-deep. "What Becomes Possible?" + "The Possibility" eyebrow on the dark Possibility card → sunshine. "can't unsee" and "Nothing" kept in slate (problem tone) but now use sunshine underline. Eight GlassCard `variant="white"` converted to `variant="glass"` for true frosted-glass feel over the backdrop.
- `app/about/page.tsx`, `services/page.tsx`, `contact/page.tsx`: batched the same transforms — accent bars → sunshine, italic emphasis → sunshine-deep, outlined CTA buttons → filled sunshine, uppercase eyebrow pills → slate-soft for legibility.

### Verification
- `npm run build` → compiled successfully, all 10 static pages generated.

### What's Next
- Push to master → Vercel auto-deploys → verify visually on `burienbestcarehome.site`.
- Optional follow-up: photo perspective correction on `/public/hero-home.jpg` (leaning right pillar).
- Phase D pickups still pending: `/blog` infra + 15 posts, schema overhaul, `/next-steps` real buildout, a11y audit, CTA functional QA, form backend.

---

## Session: April 22, 2026 - Glassmorphic Redesign + Auto-Deploy Pipeline

### What Was Built
Full site-wide visual refresh. Brett and Becca both flagged that the site (outside the hero) felt "from the 90s or early 2000s or cartoonish" — too much terracotta pink/peach, not modern enough. This session returned the site to a dark-slate + mossy-green palette, added a grain-textured layered gradient backdrop, wired glass panels into every page, and established a fully automated GitHub-to-Vercel deploy pipeline.

**Palette change:**
- OUT: Sage #7D9B76, Cream #FFF5EB, Terracotta #C4856A, Forest #2D4A3E, terracotta-light pink-peach.
- IN: Slate #2D3E4A (primary), Moss #5A6E58 (brand green), Fog #E8ECE6 (cool wash), Bone #FDFBF7 (warm off-white), Clay #B8876B (sparing warm accent), Ink #1A2028 (body).
- Legacy class names (`bg-sage`, `bg-cream`, `bg-terracotta-light`, `text-forest`, etc.) are now aliased to new palette values in `globals.css`, so the rest of the codebase doesn't have to be rewritten class-by-class.

**Backdrop system:**
- Layered `body` background: two low-opacity radial gradients (moss top-right, slate bottom-left) over a linear cream→fog wash, `background-attachment: fixed`.
- `body::before` overlays an inline-SVG fractalNoise grain at 3.5% opacity with `mix-blend-mode: multiply`.
- Every `<section>` on every page is now `bg-transparent` so the backdrop shows through.

**Glass system:**
- New `.glass-panel` utility: blur(22px) saturate(130%), semi-transparent bone, inset highlight, soft shadow.
- `GlassCard` component expanded from one variant to three: `glass`, `white`, `tinted` (moss-tint replaces the old terracotta variant).
- `prefers-reduced-transparency` fallback strips backdrop-filter.
- Headings (h1–h4) now default to slate — fixes the green-on-H1 readability issue.

**Files touched (6 commits landed via GitHub web upload flow, Vercel auto-deploys on each):**
1. `nextjs-site/src/app/globals.css` — full @theme rewrite + body backdrop + glass-panel utility. Original scrollbar/form/accordion/parallax/safe-area/responsive utilities preserved.
2. `nextjs-site/src/app/layout.tsx` — body class simplification, themeColor updated.
3. `nextjs-site/src/app/page.tsx` — all section backgrounds to transparent, Problem section + Final CTA wrapped in glass-panel, variant="terracotta" → variant="tinted", Date-Coming-Soon pill re-tokenized.
4. `nextjs-site/src/app/about/page.tsx` — section-bg sweep + tinted variant.
5. `nextjs-site/src/app/contact/page.tsx` — section-bg sweep + tinted variant.
6. `nextjs-site/src/app/services/page.tsx` — section-bg sweep + tinted variant.
7. `nextjs-site/src/app/next-steps/page.tsx` — section-bg sweep + tinted variant.
8. `nextjs-site/src/components/GlassCard.tsx` — glass/white/tinted variants.

### Deployment Pipeline Established
- GitHub repo: `YourNextStepTeam/burienbestcarehome-site` (master branch)
- Vercel auto-deploys on every push to master → `burienbestcarehome.site`
- Pipeline verified: each of the 6 commits above triggered a Vercel build automatically.
- Claude can push commits via GitHub web UI using the `/upload/<branch>/<path>/` URL pattern through the Chrome MCP — no manual copy/paste needed.

### What's Next
- Stand up `/blog` infrastructure + write 15 SEO/AEO/GEO-optimized blog drafts
- Schema markup overhaul site-wide
- Build `/next-steps` as real page (currently stub)
- Accessibility audit and fixes
- CTA functional QA across whole site
- Connect forms to backend (Formspree, Netlify Forms, or custom API)
- Add real photography (replace Unsplash placeholders)
- Create "Family Guide" PDF for transitional CTA download
- Add real phone number and address

---

## Session: April 9, 2026 - Next.js Website Build

### What Was Built
Complete Next.js website rebuild for Burien Best Care Home (burienbestcarehome.com).

**Tech Stack:**
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS (custom wellness brand theme)
- Framer Motion (scroll animations, page transitions)
- Static export compatible (output: 'export')

**Pages Built (4):**
1. **Home (/)** - Full StoryBrand SB7 flow: Hero with PAS copy, Problem section, 3-Step Plan, Outcome-focused features, Services overview, Stakes (failure/success), Team as guides, Testimonials, 10-question FAQ, Final CTA
2. **Services (/services)** - Memory Care, Daily Living Assistance, Respite Care, Post-Hospital Recovery. Each with outcome-focused feature grids and dual CTAs.
3. **About (/about)** - NEW PAGE. Becca's story as the Guide, values as promises to families, team bios, family-centered philosophy.
4. **Contact (/contact)** - Contact info cards, Schedule a Visit form with validation, "What to Expect" anxiety reducer, family resources.

**Components Built (9):**
- Navigation.tsx (glassmorphism sticky nav, mobile hamburger, scroll detection)
- Footer.tsx (4-column grid, resources, licensing)
- HeroSection.tsx (parallax bg, glassmorphism panel, PAS copy, staggered animations)
- ScrollReveal.tsx (Intersection Observer wrapper with framer-motion)
- FAQAccordion.tsx (accessible accordion with AnimatePresence)
- LoadingScreen.tsx (branded loading with fade-out)
- GlassCard.tsx (glassmorphism wrapper)
- OpenHouseForm.tsx (RSVP form with validation)
- ContactForm.tsx (full visit scheduling form with validation)

**Copywriting Framework Applied:**
- Dan Kennedy Pain-Agitate-Solution
- Alex Hormozi value stacking (outcomes, not features)
- Donald Miller StoryBrand SB7 (Character > Problem > Guide > Plan > CTA > Failure > Success)
- Primary ICP: Adult daughter (38-55) making care decisions
- Dual CTAs throughout: Direct ("Schedule a Visit") + Transitional ("Download Our Family Guide")

**Accessibility:**
- Skip-to-content link
- WCAG AA contrast ratios
- 48px+ touch targets
- Proper heading hierarchy (no skips)
- ARIA labels on all interactive elements
- prefers-reduced-motion respected
- Keyboard navigable with visible focus states
- Form labels explicitly associated with inputs

**SEO:**
- JSON-LD structured data: LocalBusiness, HealthAndBeautyBusiness, FAQPage, BreadcrumbList
- Open Graph meta tags
- Meta descriptions targeting local keywords
- Semantic HTML5 structure

---

## April 22, 2026 — Phase D: Fix tinted cards + make glass actually frost

**User feedback after Phase C:**
> "The eggshell yellow backgrounds on the text boxes... the color seems ugly."
> "I'm not seeing a glassmorphic effect on any of these other boxes still."
> "I like the color of the boxes for memory care and the daily living assistance boxes. What I don't like is that yellow background that's behind the attentive care around the clock, purpose and joy daily."

**Diagnosis:** The `tinted` variant was rgba(253,244,222,0.55) — literally an eggshell swatch, not glass. And even the `glass` variant had nothing behind it to diffuse because the page backdrop was a single uniform warm wash.

**Change log (2 commits on master):**
1. `nextjs-site/src/components/GlassCard.tsx` — rewrote `tinted` and `glass` variants to the same Apple-style frost formula: `backdrop-blur-2xl backdrop-saturate-200` + `bg-white/35-40` + `border-white/60-65` + strong inset highlight + slate-tinted drop shadow. Tinted and glass now look ~identical, which is exactly what Brett asked for.
2. `nextjs-site/src/app/page.tsx` — three sections (Three Steps / What Life Looks Like / Care Shaped Around Your Family) switched to `relative bg-transparent` with ambient colored-blob washes injected (moss + sunshine + slate for one, clay + moss + sunshine for another, moss + slate for the third). Gives backdrop-blur actual color variance to catch.

**Verification:** Next.js build passes (all 10 static pages generated). Vercel auto-deploy triggered.

**Still pending:** `/blog` infrastructure, 15 blog drafts, schema markup overhaul, `/next-steps` real buildout, a11y audit, CTA functional QA.

### Phase D.1 — blob repositioning (iteration after live check)
Live screenshot showed the right-column cards (Meals They Actually Look Forward To + You Welcome Anytime) still catching a yellow tint. Root cause was two-fold:
1. My Phase D ambient sunshine blob in What Life Looks Like sat at `top-1/3 right-0` — directly behind the right-column cards.
2. The body itself had a `radial-gradient(ellipse at 88% -10%, rgba(243,185,77,0.12))` with `background-attachment: fixed`, which painted a sunshine wash over the right edge of every section.

**Phase D.1 commit:** repositioned all sectional blobs to live at section edges (top-center, bottom-left, bottom-right) — explicitly not behind the card grid.

### Phase D.2 — kill the body-level sunshine radial
Even after the sectional blobs were repositioned, the body-level fixed radial kept tinting the right column. Removed the radial from `globals.css body { background }` entirely. Now the body is just a clean `linear-gradient(180deg, cream, bone)` with `background-attachment: fixed`. Sunshine accent color lives exclusively in the CTA buttons and italic accent words.

**Verification:** Vercel deploy fresh — screenshots confirm all six What Life Looks Like cards and both Care Shaped cards render with uniform cream-frost, no yellow bleed-through. Matches Brett's "like the Memory Care boxes" direction exactly.
