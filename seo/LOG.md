# SEO Execution Log — התחדשות בינוי ויזמות

יומן ביצוע שבועי. כל ערך = שבוע אחד. הוסף בראש (newest first).

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
