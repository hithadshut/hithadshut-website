import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import TldrBlock from "@/components/TldrBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ReadingTimeBadge from "@/components/ReadingTimeBadge";
import Byline from "@/components/Byline";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import { buildMetadata } from "@/lib/metadata";
import {
  articleJsonLd,
  ofekPersonJsonLd,
  OFEK_PERSON_ID,
} from "@/lib/schema";

const DATE_PUBLISHED = "2026-04-15";
const DATE_MODIFIED = "2026-04-30";

// Word count estimated from intro + 10 mistakes + closing section.
const WORD_COUNT = 480;

const TOC_ITEMS = [
  { id: "intro", label: "למה אותן טעויות חוזרות" },
  { id: "mistakes-list", label: "10 הטעויות הנפוצות" },
  { id: "how-to-avoid", label: "איך להימנע מרוב הטעויות" },
];

const PATH = "/guides/mamad-mistakes";
const TITLE = "10 טעויות בבניית ממ״ד שעולות ביוקר | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "10 טעויות נפוצות בבניית ממ״ד שעולות עשרות אלפי שקלים: קבלן לא רשום, תכנון חסר, חומרים זולים, דילוג על פקע״ר, חוזה חלש. למדו לפני שתתחילו.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "מה הטעות הכי יקרה בממ\"ד?",
    a: "חתימה על הצעת מחיר לפני שיש תכנון קונסטרוקטיבי. בלי חישוב סטטי, כל אומדן הוא ניחוש, ובאמצע העבודה מתגלים חיזוקים שנדרשים ומעלים את המחיר בעשרות אלפי שקלים. הפתרון: תכנון קודם, מחיר אחרי.",
  },
  {
    q: "אפשר לעקוף את פיקוד העורף?",
    a: "לא. גם אם 'מישהו מכיר מישהו', הניסיון לבנות בלי אישור יעלה ביוקר בסוף: בסירוב אישור גמר, בתיקונים, או בהליך משפטי. אין קיצורי דרך אמיתיים סביב פקע\"ר.",
  },
  {
    q: "האם קבלן מומלץ שעושה שיפוצים יכול לבנות ממ\"ד?",
    a: "לא בהכרח. ממ\"ד הוא עבודה מתמחה: בטונים מזוינים, דלתות הדף, מערכות סינון, התנהלות מול פקע\"ר. קבלן שיפוצים מצוין לחדר רגיל יכול להיכשל בממ\"ד. לבקש ספציפית ניסיון בממ\"דים.",
  },
  {
    q: "מה עושים אם הקבלן דורש תוספת באמצע?",
    a: "בודקים מול החוזה. אם מדובר בעבודה שהייתה אמורה להיות כלולה, זו אחריות הקבלן ולא תוספת. אם זו באמת עבודה חדשה (שינוי בבקשה, תוספות של המזמין), מבקשים הצעה בכתב, בוחנים, ורק אחרי אישור מבצעים.",
  },
  {
    q: "אפשר לחסוך על ידי שילוב הממ\"ד בהרחבה?",
    a: "לעיתים כן. אם בכל מקרה אתם מבצעים הרחבה או בנייה, הוספת ממ\"ד באותה עבודה חוסכת עלויות משותפות (יסודות, גגות, חשמל). אבל זה דורש תכנון משולב מראש, לא 'תפסתי' באמצע.",
  },
];

