# SEO Execution Log — התחדשות בינוי ויזמות

יומן ביצוע שבועי. כל ערך = שבוע אחד. הוסף בראש (newest first).

---

## שבוע 3 [2026-04-30] — GEO Layer 1 (Quick Answers + Schema Audit)

### בוצע
- **`ServicePageLayout` הורחב**: prop חדש `quickAnswer?: ReactNode`. כשסופק, רנדר רכיב "בקצרה" מתחת ל-PageHero לפני האינטרו, באותו עיצוב של TldrBlock במדריכים (קלף לבן עם פס זהב inline-start).
- **Quick Answer ב-7 עמודי שירות**:
  - building-mamad: גודל / מחיר / זמן + אזכור פטור מהיתר
  - room-reinforcement: עלות / זמן + הבחנה חדה ש-≠ ממ״ד תקני
  - migunit: עלות / זמן / מקרה שימוש (חצר)
  - prefab-mamad: ההבחנה הקריטית בין טרומי תקני לבין יחידה ממוגנת גנרית
  - private-construction: ערך הצעה (חוזה אחד, ממ״ד משולב)
  - renovations: ערך הצעה (שיפוץ + ממ״ד באותה מסגרת)
  - extensions: ערך הצעה (תב״ע, שילוב ממ״ד בתוספת)
- **FAQ schema audit (כל האתר)**: ✓ עבר. אין כפילויות (dup-fix מ-dc3b670 עובד נכון). כל עמוד עם FAQ visible פולט בדיוק FAQPage אחד.
- **`SCHEMA_MAP.md` עודכן**: רישום מלא של schemas לכל עמוד post-W3.

### היגיון אסטרטגי
- מנועי AI (ChatGPT/Perplexity/Gemini/AIO) מחלצים תשובות ישירות. עמוד שירות בלי "תשובה ישירה בתחילת הדף" מאבד citation למתחרה שיש לו אחת.
- 5 המדריכים כבר היו ב-spec (TldrBlock או TL;DR card inline). הפער היה בעמודי השירות. סגרתי אותו.
- visible dateModified כבר נוסף ב-W2 בכל המדריכים. בעמודי שירות פחות קריטי (פחות time-sensitive); נשמר כ-future enhancement.

### לבדוק ב-GSC בעוד 14-21 יום
- האם Quick Answer של מחיר ממ״ד מופיע ב-AIO / People Also Ask.
- האם prefab-mamad מתחיל לדרג על "ממ״ד טרומי תקני" / "יחידה ממוגנת אישור פקע״ר".

### חסום על אופק
ללא חוסם חדש. כל הפעילות ב-W3 הייתה אוטונומית.

### Top-3 לשבוע הבא (W4 — Local SEO Push)
1. LocalBusiness schema על דף הבית (כרגע יש Organization + WebSite בלבד; עמודי `[city]` כבר פולטים LocalBusiness — לאחד את הסיגנל גם בשורש).
2. אופציה לשדרג עמוד `/areas/givatayim` למודל מלא (שכונות אמיתיות, ועדה גבעתיים-רמת-גן, תב״ע, קייס אנונימי). התשתית קיימת ב-`src/content/areas.ts`; נדרשת הוספת neighborhoods + הרחבת localNote.
3. הכנת תיעוד ל-GBP setup (BLOCKERS B-010) — תבנית לאופק עם כל ה-fields נדרשים, כך שכשהוא יקים את ה-GBP הוא לא יחסר שדה.

---

## שבוע 2 [2026-04-30] — E-E-A-T Layer 1

