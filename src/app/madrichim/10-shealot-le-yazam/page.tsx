import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/madrichim/10-shealot-le-yazam";
const TITLE = "10 שאלות שכל דייר חייב לשאול יזם פינוי בינוי | התחדשות";
const DESCRIPTION =
  "10 שאלות חיוניות לשאול יזם פינוי בינוי לפני חתימה. כל שאלה מנותחת לעומק עם הסבר על מה התשובה הראויה ואילו דגלים אדומים לחפש.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל בין שאלות בסיסיות לשאלות מעמיקות ליזם?",
    a: "שאלות בסיסיות (כמו 'איזו תמורה תהיה?') מאפשרות מסך התחלתי. שאלות מעמיקות ('מה הסיכון אם המסלול הרגולטורי משתנה?') חושפות את היכולת של היזם להתמודד עם תרחישים מורכבים. שאלות מעמיקות מבדילות בין יזם מקצועי לבין יזם שמסתפק במסכים שטחיים. בפרויקט ארוך 7-12 שנים, היזם יצטרך להתמודד עם תרחישים שלא ניתן לחזות מראש.",
  },
  {
    q: "מה לעשות אם היזם מסרב לענות?",
    a: "סירוב לענות לשאלה לגיטימית הוא דגל אדום משמעותי. יזם מקצועי שמלווה דיירים מבין את חשיבות השקיפות. סירוב, התחמקות, או תשובה כללית מדי על שאלה ספציפית מצביעים על אחת מהשתיים: היזם לא יודע את התשובה (חסר מקצועיות), או שהתשובה לא נוחה לו (מצביעה על בעיה שהוא רוצה להסתיר).",
  },
  {
    q: "כמה זמן לוקח לקבל תשובות מספיקות?",
    a: "תהליך הצגת השאלות והקבלת תשובות מקצועיות לוקח 2-4 שבועות. בפגישה ראשונית היזם בדרך כלל לא נושא תשובות מלאות. תשובות מפורטות בכתב צריכות להגיע תוך 2-4 שבועות. אם יזם מתעקש על חתימה לפני שיש תשובות בכתב, זה דגל אדום קריטי.",
  },
  {
    q: "האם השאלות חלות גם על חלופת שקד?",
    a: "כן. רוב השאלות חלות זהות על תמ״א 38, חלופת שקד, ופינוי בינוי. ההבדלים: בפינוי בינוי יש שאלות נוספות על המתחם הכולל. בחלופת שקד שאלות על זכויות הבנייה הספציפיות. שמונה השאלות הראשונות במאמר זה רלוונטיות לכל מסלול. השאלות התשיעית והעשירית כוללות הקשר ספציפי למסלול.",
  },
  {
    q: "האם כדאי לכתוב את השאלות לפני הפגישה?",
    a: "מאוד מומלץ. שאלות כתובות מראש מבטיחות שלא תשכחו שאלה חשובה תחת לחץ הפגישה. שלחו את השאלות ליזם 24-48 שעות לפני הפגישה כדי שיוכל להכין תשובות מסודרות. בפגישה עצמה, רשמו את התשובות. בקשו תשובות בכתב לאחר הפגישה לעיגון רשמי.",
  },
  {
    q: "מי צריך להיות נוכח בפגישה עם היזם?",
    a: "נציגות הדיירים (2-4 דיירים פעילים), עורך דין דיירים, ולעיתים גם שמאי או מהנדס. לא מומלץ שדייר יחיד יפגוש את היזם ללא ייצוג. הסיבה: כוח המיקוח של דייר יחיד מצומצם, וההסכמים הראשוניים בעל פה עלולים להיות בעייתיים. ייצוג מקצועי מבטיח דיון מאוזן.",
  },
  {
    q: "אם היזם נותן את כל התשובות, חתמו?",
    a: "לא בהכרח. תשובות טובות לשאלות הן תנאי הכרחי, אך לא מספיק. אחרי קבלת תשובות, יש שלבים נוספים: בדיקת התשובות מול שוק, ייעוץ עם עורך דין, השוואה לעוד 2 הצעות יזמים, ודיון פנימי בין הדיירים. החתימה צריכה להיות אחרי תהליך מסודר של בחינת אלטרנטיבות.",
  },
  {
    q: "מה לעשות אם יזם מציע 'תשובה מהירה' לחתימה?",
    a: "לא לחתום. יזם מקצועי מכבד תהליך מסודר של בחינה. לחץ לחתימה מהירה הוא דגל אדום קריטי. אם היזם מאיים שההצעה תפוג, או שדיירים אחרים יחתמו לפניכם, זוהי טקטיקת לחץ. הזכויות שלכם כבעלי דירה אינן תלויות בחתימה מוקדמת. תמיד ניתן להמשיך לבחון, להשוות, ולהחליט בקצב מבוסס.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="10 שאלות שכל דייר חייב לשאול יזם פינוי בינוי"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "10 שאלות ליזם", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · בחירת יזם"
        title="10 שאלות שכל דייר חייב לשאול יזם פינוי בינוי"
        subtitle="מאמר מנחה 2026: 10 שאלות חיוניות לפני חתימה, ניתוח עומק של כל שאלה, ומה להבחין בתשובות."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "10 שאלות ליזם", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              בחירת יזם בפינוי בינוי היא ההחלטה הקריטית של הפרויקט. במאמר זה אנחנו מציגים 10 שאלות מובנות שכל דייר חייב לשאול לפני חתימה, עם ניתוח עומק של כל שאלה, מה התשובה הראויה, ואילו דגלים אדומים לחפש בתשובת היזם. המאמר מרחיב את 12 השאלות הבסיסיות שמופיעות במדריך על{" "}
              <Link
                href="/pinui-binui/yazam"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                איך בוחרים יזם פינוי בינוי
              </Link>
              {" "}עם הקשר מעשי וניתוח של תשובות נפוצות. השאלות חלות גם על תמ״א 38, חלופת שקד, ופינוי בינוי.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shealot-1-3" title="שאלות 1-3: ניסיון והוכחות">
            <ol className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">כמה פרויקטי פינוי בינוי השלמתם בעבר?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: לפחות 2-3 פרויקטי פינוי בינוי שהושלמו במלואם, עם פרטי קשר של נציגויות דיירים שניתן לאמת איתם. דגל אדום: יזם שאומר &ldquo;יש לנו ניסיון בבנייה&rdquo; אבל לא בפינוי בינוי ספציפית. ניסיון בבנייה כללית הוא לא תחליף לניסיון בפינוי בינוי, שמערב ניהול דיירים, מורכבות תכנונית, ולוחות זמנים ארוכים.
                </p>
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי המוסדות הפיננסיים שמלווים את הפרויקטים שלכם?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: רשימה ברורה של בנקים גדולים בישראל (לאומי, פועלים, דיסקונט, מזרחי-טפחות) או חברות ביטוח מוכרות. דגל אדום: מנפיק ערבויות לא מוכר, או חוסר נכונות לשתף את שם הבנק. בנק גדול הוא לא רק עניין של אמינות אלא גם של גיבוי כלכלי לאורך 7-12 שנות הפרויקט.
                </p>
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם החברה שלכם רשומה כדין?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: כן, עם מספר ח&ldquo;פ ושמות בעלי תפקידים. ניתן לאמת ב
                  <a
                    href="https://www.gov.il/he/departments/dynamic_collectors/companies-registry/"
                    target="_blank"
                    rel="noopener nofollow"
                    className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
                  >
                    רשם החברות
                  </a>
                  . דגל אדום: היסטוריית פירוקים של חברות קודמות של אותם בעלים. בדיקה זאת לוקחת 10 דקות אונליין ויכולה למנוע אסונות.
                </p>
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shealot-4-6" title="שאלות 4-6: ערבויות ומימון">
            <ol start={4} className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">איזו ערבויות תספקו, ואיזה בנק או חברת ביטוח מנפיקה אותן?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: ערבות חוק מכר על דירת התמורה, ערבויות בנייה לכל שלב, ערבות שכר דירה לתקופת הביניים. כל הערבויות מבנק גדול. דגל אדום: ערבויות אישיות בלבד, ערבויות חברה-בת, או חוסר נכונות לפרט. למידע מקיף על ערבויות ראו את המדריך על{" "}
                  <Link
                    href="/pinui-binui/eravut"
                    className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                  >
                    ערבויות בפינוי בינוי
                  </Link>
                  .
                </p>
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה התשואה הצפויה לפרויקט שלי?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: 12%-25% תשואה צפויה. דגל אדום: סירוב לשתף, או תשואה מחוץ לטווח. תשואה מתחת ל-12% מסכנת את היזם פיננסית. תשואה מעל 25% מצביעה על הצעה גרועה לדיירים שיכולה להיות טובה יותר.
                </p>
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איך תתמודדו עם תרחיש כשל?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: תוכנית מפורטת. ערבויות שמכסות את הדירות, מנגנון הסבת הפרויקט ליזם אחר, ופיצוי לדיירים. דגל אדום: &ldquo;לא יקרה לנו, יש לנו אחריות&rdquo;. כל היזמים אומרים את זה, וחלקם נכשלו. תוכנית כשל מסודרת היא סימן למקצועיות.
                </p>
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shealot-7-8" title="שאלות 7-8: תהליך וביצוע">
            <ol start={7} className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מה לוח הזמנים המפורט עד מסירת הדירה?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: ציר זמן מפורט עם תאריכי יעד לכל אבן דרך משמעותית. אישור תוכנית, היתר בנייה, פינוי, הריסה, יציקות, מסירה. דגל אדום: לוח זמנים כללי בלבד (&ldquo;יוסף 5-7 שנים&rdquo;). בלי תאריכי יעד מחייבים, אין דרך לוודא שהפרויקט מתקדם כפי שהובטח.
                </p>
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה קורה אם יש איחור במסירה?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: פיצוי כספי על כל חודש איחור (5,000-10,000 ש&ldquo;ח לדייר), מגובה בערבות נפרדת. דגל אדום: &ldquo;אין סעיף איחור&rdquo; או &ldquo;תלוי בנסיבות&rdquo;. בלי סעיף פיצוי איחור, היזם לא נושא בעלות של עיכוב, וזה מקטין את התמריץ שלו לסיים בזמן.
                </p>
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shealot-9-10" title="שאלות 9-10: זכויות ספציפיות">
            <ol start={9} className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">איזו דירת תמורה אקבל בדיוק?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: מספר הדירה הספציפי בתוכנית הפרויקט, קומה, כיוון, וגודל מדויק. דגל אדום: &ldquo;דירה במתחם&rdquo; או &ldquo;דירה דומה&rdquo;. ההסכם חייב לקבוע את הדירה המדויקת בכתב. אם היזם לא יכול לקבוע אותה, סימן שתכנון הפרויקט עוד לא הושלם, וההסכם מוקדם מדי.
                </p>
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה הזכויות לדיירים מבוגרים?</strong>
                <p className="mt-2 leading-7">
                  התשובה הראויה: עיגון מלא של זכויות גיל לבני 70+ ובני 75+ בהסכם. חלופות חובה (דיור מוגן, דירה חלופית, שתי דירות), שמירת הזכויות ליורשים. דגל אדום: התעלמות מנושא זכויות הגיל, או הצהרה כללית בלי עיגון בכתב. למידע מקיף ראו את המדריך על{" "}
                  <Link
                    href="/pinui-binui/kshishim"
                    className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                  >
                    זכויות קשישים בפינוי בינוי
                  </Link>
                  .
                </p>
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="degalim-adumim" title="דגלים אדומים בתשובות">
            <p>
              חמישה דפוסי תשובות שמצביעים על יזם בעייתי, גם אם המספרים נכונים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">תשובות כלליות מדי.</strong> &ldquo;כמובן&rdquo;, &ldquo;אנחנו דואגים לכל&rdquo;, &ldquo;תהיה הכל בסדר&rdquo; ללא פירוט. מקצועיות = פירוט.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לחץ על זמן.</strong> &ldquo;צריך לחתום מהר אחרת ההצעה תפוג&rdquo;. מקצועיות = פתיחות לבחינה ולהשוואה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סירוב לתת תשובות בכתב.</strong> אם היזם לא רוצה לעגן בכתב, לא לחתום. בעל פה לא מחייב.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איומים סמויים.</strong> &ldquo;יזם אחר יציע פחות&rdquo;, &ldquo;תפסידו את ההזדמנות&rdquo;. מקצועיות = הצגת ערך אמיתי, לא איומים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תשובות סותרות.</strong> בפגישה אומר X, בכתב אומר Y. סימן לחוסר אמינות.
              </li>
            </ul>
            <p>
              עיון נוסף על מסגרת רגולטורית של התחדשות עירונית זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
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
              קיבלתם הצעה מיזם? שאלו את 10 השאלות לפני חתימה.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בבחירת יזם מקצועי. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="בחירת יזם: בואו נדבר"
            subtitle="השאירו שם וטלפון. נעזור להעריך את ההצעה שקיבלתם."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/10-shealot"
        targets={["pinui-binui-yazam", "pinui-binui", "pinui-binui-eravut"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על שאלות ליזם פינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
