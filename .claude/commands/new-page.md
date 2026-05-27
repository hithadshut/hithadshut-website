New page · MD
---
description: Scaffold a new SEO page following the canonical 9-section blueprint. Use for any new money/guide/sub-page on hithadshut.co.il.
argument-hint: <slug-or-url> [pillar]
---

# /new-page — Scaffold a canonical SEO page

You are scaffolding a new page on hithadshut.co.il. Follow this exact workflow. Do not skip steps.

## Inputs expected from the user (gather if missing)

Before writing any code, gather:

1. **Slug + URL path.** e.g. `/pinui-binui/kshishim/`.
2. **Pillar** this page belongs under: `memad`, `hithadshut-ironit`, `pinui-binui`, `tama-38`, `madrichim`, `services`, `guides`.
3. **Page intent.** One of:
   - Money (transactional, drives leads)
   - Guide (informational, builds authority)
   - Sub-page (deep dive under a pillar)
   - Comparison (X vs Y)
4. **Primary keyword.** Single Hebrew phrase, 1–4 words.
5. **Secondary keywords.** 3–7 long-tail variants.
6. **The H1** (you may propose, the operator confirms).
7. **The opening direct-answer paragraph (50–100 words).** This is the AI-extraction chunk. Critical.
8. **The 5–10 FAQ questions** (in natural Hebrew search phrasing).
9. **3–5 internal links to add** to existing pages on the site.
10. **1+ outbound link** to an official source (gov.il / oref.org.il / kolzchut / nevo / taxes.gov.il).

If any of 4–10 are missing, do not invent them. Stop and ask the operator.

## Workflow

### Step 1 — Plan Mode

Always enter Plan Mode first. Output a plan that includes:

- File path(s) to be created.
- Components used (existing vs new).
- Schema types included (Article, FAQPage, BreadcrumbList, HowTo if applicable).
- Internal links: which existing pages will be updated to link TO this new page.
- Word count target (per seo-content.md section 2).
- Self-audit checklist (per seo-content.md section 11) the page will be checked against.

Wait for explicit approval before executing.

### Step 2 — Read existing patterns

Before writing:
1. View `/CLAUDE.md` and `.claude/rules/seo-content.md` and `.claude/rules/technical.md`.
2. View 1–2 existing money pages to match the component patterns.
3. View `/data/internal-links.ts` (or create if missing).

### Step 3 — Scaffold the page file

Create the page at the right path. Use the canonical 9-section structure from seo-content.md.

Project layout note: the App Router lives at `src/app/`, not `app/`. The
`@/*` path alias resolves to `./src/*`. Components use PascalCase
filenames (existing convention); the Day-5 additions follow the same
convention. Use the imports below verbatim — do not invent kebab-case
aliases.

```tsx
// src/app/[slug]/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import TableOfContents from "@/components/TableOfContents";
import ContentSection from "@/components/ContentSection";
import ComparisonTable from "@/components/ComparisonTable"; // when needed
import FAQ from "@/components/FAQ";
import TrustBlock from "@/components/TrustBlock";
import ContactCTA from "@/components/ContactCTA";       // pre-footer CTA
import InlineLeadForm from "@/components/InlineLeadForm"; // optional inline lead capture
import RelatedArticles from "@/components/RelatedArticles";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";

const PATH = "/{{ slug }}/";
const TITLE = "{{ ≤60 chars, primary kw first }}";
const DESCRIPTION = "{{ 150–160 chars, direct answer }}";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="{{ H1 }}"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished="{{ ISO 8601 }}"
        dateModified="{{ ISO 8601 }}"
      />
      <SchemaBreadcrumb
        items={[
          { name: "{{ pillar name }}", url: "{{ pillar url }}" },
          { name: "{{ this page }}", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="{{ short label }}"
        title="{{ H1 }}"
        subtitle="{{ opening direct-answer paragraph (50–100 words) }}"
        crumbs={[{ name: "{{ this page }}", href: PATH }]}
      />

      <TableOfContents items={[/* { id, label } */]} />

      {/* ContentSection blocks — H2 + body, 100–250 words each */}
      <ContentSection id="..." title="..."> ... </ContentSection>

      <FAQ items={[/* { q, a } */]} includeSchema />

      <TrustBlock publishedDate="{{ ISO 8601 }}" modifiedDate="{{ ISO 8601 }}" />

      <ContactCTA />

      <RelatedArticles currentSlug="{{ slug }}" />
    </>
  );
}
```

