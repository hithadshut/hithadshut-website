import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import SellerLeadForm from "@/components/SellerLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const PATH = "/pinui-binui/mechirat-dira";
const TITLE = "מכירת דירה לפני פינוי בינוי: כמה שווה הפוטנציאל";
const DESCRIPTION =
  "אפשר למכור דירה בבניין עם פוטנציאל פינוי בינוי גם לפני חתימת הסכם, בלי הסכמת שכנים. כמה שווה הפוטנציאל, למי מוכרים, ומתי עדיף למכור במקום לחכות. ייעוץ ראשוני חינם.";
const PUBLISHED_DATE = "2026-07-14";
const MODIFIED_DATE = "2026-07-14";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "אפשר למכור דירה בלי הסכמת השכנים?",
    a: "כן. מכירת דירה היא עסקה פרטית בין המוכר לקונה, בדיוק כמו מכירת כל דירה אחרת, ואינה דורשת הסכמה של שכנים או של שאר בעלי הדירות בבניין. רף ההסכמה של הדיירים (למשל 67% בפינוי בינוי) נוגע להחלטה המשותפת של הבניין להיכנס לפרויקט, לא לזכות של בעל דירה בודד למכור את הנכס שלו.",
  },
  {
    q: "מה קורה אם הפרויקט מתקדם אחרי שמכרתי?",
    a: "לאחר המכירה, כל הזכויות והחובות הקשורות לדירה עוברות לקונה החדש, כולל כל מעמד עתידי בפרויקט פינוי בינוי אם וכאשר יתקדם. המוכר אינו זכאי עוד לתמורה עתידית מהפרויקט, מאחר שהתמורה עבור הפוטנציאל כבר משתקפת במחיר המכירה שסוכם בין הצדדים.",
  },
  {
    q: "אפשר למכור דירת ירושה לפני שהרישום בטאבו הושלם על שמי?",
    a: "בדרך כלל כן, בכפוף להוצאת צו ירושה או צו קיום צוואה מהרשם לענייני ירושה או מבית המשפט לענייני משפחה, ולרישום הערת אזהרה בטאבו לטובת הקונה עד השלמת העברת הבעלות. תהליך זה דורש ליווי צמוד של עורך דין מקרקעין, ולעיתים גם הסכם בין מספר יורשים אם הדירה עברה בירושה משותפת.",
  },
  {
    q: "כמה זמן לוקחת מכירת דירה כזו?",
    a: "מכירת דירה בבניין עם פוטנציאל פינוי בינוי מתנהלת כמו כל עסקת מכר: בדיקת מסמכים ומצב הפרויקט, זיכרון דברים או הצעה, ולאחר מכן חוזה מכר מול עורכי דין של שני הצדדים. משך הזמן בפועל תלוי במורכבות בדיקת הנאותות של הנכס והפרויקט הספציפי, ואינו ניתן להבטחה מראש.",
  },
  {
    q: "מי משלם מס שבח במכירה כזו?",
    a: "ככלל, המוכר הוא הצד החייב במס שבח על עסקת המכירה, בכפוף לפטורים הקיימים בחוק, כמו הפטור על דירת ירושה יחידה לפי סעיף 49ב(5) לחוק מיסוי מקרקעין (שבח ורכישה), תשכ״ג-1963, בהתקיים התנאים המצטברים שהחוק קובע. זה נפרד לחלוטין משאלת המיסוי בהסכם פינוי בינוי עתידי. מומלץ להתייעץ עם רואה חשבון או עורך דין מיסוי מקרקעין לפני מכירה.",
  },
  {
    q: "אפשר למכור אחרי שכבר חתמתי הסכם עם היזם?",
    a: "בדרך כלל כן, אך יש לבדוק את סעיף המחאת הזכויות בהסכם הפינוי הקיים: ברוב ההסכמים נדרשת הודעה ליזם, ולעיתים גם הסכמתו, להעברת הזכויות והחובות לקונה החדש. מומלץ לבדוק את הסעיף הספציפי בליווי עורך דין מקרקעין לפני סגירת עסקה, כדי לוודא שהקונה נכנס לנעליכם באופן מסודר.",
  },
  {
    q: "האם המחיר יהיה גבוה יותר אם אחכה שהפרויקט יתקדם?",
    a: "אין תשובה אחידה. ככל שהפרויקט מתקדם (יזם נבחר, תכנית מאושרת, היתר בנייה), רמת הוודאות עולה וזה יכול להשתקף בתמחור. מנגד, המתנה פירושה גם שנים נוספות של אי-ודאות, ולעיתים גם עיכובים או שינויים בפרויקט. כל מקרה נבדק לגופו לפי שלב הפרויקט, המיקום ומצב הבניין.",
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
      <SchemaBreadcrumb
        items={[
          { name: "פינוי בינוי", url: "/pinui-binui" },
          { name: "מכירת דירה לפני פינוי בינוי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="פינוי בינוי · מכירת דירה"
        title="מכירת דירה לפני פינוי בינוי: כמה שווה הפוטנציאל ולמי מוכרים"
        subtitle="מדריך 2026 לבעלי דירות ויורשים בבניינים עם פוטנציאל פינוי בינוי: מתי כדאי למכור, מתי כדאי לחכות, ואיך בודקים את שווי הפוטנציאל."
        crumbs={[
          { name: "פינוי בינוי", href: "/pinui-binui" },
          { name: "מכירת דירה", href: PATH },
        ]}
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
                בקצרה: מכירת דירה עם פוטנציאל פינוי בינוי
              </h2>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-0">
                דירה בבניין עם פוטנציאל פינוי בינוי ניתנת למכירה גם לפני חתימת הסכם וגם במהלכו,
                בדיוק כמו כל דירה אחרת. הקונים מתמחרים את הפוטנציאל לפי שלב הפרויקט, רמת הוודאות
                שלו, והתמורות הצפויות. המכירה אינה דורשת הסכמה של שאר בעלי הדירות בבניין.
                בהתחדשות בינוי ויזמות רוכשים דירות, בניינים ומגרשים כאלה במסלול ישיר, וגם עובדים
                מול משקיעים המתעניינים בנכסים מסוג זה.
              </p>
            </div>

            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              בעלי דירות ויורשים בבניינים ישנים שנכללים במתחם{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>{" "}
              עומדים לא פעם בפני החלטה: להישאר עד תום התהליך ולקבל את דירת התמורה בעוד שנים, או
              למכור את הדירה עכשיו עם הפוטנציאל שהיא נושאת. שתי האפשרויות לגיטימיות. מדריך זה
              מסביר איך מתומחר הפוטנציאל, למי מוכרים, ומה חשוב לבדוק לפני שמחליטים.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kama-shave" title="כמה שווה דירה עם פוטנציאל פינוי בינוי">
            <p>
              אין נוסחה אחידה או אחוז קבוע שמתווסף למחיר דירה בגלל פוטנציאל פינוי בינוי. השווי
              נגזר משילוב של כמה גורמים, וכל מקרה נבדק לגופו על ידי הקונה ושמאי מטעמו.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">שלב הפרויקט.</strong> מתחם מוכרז,
                שלב החתמות דיירים, יזם נבחר, תכנית מאושרת בוועדה המקומית, או היתר בנייה בתוקף.
                ככל שהפרויקט מתקדם בשלבים אלה, כך עולה רמת הוודאות שהוא אכן יצא לפועל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רמת הוודאות של הפרויקט הספציפי.</strong>{" "}
                זהות היזם, עמידה בלוחות זמנים עד כה, ומידת ההתארגנות של הדיירים במתחם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התמורות הצפויות.</strong> תוספת
                המ״ר, החניה והמחסן שדירת התמורה אמורה לכלול, לפי מה שמפורט במדריך{" "}
                <Link
                  href="/pinui-binui/temurot"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  תמורות בפינוי בינוי
                </Link>
                , ובדיקה ראשונית באמצעות{" "}
                <Link
                  href="/pinui-binui/machshvon-temurot"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  מחשבון פינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מיקום וגודל הבניין.</strong> אזור
                ביקוש, זכויות בנייה, וגודל המתחם משפיעים על האטרקטיביות של הפרויקט לקונים ולמשקיעים.
              </li>
            </ul>
            <p className="mt-4 font-bold text-[var(--color-primary)]">
              אין אחוז אחיד שמתווסף למחיר בגלל הפוטנציאל. כל מקרה נבדק לגופו לפי הגורמים האלה יחד.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              רוצים בדיקה ראשונית של הנכס שלכם? השאירו פרטים או התקשרו ל
              <a
                href={`tel:${site.phoneDial}`}
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                {site.phone}
              </a>
              .
            </p>
          </div>
          <SellerLeadForm />
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="mochrim-o-mechakim" title="למכור עכשיו או לחכות לפרויקט">
            <p>
              זו ההחלטה המרכזית, ואין לה תשובה אחת נכונה לכולם. לכל צד יתרונות ועלויות אמיתיים,
              והם תלויים בנסיבות האישיות, בגיל, ובאופק הזמן של בעל הדירה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">מה המתנה עשויה להוסיף:</strong>{" "}
              ככל שהפרויקט מתקדם בשלביו, לרוב עולה גם רמת הוודאות וגם מידת הפירוט של התמורה
              הצפויה, מה שיכול להקל על תמחור מדויק יותר בהמשך, ובסופו של דבר, אם הפרויקט אכן
              יוצא לפועל, על קבלת דירת תמורה כפי שמפורט במדריך התמורות.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">מה המתנה עולה בפועל:</strong> פרויקט
              פינוי בינוי טיפוסי אורך שנים רבות מרגע ההתארגנות ועד מסירת הדירה החדשה, כפי שמפורט
              במדריך{" "}
              <Link
                href="/madrichim/luach-zmanim-pinui-binui-2026"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                לוח הזמנים לפינוי בינוי 2026
              </Link>
              . בנוסף, פרויקטים עלולים להיתקע, להתעכב, או להתחלף ביזם אחר תוך כדי דרך.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">גורמי סיכון שכדאי לשקול:</strong>{" "}
              עיכוב הפרויקט בשלב התכנוני, החלפת יזם באמצע הדרך, ומצב שבו הפרויקט נתקע בגלל{" "}
              <Link
                href="/pinui-binui/sarvan"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                דייר סרבן
              </Link>{" "}
              אחד או יותר במתחם. כל אלה יכולים להאריך את הציפייה מעבר להערכה המקורית.
            </p>
            <p>
              ההחלטה הנכונה תלויה בשאלה כמה זמן אתם מוכנים או יכולים לחכות, ומה חשוב לכם יותר:
              ודאות של מכירה עכשיו, או האפשרות (לא ההבטחה) לתמורה גדולה יותר בעתיד.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="yorshim" title="ירשתם דירה בבניין ישן">
            <p>
              ירושה של דירה עצמה אינה עסקת מקרקעין וממילא אינה ממוסה במועד ההעברה מהמוריש
              ליורשים.{" "}
              <span className="text-sm text-[var(--color-muted)]">
                (מקור: סעיף 4 לחוק מיסוי מקרקעין (שבח ורכישה), תשכ״ג-1963, נבו.)
              </span>{" "}
              מס שבח עשוי לחול רק בשלב מאוחר יותר, כאשר היורש מוכר את הדירה שירש.
            </p>
            <p>
              במקרים מסוימים קיים פטור ממס שבח על מכירת דירת ירושה, לפי סעיף 49ב(5) לחוק מיסוי
              מקרקעין, בכפוף לתנאים מצטברים שקובע החוק (בין היתר לגבי זהות היורש וזכאות המוריש
              לפטור אילו מכר את הדירה בעצמו).{" "}
              <span className="text-sm text-[var(--color-muted)]">
                (מקור: סעיף 49ב(5) לחוק מיסוי מקרקעין (שבח ורכישה), תשכ״ג-1963, נבו.)
              </span>{" "}
              בדיקת הזכאות לפטור היא פרטנית, ודורשת ליווי של עורך דין מקרקעין או רואה חשבון.
            </p>
            <p>
              כאשר דירה עוברת בירושה למספר יורשים, הם יכולים למכור אותה יחד כמכירה משותפת, או
              להסדיר ביניהם תחילה הסכם חלוקת עיזבון שקובע מי מקבל מה, לפני שמתקדמים למכירה או
              להמשך בפרויקט פינוי בינוי. חלוקה כזו דורשת הסכמה בין היורשים וליווי משפטי מסודר.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              מידע זה אינו מהווה ייעוץ משפטי או מיסויי. מומלץ להתייעץ עם עורך דין מקרקעין ורואה
              חשבון לפני קבלת החלטות בנוגע לדירת ירושה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kshishim" title="בני 70 ומעלה: הזכויות שלכם, וגם אפשרות המכירה">
            <p>
              דיירים בני 70 ומעלה בפרויקט פינוי בינוי זכאים להגנות מיוחדות: דירת תמורה ולפחות
              חלופה אחת נוספת (דיור מוגן, דירה חלופית, או שתי דירות בשווי הדירה החדשה), ומגיל 75
              ומעלה, זכאות לכל החלופות יחד. הפירוט המלא של זכויות אלה מופיע במדריך{" "}
              <Link
                href="/pinui-binui/kshishim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                זכויות קשישים בפינוי בינוי
              </Link>
              .
            </p>
            <p>
              לצד הזכויות האלה, מכירת הדירה היא אפשרות לגיטימית נוספת, ולא סתירה להן. עבור בעל
              דירה מבוגר ששוקל אם עדיף לו לחכות שנים לתום התהליך או למכור עכשיו ולקבל ודאות
              מיידית, שתי הדרכים ראויות לשיקול רגוע, ללא לחץ, ורצוי בליווי בן משפחה ועורך דין
              דיירים מנוסה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="lemi-mochrim" title="למי מוכרים, ואיך זה עובד מולנו">
            <p>
              בהתחדשות בינוי ויזמות רוכשים דירות, בניינים ומגרשים במסלול ישיר, וגם עובדים מול
              משקיעים המתעניינים בנכסים עם פוטנציאל התחדשות עירונית. התהליך מול הצוות שלנו פשוט
              ושקוף:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פנייה ראשונית.</strong> משאירים
                פרטים או מתקשרים, ומספרים בקצרה על הנכס ועל מצב הפרויקט אם ידוע.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת הנכס והפרויקט.</strong>{" "}
                בודקים את מסמכי הבעלות, את שלב הפרויקט במתחם, ואת הגורמים שמשפיעים על השווי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הצעה.</strong> מקבלים הצעה
                מסודרת בכתב, בלי לחץ להחליט מיד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ליווי משפטי עצמאי.</strong> המוכר
                מלווה בעורך דין מטעמו לאורך כל התהליך, עד לחתימה ולהעברת הבעלות.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "חוק מיסוי מקרקעין (שבח ורכישה), נבו",
          url: "https://www.nevo.co.il/",
        }}
      />

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              שוקלים למכור דירה בבניין ישן? בואו נבדוק יחד כמה שווה הפוטנציאל.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו רוכשים דירות, בניינים ומגרשים במסלול ישיר, ועובדים גם מול משקיעים. בדיקה
              ראשונית ללא עלות, ללא התחייבות.
            </p>
          </div>
          <SellerLeadForm />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="pinui-binui/mechirat-dira"
        targets={[
          "pinui-binui",
          "pinui-binui-temurot",
          "pinui-binui-sarvan",
          "pinui-binui-kshishim",
          "pinui-binui-machshvon",
          "contact",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על מכירת דירה לפני פינוי בינוי"
        tone="soft"
        includeSchema
      />

      <ContactCTA
        title="רוצים בדיקה ראשונית של הנכס שלכם?"
        subtitle="השאירו פרטים ונחזור אליכם תוך שעות עם התייחסות ראשונית למצב הנכס והפרויקט."
        defaultService="urban-renewal"
        prioritizeUrbanRenewal
      />
    </>
  );
}
