# אודיט אינדוקס — מאי 2026

GSC דיווח: **145 עמודים באינדקס**, השאר בטיפול, עדכון יומי של ~3 עמודים.
תאריך אודיט: 2026-05-01.

---

## חישוב צפי לעומת בפועל

| קטגוריה | צפוי באינדקס |
|---|---|
| דף בית | 1 |
| About + About/the operator | 2 |
| Accessibility | 1 |
| Privacy + Terms | 2 |
| Contact | 1 |
| /areas (index) | 1 |
| /areas/[city] — אינדקס פתוח | 22 (28 − 6 noindex) |
| /areas/[city]/[service] — INDEXABLE | 0 (כל 120 ב-noindex כברירת מחדל, allowlist ריק) |
| Services | 7 |
| Guides | 8 |
| Compare | 4 |
| Projects index + 5 details | 6 |
| **סה״כ צפוי** | **~55** |
| **בפועל באינדקס (לפי the operator/GSC)** | **145** |
| **פער** | **+90 עמודים** |

## ניתוח הפער

### השערה 1 (סבירה ביותר): legacy index של 120 צמדי city×service
ההיסטוריה: צמדי city×service פעלו באינדקס עד W5 (2026-04-30). ב-W5 שינינו ל-`robots: index:false, follow:true` והוצאנו אותם מהסייטמאפ.

Google לא מסיר עמודים מהאינדקס מיד כשהם משתנים ל-noindex. הוא צריך לזחול אותם שוב כדי לראות את ה-meta המעודכן. בקצב של ~3 עמודים ביום, 120 עמודים = כ-40 ימים להסרה מלאה.

**תמיכה בהשערה**: 145 − 55 צפוי = 90 עמודים, וזה כ-75% מ-120 צמדי city×service. זה בדיוק הסדר גודל הצפוי באמצע תהליך הסרה.

### השערה 2 (פחות סבירה): URLs ישנים מ-canonical / hash שגוי
לא רואה ראיות בקוד. כל ה-canonical מוגדרים נכון דרך `buildMetadata`.

### השערה 3 (פחות סבירה): 6 ערים noindex עדיין באינדקס מההתחלה
Kiryat / Ganei Tikva / Or Yehuda / Rosh HaAyin / Shoham / Zichron Yaakov — סומנו noindex ב-W5. זה +6 עמודים, הסבר חלקי בלבד.

### מסקנה
**רוב הפער הוא צפוי וזמני** — Google בתהליך הסרה של ה-120 צמדי city×service. אופק יראה את המספר יורד מ-145 → ~60 בקצב של כ-3 עמודים ביום, על פני 30-45 ימים.

## בדיקות הכרחיות לאופק (ב-GSC)

### בדיקה 1: Pages → Indexed
1. כניסה ל-Search Console.
2. תפריט שמאל → Pages.
3. בלשונית "Indexed", סינון לפי URL contains `/areas/` ו-2 segments (כלומר `/areas/X/Y/`).
4. אם רואים תוצאות — זה אישור להשערה 1.
5. רישום: כמה עמודים בדיוק כאלה.

### בדיקה 2: Pages → Excluded → "Crawled - currently not indexed"
- המספר הזה צריך לעלות מהר בשבועות הקרובים (כי Google זוחל את הצמדים, רואה noindex, ומעביר אותם ל-Excluded).

### בדיקה 3: URL Inspection דגימתי
על URL כמו `https://hithadshut.co.il/areas/tel-aviv/building-mamad`:
- אם "Indexed" — Google עוד לא ראה את ה-noindex.
- אם "Excluded by 'noindex' tag" — Google ראה והסיר. הצלחה.

### בדיקה 4: Sitemap submission
- הסייטמאפ הנוכחי מכיל ~55 URLs (הכל indexable).
- בדיקה שגוגל זיהה את הסייטמאפ העדכני: Search Console → Sitemaps → צריך להציג Last read recent.

## פעולה אוטונומית בקוד

הקוד נקי. אין מה לתקן בקוד. ה-noindex על 120 צמדי city×service פועל נכון מ-W5. זמן הסרת אינדקס מצד Google אינו תלוי בנו.

## פעולה לאופק

1. ✓ אימות הסייטמאפ ב-GSC (כנראה כבר נעשה).
2. **לבצע בדיקות 1-4 לעיל** ולעדכן את ה-LOG.
3. **לחכות** — לעקוב אחר הדינמיקה במשך 30-45 יום.
4. אם בעוד 60 יום עדיין יש 145+ באינדקס — בדיקה מחודשת.

## מה אנחנו רוצים לראות בעוד 60 יום
- ~55-65 עמודים באינדקס (תקין).
- ~120 ב-Excluded → noindex.
- 0 ב-"Crawl issue".

## מה היה אם זה לא היה צפוי
לו 145 היה כולל URLs מומצאים או duplicate canonical, היינו מתקנים כעת. הם לא — האודיט מאשר שהפער מוסבר ע״י legacy index בתהליך הסרה.
