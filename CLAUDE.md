# Hithadshut.co.il — Project Constitution

This file is loaded at the start of every Claude Code session. It is the source of truth.
If a user prompt conflicts with this file, this file wins. If you are uncertain, stop and ask.

---

## Mission

Build the #1 organic Hebrew-language authority in Israel for:
1. **Urban renewal** — pinui-binui, TAMA 38 expiry, Chalufat Shaked, condominium plans, tenant rights.
2. **Memad construction** — building, retrofitting, prefab, Home Front Command approvals.

The site is a real construction company: **התחדשות בינוי ויזמות**, founded by Ofek Mazor (CEO).
Treat the site as a construction firm, not as a brokerage. Ofek is the executive face.

We are not optimizing for vanity rankings. We optimize for: **citable answers in Google AI Overviews, ChatGPT, Perplexity, Gemini, plus #1 organic positions on transactional Hebrew queries.**

---

## Stack

- Next.js 15 (App Router) on Vercel
- TypeScript
- Tailwind CSS
- Heebo font (Hebrew UI, body ≥17px)
- Full RTL layout
- Resend for contact-form email
- Deployed via GitHub → Vercel CI

Build commands (always run before declaring a page complete):
```bash
npm run lint
npm run typecheck
npm run build
```

If `build` fails, fix it before opening a PR. Never commit a broken build.

---

## Authoritative rule files (read on demand)

@.claude/rules/seo-content.md — All SEO, copywriting, accuracy, and Hebrew content rules. Load when creating/editing any user-facing page or copy.
@.claude/rules/technical.md — Component patterns, schema templates, internal linking rules, build conventions. Load when creating components, schema, or layout work.

---

## Hard rules (never violate)

<important if="any user-facing content is being written or edited">
1. **Never fabricate** dates, percentages, sums, code numbers, law sections, company names, or market figures. If unsure, output `[טעון אימות]` inline AND raise it in your final reply. Do not silently invent.
2. **Never present "מיגונית" as a private-home solution** in the central or coastal regions. Migunit is for border zones and public spaces. For private homes use ממ"ד תקני or שיפור מיגון.
3. **Never confuse the four protection solutions:** ממ"ד תקני / שיפור מיגון / ממ"ד יביל / מיגונית. Each has distinct definition, regulator, audience.
4. **Never confuse renewal tracks:** TAMA 38/1 (66% needed), TAMA 38/2 (single building demolition), pinui-binui (compound, 67% to sue holdout), Chalufat Shaked (80% needed). Mix-up = critical content failure.
5. **Never give explicit legal or tax advice.** Explain principles and state: "מומלץ להתייעץ עם עו"ד מקרקעין".
6. **Never promise outcomes:** "אתם תקבלו דירה גדולה ב-25 מ"ר" is forbidden. "התמורה הסטנדרטית כיום עומדת על תוספת של כ-25 מ"ר במרכז הארץ, אך זה משתנה לפי עיר ופרויקט" is correct.
7. **Never write AI-tone Hebrew.** No "במאמר זה למדנו", no "בהחלט", no "אקוסיסטם", no "סינרגיה", no "הפתרון המוביל", no openings with "שאלה מעולה". Read seo-content.md for the voice spec.
</important>

---

## Workflow rules

<important if="planning or executing any non-trivial change">
1. **Always start in Plan Mode** for any change that touches >1 file. Show the plan, get explicit approval, then execute.
2. **Read before write.** Before editing any page, view the current file. Before adding components, view existing patterns in `/app/components/` and reuse.
3. **Pages are produced via the `/new-page` command.** Do not invent ad-hoc page structures. The command enforces the canonical 9-section blueprint defined in seo-content.md.
4. **Schema is non-optional.** Every page ships with valid JSON-LD per technical.md. Validate via the Schema validator URL noted in technical.md before merging.
5. **Internal links are not afterthoughts.** Every new page declares which existing pages it links to and which existing pages should link back to it. Update the linking graph in `/data/internal-links.ts` (create if missing).
6. **No orphan pages.** A page that is not linked from at least 2 other pages is invisible to Google.
</important>

