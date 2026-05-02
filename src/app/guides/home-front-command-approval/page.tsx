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
import KeyStats from "@/components/KeyStats";
import { buildMetadata } from "@/lib/metadata";
import {
  articleJsonLd,
  ofekPersonJsonLd,
  OFEK_PERSON_ID,
} from "@/lib/schema";

const DATE_PUBLISHED = "2026-04-15";
const DATE_MODIFIED = "2026-04-30";

// Word count estimated from prose sections on this page.
const WORD_COUNT = 520;

const TOC_ITEMS = [
  { id: "why-important", label: "למה האישור הזה חשוב" },
  { id: "process", label: "התהליך בקצרה" },
  { id: "whats-checked", label: "מה בודקים בבקשה" },
  { id: "delays", label: "שלוש טעויות שמעכבות אישור" },
  { id: "our-approach", label: "איך אנחנו מטפלים בזה" },
];

const PATH = "/guides/home-front-command-approval";
const TITLE = "אישורי פיקוד העורף לממ״ד | תהליך ומסמכים | התחדשות";
const DESCRIPTION =
  "אישורי פיקוד העורף לממ״ד: תהליך בקשה מלא, מסמכי חובה, עד 14 ימי עבודה לאישור, טעויות שמעכבות חודשים, הודעת גמר 45 ימים. התחדשות בינוי ויזמות מלווה את כל התהליך.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "כמה זמן לוקח לקבל אישור פיקוד העורף?",
    a: "בהגשה אלקטרונית מסודרת, מקובל שפיקוד העורף משיב בתוך ~14 ימי עבודה. אם יש הערות, התיקון וההגשה החוזרת מוסיפים כשבוע נוסף. הזמנים משתנים לפי עומסים ומועדי הבקשה.",
  },
  {
    q: "אילו מסמכים נדרשים?",
    a: "בקשה חתומה על ידי עורך הבקשה (אדריכל/מהנדס), תכניות אדריכליות של הממ\"ד, תכנית קונסטרוקטיבית, מפרט טכני של דלת וחלון, מפרט מערכת אוורור/סינון, והצהרות נדרשות. ברישוי מקוצר/רגיל נדרשים מסמכים נוספים. הרשימה הרשמית והעדכנית מפורסמת באתר פיקוד העורף (oref.org.il) ובאתר מינהל התכנון (gov.il).",
  },
  {
    q: "מי מגיש את הבקשה?",
    a: "עורך הבקשה, בדרך כלל האדריכל או מהנדס הבניין. לא הקבלן. הגשה עצמית של בעל הנכס אפשרית רק עבור עבודות מצומצמות מאוד.",
  },
  {
    q: "האם אפשר להתחיל בנייה לפני קבלת האישור?",
    a: "לא. ביצוע ממ\"ד לפני אישור פיקוד העורף עלול להוביל לסירוב לאישור סופי, לחיובים בתיקונים יקרים, או במקרים חמורים להליך משפטי. ממתינים לאישור, ואז מתחילים.",
  },
  {
    q: "מה עושים אם הבקשה חוזרת עם הערות?",
    a: "זה נורמלי. קוראים את ההערות היטב, מתקנים את התכניות/המפרטים, ומגישים מחדש. בדרך כלל לא מדובר בדחייה אלא בשיפורים נדרשים. חשוב שעורך הבקשה יטפל בהערות ישירות ולא 'מעגל את הפינות'.",
  },
  {
    q: "מה בודק פיקוד העורף בבקשה?",
    a: "מידות מינימום (שטח, נפח, גובה), עובי קירות ותקרה, דלת הדף מתוצרת מאושרת, חלון תקני, מערכת אוורור/סינון מאושרת, חישוב סטטי מקצועי, מיקום והתאמה למבנה. המטרה: לוודא שהחדר יעמוד בסטנדרט המיגון הנדרש.",
  },
  {
    q: "מה קורה אחרי סיום הבנייה?",
    a: "במסלול פטור מהיתר, עורך הבקשה מגיש לרשות הרישוי ולפקע\"ר הודעה על סיום הביצוע, לרוב בתוך 45 ימים. יש לצרף מסמכים ותצהירים כנדרש, שלעיתים כוללים תיעוד ביצוע (תמונות, אישורי בדיקה). רק לאחר מכן הממ\"ד 'סגור' פורמלית.",
  },
  {
    q: "מה ההבדל בין אישור פקע\"ר לאישור הוועדה המקומית?",
    a: "אלה שני אישורים שונים. פקע\"ר בודק שהממ\"ד עומד בדרישות המיגון. הוועדה המקומית מטפלת בהיבטים של תכנון ובנייה (הרחבת זכויות, תב\"ע, קווי בניין). במסלול פטור לא נדרש אישור ועדה רגיל, רק הודעה. במסלולים אחרים שני האישורים נדרשים.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="מדריך אישורים"
        title="אישורי פיקוד העורף לממ״ד"
        subtitle="איך מכינים בקשה שעוברת בפעם הראשונה, כמה זמן זה באמת לוקח, ומה לא לעשות."
        crumbs={[{ name: "מדריכים", href: "/#guides" }, { name: "אישורי פיקוד העורף", href: PATH }]}
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
          <><strong>שלושה מסלולי רישוי:</strong> פטור מהיתר (רוב הבתים עד 2 קומות, על בסיס אישור פקע״ר + הצהרת עורך בקשה), רישוי מקוצר (ועדה מקומית עם מסמכים מצומצמים), ורישוי רגיל (היתר בנייה מלא). בכל המסלולים אישור פיקוד העורף הוא תנאי חובה.</>,
          <><strong>זמן אישור: עד כ-14 ימי עבודה</strong> בהגשה אלקטרונית מסודרת. תיקון הערות והגשה חוזרת מוסיפים שבוע נוסף. הזמנים משתנים לפי עומסים.</>,
          <><strong>מסמכים נדרשים:</strong> בקשה חתומה על ידי עורך בקשה (אדריכל/מהנדס), תכניות אדריכליות וקונסטרוקטיביות, מפרט דלת הדף וחלון תקני, מפרט מערכת אוורור וסינון מאושרת, וחישוב סטטי.</>,
          <><strong>בסיום העבודה במסלול פטור:</strong> עורך הבקשה מגיש הודעת סיום לרשות הרישוי ולפקע״ר בתוך 45 ימים מתום הביצוע. בלעדיה הממ״ד לא &quot;סגור&quot; פורמלית.</>,
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
          <Prose>
          <h2 id="why-important">למה האישור הזה חשוב</h2>
          <p>
            אישור פיקוד העורף הוא תנאי בלעדיו אין לכל ממ״ד חוקי בישראל. הוא האישור שמאשר
            שהתכנון והביצוע עומדים בדרישות המיגון: עובי קירות, דלת, חלון, מערכת אוורור וסינון,
            חישוב סטטי ותפקוד בחירום. בלי האישור, מה שבניתם אינו ממ״ד.
          </p>
          <p>
            ההנחיות הרשמיות, טפסי הבקשה והנחיות הביצוע מפורסמים באתר{" "}
            <a
              href="https://www.oref.org.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              פיקוד העורף (oref.org.il)
            </a>
            . מסלולי הרישוי, היתרים והפטור מפורסמים באתר{" "}
            <a
              href="https://www.gov.il/he/departments/topics/planning_and_building/govil-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              מינהל התכנון (gov.il)
            </a>
            . אנחנו מטפלים בתהליך עבורכם, מהגשה ועד אישור.
          </p>

          </Prose>

          <KeyStats
            eyebrow="נתונים מאומתים · אישור פקע״ר"
            title="המספרים החשובים"
            stats={[
              {
                value: "עד 14 ימי עבודה",
                label: "זמן אישור פקע״ר",
                note: "במסלול פטור עם הגשה אלקטרונית מסודרת.",
                source: {
                  label: "פיקוד העורף: מערכת רישוי",
                  href: "https://www.oref-rishuy.org.il",
                },
              },
              {
                value: "9 מ״ר",
                label: "שטח מינימלי לממ״ד דירתי",
                note: "במקרים חריגים: 5 מ״ר.",
                source: {
                  label: "פיקוד העורף",
                  href: "https://www.oref.org.il",
                },
              },
              {
                value: "22.5 מ״ק",
                label: "נפח פנימי מינימלי",
                note: "ממ״ד דירתי סטנדרטי.",
                source: {
                  label: "פיקוד העורף",
                  href: "https://www.oref.org.il",
                },
              },
              {
                value: "45 ימים",
                label: "הודעת סיום ביצוע",
                note: "במסלול פטור: עורך הבקשה מודיע לרשות הרישוי ולפקע״ר.",
                source: {
                  label: "מינהל התכנון",
                  href: "https://www.iplan.gov.il",
                },
              },
              {
                value: "3 מסלולים",
                label: "פטור מהיתר / מקוצר / רגיל",
                note: "פיקוד העורף נדרש בכל המסלולים.",
                source: {
                  label: "מינהל התכנון: מסלולי רישוי",
                  href: "https://www.gov.il/he/departments/topics/planning_and_building",
                },
              },
              {
                value: "אדריכל / מהנדס",
                label: "מי מגיש את הבקשה",
                note: "עורך הבקשה: לא הקבלן ולא בעל הנכס.",
                source: {
                  label: "פיקוד העורף",
                  href: "https://www.oref.org.il",
                },
              },
            ]}
          />

          <Prose>
          <h2 id="process">התהליך בקצרה</h2>
          <ol>
            <li><strong>הכנת תיק הגשה</strong> אצל עורך הבקשה (אדריכל/מהנדס).</li>
            <li><strong>הגשה אלקטרונית</strong> במערכת של פיקוד העורף/מינהל התכנון.</li>
            <li><strong>המתנה לתשובה:</strong> לרוב בתוך ~14 ימי עבודה.</li>
            <li><strong>תיקון הערות</strong> (אם יש) והגשה חוזרת.</li>
            <li><strong>קבלת אישור:</strong> אפשר להתחיל ביצוע.</li>
            <li><strong>הודעה על סיום הביצוע:</strong> לרוב בתוך 45 ימים מתום העבודה.</li>
          </ol>

          <h2 id="whats-checked">מה בודקים בבקשה</h2>
          <ul>
            <li>מידות: שטח מינימום 9 מ״ר (לפעמים 5 מ״ר במקרים חריגים), נפח 22.5 מ״ק, גובה תקני.</li>
            <li>עובי קירות ותקרה לפי האזור (באזורי קו קדמי דרישה מחמירה יותר).</li>
            <li>דלת הדף תקנית מיצרן מאושר.</li>
            <li>חלון ממ״ד תקני.</li>
            <li>מערכת אוורור וסינון מאושרת.</li>
            <li>חישוב סטטי של קונסטרוקטור.</li>
            <li>התאמה הנדסית למבנה הקיים.</li>
          </ul>

          <h2 id="delays">שלוש טעויות שמעכבות אישור</h2>
          <ol>
            <li>
              <strong>הגשה לא מסודרת: מסמכים חסרים או פורמטים לא נכונים.</strong> עורך בקשה מנוסה
              מכין תיק &quot;מוכן לאישור&quot; מראש.
            </li>
            <li>
              <strong>דלת/חלון/מערכת סינון לא מיצרן מאושר.</strong> פריט אחד לא תקני עלול להחזיר
              את כל הבקשה.
            </li>
            <li>
              <strong>חישוב סטטי רגיל במקום קונסטרוקטיבי ייעודי.</strong> ממ״ד הוא אלמנט קונסטרוקטיבי
              מיוחד, לא כל קונסטרוקטור מתמחה בו.
            </li>
          </ol>

          <h2 id="our-approach">איך אנחנו מטפלים בזה</h2>
          <p>
            בהתחדשות אנחנו מטפלים בכל תהליך האישור עבורכם: הכנת התיק, הגשה, מענה להערות, ומעקב
            עד קבלת האישור. זה חלק מהחבילה המלאה, לא שירות נפרד. לקריאה על התהליך הכולל:{" "}
            <Link href="/guides/mamad-process">תהליך בניית ממ״ד</Link>.
          </p>
          </Prose>

          <aside>
            <TableOfContents items={TOC_ITEMS} />
          </aside>
        </div>
      </Section>

      <FAQ items={faqs} />

      <RelatedArticles currentSlug="home-front-command-approval" />

      <RelatedLinks
        seed="guides/home-front-command-approval"
        targets={[
          "building-mamad",
          "prefab-mamad",
          "compare-main",
          "mamad-process",
          "mamad-cost",
        ]}
      />

      <ContactCTA />
    </>
  );
}
