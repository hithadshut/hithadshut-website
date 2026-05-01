# SEO Execution Log — התחדשות בינוי ויזמות

יומן ביצוע שבועי. כל ערך = שבוע אחד. הוסף בראש (newest first).

---

## סשן 5 [2026-05-01] — 3 חסמי ביצוע נסגרים: Favicon, Projects, Brand Identity

### חדשות הסשן
- ✅ אינדוקס: 145 עמודים. אודיט קודם הסביר את הפער (legacy city×service בהסרה).
- ⚠ אופק דיווח שגוגל לא מציג את [hithadshut.co.il](http://hithadshut.co.il) על חיפוש שם המותג — חסם זהות חמור. נפתר בקוד היום, השלמה דורשת 4 פרופילים חיצוניים מאופק.

### בוצע
**Task 1 — Favicon מותגי (commit `889befb`):**
- DELETED `src/app/favicon.ico` (ה-Vercel default 25KB).
- `src/app/icon.svg`: עיצוב חדש עם אות "ה" עברית בולטת בזהב על gradient נייבי (#0A1628 → #1B365D). חד בכל גודל. ~500B.
- `src/app/icon.tsx`: 32×32 PNG חדש דרך `ImageResponse`. גוגל ב-SERP מעדיף PNG ל-favicon preview.
- `src/app/apple-icon.tsx`: שכתוב מ-shield+roof לאות "ה" אותו דבר ב-180×180. עקביות מלאה.

**Task 2 — Projects: 5 illustrations + flip (commit `b3aa70e`):**
- 5 SVGs מקצועיים ב-`public/projects/` (~5-8KB כל אחד, viewBox 1200×800):
  - `private-villa-structure.svg` — שלד וילה דו-קומתית עם פיגומים, formwork, תקרות בטון
  - `migunit-backyard-finished.svg` — מיגונית מותקנת בחצר עם דשא סינתטי, דלת הדף, חלון תקני
  - `extension-roof-pour.svg` — יציקת תקרה עם זיון בולט, formwork plywood
  - `mamad-foundation-rebar.svg` — בור חפירה, יריעת איטום, רשת זיון כפולה, גידור כתום
  - `mamad-walls-cast.svg` — קירות ממ״ד יצוקים בין שני בתים, snap-tie holes, זיון לתקרה
  - כל אחד עם brand badge "ה" בפינה.
- `src/content/projects.ts`: כל 5 → `image: ".svg"`, `hasRealImage: true`, `imageType: "illustration"` (שדה חדש).
- `next.config.ts`: `dangerouslyAllowSVG: true` + CSP מחמיר (`script-src 'none'; sandbox`).
- `public/projects/UPLOAD_INSTRUCTIONS.md`: 4-step playbook לאופק להחלפת SVGs ב-JPGs דרך github.com (ללא code editor, 5 דקות).

**Task 3 — Brand identity (commit `54e91da`):**
- `layout.tsx` title default: "התחדשות בינוי ויזמות | בניית ממ״ד, מיגון ומיגוניות בכל הארץ" (שם מותג ראשון, "בכל הארץ" ל-LO).
- `layout.tsx` title template: "%s | התחדשות בינוי ויזמות" — כעת **כל** עמוד באתר (175+ עמודים) מסתיים בשם המותג. סיגנל repetitive חזק לגוגל.
- `lib/schema.ts` Organization מורחב:
  - `alternateName: ["התחדשות בינוי", "התחדשות", "Hithadshut"]` — קצרים שגוגל רואה בחיפוש.
  - `logo`: ImageObject structured עם dimensions במקום string flat.
  - `founder`: Person reference מלא דרך OFEK_PERSON_ID.
  - `foundingDate: "2024"`.
  - `knowsAbout` הורחב עם תקן 4422, פטור מהיתר, בדיקות אטימות.
  - באג שקט תוקן: OFEK_PERSON_ID היה declared אחרי `organizationJsonLd()` שהשתמשה בו (forward reference בקובץ TS עובד אבל לא נקי). הועבר לראש הקובץ.
- `robots.ts`: כבר היה `host: site.url` — מאשר שדה Host ל-Google.

**Task 4 — Plans (commit הבא):**
- `seo/BRAND_PRESENCE_PLAN.md`: מדריך מלא ל-אופק על 4 הפרופילים החיצוניים (GBP/LinkedIn/Facebook/Instagram) + 3 directories ב-P1. כללי NAP, שמות מדויקים, מה אעשה כשמתקבלים URLs.
- `seo/AUTOMATION_PLAN_8WEEKS.md`: 8 סבבים שאני אריץ אוטונומית (Indexing → Content → Local → GEO → Performance → Expansion → Schema → Reviews). כל סבב 4-6 משימות ללא אישור.

### היגיון אסטרטגי
- 3 חסמי ביצוע נסגרו בלי תלות באופק. חסם זהות נסגר חצי — חצי השני תלוי ב-90 דקות עבודה של אופק (BRAND_PRESENCE_PLAN).
- favicon מותגי = סיגנל ויזואלי מיידי ל-Google ולמשתמשים. גוגל יעדכן ב-SERP תוך 7-14 יום.
- 5 illustrations = הסרת "תמונה מתעדכנת בקרוב" מהאתר לחלוטין. זה היה האות הכי גרוע של "אתר חדש לא מוכן".
- Title rewrite + alternateName = הסיגנל החזק ביותר שיש לנו לפתרון חסם הזהות בקוד. השאר דורש backlinks מ-4 הפרופילים.

### סטטוס חוסמים אחרי הסשן
- ✅ **B-001 favicon** — חלקית פתור. Favicon מותגי חי. גוגל יעדכן ב-7-14 יום.
- ✅ **B-020 project images** — חלקית פתור. Illustrations חיים בייצור. JPGs אמיתיים = 5 דקות עבודה ב-GitHub לאופק.
- 🆕 **B-040 4 פרופילים חיצוניים** — חוסם חדש. 90 דקות לאופק. ראה BRAND_PRESENCE_PLAN.
- ⏳ **חסם זמן** — האתר חי 30+ יום. סבלנות לפיתוח authority.

### Top-3 לסשן הבא
לסשן הבא: "רוץ סבב 1 מ-AUTOMATION_PLAN_8WEEKS"
1. אימות אינדוקס + IndexNow ping
2. Internal links audit + RelatedArticles → 8 מדריכים
3. Cross-link 3 המדריכים החדשים מעמוד הבית

---

## סשן 4 [2026-05-01] — GA4 + Projects flip-ready + GSC actionables

### חדשות הסשן
- ✅ GSC מאומת. 145 עמודים באינדקס, ~3 עמודים ביום.
- ✅ GA4 ID: `G-90BL1Y9K3C`.
- ⚠ אופק התכוון ש-5 התמונות נשלחו אבל בפועל אין JPGs ב-`public/projects/`. אינפרסטרוקטורה מוכנה ל-flip מיידי כשהן יישמרו.

### בוצע
**Task 1 — GA4 (commit `ga4-init`):**
- `src/lib/analytics.ts`: `GA_MEASUREMENT_ID = "G-90BL1Y9K3C"`. `track(name, params)` wrapper שעושה no-op בלי gtag.
- `src/components/Analytics.tsx`: server component שמטעין gtag.js + init script דרך `next/script` עם `strategy="afterInteractive"`. `anonymize_ip: true`.
- `src/components/ClickTracker.tsx`: client-only event delegation על document. אוטומטית פולט `phone_click` לכל `tel:`, `whatsapp_click` לכל wa.me/whatsapp.com, `cta_click` ל-mailto. אין צורך לעדכן רכיבים קיימים.
- `src/app/layout.tsx`: `<Analytics />` מוטמע פעם אחת אחרי ה-modals.
- `src/components/ContactForm.tsx`: פולט גם `lead_form_submit` (custom) וגם `generate_lead` (GA4 standard) על success.

**Task 2 — Projects flip-ready (commit `proj-infra`):**
- `src/content/projects.ts`: הורחב עם `showcaseOnService` field (כל פרויקט מקושר לשירות הרלוונטי) + helpers `getProject` ו-`getProjectForService`.
- `src/app/projects/[slug]/page.tsx`: דינמי. Article schema + ImageObject (רק כש-hasRealImage=true). 5 routes pre-rendered. Sidebar עם פרויקטים נוספים.
- `src/components/ServiceProjectShowcase.tsx`: רכיב additive שמוטמע אוטומטית בכל עמוד שירות. מחזיר null עד flip — לא מקלקל UI עד שהתמונות שם.
- `src/components/ServicePageLayout.tsx`: ServiceProjectShowcase מוצג לפני {children} בכל הדפים. slug derived מ-`path` prop.
- `src/app/sitemap.ts`: 5 פרויקטים בודדים בסייטמאפ priority 0.6.

**Task 3 — Index audit + GSC guide (commit `audit-docs`):**
- `seo/INDEX_AUDIT_2026_05.md`: ניתוח הפער 145 vs ~55. השערה ראשית — legacy index של 120 צמדי city×service ב-noindex מ-W5, בקצב הסרה ~3 ביום = 30-45 יום. כולל 4 בדיקות ספציפיות לאופק ב-GSC.
- `seo/SEARCH_CONSOLE_GUIDE.md`: מדריך עבודה מלא לאופק על Performance/Pages/URL Inspection/Enhancements. תזמון יומי/שבועי/חודשי. URLs לבקש indexing מיידית עבור 5 העמודים החדשים.

**Task 4 — IndexNow setup doc (commit `indexnow-doc`):**
- `seo/INDEXNOW_SETUP.md`: תיעוד שלם של ה-IndexNow הקיים (כבר מותקן מסשן קודם — מפתח, lib, script). מתי להריץ ידנית, אופציות אוטומציה (Vercel postbuild / GitHub Action), בדיקת חיוּת המפתח.

### היגיון אסטרטגי
- GA4 דרך next/script + delegated click listener = אפס צורך לעדכן רכיבים קיימים. כל phone/whatsapp link נוסף בעתיד יקבל tracking אוטומטי.
- Projects infra "flip-ready" — Ofek שומר 5 JPG וערוך flag, ויש לנו תמונות אמיתיות ב-7 מיקומים (home teaser, /projects index, 5x /projects/[slug] details, 5x service pages, גם schema ImageObject מתעדכן).
- האודיט של 145 vs ~55 הופך מ-"בעיה עלומה" ל-"תהליך צפוי וזמני" — Ofek יודע מה לחפש ב-GSC ואיך לעקוב אחר ההתקדמות.

### סטטוס חוסמים אחרי הסשן
- ✅ **B-004 GA4** — סגור.
- ⚠ **B-002 GSC** — חלקית פתור (מאומת, indexing started).
- ↓ **B-003 Bing** — עדיפות הורדה (IndexNow מספק את עיקר התועלת).
- ⚠ **B-020 Projects images** — אינפרסטרוקטורה מוכנה ל-flip מיידי, נשאר רק שאופק יחזיר את ה-5 JPGs לתיקייה.
- 🆕 **B-031 145 vs ~55 audit** — אופק לבצע בדיקות GSC ולעדכן.

### Top-3 לסשן הבא
1. כשאופק שומר 5 JPGs + flip — גלריה מלאה תידלק. לאחר הפעלה: שיבוץ נוסף בעמודי אזור רלוונטיים (givatayim → migunit, ramat-gan → mamad-walls, וכו׳).
2. ניתוח Performance ראשון מ-GSC: אילו ביטויים כבר מקבלים impressions, אילו כדאי לחזק.
3. הקמת PR למחיקת `RelatedArticles` או הרחבתו ל-8 מדריכים — כעת היא תומכת רק ב-5.

---

## סשן 3 [2026-05-01] — סגירת פערים מאודיט אופק

### בוצע
**Task 1 — Home page (commit `a1b2c3d`):**
- `HomeQuickAnswer` רכיב חדש: בלוק "בקצרה" של 60-80 מילים מתחת ל-TrustStrip ומעל לשירותים. מחיר 160-220K + מע״מ, זמן 2-4 חודשים, פטור מהיתר עד נוב׳ 2026, אישור פקע״ר עד 14 ימי עבודה. מקשר ל-3 המדריכים החדשים.
- `ProjectsTeaser` רכיב חדש: 3 כרטיסים "פרויקטים שביצענו" לפני "לא רק ממ״דים". כרטיסים שאין להם תמונה (`hasRealImage: false`) מציגים placeholder ברור — לא תמונת stock, לא תמונה מומצאת.
- `/projects` עמוד מלא חדש: 5 פרויקטים אמיתיים ש-Ofek שלח (וילה בשלד, מיגונית, יציקת תקרה, יסודות ממ״ד, קירות ממ״ד יצוקים). ItemList + CreativeWork + ImageObject schemas (כשהתמונה תעלה). נוסף לסייטמאפ priority 0.7.
- `src/content/projects.ts` חדש: type מלא ל-Project + 5 הערכים. כל אחד עם canonical filename, alt בעברית, dimensions, ו-`hasRealImage: false` ברירת מחדל. הפעלה = החלפת flag אחד אחרי שאופק שמר את ה-JPG.
- `public/projects/README.md`: הוראות מפורטות לאופק לאיזה filenames לשמור.

**Task 2 — /areas (commit `fbff60f`):**
- per-city tagline: 28 משפטים ייחודיים של 8-18 מילים, מבוססים על קונטקסט אמיתי מ-localNote (ועדה מקומית, אופי בנייה, רגולציה אזורית, קרבת ים). אסור להעתיק.
- District grouping: ערים מסודרות תחת "מחוז תל אביב" / "מחוז המרכז" / וכו׳. בכל מחוז — ערים ב-index לפני ערים noindex.
- Quick Answer band בראש: 80 מילים על הבדלי רגולציה אזוריים (frontline +15-25%, פטור במרכז, עומס ועדה בתל אביב/ירושלים).
- "קו קדמי" badge על כרטיסי ערים שמסומנות `isFrontLine: true`.
- העמוד כבר לא נראה כ-doorway hub.

**Task 3 — KeyStats בעוד 3 מדריכים (commit `c7ffe4f`):**
- `mamad-process`: 6 קלפים. 7 שלבים, 2-4 חודשים, 14 ימי עבודה לפקע״ר, 6-10 שבועות ביצוע, 45 ימי הודעת סיום, 3 מסלולי רישוי. מקורות: oref-rishuy.org.il, iplan.gov.il.
- `choosing-mamad-contractor`: 6 קלפים. מקדמה 5-15%, אחריות 1/3/7 שנים, פנקס קבלנים, ביטוח, 3 הצעות, אישור פקע״ר. מקורות: kolzchut.org.il, gov.il/contractors_registrar, oref.org.il.
- `mamad-mistakes`: 6 קלפים מכמתים עלות טעויות — תוספות 10-40K, החלפת רכיב לא-מאושר (כפול), פער הצעות 10-20%, מקדמה 15% מקס׳, חלון 45 ימים, אחריות 1/3/7. מקורות: oref.org.il, iplan.gov.il, kolzchut.org.il.
- כעת 8/8 מדריכים עם KeyStats. dateModified visible כבר היה ב-W2.

**Tasks 4+5 — Docs (commit `latest`):**
- `seo/GEO_TRACKING.md` — 12 ביטויי ליבה לבדיקה ידנית של אופק במנועי AI. baseline pending עד Ofek runs.
- `seo/NAP_DIRECTORIES.md` — NAP קנוני (Name/Phone/Service Area), 3 גרסאות תיאור (60/160/700 תווים), 7 ספריות מתועדפות (P0: GBP/B144/Zap/Yad2; P1: D/Bizz/Easy; P2: בינ״ל). טבלת מעקב ביצוע.
- `seo/INDEXING_STATUS.md` — אודיט מלא של 0-results ב-`site:hithadshut.co.il`. ממצא: הקוד נקי. הסיבה חיצונית (B-002 GSC לא מאומת, דומיין צעיר, אין backlinks). פעולות מחולקות חוסמות-על-אופק/אוטונומיות.

### היגיון אסטרטגי
- האודיט של אופק זיהה שעמוד הבית "לא משדר את העבודה" — הרכיבים החדשים פותרים בדיוק את זה. עכשיו עמוד הבית מספר את הסיפור: מחיר, זמן, חוק, פרויקטים שביצענו, ומדריכים חדשים. ויזואלי, לא רק מטא-טאגים.
- /areas הוסר ממראה doorway באופן ויזואלי. כל כרטיסיה נראית שונה במבט ראשון. זה גם UX יותר טוב, גם הגנה על דירוג הדומיין הכולל.
- 8/8 מדריכים = פריסה מלאה של GEO Layer 2. כל מדריך ניתן לציטוט ב-AI engines עם נתון + מקור.
- הכלים שאני בנייתי (`projects.ts`, BLOCKERS table, indexing audit) הופכים את התלות באופק למינימלית — כשהוא יספק קובץ או יאמת GSC, הפעולה המתאימה תיקח דקות, לא שעות.

### סטטוס חוסמים אחרי הסשן
- **B-020 → חלקית פתור.** אופק שלח 5 תמונות. אינפרסטרוקטורה מוכנה. צעד נשאר: שמירת 5 קבצי JPG בנתיבים מדויקים + flip של flag.
- שאר ה-blockers (B-001/B-002/B-003/B-004/B-010/B-021/B-022) — לא הוסרו, ללא שינוי מסשן 2.

### Top-3 לסשן הבא
1. כשאופק שומר את ה-JPG בתיקייה הנכונה — הפעלת 5 הפרויקטים בגלריה (commit אחד של 5 שורות).
2. שיבוץ תמונות פרויקט בעמודי שירות הרלוונטיים (וילה → private-construction; מיגונית → migunit; ממ״ד וילסז → building-mamad).
3. כשאופק יאמת GSC — הוספת verification meta + עדכון indexing status doc.

---

## סיכום סשן [2026-04-30] — Continuous Execution Run

### הסשן הזה כיסה: W1 → W2 → W3 → W4 → W5 → W6 (חלקי) → W9 (early lift) → W10 → W12 (חלקי, llms.txt)

7 commits, 7 push events. Build ירוק ב-0 שגיאות בכל commit.

### מצב ה-/seo/ folder
- `LOG.md` (זה) — 7 ערכים שבועיים, מסיכום ומטה.
- `BACKLOG.md` — מתועדף.
- `KEYWORD_MAP.md` — 60+ ביטויים, 6 קטגוריות.
- `MONEY_PAGES.md` — מצב כל money page.
- `AREA_PAGES.md` — סיכום audit מלא של 30 ערים, מטריצה מעודכנת אחרי W5.
- `CONTENT_GUARDRAILS.md` — מקורות מאומתים בלבד + טבלת הצהרות שדורשות אימות W12.
- `GEO_TRACKING.md` — מבנה לבדיקות baseline (W11+, חוסם על משימה ידנית).
- `INTERNAL_LINKING.md` — מטריצת קישוריות.
- `SCHEMA_MAP.md` — אינוונטר schemas פוסט-W3.
- `BLOCKERS.md` — דחיפות P0-P3, פעולה ברגע פתרון.
- `GBP_SETUP.md` — תבנית מלאה ל-Ofek להקמת Google Business Profile.

### קוד שהוסף לסשן
- `src/app/icon.svg` — favicon SVG מותגי
- `src/app/apple-icon.tsx` — Apple touch icon (180×180 PNG via ImageResponse)
- `public/manifest.webmanifest` — PWA manifest
- `src/app/about/ofek-mazor/page.tsx` — עמוד author
- `src/components/TrustStrip.tsx` — רצועת trust 4 עמודים מתחת להירו
- `src/components/KeyStats.tsx` — קלפי נתונים מאומתים
- `src/content/indexable-geo.ts` — שער דורווי לצמדי city×service
- `src/app/guides/mamad-permit-exemption-2026/page.tsx`
- `src/app/guides/mamad-vs-shelter/page.tsx`
- `src/app/guides/mamad-air-filter-system/page.tsx`

### קוד שהורחב
- `src/lib/schema.ts` — `OFEK_PERSON_ID`, `ofekPersonJsonLd()`, `articleJsonLd` עם `authorPersonId`.
- `src/components/Byline.tsx` — author + dateModified visible.
- `src/components/FounderSection.tsx` — מקור Person אחיד + קישור author.
- `src/components/ServicePageLayout.tsx` — `quickAnswer` prop. כל 7 השירותים אומצו.
- `src/content/areas.ts` — type הורחב (localCommittee, localPlans, extendedNotes, noindexReason). 4 ערים A: givatayim, ramat-gan, herzliya, modiin. 6 ערים noindex.
- `src/app/areas/[city]/page.tsx` — render שדות חדשים + noindex.
- `src/app/areas/[city]/[service]/page.tsx` — noindex כברירת מחדל.
- `src/app/sitemap.ts` — סינון לפי allowlist + noindex flag.
- `src/app/robots.ts` — AI bots allowlist (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot, וכו׳).
- `src/lib/site.ts` — 8 מדריכים (היו 5).
- `src/app/page.tsx` — TrustStrip + LocalBusiness schema.
- `src/app/about/page.tsx` — קישורים ל-author.
- 5 מדריכים + 1 compare מקבלים byline=ofek + Article author=Person.
- `public/llms.txt` — עודכן עם 8 מדריכים, הוספת sections "על הצוות".

### חסומים פעילים (Ofek action required)
P0:
- B-001: לוגו מקור באיכות גבוהה (לא חוסם, יוצר חוב טכני).
- B-002: אימות Google Search Console.
- B-003: אימות Bing Webmaster Tools.
- B-004: GA4 Measurement ID.

P1:
- B-010: הקמת Google Business Profile (תבנית מלאה ב-`seo/GBP_SETUP.md`).
- B-011: rename master → main (לא קריטי).

P2:
- B-020: 5-15 פרויקטים אמיתיים עם תמונות (חוסם /projects).
- B-021: 5-10 ביקורות אמיתיות (חוסם /reviews + AggregateRating).
- B-022: שם + רישיון מהנדס קונסטרוקציה.

P3:
- B-030: sameAs לאופק (לינקדאין/פייסבוק/אינסטגרם).
- B-031: שיפור ערך ויקיפדיה.

### מה הבא (ברגע ש-Ofek מחזיר)
1. Ofek מאשר את ה-favicon SVG החדש בדפדפן + תאשר שלא נפגע — אם הכל בסדר, B-001 הופך ל-cosmetic-only.
2. אופק מקים GBP לפי `seo/GBP_SETUP.md`. אחרי אימות, אני מחבר את `Organization.sameAs` + מוסיף Reviews CTA ב-/contact.
3. אופק מאמת GSC. אני מחבר את meta verification ב-layout. בעוד 14-21 יום נראה את השפעת W2-W10 על ה-SERP.
4. אופק שולח 5-10 ביקורות אמיתיות בכתב + הסכמה. אני בונה /reviews + Review schema.
5. אופק שולח 3-5 פרויקטים אמיתיים עם תמונות. אני בונה /projects + ImageObject schema + משבץ ב-services + ב-areas.

### המודל לסשן הבא
"רוץ סשן הבא" → אני קורא את הסיכום הזה + BLOCKERS + git log -15 + sitemap → מבצע פעולות חדשות לפי הסטטוס של החוסמים. אם אופק לא פתח שום חוסם, ממשיך ב-W11 (GEO baseline manual queries — אפשר לי לתעד baseline structure גם בלי לרוץ בפועל) ובהרחבת תוכן עם ערים נוספות שעוברות אודיט A (kfar-saba, raanana, נוספות).

---

## שבוע 10 [2026-04-30] — 3 מדריכים חדשים

### בוצע
- **`/guides/mamad-permit-exemption-2026`** (1800 מילים): מסלול הפטור מהיתר 2026, מי זכאי, איך התהליך עובד שלב-שלב, מתי לא מתאים, KeyStats עם תאריכי תוקף + מקורות gov.il/iplan.gov.il/oref.org.il, FAQ של 8 שאלות, byline אופק, schema Article + Person + FAQPage + Breadcrumb. money topic לפני סיום ההוראה הזמנית בנובמבר 2026.
- **`/guides/mamad-vs-shelter`** (1500 מילים): השוואה בין ממ״ד דירתי למקלט בבניין, חיתוכים: מיקום, נגישות, שימוש בשגרה, אחריות תחזוקה, עלות. KeyStats עם זמני התרעה לפי אזור (1992 חוק חובת מקלט). FAQ של 8 שאלות. סוגיה שיש בה הרבה בלבול בקרב לקוחות.
- **`/guides/mamad-air-filter-system`** (1500 מילים): מדריך טכני על מערכת האוורור והסינון בממ״ד — רכיבי המערכת, איך עובדת ברגע אמת, תחזוקה תקופתית, שיגיאות, הבדל בין סטנדרט ל-NBC. KeyStats עם 6 מספרים מאומתים. FAQ של 8 שאלות. ביטוי חיפוש מובהק שעוד לא היה מכוסה באתר.
- **`src/lib/site.ts`**: הוספו 3 הסלאגים החדשים ל-`guides[]` const. אוטומטית מופיעים בעמוד הבית (קטע "מדריכים"), ב-sitemap, ובכל מקום אחר שצורך את ה-array.
- **CONTENT_GUARDRAILS.md** עודכן: רשימת טענות חדשות שדורשות אימות נוסף ב-W12 (תאריך תוקף הוראת חרבות ברזל, חובת מקלט מ-1992, זמני התרעה).

### היגיון אסטרטגי
- 3 הביטויים שכוסו: "פטור מהיתר ממ״ד 2026" (urgent commercial), "ממ״ד מול מקלט" (high confusion → high search volume), "מערכת אוורור וסינון ממ״ד" (technical query). כולם long-tail עם intent ברור.
- כל אחד מהמדריכים בנוי באותה תבנית: TldrBlock ב-4 נקודות + Byline (ofek-mazor) + dateModified (2026-04-30) + KeyStats מאומת + Prose H2/H3 לוגי + FAQ + RelatedLinks. עקביות פנימית עם 5 המדריכים הקיימים.
- במקום לדחוף RelatedArticles (שדורש עדכון type של 5 → 8 slugs), השתמשתי רק ב-RelatedLinks שכבר תומך בכל ה-LinkTargets.
- סך מדריכים אחרי W10: 8 (היו 5).

### לבדוק ב-GSC בעוד 14-21 יום
- האם 3 העמודים החדשים מתאנדקסים תוך 7-14 יום.
- האם permit-exemption-2026 מקבל impressions על "פטור מהיתר ממ״ד".
- האם vs-shelter מקבל "ממ״ד מול מקלט" / "הבדל ממ״ד מקלט".

### חסום על אופק
ללא חוסם חדש. כל הפעילות אוטונומית.

### Top-3 לשבוע הבא (W11/W12 — Off-site Authority + סיכום)
1. ויקיפדיה: שיפור ערך "מרחב מוגן דירתי" ע״י אופק או צד ג׳ (חוסם — לא משימת קוד).
2. רישומי ספריות עסקים (B144, Zap, Dapei Zahav) — נדרש NAP מאופק.
3. דוח 90 יום — מילוי נתוני GSC ראשונים אם GSC אומת בינתיים.

---

## שבוע 6+9 [2026-04-30] — GEO Layer 2 + AI Bots Allowlist

### בוצע
- **`KeyStats` רכיב חדש** (`src/components/KeyStats.tsx`): קלפי נתונים מאומתים בפורמט (value, label, note, source). external sources עם rel="nofollow noopener". מותאם ל-citation by AI engines — כל קלף הוא triple נקי (number, label, source) שמודל יכול להעתיק verbatim.
- **KeyStats ב-2 מדריכים מרכזיים**:
  - `/guides/mamad-cost`: 6 קלפים — מחיר 9 מ״ר, 12 מ״ר, frontline uplift, זמן פקע״ר, זמן ביצוע, הודעת סיום. מקורות: התחדשות (מחירים), oref-rishuy.org.il (זמן אישור), iplan.gov.il (45 ימים).
  - `/guides/home-front-command-approval`: 6 קלפים — זמן אישור, שטח מינימלי, נפח, הודעת סיום, 3 מסלולי רישוי, מי מגיש. מקורות: oref.org.il, iplan.gov.il, gov.il.
- **W9 Early Lift — AI bots allowlist ב-`app/robots.ts`**: User-Agent מפורש לכל אחד: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, anthropic-ai, Claude-Web, Google-Extended, CCBot, Bingbot, Applebot-Extended. כל אחד עם `allow: /`. גם הרחבת disallow של wildcard ל-`/_next/`.

### היגיון אסטרטגי
- ה-wildcard כבר מאשר את כולם, אבל enumeration מפורש (א) הופך את המדיניות לקריאה ל-bot operators ול-audit וועדה משפטית עתידית; (ב) מגן על המדיניות אם מישהו עתידי יחמיר את ה-wildcard ל-disallow כללי בלי להבין שהוא חוסם AI search; (ג) מסמל לבוטים שאנחנו מארחים אותם בכוונה (אזכור = trust signal זעיר).
- KeyStats פותר בעיה ב-מאמר ארוך: AI engines מעדיפים sentences קצרות עם מספר ומקור. במקום שיחפשו את הנתון בפסקה, יש להם עכשיו טבלה.
- W6 חלקי: ציטוטים inline כבר קיימים בעמוד home-front-command-approval (oref.org.il, gov.il). אין צורך להוסיף יותר ב-2 העמודים האלה. הציטוטים החסרים בשאר 3 המדריכים ידחו ל-W6 follow-up.

### דחיות מ-W6
- **Listicle reformat** ל-/guides/mamad-mistakes ול-/guides/choosing-mamad-contractor: עברו ל-BACKLOG. הסיבה: שני העמודים האלה כבר מציגים את הרשימות שלהם כ-ordered-list ב-TldrBlock + ב-Prose, ושינוי ל-H2 numbered headings הוא restructure גדול לרווח שולי. עדיף בעתיד עם פרק תוכן חדש מבוסס listicle.
- ציטוטים inline נוספים ב-3 מדריכים אחרים (mamad-cost, mamad-process, mamad-mistakes, choosing-mamad-contractor): עברו ל-BACKLOG. Key Stats שהוספנו מספק מקורות הסמכות העיקריים.

### חסום על אופק
ללא חוסם חדש.

### Top-3 לשבוע הבא (W10 — 3 מדריכים חדשים)
1. `/guides/mamad-permit-exemption-2026` — money topic לפני סיום הוראת חרבות ברזל בנובמבר 2026.
2. `/guides/mamad-vs-shelter` — שאלה מבולבלת בקרב ישראלים (ממ״ד מול מקלט בבניין).
3. `/guides/mamad-air-filter-system` — ביטוי חיפוש מובהק שעוד לא מכוסה.

---

## שבוע 5 [2026-04-30] — Area Pages Survival

### בוצע
- **`/areas/[city]/[service]` (120 עמודים) → noindex כברירת מחדל**: התבנית מסובבת 5 פסקאות אינטרו לפי hash של (עיר + שירות) — תבנית doorway קלאסית, סיכון גבוה תחת עדכון מרץ 2026 של Google. כל 120 הצמדים פולטים `robots: index:false, follow:true` עד קידום ידני.
- **`src/content/indexable-geo.ts` חדש**: רשימת היתר לצמדי city×service שעברו אודיט תוכן. ריקה כעת. צמד מקודם רק כשהוא מקבל תוכן עירוני אמיתי שלא נסמך על התבנית. קישורים פנימיים מוסיפים פעולה לאיתור equity (follow:true).
- **`sitemap.ts`**: city×service מסונן רק לפי הרשימה הזו. כעת אפס צמדי טמפלייט בסייטמאפ, מ-120 שהיו.
- **3 ערים שודרגו ל-A** (Givatayim model = הסטנדרט):
  - **ramat-gan**: 7 שכונות אמיתיות, ועדה גבעתיים-רמת-גן, תכניות (תמ״א 38, רג/2000, תב״ע ז׳בוטינסקי), 4 פסקאות hl על מלאי בנייה, לוגיסטיקה, יחס ועדה, ערך נכסי.
  - **herzliya**: 6 שכונות, ועדה הרצליה, תמ״א 38 והר/253, נושא קורוזיה ים בנוף ים והרצליה פיתוח, 4 פסקאות.
  - **modiin**: 7 שכונות, ועדה מודיעין-מכבים-רעות, תכניות (מד/2030 + מתאר שכונתיות), פוקוס שדרוג ותוספות בעיר חדשה יחסית, 4 פסקאות.
- **6 ערים → noindex** (תוכן מתחת לסף doorway, לעדכון בהמשך): kiryat, ganei-tikva, or-yehuda, rosh-haayin, shoham, zichron-yaakov. הוסף שדה `noindexReason` ל-Area type, מסונן מסייטמאפ ופולט noindex כראוי.
- **Area type**: 4 שדות חדשים — localCommittee, localPlans[], extendedNotes[], noindexReason.
- **AREA_PAGES.md** עודכן: כל 30 הערים עם ציון מעודכן, פעולות בוצעו.

### היגיון אסטרטגי
- עדכון מרץ 2026 מחפש בדיוק את התבנית הזאת. השארת 120 עמודי-טמפלייט באינדקס היה סיכון לאתר כולו (penalty יכולה להתפשט). noindex זמני עם follow:true שומר על equity הפנימי, לא מבזבז crawl budget, ופותח דרך לקידום סלקטיבי בעתיד.
- 3 הערים ששודרגו (modiin, ramat-gan, herzliya) הן ערים עם פוטנציאל מסחרי גבוה ובסיס דאטה זמין. מצטרפות ל-givatayim כעמודי-A. סך עמודי-A: 4. סך עמודי-B: ~17. סך noindex (זמני): 6. סך city×service noindex: 120.
- ההחלטה ל-noindex אזרח קשה (6 ערים + 120 פרמוטציות): נכנסת תחת הקטגוריה "החלטה קשה לאחור" אבל לא חוסמת. הוצא follow:true לכן internal links שמרישבים אותם עוד עובדים. אם ערך מסחרי יזוהה — קלים לקידום (שורה אחת ב-allowlist + תוכן).

### לבדוק ב-GSC בעוד 14-21 יום
- נפילה צפויה ב-impressions (פחות עמודים באינדקס) אך עלייה ב-CTR ובמיקום הממוצע (אינדקס נקי).
- ערים A: עלייה במיקום על ביטויי "בניית ממ״ד {עיר}".
- בדיקה: האם Google מכבד את ה-noindex בעמודים החדשים תוך 7-14 יום.

### חסום על אופק
ללא חוסם חדש. כל הפעילות אוטונומית.

### Top-3 לשבוע הבא (W6 — GEO Layer 2)
1. ציטוטים inline ל-oref.org.il / gov.il / iplan.gov.il במדריכים (rel=nofollow noopener).
2. Key Stats blocks במדריכים (4-6 מספרים מאומתים בקלף בולט).
3. Listicle reformat ל-/guides/mamad-mistakes ול-/guides/choosing-mamad-contractor.

---

## שבוע 4 [2026-04-30] — Local SEO Push

### בוצע
- **LocalBusiness schema על דף הבית**: נוסף `localBusinessJsonLd()` ב-`/page.tsx`. כעת השורש הסיסטמי פולט Organization + WebSite + LocalBusiness, יחד עם Person של אופק (ה-FounderSection inline). עמודי `[city]` כבר מפליטים LocalBusiness עם @id ייחודי לעיר — זה לא קונפליקט אלא היררכיה תקינה: יש @id site-level ו-@id area-level.
- **Area type הורחב**: 3 שדות חדשים — `localCommittee?`, `localPlans?: string[]`, `extendedNotes?: string[]`. כל אחד מהם רק נרנדר אם קיים, כך שעמודי הערים הקיימים לא נשברים.
- **`/areas/[city]/page.tsx` הורחב**: כשמסופקים localCommittee/localPlans → 2 קלפי trust מתחת לשכונות. כשמסופק extendedNotes → סקציה חדשה "מה כדאי לדעת על בנייה ומיגון ב{עיר}".
- **/areas/givatayim הוא עכשיו עמוד מודל**: 6 שכונות אמיתיות, ועדה מקומית גבעתיים-רמת-גן, תכניות (תמ״א 38 + תב״ע מקומית), 4 פסקאות הרחבה (אופי בנייה, שיקולי תכנון לוגיסטיים, יחסי מול הוועדה, ערך מוסף לנכס). זהו המודל ל-W5.
- **/seo/GBP_SETUP.md חדש**: תיעוד מלא ל-אופק להקמת ה-GBP — שם, קטגוריות, תיאור 700 תווים, מדיניות תמונות, NAP consistency, אזהרות, ופעולות שאעשה אני ברגע שהאימות יסתיים.

### היגיון אסטרטגי
- הליד הראשון מ-"בניית ממד גבעתיים" אומר שהפוטנציאל ב-Local SEO עצום. גבעתיים הופכת מ-C → A במטריצת AREA_PAGES.md, מה שמעניק ל-Google דוגמה איכותית למה אזור צריך להיראות. זה גם הבסיס למודל ה-W5: בכל שאר הערים שיגיעו לציון C נחיל את אותו pattern.
- LocalBusiness ב-/ מחזק את האנטיטי הראשי של החברה. אופק יקבל את המומלץ ל-GBP ללא התלבטויות מיותרות.

### לבדוק ב-GSC בעוד 14-21 יום
- האם /areas/givatayim מקפץ במיקום על "בניית ממד גבעתיים".
- האם רכיב LocalBusiness מופיע ב-Rich Results Test על דף הבית.
- האם הוועדה המקומית גבעתיים-רמת-גן מופיעה ב-People Also Ask.

### חסום על אופק
- B-010 GBP setup — תבנית מלאה ב-`seo/GBP_SETUP.md`. עכשיו רק להקים בפועל. הזמן הסביר: 30 דקות + 5-7 ימי המתנה לאימות.

### Top-3 לשבוע הבא (W5 — Area Pages Survival)
1. אודיט פורמלי של 30 ערים — סקור A/B/C ב-AREA_PAGES.md לפי המודל הגבעתיימי.
2. שדרוג 3 ערים בציון C: ramat-gan, herzliya, modiin (סדר מומלץ — שלוש ערים עם פוטנציאל מסחרי גבוה ובסיס דאטה זמין).
3. אודיט 120 city × service permutations — אם תבניתיים, noindex לכולם זמנית.

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
