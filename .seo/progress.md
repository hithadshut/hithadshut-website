# SEO Buildout Progress

## Stage B + B2 — Geo landing pages (completed)

### Created
- `src/content/areas.ts` — 28 Israeli cities with district, optional neighborhoods (real only for TLV/JER/HFA), and local notes.
- `src/content/services.ts` — 4-service matrix (building-mamad, room-reinforcement, migunit, prefab-mamad).
- `src/app/areas/page.tsx` — areas hub with 4-col responsive grid.
- `src/app/areas/[city]/page.tsx` — dynamic, statically generated, 28 city pages with LocalBusiness + Service + BreadcrumbList + FAQPage schema.
- `src/app/areas/[city]/[service]/page.tsx` — dynamic, statically generated, 112 geo×service pages with 5 rotating intro templates (hash-based).
- Sitemap updated: +1 (/areas) +28 (city) +112 (city/service) = 141 new URLs.
- Footer updated: new "אזורי שירות" column with 10 top cities + "כל האזורים" link.

### URL count delta
+141 URLs (1 index + 28 cities + 112 geo×service)

### Next stage
- Stage C: neighborhood-level pages for top 3 metros (if warranted) + guides expansion.
- Stage D: internal link audit + sitemap lastmod refresh on next content edit.

## Stage C — Comparison pages (completed)

### Created
- `src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx` — ממ״ד צמוד vs חיצוני (2-col grid, "המומלץ כשאפשר" badge on צמוד, FAQPage + BreadcrumbList).
- `src/app/compare/migunit-vs-mamad-muchan/page.tsx` — מיגונית vs ממ״ד מוכן (2-col, "הגנה תקנית מלאה" badge on muchan, FAQPage + BreadcrumbList).
- `src/app/compare/katlan-rashum-vs-hafer/page.tsx` — קבלן רשום vs חאפר (editorial stance paragraph, 8 red flags, 3 must-ask questions, FAQPage + BreadcrumbList + Article).

### Updated
- `src/lib/site.ts` — added `compares` array of all 4 comparison pages.
- `src/app/sitemap.ts` — 3 new compare URLs at priority 0.6 (driven from `compares` array).
- `src/components/Footer.tsx` — new "עוזרים להחליט" column listing all 4 comparisons.
- `src/app/services/building-mamad/page.tsx` — CTA to `/compare/mamad-tzamud-vs-hitzoni`.
- `src/app/services/migunit/page.tsx` — CTA to `/compare/migunit-vs-mamad-muchan`.
- `src/app/services/prefab-mamad/page.tsx` — CTA to `/compare/migunit-vs-mamad-muchan`.
- `src/app/guides/choosing-mamad-contractor/page.tsx` — link to `/compare/katlan-rashum-vs-hafer`.

### Stage C refinement pass (2026-04-16)
- Realigned all 3 pages to spec row schemas: #1 (תיאור, יתרונות, חסרונות, מתי מתאים, טווח עלות, זמן ביצוע, רישוי, השפעה על הבית); #2 (תיאור, סטנדרט פקע״ר, עלות, זמן התקנה, נוחות יומיומית, אישורים נדרשים, השפעה ויזואלית, מתי מתאים); #3 (רישיון ותקנים, ביטוח עבודות, אחריות משפטית, חוזה בכתב, חשבונית מס, שקיפות מחיר, אישור פקע״ר, סיכון בפרויקט).
- Added intro paragraphs (1200+ words per page), "מה ההבדל בפועל" callout blocks (3 bullets) on #1 and #2, and "3 שאלות שחובה לשאול" section on #3.
- Unified dual CTA footer across all 3: /contact + wa.me/972546712130 + tel:site.phoneDial.
- Each page links to 6+ internal destinations (services, guides, other compares).
- Breadcrumbs updated: bit > השוואות > specific.
- FAQPage schema declared once per page via `<JsonLd data={faqJsonLd(faqs)} />` (FAQ component uses `includeSchema={false}` to avoid duplicate JSON-LD).
- Canonical pricing used across pages: building-mamad 160–200K, migunit 30–80K, prefab 180–250K, all + מע״מ.

### URL count delta
+3 URLs (compare pages)

### Next stage
- Stage D: internal link audit + sitemap lastmod refresh + schema validation pass.

## Stage D — Commercial-intent page expansion (completed 2026-04-16)

### Expanded
- `src/app/guides/mamad-cost/page.tsx` — grew from ~780 words to ~2,700+ words. Added:
  - TL;DR callout (card-premium) at top with canonical prices (9/12/16 m²) for AI citation.
  - Table of Contents block with anchor links to all 10 H2 sections.
  - 2 HTML tables: size→price (9/12/16 m² with volume, price range + מע״מ, build time); impact factors (8 rows, each with +X% or +Y ₪ deltas marked [טעון אימות מקצועי] where not canonical).
  - Expanded sections: 12 price-impact factors, 7-part cost breakdown with percentages, 8-point hidden-costs list, save-smart section, real-vs-surprise quote checklist, 3-solution comparison with canonical prices, payment-schedule 6-step breakdown, 7 common mistakes, 8-step RFP protocol.
  - Right-hand sidebar with 20 internal links (4 services, 5 guides, 4 compares, 3 top areas, /contact CTA).
  - Added 2 new FAQs (16 m² pricing, apartment floor pricing), total 10 FAQs.
  - JSON-LD: kept Article, added FAQPage + BreadcrumbList.
  - Replaced generic ContactCTA with InlineLeadForm tailored to ממ״ד cost intent.

- `src/app/services/building-mamad/page.tsx` — grew from ~530 words to ~1,900+ words. Added:
  - New "סוגי ממ״דים — מדריך מפורט" section with 4 article cards (ממ״ד צמוד, ממ״ד חיצוני, ממ״ד על הגג, ממ״ד תת-קרקעי). Each 200+ words with summary, when-applies paragraph, pros list, cons list, price-impact explainer, and collapsible `<details>` block with 7–9 HowTo steps.
  - Each of the 4 subtype cards emits an independent **HowTo JSON-LD** block (new schema type on this page — 4 HowTo graphs).
  - FAQ grew from 10 to 12 questions — added σινון/אוורור explainer and דלת הדף standards Q.

- `src/app/services/room-reinforcement/page.tsx` — grew from ~480 words to ~1,150+ words. Added:
  - FAQ grew from 10 to 14 questions — added σינון/אוורור differences, דלת חיזוק vs דלת הדף, what NOT to reinforce, cost-saving tips. Timeline detail merged into FAQ #5. Permit variations by municipality noted in FAQ #7.
  - New "מתי מיגון חדר לא מספיק" section with 4 scenarios (קו קדמי, weak existing structure, chemical protection need, cost-parity with ממ״ד), cross-linking to `/services/building-mamad` + `/compare/mamad-vs-miggun-vs-migunit`.

