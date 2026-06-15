import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import TldrBlock from "@/components/TldrBlock";
import KeyStats from "@/components/KeyStats";
import ReadingTimeBadge from "@/components/ReadingTimeBadge";
import Byline from "@/components/Byline";
import { buildMetadata } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const DATE_PUBLISHED = "2026-06-15";
const DATE_MODIFIED = "2026-06-15";

// Word count estimated from the prose sections on this page.
const WORD_COUNT = 640;

const PATH = "/guides/mamad-specifications-2026";
const TITLE = "מפרט ודרישות ממ״ד תקני 2026: מידות, תקן פיקוד העורף ואישורים";
const DESCRIPTION =
  "דרישות ומפרט ממ״ד תקני בישראל: שטח מינימלי 9 מ״ר, נפח 22.5 מ״ק, עובי קירות לפי אזור, דלת וחלון הדף תקן 4570, מערכת אוורור וסינון אב״כ, ואישור פיקוד העורף תוך כ-14 ימי עבודה. כל הנתונים מאומתים מול מקור רשמי.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

// Every Q&A below is liftable verbatim and traces to the regulatory facts already
// published on /guides/home-front-command-approval (HFC standard) - no new number.
const faqs = [
  {
    q: "מה השטח המינימלי של ממ״ד דירתי?",
    a: "שטח רצפה מינימלי של 9 מ\"ר לממ\"ד דירתי, ובמקרים חריגים 5 מ\"ר. הנפח הפנימי המינימלי הוא 22.5 מ\"ק. הדרישות נקבעות על ידי פיקוד העורף (oref.org.il).",
  },
  {
    q: "אילו תקנים חלים על ממ״ד?",
    a: "דלת הדף וחלון הדף נדרשים לפי תקן 4570 ומיצרן מאושר. מבנה הממ\"ד נבחן מול דרישות פיקוד העורף לעובי קירות ותקרה, חישוב סטטי ומערכת אוורור וסינון מאושרת. את הנוסח הרשמי והעדכני יש לאמת באתר פיקוד העורף.",
  },
  {
    q: "האם מערכת אוורור וסינון היא חובה?",
    a: "כן. מאז 2024 מערכת אוורור וסינון אב\"כ לפי תקן 4570 היא חובה לקבלת טופס 4 בממ\"דים חדשים. המערכת מאפשרת שהייה אטומה בחירום ונבדקת כחלק מאישור פיקוד העורף.",
  },
  {
    q: "כמה זמן לוקח לקבל אישור פיקוד העורף על המפרט?",
    a: "בהגשה אלקטרונית מסודרת, פיקוד העורף משיב לרוב תוך כ-14 ימי עבודה. הבקשה נערכת על ידי אדריכל או מהנדס מורשה. במסלול הפטור (תקנה 30ב׳) מתווספת הודעת סיום ביצוע לרוב תוך 45 ימים מתום העבודה.",
  },
  {
    q: "מי קובע את המפרט המחייב?",
    a: "פיקוד העורף הוא הגוף הקובע את תקן המיגון. הוועדה המקומית מטפלת בהיבטי התכנון והבנייה. שני הגופים נפרדים, ואישור פיקוד העורף הוא תנאי חובה לכל ממ\"ד חוקי בישראל בכל מסלולי הרישוי.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="מדריך מפרט ותקנים"
        title="מפרט ודרישות ממ״ד תקני 2026"
        subtitle="המידות, התקנים והאישורים שהופכים חדר לממ״ד חוקי: שטח ונפח מינימליים, מעטפת, דלת וחלון הדף, מערכת סינון, ואישור פיקוד העורף. ריכוז מקצועי אחד עם מקור לכל נתון."
        crumbs={[{ name: "מדריכים", href: "/madrichim" }, { name: "מפרט ודרישות ממ״ד", href: PATH }]}
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
        ]}
      />

      {/* GEO entity block: the 40-60 word answer AI engines lift for "מה הדרישות לממ״ד".
          Facts mirror /guides/home-front-command-approval. includeFaqSchema=false so the
          page keeps a single FAQPage (the bottom FAQ). */}
      <AnswerBlock
        service="בניית ממ״ד תקני ואישורי פיקוד העורף"
        process="תכנון לפי תקן, חישוב סטטי, הגשה לפקע״ר וביצוע עד מסירה"
        answer={
          <>
            ממ״ד תקני בישראל נדרש לשטח רצפה מינימלי של 9 מ״ר (במקרים חריגים 5 מ״ר) ולנפח פנימי
            של 22.5 מ״ק, עם קירות ותקרה בעובי הנדרש לאזור, דלת וחלון הדף לפי תקן 4570, ומערכת
            אוורור וסינון מאושרת. כל אלה נבחנים באישור פיקוד העורף, התנאי לכל ממ״ד חוקי. בהתחדשות
            בינוי ויזמות מתכננים ומבצעים לפי המפרט מקצה לקצה.
          </>
        }
        faqs={[
          {
            q: "מהו השטח והנפח המינימליים לממ״ד דירתי?",
            a: "9 מ\"ר שטח רצפה (5 מ\"ר במקרים חריגים) ו-22.5 מ\"ק נפח פנימי, לפי דרישות פיקוד העורף.",
          },
          {
            q: "איזה תקן חל על דלת וחלון הממ״ד?",
            a: "דלת הדף וחלון הדף נדרשים לפי תקן 4570 ומיצרן מאושר. פריט לא תקני עלול להחזיר את כל הבקשה.",
          },
          {
            q: "האם מערכת סינון חובה?",
            a: "כן. מאז 2024 מערכת אוורור וסינון אב\"כ לפי תקן 4570 היא חובה לטופס 4 בממ\"דים חדשים.",
          },
        ]}
      />

      <TldrBlock
        bullets={[
          <><strong>מידות מינימום:</strong> שטח רצפה 9 מ״ר לממ״ד דירתי (5 מ״ר במקרים חריגים), נפח פנימי 22.5 מ״ק, וגובה תקני.</>,
          <><strong>מעטפת:</strong> עובי קירות ותקרה נקבע לפי האזור (באזורי קו קדמי הדרישה מחמירה יותר), עם חישוב סטטי של קונסטרוקטור.</>,
          <><strong>פתחים:</strong> דלת הדף וחלון הדף לפי <strong>תקן 4570</strong>, מיצרן מאושר בלבד.</>,
          <><strong>אוורור וסינון:</strong> מערכת אב״כ לפי תקן 4570 חובה לטופס 4 מאז 2024.</>,
          <><strong>אישור:</strong> פיקוד העורף הוא התנאי לכל ממ״ד חוקי, לרוב תוך כ-14 ימי עבודה בהגשה אלקטרונית מסודרת.</>,
        ]}
      />

      <Section tone="white">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Byline author="hithadshut-team" dateModified={DATE_MODIFIED} />
          <ReadingTimeBadge words={WORD_COUNT} />
        </div>
      </Section>

      <KeyStats
        title="מפרט ממ״ד תקני: המספרים המאומתים"
        stats={[
          {
            value: "9 מ״ר",
            label: "שטח רצפה מינימלי לממ״ד דירתי",
            note: "במקרים חריגים: 5 מ״ר.",
            source: { label: "פיקוד העורף", href: "https://www.oref.org.il" },
          },
          {
            value: "22.5 מ״ק",
            label: "נפח פנימי מינימלי",
            note: "ממ״ד דירתי סטנדרטי.",
            source: { label: "פיקוד העורף", href: "https://www.oref.org.il" },
          },
          {
            value: "תקן 4570",
            label: "דלת וחלון הדף",
            note: "מיצרן מאושר בלבד.",
            source: { label: "פיקוד העורף", href: "https://www.oref.org.il" },
          },
          {
            value: "כ-14 ימי עבודה",
            label: "זמן אישור פקע״ר",
            note: "בהגשה אלקטרונית מסודרת.",
            source: { label: "פיקוד העורף: מערכת רישוי", href: "https://www.oref-rishuy.org.il" },
          },
          {
            value: "45 ימים",
            label: "הודעת סיום ביצוע",
            note: "במסלול פטור (תקנה 30ב׳).",
            source: { label: "מינהל התכנון", href: "https://www.iplan.gov.il" },
          },
          {
            value: "אדריכל / מהנדס",
            label: "מי עורך ומגיש את הבקשה",
            note: "לא הקבלן ולא בעל הנכס.",
            source: { label: "פיקוד העורף", href: "https://www.oref.org.il" },
          },
        ]}
      />

      <Section>
        <Prose>
          <h2 id="dimensions">מידות ושטח: מה הופך חדר לממ״ד</h2>
          <p>
            ממ״ד דירתי נדרש לשטח רצפה מינימלי של <strong>9 מ״ר</strong>, ובמקרים חריגים מותר
            <strong> 5 מ״ר</strong>. בנוסף לשטח, נבדק הנפח הפנימי המינימלי של <strong>22.5 מ״ק</strong>{" "}
            וגובה תקני. המידות אינן שרירותיות: הן נגזרות מהצורך לאפשר שהייה בטוחה למשך זמן בחירום,
            ולכן פיקוד העורף בוחן אותן כחלק מאישור התכנית, עוד לפני תחילת הביצוע.
          </p>

          <h2 id="envelope">מעטפת: קירות, תקרה וחישוב סטטי</h2>
          <p>
            עובי הקירות והתקרה של הממ״ד נקבע לפי האזור שבו נבנה הבית, כאשר באזורי קו קדמי הדרישה
            מחמירה יותר. הממ״ד הוא אלמנט קונסטרוקטיבי מיוחד, ולכן הוא דורש חישוב סטטי של קונסטרוקטור
            המתמחה בכך, ולא חישוב בנייה רגיל. התאמה הנדסית למבנה הקיים היא חלק מהבדיקה, במיוחד
            כשמוסיפים ממ״ד לבית או לדירה קיימים.
          </p>

          <h2 id="openings">דלת וחלון הדף: תקן 4570</h2>
          <p>
            הדלת והחלון של הממ״ד אינם רכיבים רגילים. דלת הדף וחלון הדף נדרשים לפי{" "}
            <strong>תקן 4570</strong> ומיצרן מאושר בלבד. זו אחת הטעויות הנפוצות שמעכבות אישור:
            דלת, חלון או מערכת שאינם מיצרן מאושר עלולים להחזיר את כל הבקשה לפיקוד העורף. הפרטים
            המלאים נמצאים במדריך{" "}
            <Link href="/guides/home-front-command-approval">הוצאת היתר ואישור פיקוד העורף לממ״ד</Link>.
          </p>

          <h2 id="ventilation">מערכת אוורור וסינון</h2>
          <p>
            מערכת אוורור וסינון אב״כ לפי תקן 4570 מאפשרת שהייה אטומה בחדר המוגן בזמן חירום. מאז
            2024 המערכת היא <strong>חובה לקבלת טופס 4</strong> בממ״דים חדשים, ונבדקת כחלק מאישור
            פיקוד העורף. הרחבה מלאה על סוגי המערכות והתחזוקה שלהן במדריך{" "}
            <Link href="/guides/mamad-air-filter-system">מערכת אוורור וסינון לממ״ד</Link>.
          </p>

          <h2 id="approval">תקנים, רישוי ואישור פיקוד העורף</h2>
          <p>
            המפרט אינו עומד לבדו: הוא חלק מהליך רישוי. פיקוד העורף קובע את תקן המיגון ומאשר
            שהתכנון עומד בו, בעוד הוועדה המקומית מטפלת בהיבטי התכנון והבנייה. במסלול הפטור
            המהיר (<Link href="/guides/mamad-permit-exemption-2026">תקנה 30ב׳</Link>) בתים צמודי
            קרקע ובניינים עד 2 קומות פטורים מהיתר בנייה רגיל, על בסיס אישור פקע״ר והצהרת עורך
            בקשה. ההנחיות הרשמיות, טפסי הבקשה ודרישות התקן מתעדכנים מעת לעת ומפורסמים באתר{" "}
            <a
              href="https://www.oref.org.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              פיקוד העורף
            </a>
            . מומלץ לאמת כל נתון מול המקור הרשמי לפני הסתמכות.
          </p>

          <h2 id="our-approach">איך אנחנו מבצעים לפי המפרט</h2>
          <p>
            בהתחדשות בינוי ויזמות מתכננים ומבצעים את הממ״ד לפי המפרט המלא, מקצה לקצה: בחירת
            המסלול, חישוב סטטי קונסטרוקטיבי, בחירת דלת, חלון ומערכת סינון מיצרן מאושר, הגשה
            לפיקוד העורף, ומעקב עד האישור הסופי. הביצוע נעשה בשירות{" "}
            <Link href="/services/building-mamad">בניית ממ״ד תקני</Link>, והכל חלק מחבילה אחת
            תחת חוזה אחד. שוקלים מסלול התחדשות עירונית במקום ממ״ד פרטני? ראו את{" "}
            <Link href="/chalufat-shaked">חלופת שקד</Link>.
          </p>
        </Prose>
      </Section>

      <FAQ items={faqs} title="שאלות נפוצות: מפרט ודרישות ממ״ד" eyebrow="שאלות ותשובות" />

      <ContactCTA />
    </>
  );
}
