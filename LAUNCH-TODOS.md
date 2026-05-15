# Launch TODOs — Brett + Becca Manual Tasks

Items that block or follow the launch-readiness PR (`launch-readiness-fixes` branch).
These are the things code can't do on its own — accounts to create, credentials to confirm, content to swap.

## Brett to do

- [ ] Sign up at https://web3forms.com (free, no card required). Copy the access key.
- [ ] Set `NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel project env vars (Production + Preview + Development). Once set, both ContactForm and OpenHouseForm submissions will land in inbox instead of returning the placeholder-key error.
- [ ] In the Web3Forms dashboard, confirm the destination for the access key — typically configured as Becca's email. ContactForm payload also carries `to_email: becca@burienbestcarehome.com` and OpenHouseForm carries `to_email: info@burienbestcarehome.com`, but Web3Forms will only honor those if forwarding is enabled in the dashboard.
- [ ] Re-point DNS for `burienbestcarehome.com` to the Vercel deployment when ready to flip canonical. The code is now wired to `.com` everywhere; production deploy can stay on `.site` if needed by switching one Vercel domain alias.

## Becca to do

- [ ] Replace the 4 remaining Unsplash placeholder hero images with real photos from her Drive:
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
