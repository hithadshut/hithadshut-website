Seo content · MD

description: SEO, copywriting, Hebrew content, and accuracy rules. Authoritative for all user-facing content.
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "content/**/*.md"
  - "content/**/*.mdx"
---

# SEO + Content Rules — Hithadshut

This file governs all user-facing content. CLAUDE.md links here. Read fully before editing any page.

---

## 1. Page Blueprint (mandatory 9-section structure)

Every money or guide page on the site follows this structure. The `/new-page` command scaffolds it; do not deviate without escalation.

1. **Head Meta**
   - `<title>`: ≤60 chars, primary keyword first, year if relevant.
   - `<meta name="description">`: 150–160 chars, direct answer to intent, soft CTA.
   - Open Graph tags complete.
   - Canonical URL set.

2. **Above the fold**
   - H1 — clear, contains primary keyword, ≤70 chars.
   - First paragraph (50–100 words) — direct answer to user intent. This is the chunk Google AI Overviews and Perplexity will quote.
   - Primary CTA button: "צרו קשר עכשיו" / "קבלו ייעוץ ראשוני".

3. **Content body**
   - H2/H3 logical hierarchy. Each section 100–250 words.
   - Tables and comparisons wherever possible (AI loves tables).
   - Bullet lists only for serial steps/requirements.
   - At least one specific number in every section.

4. **Trust elements**
   - Author byline: "מאת אופק מזור, מנכ"ל ומייסד התחדשות בינוי ויזמות".
   - `publishedDate` + `lastUpdated` visible AND in schema.
   - At least one outbound link to an official source.

5. **FAQ**
   - 5–10 questions in natural Hebrew speech (the way users actually search in ChatGPT).
   - Each answer 40–80 words, self-contained.
   - Wired into FAQPage schema.

6. **Pre-footer CTA section**
   - Emotional headline.
   - Mini form: name + phone only.
   - WhatsApp deep link.

7. **Internal links**
   - 3–5 contextual links inside body copy (not just at the bottom).
   - "כתבות קשורות" block at bottom.

8. **Schema markup** (per technical.md): Article + FAQPage + BreadcrumbList minimum. HowTo for process pages.

9. **UX requirements**
   - Mobile-first.
   - Sticky bottom CTA bar on mobile.
   - Body font ≥17px.
   - High contrast (older audience).

---

## 2. Word counts

- **Money pages** (`/services/*`, `/memad/*` core, `/pinui-binui/`, `/tama-38/*`, `/chalufat-shaked/`): ≥1500 words.
- **Sub-pages** (`/pinui-binui/zechuyot/`, etc.): ≥1200 words.
- **Knowledge hub articles** (`/madrichim/*`): ≥1500 words.
- **Comparison pages**: ≥1200 words with at least one large comparison table.

Pages under 800 words on this site = Google penalizes us for thin content. Do not publish.

---

## 3. Hebrew voice — what to write and what to avoid

### Voice we use

- Clear, direct, professional, human.
- Active voice over passive.
- Medium-length sentences. Not staccato, not endless.
- Specific numbers in every paragraph when possible.
- Audience: dwelling owners 50–80+. Write to them, not at them.

### Banned phrases (autoreject if you wrote them)

| Banned | Why |
|---|---|
| "שאלה מעולה" / "בהחלט" / "בוודאי" (opening) | AI tone, sycophancy |
| "במאמר זה למדנו" / "לסיכום" | AI pattern |
| "אקוסיסטם" / "סינרגיה" / "אופטימליות" | Pretentious, alienates older audience |
| "הפתרון המוביל" / "הצוות המקצועי ביותר" | Empty marketing |
| "כל מקרה לגופו" without follow-through | Cop-out |
| "פנו אלינו עוד היום!" with exclamation | Pushy |
| "זה פשוט לא נכון" (about competitors) | Bad form |
| "בעידן הדיגיטלי" / "בעולם של היום" | Filler |
| Em-dash (—) in Hebrew copy | AI-tone tell. Use period, comma, or restructure. |

### Sentence patterns we want

- Open paragraphs with the conclusion. Then explain.
- Use real numbers: "התהליך לוקח 7–12 שנים", not "התהליך לוקח זמן".
- Use real names of laws/regulations: "תקנה 30ב' לתקנות התכנון והבנייה (הוראת שעה)", not "התקנה הרלוונטית".
- Cite sources by linking inline, not by saying "לפי מקורות רשמיים".

---

## 4. Accuracy — hard rules

This is a YMYL (Your Money Your Life) site. Inaccuracy ruins us.

1. **Never fabricate** numbers, dates, percentages, code names, law sections, sums, contractor names, project names.
2. **If unsure**, write `[טעון אימות]` inline AND surface every instance in your final reply for Ofek to verify.
3. **Verified sources only** for outbound links: gov.il, oref.org.il, kolzchut.org.il, nevo.co.il, taxes.gov.il, planning.gov.il, boi.org.il, cbs.gov.il.
4. **Regulatory facts must match strategic context**:
   - TAMA 38 expires May 2026 (most areas).
   - Pinui-binui: 67% threshold to sue holdout (after reform). 100% needed to execute.
   - Chalufat Shaked: 80% consent required.
   - TAMA 38/1: 66% needed (retrofit only).
   - Senior rights: age 70+ entitled to "דירת תמורה" + at least one alternative; age 75+ entitled to all alternatives.
   - Hardut Barzel exemption track for ממ"ד: extended into 2026, deadline October 2026 per latest publications. Always link to oref.org.il for current status.
   - 03/2026 Tax Authority position paper: heirs in pinui-binui projects — exemption from capital gains preserved post-demolition.

