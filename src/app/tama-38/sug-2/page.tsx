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

const PATH = "/tama-38/sug-2";
const TITLE = "תמ״א 38/2 (הריסה ובנייה) 2026: מה זה ומה הלאה | התחדשות";
const DESCRIPTION =
  "תמ״א 38/2 הוא מסלול הריסת בניין ובנייה מחדש. הרוב הנדרש 80%. פוקעת מאי 2026. מדריך 2026: ההבדלים מתמ״א 38/1, חלופת שקד כממשיכה, וזכויות הדיירים.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל בין תמ״א 38/2 לחלופת שקד?",
    a: "חלופת שקד היא הממשיכה הישירה של תמ״א 38/2. שתיהן מאפשרות הריסה ובנייה מחדש של בניין יחיד עם תוספת זכויות בנייה. רוב נדרש זהה (80%). ההבדלים: חלופת שקד מאפשרת זכויות בנייה גדולות יותר (עד 400% משטח קיים), תהליך אישור עדכני, מסגרת חוקית יציבה (תיקון 139). תמ״א 38/2 פוקעת מאי 2026, חלופת שקד היא הקיימת ב-2026 ואילך.",
  },
  {
    q: "כמה דירות מוסיפים בתמ״א 38/2?",
    a: "תוספת היחידות תלויה במיקום ובזכויות הבנייה הזמינות. בערי המרכז (תל אביב, רמת גן, גבעתיים) הוספה של 50%-100% מיחידות הדיור הקיימות היא נורמה. בעיר של 20 דירות, היזם בדרך כלל מוסיף 10-20 דירות חדשות. בפריפריה, התוספת קטנה יותר (20%-50%), והפרויקטים פחות רווחיים ליזמים.",
  },
  {
    q: "כמה זמן לוקח פינוי וחזרה לדירה?",
    a: "פרויקט תמ״א 38/2 מערב פינוי לתקופה של 24-48 חודשים. הפינוי מתחיל אחרי קבלת היתר ולפני הריסה. במהלך התקופה הזאת, היזם משלם שכר דירה לדיור חלופי, בדרך כלל בערך שווה לשכר דירה לדירה דומה בעיר. במקרים מסוימים יש פיצוי חד-פעמי על הוצאות מעבר. כל הפרטים האלה צריכים להיות מעוגנים בהסכם.",
  },
  {
    q: "מה אם אני בן 75 ויש לי הסכם תמ״א 38/2?",
    a: "דייר בן 70 ומעלה זכאי להגנות מיוחדות בכל מסלולי ההתחדשות העירונית, כולל תמ״א 38/2 וחלופת שקד. הזכויות כוללות: דירת תמורה, ולפחות חלופה אחת מתוך שלוש (דיור מוגן, רכישת דירה חלופית, או שתי דירות בשווי הדירה החדשה). דיירים בני 75 ומעלה זכאים לכל החלופות. במעבר מתמ״א 38/2 לחלופת שקד, הזכויות הללו משתמרות.",
  },
  {
    q: "האם הפרויקט יעבור אוטומטית לחלופת שקד?",
    a: "לא אוטומטית. מעבר מתמ״א 38/2 לחלופת שקד דורש חתימה מחודשת על הסכם, אישור הוועדה המקומית במסגרת החדשה, ולעיתים גם אישור מחודש מפיקוד העורף. חלק מהזכויות מהתמ״א 38/2 משתמרות (למשל זכויות גיל), אך התנאים הכספיים והטכניים נבדקים מחדש. דרושה תיאום של היזם, הדיירים, ועורך דין מקרקעין.",
  },
  {
    q: "איך הערבויות עוברות במעבר?",
    a: "ערבויות בנקאיות שהונפקו במסגרת תמ״א 38/2 לא עוברות אוטומטית להסכם חלופת שקד. נדרש להנפיק ערבויות חדשות בהסכם החדש. הבנק המנפיק את הערבויות הקודמות עשוי להסכים להעבירן בתנאים מסוימים, אך זוהי החלטה של הבנק. ייעוץ עם עורך דין דיירים בעת המעבר חיוני להבטחת המשך הביטחון הכלכלי.",
  },
  {
    q: "מה עם פרויקטים פעילים עם היתר?",
    a: "פרויקטים שכבר קיבלו היתר בנייה במסגרת תמ״א 38/2 ממשיכים לפי תנאי ההיתר. הפוקעה של תמ״א 38 לא משפיעה על פרויקטים פעילים. ההיתר תקף לתקופה שמופיעה בו (בדרך כלל 3 שנים), וניתן להאריך. אם הפרויקט מתעכב מסיבות אחרות, הגנות הדיירים נשמרות לפי ההסכם המקורי.",
  },
  {
    q: "האם כדאי להמתין לחלופת שקד?",
    a: "תלוי בנסיבות. אם יש לכם הסכם תמ״א 38/2 פעיל ויש סיכוי טוב להוציא היתר לפני מאי 2026, כדאי להמשיך. אם לא ריאלי לקבל היתר בזמן, מעבר לחלופת שקד הוא הפתרון. במצב של דיון ראשוני בלבד עם יזם, מומלץ להתחיל ישירות בחלופת שקד כדי להימנע מסיבוכי המעבר. ייעוץ ראשוני מאפשר להבהיר את הבחירה הנכונה.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="תמ״א 38/2 (הריסה ובנייה) 2026: מה זה, איך עובד, ומה הלאה"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "תמ״א 38", url: "/tama-38" },
          { name: "תמ״א 38/2", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="תמ״א 38 · מסלול הריסה ובנייה"
        title="תמ״א 38/2 (הריסה ובנייה) 2026: מה זה, איך עובד, ומה הלאה"
        subtitle="מדריך 2026 לבעלי בניינים במסלול הריסה ובנייה: רוב 80%, ההבדלים מ-38/1, מצב הפרויקטים בפוקעת תמ״א 38, וחלופת שקד כממשיכה."
        crumbs={[
          { name: "תמ״א 38", href: "/tama-38" },
          { name: "מסלול 2 (הריסה ובנייה)", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              <Link
                href="/tama-38"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38/2
              </Link>{" "}
              הוא מסלול הריסת בניין קיים ובניית בניין חדש במקומו, עם תוספת יחידות דיור משמעותית. הרוב הנדרש להליכה במסלול הוא 80% מבעלי הדירות. במהלך השנים, תמ״א 38/2 הפכה למסלול מועדף על יזמים בגלל ההזדמנות לתוספת יחידות דיור. ב-2026, תמ״א 38/2 פוקעת ברוב הארץ, וחלופת שקד או פינוי בינוי הופכות לאלטרנטיבות העיקריות. מדריך זה מסביר את המסלול, ההבדלים מתמ״א 38/1, מה השתנה ב-2026, ומה צריך לעשות אם יש לך הסכם פעיל.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-ze" title="מה זה תמ״א 38/2?">
            <p>
              תמ״א 38/2 היא הגרסה שאושרה אחרי תמ״א 38/1, ומאפשרת מסלול שונה: הריסת הבניין הקיים ובניית בניין חדש במקומו. הבניין החדש בדרך כלל גדול יותר, עם יותר יחידות דיור, ובסטנדרטים עדכניים. הדיירים מקבלים דירה חדשה, גדולה יותר ומשודרגת מהדירה הישנה.
            </p>
            <p>
              בתמורה לכך, היזם זכאי לתוספת יחידות דיור שאינן שייכות לדיירים המקוריים. היחידות החדשות נמכרות לקונים חיצוניים. זהו הבסיס הכלכלי שמאפשר לפרויקט להתממש בלי תשלום ישיר מהדיירים.
            </p>
            <p>
              תמ״א 38/2 הפכה למסלול הדומיננטי בערי המרכז במהלך השנים, מאחר שהיא מציעה לדיירים דירה חדשה לחלוטין במקום שיפור של דירה קיימת. ההבדל המהותי מתמ״א 38/1: בתמ״א 38/2 הדיירים פונים לתקופת ביניים של 24-48 חודשים, ובסיום הפרויקט מקבלים דירה חדשה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="rov-80" title="הרוב הנדרש: 80%">
            <p>
              80% מבעלי הדירות צריכים להסכים כדי לאשר ולבצע פרויקט תמ״א 38/2. הרוב הזה גבוה משמעותית מתמ״א 38/1 (66%) בשל המורכבות של הפרויקט: הריסה ופינוי דורשים שיתוף פעולה רחב יותר.
            </p>
            <p>
              הרוב של 80% זהה לרוב הנדרש בחלופת שקד, מה שמאפשר מעבר מסלולי טכני יחסית במצב של פוקעת תמ״א 38/2. אם הדיירים כבר הסכימו לתמ״א 38/2 ב-80%, הסכמה לחלופת שקד באותו רף בדרך כלל זמינה.
            </p>
            <p>
              דיירים שלא הסכימו (20% או פחות) לא יכולים לעצור את הפרויקט. עם זאת, התדיינות משפטית עם דיירים מסרבים לעיתים מאריכה את לוחות הזמנים, ולכן יזמים מקצועיים שואפים להסכמה של 100% לפני התחלת ביצוע.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hashvaa" title="תמ״א 38/2 לעומת חלופת שקד">
            <p>
              חלופת שקד היא הממשיכה הישירה של תמ״א 38/2. שתיהן מאפשרות הריסה ובנייה מחדש של בניין יחיד. ההשוואה המפורטת:
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="תמ״א 38/2 לעומת חלופת שקד"
              columns={[
                { key: "tama2", header: "תמ״א 38/2" },
                { key: "shaked", header: "חלופת שקד" },
              ]}
              rows={[
                {
                  label: "סוג הפרויקט",
                  cells: { tama2: "הריסה ובנייה מחדש", shaked: "הריסה ובנייה מחדש" },
                },
                {
                  label: "רוב נדרש",
                  cells: { tama2: "80%", shaked: "80%" },
                },
                {
                  label: "סטטוס רגולטורי",
                  cells: { tama2: "פוקעת מאי 2026", shaked: "תקף, תיקון 139" },
                },
                {
                  label: "זכויות בנייה",
                  cells: { tama2: "מוגבלות לפי תקנות תמ״א", shaked: "עד 400% משטח קיים בתנאים" },
                },
                {
                  label: "תהליך אישור",
                  cells: { tama2: "ועדה מקומית + אישורים נוספים", shaked: "מסגרת עדכנית, פחות סרבול" },
                },
                {
                  label: "התאמה לפרויקטים חדשים",
                  cells: { tama2: "אינה מתקבלת אחרי 2026", shaked: "מתאימה ב-2026 ואילך" },
                },
              ]}
              footnote="הזכויות הבסיסיות לדיירים זהות בשני המסלולים. ההבדלים העיקריים הם רגולטוריים."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="zechuyot-dayarim" title="זכויות הדיירים בתמ״א 38/2">
            <p>
              דיירים בפרויקט תמ״א 38/2 זכאים לשמונה זכויות בסיסיות שצריכות להיות מעוגנות בהסכם:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">דירת תמורה במתחם החדש.</strong> דירה חדשה במבנה החדש, גדולה יותר מהישנה ב-15-35 מ&ldquo;ר במרכז הארץ.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חניה ומחסן.</strong> סטנדרט בערי המרכז ב-2026.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שכר דירה לתקופת הביניים.</strong> 24-48 חודשים, משולם על ידי היזם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי על איחור במסירה.</strong> סעיף סטנדרטי בהסכם תקני.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבויות בנקאיות.</strong> ערבות חוק מכר על הדירה החדשה, ערבות שכר דירה לתקופת הביניים, ערבויות בנייה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכויות גיל לדיירים בני 70+.</strong> חלופות חובה בהסכם, ההגנות שצוינו במדריכי פינוי בינוי חלות גם כאן.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פטור או הקלה במסים.</strong> מס שבח, מס רכישה, היטל השבחה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף שמירת זכויות במעבר.</strong> במצב של מעבר לחלופת שקד או פינוי בינוי, הזכויות הבסיסיות נשמרות.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="2026" title="מה השתנה ב-2026">
            <p>
              תמ״א 38/2 פוקעת במאי 2026 ברוב הארץ. ההשפעות העיקריות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרויקטים עם היתר ממשיכים.</strong> ההיתר תקף לתקופה שמופיעה בו, ניתן להאריך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בקשות חדשות לא יתקבלו.</strong> אחרי מאי 2026, אי אפשר להגיש בקשה חדשה במסגרת תמ״א 38/2.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חלופת שקד היא הממשיכה.</strong> מסלול עדכני שמיועד ספציפית להריסה ובנייה של בניין יחיד. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/chalufat-shaked"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  חלופת שקד
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פינוי בינוי כאלטרנטיבה במתחמים.</strong> אם המתחם של 24+ יחידות, פינוי בינוי הוא חלופה. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  פינוי בינוי
                </Link>
                .
              </li>
            </ul>
            <p>
              למידע מפורט על מצב הפרויקטים הפעילים בתקופת המעבר ראו את המדריך על{" "}
              <Link
                href="/tama-38/pkia-2026"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38 פוקעת
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="maavar" title="המעבר לחלופת שקד">
            <p>
              עבור פרויקטים פעילים שלא יספיקו לקבל היתר לפני מאי 2026, מעבר לחלופת שקד הוא הצעד הטבעי. ארבעה שלבים:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת ההסכם הקיים.</strong> איתור סעיפים שמטפלים בשינוי רגולטורי, וזכויות הדיירים במעבר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מו&ldquo;מ עם היזם על תנאים חדשים.</strong> חלופת שקד מציעה זכויות בנייה גדולות יותר, מה שעשוי לשנות את החלוקה הכלכלית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חתימה על הסכם חדש.</strong> במסגרת חלופת שקד, עם שמירה על הזכויות הבסיסיות מההסכם הקודם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הנפקת ערבויות חדשות.</strong> ערבויות במסגרת ההסכם החדש מחליפות את הקודמות.
              </li>
            </ol>
            <p>
              עיון נוסף על המסגרת המשפטית של תמ״א 38 וחלופת שקד זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובמאגרי החוק כמו{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                תוכנית מתאר ארצית 38
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
          label: "הרשות הממשלתית להתחדשות עירונית",
          url: "https://www.gov.il/he/departments/topics/urban_renewal/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              פרויקט תמ״א 38/2 פעיל? בדקו את האפשרויות לפני שיהיה מאוחר.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים דיירים בבחינת אפשרויות התחדשות עירונית. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="תמ״א 38/2: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב של הפרויקט שלכם."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="tama-38/sug-2"
        targets={["tama-38", "tama-38-sug-1", "chalufat-shaked"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על תמ״א 38/2"
        tone="soft"
        includeSchema
      />
    </>
  );
}
