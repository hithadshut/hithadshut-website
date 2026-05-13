# Schema Validation — Day 2 Yavil Split

תאריך: 2026-05-13
שיטה: `npm run build` + `npm run start` on `PORT=3459/3460` + `curl` with `Host: hithadshut.co.il` + `X-Forwarded-Proto: https` headers to bypass the canonical-redirect middleware.

---

## `/compare/mamad-vs-hamad`

| בדיקה | תוצאה |
|---|---|
| Page size | 192,600 bytes |
| Mandatory opening sentence (`מחיר ממ״ד יביל בישראל ב-2026 מפוצל`) | ✓ rendered 1× |
| `"@type":"Article"` | ✓ 1 |
| `"@type":"BreadcrumbList"` | 2 (pre-existing duplication: SchemaBreadcrumb + older Breadcrumb in layout chain) |
| `"@type":"FAQPage"` | **2 (duplication)** |
| `"@type":"Question"` | 16 (8 questions × 2 FAQPage instances) |
| PRICING numbers present in HTML | 130,000 (14×), 180,000 (14×), 220,000 (12×), 160,000 (12×), 250,000 (14×), 150,000 (12×) |

**Issue identified (pre-existing, NOT introduced in Day 2):** FAQPage schema is rendered twice on `/compare/mamad-vs-hamad`. Both `<JsonLd data={[faqJsonLd(faqs)]} />` (page-level) and the FAQ component's internal `<JsonLd data={faqJsonLd(items)} />` emit identical schemas. **Flag for cleanup post-merge** — Google de-duplicates within a page so penalty is minimal, but it's noise in AI parsers.

---

## `/services/prefab-mamad`

| בדיקה | תוצאה |
|---|---|
| Page size | 192,816 bytes |
| Mandatory opening sentence | ✓ rendered 1× |
| New FAQ #1 ("למה רואים מחירי ממ״ד יביל של 90,000 ש״ח") | ✓ in HTML |
| New FAQ #2 ("מה זול יותר, ממ״ד יביל או ממ״ד בנייה רטובה") | ✓ in HTML |
| New FAQ #3 ("האם יש פטור מהיתר בנייה לממ״ד יביל") | ✓ in HTML |
| `"@type":"Article"` | ✓ 1 |
| `"@type":"Service"` | ✓ 1 |
| `"@type":"FAQPage"` | ✓ 1 (no duplication on this page) |
| `"@type":"BreadcrumbList"` | 2 (same dup pattern as above) |
| `"@type":"Question"` | 13 (10 original + 3 new) ✓ |

---

## Rich Results Test (manual step)

לא נגיש מסביבת CLI (דורש URL ציבורי). אחרי merge ל-master ו-deploy ל-vercel, Ofek מבצע:
1. https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fcompare%2Fmamad-vs-hamad
2. https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fservices%2Fprefab-mamad
3. https://search.google.com/test/rich-results?url=https%3A%2F%2Fhithadshut.co.il%2Fabout%2Fofek-mazor

Saves results to `reports/week-1-review/RICH-RESULTS-VALIDATION.md` (Day 3 Task 3.3).

---

## Conclusions

- All Day 2 content changes ship correctly in build output.
- 3 new FAQs visible in HTML and in FAQPage JSON-LD schema.
- PRICING constants render with correct comma-formatted values.
- Mandatory cross-page consistency sentence appears verbatim on both pages.
- **Open issue (post-merge):** FAQPage schema duplication on `/compare/mamad-vs-hamad`. Document in `.claude/LESSONS.md` after fix.