If any of these conflicts with what you find in source files or web search, flag the conflict to Ofek. Do not silently update the rule.

---

## 5. Solution definitions — never confuse

| Solution | Definition | Audience | Approver |
|---|---|---|---|
| ממ"ד תקני | Concrete-reinforced room built into the dwelling, per Pikud Haoref code | Any private home | Pikud Haoref + local committee |
| שיפור מיגון | Reinforcement of an existing room. Lesser protection than ממ"ד. | Buildings where ממ"ד is structurally infeasible | Pikud Haoref (limited approval) |
| ממ"ד יביל / טרומי | Factory-built protected unit. Requires per-address Pikud Haoref approval. | Private homes where ground-up build is impractical | Pikud Haoref site-specific |
| מיגונית | Small temporary structure | Border zones, public compounds | Pikud Haoref — NOT for central-region private homes |

Never write that "any prefab is a tested ממ"ד" — it requires per-address approval.
Never write that "מיגונית is a private-home solution" in Tel Aviv / Center.

---

## 6. Renewal track definitions — never confuse

| Track | Scope | Consent threshold | Notes |
|---|---|---|---|
| תמ"א 38/1 | Retrofit, no demolition | 66% | Expires May 2026 in most municipalities |
| תמ"א 38/2 | Demolition + rebuild of single building | 80% | Expires May 2026 |
| פינוי בינוי | Demolition + rebuild of compound (24+ units) | 67% to sue holdout / 100% to execute | Post-2024 reform |
| חלופת שקד | Single-building track replacing TAMA 38 (Amendment 139) | 80% | Local committee approval |
| תוכניות עירוניות | Local municipal plans | Varies | ~30 municipalities |

---

## 7. Keyword strategy

### Layer A — Commercial intent (money pages get these)

- ממ"ד: בניית ממ"ד / מחיר ממ"ד / ממ"ד יביל / שיפור מיגון / אישור פיקוד העורף לממ"ד
- Renewal: פינוי בינוי / מה זה פינוי בינוי / תמ"א 38 פוקעת / חלופת שקד / חוק 67% פינוי בינוי / כדאי פינוי בינוי
- Senior + special: פינוי בינוי לקשישים / זכויות גיל 70 פינוי בינוי / ירושה דירה פינוי בינוי

### Layer B — Informational (knowledge hub)

- ההבדל בין X ל-Y (comparisons)
- איך עובד X שלב אחר שלב
- מה זה תב"ע / היתר בנייה / נציגות דיירים / תקן 4577

### Layer C — Local + comparative (do NOT build empty city pages)

A city page exists only if it has unique content: active compounds named, local committee policy, local active developers. Otherwise — do not build.

---

## 8. Cannibalization avoidance

| Topic | Single canonical URL | Other URLs do |
|---|---|---|
| בניית ממ"ד | `/services/building-mamad` (or `/memad/banya`) | Homepage = sales hub. `/guides/mamad-process` = process explainer that links to canonical |
| מחיר ממ"ד | `/guides/mamad-cost` | Linked from canonical, never competes |
| ממ"ד יביל | `/services/prefab-mamad` (or `/memad/yavil`) | Different intent, separate page |
| שיפור מיגון | `/services/room-reinforcement` (or `/memad/shipur-migun`) | NEVER mixed with ממ"ד pages |
| תמ"א 38 | `/tama-38/` hub | Sub-pages for `/sug-1`, `/sug-2`, `/pkia-2026` |
| פינוי בינוי | `/pinui-binui/` hub | Separate from TAMA 38 entirely |

**Rule:** If you find yourself writing two pages with the same primary keyword, stop and reconcile.

---

## 9. AI Search optimization (GEO/AEO)

To get cited in ChatGPT / Perplexity / Gemini / Google AI Overviews:

1. **Direct answer in first 100 words.** Not "פינוי בינוי הוא נושא מרכזי…", but "פינוי בינוי הוא הריסת בניין ישן ובניית מתחם חדש במקומו, כאשר הדיירים מקבלים דירה חדשה. נדרשים 67% מבעלי הדירות להגשת תביעה נגד דייר סרבן."
2. **Self-contained paragraphs.** Each paragraph stands alone semantically.
3. **Concrete numbers in every paragraph.**
4. **Cite official sources.** Outbound links matter for AI trust.
5. **FAQ in natural Hebrew search phrasing.** "כמה זמן לוקח פינוי בינוי?" not "משכי זמן בפרויקטי התחדשות עירונית".
6. **Tables.** AI extractors prefer tables for comparative facts.
7. **Recency.** Current `dateModified` matters. Quarterly refresh of money pages.

---

## 10. Trust layer (every page)

- Visible byline: "מאת אופק מזור, מנכ"ל ומייסד התחדשות בינוי ויזמות".
- Visible publication date + last-updated date.
- One+ outbound link to an official .gov.il / .org.il source.
- Footer disclaimer: "מידע זה אינו מהווה ייעוץ משפטי, פיננסי או הנדסי. מומלץ להתייעץ עם בעלי המקצוע הרלוונטיים לפני קבלת החלטות."

---

## 11. Self-audit before committing a page

Run this before declaring done:

- [ ] First paragraph answers search intent directly?
- [ ] At least one specific number per section?
- [ ] One+ outbound link to an official source?
- [ ] 3+ internal links to existing site pages?
- [ ] FAQ answers real user queries (not topic summaries)?
- [ ] CTA clear and matches the page intent?
- [ ] All regulatory facts match section 4 of this file (or flagged `[טעון אימות]`)?
- [ ] Schema present and matches visible content?
- [ ] No banned phrases from section 3?
- [ ] Reads as professional human writing — not AI, not cheap SEO agency?

If any check fails — do not declare done. Fix or surface.