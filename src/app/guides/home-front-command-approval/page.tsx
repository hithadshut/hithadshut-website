import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
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
  howToJsonLd,
} from "@/lib/schema";

const DATE_PUBLISHED = "2026-04-15";
const DATE_MODIFIED = "2026-05-14";

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
const TITLE = "הוצאת היתר לממ״ד ואישור פיקוד העורף: המדריך המלא 2026";
const DESCRIPTION =
  "איך מוציאים היתר לממ״ד: שלושה מסלולי רישוי (פטור מהיתר, מקוצר, רגיל), אישור פיקוד העורף תוך כ-14 ימי עבודה במסלול פטור, המסמכים הנדרשים, וטעויות נפוצות שמעכבות אישור.";

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
        eyebrow="מדריך רישוי ואישורים"
        title="הוצאת היתר ואישור פיקוד העורף לממ״ד"
        subtitle="איך מוציאים היתר לממ״ד: איזה מסלול רישוי מתאים לבית שלכם, כמה זמן זה באמת לוקח, ואיך מכינים בקשה שעוברת בפעם הראשונה."
        crumbs={[{ name: "מדריכים", href: "/madrichim" }, { name: "הוצאת היתר ואישור פקע״ר", href: PATH }]}
      />

      <JsonLd
        data={[
          articleJsonLd({
            headline: TITLE,
            description: DESCRIPTION,
            url: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
          }),
          // HowTo mirrors the visible "התהליך בקצרה" steps below (factual, no invented data).
          howToJsonLd({
            name: "איך מקבלים אישור פיקוד העורף לממ״ד",
            description:
              "השלבים לקבלת אישור פיקוד העורף לממ״ד תקני: הכנת תיק, הגשה אלקטרונית, המתנה לתשובה, תיקון הערות, קבלת אישור, והודעת סיום ביצוע.",
            steps: [
              { name: "הכנת תיק הגשה", text: "עורך הבקשה (אדריכל או מהנדס) מכין תיק הגשה מלא: תכניות אדריכליות וקונסטרוקטיביות, מפרטי דלת וחלון הדף, מפרט מערכת אוורור וסינון, וחישוב סטטי." },
              { name: "הגשה אלקטרונית", text: "הבקשה מוגשת אלקטרונית במערכת הרישוי של פיקוד העורף או מינהל התכנון." },
              { name: "המתנה לתשובה", text: "לרוב בתוך כ-14 ימי עבודה בהגשה אלקטרונית מסודרת." },
              { name: "תיקון הערות", text: "אם מתקבלות הערות, עורך הבקשה מתקן את התכניות והמפרטים ומגיש מחדש." },
              { name: "קבלת אישור", text: "לאחר אישור פיקוד העורף אפשר להתחיל בביצוע הממ״ד." },
              { name: "הודעת סיום ביצוע", text: "במסלול פטור עורך הבקשה מגיש הודעת סיום לרשות הרישוי ולפיקוד העורף, לרוב בתוך 45 ימים מתום העבודה." },
            ],
          }),
        ]}
      />

      <AnswerBlock
        service="אישורי פיקוד העורף ובניית ממ״ד תקני"
        process="תכנון, הגשה אלקטרונית לפקע״ר, מענה להערות וקבלת אישור"
        answer={
          <>
            אישור פיקוד העורף הוא תנאי חובה לכל ממ״ד חוקי בישראל. עורך הבקשה (אדריכל או מהנדס מורשה)
            מגיש בקשה אלקטרונית למערכת הרישוי של פקע״ר, והתשובה מגיעה לרוב תוך כ-14 ימי עבודה בהגשה
            מסודרת. האישור בודק מידות, עובי קירות, דלת הדף, חלון ומערכת סינון מאושרים, וחישוב סטטי.
            בהתחדשות בינוי ויזמות מטפלים בתהליך מהתכנון ועד האישור הסופי.
          </>
        }
        faqs={[
          {
            q: "מה זה פקע״ר רישוי?",
            a: "פקע״ר רישוי הוא הליך אישור המרחב המוגן מול מערכת הרישוי של פיקוד העורף. עורך הבקשה מגיש תכניות ומפרטים, ופיקוד העורף מאשר שהממ״ד עומד בתקן המיגון לפני תחילת הביצוע.",
          },
          {
            q: "מה ההבדל בין אישור פיקוד העורף לאישור הג״א?",
            a: "הג״א (הגנה אזרחית) הוא הגוף שקדם לפיקוד העורף בתחום המיגון. כיום הגוף המאשר ממ״דים הוא פיקוד העורף, ולכן 'אישור הג״א לממ״ד' ו'אישור פיקוד העורף' מתייחסים בפועל לאותו אישור מיגון.",
          },
          {
            q: "האם פיקוד העורף מנפיק היתר בנייה?",
            a: "לא. פיקוד העורף מאשר את תקינות המיגון בלבד. היתר הבנייה, או הפטור ממנו, מגיע מהוועדה המקומית. במסלול הפטור נדרשים אישור פקע״ר והצהרת עורך בקשה, בלי הליך היתר רגיל.",
          },
          {
            q: "מי מגיש את הבקשה לפיקוד העורף?",
            a: "עורך הבקשה: אדריכל או מהנדס מורשה. לא הקבלן ולא בעל הנכס. הגשה אלקטרונית מסודרת מקצרת את זמן האישור לעומת הגשה ידנית.",
          },
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
          <Byline author="hithadshut-team" dateModified={DATE_MODIFIED} />
          <ReadingTimeBadge words={WORD_COUNT} />
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
          <Prose>
          <h2 id="bekitzur">בקצרה: לוח הזמנים והמסמכים הנדרשים</h2>
          <p>
            אישור פיקוד העורף לממ״ד תקני במסלול הפטור המהיר (תקנה 30ב׳) ניתן תוך
            <strong> 14 ימי עבודה</strong> מהגשת הבקשה במערכת הרישוי של פיקוד העורף.
            במסלול רישוי רגיל, התהליך אורך עד 45 ימים. הבקשה מוגשת על ידי אדריכל
            או מהנדס מורשה וכוללת תכנית אדריכלית של המרחב המוגן בקנה מידה 1:50,
            תוכנית קונסטרוקציה ופרטי הריתום, ותעודות תקן 4570 לדלת ההדף וחלון
            ההדף. הוראת שעה בתוקף (בכפוף לעדכוני חקיקה) פוטרת בתים צמודי
            קרקע ובניינים עד 2 קומות מהיתר בנייה רגיל ומקצרת באופן משמעותי את הליך
            הרישוי. את מועד הסיום המדויק יש לאמת באתר מינהל התכנון לפני הסתמכות.
            מאז 2024 מערכת אוורור וסינון אב״כ לפי תקן 4570 היא חובה לטופס 4.
          </p>

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

          <h2 id="our-approach">איך מוציאים היתר לממ״ד אצלנו, מקצה לקצה</h2>
          <p>
            בהתחדשות אנחנו מטפלים בכל תהליך הרישוי והאישור עבורכם: בחירת המסלול המתאים, הכנת התיק,
            הגשה, מענה להערות, ומעקב עד קבלת האישור. עריכת הבקשה והתכנון נעשים אצלנו, בשירות{" "}
            <Link href="/guides/architect-mamad-role">תכנון אדריכלי ועריכת בקשה לממ״ד</Link>, והביצוע
            המלא נעשה בשירות{" "}
            <Link href="/services/building-mamad">בניית ממ״ד תקני</Link>. הכל חלק מהחבילה, לא שירות
            נפרד. לקריאה על התהליך הכולל:{" "}
            <Link href="/guides/mamad-process">תהליך בניית ממ״ד שלב אחר שלב</Link>.
          </p>
          <p>
            המסלול המתאים תלוי בסוג ההיתר. במסלול הפטור המהיר ראו את המדריך על{" "}
            <Link href="/guides/mamad-permit-exemption-2026">פטור מהיתר לממ״ד (תקנה 30ב׳)</Link>, ולמסלול
            חלופת שקד ראו{" "}
            <Link href="/chalufat-shaked">חלופת שקד</Link>. מתלבטים אם נדרש ממ״ד חדש או שמספיק שיפור מיגון
            קיים? ראו את ההשוואה{" "}
            <Link href="/guides/mamad-vs-shelter">ההבדל בין ממ״ד למיגונית</Link>.
          </p>
          <p>
            לפרטים על אישור ספציפי לפי סוג הבית: דירה בקומה דורשת לעיתים אישור ועדה מקומית בנוסף לפיקוד העורף, ראו את המדריך על{" "}
            <Link href="/memad/dira-bekoma">ממ״ד בדירה בקומה</Link>. לדירות גג ופנטהאוזים יש שיקולים נוספים של חיזוק קונסטרוקציה ואישור הסכמת דיירים, ראו את המדריך על{" "}
            <Link href="/memad/koma-elyona">ממ״ד בקומה עליונה</Link>.
          </p>
          </Prose>

          <aside>
            <TableOfContents items={TOC_ITEMS} />
          </aside>
        </div>
      </Section>

      {/* Trust differentiators: three sharp angles for pikud haoref approval. */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              למה בקשות נדחות
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              שלושה דברים שלא תמיד אומרים על אישור פיקוד העורף
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <article
              className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
              aria-labelledby="hfc-warn-uncertified"
            >
              <div className="text-2xl mb-2" aria-hidden>⚠️</div>
              <h3 id="hfc-warn-uncertified" className="font-extrabold text-red-900 text-lg mb-2">
                פריט אחד לא מאושר מחזיר את כל הבקשה
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                דלת הדף, חלון, או מערכת סינון מיצרן <strong>לא מאושר פקע״ר</strong> אינם
                בעיה &ldquo;קוסמטית&rdquo;. פריט אחד לא תקני יחזיר את כל הבקשה. דרשו
                מהקבלן בכתב, לפני חתימה, רשימת דגמים מאושרים עם מספרי אישור פקע״ר ותעודות
                בתוקף.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
              aria-labelledby="hfc-hidden-static"
            >
              <div className="text-2xl mb-2" aria-hidden>💰</div>
              <h3 id="hfc-hidden-static" className="font-extrabold text-amber-900 text-lg mb-2">
                לא כל קונסטרוקטור יודע ממ״ד
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                ממ״ד הוא אלמנט קונסטרוקטיבי מיוחד עם דרישות תקן 4422. <strong>לא כל
                קונסטרוקטור מתמחה בו</strong>. חישוב סטטי שלא נעשה לפי תקן הממ״ד יחזיר
                את הבקשה עם הערות. עלות חישוב ייעודי: 4,000-8,000 ₪. עלות חישוב שצריך
                להגיש מחדש: כפול, ועיכוב של 4-6 שבועות.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
              aria-labelledby="hfc-savings-electronic"
            >
              <div className="text-2xl mb-2" aria-hidden>💡</div>
              <h3 id="hfc-savings-electronic" className="font-extrabold text-emerald-900 text-lg mb-2">
                הגשה אלקטרונית מקצרת בשבועיים
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                הגשה דרך מערכת{" "}
                <a
                  href="https://www.oref-rishuy.org.il"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-emerald-900 underline underline-offset-4"
                >
                  rishuy.org.il
                </a>{" "}
                של פיקוד העורף מקצרת את לוח הזמנים ל-<strong>14 ימי עבודה</strong>{" "}
                במקום 30+ של הגשה ידנית. לתיק שלם ומסודר, התשובה מגיעה לעיתים תוך 7-10 ימים.
                בקשו מהקבלן וידוא שההגשה אלקטרונית.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <FAQ items={faqs} />

      <RelatedArticles currentSlug="home-front-command-approval" />

      <RelatedLinks
        seed="guides/home-front-command-approval"
        targets={[
          "building-mamad",
          "prefab-mamad",
          "architect-mamad-role",
          "compare-main",
          "mamad-process",
          "mamad-cost",
        ]}
      />

      <ContactCTA />
    </>
  );
}
