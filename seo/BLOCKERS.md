# Blockers — דורשים אופק / חיצוני

ממוין לפי דחיפות. כל פריט: מה צריך + למה זה חוסם + מה תעשה ברגע שזה יסופק.

---

## P0 — חוסם פעולות שבוע נוכחי / הקרוב

### B-001 · קובץ לוגו מקור (PNG/SVG/AI) — חלקית פתור (S5)
- **סטטוס 2026-05-01**: Favicon מותגי חי (icon.svg + icon.tsx + apple-icon.tsx, אות "ה" בזהב על נייבי). Vercel default favicon.ico הוסר.
- **מה נשאר**: גוגל מעדכן favicon ב-SERP אחת ל-7-14 יום. אופק יבדוק. אם בעוד 14 יום עדיין רואים את ה-Vercel default — אופק מבקש re-indexing של עמוד הבית ב-GSC.
- **לעתיד**: כשאופק מספק קובץ לוגו מקור ברזולוציה גבוהה — ניתן יהיה לייצר .ico אמיתי + 192/512 PNG מהמקור עצמו במקום מ-ImageResponse.

### B-002 · אימות Google Search Console — חלקית פתור (S4)
- **סטטוס 2026-05-01**: GSC אומת. אופק דיווח: 145 עמודים באינדקס, השאר בטיפול בקצב ~3 ביום.
- **מה נשאר**: (1) אופק לבצע 4 בדיקות שמופיעות ב-`seo/INDEX_AUDIT_2026_05.md` כדי לאמת שהפער 145 → ~55 הצפוי הוא legacy של ה-120 צמדי city×service בתהליך הסרה. (2) הוספת `metadata.verification.google` ב-`layout.tsx` אם אופק רוצה גם כן (לא קריטי כי האימות כבר עבר ב-DNS / HTML file).

### B-003 · אימות Bing Webmaster Tools — עדיפות הורדה
- **סטטוס 2026-05-01**: עדיין פתוח אבל ירדה עדיפות.
- **למה ירדה**: IndexNow כבר פעיל (`seo/INDEXNOW_SETUP.md`) ומספק את עיקר התועלת — הודעה ל-Bingbot על URLs חדשים. אימות Webmaster יוסיף רק את הצד הניתוחי.
- **מה אעשה**: ברגע שיש meta tag → אכניס `metadata.verification.other.bing`. עד אז — לא חוסם.

### B-004 · GA4 — סגור (S4)
- **סטטוס 2026-05-01**: ✓ סגור. אופק סיפק `G-90BL1Y9K3C`. הוטמע ב-`src/components/Analytics.tsx` עם `next/script strategy="afterInteractive"`. ClickTracker פעיל לטלפון/וואטסאפ. ContactForm פולט `lead_form_submit` + `generate_lead`.

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

### B-020 · תמונות פרויקטים אמיתיים — RESOLVED 2026-05-03
- **סטטוס 2026-05-03 (סוף הסשן)**: ✅ סגור. אופק העלה את 5 ה-JPGs לתיקיית הפרויקט (root-level, עם `.jpg.jpeg` double extension). הועברו ל-`public/projects/` עם שמות נכונים, `src/content/projects.ts` עודכן (`.svg` → `.jpg`, `imageType: "illustration"` → `"photograph"`, dimensions עודכנו ל-actual ratio של כל JPG). ה-5 SVG illustrations הוסרו (לא נדרשים יותר).
- **קבצים שעלו לאינדקס**: `extension-roof-pour.jpg` (1152×2048, 676KB), `mamad-foundation-rebar.jpg` (1200×1600, 376KB), `mamad-walls-cast.jpg` (1600×747, 210KB), `migunit-backyard-finished.jpg` (1600×1200, 256KB), `private-villa-structure.jpg` (2000×1500, 422KB). כל הקבצים מתחת ל-1.5MB.
- **תוצאה**: `/projects`, `ProjectsTeaser` בדף הבית, `/projects/[slug]`, ו-`ServiceProjectShowcase` ב-5 עמודי שירות מציגים עכשיו תמונות אמת ולא illustrations.
- **Audit history (לקריאה)**: B-020 עבר 3 שלבים — (S5 2026-05-01) חלקית פתור עם 5 SVG illustrations + UPLOAD_INSTRUCTIONS לאופק; (Patch 2026-05-03 M2) אומת שלא הועלו ל-repo, B-020 הוחזר ל-P1; (Patch 2026-05-03 close-out) אופק העלה לתיקיית root → הוטמעו ב-`public/projects/` ונעשה flip → סגור.

### B-021 · ביקורות אמיתיות (כתובות + הסכמה)
- **מה צריך**: 5-10 ביקורות אמיתיות מלקוחות + אישור פרסום בכתב.
- **חוסם**: בלי 5+ אמיתיות אסור AggregateRating schema. /reviews יישאר שלד.
- **מה אעשה**: Reviews route + per-review Review schema + AggregateRating בדף הבית.

### B-022 · רישיון מהנדס קונסטרוקציה (אם יש)
- **מה צריך**: שם המהנדס המעורב + מספר רישיון.
- **למה חוסם**: trust strip מתייחס ל"מהנדס קונסטרוקציה רשום" — נכון לאמת זאת בעמוד.
- **מה אעשה**: אם אופק מספק — Person schema + הצגה בעמוד /about.

### B-031 · אימות הפער 145 vs ~55 באינדקס (S4)
- **סטטוס**: דרוש מאופק לבצע 4 בדיקות ב-GSC (פירוט ב-`seo/INDEX_AUDIT_2026_05.md`).
- **למה חוסם**: ההשערה הסבירה היא ש-90 העמודים העודפים הם ה-120 צמדי city×service legacy בתהליך הסרה ע״י Google (~3 ביום). לוודא.
- **מה אעשה**: כשאופק חוזר עם תוצאות הבדיקה — עדכון ה-AUDIT וקביעת מסקנה.

### B-040 · 4 פרופילים חיצוניים (S5)
- **מה צריך**: יצירת 4 פרופילים על ידי אופק עם שם זהה בדיוק "התחדשות בינוי ויזמות" + שליחת ה-URLs:
  1. Google Business Profile (אם עוד לא — ראה `seo/GBP_SETUP.md`)
  2. LinkedIn Company Page
  3. Facebook Page עסקית
  4. Instagram עסקי
- **למה חוסם**: זה הסיגנל היחיד שגוגל מקבל כדי להפריד את המותג שלנו מ"התחדשות עירונית" הגנרי. בלי זה — חיפוש "התחדשות" יחזיר תמיד מתחרים.
- **מה אעשה כשזה יסופק**: עדכון `Organization.sameAs` + `Person.sameAs` (אם אופק יוצר LinkedIn אישי) + הוספת קישורים ב-Footer.
- **מדריך מלא**: `seo/BRAND_PRESENCE_PLAN.md` — 90 דקות לאופק.

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
