import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import RelatedLinks from "@/components/RelatedLinks";
import { faqJsonLd, breadcrumbJsonLd, articleJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const PATH = "/compare/katlan-rashum-vs-hafer";
const TITLE = "קבלן רשום מול חאפר | איך בוחרים נכון — התחדשות";
const DESCRIPTION =
  "איך לזהות קבלן רשום מול חאפר? 8 דגלים אדומים, שאלות לבדיקה ומה שאסור לוותר עליו בממ״ד. התחדשות בינוי ויזמות.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

type Option = {
  key: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
  badge?: string;
  rows: { label: string; value: string }[];
};

const options: Option[] = [
  {
    key: "rashum",
    title: "קבלן רשום",
    subtitle: "רשום בפנקס הקבלנים, עם ביטוח, חוזה וחשבוניות כחוק",
    highlight: true,
    badge: "הבחירה הנכונה",
    rows: [
      {
        label: "רישיון ותקנים",
        value:
          "רשום בפנקס הקבלנים של משרד הבינוי והשיכון עם סיווג 100 (בנייה) מתאים להיקף הפרויקט. ניתן לאימות בפתיחה של אתר רשם הקבלנים הממשלתי.",
      },
      {
        label: "ביטוח עבודות",
        value:
          "ביטוח עבודות קבלניות מלא — עבודות, צד ג׳, חבות מעבידים. תעודת ביטוח בתוקף מוצגת ללקוח לפני התחלת עבודה.",
      },
      {
        label: "אחריות משפטית",
        value:
          "אחריות לפי חוק המכר (דירות) ולפי חוק החוזים — אחריות של שנה על ליקויים גלויים ועד 7 שנים על ליקויים מבניים. ניתן לתבוע משפטית.",
      },
      {
        label: "חוזה בכתב",
        value:
          "חוזה קבלנות מפורט של עשרות עמודים — מפרט טכני, תכניות, לוחות זמנים, אבני דרך, תנאי תשלום, סנקציות על עיכובים, ערבויות.",
      },
      {
        label: "חשבונית מס",
        value:
          "חשבונית מס כחוק לכל תשלום, עם מע״מ גלוי. שקיפות מלאה מול רשויות המס — הלקוח מוגן.",
      },
      {
        label: "שקיפות מחיר",
        value:
          "הצעת מחיר מפורטת עם פרק על כל רכיב (עבודות בטון, ברזל, גמר, אישורים). אין 'תוספות הפתעה' באמצע הפרויקט.",
      },
      {
        label: "אישור פקע״ר",
        value:
          "מוציא את הפרויקט לאישור פקע״ר כחלק מהתהליך, עם הכנת כל המסמכים, תכניות קונסטרוקציה וחישובים סטטיים. אחריות לאישור מתקבל.",
      },
      {
        label: "סיכון בפרויקט",
        value:
          "נמוך — ביטוח, חוזה, ערבויות, אחריות משפטית. אם משהו משתבש, יש לאן לפנות — לרשם הקבלנים, לבית משפט, לחברת הביטוח.",
      },
    ],
  },
  {
    key: "hafer",
    title: "חאפר",
    subtitle: "ללא רישום, ללא ביטוח, ללא חוזה — סיכון מלא ללקוח",
    rows: [
      {
        label: "רישיון ותקנים",
        value:
          "לא רשום בפנקס הקבלנים. פועל ללא סיווג — עבודה קבלנית בהיקף ממ״ד ללא רישום היא לרוב עבירה על חוק רישום קבלנים.",
      },
      {
        label: "ביטוח עבודות",
        value:
          "ברוב המקרים ללא ביטוח עבודות קבלניות. אם עובד נפצע באתר — האחריות הכלכלית והמשפטית עוברת ללקוח.",
      },
      {
        label: "אחריות משפטית",
        value:
          "אחריות מילולית בלבד. בלי רישום, בלי חברה רשומה, בלי חוזה — במקרה בעיה, אין מי לתבוע או להגיע אליו. רבים נעלמים אחרי סיום הפרויקט.",
      },
      {
        label: "חוזה בכתב",
        value:
          "אין חוזה, או חוזה של עמוד אחד בלי מפרט ותכניות. כל שינוי / תוספת יקבע 'בדרך' — ויעלה הרבה יותר ממה שסוכם.",
      },
      {
        label: "חשבונית מס",
        value:
          "מזומן בלבד או ללא חשבונית. חלקם מוציאים 'קבלה' ללא מע״מ — זה לא חשבונית מס ולא מגן על הלקוח.",
      },
      {
        label: "שקיפות מחיר",
        value:
          "מחיר 'כולל' מעורפל שצומח במהלך הפרויקט. כל בעיה שמתגלה באתר הופכת ל'תוספת' יקרה שלא הוערכה מראש.",
      },
      {
        label: "אישור פקע״ר",
        value:
          "אינו יכול להגיש לאישור בשם החברה (אין חברה רשומה). במקרים רבים הממ״ד לא מקבל אישור — ואז כל ההשקעה הלכה לאיבוד.",
      },
      {
        label: "סיכון בפרויקט",
        value:
          "גבוה מאוד — פרויקט שלא מסתיים, אישור פקע״ר שלא מתקבל, ליקויים שמתגלים אחרי שנה, תאונה באתר — הכל על חשבון הלקוח.",
      },
    ],
  },
];

const redFlags = [
  {
    title: "דורש תשלום במזומן / ללא חשבונית",
    text: "קבלן רשום חייב לפי חוק להוציא חשבונית מס עם מע״מ. דרישה למזומן או להימנע מחשבונית היא סימן מובהק לעבודה מחוץ למסלול החוק.",
  },
  {
    title: "מציע הנחה אגרסיבית 'רק היום'",
    text: "‏'אני מוריד 20% אם סוגרים עכשיו' — טקטיקת לחץ קלאסית. החלטה בסדר גודל של 200 אלף ₪ לא נעשית באותו יום — בטח לא בלי מפרט ותכניות.",
  },
  {
    title: "אין חוזה כתוב, או חוזה קצר של חצי עמוד",
    text: "חוזה קבלנות תקין הוא 20+ עמודים — מפרט טכני מפורט, תכניות אדריכלות וקונסטרוקציה, אבני דרך, ערבויות ולוחות זמנים. פחות מזה — בעיה רצינית.",
  },
  {
    title: "מסרב להציג תעודת ביטוח עבודות",
    text: "ביטוח עבודות קבלניות זו הגנה שלכם — גם מפני תאונות עובדים וגם מפני נזק לרכוש. קבלן בלי ביטוח = אתם חשופים למיליונים.",
  },
  {
    title: "לא נותן מספר קבלן (תעודת רישום)",
    text: "כל קבלן רשום חייב להציג מספר רישום בפנקס הקבלנים — ניתן לאימות ב-gov.il (רשם הקבלנים). מי שמתחמק מלתת את המספר — עזבו.",
  },
  {
    title: "אין רשימת ממליצים עם פרטי קשר",
    text: "קבלן רציני גאה בפרויקטים שלו ושמח שתדברו עם לקוחות קודמים. 'יש לי המלצות' בלי מספרי טלפון של לקוחות שניתן לחייג אליהם — סימן אזהרה.",
  },
  {
    title: "אין תיק עבודות עם תמונות",
    text: "קבלן ממ״ד מנוסה ביצע עשרות פרויקטים. אם אין תמונות 'לפני ואחרי' עם כתובות אמיתיות — יש סיבה טובה להטיל ספק בניסיון הנטען.",
  },
  {
    title: "מציע מחיר 'כולל הכול' נמוך בעשרות אחוזים מהשוק",
    text: "ממ״ד תקני לא יוצא בפחות מ-160,000 ₪ + מע״מ. אם קיבלתם הצעה של 90,000 ₪ 'כולל הכול' — זה לא ממ״ד תקני, או שזה חאפר שיעלים תוספות באמצע.",
  },
];

const mustAskQuestions = [
  {
    q: "מה מספר הרישום שלך בפנקס הקבלנים ובאיזה סיווג?",
    a: "תשובה נכונה: מספר רישום ברור, סיווג 100 בקבוצה המתאימה (1 / 2 / 3) להיקף העבודה. אתם בודקים את המספר באתר gov.il → רשם הקבלנים, מול השם והסיווג. לוקח דקה. קבלן שמתחמק, 'אני יושב בחברה של אחר', או נותן מספר שלא מופיע — עוזבים.",
  },
  {
    q: "האם תציג לי תעודת ביטוח עבודות קבלניות בתוקף?",
    a: "תשובה נכונה: כן, הנה התעודה עם שם החברה, תקופת ביטוח, סכומי כיסוי. אתם בודקים שהביטוח בתוקף לתקופת הפרויקט, שכיסוי צד ג׳ הוא לפחות 2,000,000 ₪, ושיש חבות מעבידים. 'הביטוח יסודר אחר-כך' — לא מתחילים פרויקט.",
  },
  {
    q: "האם אני מקבל חוזה מפורט עם מפרט, תכניות ולוחות זמנים, ואת האישור באחריותך?",
    a: "תשובה נכונה: כן, חוזה קבלנות של 20+ עמודים, מפרט טכני, תכניות קונסטרוקציה ואדריכלות, לוח זמנים עם אבני דרך, סעיף אישור פקע״ר באחריות הקבלן, ערבות ביצוע. 'אני עושה את זה בלי חוזה, סומכים זה על זה' — לא. גם אם ממליץ מכר.",
  },
];

const faqs = [
  {
    q: "איך אני בודק שקבלן באמת רשום בפנקס הקבלנים?",
    a: "נכנסים לאתר gov.il → חיפוש 'רשם הקבלנים' → הקלדת שם החברה או מספר הרישום. מופיע תוקף הרישום, הסיווג (100 לבנייה כללית), הקבוצה (1 עד 5 לפי היקף כספי) ומעמד רישומי. חינם, לוקח דקה. קבלן שמסרב לתת את מספר הרישום — פשוט עוברים הלאה.",
  },
  {
    q: "מה הסיכון המשפטי אם אני שוכר חאפר?",
    a: "ארבעה סיכונים מרכזיים: (1) עובד נפצע באתר ללא ביטוח — התביעה מגיעה אליכם; (2) העבודה לא עומדת בתקן 4422 ולא מקבלת אישור פקע״ר — הממ״ד פסול; (3) רשויות המס יחקרו תשלומים במזומן ללא חשבונית; (4) אין ערבויות או אחריות — ליקוי שיתגלה בעוד שנה הוא על חשבונכם. [טעון אימות משפטי פרטני].",
  },
  {
    q: "האם חאפר באמת זול יותר בסוף?",
    a: "לרוב לא. פרויקטים רבים אצל חאפרים מסתיימים יקרים ב-20%–40% ממחיר קבלן רשום — בגלל תוספות לא מתועדות שצצות באמצע, חומרים זולים שדורשים החלפה, עבודות תיקון, ולעיתים פרויקט שלא מסתיים וצריך לשכור קבלן נוסף. 'הזול יוצא יקר' במיוחד בממ״ד.",
  },
  {
    q: "מה ההבדל בין סיווגים 100, 150 ו-400?",
    a: "סיווג 100 — בנייה כללית (זה הסיווג הנדרש לממ״ד). סיווג 150 — עבודות הרחבה. סיווג 400 — עבודות פיתוח. כל סיווג מחולק לקבוצות (1 עד 5) לפי היקף כספי: קבוצה 1 בד״כ עד כ-1.5 מיליון ₪, קבוצה 5 ללא הגבלה. לממ״ד בבית פרטי קבוצה 1–2 מספיקה.",
  },
  {
    q: "מה עושים אם התחלתי עם חאפר וצריך לעצור באמצע?",
    a: "שלושה שלבים: (1) לתעד מיד את המצב — תמונות, וידאו, כל המסמכים; (2) להתייעץ עם עורך דין ועם מהנדס קונסטרוקציה שיבדוק את מה שנעשה; (3) להביא קבלן רשום שיעריך מה ניתן להציל ומה צריך לפרק. לפעמים עדיף לפרק ולהתחיל מחדש עם קבלן רשום מאשר להשקיע בתיקון עבודה לקויה.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="השוואה"
        title="קבלן רשום מול חאפר — איך להיות בטוחים שאתם לא מתפתים"
        subtitle="מה באמת מבדיל בין קבלן רשום לחאפר, 8 דגלים אדומים, שלוש השאלות שחובה לשאול — ולמה זה קריטי דווקא בממ״ד."
        crumbs={[
          { name: "השוואות", href: "/compare/mamad-vs-miggun-vs-migunit" },
          { name: "קבלן רשום מול חאפר", href: PATH },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "בית", url: "/" },
          { name: "השוואות", url: "/compare/mamad-vs-miggun-vs-migunit" },
          { name: "קבלן רשום מול חאפר", url: PATH },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={articleJsonLd({
          headline: TITLE,
          description: DESCRIPTION,
          url: PATH,
        })}
      />

      <Section>
        <Reveal>
          <div className="max-w-4xl mx-auto mb-10">
            <div className="border-r-4 border-[var(--color-accent)] ps-4 md:ps-0 md:pr-6 mb-6">
              <p className="text-lg md:text-xl text-[var(--color-ink)] leading-relaxed font-semibold mb-4">
                אנחנו בהתחדשות בינוי ויזמות קבלנים רשומים. זה מה שאנחנו עושים — ולכן נכתוב את העמוד הזה מהזווית שלנו, בלי להתחבא: ממ״ד הוא לא חדר רגיל. זו מעטפת בטון מזוין שנבנית לפי תקן הנדסי מחמיר (תקן 4422), עם מטרה אחת — להציל חיים בזמן אמת.
              </p>
              <p className="text-base text-[var(--color-muted)] leading-relaxed">
                כל פרויקט שנעשה לא לפי הספר הוא סיכון ממשי — לא רק כלכלי, אלא פיזי. חאפר שחוסך ברזל, מטיח על קיר לא מספיק חזק, או לא מוציא את הפרויקט לאישור פקע״ר — בונה לכם משהו שנראה כמו ממ״ד אבל לא מגן כמוהו. בעמוד הזה אנחנו שמים על השולחן את כל ההבדלים, את 8 הדגלים האדומים שחובה להכיר, ואת 3 השאלות שצריך לשאול כל קבלן שמגיע לבית.
              </p>
            </div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              המטרה כאן לא למכור לכם — המטרה שתדעו לשאול את השאלות הנכונות, לזהות סימני אזהרה, ולא להתפתות למחיר שנראה טוב מדי מכדי להיות אמיתי. אם בסוף החלטתם לא לעבוד איתנו — זה בסדר, העיקר שתעבדו עם קבלן רשום ומבוטח.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((o) => (
            <Reveal key={o.key}>
              <div
                className={`card-premium p-6 md:p-7 flex flex-col h-full ${
                  o.highlight ? "ring-2 ring-[var(--color-accent)] shadow-xl relative" : ""
                }`}
              >
                {o.badge && (
                  <span className="absolute -top-3 right-6 inline-flex items-center bg-[var(--color-accent)] text-[var(--color-primary)] text-[10px] font-extrabold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow">
                    {o.badge}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-1">
                  {o.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] mb-4 pb-4 border-b border-[var(--color-border)]">
                  {o.subtitle}
                </p>
                <dl className="space-y-4 flex-1">
                  {o.rows.map((r) => (
                    <div key={r.label}>
                      <dt className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-1">
                        {r.label}
                      </dt>
                      <dd className="text-sm text-[var(--color-ink)] leading-relaxed">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--color-muted)] text-center">
          המידע אינפורמטיבי בלבד, אינו ייעוץ משפטי. בדיקה פרטנית דרך רשם הקבלנים ודרך עו״ד מומלצת.
        </p>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="h-1 w-16 gold-line mb-5 mx-auto" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              דגלים אדומים
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              8 סימני אזהרה של חאפר
            </h2>
            <p className="text-[var(--color-muted)]">
              אם נתקלתם באחד מאלה — עצרו. בשניים — כנראה כדאי להתרחק.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {redFlags.map((rf, i) => (
            <Reveal key={rf.title} delay={i * 50}>
              <div className="card-premium p-6 flex gap-4 h-full">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center text-lg font-black">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-black text-[var(--color-primary)] mb-1">{rf.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{rf.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="h-1 w-16 gold-line mb-5 mx-auto" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              שאלות לבדיקה
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              3 שאלות שחובה לשאול כל קבלן
            </h2>
            <p className="text-[var(--color-muted)] mt-3">
              התשובות לשלוש השאלות האלה יחשפו תוך דקות האם מדובר בקבלן רשום אמיתי או בחאפר.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {mustAskQuestions.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <div className="card-premium p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] flex items-center justify-center text-lg font-black mb-4">
                  {i + 1}
                </div>
                <h3 className="font-black text-[var(--color-primary)] mb-3 leading-snug">
                  {item.q}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              להעמיק
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              קישורים רלוונטיים
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/guides/choosing-mamad-contractor"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              מדריך
            </div>
            <div className="font-bold text-[var(--color-primary)]">איך בוחרים קבלן ממ״ד ←</div>
          </Link>
          <Link
            href="/guides/home-front-command-approval"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              מדריך
            </div>
            <div className="font-bold text-[var(--color-primary)]">אישורי פיקוד העורף ←</div>
          </Link>
          <Link
            href="/guides/mamad-mistakes"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              מדריך
            </div>
            <div className="font-bold text-[var(--color-primary)]">10 טעויות בבניית ממ״ד ←</div>
          </Link>
          <Link
            href="/services/building-mamad"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              שירות
            </div>
            <div className="font-bold text-[var(--color-primary)]">בניית ממ״ד תקני ←</div>
          </Link>
          <Link
            href="/compare/mamad-tzamud-vs-hitzoni"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              השוואה נוספת
            </div>
            <div className="font-bold text-[var(--color-primary)]">ממ״ד צמוד מול חיצוני ←</div>
          </Link>
          <Link
            href="/compare/migunit-vs-mamad-muchan"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              השוואה נוספת
            </div>
            <div className="font-bold text-[var(--color-primary)]">מיגונית מול ממ״ד מוכן ←</div>
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] font-extrabold px-6 py-4 rounded-xl hover:brightness-95 transition shadow-lg text-center"
          >
            קבלו הצעת מחיר מקבלן רשום ←
          </Link>
          <a
            href={`https://wa.me/972546712130?text=${encodeURIComponent(
              "היי, הגעתי מעמוד קבלן רשום מול חאפר"
            )}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white font-extrabold px-6 py-4 rounded-xl hover:brightness-95 transition shadow-lg text-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163A11.867 11.867 0 010 11.5C0 5.149 5.373 0 12 0s12 5.149 12 11.5c0 6.35-5.373 11.5-12 11.5a12.39 12.39 0 01-5.896-1.486L.057 24z" />
            </svg>
            דברו איתנו בוואטסאפ
          </a>
        </div>
        <p className="text-center text-xs text-[var(--color-muted)] mt-4">
          או חייגו ישירות:{" "}
          <a href={`tel:${site.phoneDial}`} className="font-bold text-[var(--color-primary)]">
            {site.phone}
          </a>
        </p>
      </Section>

      <FAQ items={faqs} includeSchema={false} />

      <RelatedLinks
        seed="compare/katlan-rashum-vs-hafer"
        targets={[
          "building-mamad",
          "room-reinforcement",
          "choosing-mamad-contractor",
          "compare-main",
        ]}
      />

      <InlineLeadForm
        title="רוצים לעבוד עם קבלן רשום?"
        subtitle="התחדשות בינוי ויזמות — רשומים בפנקס הקבלנים, ביטוח מלא, חוזה מסודר, אחריות לפי חוק. השאירו פרטים — נחזור תוך שעות."
        defaultService="בניית ממ״ד"
      />
    </>
  );
}
