# Google Business Profile — Setup content

GBP must be created and managed by Ofek personally at
<https://google.com/business>. Google ties the profile to the owner's
Google account and requires phone/postcard verification. Claude Code
prepared the content — Ofek does the setup.

## Profile fields

### Business name
התחדשות בינוי ויזמות

> **Important:** Use the exact legal name. Adding keywords ("בניית
> ממ״ד | התחדשות בינוי ויזמות") is a violation of GBP terms and gets
> profiles suspended. Brand name only.

### Primary category
**General Contractor** (קבלן ראשי)

### Secondary categories (max 9)
1. Construction Company
2. Real Estate Agency
3. Building Restoration Service
4. Architect _(if Ofek's relationship with an architect is formalized)_
5. Concrete Contractor
6. Project Management

> Pick categories Google offers — don't free-text. Start with 4 and add
> more only after 30 days of clean profile activity.

### Phone number
083-006-068

> Same number as the website. Must match exactly to maintain NAP
> consistency.

### Website
https://hithadshut.co.il

### Address

> **Decision needed from Ofek:** Is Hithadshut a service-area business
> (visits clients on-site, no walk-in office) or storefront? If
> service-area only, **do not display a physical address**. Set the
> service area to: Tel Aviv District, Center District, Jerusalem
> District (or wherever Ofek operates). This is the correct setup for
> contractors.

### Service area (if service-area business)
- מחוז תל אביב
- מחוז המרכז
- מחוז ירושלים
- _(add or remove regions per actual coverage)_

### Hours
- ראשון 08:00–19:00
- שני 08:00–19:00
- שלישי 08:00–19:00
- רביעי 08:00–19:00
- חמישי 08:00–19:00
- שישי 08:00–13:00
- שבת — סגור

> Match the hours in `src/lib/schema.ts` `localBusinessJsonLd()` exactly.

---

## Business description (750 character limit)

```
התחדשות בינוי ויזמות — חברת בנייה לממ״דים, מיגון, בנייה פרטית
ושיפוצים, ומלווה דיירים בהתחדשות עירונית. בעלים: אופק מזור,
מתווך מקרקעין מוסמך (רישיון 3246290).

מבצעים בעצמנו: בניית ממ״ד תקני (לפי תקן 4422), ממ״ד יביל מאושר
פיקוד העורף, שיפור מיגון לחדר קיים, בנייה פרטית של בתים ווילות,
שיפוצים מקיפים והרחבות בנייה. ליווי דיירים בפינוי בינוי, חלופת
שקד ותמ״א 38.

חוזה אחד, צוות אחד, אחריות אחת — מהשיחה הראשונה ועד מסירת
המפתחות. ייעוץ ראשוני ללא עלות. מקבלים שיחות עד שעות הערב.
```

(~470 תווים — תחת המגבלה של 750)

---

## Photos (Ofek to upload — minimum 10)

GBP rewards profiles with diverse, high-quality photos. Aim for 15+ on
launch and 1-2 fresh per week thereafter.

### Required uploads
1. **Logo** — `/logo-icon-square.png` (Google requires square logo, 250×250 minimum). Upload as the profile logo.
2. **Cover photo** — landscape construction site shot or completed mamad. 1080×608 minimum.
3. **Profile photo of Ofek** — `/ofek-mazor.jpg` already exists. Upload as the owner photo.
4. **Office or workspace** — even if home office; Google verifies the
   business has a real workspace.

### Project photos (5-7)
Upload best-of from completed work. Use the project assets already in the repo:
- `/projects/private-villa-structure.svg` _(if a JPEG version exists)_
- `/projects/migunit-backyard-finished.svg`
- `/projects/extension-roof-pour.svg`
- `/projects/mamad-foundation-rebar.svg`
- `/projects/mamad-walls-cast.svg`

For each photo, fill the alt-text in GBP with a real Hebrew caption:
- "ממ״ד תקני בבית פרטי בכפר סבא, יציקת קונסטרוקציה"
- "שיפור מיגון בדירה ברמת גן, החלפת חלון ודלת הדף"
- etc.

### Team / process photos (2-3)
- Ofek on a job site with hard hat
- Engineering plans review with architect
- Final delivery / handover

> **Don't:** stock photography. GBP detects stock images via reverse
> search and downgrades the profile. Use only real Hithadshut work.

---

## First 5 posts (publish weekly during onboarding)

### Post 1 — "Welcome / about" (week 1)
**Type:** Update
**Title:** הצטרפנו ל-Google Business Profile
**Body:**
```
התחדשות בינוי ויזמות — חברת בנייה לממ״דים והתחדשות
עירונית. אופק מזור, מתווך מקרקעין מוסמך (3246290),
מנהל את הפרויקטים אישית. ייעוץ ראשוני ללא עלות.
083-006-068
```
**CTA button:** Call

### Post 2 — Educational (week 2)
**Type:** What's New
**Title:** למה לא להתחיל לבנות ממ״ד לפני אישור פיקוד העורף
**Body:**
```
הטעות הכי יקרה בפרויקט ממ״ד: להתחיל יציקה לפני
שאישור פיקוד העורף בידיים. אם פקע״ר חוזר עם הערות
תכנוניות אחרי תחילת ביצוע, ייתכן שתידרשו לפרק עבודה
שכבר נעשתה. האישור מגיע תוך 14 ימי עבודה במסלול פטור.
```
**CTA button:** Learn more → link to `/guides/home-front-command-approval`

### Post 3 — Promotional (week 3)
**Type:** Offer
**Title:** ייעוץ ראשוני ללא עלות לפני בניית ממ״ד
**Body:**
```
לפני שחותמים על הצעה לבניית ממ״ד — נשמח לתת חוות
דעת מקצועית בחינם. סיור באתר, בדיקת היתכנות, אומדן
ראשוני. ללא התחייבות.
```
**CTA button:** Book

### Post 4 — Project showcase (week 4)
**Type:** Update / Photo
**Title:** [שם פרויקט מהשטח] — מסירה השבוע
**Body:**
```
ממ״ד תקני [גודל] מ״ר ב-[עיר]. [פרט מקצועי על הפרויקט,
e.g., "החיזוק הקונסטרוקטיבי דרש משאבת בטון מהצד
האחורי של הבית כי הגישה הקדמית סגורה לעגורן."]
זמן ביצוע: [X שבועות]. מסירה עם תיק מסמכים מלא.
```
Photo from the project.
**CTA button:** Call

### Post 5 — Educational (week 5)
**Type:** What's New
**Title:** ההבדל בין ממ״ד לחמ״ד — מה תקני באמת
**Body:**
```
״חמ״ד״ אינו סיווג רשמי של פיקוד העורף. הצעה ל״חמ״ד״
ללא ציון של תקן 4422 — לרוב מתארת שיפור מיגון, לא
ממ״ד תקני. ההבדל במחיר 50,000-150,000 ₪. דרשו את
הסיווג בכתב לפני חתימה.
```
**CTA button:** Learn more → link to `/compare/mamad-vs-hamad`

---

## Q&A — pre-fill 5 common questions

GBP allows the business to publish Q&A. Pre-fill these so they appear before
randoms ask:

**Q: כמה עולה לבנות ממ״ד בבית פרטי?**
A: ממ״ד תקני בבית פרטי: 160,000-220,000 ₪ + מע״מ. ממ״ד יביל: 90,000-130,000 ₪ + עלויות הובלה והכנת תשתית. שיפור מיגון: 50,000-120,000 ₪. אצלנו הצעת מחיר מפורטת לפי הרכיבים, ייעוץ ראשוני ללא עלות. 083-006-068

**Q: כמה זמן לוקח לבנות ממ״ד?**
A: במסלול פטור מהיתר: 2-4 חודשים מתום התכנון ועד מסירה (אישור פקע״ר עד 14 ימי עבודה + ביצוע 6-10 שבועות). במסלול היתר רגיל: 6-9 חודשים.

**Q: איפה אתם פועלים?**
A: בכל הארץ — מחוז תל אביב, מרכז, ירושלים והשרון. אנחנו חברת בנייה (לא יזמים), מבצעים בעצמנו עם צוות קבוע.

**Q: יש לכם רישיון קבלן?**
A: כן. החברה רשומה ברשם הקבלנים, מתווך מקרקעין מוסמך (רישיון 3246290 — אופק מזור, המנכ״ל). תיק רישיונות מלא מצורף לכל הצעת מחיר.

**Q: האם אתם מבצעים שיפור מיגון או רק ממ״ד חדש?**
A: שניהם. אנחנו מבצעים ממ״ד תקני, ממ״ד יביל, ושיפור מיגון לחדר קיים — לפי מה שמתאים לבית. הייעוץ הראשוני בודק איזה פתרון נכון לבית שלכם.

---

## Reviews strategy

GBP rankings depend heavily on review count + recency + reply rate.

1. **First 30 days:** Ask 5-10 satisfied past clients to leave a review.
   Send the GBP review link via WhatsApp with a short personal message.
2. **Ongoing:** After every project handover, ask the client to leave a
   review. Aim for 2-3 new reviews per month.
3. **Reply to every review** within 48 hours — positive (thank them
   personally with project context) and negative (don't argue, offer to
   resolve offline).
4. **Don't fake or buy reviews.** Google catches fake reviews and
   penalizes profiles severely. Real reviews compound over time.

## After setup — submit to relevant directories

GBP is the foundation, but Israeli local SEO also benefits from:
- Bing Places for Business (mirror of GBP for Bing/ChatGPT Search)
- Apple Maps Connect (Apple Maps + Siri citations)
- Yandex Business _(low priority for Israel but free)_
- D&B / Dun's number registration _(if not done)_
- yad2.co.il "מומלץ" listings
- BDI _(business directory)_

Each adds NAP consistency signal. Use the **exact same name, phone,
website** as GBP to avoid splitting brand authority across mismatched
records.
