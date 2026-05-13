# GSC URL Inspection Baseline — 2026-05-14 (T+0)

**Owner:** Ofek (manual data entry; Claude has no GSC UI access)
**Time required:** ~5 minutes
**When:** before T+7 day measurement window

## Instructions
1. Open https://search.google.com/search-console
2. Property: `hithadshut.co.il` (or `sc-domain:hithadshut.co.il`)
3. For each URL below, paste into the URL Inspection bar (top of GSC)
4. Fill in the table fields
5. If "URL is not on Google" → click "Request indexing"
6. Commit this file when done

---

## URL 1: /services/building-mamad
- URL is on Google: ___
- Last crawl: ___
- Coverage status: ___
- Enhancements detected: ___
- Mobile usability: ___
- Action taken (if any): ___

## URL 2: /services/prefab-mamad
- URL is on Google: ___
- Last crawl: ___
- Coverage status: ___
- Enhancements detected: ___
- Mobile usability: ___
- Action taken (if any): ___

## URL 3: /services/room-reinforcement
- URL is on Google: ___
- Last crawl: ___
- Coverage status: ___
- Enhancements detected: ___
- Mobile usability: ___
- Action taken (if any): ___

## URL 4: /compare/mamad-vs-hamad
- URL is on Google: ___
- Last crawl: ___
- Coverage status: ___
- Enhancements detected: ___
- Mobile usability: ___
- Action taken (if any): ___

## URL 5: /about/ofek-mazor
- URL is on Google: ___
- Last crawl: ___
- Coverage status: ___
- Enhancements detected: ___
- Mobile usability: ___
- Action taken (if any): ___

## URL 6: /compare/mamad-vs-miggun-vs-migunit
- URL is on Google: ___
- Last crawl: ___
- Coverage status: ___
- Enhancements detected: ___
- Mobile usability: ___
- Action taken (if any): ___

---

## Why these 6 URLs
- Services pages (1–3): money pages; need confirmed indexed with Article + Service enhancements.
- /compare/mamad-vs-hamad (4): yavil pricing transparency hub; need FAQPage enhancement.
- /about/ofek-mazor (5): trust anchor; need Person + Organization (Knowledge Panel eligibility check).
- /compare/mamad-vs-miggun-vs-migunit (6): safety explainer; check for false-positive flags on migunit content.

## Expected outcomes (for comparison)
If everything is healthy, expect:
- All 6 URLs "URL is on Google" = Yes
- Last crawl date within last 7 days (Vercel's recent activity should trigger crawls)
- No coverage errors
- 2–4 enhancements detected per page (Article, Breadcrumb, FAQPage, Service)
