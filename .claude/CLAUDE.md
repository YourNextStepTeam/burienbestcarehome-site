# Burien Best Care Home - Project Instructions

## Session Bootstrap (read this first)

**Every Claude session, before doing real work, run this in order:**

1. `git fetch origin && git log --since="2 weeks ago" --oneline` — see what's shipped recently across collaborators.
2. Read `STATUS.md` at repo root — current state, in-flight work, open blockers.
3. Skim the latest entry in `SESSION_LOG.md` — context on the most recent design or content decisions.
4. If `STATUS.md` looks stale or contradicts what you see in code, trust the code and the latest commits.

This is how Brett's Claude and Becca's Claude stay in sync without a Teams account. GitHub is the shared brain. Commit history is authoritative; markdown summaries are convenience.

**Before signing off:**

- Update `STATUS.md` if anything in flight or blocked changed.
- Append a dated entry to `SESSION_LOG.md` if you shipped something meaningful (design, content, or structural change).
- Commit with a descriptive subject. The commit log is the source of truth for the next person.

## How we work across multiple Claude sessions

This project is collaborated on by two humans (Brett and Becca) and two Claude accounts. There is no Teams plan, so GitHub is the shared context layer.

- **Brett** does most of the technical and creative buildout from his system. He pushes to `master`, Vercel auto-deploys.
- **Becca** runs business and content; her Claude sessions read from the same repo to stay current.
- **Either Claude session** must always pull before working and push back to GitHub when shipping.
- **Never work in** `C:\Users\becca\Documents\Burien Best Care Home\Burien Best Care Home\` directly from a Claude session. That mounted folder is read-restricted by Windows ACLs and the sandbox cannot complete a `git reset`. Clone fresh inside the session sandbox, work there, push to GitHub.

This pattern is the template for other Becca brand sites (yourbestseason.com, yournextstephome.com, future projects). Keep the doc skeleton consistent across repos so any Claude session on any project knows where to look.

## Repository structure

```
burienbestcarehome-site/
├── .claude/CLAUDE.md      # this file — project instructions, auto-loaded
├── STATUS.md              # current state, in-flight work, blockers (read first)
├── SESSION_LOG.md         # append-only build history (one entry per session)
├── LIVING_NOTES.md        # design decisions in flux (edit in place)
├── README.md              # repo overview (rare updates)
├── research/              # ICP research, competitor analysis, market data
├── strategy/              # SEO/GEO/AEO playbooks, copywriting framework
├── blog/                  # blog draft markdowns (pre-publish)
├── social/                # social post drafts
└── nextjs-site/           # Next.js code that ships to Vercel
```

## Project Overview

Website for Burien Best Care Home, a licensed adult family home in Burien, WA. Up to 8 residents. Services: Memory Care, Daily Living Assistance, Respite Care, Post-Hospital Recovery.

**Domain split (intentional):**
- Website: `burienbestcarehome.site` (live, on Vercel)
- Email: `burienbestcarehome.com` (Workspace, set up 2026-05-08)
- The `.com` domain is owned but the website is NOT yet pointed there. Switching the canonical is a separate, deliberate task — do not flip it without explicit approval.

## Tech Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4 with `@theme` tokens in `nextjs-site/src/app/globals.css`
- Framer Motion for animations
- Static export (`output: 'export'`) for Vercel deployment
- Source code in `/nextjs-site/`
- Deploys automatically to `burienbestcarehome.site` on every push to `master`

## Email Infrastructure (set up 2026-05-08)

- **Google Workspace Business Starter Flexible** at `burienbestcarehome.com`, $8.40/user/mo. Free trial through 2026-05-22.
- Primary user: `becca@burienbestcarehome.com` (Super Admin, single paid seat).
- **`info@burienbestcarehome.com`** is a Workspace **Group** (not an alias). Owners: `becca@burienbestcarehome.com` (internal) + `becca@yournextsteprealty.com` (external). Daniela's personal Gmail to be added as member when available.
- DNS: 5 MX records to Google (aspmx.l.google.com family), DKIM TXT at `google._domainkey`, SPF chained to Google via existing `dc-aa8e722993._spfm` flattening record, DMARC at `p=quarantine`.
- Forms: `ContactForm` routes to `becca@burienbestcarehome.com` (direct line); `OpenHouseForm` routes to `info@burienbestcarehome.com` (group fans out).

## Content Rules (MANDATORY)

- NEVER use em dashes anywhere in copy
- Voice: compassionate, trustworthy, professional but deeply human
- Wellness brand aesthetic, NOT clinical/institutional
- Two CTA types always: Direct ("Schedule a Visit") + Transitional ("Download Our Family Guide")
- Primary ICP: Adult daughter (38-55) making care decision for parent
- StoryBrand framework: Family is the HERO, facility is the GUIDE

## Design System (current state, Phase E + sunshine polish)

### Primary palette
- Slate `#2D3E4A` — primary dark
- Slate Soft `#3A4D5A` — secondary dark
- Moss `#5A6E58` — brand green
- Moss Light `#8FA58B` — secondary green
- Fog `#E8ECE6` — cool section wash
- Bone `#FDFBF7` — warm off-white (primary surface)
- Clay `#B8876B` — sparing warm accent
- Clay Deep `#8F6245` — warm accent dark
- Ink `#1A2028` — body text
- Ink Soft `#4A5560` — secondary text
- Sunshine `#F3B94D` — pop accent, CTA buttons, accent bars
- Sunshine Deep `#D99A2B` — CTA hover, italic accents on light surfaces

