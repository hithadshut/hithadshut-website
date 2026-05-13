# OFEK CLAIMS TABLE — Verification Checklist

תאריך: 2026-05-13
מטרה: לעבור 14 טענות שמופיעות באתר ולסמן לכל אחת **✓ (אשרר ומשאיר)** או **✗ (מוחק/מרכך)**.

הוראות שימוש:
1. עברו על כל שורה.
2. בעמודה "החלטת Ofek" סמנו `✓` או `✗`. אם `✗`, רשמו בקצרה מה הניסוח החלופי.
3. שלחו את הקובץ חזרה ל-Claude. כל `✗` יביא לעריכת `/about/ofek-mazor` (וכל מקום אחר שמשתמש באותה טענה).

---

## 14 הטענות

| # | טענה בעמוד | מה זה מבטיח בפועל | סיכון אם לא מקוים | החלטת Ofek (✓/✗ + הערה) |
|---|---|---|---|---|
| 1 | "בעלי רישיון מתווך מקרקעין 3246290" | אופק מוסמך כמתווך לפי חוק | אם מספר הרישיון לא נכון או לא בתוקף — הטעיה. | ✓ |
| 2 | "כל לקוח מקבל ליווי ישיר ממנהל הפרויקט" | אופק אישית מנהל את הפנייה ועד מסירה | אם החברה גדלה ויש מנהלי פרויקט נוספים — לרכך ל"מנהל פרויקט מהחברה". | ✓ |
| 3 | "אותו אדם שעונה לטלפון הוא גם זה שמפקח על היציקה באתר" | זהות מנהל הקשר = מנהל הביצוע | אם בפועל יש הפרדה (משרד עונה, מהנדס מפקח) — הטעיה. | ✓ |
| 4 | "מחיר פריט פריט. כל מרכיב בשורה נפרדת בהצעה" | הצעות המחיר מפורטות לחלוטין | אם ההצעות "חבילה אחת" — סתירה. | ✓ |
| 5 | "כל ממ״ד עובר בדיקת אטימות לפני מסירה" | תהליך מובנה, לא אופציונלי | אם זה לא תהליך פעיל בכל פרויקט — הצהרה כוזבת. | ✓ |
| 6 | "ההגשה לפיקוד העורף מבוצעת על ידי מהנדס מורשה" | יש מהנדס מורשה ספציפי לחברה | אם משתמשים במהנדס פר-פרויקט — לתקן הניסוח. | ✓ |
| 7 | "אחריות: שנה תקלות, 3 שנים מערכות, 7 שנים קונסטרוקציה" | חוזה החברה תואם חוק המכר (דירות) | אם החוזה מציע אחריות אחרת — סתירה. | ✓ |
| 8 | "תהליך אישור פיקוד העורף 14–21 ימי עבודה" | טווח זמן מובטח | אם לא מאומת מ-oref.org.il — להסיר/להוסיף "טיפוסית" וקישור למקור. | ✓ |
| 9 | "ההצעה תוך 3 עד 7 ימי עבודה" | SLA פנימי של החברה | אם בפועל לוקח יותר — הטעיה. | ✓ |
| 10 | "אם עלות יסודות על קרקע בעייתית תגדיל את המחיר ב-15%" | המספר 15% מדויק | מספר המחשה. אם מטעה — לרכך ל"באחוזים משמעותיים". | ✓ |
| 11 | "תמונות מהאתר, דוחות התקדמות, תיעוד" | ערוץ תקשורת פעיל ללקוחות | אם אין תהליך מובנה — להסיר/לרכך. | ✓ |
| 12 | "אין שרשרת קבלני משנה שמטשטשת אחריות" / "אין העברה לקבלן משנה אנונימי" | קבלן הביצוע הוא מי שחתום על החוזה | אם בפועל יש קבלני משנה — לרכך ל"שקופים ומזוהים". | ✓ |
| 13 | "ההנהלה נכנסת לפרויקטים, ביקורת באתר בשלבים קריטיים: יסודות, הרמת קירות, יציקת תקרה, התקנת דלת הדף" | תהליך מעקב מובנה ב-4 נקודות | אם זה לא נעשה בכל פרויקט — לרכך. | ✓ |
| 14 | "החברה שבנתה היא גם זו שחוזרת" (שירות אחרי אחריות) | אופק/החברה זמינים לשירות לטווח ארוך | אם החברה לא מבטיחה זמינות אחרי 7 שנים — לרכך. | ✓ |