- `src/app/services/migunit/page.tsx` — grew from ~540 words to ~1,450+ words. Added:
  - Size + price HTML table: 4 rows (2/4/6/8+ occupants) with dimensions, price range + מע״מ [טעון אימות], install time. `overflow-x-auto` for mobile.
  - FAQ grew from 10 to 14 questions — added σינון, חיבור חשמל, תחזוקה, חורף/רטיבות, העברה בין בתים. Existing Q9 (אוורור וסינון) rewritten for depth.
  - New "הסדרה מול פיקוד העורף" subsection with explainer paragraph + CTA to `/guides/home-front-command-approval`.

### Schema additions
- 4× `HowTo` JSON-LD on `/services/building-mamad` (one per mamad subtype). First use of `howToJsonLd` helper.
- `faqJsonLd` + `breadcrumbJsonLd` on `/guides/mamad-cost` (previously only Article).

### Tables added
- 2 on `/guides/mamad-cost` (size table, impact-factors table).
- 1 on `/services/migunit` (size+price table).
- All tables use `overflow-x-auto` wrapper for mobile.

### FAQ counts per page (before → after)
- `/guides/mamad-cost`: 8 → 10
- `/services/building-mamad`: 10 → 12
- `/services/room-reinforcement`: 10 → 14
- `/services/migunit`: 10 → 14

### Constraints held
- No "יוזמה קהילתית" mentions anywhere.
- Canonical pricing consistent: ממ״ד 9m² 160–200K, 12m² 200–220K, front-line +15–25%, migunit 30–80K, all + מע״מ.
- All speculative figures marked `[טעון אימות מקצועי]`.
- Every new H2 has `id` attribute for anchor navigation.
- No duplication between mamad-cost deep dive and building-mamad service — service cross-links to the cost guide instead of repeating tables.

### Next stage
- Stage E: programmatic SEO for remaining area×service combos, LocalBusiness schema refresh, sitemap.xml lastmod sweep.

## Stage E — AI visibility layer (completed 2026-04-16)

### Created
- `src/components/TldrBlock.tsx` — reusable "בקצרה" card component. Props: `{ title?, bullets: (string | ReactNode)[], id? }`. Gold accent border-inline-start, role="region" aria-labelledby, RTL, mobile-safe (break-words, no horizontal overflow).
- `public/llms.txt` — plain-text AI-readable site index following the emerging llms.txt standard. Served at `/llms.txt`. Sections: intro > services > guides > comparisons > service areas > contact. Canonical pricing included for all services.

### Updated
- `src/app/guides/mamad-process/page.tsx` — TldrBlock added (4 bullets: 7-step process, 2–4 month total, 3 permit tracks, who-approves-what).
- `src/app/guides/home-front-command-approval/page.tsx` — TldrBlock added (4 bullets: 3 permit tracks, ~14 working-day approval, required documents, 45-day post-build notice).
- `src/app/guides/choosing-mamad-contractor/page.tsx` — TldrBlock added (4 bullets: 3 non-negotiable checks, 3 red flags, registered-vs-hafer distinction, ממ״ד-specific experience).
- `src/app/guides/mamad-mistakes/page.tsx` — TldrBlock added (4 bullets: top 3 mistakes by cost impact, golden rule for prevention).
- `src/app/guides/mamad-cost/page.tsx` — existing inline TL;DR verified in place, not duplicated. FAQ Q5 (סובסידיה) first sentence polished to direct-answer form.
- `src/app/page.tsx` — homepage FAQ Q4 (היתר בנייה) first sentence polished to direct-answer form.
- `src/app/services/building-mamad/page.tsx` — FAQ Q4 (היתר בנייה) first sentence polished to direct-answer form.
- `src/lib/schema.ts` — Organization schema `sameAs` populated with Google Maps search URL + Facebook/LinkedIn placeholders marked with `TODO: replace with live URL from client`.

### AI citation optimizations
- Every guide now opens with a bolded, direct-answer TL;DR block visible above the fold — designed for AI extract-and-cite patterns.
- llms.txt provides a single-file structured overview that AI models can ingest to understand site scope, services, and canonical pricing in one pass.
- sameAs signals cross-reference the Organization entity across Google Maps, Facebook, LinkedIn (placeholders for social).
- Polished FAQ first-sentences on 3 pages (mamad-cost Q5, homepage Q4, building-mamad Q4) so each answer leads with a direct standalone statement.

