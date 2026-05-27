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
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/hashvaa/migun-vs-pinui";
const TITLE = "מיגון מול פינוי בינוי 2026: מתי מה מתאים | התחדשות";
const DESCRIPTION =
  "שיפור מיגון מול פינוי בינוי: שתי גישות שונות לחלוטין, שתי תקציבים שונים, ושתי לוחות זמנים. מדריך 2026 להחלטה מבוססת לפי מצב הבניין והדיירים.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל המהותי בין שיפור מיגון לפינוי בינוי?",
    a: "שיפור מיגון הוא חיזוק חדר קיים בדירה לרמת הגנה משופרת, פתרון פנימי לדייר יחיד. פינוי בינוי הוא הריסת הבניין כולו ובניית מתחם חדש, פתרון מתחמי שמערב 24+ דיירים. שיפור מיגון לוקח 1-3 חודשים, פינוי בינוי 7-12 שנים. שיפור מיגון עולה לדייר 80-150 אלף ש&ldquo;ח, פינוי בינוי לא עולה לדייר ישירות. רמת ההגנה שונה: שיפור מיגון מספק הגנה חלקית, פינוי בינוי מספק דירה חדשה לפי תקן עדכני.",
  },
  {
    q: "מתי שיפור מיגון מספיק?",
    a: "שיפור מיגון מספיק כשממ״ד תקני אינו אפשרי קונסטרוקטיבית, כשהתקציב מוגבל מ-150 אלף ש&ldquo;ח, כשנדרש פתרון מהיר (בתוך 1-3 חודשים), וכשהבניין אינו מועד להתחדשות עירונית בעתיד הקרוב. ההגנה החלקית שמספק שיפור מיגון מספיקה באזורים שאינם בקו עימות. בקו עימות נדרש ממ״ד תקני, ושיפור מיגון אינו תחליף.",
  },
  {
    q: "מתי פינוי בינוי הפתרון הנכון?",
    a: "פינוי בינוי מתאים כשהבניין נמצא במתחם של 24 יחידות דיור ומעלה, הבניין בן 40+ שנה ובמצב טכני בעייתי, אזור עם זכויות בנייה זמינות (יזם יוכל להשקיע), ורוב הדיירים פעיל ומוכן להוביל פרויקט ארוך. פינוי בינוי מספק דירה חדשה לחלוטין, אך דורש 7-12 שנים ופינוי לתקופת ביניים.",
  },
  {
    q: "האם שניהם מספקים אותה רמת הגנה?",
    a: "לא. שיפור מיגון מספק הגנה חלקית: עומד בפני הדף, רסיסים, ופגיעה עקיפה. אינו מספק הגנה מפני פגיעה ישירה של פגז כבד או טיל מתקדם. פינוי בינוי בונה דירה חדשה עם ממ״ד תקני שעומד בכל התקנים העדכניים: חיזוק קונסטרוקטיבי מלא, ממ״ד תקני בכל דירה, וסטנדרטים עדכניים של פיקוד העורף. ההפרש ברמת ההגנה משמעותי.",
  },
  {
    q: "איך מחליטים בין השניים?",
    a: "ההחלטה תלויה בארבעה גורמים: גודל המתחם (24+ יחידות = פינוי בינוי אפשרי), מצב הבניין הטכני (ישן ופגום = פינוי בינוי, סביר = שיפור מיגון), הסכמת הדיירים (רוב פעיל = פינוי בינוי, מצומצם = שיפור מיגון אישי), ואופק הזמן (דחוף = שיפור מיגון, ארוך = פינוי בינוי). ייעוץ מקצועי מסייע בניתוח הנסיבות הספציפיות.",
  },
  {
    q: "האם אפשר לעשות שיפור מיגון ואז פינוי בינוי?",
    a: "טכנית כן, אך לא תמיד כדאי כלכלית. אם הבניין מועד לפינוי בינוי בעתיד הקרוב (5-10 שנים), השקעה בשיפור מיגון היא הפסד כלכלי משום שהבניין ייהרס. אם הפינוי בינוי בעוד 10+ שנים, או לא ודאי בכלל, שיפור מיגון מספק הגנה לתקופת הביניים. ההחלטה דורשת הערכה ריאלית של הסיכוי לפינוי בינוי.",
  },
  {
    q: "האם זה עניין של גיל הדייר?",
    a: "במידה. דיירים בני 70+ עומדים בפני שיקול נוסף: אופק הזמן. פינוי בינוי לוקח 7-12 שנים. דייר בן 75 שנכנס לפינוי בינוי עלול לקבל את הדירה החדשה בגיל 85+. עבורם שיפור מיגון לעיתים מעדיף, אלא אם הם מעדיפים להתאים לדיור מוגן במהלך הפרויקט (חלופה שזכאים לה לפי החוק). דיירים צעירים יותר מקבלים יותר ערך מפינוי בינוי.",
  },
  {
    q: "מה עם בניין שאינו במתחם של 24 יחידות?",
    a: "בניין יחיד או 2-3 בניינים שלא מהווים מתחם, אינו עומד בדרישת הסף לפינוי בינוי. הפתרונות במצב זה: שיפור מיגון לדירה הספציפית, חלופת שקד לבניין כולו (במידה ויש 80% הסכמה), או ממ״ד יביל. למידע על חלופת שקד ראו את המדריך על חלופת שקד. ההחלטה תלויה במורכבות הבניין ובתקציב הזמין.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="שיפור מיגון מול פינוי בינוי 2026: מתי כל פתרון מתאים"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "השוואות", url: "/hashvaa" },
          { name: "שיפור מיגון מול פינוי בינוי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="השוואה · התחדשות עירונית"
        title="שיפור מיגון מול פינוי בינוי 2026: מתי כל פתרון מתאים"
        subtitle="מדריך השוואה 2026: שתי גישות שונות לחלוטין למיגון בית. מתי כל אחת מתאימה, מסגרת החלטה לפי גיל ובניין, ומה לבדוק."
        crumbs={[
          { name: "השוואות", href: "/hashvaa" },
          { name: "שיפור מיגון מול פינוי בינוי", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              שיפור מיגון ופינוי בינוי הם שתי גישות שונות לחלוטין לשיפור הבית: האחת היא חיזוק חדר קיים בדירה לרמת הגנה משופרת, השנייה היא הריסת הבניין כולו ובניית מתחם חדש. הבחירה ביניהן תלויה בגודל המתחם, במצב הבניין, בתקציב הזמין, ובאופק הזמן של הדיירים. מדריך זה משווה בין השניים, מציג מסגרת החלטה לפי גיל ובניין, ומסייע לבעלי דירה להחליט. ההבחנה חשובה במיוחד לבעלי בניינים ישנים שצריכים להחליט בין פתרון מהיר לפתרון ארוך טווח.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shtei-gishot" title="שתי גישות שונות לחלוטין">
            <p>
              שיפור מיגון ופינוי בינוי לא מתחרים זה בזה. הם פותרים בעיות שונות.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שיפור מיגון</strong> הוא פתרון אישי לדייר יחיד. הוא מחזק חדר קיים בדירה (קירות, תקרה, דלת, חלון) לרמת הגנה משופרת. הביצוע: 1-3 חודשים. עלות: 80-150 אלף ש&ldquo;ח. תוצאה: חדר מיגון בדירה הקיימת. הבניין נשאר כפי שהוא, הדירה נשארת אותה דירה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">פינוי בינוי</strong> הוא פתרון מתחמי לקבוצת דיירים. הריסת הבניין כולו (או כמה בניינים יחד) ובניית מתחם חדש. הביצוע: 7-12 שנים. עלות: לדייר אין תשלום ישיר. תוצאה: דירה חדשה לחלוטין במבנה חדש, עם ממ״ד תקני, גדולה יותר ב-15-35 מ&ldquo;ר.
            </p>
            <p>
              ההבחנה הזאת קריטית. מי ששואל &ldquo;מה עדיף&rdquo; בין השניים, שואל את השאלה הלא נכונה. השאלה הנכונה: &ldquo;איזה משני הפתרונות מתאים למצב שלי&rdquo;. למידע על{" "}
              <Link
                href="/services/room-reinforcement"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                שיפור מיגון
              </Link>
              {" "}ראו את עמוד השירות. למידע על{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              {" "}ראו את המדריך הייעודי.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashvaa-mefurtett" title="השוואה מפורטת">
            <p>
              שמונה מימדים שמבדילים בין שיפור מיגון לפינוי בינוי.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="שיפור מיגון לעומת פינוי בינוי: השוואה מפורטת"
              columns={[
                { key: "migun", header: "שיפור מיגון" },
                { key: "pinui", header: "פינוי בינוי" },
              ]}
              rows={[
                {
                  label: "סוג הפתרון",
                  cells: { migun: "חיזוק חדר קיים בדירה", pinui: "הריסה ובנייה של מתחם" },
                },
                {
                  label: "היקף",
                  cells: { migun: "דירה יחידה", pinui: "מתחם 24+ יחידות" },
                },
                {
                  label: "זמן ביצוע",
                  cells: { migun: "1-3 חודשים", pinui: "7-12 שנים" },
                },
                {
                  label: "עלות לדייר",
                  cells: { migun: '80-150 אלף ש"ח', pinui: "אין עלות ישירה" },
                },
                {
                  label: "רמת הגנה",
                  cells: { migun: "חלקית, נגד הדף ורסיסים", pinui: "מקסימלית, ממ״ד תקני" },
                },
                {
                  label: "התאמה לקו עימות",
                  cells: { migun: "אינה מתאימה", pinui: "מתאימה" },
                },
                {
                  label: "תוצאה לדייר",
                  cells: { migun: "אותה דירה עם חדר מחוזק", pinui: "דירה חדשה גדולה יותר" },
                },
                {
                  label: "החלטה",
                  cells: { migun: "אישית, של הדייר", pinui: "קולקטיבית, של 67%-100%" },
                },
              ]}
              footnote="הפתרונות שונים מהותית. הבחירה תלויה בנסיבות, לא בהעדפה."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-migun" title="מתי שיפור מיגון מספיק">
            <p>
              שיפור מיגון הוא הפתרון הנכון בארבעה מצבים מרכזיים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">ממ״ד תקני אינו אפשרי קונסטרוקטיבית.</strong> בבניינים ישנים שלא מסוגלים לשאת את העומס של ממ״ד תקני, שיפור מיגון הוא האלטרנטיבה הריאלית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תקציב מוגבל.</strong> 80-150 אלף ש&ldquo;ח לעומת 280-450 אלף ש&ldquo;ח לממ״ד תקני בבניין ישן. החיסכון משמעותי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פתרון מהיר.</strong> 1-3 חודשים לעומת 6-10 חודשים לממ״ד תקני, וקצר משמעותית מ-7-12 שנים בפינוי בינוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניין שלא יעבור התחדשות.</strong> אם הבניין לא במתחם פינוי בינוי, או לא בנוי לחלופת שקד, שיפור מיגון הוא הפתרון.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="metay-pinui" title="מתי פינוי בינוי הפתרון הנכון">
            <p>
              פינוי בינוי הוא הפתרון הנכון בארבעה מצבים שונים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מתחם של 24 יחידות ומעלה.</strong> דרישת הסף החוקית לפינוי בינוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניין במצב טכני בעייתי.</strong> בניין בן 40+ שנה עם בעיות קונסטרוקציה, מבני, או רגישות לרעידות אדמה. במצב זה, חיזוק נקודתי כמו שיפור מיגון לא פותר את הבעיה הבסיסית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אזור עם זכויות בנייה זמינות.</strong> פינוי בינוי משתלם ליזם רק כשניתן להוסיף יחידות דיור משמעותיות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רוב דיירים פעיל.</strong> נדרש לפחות 67% הסכמה לתביעה משפטית. ללא רוב, הפרויקט לא ריאלי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="masgeret-haclata" title="מסגרת החלטה לפי גיל ובניין">
            <p>
              לדיירים מבוגרים (70+) ההחלטה מורכבת יותר. אופק הזמן של פינוי בינוי הוא 7-12 שנים, מה שעלול להיות זמן רב מדי לדייר בן 75 ומעלה. שני שיקולים נוגדים:
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שיקול לטובת פינוי בינוי לקשישים:</strong> זכויות גיל מבטיחות חלופות חובה (דיור מוגן, דירה חלופית, שתי דירות). דיירים בני 75+ זכאים לכל החלופות. דייר שבוחר בדיור מוגן או דירה חלופית מקבל את התמורה תוך כמה שנים, לא בסיום הפרויקט. למידע מקיף ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/kshishim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                זכויות קשישים בפינוי בינוי
              </Link>
              .
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שיקול לטובת שיפור מיגון לקשישים:</strong> פתרון מהיר, ללא צורך לעבור לדיור חלופי, ללא ריב פנימי בין דיירי הבניין על מסלול. התאים לדיירים שרוצים יציבות, לא שינוי. למידע על{" "}
              <Link
                href="/services/room-reinforcement"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                שיפור מיגון
              </Link>
              {" "}ראו את עמוד השירות.
            </p>
            <p>
              לדיירים צעירים יותר (30-65), פינוי בינוי בדרך כלל מציע יותר ערך כלכלי בטווח ארוך, אם הבניין מתאים. שיפור מיגון מתאים בעיקר כפתרון ביניים או כשפינוי בינוי לא ריאלי.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ma-livchok" title="מה לבדוק לפני החלטה">
            <p>
              חמישה דברים לבדוק לפני קבלת החלטה בין שיפור מיגון לפינוי בינוי:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">גודל המתחם.</strong> 24+ יחידות = פינוי בינוי אפשרי. פחות = שיפור מיגון או חלופת שקד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מצב הבניין הטכני.</strong> בדיקה הנדסית של מהנדס קונסטרוקציה. עלות 5-15 אלף ש&ldquo;ח. חוסכת בלגן בהמשך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכמת הדיירים.</strong> סקר ראשוני של הסכמה. אם פחות מ-50% מסכימים לפינוי בינוי, לא ריאלי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אופק הזמן האישי.</strong> תוכניות לטווח ארוך של הדייר. אם תכננתם לעזוב את הבית בעוד 5 שנים, פינוי בינוי לא רלוונטי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תקציב זמין.</strong> שיפור מיגון דורש 80-150 אלף ש&ldquo;ח מהדייר. פינוי בינוי לא דורש תשלום ישיר אך לוקח זמן רב.
              </li>
            </ol>
            <p>
              עיון נוסף על מסלולי התחדשות עירונית זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובאתר{" "}
              <a
                href="https://www.idf.il/he/minisites/pikud-haoref/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                פיקוד העורף
              </a>
              .
            </p>
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
              מתלבטים בין שיפור מיגון לפינוי בינוי? בדקו את המצב הספציפי.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה שמבצעת שיפור מיגון, ומלווים דיירים בפרויקטי פינוי בינוי. כשאנחנו מלווים, אנחנו עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="שיפור מיגון או פינוי בינוי: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב של הבניין שלכם."
            defaultService="mamad"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="hashvaa/migun-vs-pinui"
        targets={["room-reinforcement", "pinui-binui", "pinui-binui-kshishim"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על שיפור מיגון מול פינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
