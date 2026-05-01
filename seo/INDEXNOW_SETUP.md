# IndexNow — הקמה ושימוש

IndexNow הוא פרוטוקול שמודיע ל-Bing/Yandex/Naver/Yep "תזחל את העמוד עכשיו".
**Google אינו משתתף בו ישירות**, אך הסיגנל מגיע ל-Bingbot מהר, וזה משפיע על ChatGPT Search ו-Microsoft Copilot.

---

## סטטוס נוכחי

✓ **כבר מותקן ופועל** באתר:
- מפתח אימות: `public/a1b2c3d4e5f678901234567890abcdef.txt`
- מודול: `src/lib/indexnow.ts`
- סקריפט: `scripts/notify-indexnow.ts`
- npm script: `npm run notify-indexnow`

הסקריפט קורא את הסייטמאפ הפרוס (`https://hithadshut.co.il/sitemap.xml`), מחלץ את כל ה-URLs, ושולח אותם ל-IndexNow API.

---

## איך משתמשים

### ידני (אחרי כל deploy משמעותי)
```bash
npm run notify-indexnow
```

הפלט הצפוי:
```
[indexnow] fetching sitemap: https://hithadshut.co.il/sitemap.xml
[indexnow] submitting 56 URLs to IndexNow
[indexnow] response: 200 OK (submitted 56)
```

### אוטומטי בעתיד (אופציונלי)
אם אופק רוצה שכל push ל-master יפעיל את ה-IndexNow אוטומטית, אפשר להוסיף:

#### אופציה א: Vercel postdeploy hook
ב-Vercel project settings → Build & Development Settings → Build Command, להוסיף:
```bash
npm run build && npm run notify-indexnow || true
```

`|| true` כדי שכישלון של notify לא יפיל את ה-build (זה לא הקריטי).

#### אופציה ב: GitHub Action
הוספת `.github/workflows/notify-indexnow.yml` שירוץ אחרי deploy מוצלח.

#### המלצה
**ידני בינתיים.** רוב ה-deploys לא צריכים IndexNow ping (לדוגמה, שינוי schema פנימי). הפעלה ידנית כשמשנים content משמעותי (מדריך חדש, עדכון מחיר) היא נכונה יותר.

---

## מתי להריץ
| שינוי | להריץ? |
|---|---|
| מדריך חדש | ✓ כן |
| עמוד שירות חדש | ✓ כן |
| עיר חדשה ב-/areas | ✓ כן |
| תוכן עיקרי בדף הבית | ✓ כן |
| עדכון מחיר ב-mamad-cost | ✓ כן |
| עדכון KeyStats | אופציונלי |
| תיקון typo | לא |
| שינוי schema פנימי | לא |
| refactor של קוד ללא שינוי תוכן | לא |

---

## מגבלות

- **Bing/Yandex/Naver/Yep** — מקבלים את הסיגנל.
- **Google** — לא מקבל. ל-Google רק GSC + sitemap.xml.
- **Quota** — Bing מאפשר 10,000 URLs ביום. אנחנו רחוקים מהגבול.

---

## מפתח אימות

הקובץ `public/a1b2c3d4e5f678901234567890abcdef.txt` מכיל את המפתח עצמו (string זהה לשם הקובץ, פחות `.txt`).

זה דורש מ-IndexNow לוודא בעלות על הדומיין:
1. אנו שולחים POST עם key + keyLocation.
2. IndexNow מבקר ב-keyLocation.
3. אם התוכן זהה ל-key — מאומת.

**אסור לשנות** את המפתח בלי לעדכן גם את `INDEXNOW_KEY` ב-`src/lib/indexnow.ts` וגם את שם הקובץ ב-`public/`.

---

## בדיקה שהמפתח חי
```bash
curl -i https://hithadshut.co.il/a1b2c3d4e5f678901234567890abcdef.txt
```
צפוי: `200 OK` + תוכן `a1b2c3d4e5f678901234567890abcdef`.

---

## למה לא Yandex.Webmaster ו-Bing.Webmaster ישירות?

IndexNow מעיף את הצורך לרשום פרטנית בכל פלטפורמה. עדיין שווה (P1):
- **Bing Webmaster Tools** — אימות הדומיין מאפשר לראות גם את הצד הניתוחי (= analytics) ולא רק לדחוף URLs.
- **GSC** — כבר אומת.

**B-003** עדיין פתוח (אימות Bing Webmaster) — לא חוסם, אך משלים את התמונה.
