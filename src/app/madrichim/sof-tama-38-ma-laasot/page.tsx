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

const PATH = "/madrichim/sof-tama-38-ma-laasot";
const TITLE = "סוף תמ״א 38: מה דייר צריך לעשות עכשיו | התחדשות";
const DESCRIPTION =
  "תמ״א 38 פוקעת מאי 2026. מאמר מנחה לבעלי דירות בפרויקטים פעילים: לוח זמנים, מטריצת אלטרנטיבות, פעולות מומלצות לכל סטטוס פרויקט.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה התאריך המדויק לפוקעת תמ״א 38?",
    a: "מאי 2026 ברוב הארץ. תאריך מדויק תלוי במחוז ובוועדה המקומית. בחלק מהמחוזות הפוקעה הקדימה (קצת לפני מאי 2026), בחלק היא דחתה (קצת אחרי). הוועדה המקומית בעיר שלכם יודעת את התאריך המדויק. עיון נוסף זמין באתר משרד הפנים והרשות הממשלתית להתחדשות עירונית.",
  },
  {
    q: "מה קורה לפרויקט שיש לו רק הסכם בלי היתר?",
    a: "מצב סיכון. אם הוצאת היתר עד מאי 2026 לא ריאלית, יש שלוש אפשרויות: למהר ולקדם הליך רישוי בלוח זמנים אגרסיבי, לעבור למסלול חלופי כמו חלופת שקד או פינוי בינוי, או לבטל את ההסכם. ייעוץ עם עורך דין מקרקעין הוא הכרחי. בדיקת ההסכם מבחינת סעיפי שינוי רגולטורי וביטול תקבע את האפשרויות.",
  },
  {
    q: "פרויקט עם היתר תקף ממשיך אחרי מאי 2026?",
    a: "כן. היתר בנייה שהוצא לפני הפוקעה תקף לתקופה שמופיעה בו, בדרך כלל 3 שנים. ניתן להאריך את תוקף ההיתר. הפוקעה של תמ״א 38 לא משפיעה על פרויקטים שכבר קיבלו היתר. ההסכם, הערבויות, וזכויות הדיירים נשמרים לפי התנאים המקוריים.",
  },
  {
    q: "האם מומלץ לעבור לחלופת שקד עוד עכשיו?",
    a: "תלוי במצב. אם יש סיכוי טוב להוציא היתר תמ״א 38 לפני מאי 2026 בתנאים הקיימים, כדאי להמשיך. אם הוצאת היתר אינה ריאלית, מעבר מוקדם לחלופת שקד מקטין את הסיכון של פוקעת ההסכם. המעבר דורש חתימה מחודשת על הסכם, אך התנאים החדשים בדרך כלל טובים יותר (זכויות בנייה גמישות יותר).",
  },
  {
    q: "מה אם דייר אחד מתנגד למעבר לחלופת שקד?",
    a: "המעבר מתמ״א 38/2 לחלופת שקד דורש את אותו רוב 80%. אם 80% הסכימו לתמ״א 38/2, סביר שהם יסכימו גם לחלופת שקד. דייר מסרב יחיד לא עוצר את הפרויקט אם הרוב קיים. יחד עם זאת, התדיינות עמו יקרה ומעכבת. שיחה ישירה עם הסרבן והבנת הסיבה לעיתים מסירה את ההתנגדות.",
  },
  {
    q: "מה לבדוק בסעיף ההסכם לגבי שינוי רגולטורי?",
    a: "חלק מההסכמים כוללים סעיף שמטפל בשינוי רגולטורי, כולל פוקעה. הסעיף עשוי לקבוע: האם הדיירים זכאים לפיצוי במקרה של פוקעה ללא היתר, מה הזכויות במעבר למסלול חלופי, ומי נושא בעלויות נוספות. עורך דין מקרקעין יבחן את הסעיף הספציפי בהסכם ויפרש את ההשלכות.",
  },
  {
    q: "האם יש שירות לליווי בתקופת המעבר?",
    a: "כן. חברות בנייה (כמו אנחנו) ומשרדי עורכי דין מתמחים בליווי דיירים בתקופת המעבר מתמ״א 38 לחלופת שקד או פינוי בינוי. השירות כולל בדיקת סטטוס הסכמים פעילים, ניתוח אפשרויות, וניהול מו&ldquo;מ עם היזם הנוכחי או יזמים חלופיים. ייעוץ ראשוני בדרך כלל ללא עלות.",
  },
  {
    q: "כמה זמן נשאר עד הפוקעה?",
    a: "הפוקעה במאי 2026. נכון ל-2026-05-04, נשארים פחות משבועיים בלבד עד הפוקעה הרשמית. למרבית הפרויקטים שלא קיבלו היתר עדיין, ההזדמנות עוברת. נדרשת התייחסות דחופה: בדיקת סטטוס מיידית, ייעוץ משפטי תוך ימים, והחלטה על מסלול חלופי.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="סוף תמ״א 38: מה דייר צריך לעשות עכשיו"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "סוף תמ״א 38", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · התחדשות עירונית"
        title="סוף תמ״א 38: מה דייר צריך לעשות עכשיו"
        subtitle="מאמר מנחה 2026: לוח זמנים מפורט של הפוקעה, מטריצת אלטרנטיבות לכל מצב פרויקט, ופעולות מומלצות לבעלי דירות."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "סוף תמ״א 38", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              תמ״א 38 פוקעת רשמית במאי 2026 ברוב הארץ. בעלי דירות בפרויקטים פעילים נמצאים בנקודת זמן קריטית. פרויקטים עם היתר ממשיכים לפי התוכנית המקורית. פרויקטים בלי היתר עומדים בפני מטריצת אלטרנטיבות מורכבת. מאמר זה מספק מפת דרכים מעשית לבעלי דירות: לוח זמנים מפורט, מטריצת אפשרויות לכל סטטוס פרויקט, ופעולות מומלצות. למידע מקיף על הפוקעה ראו את המדריך על{" "}
              <Link
                href="/tama-38/pkia-2026"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38 פוקעת
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="luach-zmanim" title="לוח זמנים של הפוקעה">
            <p>
              שש נקודות זמן קריטיות שכדאי להכניס ליומן. כל נקודה דורשת פעולה ספציפית.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">עכשיו עד דצמבר 2025.</strong> חלון להגשת בקשות חדשות לתמ״א 38. מי שמתחיל עכשיו צריך לעבוד בלוח זמנים אגרסיבי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ינואר 2026.</strong> חלון אחרון להגשת בקשות חדשות. אחרי תאריך זה, רוב הוועדות לא יקבלו בקשות חדשות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פברואר-אפריל 2026.</strong> תקופת מעבר. הוועדות מסיימות לטפל בבקשות פתוחות. בקשות חדשות לא מתקבלות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מאי 2026.</strong> פוקעה רשמית. אין יותר תמ״א 38 חדשה. רק פרויקטים עם היתר ממשיכים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יוני-דצמבר 2026.</strong> תקופת התאקלמות לחלופת שקד. עלייה משמעותית בפרויקטים חדשים תחת המסגרת העדכנית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">2027 ואילך.</strong> חלופת שקד היא המסלול הסטנדרטי לבניין יחיד. פינוי בינוי למתחמים. תמ״א 38 רק בפרויקטים פעילים עם היתר תקף.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="matritzat-status" title="מטריצת סטטוס פרויקט">
            <p>
              לכל סטטוס פרויקט יש מטריצת פעולות שונה. זיהוי הסטטוס המדויק הוא הצעד הראשון.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="מטריצת פעולות לפי סטטוס פרויקט תמ״א 38"
              columns={[
                { key: "status", header: "סיכון" },
                { key: "peulah", header: "פעולה מומלצת" },
              ]}
              rows={[
                {
                  label: "פרויקט עם היתר תקף",
                  cells: { status: "אין סיכון", peulah: "המשך לפי התוכנית; ודא שההיתר מוארך כשנדרש" },
                },
                {
                  label: "תוכנית מאושרת, ממתינה להיתר",
                  cells: { status: "סיכון בינוני", peulah: "מהר את תהליך ההיתר; שיתוף פעולה עם היזם" },
                },
                {
                  label: "הסכם חתום, תוכנית בוועדה",
                  cells: { status: "סיכון גבוה", peulah: "ייעוץ דחוף; שקול מעבר לחלופת שקד" },
                },
                {
                  label: "הסכם חתום, ללא תוכנית",
                  cells: { status: "סיכון גבוה מאוד", peulah: "מעבר לחלופת שקד או פינוי בינוי" },
                },
                {
                  label: "דיון ראשוני בלבד",
                  cells: { status: "אין מסלול", peulah: "התחל ישירות בחלופת שקד או פינוי בינוי" },
                },
              ]}
              footnote="זיהוי הסטטוס המדויק מצריך בדיקה של תיק הפרויקט בוועדה המקומית."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="alternativot" title="האלטרנטיבות הקיימות">
            <p>
              שלוש אלטרנטיבות עיקריות לבעלי דירות שלא יספיקו להוציא היתר במסגרת תמ״א 38:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חלופת שקד.</strong> הממשיכה הישירה של תמ״א 38/2. רוב נדרש 80%. מאפשרת זכויות בנייה עד 400% משטח קיים. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/chalufat-shaked"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  חלופת שקד
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פינוי בינוי.</strong> למתחמים של 24+ יחידות. רוב נדרש 67% לתביעה, 100% לביצוע. תהליך ארוך 7-12 שנים. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  פינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שמירה במצב קיים.</strong> אופציה לגיטימית. אם הבית בסטנדרט סביר ואין דחיפות, ניתן לחכות עד שמסלול עדכני יתאים יותר.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="peulot" title="פעולות מומלצות בחודשים הקרובים">
            <p>
              שמונה פעולות מסודרות שכל בעל דירה בפרויקט פעיל צריך לבצע:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת סטטוס בוועדה.</strong> הוועדה המקומית בעיר שלכם יודעת את סטטוס הפרויקט המדויק. בקשת מידע רשמי על הסטטוס.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ייעוץ עם עורך דין מקרקעין.</strong> בתוך 30 יום. בדיקת ההסכם, סעיפי שינוי רגולטורי, ואפשרויות פעולה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת תוקף הערבויות.</strong> מול הבנק המנפיק. ערבויות תקפות מספקות הגנה גם בתרחיש פוקעה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תיאום עם היזם.</strong> שיחה ישירה על תכנית הפעולה של היזם בתקופת המעבר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">החלטת מסלול.</strong> בתוך 60 יום. בחירה בין המשך תמ״א 38 (אם ריאלי), מעבר לחלופת שקד, או ביטול.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פנייה לאסיפת דיירים.</strong> אם מתקבלת החלטה על מעבר, אסיפה רשמית לאישור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חתימה על הסכם חדש.</strong> במידה ויש מעבר, חתימה על מסגרת חוקית עדכנית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מעקב שוטף.</strong> בדיקת התקדמות בכל 30 יום עד הפוקעה.
              </li>
            </ol>
            <p>
              עיון נוסף על המסגרת הרגולטורית זמין ב
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
              פרויקט תמ״א 38 פעיל? בדקו את המצב לפני הפוקעה.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים דיירים בתקופת מעבר. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="סוף תמ״א 38: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי של הפרויקט שלכם."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/sof-tama-38"
        targets={["tama-38", "chalufat-shaked", "pinui-binui"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על סוף תמ״א 38"
        tone="soft"
        includeSchema
      />
    </>
  );
}
