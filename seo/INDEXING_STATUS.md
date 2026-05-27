# Indexing Status — Audit Trail

אופק דיווח: חיפוש `site:hithadshut.co.il` ב-Google מחזיר 0 תוצאות.

זה לא בהכרח באג בקוד — זה יכול לנבוע מ-3 סיבות עיקריות. אודיט מלא להלן.

---

## 1. קוד — בדיקות סטטוס

### `src/app/robots.ts`
✓ User-agent `*` עם `allow: /`, disallow רק ב-`/api/` ו-`/_next/`.
✓ AI bots allowlist (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot, וכו׳) — מאושר.
✓ Sitemap מוצהר: `https://hithadshut.co.il/sitemap.xml`.
✓ Host: `https://hithadshut.co.il`.

**אין `Disallow: /` ולא `noindex` ב-robots.txt.**

### `src/app/layout.tsx` (metadata)
✓ `robots: { index: true, follow: true }`.
✓ `metadataBase` מוגדר.
✓ `alternates.canonical: "/"`.
✓ icons + manifest מוגדרים.
✓ אין `verification.google` (B-002 חוסם).

### עמודי שירותים / מדריכים / השוואות
✓ כולם עוברים דרך `buildMetadata()` ב-`src/lib/metadata.ts` שמחזיר `robots: { index: true, follow: true }`.
✓ canonical מוגדר נכון.

### עמודי אזור (`/areas/[city]`)
✓ אינדקס פתוח לרוב הערים.
✗ noindex על 6 ערים ספציפיות עם `noindexReason` (Kiryat, Ganei Tikva, Or Yehuda, Rosh HaAyin, Shoham, Zichron Yaakov). זה כוונת מכוון — Doorway prevention.

### עמודי אזור-שירות (`/areas/[city]/[service]`)
✗ 120 צמדים → noindex כברירת מחדל. זה כוונת מכוון — `INDEXABLE_GEO_PAIRS` ריק עד קידום ידני.

### `src/app/sitemap.ts`
✓ Home, Contact, Services, Guides, Compares, Areas (לא noindex), Projects, About, About/the operator, Legal — כולם בסייטמאפ.
✓ 8 מדריכים בסייטמאפ (5 מקור + 3 חדשים).
✓ city×service מסונן לפי allowlist (אפס כעת).

**מסקנה: הקוד נקי. שום עמוד שצריך להיות באינדקס לא חסום בטעות.**

---

## 2. דומיין / תשתית — בדיקות נדרשות

### B-002 (חוסם) — Google Search Console
- ללא GSC, Google לא יודע באופן פרואקטיבי שיש סייטמאפ חדש.
- אופק חייב לאמת את הדומיין ב-https://search.google.com/search-console.
- אחרי האימות: להגיש sitemap (`https://hithadshut.co.il/sitemap.xml`).
- זמן צפוי לאינדוקס ראשוני אחרי הגשת sitemap: 3-14 ימים.

### B-003 — Bing Webmaster Tools
- אותו עניין מול Bing (= ChatGPT Search + Copilot).
- אימות ב-https://www.bingplaces.com → Webmaster Tools.

### DNS / Vercel deployment
- בדיקה: `curl -I https://hithadshut.co.il/` צריך להחזיר 200.
- בדיקה: `curl -I https://hithadshut.co.il/sitemap.xml` צריך להחזיר 200 + Content-Type: application/xml.
- בדיקה: `curl https://hithadshut.co.il/robots.txt` צריך להחזיר את התוכן הנכון.

(לא ניתן לבצע מתוך הסשן הנוכחי — אופק יכול לבדוק.)

### Indexability tester של Google
- בדוק כל עמוד מרכזי ב-Search Console → URL Inspection:
  - https://hithadshut.co.il/
  - https://hithadshut.co.il/services/building-mamad
  - https://hithadshut.co.il/guides/mamad-cost
- אם מקבל "URL is not on Google" — לחץ "Request indexing".

---

## 3. עוד סיבות אפשריות ל-0 תוצאות

### (א) דומיין צעיר
אם הדומיין נרשם / האתר עלה לאחרונה — Google סורק לאט. סבלנות + GSC sitemap submit מקצרים את הזמן.

### (ב) חוסר backlinks
אתר חדש בלי backlinks חיצוניים — Google לא יודע עליו עד שמישהו יקשר.
פתרונות:
- ויקיפדיה (W11, חוסם על אופק/חיצוני).
- ספריות עסקים (W11 — `seo/NAP_DIRECTORIES.md`).
- קישור מ-LinkedIn / facebook profile של אופק.

### (ג) Site:` operator may be inaccurate
- ה-`site:` operator לא תמיד מחזיר את כל העמודים שמאונדקסים. הוא תקציר רעוע של אינדקס.
- בדיקה רצינית יותר: GSC → Coverage report.

---

## 4. Action Items

### חוסם על אופק (P0)
1. **GSC verification** — ראו `seo/BLOCKERS.md` B-002. אחרי אימות, אגיש sitemap בקוד.
2. **Bing Webmaster verification** — B-003.
3. **בדיקת תקינות דומיין/SSL** — `curl` או דפדפן.

### אוטונומי (אעשה אוטומטית)
- ✓ אישור שכל הקוד תקין (בוצע במסמך הזה).
- ✓ הגדרת AI bots allowlist (W9, בוצע).
- ✓ הוספת Projects + 3 מדריכים חדשים לסייטמאפ (בוצע בסשן זה).

### לאחר אימות GSC (אעשה כשאופק יודיע "B-002 פתור")
1. הוספת `metadata.verification.google` ב-`layout.tsx`.
2. הגשה ידנית של sitemap דרך GSC API (אם אופק רוצה).
3. בקשה לאינדוקס של 5 העמודים הראשיים דרך URL Inspection.
4. עדכון ה-LOG.

## 5. תוצאת הסשן הזה
האודיט הזה מאשר: **הקוד נקי**. ההסבר ל-0 תוצאות הוא חיצוני (GSC לא מאומת, אתר חדש, אין backlinks). הפעולה היחידה שאופק צריך לעשות מיידית היא לאמת ב-GSC ולהגיש sitemap. הקוד מוכן לכל הסיגנלים שיגיעו אחרי.
