# Rich Results Validation Baseline — 2026-05-14 (T+0)

**Method:** `curl` to live production URLs, extract JSON-LD blocks, count `@type` occurrences, list manual-test URLs for Ofek.
**Note:** Captured BEFORE PR #3 (FAQPage dedup) merges. /compare/mamad-vs-hamad will show 2 FAQPage instances until that PR lands. Re-validate after merge.

---

## https://hithadshut.co.il/

- HTTP status: 200
- Page size: 241610 bytes
- JSON-LD script blocks: 1
- Manual test URL: https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2F

### Schema type counts

- FAQPage: 1
- Question: 5
- Person: 2
- WebSite: 1
- ImageObject: 1

### Critical schemas present (Article/Breadcrumb expected on content pages)
- Article: ✗
- BreadcrumbList: ✗

---

## https://hithadshut.co.il/about/ofek-mazor

- HTTP status: 200
- Page size: 144081 bytes
- JSON-LD script blocks: 1
- Manual test URL: https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fabout%2Fofek-mazor

### Schema type counts

- BreadcrumbList: 2
- FAQPage: 1
- Question: 8
- Person: 3
- Organization: 1
- WebSite: 1
- ImageObject: 3

### Critical schemas present (Article/Breadcrumb expected on content pages)
- Article: ✗
- BreadcrumbList: ✓

---

## https://hithadshut.co.il/services/building-mamad

- HTTP status: 200
- Page size: 284793 bytes
- JSON-LD script blocks: 1
- Manual test URL: https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fservices%2Fbuilding-mamad

### Schema type counts

- Article: 1
- BreadcrumbList: 2
- FAQPage: 1
- Question: 12
- Service: 1
- Person: 2
- Organization: 1
- WebSite: 1
- ImageObject: 2
- HowTo: 4

### Critical schemas present (Article/Breadcrumb expected on content pages)
- Article: ✓
- BreadcrumbList: ✓

---

## https://hithadshut.co.il/services/prefab-mamad

- HTTP status: 200
- Page size: 197264 bytes
- JSON-LD script blocks: 1
- Manual test URL: https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fservices%2Fprefab-mamad

### Schema type counts

- Article: 1
- BreadcrumbList: 2
- FAQPage: 1
- Question: 13
- Service: 1
- Person: 2
- Organization: 1
- WebSite: 1
- ImageObject: 2

### Critical schemas present (Article/Breadcrumb expected on content pages)
- Article: ✓
- BreadcrumbList: ✓

---

## https://hithadshut.co.il/compare/mamad-vs-hamad

- HTTP status: 200
- Page size: 196601 bytes
- JSON-LD script blocks: 1
- Manual test URL: https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fcompare%2Fmamad-vs-hamad

### Schema type counts

- Article: 1
- BreadcrumbList: 2
- FAQPage: 2
- Question: 16
- Person: 2
- Organization: 1
- WebSite: 1
- ImageObject: 2

### Critical schemas present (Article/Breadcrumb expected on content pages)
- Article: ✓
- BreadcrumbList: ✓

---

## Findings before manual Rich Results Test

- **/ (homepage)**: no Article/Breadcrumb expected; relies on FAQPage + Person + Organization + WebSite. Normal.
- **/about/ofek-mazor**: no Article (acceptable for About-page about a person; has Person + Organization + Breadcrumb).
- **/services/building-mamad**: should have Article + Breadcrumb + Service.
- **/services/prefab-mamad**: same expectations.
- **/compare/mamad-vs-hamad**: should have Article + Breadcrumb + FAQPage. **FAQPage count = 2 due to pending PR #3 dedup**. Re-validate after merge.

## Manual Action Required by Ofek

For each URL above, open the 'Manual test URL' in browser and:
1. Screenshot the result page.
2. Save to `reports/week-1-review/screenshots/rich-results-<page-slug>.png`.
3. Report any ERRORS (not warnings) back to Claude Code.

Errors block Day 4. Warnings are informational only.