### Legacy aliases (preserved in globals.css, don't remove)
- `bg-sage` / `text-sage` → moss
- `bg-cream` → warmer off-white
- `bg-terracotta-light` → cool fog
- `bg-terracotta` → clay
- `text-forest` → deep slate

### Backdrop & glass
- Body: clean cream→bone linear gradient with `background-attachment: fixed` and a subtle SVG fractalNoise grain at 3.5% opacity. (The earlier multi-blob radial backdrop was retired in Phase D.2.)
- Pages keep `<section>` tags as `bg-transparent`.
- `GlassCard` has two real variants: `solid` (default) and `glass` (true frosted, hero only). `white` and `tinted` are legacy aliases that render as `solid`.
- `prefers-reduced-transparency` is respected.

### Typography
- DM Serif Display 400 — headlines (defaults to ink)
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

## Commit Message Discipline

Descriptive commits are part of the spec. They are how the next Claude session and the next collaborator find their bearings. Conventions:

- `<area>: <what changed>` — e.g. `Contact: exterior-front hero photo, terracotta to sunshine sweep`
- `Phase <X> (<n>/<total>): <what>` for batched work
- `FIX: <what broke and how>` for bug fixes
- `docs: <what>` for SESSION_LOG / LIVING_NOTES / STATUS / CLAUDE updates
- `infra: <what>` for non-code infrastructure (DNS, Workspace, deploys)

Keep the subject under ~80 chars. If the change needs more context, use a multi-line commit body and update `SESSION_LOG.md`.

## When Making Changes

- Update `SESSION_LOG.md` (append a new dated session) when you ship something meaningful.
- Update `LIVING_NOTES.md` when design decisions or rationale change.
- Update `STATUS.md` when in-flight work or blockers change.
- Commit doc updates alongside the code change so the record stays in sync.
- Prefer palette/aliases in `globals.css` over one-off color values in components.

## Related Brands

- yourbestseason.com (senior transition education, lead-magnet brand)
- yournextstephome.com (real estate, with IDX integration to Bold Trail)

## Key People

- **Becca Pitts** — Co-Founder & Real Estate Broker. Marketing/business side. Email: `becca@burienbestcarehome.com` (BBCH primary), `becca@yournextsteprealty.com` (real estate identity).
- **Daniela Torkelson** — Provider & Resident Manager. Opened 40+ AFHs, oversees 11 facilities in King County.
- **Brett K. Moore (`brettkmoore`)** — Technical and creative lead. Built the site with Claude across multiple sessions. GitHub Write collaborator on this repo.

## Key Files

- `STATUS.md` — current state, in-flight work, blockers (read at session start)
- `SESSION_LOG.md` — append-only build history
- `LIVING_NOTES.md` — current design decisions + open items (edit in place)
- `.claude/CLAUDE.md` — this file (project instructions)
- `nextjs-site/src/app/globals.css` — single source of truth for palette tokens
