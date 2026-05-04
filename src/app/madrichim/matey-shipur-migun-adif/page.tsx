import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/madrichim/matey-shipur-migun-adif";
const TITLE = "מתי שיפור מיגון עדיף על בניית ממ״ד חדש | התחדשות";
const DESCRIPTION =
  "שיפור מיגון אינו תחליף לממ״ד, אך הוא הפתרון הנכון בנסיבות מסוימות. מסגרת החלטה: מתי שיפור מיגון עדיף, מתי לא, ואיך להחליט.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל המהותי בין שיפור מיגון לממ״ד תקני?",
    a: "ממ״ד תקני נבנה לפי תקן פיקוד העורף: קירות בטון מזוין בעובי 25 ס&ldquo;מ, דלת הדף, חלון תקני, מערכת אוורור וסינון. רמת הגנה מקסימלית. עלות 160-450 אלף ש&ldquo;ח. שיפור מיגון מחזק חדר קיים: חיזוק קירות, החלפת דלת וחלון, אטימה. רמת הגנה חלקית. עלות 80-150 אלף ש&ldquo;ח. ההבדל לא רק בעלות, אלא ברמת ההגנה.",
  },
  {
    q: "האם שיפור מיגון מספיק נגד טיל?",
    a: "תלוי בסוג הטיל ובאזור. נגד רקטה קצרת טווח ופיצוץ באזור הסמוך, שיפור מיגון מספק הגנה משמעותית. נגד פגיעה ישירה של טיל מתקדם, אינו מספיק. באזורים שאינם בקו עימות הדוק, שיפור מיגון בדרך כלל מספק. בקו עימות (גולן, גליל, עוטף עזה), נדרש ממ״ד תקני. בערי המרכז (תל אביב, חיפה, ירושלים), שיפור מיגון לרוב מספיק נגד האיומים הסבירים.",
  },
  {
    q: "מתי שיפור מיגון פחות יעיל מממ״ד?",
    a: "שיפור מיגון פחות יעיל בשלושה מצבים: בקו עימות (לא מתאים), כשהחדר הקיים בעייתי קונסטרוקטיבית (קירות גבס, חלונות גדולים), וכשנדרשת הגנה מפני חומרים כימיים (NBC) שדורשת מערכת סינון תקנית. בכל אחד ממצבים אלה, ממ״ד תקני הוא הפתרון. שיפור מיגון מתאים לבית במצב סביר באזור שאינו מסוכן במיוחד.",
  },
  {
    q: "כמה זמן לוקח שיפור מיגון?",
    a: "שיפור מיגון לוקח 1-3 חודשים מהחלטה ועד מסירה. שלב התכנון: 1-2 שבועות. שלב הביצוע: 3-10 שבועות, תלוי בהיקף. שיפור מיגון בסיסי (החלפת דלת וחלון) לוקח שבועות בודדים. שיפור מיגון מורכב (חיזוק קונסטרוקטיבי) לוקח עד 3 חודשים. הזמן הקצר הוא יתרון משמעותי לעומת ממ״ד תקני שלוקח 4-10 חודשים.",
  },
  {
    q: "האם שיפור מיגון מעלה את ערך הבית?",
    a: "כן, אך פחות מממ״ד תקני. שיפור מיגון מעלה את ערך הבית ב-3%-7% משווי השוק. ממ״ד תקני מעלה ב-7%-15%. ההפרש נובע מההעדפה של קונים לממ״ד תקני שמספק הגנה מקסימלית. בשוק ב-2026, נוכחות ממ״ד תקני היא קריטריון חיפוש מרכזי, ובתים ללא ממ״ד תקני מתקשים יותר במכירה.",
  },
  {
    q: "האם הוועדה המקומית מאשרת שיפור מיגון?",
    a: "תלוי בהיקף. שיפור פנימי בלבד (החלפת דלת, אטימה, חיזוק קירות פנימיים) בדרך כלל לא דורש אישור. שיפור שמשנה את חזית הבניין (החלפת חלון, חיזוק חיצוני) עלול לדרוש אישור הוועדה. שיפור שמערב אישור פיקוד העורף (כדי לקבל מעמד תקני יותר) דורש הליך אישור מסודר. רוב פרויקטי שיפור מיגון פטורים מאישורים פורמליים.",
  },
  {
    q: "מה אם הבית במתחם פינוי בינוי עתידי?",
    a: "שיקול חשוב. אם הבית מועד לפינוי בינוי בעתיד הקרוב (5-10 שנים), השקעה בשיפור מיגון של 100,000 ש&ldquo;ח עלולה להיות הפסד כלכלי משום שהבית ייהרס. אם הפינוי בינוי בעוד 10+ שנים, או לא ודאי, שיפור מיגון מספק הגנה לתקופת הביניים. ההחלטה דורשת הערכה ריאלית של הסיכוי לפינוי בינוי, לא רק תקווה.",
  },
  {
    q: "האם זה פתרון לקשישים?",
    a: "לעיתים. דיירים בני 70+ שמתקשים לעבור לדיור חלופי לתקופת ביניים ארוכה (כמו בפינוי בינוי או חלופת שקד) עשויים להעדיף שיפור מיגון: פתרון מהיר (1-3 חודשים), ללא צורך בפינוי, ובעלות מתונה. הסיכון: שיפור מיגון לא תחליף לממ״ד תקני, ורמת ההגנה פחותה. ההחלטה תלויה באיום הרלוונטי ובמצב הבריאות.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="מתי שיפור מיגון עדיף על בניית ממ״ד חדש"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "מתי שיפור מיגון עדיף", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · מיגון"
        title="מתי שיפור מיגון עדיף על בניית ממ״ד חדש"
        subtitle="מאמר מנחה 2026: מסגרת החלטה לבעלי בית בין ממ״ד תקני לשיפור מיגון, מתי כל פתרון מתאים, וטעויות נפוצות."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "מתי שיפור מיגון", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              שיפור מיגון אינו תחליף לממ״ד תקני. הוא פתרון בפני עצמו שמתאים בנסיבות מסוימות. בעלי בית שעומדים בפני בחירה בין השניים מתבלבלים לעיתים, ובוחרים את הפתרון הלא נכון. מאמר זה מספק מסגרת החלטה ברורה: מתי שיפור מיגון עדיף, מתי לא, ואילו שיקולים נכנסים בכל מצב. למידע מקיף על שיפור מיגון ראו את עמוד{" "}
              <Link
                href="/services/room-reinforcement"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                שיפור מיגון
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hashvaa-mehotit" title="ההשוואה המהותית">
            <p>
              לפני שמחליטים, חשוב להבין את ההבדל המהותי. ממ״ד תקני וש שיפור מיגון מתחילים מאותו רעיון (חדר מוגן בבית), אך מגיעים לתוצאה שונה.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="ממ״ד תקני לעומת שיפור מיגון: השוואה מקיפה"
              columns={[
                { key: "mamad", header: "ממ״ד תקני" },
                { key: "shipur", header: "שיפור מיגון" },
              ]}
              rows={[
                {
                  label: "סוג הבנייה",
                  cells: { mamad: "חדר חדש מבטון מזוין", shipur: "חיזוק חדר קיים" },
                },
                {
                  label: "עובי קירות",
                  cells: { mamad: '25 ס"מ בטון מזוין', shipur: "חיזוק על קיר קיים" },
                },
                {
                  label: "דלת",
                  cells: { mamad: "דלת הדף תקנית פקע״ר", shipur: "דלת חיזוק או הדף" },
                },
                {
                  label: "חלון",
                  cells: { mamad: "חלון תקני פקע״ר", shipur: "חלון מוגן או תריס הדף" },
                },
                {
                  label: "מערכת אוורור",
                  cells: { mamad: "סינון NBC תקני", shipur: "אטימה ואוורור בסיסי" },
                },
                {
                  label: "אישור פקע״ר",
                  cells: { mamad: "תקני, מוכר", shipur: "לרוב לא תקני, חיזוק בלבד" },
                },
                {
                  label: "עלות",
                  cells: { mamad: '160-450 אלף ש"ח', shipur: '80-150 אלף ש"ח' },
                },
                {
                  label: "זמן ביצוע",
                  cells: { mamad: "4-10 חודשים", shipur: "1-3 חודשים" },
                },
                {
                  label: "רמת הגנה",
                  cells: { mamad: "מקסימלית, נגד כל איום", shipur: "חלקית, נגד הדף ורסיסים" },
                },
              ]}
              footnote="שיפור מיגון אינו ממ״ד. הוא פתרון אחר שמתאים בנסיבות אחרות."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="metay-shipur-adif" title="ארבעה מצבים שבהם שיפור מיגון עדיף">
            <p>
              במצבים מסוימים, שיפור מיגון הוא הפתרון הנכון יותר מממ״ד תקני. ארבעה תרחישים מרכזיים:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">ממ״ד תקני אינו אפשרי קונסטרוקטיבית.</strong> בבניינים ישנים שלא מסוגלים לשאת תוספת ממ״ד תקני, שיפור מיגון הוא האלטרנטיבה. במצב זה, שיפור מיגון מספק הגנה משמעותית למרות שאינו תקני. למידע על אפשרויות בבניין ישן ראו את המדריך על{" "}
                <Link
                  href="/memad/binyan-yashan"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ממ״ד לבניין ישן
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תקציב מוגבל.</strong> אם התקציב הזמין הוא 80-150 אלף ש&ldquo;ח, שיפור מיגון אפשרי. ממ״ד תקני שעולה 280-450 אלף ש&ldquo;ח בבניין ישן יוצא מתחום התקציב.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פתרון מיידי נדרש.</strong> ממ״ד תקני לוקח 4-10 חודשים. שיפור מיגון 1-3 חודשים. אם נדרש פתרון מיידי בגלל מצב ביטחוני או אישי, שיפור מיגון מספק תשובה מהירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בית מועד להתחדשות עירונית.</strong> אם הבית מועד לפינוי בינוי או חלופת שקד בעוד 5-7 שנים, השקעה כבדה בממ״ד תקני אינה כלכלית. שיפור מיגון מספק הגנה לתקופת הביניים בעלות נמוכה.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-mamad-adif" title="חמישה מצבים שבהם ממ״ד תקני נדרש">
            <p>
              במצבים אחרים, ממ״ד תקני הוא הפתרון היחיד הראוי. חמישה תרחישים שבהם שיפור מיגון אינו מספיק:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">קו עימות.</strong> גולן, גליל, עוטף עזה, קו הפרידה. באזורים אלה האיומים גבוהים, ושיפור מיגון אינו מספק הגנה הולמת. ממ״ד תקני הוא הסטנדרט המינימלי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הצורך בהגנה כימית-ביולוגית.</strong> שיפור מיגון אינו כולל מערכת סינון NBC. ממ״ד תקני כולל. במצבים שבהם איום כימי-ביולוגי רלוונטי, ממ״ד תקני נדרש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בית פרטי חדש או בנייה חדשה.</strong> בבית חדש, ממ״ד תקני הוא הסטנדרט המקובל וחובה לפי החוק. שיפור מיגון אינו רלוונטי בבנייה חדשה. למידע ראו את המדריך על{" "}
                <Link
                  href="/memad/bayit-prati"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ממ״ד לבית פרטי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">נדרש מעמד רשמי של ממ״ד.</strong> במצבים מסוימים (סיבות ביטחוניות, ביטוחיות, או רגולטוריות), נדרש מעמד רשמי של ממ״ד תקני המוכר על ידי פיקוד העורף. שיפור מיגון לא מספק את המעמד הזה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">משפחה גדולה או צרכים מיוחדים.</strong> ממ״ד תקני הוא חדר נפרד שמשמש כחדר רגיל ביומיום. שיפור מיגון מותקן בחדר קיים, ועלול להגביל את השימוש בחדר. למשפחות שצריכות חלל נוסף, ממ״ד תקני מספק יותר ערך.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="masgeret-haclata" title="מסגרת החלטה: 4 שאלות">
            <p>
              לפני שמחליטים, ענו על ארבע השאלות הבאות:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">איפה הבית?</strong> קו עימות = ממ״ד תקני. אזור מרכז = שיפור מיגון לרוב מספיק.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה התקציב?</strong> פחות מ-150 אלף ש&ldquo;ח = שיפור מיגון. יותר מ-200 אלף = ממ״ד תקני.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה האופק?</strong> פינוי בינוי בעוד 5-7 שנים = שיפור מיגון. בית קבוע = ממ״ד תקני.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה מסוגל המבנה?</strong> בניין ישן ופגום = שיפור מיגון. בניין יציב = ממ״ד תקני.
              </li>
            </ol>
            <p>
              עיון נוסף על מסגרת המיגון בישראל זמין באתר{" "}
              <a
                href="https://www.idf.il/he/minisites/pikud-haoref/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                פיקוד העורף
              </a>
              {" "}ובמנהל התכנון.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="taoyt-pat" title="טעויות נפוצות בבחירה">
            <p>
              חמש טעויות נפוצות בבחירה בין שיפור מיגון לממ״ד תקני:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בחירה לפי מחיר בלבד.</strong> שיפור מיגון זול יותר, אך אם נדרש ממ״ד תקני (קו עימות), השקעה בשיפור מיגון היא הפסד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חוסר התחשבות באופק הזמן.</strong> בית שמועד לפינוי בינוי לא מצדיק ממ״ד תקני יקר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אמון בקבלן שמציע &ldquo;שיפור מיגון תקני&rdquo;.</strong> אין כזה דבר. שיפור מיגון אינו מקבל מעמד תקני של ממ״ד פקע״ר. קבלן שטוען זאת אינו מקצועי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיסכון על דלת הדף.</strong> דלת חיזוק רגילה אינה תחליף לדלת הדף תקנית. בשיפור מיגון מקצועי, דלת הדף הוא הרכיב המרכזי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דחיית ההחלטה לאינסוף.</strong> &ldquo;נחכה לפינוי בינוי&rdquo; במשך 10+ שנים בלי הגנה הוא סיכון. החלטה כלשהי טובה מאי-החלטה.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "פיקוד העורף: מערך המיגון",
          url: "https://www.idf.il/he/minisites/pikud-haoref/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              מתלבטים בין ממ״ד לשיפור מיגון? בדקו את האפשרויות.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה שמבצעת ממ״דים תקניים ושיפור מיגון. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד או שיפור מיגון: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי."
            defaultService="ממ״ד / מיגון"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/shipur-migun"
        targets={["room-reinforcement", "building-mamad", "memad-binyan-yashan"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על שיפור מיגון מול ממ״ד"
        tone="soft"
        includeSchema
      />
    </>
  );
}
