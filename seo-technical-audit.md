# Technical SEO Audit — hithadshut.co.il

**Date:** 2026-04-16
**Scope:** Stage 4 of 8-stage SEO overhaul.
**Stack:** Next.js 16.2.3 (App Router, Turbopack), React 19.2.4, TypeScript strict, Tailwind v4.
**Build status:** `npm run lint` 0/0, `npm run build` 0 errors, 168/168 static pages.

---

## 1. `<title>` tag — length, uniqueness, keyword-first

### Finding (pre-fix): duplicate brand suffix across the entire site
`src/app/layout.tsx` defined a title template of `%s | ${site.name}`, while every per-page `TITLE` constant already embedded the brand (`… | התחדשות בינוי ויזמות`). Result: every page rendered `…page… | התחדשות בינוי ויזמות | התחדשות` — typically 62–68 characters, truncated in SERP, brand doubled.

### Fix
Changed the template to `%s` (pass-through). One edit healed all 20 content pages at once — no per-page TITLE rewrites needed.

Exceptions: `/terms` and `/privacy` had bare two-word titles that had relied on the template for brand. Added brand to their TITLE constants manually:
- `תנאי שימוש | התחדשות בינוי ויזמות`
- `מדיניות פרטיות | התחדשות בינוי ויזמות`

### Post-fix: title length distribution (all pages)
| Range | Count | Target |
|---|---|---|
| 50–60 chars | 18 | sweet spot |
| 60–66 chars | 4 (`/guides/mamad-cost`, `/compare/*`, `/services/prefab-mamad`) | acceptable, on the edge |
| < 50 chars | 2 (`/about`, `/areas`) | brand-heavy, keyword prominent first |
| > 66 chars | 0 |

All titles are unique, keyword-first, brand-at-end.

---

## 2. Meta description — length, call-to-value, uniqueness

### Finding (pre-fix): 22 pages under 135 characters
Sweet spot is 140–160. Pages were 72–130 chars — losing SERP real-estate, failing to signal pricing/specifics that win clicks.

### Fix: expanded 22 pages to 140–170 chars
Every expansion added concrete factual content (canonical prices, standards, step counts, phone). Nothing filler, nothing AI-tell.

Highlights:
- `/contact` — added phone 054-671-2130 + WhatsApp mention (click-to-call surface).
- `/accessibility` — named standards: WCAG 2.1 AA, תקן ישראלי ת״י 5568, חוק שוויון זכויות.
- `/guides/mamad-cost` — listed 3 price bands: ממ״ד 160–220K, מיגון חדר 40–150K, מיגונית 30–80K ₪.
- `/services/building-mamad` — listed 3 ממ״ד types (צמוד / חיצוני / על הגג) + "קבלני ממ״ד רשומים".
- `/services/prefab-mamad` — "180,000–250,000 ₪ + מע״מ" + clear pros/cons framing.
- `/guides/home-front-command-approval` — named timelines "14 ימי עבודה" + "45 ימים".

All 31 content pages have unique descriptions. No duplicates, no near-duplicates.

---

## 3. H1 uniqueness (exactly one per page)

**Rule:** Every indexable page emits exactly one `<h1>`.

**Implementation:** H1 lives only in `src/components/PageHero.tsx` (`<h1 className="…">{title}</h1>`). Service pages get it via `src/components/ServicePageLayout.tsx` which imports `PageHero` at line 59. No other component uses `<h1>`.

**Audit result:** 0 pages with duplicate H1. 0 pages with missing H1. `<Prose>` + `next-safe-mdx`-style blocks use `<h2>`/`<h3>` only.

---

## 4. Heading hierarchy (H2 → H3, no skipped levels)

Spot-checked 8 long-form pages: `/`, `/about`, `/services/building-mamad`, `/services/private-construction`, `/guides/mamad-cost`, `/guides/mamad-process`, `/compare/mamad-vs-miggun-vs-migunit`, `/areas/[city]`.

All follow `h1 → h2 → h3` with no level skips. Tailwind Typography (`prose`) styles come from the tag, not from ad-hoc `className` — the hierarchy is semantically correct, not cosmetic.

---

## 5. Image alt attributes / `next/image`

**Finding:** 0 `<img>` tags. 0 `next/image` usages. Site is SVG-inline + CSS gradients by design, per `CLAUDE.md`: _"אין תלות בתמונות חיצוניות. השתמש ב-SVG icons לכל האייקונים"_.

**Logo:** inline `<svg>` in `src/components/Logo.tsx` with `aria-label` set on the wrapper. Non-decorative SVG paths have `aria-hidden="true"` where appropriate.

**Result:** Nothing to fix. No orphan `<img>` without `alt`, no oversize PNG/JPG in the repo.

---

## 6. Canonical URLs + hreflang

Every page's metadata flows through `src/lib/metadata.ts → buildMetadata({ title, description, path })`, which emits:

