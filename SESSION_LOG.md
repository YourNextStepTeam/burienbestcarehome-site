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

---

## May 8, 2026 — Email infrastructure + repo workflow scaffolding

**Session driver:** Brett (whispering remotely into Becca's Claude account). Goal: stand up the Burien Best Care Home email infrastructure end-to-end (domain, Workspace, DNS records, group routing) and codify the multi-Claude / GitHub-as-shared-brain workflow into the repo.

### Email infrastructure (the big lift)

**Workspace setup:**
- Confirmed `burienbestcarehome.com` is owned at GoDaddy (auto-renew on, expires 2027-03-31, on GoDaddy nameservers). DNS state pre-session: parked, no MX records, DMARC at `p=quarantine` already, an SPF flattening chain via `dc-aa8e722993._spfm` already pointing to Google.
- Created Google Workspace at `burienbestcarehome.com`. Free trial active 13 days, paid service starts 2026-05-22.
- Initial signup put us on Business **Plus** ($19.80/user/mo trial, $26.40 standard). Downgraded to Business **Starter Flexible** at **$8.40/user/mo** (no annual commitment — explicit Becca call to retain monthly flexibility for first 60 days).
- Primary user: `becca@burienbestcarehome.com`, Super Admin, Starter license auto-assigned.

**Group architecture (corrected mid-session):**
- Initially set up `info@` and `daniela@` as aliases on Becca's seat. Brett clarified the actual intent was Workspace **Groups** with multiple owners (so `becca@yournextsteprealty.com` could be a perpetual co-owner without paying a second seat).
- Reversed the aliases. Created `info@burienbestcarehome.com` as a Group with description "Primary inbound email for Burien Best Care Home." Two owners: `becca@burienbestcarehome.com` (internal) + `becca@yournextsteprealty.com` (external). External membership flag enabled in group settings.
- Skipped a separate `daniela@` group for now — Daniela's personal Gmail to be added as group member when Becca has it.
- The Admin Console's group-member picker rejects external addresses (chip won't form). Used `groups.google.com/u/3/a/burienbestcarehome.com/g/info/members` as the standalone Groups UI to add the external owner. CAPTCHA required (Becca completed it).

**DNS records added at GoDaddy:**
- 5 MX records (Name `@`): priority 1 → `aspmx.l.google.com`, priority 5 → `alt1.aspmx.l.google.com`, priority 5 → `alt2.aspmx.l.google.com`, priority 10 → `alt3.aspmx.l.google.com`, priority 10 → `alt4.aspmx.l.google.com`. GoDaddy required these to be entered as multiple **values** under one MX record entry via "Add another value" — entering them as separate rows triggered fake "name conflict" warnings.
- DKIM TXT record (Name `google._domainkey`) with the 2048-bit key generated in Workspace admin (Apps → Google Workspace → Gmail → Authenticate Email → Generate new record). Despite Google's "wait 24-72 hours after enabling Gmail" warning, the key generated successfully on first try.
- SPF: no new record added — the existing `@` SPF chain via `dc-aa8e722993._spfm` already includes `_spf.google.com`. Adding another @ SPF would have created duplicate-SPF failures.
- DMARC: pre-existed at `_dmarc` with `p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;`.
- Workspace domain verification TXT auto-added during signup.

**Pending (next session):**
- Wait for DNS propagation (~1-48h), then click "Start authentication" in Workspace admin to activate DKIM signing on outbound mail.
- Add Daniela's personal Gmail to the `info@` group as member.

### Repo workflow scaffolding

**Brett's GitHub access investigation:**
- Verified `@YourNextStepTeam` is a personal user account, not an Organization (the `/orgs/.../people` URL 404'd).
- On Free Personal accounts, repo collaborators get **Write only** — no Admin role available. The earlier sync report's note about this limitation was correct.
- Brett already has Write (he's a Collaborator). For day-to-day work — pushing code, adding research/strategy/blog files, reorganizing folders, updating markdown docs — Write is sufficient.
- Future move: migrate repos to a free GitHub Organization to give Brett true Admin. Logged as a follow-up task; not done today.

**Doc structure codified:**
- New `STATUS.md` at repo root: "current state, in-flight, blockers." Designed to be the first file any Claude session reads. Frequently updated, terse.
- Updated `.claude/CLAUDE.md`: added explicit Session Bootstrap routine, multi-Claude/GitHub-as-shared-brain workflow notes, repo structure map, commit message discipline, email infrastructure summary, and Key People section.
- This SESSION_LOG entry.

### Code changes (pushed in this commit)

- Phone number `(206) 555-0142` → `(253) 678-7089` across `Footer.tsx` (twice), `ContactForm.tsx` error message, and homepage `LocalBusiness` JSON-LD schema.
- Email references in components: `info@burienbestcarehome.site` → `info@burienbestcarehome.com` in Footer and OpenHouseForm. ContactForm switched to `becca@burienbestcarehome.com` (direct line to Becca, per Brett — vs. the info@ group).

### Decisions captured

- Domain split is intentional: website on `.site`, email on `.com`. Don't flip the website canonical to `.com` without explicit approval.
- Cold-outreach future move: when GoHighLevel arrives, configure it on a subdomain (e.g., `mail.burienbestcarehome.com`) to isolate marketing-automation reputation from primary `info@` reputation.
- Address publish: Becca leaning yes for map-pack SEO; pending final confirmation.
