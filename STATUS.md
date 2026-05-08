# Status

> Current state of the project. First file any Claude session reads after running `git fetch && git log --since="2 weeks ago" --oneline`. Update at the start of every working session. Stale items get removed, not archived (history lives in `SESSION_LOG.md` and the git log).

**Last updated:** 2026-05-08 (afternoon, after email/DNS infra session)
**Production:** `burienbestcarehome.site` — auto-deploys on push to `master`. **Note:** `.com` domain is owned but NOT live yet. Site stays on `.site` until canonical switch is intentional.
**Email:** `info@burienbestcarehome.com` (Workspace Group), `becca@burienbestcarehome.com` (primary user). DNS propagating, mail flow expected within ~1 hour.

---

## In flight

- DNS propagation for the new BBCH email infrastructure (1-48h since 2026-05-08 afternoon).
- After propagation: click "Start authentication" on DKIM in Workspace admin → activates outbound DKIM signing.

## Open launch blockers

In rough priority order. Verified against actual code in HEAD.

1. **Form backends.** ContactForm and OpenHouseForm still use `mailto:` handlers. Need Apps Script web app inside the BBCH Workspace that accepts POSTs, writes to a Sheet in the Shared Drive, and emails the right recipient. ContactForm routes to `becca@burienbestcarehome.com`; OpenHouseForm routes to `info@burienbestcarehome.com` (the Group fans out from there).
2. **Daniela's personal Gmail** — needed to add her as a member/owner of the `info@burienbestcarehome.com` Group. Becca to provide. Until then, Daniela receives BBCH mail by sharing the becca@burienbestcarehome.com login (placeholder).
3. **Family Guide PDF.** Transitional CTA exists, asset does not. Need PDF in `/public/` and the button wired to it.
4. **Address publish decision.** Contact page currently says "Address available upon request"; footer shows "Burien, WA 98148." Confirm whether to publish full street address before launch (recommended for map pack SEO; Becca leaning yes).
5. **Google Maps embed.** Tied to #4. Listed as needed in older notes; not currently in the contact page.
6. **Accessibility audit.** No end-to-end WCAG AA pass yet.
7. **CTA functional QA.** Click-through testing of every button and form on every page.

## Email/DNS infrastructure (set up 2026-05-08)

- **Google Workspace Business Starter Flexible** at `burienbestcarehome.com`, $8.40/user/mo. 13-day free trial through 2026-05-22. One paid seat: `becca@burienbestcarehome.com` (Super Admin).
- **`info@burienbestcarehome.com`** is a Workspace Group (NOT an alias). Two owners: `becca@burienbestcarehome.com` (internal) and `becca@yournextsteprealty.com` (external). External members allowed.
- **DNS at GoDaddy** (5 MX records to Google's `aspmx.l.google.com` family, DKIM TXT at `google._domainkey`, SPF chained via existing `dc-aa8e722993._spfm` flattening record, DMARC at `_dmarc` with `p=quarantine`, Workspace verification TXT). Propagation timer started 2026-05-08 afternoon.
- **Apps Script + lead-capture Sheet** to be created in this Workspace next.

## Recently shipped (in this session, not yet pushed at time of writing)

- Phone number replaced: `(206) 555-0142` → `(253) 678-7089` across Footer, ContactForm, and homepage LocalBusiness schema.
- Email references in components: `.site` → `.com` (Footer, OpenHouseForm). ContactForm now routes to `becca@burienbestcarehome.com` directly (rather than info@) per Brett.
- This `STATUS.md` and updated `.claude/CLAUDE.md` (Session Bootstrap, multi-Claude workflow notes, commit message discipline).

## Decisions waiting on Becca / Brett

- Confirm street address publish posture for launch.
- Family Guide PDF: repurpose existing brand collateral or write fresh?
- Daniela's personal Gmail address (for Group ownership add).

## Notes for the next session

- **Never work in** `C:\Users\becca\Documents\Burien Best Care Home\Burien Best Care Home\` directly from a Claude session. Windows ACLs block sandbox git ops. Always clone fresh in `/tmp` and push to GitHub.
- **Brett's GitHub admin:** Becca to invite `brettkmoore` as Owner of `YourNextStepTeam` org via `github.com/orgs/YourNextStepTeam/people` → "Invite member" → role "Owner". This gives Brett admin rights on every repo in the org including infrastructural changes.
- **Domain split is intentional:** website on `.site`, email on `.com`. `.com` is for email only until we deliberately switch the website canonical (separate task).
- **DKIM activation:** after DNS propagates, return to `admin.google.com/ac/apps/gmail/authenticateemail` and click "Start authentication" to flip DKIM signing on.
