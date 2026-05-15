# Launch TODOs — Brett + Becca Manual Tasks

Items that block or follow the launch-readiness PR (`launch-readiness-fixes` branch).
These are the things code can't do on its own — accounts to create, credentials to confirm, content to swap.

## Brett to do

- [ ] Re-point DNS for `burienbestcarehome.com` to the Vercel deployment when ready to flip canonical. The code is now wired to `.com` everywhere; production deploy can stay on `.site` if needed by switching one Vercel domain alias.

## Becca to do

### Forms backend (Google Apps Script webhook)

- [ ] Create a new Google Sheet titled "Burien Best Care Home — Form Submissions" with two tabs: `Contact` and `Open House`.
- [ ] Extensions → Apps Script → paste the starter from `templates/apps-script/Code.gs` into the editor (replace the default `Code.gs`).
- [ ] Save the script (give it a name like "BBCH Form Webhook").
- [ ] Deploy → New deployment → Type: Web app → Execute as: Me → Who has access: Anyone → Deploy. Authorize when prompted.
- [ ] Copy the generated web app URL (looks like `https://script.google.com/macros/s/AKfyc.../exec`).
- [ ] Paste it as `NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL` in the Vercel project env vars (Production + Preview + Development). Redeploy the site so the new env var bakes into the static build.
- [ ] Test by submitting both forms in preview, verifying a row writes to the correct sheet tab and an email alert lands in becca@burienbestcarehome.com (contact form) / info@burienbestcarehome.com (open house RSVP).

### Content + trust signals

- [ ] Replace the remaining Unsplash placeholder hero images with real photos from Drive:
  - `/about` — currently `/images/backyard.webp` (kept from May-2 update, good for now; swap if a better hero photo exists)
  - `/services` — currently `/images/dining-room.webp` (good for now)
  - `/next-steps` — still uses an Unsplash bedroom photo (`photo-1600585154340-be6161a56a0c`). Swap for a real home interior photo.
  - `/contact` — currently `/images/exterior-front.webp` (kept from May-2 update, good for now)
- [ ] Add the DSHS adult family home license number to the Footer. Currently footer reads "Licensed by Washington State Department of Social and Health Services (DSHS). Bonded and Insured." — adding the actual license number strengthens trust signals and is a SEO trust win.
- [ ] Confirm Daniela's nursing credentials (RN / LPN / CNA / non-credentialed) for the /about page. Current bio is intentionally non-credentialed; if she carries a credential we should call it out.
- [ ] Add Medicaid acceptance disclosure to /services and the Footer. Current copy on /next-steps explicitly says BBCH is NOT a Medicaid-contracted facility today. If that changes, the FAQ + services copy needs an update.
- [ ] Confirm street address (publish vs. keep private). JSON-LD currently omits `streetAddress` and a TODO comment in `src/app/page.tsx` flags this for restoration once Becca confirms it's safe to publish.
- [ ] Once first 3 real reviews exist on-page (homepage testimonials section), restore `aggregateRating` in JSON-LD per `src/app/page.tsx`. The block was removed for Google policy compliance and can return once on-page reviews back it up.
- [ ] Replace generated apple-touch-icon / icon-192 / icon-512 PNGs in `nextjs-site/public/` with a real logo crop once one exists. The current icons are derived from the hero photo as a placeholder.
