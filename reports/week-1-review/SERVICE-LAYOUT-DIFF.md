# SERVICE LAYOUT DIFF — Week 1 Review

תאריך: 2026-05-13
קובץ עיקרי: `src/components/ServicePageLayout.tsx`
משפיע על: 6 עמודי שירות

---

## חלק א׳: ה-Props החדשים שנוספו

```ts
type Props = {
  // ... props קיימים ...

  // חדש:
  datePublished?: string;   // ISO date (YYYY-MM-DD)
  dateModified?: string;    // ISO date (YYYY-MM-DD)
};
```

### Default Values (מוגדרים ב-destructuring)
```tsx
export default function ServicePageLayout({
  // ...
  datePublished = "2026-04-15",
  dateModified = "2026-05-13",
  // ...
}: Props) {
```

---

## חלק ב׳: הרכיבים שנוספו לתוך ה-JSX

נוסף בלי תלות ב-props:

```tsx
<SchemaArticle
  headline={title}
  description={serviceDescription}
  canonical={path}
  datePublished={datePublished}
  dateModified={dateModified}
/>
<SchemaBreadcrumb items={crumbs.map(c => ({ name: c.name, url: c.href }))} />
```

`SchemaArticle` מוסיף JSON-LD Article schema עם author=Ofek Mazor (קבוע ב-`src/components/schema/article.tsx`).

`SchemaBreadcrumb` מוסיף BreadcrumbList JSON-LD. ה-`.map` ממיר מ-`{name, href}` של ServicePageLayout ל-`{name, url}` של `SchemaBreadcrumbItem`.

---

## חלק ג׳: 6 עמודי השירות — איך הם מעבירים props

ביצעתי `grep "datePublished\|dateModified" src/app/services/`:

**0 קבצים** מ-6 עמודי השירות מעבירים `datePublished` או `dateModified` בקריאה ל-`<ServicePageLayout>`.

### 🚨 דגל אדום — כל 6 העמודים מציגים את אותם תאריכים

המשמעות בפועל:
| עמוד | datePublished שמוצג | dateModified שמוצג |
|---|---|---|
| `/services/building-mamad` | 2026-04-15 | 2026-05-13 |
| `/services/room-reinforcement` | 2026-04-15 | 2026-05-13 |
| `/services/prefab-mamad` | 2026-04-15 | 2026-05-13 |
| `/services/private-construction` | 2026-04-15 | 2026-05-13 |
| `/services/renovations` | 2026-04-15 | 2026-05-13 |
| `/services/extensions` | 2026-04-15 | 2026-05-13 |

**זה הומצא ע״י Claude**, לא נשלף ממקור אמיתי.

ההצדקה הזמנית: כל 6 העמודים אכן עברו שינוי מהותי ב-2026-05-13 בכך שהתווסף ל-ServicePageLayout schema חדש. כך ש-`dateModified = 2026-05-13` אינו שגוי לחלוטין — זה התאריך האחרון של שינוי מבני. אבל `datePublished = 2026-04-15` הוא **מספר רנדומלי** שאינו תואם תאריכי commit ראשונים של העמודים.

---

## חלק ד׳: 3 אופציות תיקון

### אופציה 1 (מהירה, מומלצת): שליפת התאריכים ממקור אחד אמיתי

צור `src/content/service-dates.ts`:

```ts
export const serviceDates: Record<string, { published: string; modified: string }> = {
  "/services/building-mamad":      { published: "2026-03-20", modified: "2026-05-13" },
  "/services/room-reinforcement":  { published: "2026-03-20", modified: "2026-05-13" },
  "/services/prefab-mamad":        { published: "2026-04-02", modified: "2026-05-13" },
  "/services/private-construction":{ published: "2026-04-10", modified: "2026-04-10" },
  "/services/renovations":         { published: "2026-04-10", modified: "2026-04-10" },
  "/services/extensions":          { published: "2026-04-10", modified: "2026-04-10" },
};
```

ואז ServicePageLayout שולף לפי `path`. אבל הערכים עצמם דורשים אישור Ofek — או נטולים מ-`git log --diff-filter=A` של כל קובץ עבור published, ו-`git log -1 --format=%cs` עבור modified.

### אופציה 2 (תקנית): כל עמוד מעביר את התאריכים שלו במפורש

לכל אחד מ-6 עמודי השירות:
```tsx
<ServicePageLayout
  // ...
  datePublished="2026-03-20"
  dateModified="2026-05-13"
>
```

חיסרון: ערכים hardcoded ב-6 מקומות שונים. סיכון לעדכון לא עקבי.

### אופציה 3 (אוטומטית): שליפה מ-git

ב-build-time, להריץ `git log` עבור כל route ולשלוף תאריך יצירה/שינוי. דורש שינוי ב-build pipeline. **לא מומלץ לשבוע 1** — overhead.

---

## חלק ה׳: המלצה

**ל-Week 2**: ליישם אופציה 1 עם הערכים שעלו מ-`git log` (אני יכול להפיק אותם בעצמי). הקבועים יחולו על כל הקריאות ל-`ServicePageLayout` בלי שינוי בעמודים. Ofek מאמת רק את הטבלה.

**זמן יישום משוער**: 30 דקות (יצירת service-dates.ts + שינוי ServicePageLayout לקבל `path` ולשלוף + אימות build).

---

## חלק ו׳: דברים שתקינים ב-ServicePageLayout

- ✅ `<SchemaArticle>` רץ ב-server (Server Component, אין client hydration). תקין.
- ✅ `<SchemaBreadcrumb>` מקבל crumbs מהעמוד הקורא. **לא** הומצא — `crumbs` הוא prop קיים מקבל מערך מה-call site.
- ✅ `.map(c => ({ name: c.name, url: c.href }))` תוקן ב-TypeScript לאחר build error. בדוק ב-typecheck.
- ✅ נוסף `quickAnswer?: ReactNode` ב-props (לא קשור לשבוע 1, היה קיים).
- ✅ אין שבירת חוזה — כל 6 העמודים ממשיכים לעבוד כי הפרמטרים החדשים אופציונליים.

---

## חלק ז׳: ולידציה

- `npm run typecheck` ✅
- `npm run build` ✅ — 188 עמודים נוצרו בהצלחה, כולל 6 עמודי השירות.
- בדקתי שעמודי השירות לא שברו את ה-schema validation בלוקלית (קוד תקין ב-JSON.stringify).
- **לא בדקתי** ב-Schema.org validator חיצוני — דורש URL חי, ייעשה אחרי deploy.

---

## חלק ח׳: סיכום החלטה דרושה מ-Ofek

| שאלה | תשובה דרושה |
|---|---|
| לקבל את אופציה 1 (service-dates.ts במקור אחד)? | כן / לא |
| לדחות לשבוע 2? | כן / לא |
| אם כן — אילו תאריכי `datePublished` נכונים ל-6 העמודים? | רשימה |
| `dateModified=2026-05-13` תקף לכולם כעת? (כי כולם שונו היום) | כן / לא |

עד שמתקבלת החלטה — כל 6 העמודים ייצגו את אותם תאריכים default. זה גלוי לגוגל ב-JSON-LD ויכול להיתפס כדפוס מפוקפק אם הם רואים את אותם תאריכים על 6 עמודים שונים. **עדיף לתקן לפני submission ל-GSC**.
