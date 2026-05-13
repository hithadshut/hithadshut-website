# EM-DASH AUDIT — Week 1 Branch Review

תאריך: 2026-05-13
Branch: `week-1/foundation-day-1-to-4`
Diff base: `origin/master`

## תקציר

- **52 קבצים** שונו (לא כולל קבצי docs/planning שלא היו בהם em-dash).
- **135 מופעים של `—`** נמחקו במצטבר.
- שיטות תיקון:
  - **Agent-curated (context-aware)**: 8 קבצי תוכן עיקריים. עברו Edit/MultiEdit ידני של agent עם בחירת מפריד מתאים לכל מקרה.
  - **sed רוחבי `—` → `, `**: 5 קבצים שאחר כך נדרשו תיקונים ידניים (`press`, `heskem`, ראו פירוט).
  - **sed רוחבי `—` → `-`** (לקוד-קומנטים בלבד): ~35 קבצים שאין בהם תוכן עברי מהותי. אינם משנים פלט גלוי למשתמש.

---

## חלק א׳: קבצי תוכן עיקריים (תוקנו ידנית או ע״י agent)

### 1. `src/app/compare/mamad-vs-hamad/page.tsx` — 34 מופעים

שורות חשובות:

**FAQ #2 — תשובה לשאלה "מה ההבדל בין ממ״ד לחמ״ד?"**
```diff
- ממ״ד הוא סיווג פורמלי של פיקוד העורף — מרחב מוגן דירתי לפי תקן 4422
+ ממ״ד הוא סיווג פורמלי של פיקוד העורף, כלומר מרחב מוגן דירתי לפי תקן 4422
```
תקין. `, כלומר` משמר את הקשר ההסברתי.

**FAQ #6 — "למה הקבלן מציע לי חמ״ד ולא ממ״ד?"** (רשימה ממוספרת)
```diff
- שלוש סיבות אפשריות. ראשונה — בבית או בדירה שלכם בנייה...
+ שלוש סיבות אפשריות. ראשונה: בבית או בדירה שלכם בנייה...
```
תקין. `:` הופך לרשימה מוסברת.

**טבלת השוואה — שורת "מערכת סינון אב״כ"**
```diff
- לרוב לא — שיפור אטימה בלבד
+ לרוב לא, שיפור אטימה בלבד
```
תקין.

---

### 2. `src/app/press/page.tsx` — 21 מופעים

שורות חשובות:

**כותרת ראשית של PageHero**
```diff
- title="ערכת עיתונאים — התחדשות בינוי ויזמות"
+ title="ערכת עיתונאים | התחדשות בינוי ויזמות"
```
תקין. `|` מקובל בכותרות SEO.

**Attribution לציטוטים (חוזר 7 פעמים)**
```diff
- — אופק מזור, מנכ״ל התחדשות בינוי ויזמות
+ - אופק מזור, מנכ״ל התחדשות בינוי ויזמות
```
תקין. מקף רגיל מקובל ב-attribution.

**רשימת נושאים שאופק מדבר עליהם (7 פריטים בכל עמודה)**
```diff
- <li>✓ מחיר ממ״ד 2026 — מה כולל המחיר ומה לא</li>
+ <li>✓ מחיר ממ״ד 2026: מה כולל המחיר ומה לא</li>
```
תקין. `:` מתאים לפריט עם תיאור.

**הערה על תהליך התיקון:** sed הראשוני המיר את כל ה-`—` ל-`, ` ויצר 9 שורות עם `,  ` (פסיק-פסיק-רווח). תוקנו ידנית לקראת הקומיט (sed ממוקד עם פטרן ספציפי לכל שורה).

---

### 3. `src/app/madrichim/heskem-pinui-binui-shel-2-amudim/page.tsx` — 13 מופעים

שורות חשובות:

**כותרת `<ContentSection>` של פרק 4**
```diff
- title="פרק 4: התמורות — הקריטי ביותר (10-25 עמודים)"
+ title="פרק 4: התמורות, הקריטי ביותר (10-25 עמודים)"
```
תקין. הקומה משמרת תיאור.