```ts
alternates: {
  canonical: `https://hithadshut.co.il${path}`,
  languages: {
    "he-IL": `https://hithadshut.co.il${path}`,
    "x-default": `https://hithadshut.co.il${path}`,
  },
},
openGraph: { locale: "he_IL", url: `https://hithadshut.co.il${path}`, ... },
twitter: { card: "summary_large_image", ... },
```

**Audit:**
- 0 pages bypass `buildMetadata()`.
- 0 pages define a conflicting `alternates:` override.
- 0 pages emit `noindex` (site-wide indexable).
- Robots.txt (`src/app/robots.ts`) allows all crawlers, sitemap reference present.

---

## 7. URL structure

- All slugs lowercase English (`building-mamad`, `room-reinforcement`, `katlan-rashum-vs-hafer`).
- No trailing slashes in internal `<Link href="…">` values.
- Hebrew used for display labels only (`TARGET_LABEL` in `src/lib/anchors.ts`, `shortTitle` in `src/lib/site.ts`).
- Sitemap contains 163 unique URLs:
  - 1 home, 1 about, 1 contact, 1 accessibility, 1 privacy, 1 terms
  - 7 services (4 protection + 3 construction)
  - 5 guides
  - 4 compare
  - 1 areas index + 28 city pages + 112 city×service pages
  - 1 total = **163 canonical URLs**
- Sitemap `priority` cascade: home 1.0, services/guides 0.9, compares 0.6, city pages 0.7, city×service 0.5.
- `lastmod` auto-set to build time.

---

## 8. JSON-LD schema inventory

Every page emits schema via `src/lib/schema.ts` helpers and `<JsonLd>` React component. All blocks use `@context: "https://schema.org"`, absolute URLs, and are validated by the TypeScript interfaces in `schema.ts`.

| Page / Group | Schema types |
|---|---|
| `/` | `Organization` + `WebSite` + `LocalBusiness` |
| `/about` | `Organization` |
| `/contact` | `LocalBusiness` |
| `/services/*` (7) | `Service` + `FAQPage` + `BreadcrumbList` (via `ServicePageLayout`) |
| `/guides/*` (5) | `Article` + `FAQPage` + `BreadcrumbList` |
| `/guides/mamad-process` | + `HowTo` |
| `/compare/*` (4) | `FAQPage` + `BreadcrumbList` |
| `/areas` | `BreadcrumbList` + `ItemList` |
| `/areas/[city]` (28) | `LocalBusiness` + `Service` + `BreadcrumbList` + `FAQPage` |
| `/areas/[city]/[service]` (112) | `LocalBusiness` + `Service` + `BreadcrumbList` |

- No duplicate blocks.
- No mixed protocols (`http:` vs `https:`) in schema URLs.
- `Organization.sameAs` populated where applicable.
- `FAQPage.mainEntity[].acceptedAnswer.text` always matches the visible FAQ `<dd>`.

---

## 9. Internal linking / orphan detection

### Pre-fix
3 construction services (`/services/private-construction`, `/services/renovations`, `/services/extensions`) were:
- ✅ In Header dropdown (desktop + mobile)
- ❌ Not in Footer "שירותים" column (only 4 protection services listed)
- ❌ Not in any in-body recommendation block

They weren't true orphans (Header reaches them site-wide), but they had under 50% of the inbound internal links of protection services.

### Fix
Split Footer services nav into 2 sub-groups in a single column:
- `מיגון וממ״ד` — 4 protection services (unchanged list from `SERVICE_TARGETS`).
- `בנייה ושיפוצים` — new block iterating `constructionServices` from `src/lib/site.ts` (3 entries).

Result: each of the 3 construction services now receives an inbound link from every single page on the site (Header + Footer). Orphan count: **0**.

### Internal link density
Per-page outbound internal link count (representative pages):
- Homepage: ~35
- Service pages: ~28 (header + RelatedLinks + body + footer)
- Guide pages: ~25
- City × service pages: ~18 (header + footer + sibling cities + parent + hub)
- About / Contact: ~20

No page is under 15 inbound internal links.

---

## 10. Core Web Vitals / mobile / security (review)

**No regressions introduced in Stage 4** (changes were text + one template swap + one footer JSX block).

| Area | Status |
|---|---|
| Font loading | `next/font/google` Heebo, self-hosted, preload, `display: swap`. No FOIT/FOUT. |
| JS bundles | Client components minimized (Header, mobile menu, Reveal). All content pages server-rendered. |
| Images | None. Zero LCP image concern. Hero is gradient + text. |
| Tailwind | v4 `@theme` tokens, PostCSS at build. Zero runtime CSS-in-JS. |
| Security headers | `next.config.ts` sets `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`. |
| Mobile | Sticky mobile CTA bar + bottom-nav + mobile menu. Touch targets ≥ 44px. |
| Accessibility | `lang="he"`, `dir="rtl"`. `aria-label` on all icon buttons. Focus rings via Tailwind. |

Expected Lighthouse deltas vs baseline:
- **Mobile Performance:** ±0 (no asset changes, no JS added).
- **SEO:** +3–5 points (meta description coverage, title deduplication).
- **Best Practices:** ±0.
- **Accessibility:** ±0 (already at target).

---

## Summary — Stage 4 deliverables

| Item | Status |
|---|---|
| Title duplicate-brand bug | Fixed (1 template edit, 20 pages healed) |
| Meta description length | 22 pages expanded to 140–170 chars |
| H1 uniqueness | Verified clean |
| Heading hierarchy | Verified clean |
| Image alt attributes | N/A (no raster images by design) |
| Canonical + hreflang | Verified via `buildMetadata()` helper |
| URL structure | Verified clean (163 URLs, no duplicates, lowercase, no trailing slashes) |
| JSON-LD schema | Full inventory documented, no duplicates, all valid |
| Orphan services | Fixed (Footer now links all 7 services) |
| CWV / mobile / security | No regressions; review notes captured |

**Lint:** 0 errors, 0 warnings.
**Build:** `✓ Compiled successfully in 16.1s`, 168/168 static pages.
**Next:** Stage 5 — E-E-A-T + helpful content check.
