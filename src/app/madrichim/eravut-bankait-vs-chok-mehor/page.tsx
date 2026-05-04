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

const PATH = "/madrichim/eravut-bankait-vs-chok-mehor";
const TITLE = "ערבות בנקאית מול ערבות חוק מכר: ההבדל הקריטי | התחדשות";
const DESCRIPTION =
  "ערבות בנקאית רגילה אינה זהה לערבות חוק מכר. ההבדל יכול להגדיר את הביטחון הכלכלי של דייר בפרויקט פינוי בינוי. מדריך מעמיק 2026.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל המהותי בין שתי הערבויות?",
    a: "ערבות בנקאית רגילה היא ערבות שבנק נותן ליזם להבטחת התחייבות מסוימת (תשלום, ביצוע). ערבות חוק מכר היא ערבות מסוג מיוחד שניתנת לפי חוק המכר (דירות), ומבטיחה את שווי הדירה שהקונה (או הדייר בפינוי בינוי) רכש. ההבדל המהותי: ערבות חוק מכר מוסדרת בחוק, מסובסדת, וניתנת לממש על דרישה ראשונה. ערבות בנקאית רגילה תלויה בנוסח הספציפי שלה.",
  },
  {
    q: "מתי כל ערבות חלה?",
    a: "ערבות חוק מכר חלה אוטומטית בעסקאות רכישת דירה למגורים מקבלן/יזם, ובפרויקטי פינוי בינוי שבהם הדייר מקבל דירה חדשה. החובה לתת אותה היא חוקית. ערבות בנקאית רגילה ניתנת לפי הסכם ספציפי בין היזם לדייר, ויכולה לכסות הוצאות מסוימות (שכר דירה לתקופת הביניים, פיצויי איחור) שאינן מכוסות בחוק המכר.",
  },
  {
    q: "האם ערבות חוק מכר מספיקה לבדה?",
    a: "לא. ערבות חוק מכר מבטיחה את הדירה החדשה, אבל לא מכסה את שכר הדירה לתקופת הביניים, פיצוי על איחור, או הוצאות אחרות בפרויקט. בפרויקט פינוי בינוי תקני, נדרש שילוב של ערבויות: ערבות חוק מכר על הדירה, ערבות בנקאית על שכר דירה, ערבות בנקאית על הביצוע, וערבות מסירה. למידע מקיף ראו את המדריך על ערבויות בפינוי בינוי.",
  },
  {
    q: "מי מנפיק את הערבויות?",
    a: "ערבות חוק מכר מונפקת על ידי בנק (לפי חוק המכר) או חברת ביטוח מאושרת (פוליסת ביטוח). ערבות בנקאית רגילה מונפקת רק על ידי בנק. בשני המקרים, חשוב לוודא שהמנפיק הוא מוסד פיננסי גדול ומפוקח. בנקים גדולים בישראל (לאומי, פועלים, דיסקונט, מזרחי-טפחות) הם הסטנדרט המקובל.",
  },
  {
    q: "מה עלות הערבויות?",
    a: "עלויות הערבויות נושא היזם, לא הדיירים. ערבות חוק מכר עולה ליזם בדרך כלל 1%-2% משווי הדירה לשנה. ערבות בנקאית רגילה עולה 1%-2.5% משווי הסכום המבוטח לשנה. בפרויקט בן 7-12 שנים, עלות הערבויות ליזם עלולה להגיע למאות אלפי שקלים לדייר. זוהי השקעה משמעותית של היזם, אך הכרחית לכל פרויקט תקני.",
  },
  {
    q: "מה ההבדל במימוש?",
    a: "ערבות חוק מכר ניתנת לממש על דרישה ראשונה ללא צורך בהליך משפטי מקדים. הדייר פונה לבנק עם המסמכים הרלוונטיים, ומקבל את הסכום. ערבות בנקאית רגילה תלויה בנוסח: לעיתים גם היא 'אוטונומית' (דרישה ראשונה), לעיתים מותנית בפסק דין או בהוכחת תנאים. נוסח הערבות הוא קריטי: ערבות 'אוטונומית' עדיפה משמעותית.",
  },
  {
    q: "מה אם הערבות אינה אוטונומית?",
    a: "ערבות לא אוטונומית מחייבת הוכחה משפטית של תנאי המימוש לפני שהבנק משלם. במקרים מסוימים נדרש פסק דין. ההליך עלול להימשך שנים, מה שהופך את הערבות לפחות יעילה. בפרויקטי פינוי בינוי תקניים, יש לדרוש ערבויות אוטונומיות בלבד. ערבות לא אוטונומית היא דגל אדום מהותי. עורך דין דיירים יבדוק את נוסח הערבות לפני קבלת ההסכם.",
  },
  {
    q: "מה לבדוק בערבויות לפני חתימה?",
    a: "שש בדיקות: זהות הבנק או חברת הביטוח המנפיקה, סוג הערבות (חוק מכר או רגילה), נוסח (אוטונומית או מותנית), סכום (שווה לערך הדירה), תוקף (עד מסירה ורישום בטאבו), ותנאי מימוש. ערבות חסרה בנושא אחד מאלה היא בעייתית. ראו את המדריך המקיף על ערבויות לפירוט המלא.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ערבות בנקאית מול ערבות חוק מכר: ההבדל ולמה זה קריטי"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "ערבות בנקאית מול חוק מכר", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · ערבויות"
        title="ערבות בנקאית מול ערבות חוק מכר: ההבדל ולמה זה קריטי"
        subtitle="מאמר מעמיק 2026: ההבחנה המהותית בין שתי הערבויות, מתי כל אחת חלה, ומה לבדוק לפני חתימה."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "ערבויות: ההבדל", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ערבות בנקאית רגילה אינה זהה לערבות חוק מכר. ההבחנה הזאת חשובה לכל בעל דירה בפרויקט פינוי בינוי, ולעיתים היא ההבדל בין הסכם תקני להסכם בעייתי. ערבות חוק מכר מבטיחה את שווי הדירה החדשה. ערבות בנקאית רגילה מבטיחה התחייבות ספציפית של היזם. בפרויקט תקני נדרש שילוב של שני סוגי הערבויות. מאמר זה מנתח את ההבדל המהותי, מסביר מתי כל ערבות חלה, ומציג רשימת בדיקה לפני חתימה. למידע מקיף על מסגרת הערבויות הכוללת ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/eravut"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ערבויות בפינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hevdel-mehoti" title="ההבדל המהותי">
            <p>
              ערבות חוק מכר מוסדרת בחוק המכר (דירות) (הבטחת השקעות של רוכשי דירות), חקיקה ייעודית שמטרתה להגן על רוכשי דירות. הערבות מבטיחה את שווי הדירה: אם היזם נכנס לכשל פיננסי, הדייר יכול לפנות לבנק המנפיק ולקבל את שווי הדירה. ההגנה אוטומטית, מחויבת בחוק, וניתנת לממש על דרישה ראשונה.
            </p>
            <p>
              ערבות בנקאית רגילה היא הסכם בין יזם לבנק שבו הבנק מתחייב לשלם סכום מוגדר אם היזם לא ממלא חובה מסוימת. הנוסח, התנאים, וסוגי המימוש משתנים לפי ההסכם הספציפי. ערבות בנקאית רגילה היא הכלי המקובל לכיסוי הוצאות שאינן מכוסות בחוק המכר: שכר דירה לתקופת הביניים, פיצויי איחור, ערבות ביצוע.
            </p>
            <p>
              ההבדל הקריטי: ערבות חוק מכר היא חזקה משפטית. הסטטוס שלה מוגדר בחוק. ערבות בנקאית רגילה היא חזקה הסכמית. הסטטוס שלה תלוי בנוסח. הבחנה זאת משפיעה על מה שצריך לבדוק לפני חתימה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashvaa" title="השוואה מפורטת">
            <p>
              שמונה מימדים שמבדילים בין שתי הערבויות.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="ערבות חוק מכר לעומת ערבות בנקאית רגילה"
              columns={[
                { key: "chok", header: "ערבות חוק מכר" },
                { key: "rgila", header: "ערבות בנקאית רגילה" },
              ]}
              rows={[
                {
                  label: "מקור",
                  cells: { chok: "חוק המכר (דירות)", rgila: "הסכם פרטי" },
                },
                {
                  label: "מה מבטיחה",
                  cells: { chok: "שווי הדירה החדשה", rgila: "התחייבות ספציפית של היזם" },
                },
                {
                  label: "חובה לתת",
                  cells: { chok: "חוקית בעסקאות דירה", rgila: "תלויה בהסכם" },
                },
                {
                  label: "מנפיק",
                  cells: { chok: "בנק או חברת ביטוח מאושרת", rgila: "בנק בלבד" },
                },
                {
                  label: "מימוש",
                  cells: { chok: "אוטונומי, על דרישה ראשונה", rgila: "תלוי בנוסח" },
                },
                {
                  label: "תוקף",
                  cells: { chok: "עד מסירה ורישום בטאבו", rgila: "תקופה קצובה בנוסח" },
                },
                {
                  label: "סכום",
                  cells: { chok: "ערך הדירה החדשה", rgila: "סכום ספציפי בנוסח" },
                },
                {
                  label: "פיקוח",
                  cells: { chok: "בנק ישראל ומשרד המשפטים", rgila: "בנק ישראל בלבד" },
                },
              ]}
              footnote="בפרויקט תקני נדרש שילוב של שני סוגי הערבויות. ערבות חוק מכר לבדה אינה מספיקה לכיסוי כל ההוצאות."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-chok" title="מתי ערבות חוק מכר חלה">
            <p>
              ערבות חוק מכר חלה אוטומטית במצבים מוגדרים בחוק:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">רכישת דירה חדשה מקבלן/יזם.</strong> כל קונה דירה ב&ldquo;עסקת על הנייר&rdquo; זכאי לערבות חוק מכר על שווי הדירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פינוי בינוי.</strong> דיירים שמקבלים דירה חדשה במקום הישנה זכאים לערבות חוק מכר על הדירה החדשה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תמ״א 38/2 וחלופת שקד.</strong> דיירים שמקבלים דירה חדשה אחרי הריסה ובנייה זכאים לערבות חוק מכר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תמ״א 38/1.</strong> אם בפרויקט החיזוק יש תוספת דירה חדשה לדייר, גם הדירה הזאת מבוטחת.
              </li>
            </ul>
            <p>
              עיון נוסף על חוק המכר זמין באתר{" "}
              <a
                href="https://www.kolzchut.org.il/he/%D7%97%D7%95%D7%A7_%D7%94%D7%9E%D7%9B%D7%A8_%D7%93%D7%99%D7%A8%D7%95%D7%AA"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                כל זכות
              </a>
              , וב
              <a
                href="https://www.gov.il/he/departments/ministry_of_justice/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                משרד המשפטים
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="metay-rgila" title="מתי ערבות בנקאית רגילה נדרשת">
            <p>
              ערבות בנקאית רגילה משלימה את ערבות חוק מכר במצבים שלא מכוסים בחוק:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">שכר דירה לתקופת הביניים.</strong> בפינוי בינוי וחלופת שקד, תקופת הפינוי 24-48 חודשים. שכר הדירה משולם על ידי היזם, ומוגן בערבות בנקאית רגילה. סכום: שכר דירה צפוי כפול תקופה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצויי איחור.</strong> אם היזם מאחר במסירה, פיצוי כספי משולם לדיירים. ערבות בנקאית רגילה מגנה על הפיצוי גם בכשל יזם. סכום: פיצוי חודשי כפול חודשי איחור צפויים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבות ביצוע.</strong> מבטיחה שהיזם ישלים את הבנייה בהתאם למפרט.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבות מסירה.</strong> מבטיחה שהדירה תימסר במצב הראוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבות בדק.</strong> מכסה תקופת בדק 12-24 חודשים אחרי המסירה.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="autonomi" title="ערבות אוטונומית: למה זה קריטי">
            <p>
              ערבות אוטונומית היא ערבות שניתן לממש על דרישה ראשונה של הנהנה (הדייר), ללא צורך בהוכחת תנאים או בהליך משפטי מקדים. הדייר פונה לבנק המנפיק עם מסמכים מינימליים, והבנק משלם.
            </p>
            <p>
              ערבות לא אוטונומית מחייבת הוכחת תנאי המימוש. במצבים מסוימים נדרש פסק דין שקובע שהיזם הפר את ההסכם. ההליך המשפטי יכול להימשך שנים, ובמהלך הזמן הזה הדייר עלול להיות חשוף כלכלית.
            </p>
            <p>
              ערבות חוק מכר היא תמיד אוטונומית בעצם החוק. ערבות בנקאית רגילה תלויה בנוסח. בפרויקט תקני, יש לדרוש שכל הערבויות יהיו אוטונומיות. נוסח שמחייב הליך משפטי מקדים הוא בעייתי.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="cheklist" title="רשימת בדיקה לפני חתימה">
            <p>
              שמונה דברים לבדוק בערבויות לפני חתימה על הסכם:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סוג הערבות.</strong> חוק מכר או בנקאית רגילה. כל סוג חל על מצב שונה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זהות המנפיק.</strong> בנק גדול, מפוקח, מוכר. לא בנק קטן או חברת ביטוח שאינה ידועה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">נוסח אוטונומי.</strong> ניתן לממש על דרישה ראשונה, לא תלוי בהליך משפטי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סכום נכון.</strong> ערבות חוק מכר על שווי הדירה. ערבות בנקאית רגילה על הסכום הספציפי שמכוסה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תוקף מתאים.</strong> ערבות חוק מכר עד מסירה ורישום בטאבו. ערבויות אחרות לפי המטרה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תנאי מימוש פשוטים.</strong> אילו מסמכים נדרשים, כמה זמן לוקח התשלום.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף תחליף בנק.</strong> אם הבנק המנפיק נכשל, מי מחליף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">העברה ליורשים.</strong> במצב של פטירה, איך הערבות עוברת.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "חוק המכר (דירות) באתר כל זכות",
          url: "https://www.kolzchut.org.il/he/%D7%97%D7%95%D7%A7_%D7%94%D7%9E%D7%9B%D7%A8_%D7%93%D7%99%D7%A8%D7%95%D7%AA",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              ההצעה כוללת ערבויות? בדקו את הנוסח לפני חתימה.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בבחינת ערבויות. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ערבויות בפינוי בינוי: בואו נדבר"
            subtitle="השאירו שם וטלפון. נעבור על נוסח הערבויות בהסכם שלכם."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/eravut-hevdel"
        targets={["pinui-binui-eravut", "pinui-binui", "pinui-binui-temurot"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על סוגי ערבויות"
        tone="soft"
        includeSchema
      />
    </>
  );
}