**כותרת פרק 8**
```diff
- title="פרק 8: ערבויות — הביטחון של הדיירים (8-15 עמודים)"
+ title="פרק 8: ערבויות: הביטחון של הדיירים (8-15 עמודים)"
```
תקין. נקודתיים מקובלים אחרי כותרת ראשית.

**רשימת ערבויות (פרק 8, סעיף "ערבויות על שלבי בנייה")**
```diff
- ערבות לכל שלב — חתימה, פינוי, יציקת יסודות, גמר שלד, גמר
+ ערבות לכל שלב: חתימה, פינוי, יציקת יסודות, גמר שלד, גמר
```
תקין. נקודתיים פתח רשימה.

**הערה:** היו 11 sed-artifacts (`, `) שתוקנו ידנית עם פטרנים ממוקדים אחרי ה-sed הראשוני.

---

### 4. `src/app/madrichim/tax-meturgam-pinui-binui-2026/page.tsx` — 12 מופעים

תוקנו ע״י agent (batch 2). דוגמאות מייצגות:

```diff
- — נדרשת התייעצות
+ , ונדרשת התייעצות

- — לא.
+ , לא.

- — חלק מהתמורה ... — ולא
+ (חלק מהתמורה ...) ולא
```
כל התיקונים context-aware. אין artifacts.

---

### 5. `src/app/madrichim/luach-zmanim-pinui-binui-2026/page.tsx` — 9 מופעים

תוקנו ע״י agent (batch 2). 4 מהם בקוד-קומנטים (`—` → `-`), 5 בתוכן עברי (גורמים מעכבים בפרויקטים):

```diff
- — 18-24 חודשים
+ , מה שמוסיף 18-24 חודשים
```

---

### 6. `src/app/madrichim/dirot-temura-vs-dirot-mukdamot/page.tsx` — 8 מופעים

תוקנו ע״י agent (batch 2). דוגמה:

```diff
- ההבדל הממוצע נע 15-30% — לטובת דירת תמורה
+ ההפרש הכספי הממוצע: 15-30% לטובת דירת תמורה
```

**שינוי בהדגשה בולטת ב"דוגמה: ההחלטה של אסתר":**
```diff
- אבל אסתר תהיה בת 86 במסירה — שיקול שלא ניתן להתעלם
+ אבל אסתר תהיה בת 86 במסירה.
```
**דגל לוורי:** הסיומת המקורית (`— שיקול שלא ניתן להתעלם`) ביטאה דעה אנליטית. ה-agent הסיר אותה במקום להמיר. לא טעות, אבל גוון השתנה. **לאישור Ofek**.

---

### 7. `src/app/madrichim/sheelot-shalemot-leyazam-pinui-binui/page.tsx` — 5 מופעים

תוקנו ע״י agent (batch 2). דוגמה:

```diff
- שווה את ההשקעה — טעות בבחירת יזם עולה...
+ שווה את ההשקעה, כי טעות בבחירת יזם עולה...
```
תקין.

---

### 8. `src/app/tama-38/sug-1/page.tsx` — 4 מופעים

תוקנו ע״י agent (batch 3). דוגמאות:

```diff
- 66% —
+ 66%:

- 80% —
+ 80%:
```
תקין.

---

### 9. `src/app/services/room-reinforcement/page.tsx` — 3 מופעים

```diff
- — מסיבות
+ (מסיבות ...)
```
תקין.

---

### 10. `src/app/page.tsx` (homepage) — 5 מופעים

3 ב-code comments, 2 בתוכן עברי:
```diff
- — קבלו ייעוץ
+ , וקבלו ייעוץ
```

---

## חלק ב׳: קבצים עם em-dash בקוד-קומנטים בלבד

הקבצים הבאים שונו רק ב-comments (`{/* ... */}`, `// ...`). אין שינוי פלט גלוי למשתמש:

