# SEO Execution Log — התחדשות בינוי ויזמות

יומן ביצוע שבועי. כל ערך = שבוע אחד. הוסף בראש (newest first).

---

## שבוע 1 [2026-04-30 → 2026-05-06] — Foundations: Brand Visibility + Audit

### מצב פתיחה
- ריפו: `hithadshut-website/` בתוך תיקיית עבודה. ענף: `master` (לא `main` — לתקן בתוכנית הפרסום).
- 32 עמודי app router. סכימה Organization + WebSite פעילים. Byline collective פעיל.
- ‎`src/lib/site.ts`‎ מכיל את כל מטא-נתוני האתר (טלפון, דומיין, OG path).
- ‎`public/llms.txt` כבר קיים (יבחן ב-W12).
- ‎`public/ofek-mazor.jpg` קיים.
- אין: favicon מותגי (יש רק `favicon.ico` של ברירת מחדל ו-`a1b2c3d4...txt` (IndexNow key)), אין manifest, אין apple-touch-icon, אין `/seo/` במקור.

### בוצע
- **Bootstrap /seo/**: יצירת 10 קבצי ניהול (LOG, BACKLOG, KEYWORD_MAP, MONEY_PAGES, AREA_PAGES, CONTENT_GUARDRAILS, GEO_TRACKING, INTERNAL_LINKING, SCHEMA_MAP, BLOCKERS).

### היגיון אסטרטגי
- ההיררכיה והעיצוב חזקים. אסור לגעת. שכבות בלבד.
- W1 מתמקד ב: (א) זהות מותג בתוצאות חיפוש ושיתופים (favicon/OG); (ב) מערכת ידע פנימית; (ג) הכנה לאנליטיקה (אופק יחבר).
- ענף master (לא main) — נשתמש בו עד אישור rename.

### לבדוק ב-GSC בעוד 14-21 יום
- favicon מופיע ב-mobile SERP.
- OG image מופיע בשיתוף וואטסאפ.

### חסום על אופק
- אימות Google Search Console (קוד אימות / DNS).
- הקמת GBP (שבוע 4).
- קוד GA4 (אם רוצים tracking).
- תשובה: האם הלוגו ב-`Logo.tsx` (SVG) הוא הנכון לייצוא PNG, או יש קובץ מקור אחר?

### Top-3 לשבוע הבא (W2 — E-E-A-T)
1. עמוד `/about/ofek-mazor` עם Person schema.
2. byline אופק על כל מדריך + Article schema.
3. Trust strip מתחת לדף הבית.
