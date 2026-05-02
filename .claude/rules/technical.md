Technical · MD

---
description: Technical implementation rules — Next.js components, JSON-LD schema templates, internal linking, build conventions.
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "components/**/*.tsx"
  - "lib/schema/**/*.ts"
  - "data/internal-links.ts"
---

# Technical Rules — Hithadshut

This file governs implementation. CLAUDE.md links here. Read fully before structural code work.

---

## 1. Next.js 15 conventions

- App Router only. No `pages/` directory.
- Server Components by default. Use `"use client"` only when truly necessary (forms, interactive UI).
- All page metadata via the `generateMetadata` function or static `metadata` export.
- All schema via `<script type="application/ld+json">` in the page component (server-rendered, not client-injected).

---

## 2. RTL + typography

- Root layout: `<html dir="rtl" lang="he">`.
- Tailwind config includes `direction: rtl` defaults where applicable.
- Heebo font from Google Fonts via `next/font`.
- Body text: `text-[17px]` minimum. Mobile-first.
- Headings: H1 ≥28px mobile / ≥36px desktop. H2 ≥22px / ≥28px.
- Maximum content width: 720px for body text (legibility for older audience).
- Paragraph spacing: `leading-7` minimum.

---

## 3. Standard page component structure

Every money/guide page imports from these standard components (build them if missing in `/components/`):

```tsx
import { PageHeader } from "@/components/page-header";       // H1 + opening paragraph + primary CTA
import { TableOfContents } from "@/components/table-of-contents";
import { ContentSection } from "@/components/content-section"; // H2 + body
import { ComparisonTable } from "@/components/comparison-table";
import { FAQ } from "@/components/faq";                       // Renders FAQ + injects FAQPage schema
import { TrustBlock } from "@/components/trust-block";        // Author byline + dates + disclaimer
import { CTASection } from "@/components/cta-section";        // Pre-footer CTA + form
import { RelatedArticles } from "@/components/related-articles";
import { SchemaArticle } from "@/components/schema/article";
import { SchemaBreadcrumb } from "@/components/schema/breadcrumb";
```

If a component does not exist yet, create it in `/components/` with TypeScript types and Tailwind. Do not duplicate variants per page — extend the standard.

---

## 4. Schema templates (JSON-LD)

All four templates ship with every page. Use these as the source of truth.

### 4.1 Article schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ page.h1 }}",
  "description": "{{ page.metaDescription }}",
  "datePublished": "{{ page.publishedDate }}",
  "dateModified": "{{ page.lastUpdated }}",
  "author": {
    "@type": "Person",
    "name": "אופק מזור",
    "jobTitle": "מנכ\"ל ומייסד, התחדשות בינוי ויזמות",
    "url": "https://hithadshut.co.il/odot"
  },
  "publisher": {
    "@type": "Organization",
    "name": "התחדשות בינוי ויזמות",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hithadshut.co.il/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ page.canonicalUrl }}"
  }
}
```

### 4.2 FAQPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{ faq.question }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ faq.answer }}"
      }
    }
  ]
}
```

The FAQPage schema must mirror the visible FAQ exactly. Do not include questions not shown to the user.

### 4.3 BreadcrumbList schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "בית", "item": "https://hithadshut.co.il/" },
    { "@type": "ListItem", "position": 2, "name": "{{ parent.name }}", "item": "{{ parent.url }}" },
    { "@type": "ListItem", "position": 3, "name": "{{ page.h1 }}", "item": "{{ page.canonicalUrl }}" }
  ]
}
```

### 4.4 Organization schema (sitewide, in root layout)

```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "התחדשות בינוי ויזמות",
  "url": "https://hithadshut.co.il",
  "logo": "https://hithadshut.co.il/logo.png",
  "founder": {
    "@type": "Person",
    "name": "אופק מזור",
    "jobTitle": "מנכ\"ל ומייסד"
  },
  "areaServed": "IL",
  "telephone": "+972-54-671-2130",
  "email": "info@hithadshut.co.il",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+972-54-671-2130",
    "contactType": "customer service",
    "areaServed": "IL",
    "availableLanguage": "Hebrew"
  }
}
```

### 4.5 HowTo schema (process pages only)

For step-by-step pages like `/guides/mamad-process` or `/pinui-binui/madrich`. Build only when content is genuinely a procedure.

---

## 5. Schema validation

After implementing schema for any page, run mental validation against:
- Schema must match visible content exactly. No invisible questions, no fabricated dates.
- All `datePublished` and `dateModified` are ISO 8601 (`2026-05-02T00:00:00+03:00`).
- All URLs are absolute, starting with `https://hithadshut.co.il/`.
- Author always = Ofek Mazor unless specifically a guest post.

