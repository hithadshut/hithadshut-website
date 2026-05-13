# YAVIL PRICING — Source Verification Report

תאריך: 2026-05-13
מטרה: לאמת את ה-decision של Ofek (Unit-Only 90-130K / All-In 180-250K) בפני 2+ מקורות ציבוריים לפני commit ל-`pricing.ts`.
תוצאה: **Gate failed לטווח All-In.** עוצרים. דרושה החלטה.

---

## מתודולוגיה
6 WebFetches + 2 WebSearches על המקורות שהמנדט הציע: mymigun.co.il, midrag.co.il, gueta.org.il, container.org.il, וגם waissman.co.il + arvivm.co.il + mivne.com שעלו ב-SERP.

---

## ממצאים פר-מקור

### 1. [mymigun.co.il/מחיר-ממד-מוכן/](https://mymigun.co.il/%D7%9E%D7%97%D7%99%D7%A8-%D7%9E%D7%9E%D7%93-%D7%9E%D7%95%D7%9B%D7%9F/)
- **All-In (delivered)**: ~₪125,000 ממוצע לבית פרטי, כולל הובלה ומנוף. עד ₪160,000+ לפתרון קבע, ללא מע"מ.
- **Component breakdown**: תכנון+הנדסה+אישור פקע"ר ₪15,000 · בדיקות מעבדה ₪2,000 · יסודות (תלוי קרקע) ₪20,000–30,000 · חיבור חשמל ₪1,500.
- **Unit-Only**: לא מופרד.

### 2. [gueta.org.il/cost-mamad/](https://gueta.org.il/cost-mamad/)
- **Unit-Only (יחידה חדשה)**: ₪100,000–140,000. (יד שנייה מ-₪60,000.)
- **All-In (composite)**: ₪107,000–163,000+ (יחידה + הובלה+מנוף ₪2,000–8,000 + חיבורי תשתית ₪5,000–15,000).

### 3. [waissman.co.il/mmd-mobile/](https://waissman.co.il/mmd-mobile/)
- **Compliant unit installed**: ₪120,000–150,000 (כולל דלת, חלון גז, הכנה למזגן, חיבור חשמל, אישור טופס 4).
- **Plus**: הובלה+מנוף ₪10,000–15,000 (יותר אם גישה קשה) · סינון חובה ₪3,000–5,000.
- **All-In composite**: ₪133,000–170,000 לפרויקט סטנדרטי.

### 4. [container.org.il/כמה-עולה-לבנות-ממד](https://www.container.org.il/%D7%9B%D7%9E%D7%94-%D7%A2%D7%95%D7%9C%D7%94-%D7%9C%D7%91%D7%A0%D7%95%D7%AA-%D7%9E%D7%9E%D7%93/)
- **לא מכסה יביל ספציפית.** מציג ממ"ד בנייה רטובה ₪70,000–200,000+ לפי גודל.

### 5. [midrag.co.il/Content/Price/27088](https://www.midrag.co.il/Content/Price/27088)
- **לא מכסה יביל ספציפית.** ממ"ד בנייה רטובה: ₪118,000–197,500 (9–12 מ"ר), ללא מע"מ.

### 6. [arvivm.co.il/ממד-יביל](https://arvivm.co.il/%D7%9E%D7%9E%D7%93-%D7%99%D7%91%D7%99%D7%9C/)
- "טווח מחירים החל מ-₪30,000" בלבד. ללא פירוט תרחיש.

### 7. WebSearch aggregate (Google snippets, 2026)
- "estimated price range for a mobile shelter is ₪100,000–140,000 (including standard transportation and placement)" — מקור: ?-מצרף מכמה מקורות.
- "cost of building a 9 m² shelter according to HFC standards including building permit: ₪180,000–220,000" — זה לבנייה רטובה, **לא יביל**.

---

## טבלה משוקללת

| תרחיש | מקור 1 | מקור 2 | מקור 3 | טווח מאוחד |
|---|---|---|---|---|
| **Unit-Only** | gueta: 100–140K | (mymigun composite: ~80–100K) | (arvivm: from 30K, broad) | **60–140K** |
| **All-In (סטנדרטי)** | mymigun: avg 125K, up to 160K | gueta: 107–163K | waissman: 133–170K | **107–170K** |
| **All-In (מקסימום עם premium engineering)** | composite מ-mymigun (foundation+eng+lab) | + waissman max transport | + edge case difficult site | **170–220K** plausible, ל-240K extreme |

---

## הפער מול ה-Decision של Ofek

| תרחיש | Ofek decision | Verified market | פער |
|---|---|---|---|
| Unit-Only | 90–130K | 60–140K (gueta 100–140) | ✓ נופל בתוך הטווח |
| All-In | 180–250K | 107–170K סטנדרטי, עד 220K עם premium | ✗ הטווח גבוה ב-25–35% מהפרסום הציבורי הסטנדרטי |

---

## הקשר נוסף: התוכן הקיים שלנו

`src/app/press/page.tsx` שורה 48 (ציטוט שלך מהעבר):
> "ההצעות המסחריות לממ"ד יביל ב-80,000 ש"ח כולל הכל הן כמעט תמיד מטעות. המחיר הזה לא כולל הובלה (10,000-30,000 ש"ח), הנפה (3,000-15,000 ש"ח), הכנת בסיס בטון (8,000-20,000 ש"ח), ולפעמים גם לא את אישור פיקוד העורף לכתובת. **במחיר אמיתי ממ"ד יביל מתחיל ב-130,000 ש"ח כולל הכל**."

הציטוט שלנו אומר "מתחיל ב-130K כולל הכל" — לא 180K. סתירה פנימית.

---

## 3 פתרונות אפשריים

| # | פתרון | יתרונות | חסרונות |
|---|---|---|---|
| **A** | להשאיר 180-250K | תומך ב-USP "transparency"; מציג סיכון עליון | חוסר תמיכה ב-2 מקורות; סיכון להיתפס outlier; סתירה לציטוט press שלנו |
| **B** | להוריד ל-130-220K | מותאם לציטוט press הקיים; ניתן לאמת מ-3 מקורות | פחות דרמטי כ-USP; אבל עדיין מראה פער ענק מ-Unit-Only |
| **C** | פירוק ל-3 שכבות: Unit-Only (90-130K) / Standard All-In (130-170K) / Premium All-In (170-220K) | הכי שקוף; הכי AI-citation-friendly; כל שכבה ניתנת לאימות מ-2+ מקורות | מורכב יותר; דורש שינוי קוד גדול יותר |

---

## המלצת Claude (משקל יחסי)

**אפשרות C** מציגה את הסיפור הטוב ביותר עבור AI citation, כי היא מכבדת את הניואנס שכל מקור משדר ולא נשמעת "outlier". יוצרת 3-way comparison table ב-`pricing.ts` שאפשר להציג בכל עמוד.

**אפשרות B** היא הכי מהירה לבצע ועדיין מספקת USP.

**אפשרות A** היא בלתי-ניתנת-להגנה מבחינת sourcing הציבורי. אם הולכים בכל זאת, חייבים disclaimer ב-pricing.ts: "טווח עליון משקף תרחישי premium engineering + difficult site, לא ממוצע שוק."

---

## עצירה

לא מבצע Task 2.2 (Yavil Pricing Split) עד שיש החלטה. ה-pre-commit hook יעצור אותי בכל מקרה אם אנסה לכתוב מחיר ל-`pricing.ts` ללא verified sources.

ההמשך תלוי בתשובת Ofek: **A / B / C**.
