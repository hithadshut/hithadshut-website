# Blockers — דורשים אופק / חיצוני

ממוין לפי דחיפות. כל פריט: מה צריך + למה זה חוסם + מה תעשה ברגע שזה יסופק.

---

## P0 — חוסם פעולות שבוע נוכחי / הקרוב

### B-001 · קובץ לוגו מקור (PNG/SVG/AI)
- **מה צריך**: קובץ לוגו ברזולוציה גבוהה (לפחות 1024×1024) או SVG. רצוי גם גרסה מונוכרום + גרסה לרקע כהה.
- **למה חוסם**: ייצור favicon ל-16/32/48 מ-`Logo.tsx` SVG אפשרי בקוד אבל לא יוציא איכות PNG מיטבית; לוגו רסטר רחב יאפשר קומפרסיה ידנית מיטבית.
- **מה אעשה כשזה יסופק**: יצירת `apple-touch-icon.png` 180px, `icon-192.png`, `icon-512.png` מהמקור עצמו במקום מהלוגו ב-SVG הקוד.
- **Workaround עכשיו**: ייצור גרסאות הפאביקון ישירות מה-Logo.tsx SVG (זהה למה שגולש רואה ב-Header). עובד, אך לא אופטימלי.

### B-002 · אימות Google Search Console
- **מה צריך**: גישת admin ל-DNS של hithadshut.co.il, או הוספת קוד meta verification (אופק יוסיף או יספק).
- **למה חוסם**: בלי GSC אין נתוני impressions/clicks/CTR/position. אי אפשר לאמת תוצאות W3+.
- **מה אעשה**: ברגע שיש קוד אימות → אכניס ל-`metadata.verification.google` ב-`app/layout.tsx`.

### B-003 · אימות Bing Webmaster Tools
- **מה צריך**: כניסה ל-Bing Webmaster + אימות domain.
- **למה חוסם**: Bing מזין ChatGPT (Web Search) ו-Copilot. אי-נוכחות שם = אי-נוכחות ב-AI.
- **מה אעשה**: ברגע שיש meta tag → אכניס `metadata.verification.other.bing`.

### B-004 · GA4 Measurement ID
- **מה צריך**: G-XXXXXXX מ-Google Analytics.
- **למה חוסם**: בלי analytics אי אפשר לעקוב אחרי conversions.
- **מה אעשה**: אכניס Script tag ב-layout (next/script strategy=afterInteractive) + הגדר GTM אם צריך.
- **חלופה**: עד GA4 — אפשר להשתמש ב-Vercel Analytics built-in.

## P1 — חוסם שבוע 4-5

### B-010 · Google Business Profile (GBP)
- **מה צריך**: יצירה / השלמה של GBP על ידי אופק. שם: "התחדשות בינוי ויזמות". קטגוריה: Home builder + General contractor + Concrete contractor. בלי כתובת ציבורית — service area בלבד.
- **למה חוסם**: GBP הוא הסיגנל הכי חזק ל-Local SEO בישראל. בלי זה, "בניית ממ״ד גבעתיים" לא יחזור באמת.
- **מה אעשה**: ברגע שמאומת — עדכן Organization.sameAs + LocalBusiness `@id` + הוסף קישור GBP ב-Footer + Reviews CTA.

### B-011 · החלטה: branch master → main rename?
- **מה צריך**: אישור אופק ל-rename של ענף ראשי ל-main (סטנדרט מודרני; CI/CD לרוב מצפה לזה).
- **חוסם**: לא קריטי אבל ה-CLAUDE.md מתאר "branch: main" בעוד הריפו על master. אי-התאמה.
- **מה אעשה**: אם אופק מאשר — `git branch -m master main && git push -u origin main && gh repo edit --default-branch main`.

## P2 — חוסם שבוע 7-8

### B-020 · תמונות פרויקטים אמיתיים — חלקית פתור (S3)
- **סטטוס**: אופק שלח 5 תמונות אמיתיות ב-2026-04-30: וילה דו-קומתית בשלד, מיגונית מותקנת, יציקת תקרה, יסודות לממ״ד, קירות ממ״ד יצוקים.
- **מה בוצע**: גלריית התשתית מוכנה. `src/content/projects.ts` מכיל 5 ערכי פרויקטים עם metadata מלא (כותרת, סוג שירות, מיקום, תיאור, alt טקסט). דף `/projects` חי. `ProjectsTeaser` מוצג בעמוד הבית. כל פרויקט עם דגל `hasRealImage: false` מציג placeholder מכובד "תמונה מתעדכנת בקרוב".
- **מה נשאר לאופק**:
  1. שמור את 5 קבצי ה-JPG ב-`public/projects/` בשמות המדויקים: `private-villa-structure.jpg`, `migunit-backyard-finished.jpg`, `extension-roof-pour.jpg`, `mamad-foundation-rebar.jpg`, `mamad-walls-cast.jpg`. ראה `public/projects/README.md`.
  2. הפעל את כל פרויקט: ערוך `src/content/projects.ts`, הפוך `hasRealImage: true` לכל אחד.
  3. `npm run build`. דחוף.
  - הזמן הצפוי: 5 דקות אחרי קבלת התמונות.
- **שלב הבא (אחרי הפעלת התמונות)**: הוספת תמונות פרויקט לעמודי שירות + עמודי אזור (case studies לפי עיר).

### B-021 · ביקורות אמיתיות (כתובות + הסכמה)
- **מה צריך**: 5-10 ביקורות אמיתיות מלקוחות + אישור פרסום בכתב.
- **חוסם**: בלי 5+ אמיתיות אסור AggregateRating schema. /reviews יישאר שלד.
- **מה אעשה**: Reviews route + per-review Review schema + AggregateRating בדף הבית.

### B-022 · רישיון מהנדס קונסטרוקציה (אם יש)
- **מה צריך**: שם המהנדס המעורב + מספר רישיון.
- **למה חוסם**: trust strip מתייחס ל"מהנדס קונסטרוקציה רשום" — נכון לאמת זאת בעמוד.
- **מה אעשה**: אם אופק מספק — Person schema + הצגה בעמוד /about.

## P3 — לא חוסם, אבל יידרש בהמשך

### B-030 · פרופילי social
- LinkedIn / Facebook / Instagram URLs לאופק או לחברה — נדרש ל-Person.sameAs ולגיבוי הסכימה.

### B-031 · סוגיית Wikipedia
- W11: שיפור ערך "מרחב מוגן דירתי". לא לקשר לאתר (ספאם). דורש עורך מנוסה (אופק או צד ג׳).

### B-032 · תקציב לכלי SEO
- Ahrefs / Semrush / Mangools — **לא** ארכוש בלי אישור. עד אז: GSC + Bing + ידני.

---

## Status update protocol

כשאופק מספק — עדכן הסטטוס ל-`RESOLVED [date]`. אל תמחק מיד; שמור 30 יום לקריא היסטורי.
