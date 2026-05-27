# SEO Backlog — מתועדף

עדיפויות: P0 (חוסם / שבוע נוכחי), P1 (שבוע הבא), P2 (חודש), P3 (רבעון).
סטטוס: TODO / IN-PROGRESS / DONE / BLOCKED.

---

## Week 1 — Foundations
- [P0] [DONE] Bootstrap /seo/ folder (10 files)
- [P0] [TODO] Generate brand favicon set: favicon.ico (16/32/48), apple-touch-icon (180), icon-192, icon-512
- [P0] [TODO] Generate OG default image (1200×630) + square (1200×1200) — code-rendered route at `/opengraph-image` already exists, validate
- [P0] [TODO] manifest.webmanifest with icons + name + theme color
- [P0] [TODO] Update `app/layout.tsx` metadata.icons + manifest reference
- [P0] [TODO] Populate KEYWORD_MAP.md (60+ terms)
- [P0] [TODO] Populate CONTENT_GUARDRAILS.md (verified facts only)
- [P0] [TODO] Populate MONEY_PAGES.md, AREA_PAGES.md, SCHEMA_MAP.md, INTERNAL_LINKING.md
- [P1] [BLOCKED-on-the operator] Document GA4 + GSC + Bing Webmaster integration steps in BLOCKERS

## Week 2 — E-E-A-T Layer 1
- [P1] [DONE 2026-04-30] Create `/about` page with bio + Person schema (broker license framing removed 2026-05-03 per strategic positioning shift)
- [P1] [TODO] Add byline+dateModified to every `/guides/*` page (collective Byline already exists; switch to attributed when bio live)
- [P1] [TODO] Article schema on every guide (author/datePublished/dateModified/image)
- [P1] [TODO] Trust Strip below hero on home: 4 trust pillars (PCR / Engineer / Registered Contractor / Licensed Realtor)
- [P2] [TODO] Article author byline on compare/* pages

## Week 3 — GEO Layer 1
- [P1] [TODO] Quick Answer block component (40-60 words) — add to top of every guide
- [P1] [TODO] Visible "עודכן: [date]" line below byline on every guide
- [P1] [TODO] Audit FAQPage schema coverage — every page with FAQ must emit it
- [P2] [TODO] Quick Answer also on top of services + areas pages

## Week 4 — Local SEO Push
- [P1] [BLOCKED-on-the operator] GBP setup (categories: Home builder + General contractor + Concrete contractor)
- [P1] [TODO] LocalBusiness schema injected on home page (alongside Organization + WebSite)
- [P1] [TODO] Givatayim area page rewrite as model — neighborhoods, ועדה גבעתיים-רמת-גן, תב״ע, anonymous case
- [P2] [TODO] Replicate Givatayim model to next-priority cities (Modiin, Ramat Gan, Herzliya, Raanana, Kfar Saba)

## Week 5 — Area Pages Survival
- [P1] [TODO] Score 30 area pages A/B/C in AREA_PAGES.md
- [P1] [TODO] Rewrite C-rated cities (or noindex if no real data)
- [P1] [TODO] Audit 120 city×service permutations — noindex if templated

## Week 6 — GEO Layer 2
- [P2] [TODO] Inline citations to oref.org.il / gov.il / iplan.gov.il in every guide (rel=nofollow)
- [P2] [TODO] Key Stats block (verified numbers + sources) in every guide
- [P2] [TODO] Listicle layout for /guides/mamad-mistakes + choosing-mamad-contractor

## Week 7 — Visual Authenticity
- [P2] [BLOCKED-on-the operator] Real project photos (5-15 projects, before/during/after)
- [P2] [TODO] /projects route with ImageObject schema (skeleton ready, populate when photos arrive)

## Week 8 — Reviews & Social Proof
- [P2] [BLOCKED-on-the operator] Real reviews (5-10 written, with consent)
- [P2] [TODO] /reviews route + Review schema (skeleton)
- [P2] [TODO] GBP review CTA on /contact (after GBP verified)

## Week 9 — Technical Hardening
- [P2] [TODO] Lighthouse mobile audit on 5 top pages, baseline + fixes
- [P2] [TODO] Verify dynamic sitemap works at runtime, lastmod populated
- [P2] [TODO] Robots.ts: explicit allow for GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot

## Week 10 — Content Depth
- [P2] [TODO] /guides/mamad-permit-exemption-2026 (1800+ words)
- [P2] [TODO] /guides/mamad-vs-shelter (1500+ words)
- [P2] [TODO] /guides/mamad-air-filter-system (1500+ words)

## Week 11 — Off-site Authority
- [P2] [BLOCKED-on-the operator] Wikipedia "מרחב מוגן דירתי" entry improvement (no self-link)
- [P2] [BLOCKED-on-the operator] Business directory listings (B144, Zap, Dapei Zahav) — needs the operator's NAP confirmation
- [P3] [TODO] GEO baseline test: query 10 core terms in ChatGPT/Perplexity/Gemini/AIO

## Week 12 — Iteration
- [P3] [TODO] llms.txt audit + extend with llms-full.txt
- [P3] [TODO] 90-day report
- [P3] [TODO] Quarter 2 plan
