# Google Search Console — מדריך עבודה לאופק

GSC מאומת! זה הזמן להתחיל לעבוד עם הנתונים.
URL: https://search.google.com/search-console/

---

## דף עיקרי לבדיקה יומית: Performance

תפריט שמאל → **Performance** → "Search results".

### מה לחפש
1. **סינון תאריכים**: 28 יום אחרונים. שינוי לטווחים אחרים לפי הצורך.
2. **4 הכרטיסים בראש**:
   - **Total clicks** — כמה גולשים נכנסו מגוגל.
   - **Total impressions** — בכמה תוצאות חיפוש הופענו.
   - **Average CTR** — אחוז הקלקה. בין 2-5% תקין, מעל 5% מצוין, מתחת ל-2% חלש.
   - **Average position** — מיקום ממוצע. מתחת ל-10 = עמוד 1.

### לשונית Queries (ביטויי חיפוש)
- **למה זה חשוב**: מראה אילו ביטויי חיפוש כבר מציגים את האתר שלנו.
- **חפש**:
  - ביטויים עם impressions גבוהים אך 0 קליקים → הזדמנויות שיפור (כתיבה מחודשת של title/description).
  - ביטויים עם position 11-20 → קרובים לעמוד 1, השקעת תוכן יכולה להעלות אותם.
  - ביטויים שלא ציפינו להם → תוכן חדש פוטנציאלי.
- **דוגמה אמיתית**: אם רואים "מחיר ממ״ד גבעתיים" עם 50 impressions ו-0 קליקים, מיקום 14 — זה אומר ש-/areas/givatayim צריך title/meta-description חזקים יותר על המחיר ספציפית.

### לשונית Pages (עמודים)
- **למה זה חשוב**: מראה אילו עמודים מקבלים תנועה.
- **חפש**:
  - עמודים עם הרבה impressions אך CTR נמוך → לשפר title/description.
  - עמודים עם הרבה קליקים → לחזק עוד יותר עם תוכן רלוונטי, internal links.
  - עמודים שלא ציפינו שיופיעו → לראות איך Google מציג אותם.

### לשוניות נוספות
- **Countries** — צריך להיות 95%+ ישראל.
- **Devices** — כנראה 70%+ מובייל. לוודא שהאתר נראה טוב במובייל.

---

## דף שני בחשיבות: Pages (Indexing)

תפריט שמאל → **Pages** (תחת Indexing).

### Indexed
- כמות עמודים שגוגל זוחל ומציג.
- מצב נוכחי: 145 עמודים. ראה `seo/INDEX_AUDIT_2026_05.md` להסבר.
- בעוד 30-45 יום צריך לרדת ל-~55-65.

### Not indexed
לחץ על "Why pages aren't indexed". סוגי הסיבות:

| סיבה | משמעות | פעולה |
|---|---|---|
| Excluded by 'noindex' tag | Google ראה את ה-noindex שלנו והסיר | ✓ תקין — זה רצוי לצמדי city×service |
| Crawled - currently not indexed | Google זחל אך לא הכניס לאינדקס | אם זה עמוד שאמור להיות באינדקס — בדיקה למה (תוכן דק? duplicate?) |
| Discovered - currently not indexed | Google יודע על ה-URL אך לא זחל | המתנה. עוד 7-14 יום זה יעבור. |
| Page with redirect | יש redirect | בדוק שה-redirect נכון |
| Soft 404 | Google חושב שזה 404 גם אם לא מוחזר 404 | תוכן מאוד דק. הוסף תוכן או מחק. |
| Server error (5xx) | תקלת שרת | בעיה קריטית — התראה לאופק |

### לבדוק כל שבוע
- כל ירידה חדה ב-Indexed → לבדוק.
- עליות חדות ב-"Crawl issue" → לבדוק.

---

## דף שלישי: URL Inspection (כלי לכל URL ספציפי)

שורת חיפוש בראש GSC → הזן URL מלא.

### מה לראות
- **URL is on Google** ✓ — העמוד באינדקס.
- **URL is not on Google** ✗ — לא באינדקס. הסיבה מופיעה למטה.
- **Test live URL** — בודק את ה-URL בזמן אמת.
- **Request indexing** — מבקש מגוגל לזחול עכשיו (מוגבל ל-10 בקשות ביום).

### מתי להשתמש
- אחרי שהוספת עמוד חדש (כמו 3 המדריכים החדשים) → "Request indexing".
- אחרי שינוי משמעותי (כמו עדכון title) → "Request indexing" כדי לזרז ראיית השינוי.
- כשרואים "Crawled - not indexed" ולא מבינים למה.

### לבקש indexing מיד עבור
- https://hithadshut.co.il/projects (חדש)
- https://hithadshut.co.il/about/ofek-mazor (חדש)
- https://hithadshut.co.il/guides/mamad-permit-exemption-2026 (חדש)
- https://hithadshut.co.il/guides/mamad-vs-shelter (חדש)
- https://hithadshut.co.il/guides/mamad-air-filter-system (חדש)

---

## דף רביעי: Enhancements

תפריט שמאל → **Enhancements**:

### Mobile Usability
- צריך להיות "Valid" על כל העמודים.
- אם יש "Issues" — לתקן בקוד.

### Core Web Vitals
- LCP, FID/INP, CLS.
- "Good" / "Needs improvement" / "Poor".
- מעקב חודשי.

### Sitemaps
- וידוא שהסייטמאפ הוגש: /sitemap.xml
- "Last read" צריך להיות תאריך עדכני (תוך 7 ימים).

### Manual actions
- צריך להיות "No issues detected".
- אם יש manual action — קריטי, התראה מיידית.

---

## תזמון מומלץ

### יומי (5 דקות)
- Performance → Total clicks היום מול אתמול. מגמה.

### שבועי (15 דקות)
- Performance → Queries → ביטויים חדשים שצברו impressions השבוע.
- Pages → Indexed → שינוי במספר.
- Enhancements → אם משהו השתנה.

### חודשי (45 דקות)
- ניתוח מלא של Performance — אילו ביטויים עלו, אילו ירדו.
- ניתוח Pages → אילו עמודים מובילים בקליקים.
- עדכון `seo/KEYWORD_MAP.md` עם ביטויים חדשים שזיהינו.

---

## אינטגרציה עם הקוד

כשאופק מזהה ביטוי שמופיע ב-GSC עם פוטנציאל:
1. עדכון `seo/KEYWORD_MAP.md` עם הביטוי + סטטוס.
2. אם נדרש שינוי תוכן — אופק כותב בקשה ספציפית.
3. אני מבצע ב-PR יחיד.

זה הופך את GSC מ-dashboard סביל למנוע אופטימיזציה פעיל.