---

## Site architecture (current target — may evolve)

```
/                                      Homepage — sales hub
├── /memad/                            PILLAR: ממ"ד ומיגון (existing, refactor not rebuild)
│   ├── /memad/banya/                  בניית ממ"ד
│   ├── /memad/mehir/                  מחיר ממ"ד 2026
│   ├── /memad/yavil/                  ממ"ד יביל
│   ├── /memad/shipur-migun/           שיפור מיגון
│   ├── /memad/ishur-pikud-haoref/     אישור פיקוד העורף
│   └── /memad/maslul-ptor/            מסלול פטור (חרבות ברזל)
│
├── /hithadshut-ironit/                PILLAR: התחדשות עירונית (NEW — primary 2026 focus)
│   ├── /pinui-binui/                  Hub — pinui-binui
│   │   ├── /pinui-binui/madrich/
│   │   ├── /pinui-binui/temurot/
│   │   ├── /pinui-binui/zechuyot/
│   │   ├── /pinui-binui/kshishim/      Senior rights — top priority page
│   │   ├── /pinui-binui/chok-67/
│   │   ├── /pinui-binui/eravut/
│   │   ├── /pinui-binui/misui/
│   │   ├── /pinui-binui/yorshim/
│   │   ├── /pinui-binui/sarvan/
│   │   ├── /pinui-binui/yazam/
│   │   └── /pinui-binui/owner-attorney/
│   ├── /tama-38/                      Hub — TAMA 38
│   │   ├── /tama-38/madrich/
│   │   ├── /tama-38/pkia-2026/         Top priority — TAMA 38 expiry
│   │   ├── /tama-38/sug-1/
│   │   └── /tama-38/sug-2/
│   ├── /chalufat-shaked/              Top priority — content gap in market
│   └── /tochnit-ironit/
│
├── /madrichim/                        Knowledge hub (1500+ word authority articles)
├── /odot/                             About Ofek + the company
└── /tzor-kesher/                      Contact
```

**Build sequence (do not skip):**
1. Critical fixes first (positioning rewrites, מיגונית cleanup).
2. Top 4 urban-renewal pages: `/pinui-binui/`, `/tama-38/pkia-2026/`, `/chalufat-shaked/`, `/pinui-binui/kshishim/`.
3. Sub-pages of pinui-binui (priority order in seo-content.md).
4. TAMA 38 sub-pages.
5. Comparison pages.

---

## Voice — who Ofek is on the site

- CEO and founder of התחדשות בינוי ויזמות.
- The company is a construction firm with contractor partnerships.
- Audience: dwelling owners 50–80+ facing the largest financial decision of their lives.
- Tone: clear, direct, calm, professional. Never marketing-puffed. Never legalese.
- Specifics over slogans. Numbers in every paragraph where possible.

---

## What you (Claude Code) decide vs. what Ofek decides

You decide:
- HTML/JSX structure, CSS classes, component reuse, file paths.
- Schema markup that matches visible content.
- Internal link placement within a page.
- Build/lint compliance.

Ofek + content lead decide:
- Content strategy, page priority order, regulatory facts, voice tone.
- Whether a fact is verified or `[טעון אימות]`.
- Final copy review before merge.

When in doubt about content: ask. Don't guess.

---

## Verification before commit

For any new or edited page, run this self-check and report results in your final message:

- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] Page H1 contains primary keyword (per seo-content.md)
- [ ] First paragraph answers the search intent in 50–100 words
- [ ] At least one outbound link to an official source (gov.il / oref.org.il / kolzchut / nevo / Tax Authority)
- [ ] 3+ internal links to existing site pages
- [ ] FAQPage schema present and matches visible FAQ
- [ ] Article schema present with author=Ofek Mazor, datePublished, dateModified
- [ ] BreadcrumbList schema present
- [ ] No `[טעון אימות]` left without explicit flag in your reply

If any item fails, do not declare done. Fix or escalate.

---

End of constitution.@AGENTS.md
