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

const PATH = "/madrichim/zechut-baalut-vs-zechut-yorshim";
const TITLE = "זכות בעלות מול זכות יורשים בפינוי בינוי | התחדשות";
const DESCRIPTION =
  "ההבחנה בין זכות בעלות לזכות יורשים בפינוי בינוי קריטית להחלטות משפטיות וכלכליות. מאמר מעמיק 2026: ההבדל המשפטי, השלכות, ומה לעגן בהסכם.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל המשפטי בין בעלות לזכות יורשים?",
    a: "בעלות היא זכות מלאה בנכס, כולל זכות חזקה, שימוש, ופירעון. הבעלים רשום בטאבו, ויכול לעשות בנכס כל פעולה (למכור, להשכיר, לתת במתנה). זכות יורשים היא זכות עתידית, שתחול רק אחרי פטירת המוריש. עד הפטירה, ליורש העתידי אין זכות עכשווית בנכס. ההבחנה משפיעה על מי יכול לחתום על הסכם פינוי בינוי, מי זכאי לתמורה, ומי נושא בחבות מס.",
  },
  {
    q: "האם יורש יכול לחתום על הסכם פינוי בינוי?",
    a: "תלוי בשלב. אם המוריש בחיים, היורש העתידי לא חותם. רק הבעלים (המוריש) חותם. אחרי פטירת המוריש, היורשים נכנסים לנעליו ויכולים לחתום אחרי הליך ירושה (צו קיום צוואה או צו ירושה). אם המוריש חתם לפני הפטירה, היורשים נכנסים לכל זכויותיו וחובותיו לפי ההסכם.",
  },
  {
    q: "מה קורה אם המוריש נפטר באמצע הפרויקט?",
    a: "היורשים נכנסים לנעלי המוריש. הזכויות הבסיסיות (דירת תמורה, ערבויות) משתמרות. אבל זכויות מיוחדות שהיו למוריש (כמו זכויות גיל לבני 70+/75+) לא תמיד עוברות אוטומטית. אם בהסכם יש סעיף יורשים ספציפי שמשמר את הזכויות, הן עוברות. בלי סעיף, היורשים מקבלים את התמורה הסטנדרטית בלבד. למידע מקיף ראו את המדריך על ירושה דירה בפינוי בינוי.",
  },
  {
    q: "מה זה 'זכות עתידית'?",
    a: "זכות עתידית היא זכות שתחול רק אחרי אירוע מסוים, בדרך כלל פטירה. ליורש הפוטנציאלי יש &ldquo;ציפייה לרשת&rdquo;, אך אין זכות בנכס בעת הזאת. הוא לא יכול למכור את הזכות, לא יכול לחתום על הסכמים בשם הנכס, ולא יכול לדרוש שכר דירה. הזכות מתממשת רק עם הפטירה, לפי הצוואה או חוק הירושה.",
  },
  {
    q: "האם המוריש יכול להוריש דירה במהלך הפרויקט?",
    a: "כן, באמצעות צוואה. המוריש יכול לקבוע מי ירש את הדירה. אם אין צוואה, חוק הירושה קובע: בני זוג ויורשים על פי דין מחולקים לפי כללים מסוימים. במצב של פרויקט פינוי בינוי פעיל, מומלץ למוריש לעדכן את הצוואה כדי לכלול הוראות ספציפיות לגבי הדירה החדשה ולהסכם הפינוי. ייעוץ עם עורך דין מקרקעין ועם עורך דין משפחות הוא הכרחי.",
  },
  {
    q: "איך הזכויות מחולקות בין כמה יורשים?",
    a: "תלוי בצוואה ובחוק. אם המוריש קבע בצוואה חלוקה ספציפית, החלוקה מתקיימת. אם אין צוואה, חוק הירושה הישראלי קובע: בן זוג מקבל חלק יחסי, ילדים מתחלקים שווה בשווה ביתר. במצב של דירה אחת ויורשים מרובים, החלוקה לעיתים מורכבת: מכירה משותפת, רכישת חלק על ידי יורש אחד מאחרים, או החזקה משותפת.",
  },
  {
    q: "מה אם יש מחלוקת בין היורשים?",
    a: "מחלוקת בין יורשים נפוצה בפרויקטי פינוי בינוי, במיוחד אם הפרויקט ארוך 10+ שנים. אם רוב היורשים רוצים להמשיך וחלק לא, יש מנגנונים משפטיים: מכירת חלק על ידי המסכימים לאלה שלא, מכירה לצד שלישי, או פניה לבית משפט. בית המשפט יכול להורות על מכירה כפויה במצבים מסוימים. ייעוץ עם עורך דין מקרקעין הוא הכרחי.",
  },
  {
    q: "מה לעגן בהסכם פינוי בינוי לעניין יורשים?",
    a: "ארבעה סעיפים מרכזיים: סעיף יורשים מקיף שמבטיח שכל הזכויות עוברות, סעיף שמירת זכויות גיל אם המוריש בן 70+, סעיף תקופת ביניים שמסביר מתי הזכות עוברת, וסעיף ערבויות שעוברות אוטומטית. בלי סעיפים אלה, היורשים עלולים לקבל פחות מהמוריש המקורי היה זכאי לקבל. עורך דין דיירים יבדוק את ההסכם ויעגן את הסעיפים הנדרשים.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="זכות בעלות מול זכות יורשים בפינוי בינוי"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "זכות בעלות מול יורשים", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · ירושה ויורשים"
        title="זכות בעלות מול זכות יורשים בפינוי בינוי"
        subtitle="מאמר מעמיק 2026: ההבחנה המשפטית, ההשלכות בפרויקט פינוי בינוי, ומה לעגן בהסכם להגנת היורשים."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "בעלות מול יורשים", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ההבחנה בין זכות בעלות לזכות יורשים היא יסוד משפטי שמשפיע באופן מהותי על כל החלטה בפרויקט פינוי בינוי. בעלות היא זכות מלאה ועכשווית בנכס. זכות יורשים היא זכות עתידית שתחול רק אחרי הפטירה. ההבחנה הזאת משפיעה על מי יכול לחתום על הסכמים, מי זכאי לתמורה, ומי נושא בחבות מס. מאמר זה מסביר את ההבחנה, מציג את ההשלכות בפרויקט פינוי בינוי, ומפרט מה לעגן בהסכם להגנת היורשים. למידע מקיף על ירושה ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/yorshim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ירושה דירה בפינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hevdel-mishpati" title="ההבדל המשפטי הבסיסי">
            <p>
              בעלות בנכס מקרקעין היא זכות מלאה: זכות לחזקה (שימוש פיזי), זכות לשימוש (איך להשתמש בנכס), וזכות לפירעון (מכירה, השכרה, מתנה). הבעלים רשום בטאבו, ויש לו אפשרות לעשות בנכס כל פעולה משפטית. זוהי הזכות המקיפה ביותר בנכס.
            </p>
            <p>
              זכות יורשים היא זכות עתידית, מותנית. היא תקום רק אם וכאשר אירוע מסוים יקרה (פטירת המוריש), ובהתאם לצוואה או לחוק הירושה. עד הפטירה, ליורש הפוטנציאלי אין זכות עכשווית בנכס: הוא לא יכול לעשות שום פעולה בו, ואין לו זכות תביעה כלפי המוריש בקשר לנכס.
            </p>
            <p>
              ההבחנה הזאת קריטית לפרויקטים ארוכי טווח כמו פינוי בינוי, שיכולים להימשך 7-12 שנים. במהלך הפרויקט, זכות הבעלות עשויה לעבור: בעקבות פטירה, מתנה, או מכירה. כל מעבר משפיע על מי הצד הרלוונטי בהסכם.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashlachot-pinui" title="השלכות בפרויקט פינוי בינוי">
            <p>
              ההבחנה משפיעה על שמונה היבטים בפרויקט פינוי בינוי.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="זכות בעלות לעומת זכות יורשים: השלכות בפרויקט"
              columns={[
                { key: "baalut", header: "בעלות" },
                { key: "yorshim", header: "זכות יורשים (לפני פטירה)" },
              ]}
              rows={[
                {
                  label: "חתימה על הסכם",
                  cells: { baalut: "כן, הבעלים חותם", yorshim: "לא, אין זכות חתימה" },
                },
                {
                  label: "ייצוג בנציגות",
                  cells: { baalut: "כן, הבעלים מייצג", yorshim: "לא, אין מעמד פורמלי" },
                },
                {
                  label: "קבלת תמורה",
                  cells: { baalut: "ישירות לבעלים", yorshim: "רק אחרי פטירה ובכפוף לצוואה" },
                },
                {
                  label: "חבות מס",
                  cells: { baalut: "מס שבח על הבעלים", yorshim: "מס שבח על העיזבון או היורשים" },
                },
                {
                  label: "ערבויות",
                  cells: { baalut: "מוקצות לבעלים", yorshim: "עוברות אחרי הפטירה" },
                },
                {
                  label: "זכויות גיל",
                  cells: { baalut: "אם הבעלים בן 70+, חלות", yorshim: "לא חלות לפני קבלת בעלות" },
                },
                {
                  label: "מכירת זכויות",
                  cells: { baalut: "אפשרית", yorshim: "אינה אפשרית לפני פטירה" },
                },
                {
                  label: "השפעה על המוריש",
                  cells: { baalut: "המוריש מנהל את הפרויקט", yorshim: "ליורש אין השפעה על ההחלטות" },
                },
              ]}
              footnote="ההבחנה משתנה אחרי פטירת המוריש: היורשים נכנסים לנעליו ומקבלים את הזכויות במלואן."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="moresh-bemamerech" title="כשהמוריש נפטר במהלך הפרויקט">
            <p>
              פרויקט פינוי בינוי נמשך 7-12 שנים. במשך תקופה זו, פטירה של המוריש (במיוחד בקרב דיירים מבוגרים) היא תרחיש לא נדיר. ההשלכות תלויות במצב המשפטי של ההסכם בעת הפטירה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">לפני חתימת הסכם:</strong> המוריש עדיין לא חתם. אחרי פטירה, היורשים נכנסים בנעליו לאחר הליך ירושה. הם זכאים להחליט אם לחתום או לא.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">אחרי חתימת הסכם, לפני הריסה:</strong> המוריש חתם. הזכויות והחובות עוברות ליורשים. הזכויות הבסיסיות (דירת תמורה, ערבויות) נשמרות. זכויות גיל מיוחדות (אם המוריש היה בן 70+) לא תמיד עוברות אוטומטית.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">אחרי הריסה, לפני מסירה:</strong> מצב מורכב היסטורית, שנפתר בנייר עמדה של רשות המסים. היורשים נכנסים בנעלי המוריש, ופטור ממס שבח עובר אם המוריש היה זכאי. למידע מקיף ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/yorshim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ירושה דירה בפינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="zechuyot-gil-yorshim" title="זכויות גיל ויורשים: ההגנה הכפולה">
            <p>
              דיירים בני 70+ זכאים להגנות מיוחדות בפינוי בינוי: דירת תמורה ולחלופה אחת מתוך שלוש (דיור מוגן, דירה חלופית, שתי דירות). דיירים בני 75+ זכאים לכל החלופות. הזכויות אינן ניתנות לוויתור.
            </p>
            <p>
              השאלה: האם זכויות הגיל עוברות ליורשים אחרי פטירת המוריש? התשובה תלויה בהסכם. אם בהסכם יש סעיף יורשים שמפרט שזכויות הגיל עוברות, הן עוברות. אם הסעיף חסר, הזכויות פוקעות עם הפטירה, והיורשים מקבלים רק את דירת התמורה הסטנדרטית.
            </p>
            <p>
              ההבחנה הזאת משמעותית: זכויות גיל יכולות להיות שווי מאות אלפי שקלים (דיור מוגן באיכות גבוהה, או שתי דירות במקום אחת). אובדן הזכויות בעקבות פטירה ללא סעיף הגנה הוא נזק כלכלי משמעותי. למידע מקיף על זכויות גיל ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/kshishim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                זכויות קשישים בפינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-le-agen" title="מה לעגן בהסכם להגנת יורשים">
            <p>
              ארבעה סעיפים מרכזיים שצריכים להופיע בהסכם פינוי בינוי כדי להגן על יורשים:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סעיף יורשים מקיף.</strong> קובע שכל הזכויות בהסכם עוברות ליורשים אוטומטית, כולל זכויות לדירת תמורה, חניה, מחסן, ושכר דירה לתקופת הביניים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף שמירת זכויות גיל.</strong> אם הבעלים בן 70+ ויש לו זכויות מיוחדות (חלופות), הסעיף קובע שהזכויות עוברות ליורשים. בלי הסעיף, הן פוקעות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף תקופת ביניים.</strong> מפרט מתי בדיוק הזכות עוברת ליורשים בתקופה שבין הפטירה למסירת הדירה. מגדיר אחריות על שכר דירה ונשיאה בהוצאות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף ערבויות מועברות.</strong> מבטיח שהערבויות הבנקאיות שהיזם הנפיק עוברות אוטומטית ליורשים. סעיף שמרבים להחליק.
              </li>
            </ol>
            <p>
              עיון נוסף על זכויות יורשים זמין באתר{" "}
              <a
                href="https://www.kolzchut.org.il/he/%D7%99%D7%A8%D7%95%D7%A9%D7%94"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                כל זכות
              </a>
              {" "}וב
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
          <ContentSection id="machloket-yorshim" title="מחלוקת בין יורשים: איך מתמודדים">
            <p>
              במצבים של מספר יורשים, מחלוקות נפוצות. שלושה תרחישים מרכזיים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חלקם רוצים להמשיך, חלקם לא.</strong> אם רוב היורשים רוצים להמשיך, ניתן לרכוש את חלקם של המתנגדים, או למכור לצד שלישי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מחלוקת על תנאי ההסכם.</strong> יורשים עשויים להתנגד לתנאים שהמוריש קיבל. שינוי ההסכם דורש הסכמה הדדית עם היזם, ולא תמיד אפשרי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חלוקה לא ברורה.</strong> אם הצוואה לא ברורה, או אין צוואה, חוק הירושה קובע. במצבים מורכבים, נדרש פסק דין שקובע את החלוקה.
              </li>
            </ul>
            <p>
              במצבים של מחלוקת, ייעוץ עם עורך דין משפחות ועם עורך דין מקרקעין הוא הכרחי. ככל שניתן להגיע להסכמה הדדית בין היורשים, התהליך יהיה פשוט ומהיר יותר.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "כל זכות: יורש דירה בפינוי בינוי",
          url: "https://www.kolzchut.org.il/he/%D7%99%D7%A8%D7%95%D7%A9%D7%94",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              ירשתם דירה במתחם פינוי בינוי? בדקו את הזכויות.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים משפחות ויורשים בהתחדשות עירונית. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="זכויות יורשים: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב המשפטי של הירושה."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/yorshim"
        targets={["pinui-binui-yorshim", "pinui-binui-kshishim", "pinui-binui"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על בעלות וזכות יורשים"
        tone="soft"
        includeSchema
      />
    </>
  );
}
