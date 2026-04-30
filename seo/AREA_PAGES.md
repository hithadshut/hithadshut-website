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
| givatayim | גבעתיים | A (W4 done) | 6 | strong | – | ✓ DONE: 6 שכונות אמיתיות, ועדה גבעתיים-רמת-גן, 4 פסקאות הרחבה |
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
| ramat-gan | רמת גן | A (W5 done) | 7 | strong | – | ✓ DONE: ועדה גבעתיים-רמת-גן, תכניות (תמ״א 38, רג/2000), 4 פסקאות |
| herzliya | הרצליה | A (W5 done) | 6 | strong | – | ✓ DONE: ועדה הרצליה, תמ״א 38, נושא קורוזיה ים, 4 פסקאות |
| raanana | רעננה | B | 5 | strong | – | W5: minor expansion |
| kfar-saba | כפר סבא | B | 6 | strong | – | W5: minor expansion |
| modiin | מודיעין | A (W5 done) | 7 | strong | – | ✓ DONE: ועדה מודיעין-מכבים-רעות, מד/2030, פוקוס שדרוג + תוספות |
| hadera | חדרה | B | 5 | strong | – | W5: minor expansion |
| nahariya | נהריה | B | 5 | strong | ✓ | W5: highlight frontline |
| kiryat | הקריות | C → noindex | none | short | – | ✓ noindex (W5) — לעדכון בעתיד |
| afula | עפולה | B | 4 | medium | – | W5: minor expansion |
| ramat-hasharon | רמת השרון | B | 5 | strong | – | W5: minor expansion |
| hod-hasharon | הוד השרון | B | 5 | strong | – | W5: minor expansion |
| yehud | יהוד | B | 4 | strong | – | W5: minor expansion |
| ganei-tikva | גני תקווה | C → noindex | none | short | – | ✓ noindex (W5) |
| or-yehuda | אור יהודה | C → noindex | none | short | – | ✓ noindex (W5) |
| rosh-haayin | ראש העין | C → noindex | none | short | – | ✓ noindex (W5) |
| shoham | שוהם | C → noindex | none | short | – | ✓ noindex (W5) |
| zichron-yaakov | זכרון יעקב | C → noindex | none | short | – | ✓ noindex (W5) |

## City × Service (120 permutations: 30 × 4) — W5 audit
- **Verdict**: TEMPLATED. The page renders 5 rotated intro paragraphs hashed by `city + service`. That is textbook doorway-pages structure.
- **Action taken (W5)**: ALL 120 pairs are now `robots: noindex, follow`. They still build and are internally linked from `/areas/[city]`. They're excluded from `sitemap.xml`. Equity from internal links still flows because `follow:true`.
- **Promotion path**: a pair becomes indexable only after a human pass adds genuinely city-specific content. To promote: add `"<city-slug>/<service-slug>"` to `INDEXABLE_GEO_PAIRS` in `src/content/indexable-geo.ts`.
- **No URL is deleted; no 301 needed.** This is a soft removal from the index, fully reversible.

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