If you cannot validate without external tooling, surface to Ofek: "Schema needs validation at https://validator.schema.org/ before merge."

---

## 6. Internal linking system

Single source of truth: `/data/internal-links.ts`. Build it as:

```ts
export interface InternalLink {
  fromUrl: string;
  toUrl: string;
  anchorText: string;
  context: "inline" | "related" | "footer-cta" | "breadcrumb";
}

export const internalLinks: InternalLink[] = [
  // ...
];
```

Every new page:
1. Adds 3–5 outbound entries (`fromUrl: thisPage`).
2. Identifies 2–3 existing pages that should link TO this page, and adds those entries too.
3. Updates the linking graph.

Rules:
- Anchor text varies. Never repeat the same anchor for the same target.
- Anchor text matches user search intent, not the page title verbatim.
- No more than 7 internal links inside one page's body.
- "כתבות קשורות" block at bottom shows 3–4 contextually relevant pages.
- Pillar pages (`/memad/`, `/hithadshut-ironit/`, `/pinui-binui/`, `/tama-38/`) link to ALL their children.
- Children link to their pillar.
- Money pages link to relevant guide pages and back.

---

## 7. URL structure

- Hebrew transliteration only, kebab-case (`/pinui-binui/kshishim/`, not `/PinuiBinui/Kshishim/`).
- Trailing slash on all routes (configure Next.js for consistency).
- No `.html` extensions.
- No query parameters in canonical URLs.
- One canonical URL per page. Set in metadata.

---

## 8. Sitemap + robots

- Dynamic `app/sitemap.ts` that lists every published page with `lastModified`.
- `robots.txt` allows all crawlers, points to sitemap.
- Each page registered in sitemap upon creation.

---

## 9. Performance budgets (Core Web Vitals 2026)

- LCP <2.5s
- INP <200ms
- CLS <0.1

To meet these:
- Images: `next/image` with explicit `width`/`height`. AVIF preferred.
- Fonts: `next/font` with `display: swap`.
- Above-the-fold: server-rendered. No client-side fetching.
- Tailwind only. No bloated CSS frameworks.
- No third-party scripts above-the-fold (analytics deferred).
- WhatsApp button: lazy-loaded, not blocking.

After every build, surface the Lighthouse score to Ofek if available locally. Otherwise note: "Lighthouse not run; verify on Vercel deploy preview."

---

## 10. Forms (contact + lead capture)

The lead form is the highest-value asset on the site. Build with care.

- Two fields only on primary form: name + phone. Email optional.
- No "service type" required dropdown — that's friction.
- Server action posts to Resend → forwards to Ofek's inbox.
- Success state: thank-you message + WhatsApp deep link as fallback CTA.
- Failure state: explicit error + WhatsApp link + phone number.
- Honeypot for spam prevention. No CAPTCHA (alienates older audience).

---

## 11. CTAs

- Primary CTA color: distinct from links. Suggested: solid brand color, not transparent.
- CTA text: action-oriented, never "Submit".
  - Good: "שלחו לי פרטים", "אני רוצה לדבר עם אופק", "קבלו ייעוץ ראשוני".
  - Bad: "שלח", "אישור", "המשך".
- Sticky bottom bar on mobile with phone + WhatsApp icons.
- Click-to-call: `tel:+972546712130` (full international format).
- WhatsApp deep link with pre-populated message: `https://wa.me/972546712130?text=...`

---

## 12. Build conventions

- File naming: kebab-case for routes, PascalCase for components.
- One default export per component file.
- Server actions in `actions/` directory.
- All copy strings inlined per page (no i18n abstraction needed — Hebrew only).
- TypeScript strict mode. No `any`.
- No console.log in production code.

---

## 13. Pre-merge checks

Before declaring any page or feature done:

```bash
npm run lint
npm run typecheck
npm run build
```

If any fails — fix or surface. Never commit broken code to main.

Additionally for new pages:
- View the rendered output (or describe what it would render).
- Confirm schema is valid JSON.
- Confirm internal links exist (no 404 to internal targets).