# תוכנית ריצה אוטומטית — 8 שבועות

קלוד קוד יריץ סבב שבועי בכל "רוץ סבב N מ-AUTOMATION_PLAN". כל סבב = 4-6
משימות שיורצו ברצף ללא אישור אופק. בנייה ירוקה לפני כל push.

נקודת ההתחלה: **סבב 1** (אחרי סשן S5).

---

## חוקי הריצה

1. **בכל "רוץ סבב N"**: מריץ סבב N לפי הסדר. אם N לא צוין — מריץ את הסבב הבא לפי `seo/LOG.md`.
2. **סבב לא הסתיים?** ממשיך מאיפה שעצר בסשן הבא.
3. **blocker?** מוסיף ל-`seo/BLOCKERS.md`, מדלג, ממשיך.
4. **בלי אישור אופק** לפני ביצוע — רק מסכם בסוף.
5. **build חייב לעבור ירוק** לפני כל push. `npm run build` + `npx tsc --noEmit`.
6. **commit נפרד לכל משימה** עם מסר ברור.
7. **כל סבב = LOG entry** עם סטטוס המשימות.

---

## סבב 1 — Indexing & Internal Links Hardening

- [ ] אימות שכל 145 עמודים מאונדקסים ב-GSC (אופק יעדכן אם המספר השתנה)
- [ ] `npm run notify-indexnow` ידני — שיגור כל ה-URLs מ-sitemap ל-IndexNow
- [ ] אודיט internal links: וידוא ש-כל money page מקושר מ-3+ עמודים
- [ ] בדיקת broken internal links בכל האתר (script נדרש; אם אין — בנה)
- [ ] עדכון `RelatedArticles` להכיר את 8 המדריכים (היום 5)
- [ ] הוספת link מעמוד הבית ל-3 המדריכים החדשים שעוד לא מקושרים מ-Hero

## סבב 2 — Content Depth ב-Money Pages

- [ ] FAQ schema audit: וידוא שכל עמוד שירות יש לו FAQPage emit
- [ ] KeyStats בלוק לעמוד `/compare/mamad-vs-miggun-vs-migunit` (החשוב ביותר ב-compare)
- [ ] Quick Answer block לכל 4 עמודי `/compare/` (היום אין)
- [ ] שכתוב title tags של כל 7 עמודי השירות לפי best practices 2026 (60 תו, שם מותג בסוף, מילת מפתח ראשית בתחילה)

## סבב 3 — Local SEO Push

- [ ] שדרוג 5 ערים נוספות מ-B ל-A: ראשון לציון, פתח תקווה, רעננה, כפר סבא, נתניה
- [ ] בכל אחת: 6+ שכונות אמיתיות, ועדה מקומית, תכניות, 4 פסקאות extendedNotes
- [ ] בדיקה שב-`/areas/[city]/[service]` עדיין כל 120 ב-noindex (regression check)
- [ ] עדכון `seo/AREA_PAGES.md` עם ציונים החדשים

## סבב 4 — GEO Layer 2 Completion

- [ ] ציטוטים inline ל-oref.org.il / iplan.gov.il / kolzchut.org.il במדריכים שבהם חסר
- [ ] קריאת `seo/GEO_TRACKING.md` — אם אופק מילא baseline נתונים → אופטימיזציה לפי ביטויים שזיהינו
- [ ] חיזוק 3 המדריכים שמקבלים הכי הרבה impressions ב-GSC (אופק יספק רשימה)

## סבב 5 — Performance & CWV

- [ ] Lighthouse audit על 8 העמודים החזקים. רישום ב-`seo/PERFORMANCE_AUDIT.md`
- [ ] אופטימיזציה: lazy loading, font preload, image dimensions, CLS hunt
- [ ] בדיקה ש-Heebo font מטעון ב-preload + display:swap
- [ ] First-load JS budget — וידוא שאין רגרסיה גדולה

## סבב 6 — Content Expansion

- [ ] מדריך חדש: "כמה זמן לוקח לבנות ממ״ד" (כל הסוגים, כל המסלולים)
- [ ] מדריך חדש: "ממ״ד פנימי vs ממ״ד צמוד vs ממ״ד חיצוני" (כיוון עומק לאחד מההשוואות הקיימות)
- [ ] עדכון site.ts guides[] + sitemap

## סבב 7 — Schema Hardening

- [ ] Schema validation על כל העמודים (ידני או script)
- [ ] BreadcrumbList לכל עמוד שזה חסר בו
- [ ] בדיקה ב-Rich Results Test לכל סוג schema על 5 דגימות
- [ ] תיעוד ב-`seo/SCHEMA_MAP.md` עם תאריך אימות

## סבב 8 — Reviews Infrastructure

- [ ] עמוד `/reviews` שלד (ריק עד שיש ביקורות אמיתיות)
- [ ] Review schema infrastructure ב-`src/lib/schema.ts` (יופעל כשיהיו 5+ אמת)
- [ ] flow לאופק לאיסוף ביקורות (טקסט מומלץ ל-WhatsApp/email בקשת ביקורת)
- [ ] תיעוד ב-`seo/REVIEWS_FLOW.md`

---

## איך אני יודע איזה סבב לרוץ

לפני כל סבב חדש — קורא את `seo/LOG.md`:
- אם הסשן הקודם הסתיים בסבב N → רץ סבב N+1.
- אם סבב N לא הסתיים → ממשיך בסבב N מהשלב שהפסקתי.
- אם אופק כתב במפורש "רוץ סבב 5" → רץ סבב 5 בלי קשר למה שהסבבים הקודמים.

## כשהמשימות נגמרו

אחרי סבב 8 — אופק יקבל דוח 60-יום עם תוצאות GSC ויחליט אם לחדש.
פעולות אפשריות לחידוש: עוד מדריכים, עוד ערים, עוד מקרי בוחן (כשפרויקטים חדשים מסתיימים), חיזוק נוכחות ב-AI engines.