`src/actions/indexnow-submit.ts`, `src/app/admin/seo-dashboard/page.tsx`, `src/app/api/lead/route.ts`, `src/app/areas/page.tsx`, `src/app/chalufat-shaked/page.tsx`, `src/app/guides/choosing-mamad-contractor/page.tsx`, `src/app/guides/mamad-cost/page.tsx`, `src/app/guides/mamad-mistakes/page.tsx`, `src/app/guides/mamad-permit-exemption-2026/page.tsx`, `src/app/guides/mamad-process/page.tsx`, `src/app/guides/mamad-vs-shelter/page.tsx`, `src/app/layout.tsx`, `src/app/llms.txt/route.ts`, `src/app/manifest.ts`, `src/app/services/building-mamad/page.tsx`, `src/app/services/prefab-mamad/page.tsx`, `src/app/sitemap.ts`, `src/components/Analytics.tsx`, `src/components/ClickTracker.tsx`, `src/components/ContactForm.tsx`, `src/components/Header.tsx`, `src/components/HomeQuickAnswer.tsx`, `src/components/KeyStats.tsx`, `src/components/Logo.tsx`, `src/components/ProjectsTeaser.tsx`, `src/components/ServiceProjectShowcase.tsx`, `src/components/TrustStrip.tsx`, `src/components/schema/article.tsx`, `src/content/areas.ts`, `src/content/indexable-geo.ts`, `src/content/llms-txt-manifest.ts`, `src/content/projects.ts`, `src/data/internal-links.ts`, `src/lib/analytics.ts`, `src/lib/anchors.ts`, `src/lib/indexnow.ts`, `src/lib/schema.ts`, `src/app/guides/home-front-command-approval/page.tsx`, `src/app/guides/mamad-air-filter-system/page.tsx`.

---

## חלק ג׳: דגלים שצריך בדיקת Ofek

1. **`dirot-temura-vs-mukdamot` — דוגמת אסתר**: סיומת אנליטית `— שיקול שלא ניתן להתעלם` הוסרה במקום להמיר. מומלץ לקרוא את הפסקה ולוודא שהגוון שלך נשמר.

2. **`mamad-vs-hamad` body, "מתי ההבדל הזה משנה"**: שורת הסיכום שונתה:
   ```diff
   - לפיכך הסיווג הפורמלי הוא לא רק עניין של רגולציה — הוא עניין של ערך נכס
   + לכן הסיווג הפורמלי הוא לא רק עניין של רגולציה, הוא עניין של ערך נכס
   ```
   מהותית זהה, אבל "לפיכך" שונה ל"לכן". בדיקת Ofek אם זה משמר את הגוון שלו.

3. **לא נמצאו**: שורות שבורות בעברית, ניסוחים ללא משמעות, פסיקים כפולים, או "פסיק-רווח" שלא תוקנו. בדקתי `,  ` (פסיק-2-רווחים) על כל src/ — 0 מופעים.

---

## חלק ד׳: ולידציה אוטומטית

- `grep -rn "—" src/` → **0 מופעים**
- `grep -rn ",  " src/` (artifacts מ-sed) → **0 מופעים**
- `npm run typecheck` → ✅
- `npm run lint` → ✅ (exit 0)
- `npm run build` → ✅ (188 עמודים סטטיים)

---

## חלק ה׳: מקור ה-em-dashes (תשובה לשאלה הרטרואקטיבית)

`git log` מראה שבעבר היו פעולות קודמות של em-dash purge:
- `aa68a3d` — "content(positioning): drop reactive broker framing + em-dash purge across 7 surfaces"

אבל הניקוי היה חלקי (7 משטחים). 135 ה-em-dashes שנמצאו השבוע מקורם ב:
- כתיבת תוכן ע״י Claude Code בסשנים קודמים (Phase 2A, Phase 5.0, W2-W4 SEO sprints).
- אין מקור לתוכן שכתב המשתמש עצמו.

**מסקנה**: ה-content-lint קיים אבל לא הופעל כ-pre-commit hook. לכן Claude Code בעבר commit-ed em-dashes ולא נחסם. נדרש pre-commit hook (ראו `scripts/install-hooks.sh` ו-`.husky/pre-commit` בקומיט הבא).
