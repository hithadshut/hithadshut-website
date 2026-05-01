# החלפת ה-illustrations בתמונות אמיתיות (5 דקות, ללא קוד)

כעת בעמוד `/projects` ובכל מקום באתר רואים **illustrations וקטוריים** של 5 הפרויקטים. הם נראים מקצועיים ומובחנים, אבל הם לא תמונות אמיתיות.

ברגע שיש לך 5 תמונות JPG אמיתיות מהפרויקטים, ההחלפה היא 4 צעדים:

## צעד 1 — שמירת התמונות
שמור את 5 התמונות במחשב שלך, עם השמות בדיוק:

| שם הקובץ | תיאור |
|---|---|
| `private-villa-structure.jpg` | וילה דו-קומתית בשלב שלד (קונסטרוקציה + פיגום) |
| `migunit-backyard-finished.jpg` | מיגונית מותקנת בחצר אחורית |
| `extension-roof-pour.jpg` | יציקת תקרה לתוספת בנייה |
| `mamad-foundation-rebar.jpg` | יסודות וזיון פלדה לפני יציקה לתוספת ממ״ד |
| `mamad-walls-cast.jpg` | קירות ממ״ד צמוד יצוקים מבטון מזוין |

**כללי קובץ:**
- JPG בלבד (לא PNG, לא HEIC).
- רוחב לפחות 1200 פיקסלים.
- גודל קובץ עד 1.5MB (אם יותר — קומפרסיה ב-tinypng.com).
- שמות באנגלית, אותיות קטנות, עם מקפים. **לא** עם רווחים, לא בעברית.

## צעד 2 — העלאה ל-GitHub
1. פתח https://github.com/hithadshut/hithadshut-website
2. נווט לתיקייה: `public/projects/`
3. לחץ **Add file** → **Upload files**
4. גרור את 5 תמונות ה-JPG
5. בתחתית הדף — בשורה "Commit changes" — תקליד `chore(projects): upload 5 real photos`
6. לחץ **Commit changes**

## צעד 3 — flip של ההגדרה
1. פתח את הקובץ: https://github.com/hithadshut/hithadshut-website/blob/master/src/content/projects.ts
2. לחץ ✏️ (Edit)
3. ב-5 הפרויקטים, החלף:
   - `image: "/projects/<slug>.svg"` → `image: "/projects/<slug>.jpg"`
   - `imageType: "illustration"` → `imageType: "photograph"`
4. בתחתית — שורה "Commit changes" — `chore(projects): switch to real photographs`
5. לחץ **Commit changes**

## צעד 4 — Vercel deploy
Vercel יעלה את השינוי אוטומטית תוך כ-2 דקות. לאחר מכן:
- עמוד הבית — `ProjectsTeaser` יראה את 3 התמונות הראשונות.
- `/projects` — יראה את כל 5.
- `/projects/<slug>` — תמונה גדולה לכל פרויקט עם `ImageObject` schema לגוגל.
- 5 עמודי שירות — כל אחד יכלול את הפרויקט הרלוונטי שלו (`ServiceProjectShowcase`).

## פרטיות
- אין כתובת מלאה בתיאור — רק עיר ושכונה.
- בלי אנשים בפריים ללא הסכמת בעל הבית בכתב.
- מספרי בית, שלטים פרטיים — מטשטשים לפני העלאה.

## תקלה? בעיה?
שלח לי הודעה עם השם של הקובץ ואני אסביר. אל תשנה את שמות הקבצים — הקוד מצפה להם בדיוק כפי שמופיעים בטבלה.