---

## Cross-cuts (לא בטבלה, אבל לאישור)

### א. סתירת מחירים שכבר תוקנה ב-`pricing.ts`
- **ממ"ד תקני**: 160,000–220,000 ₪ + מע"מ (canonical).
- **שיפור מיגון**: 40,000–150,000 ₪ + מע"מ (canonical).
- **ממ"ד יביל**: 180,000–250,000 ₪ + מע"מ (canonical).

### DECISION (Ofek, 2026-05-13): Show both prices separately.
- **Unit-Only**: 90-130K (from-factory only).
- **All-In**: 180-250K (foundation + delivery + crane + connections + sealing + HFC approval).
- Rationale: pricing-transparency USP. Most competitors hide the gap.

⚠️ **Sourcing gate (Claude, 2026-05-13)**: Day 2 Task 2.2.1 requires 2 verified public sources per price tier before committing. After 5 WebFetches (mymigun.co.il, gueta.org.il, container.org.il, midrag.co.il, waissman.co.il, arvivm.co.il):
- **Unit-Only 90-130K**: 1 partial-match source (gueta lists 100-140K for new mobile units). Defensible.
- **All-In 180-250K**: **0 sources** publish this range directly. Public quotes top out at ~170K (waissman 120-150K + 13-20K transport/crane + 3-5K filtration). Our own prior content (`/press`) said "starts at 130K all-in".
- Synthesizing every cost component from mymigun + waissman (unit + foundation 20-30K + HFC eng 15K + lab 2K + crane up to 15K + connections 5-15K + sealing 3-5K + electrical 1.5K) reaches 175-220K. Maxing edge cases (difficult terrain, complex logistics) plausibly reaches 240K. So 180-250K is **defensible as a worst-case all-in**, but not as the typical/average all-in.

**Three paths forward — Ofek picks one before Task 2.2 proceeds:**
- **A. Keep 180-250K as-is.** Position as "true all-in worst-case scenario, including premium engineering and difficult-site logistics." Risk: most competitor sites show lower numbers, so AI engines may flag us as outlier high. Sourcing in pricing.ts: composite synthesis from 4 sources (mymigun, waissman, gueta, midrag).
- **B. Adjust to 130-220K** as the verifiable all-in range. Lower bound matches our own prior content; upper bound is the synthesized max. Sourcing: defensible from 3 sources directly.
- **C. Split further into 3 tiers**: Unit-Only (90-130K) / Standard All-In (130-170K, market-typical) / Premium All-In (170-220K, edge-case with full engineering). 3-tier honesty plays even stronger to AI citation magnetism.

החלטה דרושה לפני merge.

### ב. תאריכי schema (`service-dates.ts`)
התאריכים נשלפו אוטומטית מ-`git log`:

| עמוד | datePublished | dateModified |
|---|---|---|
| `/services/building-mamad` | 2026-04-15 | 2026-05-13 |
| `/services/room-reinforcement` | 2026-04-15 | 2026-05-13 |
| `/services/prefab-mamad` | 2026-04-15 | 2026-05-13 |
| `/services/private-construction` | 2026-04-15 | 2026-05-07 |
| `/services/renovations` | 2026-04-15 | 2026-05-07 |
| `/services/extensions` | 2026-04-15 | 2026-05-07 |

האם 2026-04-15 הוא תאריך הפרסום המקורי האמיתי, או שזה גם תאריך אוטומטי (commit ראשון של הקובץ ב-repo, לא תאריך כתיבת התוכן)?

אם זה לא מדויק — נדרשת רשימת תאריכים אמיתיים מ-Ofek.

---

## Workflow

1. Ofek קורא, מסמן ✓/✗.
2. שולח את הקובץ עם ההחלטות.
3. Claude מבצע את התיקונים ב-branch הקיים (לא ב-master).
4. Claude מעדכן את `OFEK-PAGE-CONTENT.md` ל"מהדורה סופית".
5. Final Review Checklist ב-PR מתעדכן.
6. Merge.
