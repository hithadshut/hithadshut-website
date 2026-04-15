# התחדשות — אתר רשמי (hithadshut.co.il)

אתר סמכות ולידים לבניית ממ״ד, מיגון חדר קיים, מיגונית וממ״ד מוכן. עברית RTL, Next.js App Router, Tailwind v4, TypeScript.

## הפעלה מקומית

```bash
npm install
npm run dev
```

פתח [http://localhost:3000](http://localhost:3000).

## סקריפטים

- `npm run dev` — שרת פיתוח (Turbopack)
- `npm run build` — בילד פרודקשן
- `npm run start` — הרצת בילד פרודקשן
- `npm run lint` — ESLint

## מבנה

- `src/app/` — דפים (App Router). 15 דפים ציבוריים + `/api/lead` + `sitemap.xml` + `robots.txt` + דינמי `opengraph-image`.
- `src/components/` — קומפוננטות UI משותפות (Header, Footer, ContactForm, FAQ, JsonLd, וכו׳).
- `src/lib/site.ts` — קונפיגורציית מותג (טלפון, אימייל, שירותים, מדריכים).
- `src/lib/schema.ts` — בוני JSON-LD (Organization, Service, FAQPage, Article, HowTo, LocalBusiness, Breadcrumb).
- `src/lib/metadata.ts` — עוזר `buildMetadata` לכל דף.

## משתני סביבה

ראה `.env.example`. כולם אופציונליים:

- `LEAD_WEBHOOK_URL` — העברת לידים ל-Zapier/Make.
- `RESEND_API_KEY` — שליחת מייל ליד דרך Resend.
- `LEAD_FROM_EMAIL` — כתובת שולח (ברירת מחדל: `Hithadshut <leads@hithadshut.co.il>`).

ללא משתני סביבה — לידים נכתבים ל-stdout (נראה ב-Vercel Logs).

## דיפלוי

ראה `DEPLOY.md` להוראות שלב-אחר-שלב (GitHub + Vercel + DNS ל-hithadshut.co.il).

## כללי תוכן

- לא להמציא תקנות/מחירים. פריטים לא ודאיים מסומנים `[טעון אימות מקצועי]`.
- עברית בלבד, RTL, טון מקצועי-סמכותי.