Notes on the components:
- `PageHero` is the canonical page-header component (named `PageHeader` in
  earlier spec drafts). Default export. Accepts `eyebrow`, `title`,
  `subtitle`, `crumbs`.
- `ContactCTA` is the pre-footer CTA section (named `CTASection` in earlier
  drafts). Default export, no required props. Wraps the contact form.
- `FAQ` accepts `items={[{ q, a }]}` and an `includeSchema` boolean. When
  `includeSchema` is true the FAQ component injects FAQPage JSON-LD that
  exactly mirrors the visible questions. Pages that already emit FAQ
  schema separately via `faqJsonLd(faqs)` should pass `includeSchema={false}`.
- `TrustBlock` defaults `author="hithadshut-team"`. Pass `disclaimer={false}` to
  suppress the legal disclaimer; pass a `source={{ label, url }}` to surface
  the page's primary regulatory citation in the trust strip.
- `SchemaArticle` author is hard-coded to the company team (anchored to the
  Person node on /about); publisher is the legal entity from
  `lib/site.ts`. Override only if you are intentionally publishing a
  guest post.
- `SchemaBreadcrumb` automatically prepends the homepage as position 1 —
  pass only the trail items.
- `internalLinks` graph: append entries to `src/data/internal-links.ts`
  as part of step 6 (do not edit directly inside the page file).

### Step 4 — Write the body

For each ContentSection:
- H2 contains a relevant secondary keyword.
- 100–250 words per section.
- At least one specific number per section.
- Active voice. Medium sentences.
- No banned phrases (seo-content.md section 3).
- Outbound link in the first half of the page.

### Step 5 — Build the FAQ

Write the FAQ in natural search Hebrew. Each answer 40–80 words, self-contained.
Mirror exactly into FAQPage schema.

### Step 6 — Update internal linking graph

In `/data/internal-links.ts`:
1. Add 3–5 outbound entries (`fromUrl: thisNewPage`).
2. Identify 2–3 existing pages that should link to this new page. For each, either:
   - Edit those pages directly to add the inline link, OR
   - surface to the operator: "These existing pages should be updated to link to the new page: [list]. Edit them now or queue for next session?"

### Step 7 — Add to sitemap

Confirm the new page is picked up by `app/sitemap.ts`. If sitemap is static, update it.

### Step 8 — Self-audit

Run the full self-audit from seo-content.md section 11. Output the result as a checklist:

```
✅ First paragraph answers intent in 50–100 words
✅ Specific numbers in every section
✅ 1+ outbound link to official source
✅ 3+ internal links
✅ FAQ matches schema
✅ Trust block present (author + dates)
✅ Pre-footer CTA
✅ Word count: {{ X }} (target: ≥1500)
✅ All regulatory facts verified or flagged [טעון אימות]
✅ No banned phrases
✅ Schema valid JSON
⚠️ Items needing the operator review: [list]
```

### Step 9 — Build verification

```bash
npm run lint
npm run typecheck
npm run build
```

Surface results. Do not declare done until all pass.

### Step 10 — Final report

Report to the operator with:
- Path of the new page.
- Word count.
- List of items flagged `[טעון אימות]` if any.
- List of existing pages that need link-back updates.
- Any open questions.

## Anti-patterns (auto-reject)

- Skipping Plan Mode.
- Inventing regulatory facts.
- Calling "מיגונית" a private-home solution.
- Mixing TAMA 38 with פינוי בינוי terminology.
- Word count under 1200 on a money page.
- Schema that doesn't match visible content.
- A page with zero internal links in or out.
- Generic city/area pages without unique content.
- "במאמר זה למדנו" / "בהחלט" / any banned phrase.

## When in doubt

Stop and ask. Better to wait 5 minutes for clarification than to produce a page that hurts the brand.

---

Argument: ${ARGUMENTS}