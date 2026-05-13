import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  ofekPersonJsonLd,
  organizationJsonLd,
  breadcrumbJsonLd,
  ofekImageJsonLd,
  type FaqItem,
} from "@/lib/schema";
import { site } from "@/lib/site";

const PATH = "/about/ofek-mazor";
const TITLE = "אופק מזור | מנכ״ל התחדשות בינוי ויזמות | אודות";
const DESCRIPTION =
  "אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות, מתווך מקרקעין מוסמך (רישיון 3246290). מנהל פרויקטי בניית ממ״דים, מיגון, פינוי בינוי ושיפוצים בכל הארץ.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    q: "מי עומד מאחורי חברת התחדשות בינוי ויזמות?",
    a: "אופק מזור, מנכ״ל ומייסד החברה, מתווך מקרקעין מוסמך (רישיון 3246290). אופק מנהל כל פרויקט באופן אישי מהפנייה הראשונה ועד מסירת המפתח.",
  },
  {
    q: "האם אופק מזור הוא קבלן רשום?",
    a: "החברה עובדת עם קבלנים רשומים בפנקס הקבלנים, בעלי סיווג מתאים וביטוח בתוקף. אופק עצמו מנהל את הפרויקט ומוודא שכל עבודה מבוצעת לפי התקנים.",
  },
  {
    q: "איך יוצרים קשר עם אופק מזור?",
    a: "טלפון ישיר: 054-671-2130. וואטסאפ: הודעה דרך הקישור באתר. טופס: עמוד צור קשר באתר. אימייל: info@hithadshut.co.il. זמני מענה: ימים א׳ עד ה׳ 08:00 עד 19:00, ו׳ 08:00 עד 13:00.",
  },
  {
    q: "האם אפשר לקבל ייעוץ ראשוני ללא עלות?",
    a: "שיחת הייעוץ הראשונית היא ללא עלות וללא התחייבות. בשיחה נבין מה המצב הקיים, מה האפשרויות, ומה טווח ההשקעה הצפוי. רק לאחר מכן מגישים הצעת מחיר מפורטת.",
  },
  {
    q: "מה ההבדל בין התחדשות לחברות בנייה אחרות?",
    a: "ליווי אישי של מנכ״ל החברה בכל פרויקט. אין העברה לקבלן משנה אנונימי. חוזה אחד, גורם אחד, אחריות ברורה. מחיר פריט פריט, ללא חבילות סגורות.",
  },
  {
    q: "באילו אזורים החברה פועלת?",
    a: "התחדשות בינוי ויזמות פועלת בכל הארץ: מרכז, שרון, שפלה, דרום וצפון. ריכוז הפעילות הוא באזור גוש דן, השרון והשפלה, אך מבצעים פרויקטים גם בפריפריה.",
  },
  {
    q: "מה האחריות שנותנת החברה על העבודה?",
    a: "אחריות לפי חוק המכר: שנה על תקלות כלליות, שלוש שנים על מערכות, שבע שנים על קונסטרוקציה. שירות שוטף גם אחרי תקופת האחריות הרשמית.",
  },
  {
    q: "כמה זמן לוקח לקבל הצעת מחיר?",
    a: "לאחר שיחת הייעוץ הראשונית, הצעת מחיר מפורטת מגיעה תוך 3 עד 7 ימי עבודה. ההצעה כוללת פירוט פריט פריט ולוח זמנים משוער.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="הנהגה"
        title="אופק מזור: מנכ״ל ומייסד"
        subtitle="מוביל את התחדשות בינוי ויזמות. יזם ומנהל פרויקטים בהתחדשות עירונית ומיגון. אחראי על כל פרויקט מהשיחה הראשונה ועד מסירת המפתח."
        crumbs={[
          { name: "אודות", href: "/about" },
          { name: "אופק מזור", href: PATH },
        ]}
      />

      <JsonLd
        data={[
          organizationJsonLd(),
          ofekPersonJsonLd(),
          ofekImageJsonLd(),
          breadcrumbJsonLd([
            { name: "בית", url: "/" },
            { name: "אודות", url: "/about" },
            { name: "אופק מזור", url: PATH },
          ]),
        ]}
      />

      <Section tone="white">
        <div className="grid md:grid-cols-[280px_minmax(0,1fr)] gap-10 md:gap-14 items-start max-w-5xl mx-auto">
          {/* Photo + quick facts */}
          <aside className="md:sticky md:top-24">
            <figure className="w-full aspect-[5/6] rounded-2xl overflow-hidden shadow-card ring-1 ring-[var(--color-accent)]/30 relative bg-soft">
              <Image
                src="/ofek-mazor.jpg"
                alt="אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות"
                width={500}
                height={640}
                priority
                sizes="280px"
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="mt-6 space-y-3 text-sm">
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">
                  תפקיד
                </div>
                <div className="font-bold text-[var(--color-primary)]">מנכ״ל ומייסד</div>
                <div className="text-[var(--color-muted)]">
                  התחדשות בינוי ויזמות
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">
                  רישוי
                </div>
                <div className="font-bold text-[var(--color-primary)]">
                  מתווך מקרקעין מוסמך
                </div>
                <div className="text-[var(--color-muted)]">
                  רישיון מספר 3246290,{" "}
                  <a
                    href="https://www.gov.il/he/service/real_estate_agent_license_check"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--color-primary)]"
                  >
                    בדיקה ברשם המתווכים
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">
                  תחום פעילות
                </div>
                <div className="font-bold text-[var(--color-primary)]">
                  יזם ומנהל פרויקטים
                </div>
                <div className="text-[var(--color-muted)]">
                  ממ״ד, מיגון, בנייה פרטית, שיפוצים, הרחבות, התחדשות עירונית.
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">
                  יצירת קשר
                </div>
                <div className="text-[var(--color-ink)]">
                  <a
                    href={`tel:${site.phoneDial}`}
                    className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="text-[var(--color-muted)]">
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-[var(--color-primary)]"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Bio */}
          <div>
            <Prose>
              <h2>מי זה אופק מזור</h2>
              <p>
                אופק מזור הוא המנכ״ל והמייסד של חברת התחדשות בינוי ויזמות.
                הוא מתווך מקרקעין מוסמך, בעל רישיון מספר 3246290 מטעם רשם
                המתווכים במשרד המשפטים. אופק מנהל את הפעילות העסקית
                והמקצועית של החברה: מהפנייה הראשונה של לקוח, דרך תכנון,
                רישוי, ביצוע ומסירה, ועד תיק הפרויקט הסופי.
              </p>
              <p>
                כל לקוח של החברה מקבל ליווי ישיר ממנהל הפרויקט. אופק לא
                מעביר לקוחות לקבלן משנה או לאיש מכירות. אותו אדם שעונה
                לטלפון הוא גם האדם שמפקח על היציקה באתר.
              </p>

              <h2>רקע מקצועי</h2>
              <p>
                אופק הקים את התחדשות בינוי ויזמות מתוך הבנה שבעלי בתים
                בישראל צריכים גורם אחד שאחראי על כל הפרויקט. לא מתווך
                שמעביר לקבלן, לא קבלן שמעביר למהנדס, לא מהנדס שמעביר
                לפיקוד העורף. גורם אחד, חוזה אחד, אחריות ברורה.
              </p>
              <p>
                הניסיון של אופק מקיף בניית ממ״דים תקניים לפי תקן פיקוד
                העורף, מיגון חדרים קיימים, התקנת ממ״דים מוכנים (יביל),
                שיפוצים מקיפים, הרחבות ובנייה פרטית. הוא מכיר את המערכת
                הרגולטורית מקרוב: אישורי פיקוד העורף, ועדות מקומיות
                לתכנון ובנייה, מסלול פטור מהיתר, ורישוי מקוצר.
              </p>

              <h2>למה זה משנה ללקוחות</h2>
              <p>
                בניית ממ״ד או מיגון של בית הם פרויקטים שמשפיעים על הביטחון
                הפיזי של המשפחה ועל שווי הנכס. ההשקעה נעה בין 120,000
                ל-200,000 שקלים בתוספת מע״מ לממ״ד תקני, ובין 35,000
                ל-70,000 שקלים לשיפור מיגון. באסימון כזה, אנשים שואלים
                בצדק: מי האדם שעומד מאחורי החברה, ומה האחריות האישית שלו
                על העבודה.
              </p>
              <p>
                הליווי האישי של אופק מתבטא בכמה דברים מעשיים:
              </p>
              <ul>
                <li>
                  <strong>שיחה ראשונה מקצועית.</strong> כשאתם פונים, מנהל
                  פרויקט עונה ומלווה אתכם מהשיחה הראשונה. לא מוקד
                  טלמרקטינג ולא טופס באינטרנט שמחכה שבוע.
                </li>
                <li>
                  <strong>חוזה אחד, גורם אחד.</strong> החוזה איתנו,
                  האחריות עלינו. אין שרשרת קבלני משנה שמטשטשת את
                  האחריות.
                </li>
                <li>
                  <strong>נוכחות בשטח.</strong> ההנהלה נכנסת לפרויקטים,
                  לא רק חתימה בהתחלה ובסוף. ביקורת באתר בשלבים קריטיים:
                  יסודות, הרמת קירות, יציקת תקרה, התקנת דלת הדף.
                </li>
                <li>
                  <strong>פתרון בעיות ישיר.</strong> אם משהו לא בסדר,
                  פונים לאופק. לא מתקבל &quot;תשאלו את הקבלן&quot;.
                </li>
              </ul>

              <h2>הגישה: שקיפות, מקצועיות, אחריות</h2>
              <p>
                <strong>שקיפות.</strong> מחיר פריט פריט. כל מרכיב של
                הפרויקט מופיע בשורה נפרדת בהצעה: בטון, ברזל, דלת הדף,
                מערכת אוורור, עבודות גמר. אין &quot;חבילה כוללת&quot;
                שמסתירה איפה הולך הכסף. כל תוספת או שינוי מאושרים בכתב
                לפני שמבצעים אותם.
              </p>
              <p>
                <strong>מקצועיות.</strong> כל פרויקט עובד עם מהנדס
                קונסטרוקציה רשום ועם אדריכל כשצריך. הגשה לפיקוד העורף
                מבוצעת על ידי מהנדס מורשה במערכת רישוי פקע״ר. לא קיצורי
                דרך בחלקים שמשפיעים על הבטיחות של הממ״ד. כל ממ״ד עובר
                בדיקת אטימות לפני מסירה.
              </p>
              <p>
                <strong>אחריות.</strong> אחריות קבלן לפי חוק המכר
                (דירות): שנה על תקלות כלליות, שלוש שנים על מערכות, שבע
                שנים על קונסטרוקציה ויסודות. שירות שוטף גם אחרי תקופת
                האחריות הרשמית. החברה שבנתה היא גם זו שחוזרת.
              </p>

              <h2>סוגי פרויקטים שאנחנו מבצעים</h2>
              <p>
                התחדשות בינוי ויזמות מתמקדת בפרויקטי בנייה ומיגון לבתים
                פרטיים ולדירות. הנה הקטגוריות העיקריות:
              </p>
              <ul>
                <li>
                  <Link href="/services/building-mamad">בניית ממ״ד</Link>{" "}
                  תקני לפי תקן פיקוד העורף, צמוד או חיצוני, לבתים פרטיים
                  ולדירות. כולל תכנון הנדסי, הגשה לפקע״ר, ביצוע ומסירה.
                </li>
                <li>
                  <Link href="/services/room-reinforcement">מיגון חדר קיים</Link>{" "}
                  לבתים ודירות שבהם לא ניתן לבנות ממ״ד חדש. חיזוק קירות,
                  התקנת דלת הדף ומערכת סינון אוויר.
                </li>
                <li>
                  <Link href="/services/prefab-mamad">ממ״ד מוכן (יביל)</Link>{" "}
                  שנוצק במפעל ומותקן באתר. דורש אישור פיקוד העורף ייעודי
                  לכתובת ולדגם הספציפיים.
                </li>
                <li>
                  <Link href="/services/private-construction">בנייה פרטית</Link>{" "}
                  של בתים ווילות, מהמגרש ועד המפתח. כולל ממ״ד כחלק
                  אינטגרלי מתכנון הבית.
                </li>
                <li>
                  <Link href="/services/renovations">שיפוצים</Link>{" "}
                  מקיפים לדירות ולבתים: מטבחים, חדרי רחצה, רצפות, חשמל
                  ואינסטלציה.
                </li>
                <li>
                  <Link href="/services/extensions">הרחבות ותוספות בנייה</Link>{" "}
                  לבתים קיימים: חדרים, קומות, מרפסות, יחידות דיור.
                </li>
              </ul>

              <h2>אזור שירות</h2>
              <p>
                החברה פועלת בכל הארץ. ריכוז הפעילות העיקרי הוא באזור גוש
                דן, השרון והשפלה. פרויקטים באזורי קו עימות (דרום וצפון)
                מחייבים התייחסות לדרישות פיקוד העורף המחמירות יותר באזורים
                אלה, כולל עובי קירות גדול יותר ודלת הדף בתקן מוגבר.
              </p>

              <h2>ערכי החברה</h2>
              <p>
                <strong>דיוק מול לקוח.</strong> אנחנו לא מבטיחים מה
                שאנחנו לא יכולים לקיים. אם תהליך אישור פיקוד העורף לוקח
                14 עד 21 ימי עבודה, אנחנו לא אומרים &quot;שבוע&quot;.
                אם עלות יסודות על קרקע בעייתית תגדיל את המחיר ב-15%,
                אנחנו כותבים את זה בהצעה ולא מגלים את זה באמצע העבודה.
              </p>
              <p>
                <strong>אין קיצורי דרך.</strong> לא מוותרים על בדיקות
                אטימות. לא חוסכים על איכות הבטון. לא מדלגים על שלבי
                אישור. הממ״ד הוא מבנה שמטרתו להציל חיים, ואנחנו מתייחסים
                לזה בהתאם.
              </p>
              <p>
                <strong>תקשורת שוטפת.</strong> עדכון ללקוח בכל שלב מהותי
                בפרויקט. תמונות מהאתר, דוחות התקדמות, ותיעוד של כל
                החלטה שמתקבלת בשטח.
              </p>

              <h2>איך מתקשרים עם אופק</h2>
              <p>
                אפשר לפנות בכמה דרכים:
              </p>
              <ul>
                <li>
                  טלפון ישיר:{" "}
                  <a href={`tel:${site.phoneDial}`}>{site.phone}</a>.
                </li>
                <li>
                  וואטסאפ:{" "}
                  <a href={site.whatsappUrl} rel="noopener">
                    הודעה דרך וואטסאפ
                  </a>
                  .
                </li>
                <li>
                  טופס:{" "}
                  <Link href="/contact">צרו קשר</Link>. חוזרים תוך שעות
                  ספורות בשעות הפעילות.
                </li>
                <li>
                  אימייל:{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </li>
              </ul>
              <p>
                שעות פעילות: {site.hours}.
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-6">
                מידע זה אינו מהווה ייעוץ משפטי, פיננסי או הנדסי. מומלץ
                להתייעץ עם בעלי המקצוע הרלוונטיים לפני קבלת החלטות.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על אופק מזור והחברה"
        tone="soft"
      />

      <ContactCTA
        title="רוצים לדבר על פרויקט שלכם?"
        subtitle="השאירו פרטים. נחזור אליכם תוך שעות ספורות בשעות הפעילות, עם הצעה מותאמת לפרויקט שלכם."
      />
    </>
  );
}