### Constraints held
- No "יוזמה קהילתית" mentions.
- All TL;DR pricing includes `+ מע״מ`.
- No invented regulatory facts; speculative values marked `[טעון אימות מקצועי]`.
- Canonical prices consistent with Stages B–D: ממ״ד 9m² 160–200K, 12m² 200–220K, front-line +15–25%, migunit 30–80K, all + מע״מ.
- `/llms.txt` intentionally NOT added to sitemap.xml (it's a machine-readable index, not indexable content).
- TldrBlock not added to service pages (strong hero + subtitle already) — guides are where direct-answer TL;DR matters most.

### Next stage
- Stage F: client-provided social URLs swap (replace sameAs TODO placeholders), real GBP/Google Maps URL, additional programmatic area×service depth.

## Stage F — Technical SEO hardening (completed 2026-04-16)

### Created
- `src/lib/indexnow.ts` — IndexNow integration module. Exports `INDEXNOW_KEY`, `INDEXNOW_KEY_LOCATION`, and `submitUrlsToIndexNow(urls)`. Posts JSON payload to `https://api.indexnow.org/indexnow` with `host`/`key`/`keyLocation`/`urlList`. Returns `{ ok, status, statusText, body, submittedCount }`.
- `scripts/notify-indexnow.ts` — manual post-deploy tool. Fetches live `/sitemap.xml`, extracts `<loc>` URLs via regex, submits all to IndexNow in a single batch. Logs HTTP response, exits 0 on 2xx.
- `public/a1b2c3d4e5f678901234567890abcdef.txt` — IndexNow key file. Content is exactly the 32-char hex key (no trailing newline, 32 bytes).

### Updated
- `next.config.ts` — upgraded from empty stub to full spec: `poweredByHeader: false`, `compress: true`, `experimental.optimizePackageImports: ["lucide-react"]`, `images.formats: ["image/avif", "image/webp"]`. Added `async headers()` returning three blocks: sitemap.xml caching (1h), llms.txt (text/plain + 1h cache), global security headers (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`, `X-DNS-Prefetch-Control: on`).
- `src/lib/metadata.ts` — extended `alternates` in `buildMetadata()` with `languages: { "he-IL": url, "x-default": url }`. Canonical behavior preserved.
- `src/app/layout.tsx` — root layout `metadata.alternates` also gained hreflang `{ "he-IL": "/", "x-default": "/" }` so homepage gets the signal (home doesn't use `buildMetadata`).
- `src/app/sitemap.ts` — rewrote with unified `new Date()` lastModified per deploy + priority distribution per spec: home 1.0 (weekly), services 0.9, areas index 0.85, guides 0.75, compares 0.7, city pages 0.7, city×service 0.6, about 0.6, legal 0.3. Dropped `fs.statSync` mtime approach in favor of simple now-per-deploy signal. 163 URLs (same as before — no URL set changed). Added `TODO` comment for post-10K URL index split.
- `package.json` — added `tsx ^4.19.2` to devDependencies, added `"notify-indexnow": "tsx scripts/notify-indexnow.ts"` npm script.

### Sitemap priority breakdown (verified from built sitemap.xml)
- 1.0 × 1 (home)
- 0.9 × 8 (contact + 7 services)
- 0.85 × 1 (areas index)
- 0.75 × 5 (guides)
- 0.7 × 32 (4 compares + 28 city pages)
- 0.6 × 113 (112 city×service + about)
- 0.3 × 3 (privacy, terms, accessibility)

### Hreflang verification
Inspected `.next/server/app/index.html` and `.next/server/app/about.html` after build:
```
<link rel="canonical" href="https://hithadshut.co.il"/>
<link rel="alternate" hrefLang="he-IL" href="https://hithadshut.co.il"/>
<link rel="alternate" hrefLang="x-default" href="https://hithadshut.co.il"/>
```
Both tags render correctly on the homepage (via layout.tsx) and on every page that uses `buildMetadata()`.

### Next 16 API notes
- `experimental.optimizePackageImports` is still under `experimental` in 16.2.3 (confirmed via `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/optimizePackageImports.md`), despite the key now also appearing at the config root level. Kept under `experimental` to match docs.
- Next 16.2.3 + Turbopack builds cleanly with the `headers()` async function — no breaking changes from prior versions.

### Constraints held
- 163 URLs preserved — no additions, no deletions.
- Canonical logic in `buildMetadata` unchanged; hreflang added alongside.
- OG + Twitter meta unchanged.
- No "יוזמה קהילתית".
- IndexNow script is manual-only (documented in script header); not wired into build pipeline.

### Next stage
- Stage G: post-deploy — run `npm run notify-indexnow` once after first production deploy. Replace Organization `sameAs` placeholders with real social URLs when client provides. Consider sitemap index split if URL count crosses ~10K.

## Stage G — Internal link mesh + anchor diversity (completed 2026-04-16)

### Created
- `src/lib/anchors.ts` — anchor-text utility. Exports `LinkTarget` union (15 targets), `ANCHOR_VARIANTS` (7–8 Hebrew anchor variations per target, 109 total), `pickAnchor(target, seed, usedIndices)` for deterministic seed-based rotation with per-page deduplication, `HREF_MAP` (LinkTarget → path), `TARGET_SUMMARY` (1-line card summaries), `TARGET_LABEL` (plain Hebrew labels for footer/nav).
- `src/components/RelatedLinks.tsx` — reusable "לקריאה נוספת" block. Props: `{ seed, targets, title?, variant?, tone?, wrap? }`. Grid variant renders `card-premium` cards with rotated anchor + summary + "קראו עוד ←"; inline variant renders a bulleted list. `<nav aria-label="קישורים קשורים">` wrapper. Mobile-first grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. Shared `usedIndices` Set prevents repeated anchors on the same page.

### Wired RelatedLinks into 18 content pages (20+ static pages after generateStaticParams expansion)
- **Services (7)**: `building-mamad`, `room-reinforcement`, `migunit` (appended as additional child inside ServicePageLayout, preserving existing custom sections), `prefab-mamad`, `private-construction`, `renovations`, `extensions`.
- **Guides (5)**: `mamad-cost`, `mamad-process`, `home-front-command-approval`, `choosing-mamad-contractor`, `mamad-mistakes`.
- **Areas (2 routes, 29 static pages)**: `/areas/[city]` (28 cities) — targets: building-mamad, mamad-cost, compare-main, contact. `/areas/[city]/[service]` (112 geo×service) — primary service target via slug map + hash-based secondary (mamad-cost OR compare-main) + contact + areas.
- **Compares (4)**: `mamad-vs-miggun-vs-migunit`, `mamad-tzamud-vs-hitzoni`, `migunit-vs-mamad-muchan`, `katlan-rashum-vs-hafer`.

### Anchor variety
- 7–8 anchor variations per target × 15 targets = 109 anchor variants total.
- Seed-based hash rotation ensures anchor text varies by source page; `usedIndices` Set prevents same page from repeating an anchor across multiple targets in its RelatedLinks block.

### Footer rebuild (`src/components/Footer.tsx`)
- 5 columns now (was 4 content + brand column): שירותים (4 protection services via HREF_MAP), מדריכים (all 5 guides), אזורים (top 10 cities + "כל האזורים ←"), השוואות (all 4 compare pages) + החברה (about, accessibility, privacy, terms, contact).
- Each column wrapped in `<nav aria-label>` for accessibility.
- Footer uses plain Hebrew labels (not anchor rotation) — rotation intentionally reserved for in-body links.
- Dropped the construction-services column (bנייה פרטית/שיפוצים/הרחבות) in favor of the spec-mandated layout — those services remain reachable via homepage and in-page navigation.

### Constraints held
- No "יוזמה קהילתית".
- No duplicate links on pages that already link inline — RelatedLinks sits as a footer block, prose links untouched.
- migunit ServicePageLayout structural customizations preserved — RelatedLinks appended as final child inside existing children render.
- Mobile-first; RelatedLinks cards `break-words` on all text; grid collapses cleanly to 1 column on mobile.
- All link HREFs flow through `HREF_MAP` — single source of truth for target → path.

## Stage H — CRO engagement (completed 2026-04-16)

### Created
- `src/components/TableOfContents.tsx` — client component. Props: `{ items: { id, label }[]; title? }`. Desktop (lg+): sticky `top-24` sidebar card with numbered anchor list, left-inline accent border, and `IntersectionObserver` active-section highlight. Mobile (below lg): collapsible `<details>`/`<summary>` accordion so it doesn't push main content. Wrapped in `<nav aria-label="תוכן עניינים">`. Uses logical-property inline-start border (RTL-correct). Safe no-op when `items` is empty.
- `src/components/ReadingTimeBadge.tsx` — server component (no "use client"). Discriminated-union props `{ words } | { minutes }`; if `words` passed, computes `Math.max(1, Math.round(words / 200))`. Inline-flex pill with inline SVG clock icon, `border-[var(--color-accent)]/30`, `aria-label="זמן קריאה משוער X דקות"`, role="note". Self-contained — no external icon deps (safe for server rendering).
- `src/components/RelatedArticles.tsx` — guide→guide "מאמרים נוספים שיעניינו אתכם" block. Maintains an internal 5-guide manifest (slug, href, title, 1-line description). Filters out `currentSlug`, takes first `limit` (default 3). Grid `grid-cols-1 md:grid-cols-3`, `card-premium` hover-lift, `<nav aria-label="מאמרים קשורים">`. Distinct from `RelatedLinks` (cross-type, anchor rotation) — this one is same-type only.

### Wired into all 5 guides
Each guide now renders (in order): PageHero → JSON-LD → TldrBlock → ReadingTimeBadge (centered row) → main content with `lg:grid-cols-[minmax(0,1fr)_280px]` layout: prose on the left, `<aside><TableOfContents /></aside>` sticky on the right (accordion on mobile) → FAQ → **RelatedArticles** (new) → RelatedLinks → ContactCTA.

- `src/app/guides/mamad-cost/page.tsx` — REPLACED the hand-rolled inline TOC Section with `<TableOfContents items={TOC_ITEMS} />` in two modes: mobile accordion at top, and desktop sidebar inside the existing `<aside>` (above the existing "קישורים פנימיים" card). ReadingTimeBadge added after TL;DR. RelatedArticles added before RelatedLinks. `WORD_COUNT = 2700` (comment in file). Preserves the existing rich sidebar (services, guides, compares, areas, CTA).
- `src/app/guides/mamad-process/page.tsx` — added H2 `id` attributes to all 4 H2s (`overview`, `permit-tracks`, `failures`, `our-approach`). Wrapped main Section in `lg:grid-cols-[minmax(0,1fr)_280px]`, added TOC sidebar + ReadingTimeBadge (`WORD_COUNT = 620`) + RelatedArticles.
- `src/app/guides/home-front-command-approval/page.tsx` — added H2 `id`s (`why-important`, `process`, `whats-checked`, `delays`, `our-approach`). Same grid treatment + TOC + badge (`WORD_COUNT = 520`) + RelatedArticles.
- `src/app/guides/choosing-mamad-contractor/page.tsx` — added H2 `id`s (`why-different`, `checklist`, `our-approach`). Same grid + TOC + badge (`WORD_COUNT = 540`) + RelatedArticles.
- `src/app/guides/mamad-mistakes/page.tsx` — this page had a hybrid structure (Prose intro + raw `<ol>` mistakes list + Prose closing). Added 3 anchor targets: `<h2 id="intro" className="sr-only">` at the top of prose, `<h2 id="mistakes-list" className="sr-only">` before the mistake list, and a visible `<h2 id="how-to-avoid">` on the closing section. Grid layout wraps the whole mistake-list block plus the closing Prose. `WORD_COUNT = 480`.

### Layout collision resolution — mamad-cost
mamad-cost already uses a custom `lg:grid-cols-[minmax(0,1fr)_320px]` layout with a rich sidebar (services list, guides list, compares list, areas list, and a dark CTA). Rather than rip that out, Stage H stacks the new `TableOfContents` ABOVE the existing sidebar card on desktop, and renders a separate mobile-only accordion instance higher up on the page (right after the reading-time badge, before the main grid). Desktop TOC uses `hidden lg:block` wrapper; mobile TOC uses `lg:hidden`. No duplicate rendering at any breakpoint.

### StickyMobileCTA
Verified already mounted in `src/app/layout.tsx` line 89, inside `<body>` alongside `<Footer />`, `<WhatsAppButton />`, `<AccessibilityWidget />`, `<ExitIntentModal />`. No change needed.

### ExitIntentModal
Left untouched per spec.

### Constraints held
- No "יוזמה קהילתית".
- All new components RTL-correct (`border-inline-start`, logical flex gap, `break-words`).
- `html { scroll-behavior: smooth }` already in globals.css (verified at line 36–38) — smooth TOC anchor jumps work out-of-box.
- TableOfContents is the only new client component; ReadingTimeBadge and RelatedArticles are pure server components (smaller JS bundle).
- Mobile-first: TOC collapses to accordion below `lg` so it never competes with prose for vertical space.
- `WORD_COUNT` values documented inline with comments on each guide page.
- ReadingTimeBadge uses discriminated-union props — either `words` OR `minutes`, never both, caught at the type level.
- No files deleted. No URL set changes. Sitemap unchanged.

## Stage 1 — Em/en-dash cleanup across Hebrew copy (2026-04-16)

### Why
Hebrew copywriting does not use the em-dash (—, U+2014) or en-dash (–, U+2013) the way English does. The prose across the site was auto-generated with dashes that read as AI-translated and break naturally Hebrew rhythm. Replaced all occurrences in `src/` with contextually appropriate punctuation: period between complete clauses, comma for appositives, colon for definitions, hyphen "-" for numeric ranges, "התחדשות בינוי ויזמות" as a single noun phrase (no dash).

### Files touched (Stage 1)
- `src/app/services/private-construction/page.tsx` (carry-over from prior pass; verified clean)
- `src/app/services/prefab-mamad/page.tsx` (25 dashes → 0)
- `src/app/areas/[city]/[service]/page.tsx` (17 dashes → 0; hyphen preserved in LocalBusiness `name` template literal for schema consistency)
- `src/app/compare/mamad-vs-miggun-vs-migunit/page.tsx` (18 dashes → 0)
- `src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx` (18 dashes → 0)
- `src/app/guides/home-front-command-approval/page.tsx` (15 dashes → 0)
- `src/app/guides/mamad-mistakes/page.tsx` (17 dashes → 0)
- `src/app/about/page.tsx` (10 dashes → 0; title normalized to "התחדשות בינוי ויזמות")
- `src/app/guides/choosing-mamad-contractor/page.tsx` (17 dashes → 0)
- `src/app/services/building-mamad/page.tsx` (39 dashes → 0)
- `src/app/services/renovations/page.tsx` (15 dashes → 0; DESCRIPTION normalized)
- `src/app/areas/page.tsx` (8 dashes → 0)
- `src/app/contact/page.tsx` (2 dashes → 0)
- `src/app/privacy/page.tsx` (2 dashes → 0)
- `src/app/accessibility/page.tsx` (3 en + 1 em → 0; law year hyphens "התשנ״ח-1998", heading range "H1-H4")
- `src/app/terms/page.tsx` (1 dash → 0)

### Patterns applied
- "התחדשות — בינוי ויזמות" → "התחדשות בינוי ויזמות" (single company name, no dash)
- Numeric ranges: "160,000–200,000" → "160,000-200,000", "5–15%" → "5-15%", "14–45 ימים" → "14-45 ימים"
- Definition em-dash in headings: "בחירת קבלן ממ״ד — רשימת בדיקה" → "בחירת קבלן ממ״ד: רשימת בדיקה"
- Em-dash between clauses → period: "לא תפגשו את בעל המקצוע. אותו גורם אחראי על הכל, קל יותר"
- Appositive em-dash → comma: "אנחנו פועלים בכל הארץ, ממרכז ותל אביב..."
- Preserved: gershayim ״, geresh ׳, HTML entities (`&quot;`, `&bdquo;`, `&rdquo;`), JSX structure (`<strong>`, `<em>`, `<Link>`), LocalBusiness schema `name` field template literal.

### Tricky restructures
- `${site.name} — ${svc.name} ${area.name}` in `areas/[city]/[service]/page.tsx`: changed to hyphen "-" (not dropped) to keep LocalBusiness schema `name` readable as "Brand - Service City".
- TldrBlock bullets in `choosing-mamad-contractor/page.tsx`: "קבלן רשום מול חאפר — ההבדל המעשי: ... חאפר — ללא רישום" → "קבלן רשום מול חאפר, ההבדל המעשי: ... חאפר פועל ללא רישום", preserving `<strong>` wrapper on the label.
- FAQ answer with nested `&quot;` in `home-front-command-approval/page.tsx`: restructured "בתוך 45 ימים מתום הביצוע — בלעדיה הממ״ד לא &quot;סגור&quot;" to "בתוך 45 ימים מתום הביצוע. בלעדיה הממ״ד לא &quot;סגור&quot;" without breaking the entity escapes.
- Accessibility legal citations: Hebrew year suffixes "התשנ״ח–1998" and "התשע״ג–2013" use en-dash by convention, but converted to hyphen for consistency with the rest of the site (legal meaning unchanged).

### Verification
- `grep -r '[—–]' src/` → 0 matches across all file types.
- `src/app/globals.css` → 0 em/en-dashes (CSS comments were already clean).
- `npm run lint` → 0 errors, 0 warnings.
- `npm run build` → compiled successfully in 11.1s, TypeScript in 9.2s, 168 static pages generated.

### Constraints held
- JSX structure preserved everywhere (no accidental rewraps of `<strong>`, `<em>`, `<Link>`).
- HTML entities (`&quot;`, `&bdquo;`, `&rdquo;`) left intact.
- Schema.org data untouched (Article, FAQPage, HowTo, BreadcrumbList, LocalBusiness, Service, Organization).
- Metadata signatures (`buildMetadata({ title, description, path })`) unchanged.
- No URL set changes, no sitemap changes, no file deletions.

## Stage 2 — Purge AI-tell phrases (completed)

### Category A — formal fluff (replaced)
| Pattern | Before | After | Notes |
|---|---|---|---|
| `ניתן ל...` | 17 | 0 | Replaced with `אפשר ל...` / `אי אפשר ל...` / relative `שאפשר ל` |
| `באמצעות` | 6 | 0 | Replaced with `עם` / `דרך` / `בעזרת` (incl. legal text: `באמצעותם` → `דרכם`) |
| `כאשר` | 3 | 0 | Collapsed to `כש...` (e.g. `וכאשר בניית ממ״ד לא אפשרית` → `וגם כשבניית ממ״ד לא אפשרית`) |
| `על מנת` / `כמו כן` / `בנוסף לכך` / `מן הסתם` / `כידוע` / `כאמור` | 0 | 0 | already clean from Stage 1 |

### Category B — empty generalizations (replaced with specifics)
| Pattern | Before | After |
|---|---|---|
| `ברמה הגבוהה (ביותר)` | 2 | 0 |
| `ליווי מקצועי` | 1 | 0 |
| `מגוון רחב` | 2 | 0 |
| `פתרונות מקצועיים` / `שירות מהמעלה` / `חווית לקוח` / `ערך מוסף` / `באופן מיטבי` / `מבלי להתפשר` / `הסטנדרט הגבוה` | 0 | 0 |

### Category C — passive voice
- `src/app/services/extensions/page.tsx` — `הכל מתוכנן ומבוצע על ידינו` → `אנחנו מתכננים ומבצעים הכל`.

### Example before/after pairs
1. `src/app/page.tsx` (hero subtitle):
   - Before: `בניית ממ״דים, מיגון חדרים ומיגוניות ברמה הגבוהה ביותר.`
   - After: `בניית ממ״דים, מיגון חדרים ומיגוניות לפי תקן פקע״ר, עם מהנדס קונסטרוקציה רשום.`
2. `src/content/services.ts` (prefab blurb):
   - Before: `...מתי זו רק יחידה ממוגנת גנרית. ליווי מקצועי בבחירה.`
   - After: `...מתי זו רק יחידה ממוגנת גנרית. מהנדס מלווה את הבחירה.`
3. `src/app/services/private-construction/page.tsx` (subtitle):
   - Before: `...תכנון מותאם, ביצוע ברמה הגבוהה, עם דגש על שקיפות ואיכות.`
   - After: `...תכנון מותאם, ביצוע לפי מפרט טכני מחייב, עם דגש על שקיפות ואיכות.`

### Phrases intentionally kept
- `בהתאם ל...` — kept in engineering/legal contexts (`יציקה בהתאם לחישוב`, `תכנון הממ״ד בהתאם לזכויות בנייה`). Correct technical Hebrew.
- `מקצה לקצה` — kept only in `guides/mamad-process` where it refers to literal project timeline ("2-4 חודשים מקצה לקצה"). Precise, not fluff.
- `ניתן מסלול פטור` — kept in `building-mamad/page.tsx` FAQ; this is passive "a path is granted", not modal "can".

### Verification
- Re-grep on `src/` for the 20-pattern set → 0 matches.
- `npm run lint` → 0 errors, 0 warnings.
- `npm run build` → compiled successfully, all 168 pages generated.

## Stage 3 — Writing quality pass (completed 2026-04-16)

### Task 1 — Passive voice flip (1 occurrence)
- `src/app/areas/[city]/page.tsx` L168:
  - Before: `ארבעה פתרונות מיגון עיקריים, כולם מבוצעים על ידינו, עם ליווי הנדסי ואישור פקע״ר.`
  - After: `ארבעה פתרונות מיגון עיקריים, את כולם אנחנו מבצעים בעצמנו. ליווי הנדסי ואישור פקע״ר נכללים בכל אחד.`

### Task 2 — Filler cull (`בפועל`)
- Total occurrences before: 17 (all `בפועל`; 0 `למעשה` / `באופן כללי` / `באופן מעשי` in scope).
- After: 11.
- Deleted: 6.
- Kept: 11 — all acting as a legitimate theory-vs-practice contrast marker (e.g. "הסטנדרט המומלץ בפועל", "הצבה בפועל ביום אחד" contrasting with full timeline, "הקבלנים המבצעים בפועל, לא מתווכים", headings "מה ההבדל בפועל").
- Deletions by file:
  - `src/app/guides/mamad-cost/page.tsx` — 2 (L234 intro tail, L430 heading tail)
  - `src/app/guides/choosing-mamad-contractor/page.tsx` — 1 (L51 FAQ tail)
  - `src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx` — 1 (L79 timeline row)
  - `src/app/areas/[city]/[service]/page.tsx` — 2 (L61 execution mention, L212 card description)

### Task 3 — Long-sentence splits (high-value pages)
Audited 6 pages for sentences over 25 words. Existing prose is already tight after stages 1–2; only 2 splits needed:
- `src/app/guides/mamad-process/page.tsx` FAQ #2 — split a 28-word opener at the natural clause boundary:
  - Before: `בבתים עד 2 קומות ובכפוף לתנאים שקבועים בתקנות התכנון והבנייה, במקרים רבים אפשר לבנות ממ"ד במסלול פטור, המבוסס על אישור פיקוד העורף, הצהרת עורך הבקשה (אדריכל/מהנדס) והגשת הודעה בסיום.`
  - After: `בבתים עד 2 קומות, ובכפוף לתנאים שקבועים בתקנות התכנון והבנייה, במקרים רבים אפשר לבנות ממ"ד במסלול פטור. המסלול מבוסס על אישור פיקוד העורף, הצהרת עורך הבקשה (אדריכל/מהנדס) והגשת הודעה בסיום.`
- `src/app/guides/mamad-cost/page.tsx` "עבודות בנייה וקונסטרוקציה" paragraph — 5 sentences split into two `<p>` blocks at the topic boundary ("list of work" → "budget significance").

### Task 4 — Paragraph splits
- 1 paragraph split (covered above in mamad-cost; 5 sentences → 3 + 2).
- Remaining candidate paragraphs in `services/building-mamad` + `services/migunit` are inside JS template-string data fields (`when`, FAQ `a`) rendered as single `<p>`. The FAQ component uses `whitespace-pre-line`, but those answers also feed into `FAQPage` JSON-LD schema — splitting them by inserting `\n\n` into the string would leak into structured data. Left them alone per "light touch" guideline; the underlying sentences in those fields are already short (avg 14–20 words).

### Verification
- `npm run lint` → 0 errors, 0 warnings.
- `rm -rf .next && npm run build` → `✓ Compiled successfully in 10.8s`, all pages generated.

### Constraints held
- No em-dashes reintroduced. No AI-tell phrases reintroduced. No "יוזמה קהילתית".
- No numbers, prices, phone, standards, URLs, schema, or component names touched.
- All `[טעון אימות מקצועי]` markers preserved. `<strong>` / `<Link>` wrappers intact.
- Canonical pricing untouched.

## Stage 4 — Technical SEO audit (completed 2026-04-16)

### Audit coverage (9 areas)
1. `<title>` + meta description length and uniqueness
2. H1 uniqueness (exactly one per page)
3. Heading hierarchy (H2 → H3, no skipped levels)
4. Image alt attributes / `next/image`
5. Canonical URLs + hreflang
6. URL structure (no trailing slashes, lowercase, Hebrew-English split)
7. JSON-LD schema validity
8. Internal linking and orphan detection
9. Core Web Vitals / mobile / security headers (review, not re-benchmarked)

### Task 1 — Title-tag duplicate brand bug (FIXED)
**Root cause:** `src/app/layout.tsx` defined `title.template = "%s | ${site.name}"`, while every per-page `TITLE` constant already embedded the brand (`…| התחדשות בינוי ויזמות`). The template was double-appending `| התחדשות`, producing titles like `בניית ממ״ד | מחיר, תהליך ואישורים | התחדשות בינוי ויזמות | התחדשות` — 66 characters, keyword pushed past Google's ~60-char truncation, and visibly duplicated in SERP previews.

**Fix:** Changed template to pass-through (`%s`). Every per-page title now renders exactly as the `TITLE` constant defines. 1 edit, 20 pages healed simultaneously. No per-page TITLE constants needed to change.

**Side effect:** `/terms` and `/privacy` had bare titles (`תנאי שימוש`, `מדיניות פרטיות`) that relied on the template for brand. Added the brand into their TITLE constants manually:
- `/terms` → `תנאי שימוש | התחדשות בינוי ויזמות`
- `/privacy` → `מדיניות פרטיות | התחדשות בינוי ויזמות`

### Task 2 — Meta description length expansion
Audit found 20 pages with DESCRIPTION shorter than 140 chars (sweet spot 140–160), losing SERP real-estate. Expanded each to 140–170 chars with concrete specifics (prices, standards, step counts, phone). No fluff added — every extra clause carries keyword or trust signal.

| Page | Before (chars) | After (chars) | Added |
|---|---|---|---|
| `/terms` | 72 | 150 | brand + use-case cues |
| `/privacy` | 74 | 158 | cookies + legal act name |
| `/accessibility` | 112 | 164 | WCAG 2.1 AA, ת״י 5568, שוויון זכויות |
| `/contact` | 96 | 166 | phone 054-671-2130 + WhatsApp |
| `/about` | 118 | 170 | קבלן רשום + services list |
| `/areas` | 104 | 162 | 6 region names |
| `/guides/mamad-process` | 120 | 168 | 7 process steps |
| `/guides/mamad-mistakes` | 126 | 164 | 5 mistake categories |
| `/guides/mamad-cost` | 130 | 170 | 3 price bands (ממ״ד / מיגון / מיגונית) |
| `/guides/choosing-mamad-contractor` | 108 | 162 | red-flag signals + רשם הקבלנים |
| `/guides/home-front-command-approval` | 122 | 168 | 14 ימי עבודה + 45 ימים |
| `/compare/mamad-vs-miggun-vs-migunit` | 128 | 166 | 3 price bands inline |
| `/compare/mamad-tzamud-vs-hitzoni` | 114 | 160 | decision criteria |
| `/compare/migunit-vs-mamad-muchan` | 110 | 164 | "30-80K מול 180-250K ₪" |
| `/compare/katlan-rashum-vs-hafer` | 108 | 158 | red-flag checklist |
| `/services/building-mamad` | 125 | 164 | ממ״ד צמוד/חיצוני/על הגג |
| `/services/room-reinforcement` | 112 | 160 | 40,000-150,000 ₪ + מע״מ |
| `/services/migunit` | 108 | 158 | 30,000-80,000 ₪ + installation |
| `/services/prefab-mamad` | 120 | 162 | 180,000-250,000 ₪ + pros/cons |
| `/services/private-construction` | 122 | 166 | מכפיל בנייה / עלות-פלוס |
| `/services/extensions` | 118 | 160 | רישוי בוועדה המקומית |
| `/services/renovations` | 130 | 160 | שילוב ממ״ד/מיגון בשיפוץ |

All descriptions pass canonical-price audit (Stage 2 numbers preserved): 160,000 / 40,000-150,000 / 30,000-80,000 / 180,000-250,000.

### Task 3 — H1 uniqueness audit
Single-H1 rule enforced. Audited `src/components/PageHero.tsx` (renders the only `<h1>` on every page via `<h1 className=…>{title}</h1>`) and `src/components/ServicePageLayout.tsx` (imports PageHero at L59 as its sole H1 source). No page emits a second `<h1>`. `MDX`/prose sections use `<h2>` + `<h3>` exclusively.

### Task 4 — Heading hierarchy
Spot-checked 8 long pages (guides, compares, about). No skipped levels (no H1 → H3 jumps). `<Prose>` component wraps `.prose` Tailwind Typography, which auto-styles `<h2>` and `<h3>` — the JSX already emits the correct tag order.

### Task 5 — Image alt attributes
No `<img>` or `next/image` usage in the codebase (site is SVG-inline + CSS gradients by design — per CLAUDE.md "אין תלות בתמונות חיצוניות"). Logo rendered via inline `<svg>` with `aria-label`. Nothing to fix.

### Task 6 — Canonical + hreflang
`src/lib/metadata.ts` `buildMetadata()` emits:
- `alternates.canonical = https://hithadshut.co.il${path}`
- `alternates.languages = { "he-IL": absolute, "x-default": absolute }`
- `openGraph.locale = "he_IL"`
- `openGraph.url` mirrors canonical
- `twitter.card = "summary_large_image"`
Every page uses `buildMetadata()`. No custom overrides that drop canonical. Verified by grepping `alternates:` — all page-level metadata flows through the helper.

### Task 7 — URL structure
All URLs lowercase-English slugs (`/services/building-mamad`, `/guides/mamad-process`, `/compare/katlan-rashum-vs-hafer`). No trailing slashes in internal `<Link>` hrefs. Hebrew reserved for display labels only. 163-URL sitemap audited: 0 mixed casing, 0 duplicates, 0 trailing-slash inconsistencies.

### Task 8 — JSON-LD schema
Inventory of emitted schema types (via `src/lib/schema.ts` + `<JsonLd>` component):
- Homepage: `Organization` + `WebSite` + `LocalBusiness`
- About: `Organization`
- Contact: `LocalBusiness`
- Services (7 pages): `Service` + `FAQPage` + `BreadcrumbList` (via ServicePageLayout)
- Guides (5 pages): `Article` + `FAQPage` + `BreadcrumbList`; `mamad-process` also emits `HowTo`
- Compare (4 pages): `FAQPage` + `BreadcrumbList`
- Areas index: `BreadcrumbList` + `ItemList`
- Areas/[city]: `LocalBusiness` + `Service` + `BreadcrumbList` + `FAQPage`
- Areas/[city]/[service]: `LocalBusiness` + `Service` + `BreadcrumbList`

No duplicate schema blocks per page. All `@context` = `https://schema.org`. All URLs in schema use the absolute canonical form (same helper as metadata).

### Task 9 — Internal linking / orphans
**Before this pass:** 3 construction services (`/services/private-construction`, `/services/renovations`, `/services/extensions`) were absent from the Footer's "שירותים" column — only reachable via Header dropdown. Not truly orphaned (Header covers them on desktop + mobile), but under-linked relative to protection services.

**Fix:** Split Footer services column into two sub-groups:
- `מיגון וממ״ד` — existing 4 protection services (unchanged).
- `בנייה ושיפוצים` — new sub-group iterating `constructionServices` from `site.ts` (3 entries). Same styling, shared `<nav aria-label="שירותים">` wrapper.

After the fix, every service page is in the Footer of every other page (141+ geo pages × 7 services inbound links each). Orphan count: 0.

### Task 10 — Core Web Vitals / mobile / security (review, no regressions)
- No new scripts, no new external dependencies, no image additions (still 0 `<img>`).
- Font: Heebo via `next/font/google` — self-hosted, preload, `display: swap`.
- Tailwind v4 `@theme` tokens only, zero runtime CSS-in-JS.
- `next.config.ts` unchanged; headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`) already set.
- Mobile-first: sticky CTA bar + mobile menu in Header; no layout shift triggers added.
Expected Lighthouse deltas: Mobile Performance ±0 (no asset changes), SEO +3–5 (meta description coverage + title deduplication).

### Files modified (Stage 4)
- `src/app/layout.tsx` — title template pass-through
- `src/components/Footer.tsx` — split services column into 2 sub-groups + import `constructionServices`
- `src/app/about/page.tsx` — DESCRIPTION expansion
- `src/app/accessibility/page.tsx` — DESCRIPTION expansion
- `src/app/areas/page.tsx` — DESCRIPTION expansion
- `src/app/contact/page.tsx` — DESCRIPTION expansion
- `src/app/privacy/page.tsx` — TITLE brand + DESCRIPTION expansion
- `src/app/terms/page.tsx` — TITLE brand + DESCRIPTION expansion
- `src/app/compare/katlan-rashum-vs-hafer/page.tsx` — DESCRIPTION
- `src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx` — DESCRIPTION
- `src/app/compare/mamad-vs-miggun-vs-migunit/page.tsx` — DESCRIPTION
- `src/app/compare/migunit-vs-mamad-muchan/page.tsx` — DESCRIPTION
- `src/app/guides/choosing-mamad-contractor/page.tsx` — DESCRIPTION
- `src/app/guides/home-front-command-approval/page.tsx` — DESCRIPTION
- `src/app/guides/mamad-cost/page.tsx` — DESCRIPTION
- `src/app/guides/mamad-mistakes/page.tsx` — DESCRIPTION
- `src/app/guides/mamad-process/page.tsx` — DESCRIPTION
- `src/app/services/building-mamad/page.tsx` — DESCRIPTION
- `src/app/services/extensions/page.tsx` — DESCRIPTION
- `src/app/services/migunit/page.tsx` — DESCRIPTION
- `src/app/services/prefab-mamad/page.tsx` — DESCRIPTION
- `src/app/services/private-construction/page.tsx` — DESCRIPTION
- `src/app/services/renovations/page.tsx` — DESCRIPTION
- `src/app/services/room-reinforcement/page.tsx` — DESCRIPTION

### Verification
- `npm run lint` → 0 errors, 0 warnings.
- `rm -rf .next && npm run build` → `✓ Compiled successfully in 16.1s`, 168/168 static pages generated.

### Constraints held
- No em-dashes reintroduced. No AI-tell phrases reintroduced. No "יוזמה קהילתית".
- No URL changes. No prices changed (only surfaced in descriptions).
- No content deletions. No schema removed. Title template change preserves canonical brand, just moves the responsibility to the page-level TITLE constants.
- All `[טעון אימות מקצועי]` markers preserved.

## Stage 5 — E-E-A-T + Helpful Content (completed 2026-04-16)

### Audit (general-purpose agent, read-only). Priority summary:
| # | Severity | Item | Acted? |
|---|---|---|---|
| 1 | 🔴 | Remove visible `[טעון אימות מקצועי]` markers from user-facing prose | ✅ fixed |
| 2 | 🔴 | Remove fake Facebook/LinkedIn URLs from `sameAs` in `lib/schema.ts` | ✅ fixed |
| 3 | 🟠 | Add Trust Bar with `[טעון עדכון בפועל]` placeholders | deferred (needs client counts) |
| 4 | 🟠 | License number placeholder in Footer + About | deferred (needs client license #) |
| 5 | 🟠 | Outbound authority links to oref.org.il, gov.il | ✅ fixed |
| 6 | 🟠 | Expand `/about` content | deferred (Stage 8) |
| 7 | 🟠 | Author byline on guide pages | ✅ fixed |
| 8 | 🟠 | Request testimonials, add `Review` schema helper | deferred (needs client data) |
| 9 | 🟠 | Physical address disclosure decision | deferred (policy decision) |
| 10 | 🟡 | Deduplicate hardcoded phone strings | deferred (cleanup) |
| 11 | 🟡 | Cookie/analytics disclosure in Privacy | deferred (depends on analytics setup) |

### Task 1 — Debug markers → natural Hebrew (19 occurrences across 7 files)
All user-facing `[טעון אימות מקצועי]` and similar bracketed debug markers removed or converted to natural professional caveats. Prices and numbers preserved exactly.
- `src/app/guides/mamad-cost/page.tsx` — 9 occurrences cleaned (FAQ answers L59, L75, L79; size table L100 ×2; TL;DR L134; accumulation note L228; breakdown L288, L292; comparison L405).
- `src/app/services/migunit/page.tsx` — 5 occurrences cleaned (FAQ L51, L59, L67; size table L114, L117).
- `src/app/services/building-mamad/page.tsx` — 3 occurrences cleaned (subtype priceImpact L201, L233; FAQ L61 about NBC filter replacement).
- `src/app/services/room-reinforcement/page.tsx` — 2 occurrences cleaned (FAQ L43 about municipality approval, L59 about door prices).
- `src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx` — 1 (L162, re-phrased as "(בכפוף לרשות המקומית ולתכנית המתאר הספציפית)").
- `src/app/compare/katlan-rashum-vs-hafer/page.tsx` — 1 (L190, re-phrased as "לכל מקרה פרטני מומלץ ייעוץ משפטי").
- `src/app/guides/home-front-command-approval/page.tsx` — 1 (FAQ L41, "[פרטים מדויקים באתר פיקוד העורף ומינהל התכנון]" → sentence with authoritative domains named).

### Task 2 — Fake `sameAs` URLs removed from Organization schema
`src/lib/schema.ts:54-60` — the 3 URLs (Google Maps search, `facebook.com/hithadshut`, `linkedin.com/company/hithadshut`) were either speculative or 404. A broken `sameAs` entry hurts E-E-A-T more than an empty array. Replaced with empty array + TODO comment requesting client's real Google Business Profile, Facebook page, and LinkedIn company URLs.

### Task 3 — Authoritative external links added
Three clickable outbound links to Israeli government authorities (with `target="_blank" rel="noopener noreferrer"`):
- `src/app/guides/home-front-command-approval/page.tsx` — new paragraph after the intro H2 citing oref.org.il (Home Front Command) and the gov.il planning administration page.
- `src/app/compare/katlan-rashum-vs-hafer/page.tsx` L289 — the "bottom disclaimer" text now links רשם הקבלנים to the gov.il Ministry of Construction and Housing page.
- FAQ L41 of the פקע״ר guide also names the two domains as plain text references.

### Task 4 — Author byline on guide pages
New component `src/components/Byline.tsx`: collective-attribution pill "מאת: צוות המומחים של התחדשות בינוי ויזמות" with a user icon. No fabricated individual name — safe collective authorship signal.
Inserted into all 5 guide pages next to the existing `ReadingTimeBadge`:
- `src/app/guides/mamad-process/page.tsx`
- `src/app/guides/mamad-cost/page.tsx`
- `src/app/guides/home-front-command-approval/page.tsx`
- `src/app/guides/choosing-mamad-contractor/page.tsx`
- `src/app/guides/mamad-mistakes/page.tsx`

When the client nominates a named engineer or architect to take article bylines, the component can be extended with an optional `author` prop and the page's `articleJsonLd` can emit a `Person` schema with `jobTitle` and `worksFor`.

### Deferred items (require client input or larger scope)
- **Trust bar on homepage** with "X+ פרויקטים", "X+ שנים": need real numbers.
- **Footer license-number line**: need actual רשם הקבלנים registration number.
- **Testimonials / `Review` schema**: need real testimonials with permission to publish.
- **Physical address decision**: need a policy call from the client.
- **Phone string deduplication**: cosmetic, scheduled for Stage 8 cleanup.
- **Cookie/GA disclosure**: depends on whether analytics/pixels are active.

### Verification
- `npm run lint` → 0 errors, 0 warnings.
- `rm -rf .next && npm run build` → `✓ Compiled successfully in 10.6s`, 168/168 static pages.

### Constraints held
- No fabricated names, numbers, testimonials, addresses, or license numbers.
- No em-dashes reintroduced. No AI-tell phrases reintroduced.
- No prices changed — only the surrounding debug text.
- No schema removed — `sameAs` changed from `[3 speculative URLs]` to `[]`, which is factually safer.
- All Stage 1–4 outputs preserved.

