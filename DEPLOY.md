# הוראות דיפלוי — hithadshut.co.il

מדריך שלב-אחר-שלב להעלאת האתר ל-Vercel וחיבור הדומיין. מיועד למי שלא אשף טכני — פשוט להעתיק-להדביק את הפקודות.

---

## שלב 0 — כלים שצריך להתקין פעם אחת

### 1. GitHub CLI
פתח PowerShell (כ-Administrator) והרץ:
```powershell
winget install --id GitHub.cli -e
```
סגור ופתח PowerShell מחדש, ואז:
```powershell
gh auth login
```
בחר: GitHub.com → HTTPS → Yes (authenticate Git) → Login with a web browser. העתק את הקוד שמופיע, לחץ Enter, התחבר בדפדפן.

### 2. Vercel CLI
```powershell
npm i -g vercel
vercel login
```
התחבר עם אותו חשבון שבו תרצה שהאתר ישב (Gmail / GitHub / אימייל).

---

## שלב 1 — Git + העלאה ל-GitHub

פתח טרמינל בתיקיית הפרויקט (`hithadshut-website`) והרץ:

```bash
git init
git add .
git commit -m "Initial commit: Hithadshut website"
gh repo create hithadshut-website --public --source=. --push
```

בסוף תקבל URL של הריפו — שמור אותו.

---

## שלב 2 — דיפלוי ל-Vercel

באותה תיקייה:

```bash
vercel
```
ענה:
- Set up and deploy? **Y**
- Which scope? בחר את החשבון שלך
- Link to existing project? **N**
- Project name? **hithadshut-website** (או Enter לברירת מחדל)
- In which directory is your code located? **./** (Enter)
- Want to modify settings? **N**

זה יעשה deploy ל-Preview. אחרי שעובד, עלה ל-Production:
```bash
vercel --prod
```

קיבלת URL כזה: `https://hithadshut-website-xxx.vercel.app`. בדוק שהכל עובד.

---

## שלב 3 — חיבור הדומיין hithadshut.co.il

### ב-Vercel Dashboard
1. היכנס ל-[vercel.com/dashboard](https://vercel.com/dashboard)
2. לחץ על הפרויקט `hithadshut-website`
3. Settings → Domains
4. הוסף **hithadshut.co.il** ואחרי זה **www.hithadshut.co.il**
5. Vercel יראה לך רשומות DNS שצריך להוסיף — **שמור את הערכים המדויקים שהוא מציג**. לרוב:
   - **A record** עבור `@` (apex) → `76.76.21.21`
   - **CNAME** עבור `www` → `cname.vercel-dns.com`

### אצל רשם הדומיין (GoDaddy / Name.com / ישראל אינטרנט / וכו׳)
1. היכנס לחשבון הרשם.
2. לך ל-**DNS Management** של `hithadshut.co.il`.
3. מחק רשומות A/CNAME ישנות אם יש (עבור `@` ו-`www`).
4. הוסף את הרשומות שראית ב-Vercel בצעד הקודם.
5. שמור.

### המתנה
DNS יכול לקחת בין 10 דקות ל-24 שעות להתפרס. ב-Vercel יופיע ✓ ירוק ליד הדומיין כשהכל מחובר. תעודת SSL מונפקת אוטומטית.

---

## שלב 4 — משתני סביבה (אופציונלי)

אם תרצה שלידים יישלחו במייל או ל-Zapier:

ב-Vercel Dashboard → Settings → Environment Variables, הוסף:
- `RESEND_API_KEY` — מפתח מ-[resend.com](https://resend.com) (חינם עד 3000 מיילים/חודש)
- `LEAD_FROM_EMAIL` — `Hithadshut <leads@hithadshut.co.il>`
- `LEAD_WEBHOOK_URL` — אם רוצים לשלוח גם ל-Zapier/Make

אחרי הוספת משתנים, הרץ מחדש:
```bash
vercel --prod
```

---

## שלב 5 — עדכונים עתידיים

כל שינוי בקוד:
```bash
git add .
git commit -m "תיאור השינוי"
git push
```
Vercel יעשה deploy אוטומטית תוך דקה.

---

## בדיקות סופיות אחרי שהדומיין עולה

- [ ] `https://hithadshut.co.il` נטען ומציג את דף הבית
- [ ] `https://www.hithadshut.co.il` עושה redirect ל-apex (או להיפך — העיקר שעובד)
- [ ] מנעול ירוק (SSL)
- [ ] בדוק שליחת טופס ליצירת קשר ובדוק ב-Vercel Logs שהליד התקבל
- [ ] `https://hithadshut.co.il/sitemap.xml` — מציג XML עם כל הדפים
- [ ] `https://hithadshut.co.il/robots.txt` — מציג כללי זחילה
- [ ] Google Search Console: הוסף את האתר, שלח את ה-sitemap

---

## תמיכה ב-Vercel Logs

צפייה בלידים נכנסים:
```bash
vercel logs --follow
```
או: Dashboard → Project → Logs.
