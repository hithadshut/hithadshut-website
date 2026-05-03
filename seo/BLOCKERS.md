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

### B-020 · תמונות פרויקטים אמיתיים — עדיין חוסם (P1, audit 2026-05-03)
- **סטטוס 2026-05-03 (Patch session M2)**: בוצע audit מלא של ה-repo ושל branches משניים. **לא נמצאו תמונות פרויקט חדשות** מאז 2026-05-01. ה-5 illustrations וקטוריים עדיין הקבצים היחידים תחת `public/projects/`. אופק טען בעבר שהעלה — ה-audit מאשר שזה לא קרה ב-GitHub.
- **בדיקה שנעשתה**:
  - `find public/ -type f -iname "*.jpg|*.jpeg|*.png|*.webp|*.heic"` → רק `public/ofek-mazor.jpg` (founder portrait, Apr 15) + 5 SVG illustrations (May 1). אין JPG/PNG חדש.
  - `git log --all --diff-filter=A --since="21 days ago" -- '*.jpg' '*.png' '*.webp' '*.heic'` → אפס תוספות בענפים פעילים.
  - branch `claude/pensive-tesla-4762ba` (worktree) → תוכן זהה, ללא תמונות נוספות.
- **אפשרויות פתוחות לגבי איפה התמונות**:
  1. **לא נדחף ל-GitHub** — ייתכן ששמרו לוקאלית בלבד ולא הורצה `git add/commit/push`.
  2. **הועלה ל-branch שלא נמשך** — לא נמצא ב-branches ש-`origin/master` רואה.
  3. **הועלה למקום אחר** — Drive, Slack attachment, צ׳אט, וכו׳. לא ניתן לסקריפט מצ׳אט.
- **Action פתוח על אופק** (5 דקות, אפס קוד):
  1. אם התמונות אצלך לוקאלי — בצע את `public/projects/UPLOAD_INSTRUCTIONS.md` (5 צעדים, GitHub.com → upload → flip של `image:` + `imageType:`).
  2. אם התמונות במקום אחר (Drive/Slack/צ׳אט) — שלח לינק או שייר את הקובץ דרך מערכת קבצים שלא צ׳אט.
- **למה זה חוסם P1**: הפער הכי גדול מול `lamamad.com` ו-`mymigun.co.il`. בלי תמונות לפני/אחרי אמיתיות מהשטח, ה-trust signal נחלש משמעותית, גם עם `/about/ofek-mazor` ו-FounderSection.
- **תוצאה אוטומטית אחרי flip**: כל מקום שרואה כעת illustration יציג תמונת אמת. אין שינוי קוד נוסף נדרש.
- **No placeholder images created in this audit** — לפי הספק, עדיף שעמוד `/projects` יחכה ליום שיש תמונות אמיתיות מאשר להציג stock או generated content.

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