### בוצע
- **`/about/ofek-mazor`**: עמוד author חדש עם ביו, רישיון מתווך מקרקעין מורשה (#3246290), תמונה, יצירת קשר ישירה. Person schema (`@id` יציב, hasCredential, knowsAbout, worksFor → Organization). מאוגד ב-sitemap עם priority 0.55.
- **schema.ts**: `ofekPersonJsonLd()` + `OFEK_PERSON_ID` קונסטנטה. `articleJsonLd()` קיבל פרמטר `authorPersonId` אופציונלי.
- **Byline.tsx**: הורחב לקבל `author="ofek-mazor"` + `dateModified`. תאריך מוצג בעברית מקומית עם אייקון לוח שנה. Fallback קולקטיבי נשמר.
- **5 מדריכים** עודכנו ל-author=ofek-mazor + dateModified=2026-04-30 + Article author = Person reference + Person schema inline:
  - /guides/mamad-cost
  - /guides/mamad-process
  - /guides/home-front-command-approval
  - /guides/choosing-mamad-contractor
  - /guides/mamad-mistakes
- **/compare/katlan-rashum-vs-hafer**: Article author משויך לאופק (זה עמוד דעה — מתאים).
- **FounderSection.tsx**: שכפול של Person schema הוסר; מקור יחיד אמת (`ofekPersonJsonLd()`). הוסף קישור "קראו עוד על אופק מזור — מתווך מקרקעין מורשה (#3246290)" לעמוד author.
- **/about**: סעיף חדש "מי עומד מאחורי החברה" עם 2 קישורים ל-/about/ofek-mazor.
- **TrustStrip**: רכיב חדש. רצועה תחת ההירו של דף הבית עם 4 עמודי trust: פיקוד העורף · מהנדס קונסטרוקציה רשום · קבלן רשום · מתווך מקרקעין מורשה. כל עמוד מקושר היכן שיש עמוד פנימי (פקע״ר → guide; קבלן רשום → compare; מתווך → author page). אין שינוי בעיצוב ההירו.

### היגיון אסטרטגי
- היתרון התחרותי: בקטגוריה רוויה של "קבלן ממ״ד" — הסיגנל היחיד שאף מתחרה לא יכול להעתיק זה אותו אדם, אותו רישיון, אותו @id. רישיון מתווך מקרקעין (#3246290) הוא לא רק trust — הוא אנקור אנטיטי עבור Google ו-AI engines לזהות את אופק כאישיות מובחנת.
- הקלף הזה משוחק 4 פעמים בעמוד הבית: TrustStrip, FounderSection, Footer (קיים), Person schema. יישום עקבי מונע ambiguity.
- Article author=Person יותר חזק מ-Article author=Organization עבור YMYL (מצב חיים).

### לבדוק ב-GSC בעוד 14-21 יום
- Person schema עובר ב-Rich Results Test על /about/ofek-mazor.
- Article schema על /guides/* מקבל author=Person ולא Organization.
- האם /about/ofek-mazor מתחיל להופיע באינדקס.

### חסום על אופק
- B-001: לוגו מקור (לא קריטי לעבודה הנוכחית, צובר חוב).
- B-002/B-003/B-004: GSC + Bing + GA4 — בלעדיהם אין מעקב אחרי תוצאות W3+.
- B-022: שם + רישיון של מהנדס קונסטרוקציה ספציפי. כרגע ה-TrustStrip עושה process claim ("מהנדס קונסטרוקציה רשום מלווה כל פרויקט") — מותר. אם אופק מספק שם — אפשר לשדרג ל-Person נוסף.
- B-030: sameAs לאופק (LinkedIn/FB/IG). Person.sameAs ריק כרגע. ב-GoogleBot זו לא חסימה אבל פוגע באמת.

### Top-3 לשבוע הבא (W3 — GEO Layer 1)
1. אודיט Quick Answer block: יש בכמה מדריכים TldrBlock כבר — לוודא שכולם תואמים לפורמט (40-60 מילים, תשובה ישירה לשאלת חיפוש מרכזית).
2. הוספת dateModified visible לעמודי שירות (כרגע רק במדריכים).
3. אודיט FAQPage schema על כל עמוד שיש בו FAQ visible — לוודא pages emit it ובלי כפילויות (היה תיקון קודם של dup; לבדוק regression).

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
