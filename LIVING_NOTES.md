# Living Notes - Burien Best Care Home Website

## Design Decisions

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
- Tailwind CSS replaces custom CSS (same design tokens ported over)
- Framer Motion replaces vanilla JS Intersection Observer for animations
- Static export enabled for Vercel deployment compatibility
- Google Fonts loaded via link tag (not next/font/google) due to build environment constraints

### Color Palette
- Sage: #7D9B76 (primary brand)
- Cream: #FFF5EB (backgrounds)
- Terracotta: #C4856A (warm accents)
- Forest: #2D4A3E (text, dark accents)
- Sage Light: #E8F0E6 (section backgrounds)

### Typography
- DM Serif Display 400: Headlines only
- Inter 300-700: Body text, navigation, buttons
- Minimum body text: 18px (clamp for responsiveness)

### Content Rules (Permanent)
- NEVER use em dashes anywhere in copy
- No clinical or institutional language
- Wellness brand aesthetic, not healthcare aesthetic
- Photography: candid caregiving moments, NOT posed, NOT looking at camera

## Open Items
- Family Guide PDF needs to be created for the transitional CTA
- Form backend not yet connected (placeholder handlers)
- Real photography needed to replace Unsplash images
- About page team photos needed
- Google Maps embed for contact page (API key required)
- Phone number and address are placeholders
