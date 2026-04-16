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
