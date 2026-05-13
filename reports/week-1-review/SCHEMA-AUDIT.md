# Schema Audit — 2026-05-14

## FAQPage emissions per file

```
      3 src/app/guides/mamad-cost/page.tsx
      3 src/app/compare/mamad-vs-miggun-vs-migunit/page.tsx
      3 src/app/compare/mamad-vs-hamad/page.tsx
      3 src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx
      3 src/app/compare/katlan-rashum-vs-hafer/page.tsx
      3 src/app/areas/[city]/page.tsx
      2 src/app/areas/[city]/[service]/page.tsx
      1 src/app/guides/mamad-vs-shelter/page.tsx
      1 src/app/guides/mamad-process/page.tsx
      1 src/app/guides/mamad-permit-exemption-2026/page.tsx
      1 src/app/guides/mamad-mistakes/page.tsx
      1 src/app/guides/mamad-air-filter-system/page.tsx
      1 src/app/guides/home-front-command-approval/page.tsx
      1 src/app/guides/choosing-mamad-contractor/page.tsx
      1 src/app/areas/page.tsx
```

## Files using BOTH <FAQ ...> AND faqJsonLd (duplication risk)

```
src/app/areas/[city]/page.tsx
14:  faqJsonLd,
125:      <JsonLd data={[breadcrumb, localBusiness, service, faqJsonLd(faqs)]} />
359:      <FAQ items={faqs} eyebrow="שאלות ותשובות" title={`שאלות נפוצות: ${area.name}`} tone="soft" includeSchema={false} />
---
src/app/compare/katlan-rashum-vs-hafer/page.tsx
11:  faqJsonLd,
235:      <JsonLd data={faqJsonLd(faqs)} />
478:      <FAQ items={faqs} includeSchema={false} />
---
src/app/compare/mamad-tzamud-vs-hitzoni/page.tsx
10:import { faqJsonLd, breadcrumbJsonLd } from "@/lib/schema";
198:      <JsonLd data={faqJsonLd(faqs)} />
378:      <FAQ items={faqs} includeSchema={false} />
---
src/app/compare/mamad-vs-hamad/page.tsx
14:import { faqJsonLd } from "@/lib/schema";
83:      <JsonLd data={[faqJsonLd(faqs)]} />
499:      <FAQ items={faqs} title="שאלות נפוצות: ממ״ד מול חמ״ד" />
---
src/app/compare/mamad-vs-miggun-vs-migunit/page.tsx
9:import { faqJsonLd } from "@/lib/schema";
117:      <JsonLd data={faqJsonLd(faqs)} />
220:      <FAQ items={faqs} includeSchema={false} />
---
src/app/guides/mamad-cost/page.tsx
18:  faqJsonLd,
135:      <JsonLd data={faqJsonLd(faqs)} />
725:      <FAQ items={faqs} title="שאלות נפוצות: מחיר ממ״ד" eyebrow="שאלות ותשובות" includeSchema={false} />
---
```

## Conclusions

**Real duplications:** 1 file (`src/app/compare/mamad-vs-hamad/page.tsx`).
The 5 other "both" files already pass `includeSchema={false}` to the FAQ component, so they emit FAQPage exactly once at page-level.

## Fixed: src/app/compare/mamad-vs-hamad/page.tsx
- Before: 2 FAQPage instances (page-level JsonLd + FAQ component default emission)
- After: 1 FAQPage instance (FAQ component only, per mandate canonical-source rule)
- Removed: `<JsonLd data={[faqJsonLd(faqs)]} />` at line 83 (sole content was FAQPage; safe full removal)
- Also removed: unused imports of `JsonLd` and `faqJsonLd` (now dead after the JsonLd removal)
- Kept: `<SchemaArticle>`, `<SchemaBreadcrumb>`, `<FAQ items={faqs} />` (component emits FAQPage)
- Verified post clean-build: FAQPage=1, Question=8 (matches 8 FAQ entries), Article=1.
