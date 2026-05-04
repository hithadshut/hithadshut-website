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
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/tama-38/pkia-2026";
const TITLE = "תמ״א 38 פוקעת 2026: מה דייר עושה עכשיו | התחדשות";
const DESCRIPTION =
  "תמ״א 38 פוקעת מאי 2026. מדריך לבעלי דירות בפרויקטים פעילים: לוח זמנים, בדיקת סטטוס ההסכם, שלוש אפשרויות פעולה, וזכויות הדיירים בתקופת המעבר.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מתי בדיוק תמ״א 38 פוקעת?",
    a: "תמ״א 38 פוקעת באופן רשמי במאי 2026 ברוב הארץ. תאריך מדויק תלוי במחוז ובוועדה המקומית, אך עיקרון הפוקעה אחיד. אחרי הפוקעה אין יותר בקשות חדשות במסגרת תמ״א 38. פרויקטים שכבר קיבלו היתר בנייה ממשיכים לפי תנאי ההיתר. פרויקטים בלי היתר עומדים בסיכון גבוה ויצטרכו לעבור למסלול חלופי.",
  },
  {
    q: "מה אם יש לי הסכם תמ״א 38 פעיל ללא היתר?",
    a: "המצב מורכב ודורש פעולה דחופה. שלוש אפשרויות מרכזיות: למהר ולהוציא היתר לפני מאי 2026 (אפשרי בלוח זמנים אגרסיבי, דורש שיתוף פעולה מלא של היזם והוועדה), לעבור למסלול חלופי כמו חלופת שקד (במידה והבניין מתאים), או לבטל את ההסכם ולחפש מסלול אחר. ייעוץ עם עורך דין מקרקעין הוא הכרחי.",
  },
  {
    q: "האם אפשר עוד להגיש בקשה חדשה?",
    a: "תיאורטית כן עד מאי 2026, מעשית הליך הגשה חדש לוקח 18-36 חודשים בוועדה המקומית. בקשה שמוגשת ב-2026 תיקלע לתקופת המעבר וסביר שלא תושלם בתוך תמ״א 38. ועדות מקומיות רבות כבר מסיגות בקשות חדשות, וממליצות על מסלול חלופי. כל מקרה תלוי בוועדה המקומית הספציפית.",
  },
  {
    q: "מי משלם על העלויות עד הפוקעה?",
    a: "תלוי בהסכם הספציפי. הסכם תמ״א 38 תקני קובע שהיזם נושא בעלויות התכנון, הרישוי, ולעיתים גם בעלויות עורך דין דיירים. אם הפרויקט נעצר בגלל הפוקעה, חלק מההסכמים כוללים מנגנון פיצוי. ייעוץ משפטי דחוף הוא הכרחי לבדוק את הסעיף הספציפי בהסכם שלכם.",
  },
  {
    q: "האם ניתן לבטל הסכם תמ״א 38?",
    a: "תלוי בנוסח ההסכם. רוב ההסכמים כוללים סעיפי ביטול הדדיים בתנאים מסוימים: כשל יזם, אי-עמידה בלוחות זמנים, או שינוי רגולטורי. הפוקעה של תמ״א 38 עלולה להיחשב כשינוי רגולטורי. בית המשפט יבחן את העילה לפי נסיבות המקרה. ביטול הסכם דורש ייעוץ משפטי מקצועי, ולעיתים פסק דין.",
  },
  {
    q: "מה קורה לערבויות הבנקאיות?",
    a: "ערבויות בנקאיות שהונפקו במסגרת ההסכם נשארות בתוקף לפי תנאיהן המקוריים. הפוקעה של תמ״א 38 לא מבטלת ערבויות. אם הפרויקט לא מתממש בגלל הפוקעה, הדיירים יכולים לפנות לבנק המנפיק לפי תנאי הערבות. חובה לבדוק את תוקף הערבויות מול הבנק לפני שמקבלים החלטות.",
  },
  {
    q: "האם חלופת שקד היא תחליף ישיר?",
    a: "חלופת שקד היא הקרוב ביותר לתמ״א 38/2, ומיועדת לבניין יחיד עם הריסה ובנייה מחדש. רוב נדרש 80%, זהה לתמ״א 38/2. ההבדלים: זכויות בנייה גמישות יותר (עד 400% משטח קיים), תהליך אישור עדכני יותר, ומסגרת חוקית יציבה יותר. במצבים רבים, מעבר מתמ״א 38/2 לחלופת שקד דורש חתימה מחודשת על הסכם, אך הזכויות הבסיסיות משתמרות.",
  },
  {
    q: "מה אם רוב הדיירים רוצים להמשיך?",
    a: "רוב דיירים רוצה להמשיך אינו תחליף לאישור רגולטורי. אם תמ״א 38 פוקעת, אין מסגרת חוקית להמשיך במסלול הזה אלא אם יש כבר היתר. במקום זאת, הדיירים יכולים להעביר את הפרויקט לחלופת שקד עם רוב 80% (זהה לתמ״א 38/2). מאחר שהרוב כבר קיים, המעבר טכני יחסית, אך דורש הסכמה מחודשת על תנאי ההסכם החדש.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="תמ״א 38 פוקעת ב-2026: מה דייר צריך לעשות עכשיו"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "תמ״א 38", url: "/tama-38" },
          { name: "תמ״א 38 פוקעת", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="תמ״א 38 · פוקעת 2026"
        title="תמ״א 38 פוקעת ב-2026: מה דייר צריך לעשות עכשיו"
        subtitle="מדריך 2026 לבעלי דירות בפרויקטים פעילים: לוח זמנים, בדיקת סטטוס ההסכם, שלוש אפשרויות פעולה, וזכויות הדיירים בתקופת המעבר."
        crumbs={[
          { name: "תמ״א 38", href: "/tama-38" },
          { name: "פוקעת 2026", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              <Link
                href="/tama-38"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38
              </Link>{" "}
              פוקעת סופית במאי 2026 ברוב הארץ. בעלי דירות בבניינים שיש להם הסכם תמ״א 38 פעיל אך טרם קיבלו היתר בנייה נמצאים בנקודת זמן קריטית. פרויקטים שקיבלו היתר ממשיכים. פרויקטים שעוד לא קיבלו היתר עומדים בפני בחירה: למהר ולקדם את ההיתר לפני הפוקעה, לעבור למסלול חלופי כמו חלופת שקד או פינוי בינוי, או לעצור את הפרויקט. מדריך זה מסביר מה קורה בכל מצב, מה הזכויות, ומה צריך לעשות בחודשים הקרובים.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-pokaa" title="מה בדיוק פוקעת ב-2026?">
            <p>
              תמ״א 38 פוקעת באופן רשמי במאי 2026 ברוב הארץ. תאריך מדויק תלוי במחוז ובוועדה המקומית, אך עיקרון הפוקעה אחיד. הפוקעה משמעותה: אין יותר בקשות חדשות במסגרת תמ״א 38, ואין הארכות נוספות לפרויקטים שלא הוציאו היתר.
            </p>
            <p>
              שלוש קטגוריות של פרויקטים מושפעות בצורות שונות. פרויקטים עם היתר תקף ממשיכים בלי שינוי. פרויקטים עם הסכם בלבד נמצאים בסיכון. דיון ראשוני ללא הסכם בדרך כלל יעבור ישירות למסלול חלופי.
            </p>
            <p>
              חשוב להבחין בין הפוקעה הרשמית של תמ״א 38 לבין הפוקעה של פרויקטים ספציפיים. הפרויקט שלכם לא בהכרח &ldquo;פוקע&rdquo; ב-2026. מה שפוקע זו האפשרות להגיש בקשות חדשות במסגרת תמ״א 38. אם יש לכם היתר, הפרויקט ממשיך לפי תנאי ההיתר.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="mi-mushpah" title="מי מושפע ומי לא?">
            <p>
              ההשפעה של הפוקעה תלויה בשלב המדויק שבו נמצא הפרויקט שלכם.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">לא מושפעים: בעלי היתר בנייה תקף.</strong> ההיתר תקף לתקופה שקבועה בו, בדרך כלל 3 שנים. ניתן להאריך את תוקף ההיתר. פוקעת תמ״א 38 לא משפיעה על פרויקטים שכבר קיבלו היתר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בסיכון נמוך: בעלי תוכנית מאושרת.</strong> אם התוכנית כבר אושרה ובקשה להיתר נמצאת בתהליך, יש סיכוי טוב להוציא היתר לפני מאי 2026, בתנאי שיש שיתוף פעולה של היזם והוועדה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בסיכון בינוני: בעלי הסכם בלבד.</strong> אם נחתם הסכם אך הליך התכנון בוועדה לא מתקדם, הסיכון גדל. ייעוץ משפטי דחוף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בסיכון גבוה: דיון ראשוני בלבד.</strong> אם רק יש דיונים עם יזם ללא הסכם חתום, הסיכוי שתמ״א 38 תהיה הפתרון הוא נמוך מאוד. עדיף להתחיל ישירות בחלופת שקד או פינוי בינוי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="bdikat-status" title="בדיקת סטטוס ההסכם שלכם">
            <p>
              לפני קבלת החלטה על הפעולה, בדקו ארבע נקודות בהסכם הפעיל שלכם.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סעיף לוחות זמנים.</strong> מתי היזם התחייב להוציא היתר? אם המועד עבר ללא היתר, ייתכן שהדיירים זכאים לבטל את ההסכם ללא תשלום.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף שינוי רגולטורי.</strong> חלק מההסכמים כוללים מנגנון לטיפול בשינוי רגולטורי, כולל פוקעה. בודקים אם יש סעיף, ומה הוא קובע.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סטטוס הערבויות.</strong> ערבויות בנקאיות שהונפקו תקפות עד מועד שצוין בהן. בדיקה מול הבנק המנפיק חשובה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מנגנון מעבר למסלול חלופי.</strong> ייתכן שההסכם כולל סעיף שמאפשר מעבר לחלופת שקד או פינוי בינוי בתנאים מסוימים.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="3-efsharot" title="3 אפשרויות פעולה">
            <p>
              אחרי שבדקתם את הסטטוס של ההסכם, יש לכם שלוש אפשרויות עיקריות.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">אפשרות 1: למהר ולהוציא היתר.</strong> אם הפרויקט מתקדם ויש סיכוי להשלים את הליך הרישוי לפני מאי 2026, זוהי האפשרות העדיפה. דורש שיתוף פעולה מלא של היזם, של הוועדה המקומית, ושל פיקוד העורף. לוחות זמנים אגרסיביים, אך אפשריים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אפשרות 2: לעבור למסלול חלופי.</strong> אם הוצאת היתר לפני מאי 2026 לא ריאלית, מעבר לחלופת שקד הוא הצעד הטבעי. דורש חתימה מחודשת על הסכם בתנאים שעולים בחלופת שקד. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/chalufat-shaked"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  חלופת שקד
                </Link>
                . במתחמים גדולים (24+ יחידות), פינוי בינוי הוא חלופה נוספת. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  פינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אפשרות 3: לעצור את הפרויקט.</strong> אם אף מסלול לא ריאלי, ניתן לבטל את ההסכם הקיים ולשמור על הבית כפי שהוא. דורש בדיקה משפטית של תנאי הביטול בהסכם. במצבים מסוימים, ביטול מזכה את הדיירים בפיצוי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="luach-zmanim" title="לוח זמנים של החודשים הקרובים">
            <p>
              שש נקודות זמן קריטיות שכדאי להכניס ליומן:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">עכשיו: בדיקת סטטוס.</strong> מסמכים, התקדמות בוועדה, ערבויות, סעיפי ההסכם. בלי בסיס מידע ברור אי אפשר לקבל החלטות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בתוך 30 יום: ייעוץ משפטי.</strong> פגישה עם עורך דין מקרקעין שמכיר את הפרויקט. הערכת הסיכון והאפשרויות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בתוך 60 יום: החלטת מסלול.</strong> בחירה בין שלוש האפשרויות (להמשיך, לעבור, לעצור) לפי הנסיבות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דצמבר 2025: יעד הוצאת היתר.</strong> אם בחרתם בהמשך, זה תאריך היעד הריאלי להוציא היתר. אחריו הסיכון גדל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מרץ-אפריל 2026: סגירת חלון.</strong> ועדות מקומיות מסיימות לטפל בבקשות פתוחות. אחרון ההזדמנויות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מאי 2026: פוקעה רשמית.</strong> אין יותר תמ״א 38 חדשה. רק פרויקטים עם היתר ממשיכים.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="zechuyot-bemavar" title="זכויות הדיירים בתקופת המעבר">
            <p>
              גם בתקופת אי-ודאות, זכויות הדיירים נשמרות. ארבע זכויות מרכזיות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">זכות לקבל מידע מהיזם.</strong> היזם מחויב לעדכן את הדיירים בכל שינוי משמעותי בפרויקט. אי-עדכון עלול להיות הפרת חוזה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות לייעוץ משפטי על חשבון היזם.</strong> בהסכמים תקניים, היזם נושא בעלות עורך דין דיירים. במצב של שינוי רגולטורי, ייעוץ משפטי נוסף לעיתים נדרש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות לבטל בכשל יזם.</strong> אם היזם נכשל לעמוד בלוחות זמנים סבירים, זכות הדיירים לבטל את ההסכם נשמרת.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות למעבר חלק למסלול חלופי.</strong> אם יש מעבר לחלופת שקד, הזכויות שצוברו במסגרת תמ״א 38 עוברות, בכפוף להסכמה הדדית על התנאים החדשים.
              </li>
            </ul>
            <p>
              עיון נוסף על זכויות דיירים בתקופת המעבר ב
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
              פרויקט תמ״א 38 פעיל? בדקו את האפשרויות לפני שיהיה מאוחר.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בתקופת מעבר זו. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="תמ״א 38 פוקעת: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי של הפרויקט שלכם."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="tama-38/pkia"
        targets={["tama-38", "chalufat-shaked", "pinui-binui"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על פוקעת תמ״א 38"
        tone="soft"
        includeSchema
      />
    </>
  );
}
