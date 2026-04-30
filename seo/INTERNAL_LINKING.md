# Internal Linking Matrix

עיקרון: כל money page → מקושר לפחות מ-3 עמודים אחרים. כל guide → מקשר ל-3+ services + 1 compare. כל area → מקשר ל-2 services לפחות.

---

## Current state (post-existing footer + hand-coded links)

### Hub: Home (`/`)
- → /services/* (4 protection cards + 3 construction)
- → /guides/* (5 cards bottom)
- → /compare/mamad-vs-miggun-vs-migunit (compare CTA)
- → /contact (multi)
- → /about (footer)

### Services
- /services/building-mamad → /guides/mamad-cost · /guides/mamad-process · /guides/home-front-command-approval · /compare/mamad-tzamud-vs-hitzoni
- /services/room-reinforcement → /compare/mamad-vs-miggun-vs-migunit · /guides/choosing-mamad-contractor
- /services/migunit → /compare/migunit-vs-mamad-muchan · /services/building-mamad
- /services/prefab-mamad → /compare/migunit-vs-mamad-muchan · /services/building-mamad
- (construction services likely cross-link to areas/services within their category)

### Guides
- All guides should link back to: `/services/building-mamad`, `/contact`, at least 1 sibling guide, at least 1 compare.

### Compare
- All compare pages should link back to all relevant services + decision CTA to /contact.

### Areas
- /areas/[city] → city's 4 service sub-pages + /services/* + /contact
- /areas/[city]/[service] → /services/[service] + /areas/[city] + /contact

## Audit / TODO

- [W2] Add Author byline links from every guide → /about/ofek-mazor (when live).
- [W4] Add "אזור שירות שלנו ב-{city}" link from compare pages back to top 8 cities.
- [W5] After area page rewrites, ensure each rewritten city links to a relevant case study (when projects gallery live).
- [W6] After listicle reformat (mistakes/contractor): each item should link to a sub-topic where useful.
- [W10] New guides (permit-exemption-2026, vs-shelter, air-filter) — must each link to /services/building-mamad + 2 sibling guides.

## Anchor rules
- Anchor text must be descriptive, not "click here" / "כאן".
- Don't over-optimize: vary anchor text. "בניית ממ״ד" / "השירות שלנו לבניית ממ״ד" / "כיצד אנחנו בונים ממ״ד".
- Don't link 2x to the same URL from the same paragraph.