const mistakes = [
  { title: "מתחילים בלי תכנון קונסטרוקטיבי", text: "בלי חישוב סטטי, בלי חיזוקים מוגדרים, בלי שרטוט מדויק, המחיר הוא ניחוש. התוצאה: תוספות באמצע הפרויקט." },
  { title: "בוחרים קבלן לפי מחיר בלבד", text: "ההצעה הזולה לרוב לא כוללת את הכל. ההפרש מתגלה כתוספות. קבלן בינוני עם ניסיון בממ\"דים עדיף על זול ומבריק בלי ניסיון." },
  { title: "מקדמה גבוהה מדי", text: "מקדמה מעל 20-25% מהמחיר הכולל היא מסוכנת. תשלומים צריכים להיות קשורים לאבני דרך בפועל." },
  { title: "אין מפקח חיצוני", text: "המזמין לבד מול הקבלן = חוסר איזון. מפקח/מהנדס חיצוני שמגיע לביקורות שלבי ביצוע מחזיר מאות אחוזים בהשקעה." },
  { title: "לא קוראים את החוזה", text: "חוזה של עמוד-שניים לא מספיק. לקרוא, לסמן, לשאול, לדרוש שינויים. זה רגע ההגנה העיקרי שלכם." },
  { title: "דלת או מערכת סינון לא מאושרות", text: "חוסכים כמה אלפים ולא מקבלים אישור פקע\"ר. צריך להחליף אחרי הביצוע, בעלות כפולה." },
  { title: "ממלאים את הממ\"ד בדברים", text: "ממ\"ד חייב להישאר נגיש ופונקציונלי לחירום. ארון ענק שחוסם את הדלת או מחסן של קופסאות פוגעים בבטיחות. להישאר פונקציונליים." },
  { title: "שוכחים את מערכת האוורור/סינון", text: "הפילטרים מתיישנים, המערכת דורשת בדיקות תקופתיות. בלי תחזוקה הממ\"ד פחות מוגן. מתעדים את מועדי הבדיקה." },
  { title: "לא מגישים הודעת סיום", text: "במסלול פטור, בלי הודעת סיום לפקע\"ר ולרשות הרישוי, הממ\"ד לא 'סגור' רשמית. זה פתוח מולך מול רשויות בעתיד." },
  { title: "מתחילים לפני אישור פקע\"ר", text: "לא משנה כמה לחץ, אל תתחילו ביצוע לפני שהאישור בידיים. כל הפרויקט עלול להיזרק." },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="טעויות נפוצות"
        title="10 טעויות נפוצות בבניית ממ״ד"
        subtitle="הדברים שחוזרים בפרויקטים ועולים ביוקר, ומה לעשות כדי לא ליפול לאותה מלכודת."
        crumbs={[{ name: "מדריכים", href: "/#guides" }, { name: "טעויות נפוצות", href: PATH }]}
      />

      <JsonLd
        data={[
          articleJsonLd({
            headline: TITLE,
            description: DESCRIPTION,
            url: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            authorPersonId: OFEK_PERSON_ID,
          }),
          ofekPersonJsonLd(),
        ]}
      />

      <TldrBlock
        bullets={[
          <><strong>הטעות היקרה ביותר:</strong> חתימה על מחיר לפני תכנון קונסטרוקטיבי מלא. בלי חישוב סטטי, כל אומדן הוא ניחוש, ותוספות באמצע הפרויקט עולות עשרות אלפי ₪. <em>הפתרון:</em> תכנון קודם, מחיר אחרי.</>,
          <><strong>הטעות השנייה:</strong> בחירת קבלן לפי מחיר בלבד ולא לפי ניסיון ספציפי בממ״דים. הצעה זולה לרוב חסרה רכיבים חיוניים. <em>הפתרון:</em> 3 הצעות עם אותו מפרט מקבלנים רשומים ומבוטחים.</>,
          <><strong>הטעות השלישית:</strong> חיסכון על דלת הדף או מערכת סינון לא מאושרות פקע״ר. התוצאה: סירוב אישור גמר והחלפה בעלות כפולה. <em>הפתרון:</em> רק רכיבים מיצרנים מאושרים, עם אישור בכתב.</>,
          <><strong>כלל זהב למניעת רוב הטעויות:</strong> חוזה כתוב ומפורט, מקדמה עד 15%, תשלומים לפי אבני דרך ביצוע (לא תאריכי לוח), ושינויים רק בכתב עם מחיר סגור.</>,
        ]}
      />

      <Section tone="white">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Byline author="ofek-mazor" dateModified={DATE_MODIFIED} />
          <ReadingTimeBadge words={WORD_COUNT} />
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
          <div>
        <Prose>
          <h2 id="intro" className="sr-only">למה אותן טעויות חוזרות</h2>
          <p>
            הבעיה הגדולה בבניית ממ״ד היא לא שיש טעויות, אלא שאותן טעויות חוזרות.
            הן לא בגלל שהאנשים לא חכמים, אלא בגלל שאין מסורת ברורה של איך בעל בית
            מתנהל מול קבלנים, קונסטרוקטורים ופיקוד העורף. הנה העשר שאנחנו רואים שוב
            ושוב.
          </p>
        </Prose>
        <h2 id="mistakes-list" className="sr-only">10 הטעויות הנפוצות</h2>
        <ol className="mt-6 space-y-4">
          {mistakes.map((m, i) => (
            <li key={i} className="flex gap-4 bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent-dark)] font-extrabold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-1">{m.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Prose>
            <h2 id="how-to-avoid">איך להימנע מרוב הטעויות האלו</h2>
            <p>
              הרוב מתחיל מארבעה דברים: תכנון לפני מחיר, קבלן עם ניסיון ספציפי בממ״דים, חוזה
              ברור, ומישהו לצידכם שלא מוכר ולא קונה, אלא מייעץ ומלווה. זה בדיוק מה שאנחנו
              עושים. קראו גם{" "}
              <Link href="/guides/choosing-mamad-contractor">בחירת קבלן ממ״ד</Link>,{" "}
              <Link href="/guides/mamad-process">תהליך בניית ממ״ד</Link>.
            </p>
          </Prose>
        </div>
          </div>

          <aside>
            <TableOfContents items={TOC_ITEMS} />
          </aside>
        </div>
      </Section>

      <FAQ items={faqs} />

      <RelatedArticles currentSlug="mamad-mistakes" />

      <RelatedLinks
        seed="guides/mamad-mistakes"
        targets={[
          "building-mamad",
          "migunit",
          "compare-rashum-hafer",
          "choosing-mamad-contractor",
          "mamad-process",
        ]}
      />

      <ContactCTA />
    </>
  );
}
