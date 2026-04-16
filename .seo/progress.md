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
