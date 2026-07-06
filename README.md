# hccoretech.com

The marketing site for HC Core Tech.

Standalone Next.js 14 (App Router) + TypeScript. Brand system ported from
CoreDesk, kept independent so a change here can't break the workspace and
vice versa.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

```
app/
├── layout.tsx          root layout — wires fonts, Nav, Footer, metadata
├── page.tsx            homepage — hero, work, services, testimonials, contact
├── globals.css         reset, root CSS variables, focus/scroll styles
├── icon.svg            favicon (interlocked CC)
├── apple-icon.svg      iOS home-screen icon
├── components/
│   ├── Brand.tsx              brand tokens + HCCT marks
│   ├── Nav.tsx                sticky top nav, 5 items, mobile drawer
│   ├── Footer.tsx             site footer
│   ├── AmbientBackground.tsx  drifting orbs behind the hero
│   ├── Hero.tsx               hero section
│   ├── SelectedWork.tsx       2x2 portfolio grid
│   ├── ServicesOverview.tsx   5 services listed
│   ├── Testimonials.tsx       client quotes
│   └── ContactCTA.tsx         invitation + availability card
├── services/page.tsx    placeholder
├── coredesk/page.tsx    placeholder
├── work/page.tsx        placeholder
├── about/page.tsx       placeholder
├── contact/page.tsx     placeholder
└── legal/page.tsx       placeholder
```

## Brand system

Everything hangs off `app/components/Brand.tsx`:

- `BRAND` — palette (obsidian, gold, etc.)
- `FONTS` — the three family stacks
- `R` — radii
- `HCCTMonogram` — H + interlocked CC + T (icon)
- `HCCTMark` — monogram + hairline rule + tagline (wordmark)
- `InterlockCC` — the two facing Cs on their own

To restyle: change the palette in `BRAND`. Everything else follows.

## Deploy to Vercel

1. **Push to GitHub.** Create a new repo `hccoretech-site` on GitHub, push this project.
2. **Import to Vercel.** At [vercel.com/new](https://vercel.com/new), import the repo. Vercel auto-detects Next.js — no config needed.
3. **Deploy.** First deploy runs automatically. Preview URL like `hccoretech-site-xxx.vercel.app`.

## Point hccoretech.com at the new site

Once the Vercel deploy looks right on the preview URL:

1. In Vercel project settings → **Domains**, add `hccoretech.com` and `www.hccoretech.com`. Vercel gives you the exact DNS records to add.
2. In Squarespace DNS panel:
   - **Delete** the four Squarespace `A` records (`198.49.23.145`, `198.185.159.144`, `198.49.23.144`, `198.185.159.145`)
   - **Delete** the `www` CNAME pointing to `ext-sq.squarespace.com`
   - **Delete** the HTTPS record on `@`
   - **Delete** the `_domainconnect` CNAME under "Squarespace Domain Connect"
   - **Add** the records Vercel gave you (typically: A `@` → `76.76.21.21` and CNAME `www` → `cname.vercel-dns.com`)
3. **Do not touch** any Zoho MX/TXT/DKIM records — those keep email working.

DNS propagates in 15 minutes to a couple of hours. Check progress at [whatsmydns.net](https://www.whatsmydns.net/#A/hccoretech.com).

## After the switch

- Cancel the Squarespace hosting subscription (keep the domain registration active — it stays with Squarespace as registrar even though the site now lives on Vercel).
- Update the CoreDesk workspace footer or any other place currently linking to `hccoretech.com` — the new site replaces the placeholder holding page.

## Next up (this scaffold's TODOs)

- Individual case study pages under `/work/[slug]`
- Real service pages under `/services` with anchor IDs (`#websites`, `#ai-engineering`, `#ai-governance`, `#advisory`)
- Contact form wired to Zoho, Resend, or the CoreDesk CRM webhook
- About page copy (personal story, values, credentials)
- Real Tolusope Aina testimonial (currently placeholder)
- Legal pages (privacy, terms, cookies)
- Sitemap + robots.txt
- Analytics (Plausible or similar — privacy-first, not GA)
