import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import FAQ from "@/components/FAQ";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/mechira";
const TITLE = "מכירת בניין, נחלה או קרקע: מי קונה ואיך מתחילים 2026";
const DESCRIPTION =
  "מוכרים בניין שלם, נחלה או קרקע עם היתר בנייה? שלושה מסלולים נפרדים, מה ההבדל ביניהם, ומי קונה כל סוג נכס בישראל. נקודת פתיחה לבעלים וליורשים.";
const PUBLISHED_DATE = "2026-07-21";
const MODIFIED_DATE = "2026-07-21";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מי קונה בניין שלם, נחלה או קרקע בישראל?",
    a: "שלושה סוגי קונים עיקריים: חברות רכישה ישירה שמתמחות בנכסים גדולים, משקיעים פרטיים וקרנות, וקונים פרטיים. בהתחדשות בינוי ויזמות רוכשים בניינים, נחלות וקרקעות במסלול ישיר, וגם עובדים מול משקיעים המתעניינים בנכסים כאלה, בפריסה ארצית.",
  },
  {
    q: "מה ההבדל בין מכירת נחלה למכירת בניין רגיל?",
    a: "נחלה מוחזקת ברוב המקרים בזכויות חכירה או בר-רשות מול רשות מקרקעי ישראל, לא בבעלות פרטית מלאה, ולכן העברת זכויות בה טעונה אישור רמ״י ולעיתים תשלום דמי היוון. בניין בבעלות פרטית נמכר כעסקת מקרקעין רגילה, בכפוף לטאבו ולזכויות הבנייה הרשומות. שני התהליכים שונים מהותית, ולכן יש להם שני מדריכים נפרדים באתר.",
  },
  {
    q: "ההורים שלי רוצים למכור נחלה או בניין ולעבור לדיור מוגן, מה הדרך הכי טובה?",
    a: "אין מסלול אחד שמתאים לכל משפחה. שני דברים משפיעים על הבחירה: סוג הנכס (נחלה מצריכה בדיקת זכויות מול רמ״י לפני כל צעד, בעוד בניין נבדק מול הטאבו), ולוח הזמנים הרצוי למעבר בפועל לדיור המוגן. מומלץ להתחיל בבדיקת מסמכי הזכויות, ובמקביל לקבל הערכה ראשונית לשווי, כדי לתכנן את התקציב בלי לחץ.",
  },
  {
    q: "אפשר למכור נחלה או בניין שירשתי, גם אם עוד לא הוצא צו ירושה?",
    a: "ברוב המקרים יש להסדיר צו ירושה או צו קיום צוואה, ובנחלה גם לעדכן את זהות הזכאי מול רמ״י (בהתאם לנוהל בן ממשיך), לפני השלמת מכירה. ניתן להתחיל בבדיקות ובפניות מקדימות לפני שהצו יצא, אך השלמת העסקה עצמה תלויה בהסדרת הזכויות. הפירוט המלא במדריכים הייעודיים לכל סוג נכס.",
  },
  {
    q: "האם צריך תיווך כדי למכור בניין, נחלה או קרקע?",
    a: "לא בהכרח. אפשר למכור ישירות לקונה שרוכש במסלול ישיר, בלי תיווך. בהתחדשות בינוי ויזמות פועלים כרוכש ישיר לשלושת סוגי הנכסים, עם כיסוי רישיון תיווך רלוונטי כרקע מקצועי, אך המסלול המוצע הוא רכישה ישירה מהבעלים, לא שירותי תיווך.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline={TITLE}
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb items={[{ name: "מכירת בניין, נחלה או קרקע", url: PATH }]} />

      <PageHero
        eyebrow="מכירת נכסים גדולים"
        title="מכירת בניין, נחלה או קרקע: מי קונה ואיך מתחילים"
        subtitle="נקודת פתיחה לבעלים בני 60 ומעלה וליורשים ששוקלים למכור בניין שלם, נחלה או קרקע עם היתר בנייה. שלושה מסלולים נפרדים, כל אחד עם המדריך המפורט שלו."
        crumbs={[{ name: "מכירת בניין, נחלה או קרקע", href: PATH }]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>

            <div
              className="rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-soft)] p-6 md:p-7 mb-6"
              aria-labelledby="bekitzur-mechira"
            >
              <h2 id="bekitzur-mechira" className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-3">
                בקצרה
              </h2>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-0">
                מכירת בניין שלם, נחלה או קרקע עם היתר בנייה הן שלוש עסקאות שונות מהותית, לא
                גרסה גדולה יותר של מכירת דירה. לכל אחת יש בדיקות זכויות משלה, קונים אופייניים
                משלה, ומסמכים שצריך להכין מראש. הצעד הראשון בכל שלושתן זהה: לזהות בדיוק איזה
                סוג נכס יש בידיכם ומה מצב הזכויות בו, לפני פנייה לכל קונה.
              </p>
            </div>

            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              מדריך זה מפנה לשלושה מדריכים ייעודיים, כל אחד למסלול נפרד: מכירת בניין שלם לבעלים
              של בניין בבעלות אחת, מכירת נחלה לבעלי משק חקלאי במושב, ומכירת קרקע עם היתר בנייה
              לבעלי מגרש עם היתר בתוקף. שלושת המדריכים מפורטים בכרטיסים למטה. אם אתם מוכרים דירה
              בודדת, כולל דירה בבניין עם פוטנציאל פינוי בינוי, המדריכים המתאימים נמצאים במקום
              אחר באתר: ראו{" "}
              <Link
                href="/pinui-binui/mechirat-dira"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת דירה לפני פינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight">
              שלושת המסלולים בקצרה
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ContentSection level={3} id="sq-binyan" title="בניין שלם">
              <p>
                בניין מגורים או מסחר בבעלות אחת, שלא עבר פיצול רישומי לדירות נפרדות. נבדק מול
                נסח טאבו וזכויות בנייה. מדריך{" "}
                <Link
                  href="/mechira/binyan-shalem"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  מכירת בניין שלם
                </Link>{" "}
                מפרט מה צריך להכין ומה קובע את השווי.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-nachla" title="נחלה">
              <p>
                משק חקלאי במושב, מוחזק ברוב המקרים בזכויות חכירה או בר-רשות מול רשות מקרקעי
                ישראל, לא בבעלות פרטית מלאה. מדריך{" "}
                <Link
                  href="/mechira/nachla"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  מכירת נחלה
                </Link>{" "}
                מסביר בן ממשיך, פיצול והיוון.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-karka" title="קרקע עם היתר">
              <p>
                מגרש שקיים לו היתר בנייה בתוקף, לרוב מיועד לקונה שרוצה לבנות בעצמו או ליזם.
                מדריך{" "}
                <Link
                  href="/mechira/karka-im-heter"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  מכירת קרקע עם היתר בנייה
                </Link>{" "}
                מפרט זכויות בנייה וייעוד.
              </p>
            </ContentSection>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection
            id="hurim-diur-mugan"
            title="ההורים רוצים למכור נחלה או בניין ולעבור לדיור מוגן"
          >
            <p>
              זו שאלה שחוזרת הרבה: משפחה עם הורה מבוגר שמחזיק בניין או נחלה, ורוצה למכור כדי
              לממן מעבר לדיור מוגן. אין תשובה אחידה, אבל שני דברים כדאי לברר קודם: מה בדיוק סוג
              הנכס (נחלה טעונה בדיקת זכויות מול רמ״י שלוקחת זמן, בניין נבדק מול הטאבו ובדרך כלל
              מהיר יותר), ומה לוח הזמנים הרצוי בפועל למעבר. תכנון מוקדם של שני התהליכים במקביל,
              בדיקת הזכויות וחיפוש המקום בדיור המוגן, מונע מצב שבו אחד מהם מעכב את השני. למשפחות
              ששוקלות את השאלה הזאת בהקשר של דירה בפרויקט פינוי בינוי, ולא בניין או נחלה, קיים
              מדריך ייעודי ב
              <Link
                href="/pinui-binui/diur-mugan"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת דירה ומעבר לדיור מוגן
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock publishedDate={PUBLISHED_DATE} modifiedDate={MODIFIED_DATE} />

      <RelatedLinks
        seed="mechira/hub"
        targets={[
          "mechira-binyan-shalem",
          "mechira-nachla",
          "mechira-karka-im-heter",
          "pinui-binui-diur-mugan",
          "pinui-binui-yorshim-mechira",
          "pinui-binui-kshishim",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על מכירת בניין, נחלה וקרקע"
        tone="soft"
        includeSchema
      />
    </>
  );
}
