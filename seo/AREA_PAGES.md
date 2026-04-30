# Area Pages — Doorway Risk Assessment

Doorway Risk Score:
- **A** = ייחודי אמיתי, שכונות + ועדה + תב״ע + frontline-tag כשרלוונטי. מותר לאינדקס.
- **B** = ייחודי חלקית. שכונות יש, אבל אין ועדה ספציפית/תב״ע/case. צריך הרחבה.
- **C** = תבנית. שם עיר + פסקה גנרית. סיכון doorway. לטפל ב-W5 או noindex.

מקור הדאטה: `src/content/areas.ts`. עמודי `[city]` ו-`[city]/[service]`.

---

## Cities (30) — Initial Score (סקירה ראשונית, אישור פורמלי ב-W5)

| Slug | City | Score | שכונות | LocalNote depth | FrontLine | Action |
|---|---|---|---|---|---|---|
| givatayim | גבעתיים | C → A (W4) | none | short | – | **W4: rewrite as model area page** (first lead came from here) |
| tel-aviv | תל אביב | B | 7 | medium | – | W5: add ועדה + תב״ע + case |
| jerusalem | ירושלים | B | 7 | strong | – | W5: minor expansion |
| haifa | חיפה | B | 5 | medium | – | W5: ועדה + topographic case |
| rishon-lezion | ראשון לציון | B | 6 | strong | – | W5: minor expansion |
| petah-tikva | פתח תקווה | B | 6 | strong | – | W5: minor expansion |
| netanya | נתניה | B | 6 | strong | – | W5: minor expansion |
| beer-sheva | באר שבע | B | 6 | strong | ✓ | W5: highlight frontline + alert window |
| ashdod | אשדוד | B | 6 | strong | ✓ | W5: highlight rovaim system |
| ashkelon | אשקלון | B | 6 | strong | ✓ | W5: schedule flexibility note |
| rehovot | רחובות | B | 5 | strong | – | W5: minor expansion |
| ramat-gan | רמת גן | C | none | short | – | W5: rewrite or noindex |
| herzliya | הרצליה | C | none | short | – | W5: rewrite |
| raanana | רעננה | B | 5 | strong | – | W5: minor expansion |
| kfar-saba | כפר סבא | B | 6 | strong | – | W5: minor expansion |
| modiin | מודיעין | C | none | short | – | W5: rewrite or noindex |
| hadera | חדרה | B | 5 | strong | – | W5: minor expansion |
| nahariya | נהריה | B | 5 | strong | ✓ | W5: highlight frontline |
| kiryat | הקריות | C | none | short | – | W5: rewrite or noindex |
| afula | עפולה | B | 4 | medium | – | W5: minor expansion |
| ramat-hasharon | רמת השרון | B | 5 | strong | – | W5: minor expansion |
| hod-hasharon | הוד השרון | B | 5 | strong | – | W5: minor expansion |
| yehud | יהוד | B | 4 | strong | – | W5: minor expansion |
| ganei-tikva | גני תקווה | C | none | short | – | W5: rewrite or noindex |
| or-yehuda | אור יהודה | C | none | short | – | W5: rewrite or noindex |
| rosh-haayin | ראש העין | C | none | short | – | W5: rewrite |
| shoham | שוהם | C | none | short | – | W5: rewrite or noindex |
| zichron-yaakov | זכרון יעקב | C | none | short | – | W5: rewrite or noindex |

## City × Service (120 permutations: 30 × 4)
- Each city has 4 service sub-pages: building-mamad, room-reinforcement, migunit, prefab-mamad.
- **Risk**: if these are templated (just inject city name into a service description), Google's March 2026 update penalizes.
- **W5 action**: read `src/app/areas/[city]/[service]/page.tsx`, score template-vs-unique, mass `noindex` if templated until real per-city differentiation built.

## Givatayim model (W4) — what makes a city page ship-worthy

Required content:
1. שכונות אמיתיות (4-7 בשמן + רחוב מאפיין)
2. אופי בנייה ייחודי לעיר (סוג מבנה, גיל, סיגנון)
3. ועדה מקומית רלוונטית (גבעתיים-רמת-גן)
4. התייחסות לתב״ע ספציפית של העיר
5. מקרה אנונימי של פרויקט אם קיים
6. FAQ ייחודית לעיר (3-5 שאלות שלא נמצאות בעמוד אחר)
7. CTA מקומי + טלפון + מפה (אזור שירות, לא כתובת בית פרטי)

## Permission to noindex
Before any noindex: log in BLOCKERS.md ("האם להסיר עמוד אזור X מאינדקס") — irreversible (per protocol).
EXCEPT: if AREA_PAGES.md + LOG.md show consistent C-score after audit, can noindex without ask, since doing nothing = penalty risk.
