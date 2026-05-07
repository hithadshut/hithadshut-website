import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import TldrBlock from "@/components/TldrBlock";
import RelatedLinks from "@/components/RelatedLinks";
import ReadingTimeBadge from "@/components/ReadingTimeBadge";
import Byline from "@/components/Byline";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import KeyStats from "@/components/KeyStats";
import { buildMetadata } from "@/lib/metadata";
import {
  articleJsonLd,
  ofekPersonJsonLd,
  OFEK_PERSON_ID,
} from "@/lib/schema";

const DATE_PUBLISHED = "2026-04-15";
const DATE_MODIFIED = "2026-04-30";

// Word count estimated from prose + checklist + red-flags sections.
const WORD_COUNT = 540;

const TOC_ITEMS = [
  { id: "why-different", label: "למה בחירת קבלן ממ״ד שונה" },
  { id: "checklist", label: "רשימת בדיקה לפני חתימה" },
  { id: "our-approach", label: "איך אנחנו עוזרים" },
];

const PATH = "/guides/choosing-mamad-contractor";
const TITLE = "איך בוחרים קבלן ממ״ד? 10 שאלות שחובה לשאול | התחדשות";
const DESCRIPTION =
  "איך בוחרים קבלן ממ״ד שלא יבריח אתכם: 10 שאלות חובה, 8 דגלים אדומים, בדיקת סיווג ברשם הקבלנים, חוזה בכתב, אחריות בנייה. מדריך מעשי להימנע מחאפרים.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "איזה סיווג קבלני נדרש לבניית ממ\"ד?",
    a: "ממ\"ד הוא עבודת בנייה מיוחדת. הקבלן צריך להיות רשום בפנקס הקבלנים עם סיווג מתאים לגודל ולסוג העבודה. לבית פרטי לרוב סיווג 100 (בנייה) קטן מספיק, אך יש לבדוק בהתאם להיקף הכספי של הפרויקט.",
  },
  {
    q: "מה חשוב יותר, מחיר או ניסיון ספציפי בממ\"דים?",
    a: "ניסיון ספציפי בממ\"דים חשוב יותר. ממ\"ד דורש ידע בבטונים מזוינים, דלתות הדף, מערכות סינון, ועבודה מול פקע\"ר. קבלן טוב אבל ללא ניסיון בממ\"דים עלול לעשות טעויות יקרות. מחיר נמוך מקבלן לא מנוסה לרוב מתגלה בסוף כיקר יותר.",
  },
  {
    q: "מה צריך לכלול חוזה עם קבלן ממ\"ד?",
    a: "תיאור עבודות מפורט, מפרט טכני מלא, תכניות כנספחים, לוחות זמנים, אבני דרך לתשלום קשורות לביצוע, תוספות בכתב בלבד, אחריות (סוג והיקף), ביטוח קבלן ועבודות, סנקציות על איחור, תנאי הפסקת חוזה. חוזה באורך עמוד הוא סימן אדום.",
  },
  {
    q: "מה המחיר הסביר למקדמה?",
    a: "מקדמה מקובלת היא 5-15% מהסכום הכולל. כל מקדמה מעל 20% לפני תחילת עבודה בפועל היא סימן שאלה גדול. התשלומים צריכים להיות קשורים לשלבי ביצוע אמיתיים, לא 'לפי לוח זמנים'.",
  },
  {
    q: "האם הקבלן חייב להחזיק ביטוח?",
    a: "כן, חובה. ביטוח עבודות קבלניות, ביטוח צד ג' וחבות מעבידים (אם יש עובדים). ללא ביטוח, אם יקרה משהו באתר, זו אחריות שלכם. לבקש העתק תעודה לפני תחילת עבודה.",
  },
  {
    q: "איזו אחריות צריך לדרוש?",
    a: "באחריות קבלנים, יש חלוקה בין אחריות שנה (אחריות מלאה לכל תקלה שאינה בלאי סביר), אחריות שלוש שנים (מערכות, אטימות), ואחריות שבע שנים על אלמנטים קונסטרוקטיביים. לבדוק שהתקופות מוגדרות בחוזה, לא להסתפק ב'אחריות מלאה'.",
  },
  {
    q: "מה הדגלים האדומים המובהקים?",
    a: "הצעה זולה משמעותית מהשאר, דרישה למקדמה גבוהה, סירוב למפרט מפורט, חוזה קצר ו'חברותי', אין ניסיון מוכח בממ\"דים, אין המלצות אמיתיות שאפשר ליצור קשר, דחיית בדיקה של רישיון וביטוח, לחץ לחתום 'היום'.",
  },
  {
    q: "איך אני מוודא שההמלצות שלו אמיתיות?",
    a: "מתקשרים ללקוחות קודמים (לא רק מסתכלים על הביקורות בגוגל) ושואלים שאלות ספציפיות: האם הפרויקט נגמר בזמן? בתקציב? היו תוספות לא צפויות? איך היה השירות? האם חזרתם לשירות אחרי סיום? ביקור בפרויקט מושלם, אם אפשר, שווה זהב.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="מדריך בחירת קבלן"
        title="איך בוחרים קבלן ממ״ד: רשימת בדיקה מלאה"
        subtitle="השאלות הנכונות לשאול, המסמכים שחייבים לראות, והסימנים שאומרים 'רוץ לכיוון השני'."
        crumbs={[{ name: "מדריכים", href: "/#guides" }, { name: "בחירת קבלן ממ״ד", href: PATH }]}
      />

      <JsonLd
        data={[
          articleJsonLd({
            headline: TITLE,
            description: DESCRIPTION,
            url: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_MODIFIED,
            authorPersonId: OFEK_PERSON_ID,
          }),
          ofekPersonJsonLd(),
        ]}
      />

      <TldrBlock
        bullets={[
          <><strong>שלוש בדיקות שאי אפשר לוותר עליהן:</strong> רישום בפנקס הקבלנים עם סיווג תואם להיקף הפרויקט, ביטוח עבודות קבלניות וצד ג׳ בתוקף, וחוזה מפורט בכתב הכולל מפרט טכני, אבני דרך לתשלום ואחריות.</>,
          <><strong>שלושה דגלים אדומים מרכזיים:</strong> מחיר נמוך משמעותית מהשוק (לרוב חסר רכיב), דרישה למקדמה מעל 20-25% לפני תחילת עבודה, ולחץ לחתום &quot;היום&quot; או לפני &quot;עליית מחיר&quot;.</>,
          <><strong>קבלן רשום מול חאפר, ההבדל המעשי:</strong> קבלן רשום עובד מול חוק, מבוטח, חייב באחריות שנה/3/7 לפי חוק המכר, ומנפיק חשבוניות מס. חאפר פועל ללא רישום, ללא ביטוח, ללא אחריות משפטית. נזק באתר = כיס פרטי שלכם.</>,
          <><strong>ניסיון ספציפי בממ״דים חשוב יותר ממחיר.</strong> ממ״ד דורש ידע בבטון מזוין, דלתות הדף, מערכות סינון מאושרות פקע״ר וחישוב סטטי ייעודי. קבלן שיפוצים כללי אינו בהכרח מתאים.</>,
        ]}
      />

      <Section tone="white">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Byline author="ofek-mazor" dateModified={DATE_MODIFIED} />
          <ReadingTimeBadge words={WORD_COUNT} />
        </div>
      </Section>

      <Section tone="white">
        <KeyStats
          eyebrow="נתונים מאומתים"
          title="לפני שחותמים: המספרים החשובים"
          stats={[
            {
              value: "5-15%",
              label: "מקדמה סבירה",
              note: "מעל 20-25% לפני תחילת עבודה. סימן אזהרה.",
              source: { label: "התחדשות בינוי ויזמות" },
            },
            {
              value: "1 / 3 / 7 שנים",
              label: "אחריות קבלן לפי חוק המכר",
              note: "תקלות / מערכות / קונסטרוקציה.",
              source: {
                label: "כל זכות: חוק המכר",
                href: "https://www.kolzchut.org.il",
              },
            },
            {
              value: "פנקס הקבלנים",
              label: "רישום חובה",
              note: "סיווג תואם להיקף הפרויקט.",
              source: {
                label: "רשם הקבלנים",
                href: "https://www.gov.il/he/departments/units/contractors_registrar",
              },
            },
            {
              value: "ביטוח חובה",
              label: "עבודות קבלניות + צד ג׳",
              note: "תעודה בתוקף לפני תחילת ביצוע.",
              source: { label: "התחדשות בינוי ויזמות" },
            },
            {
              value: "3 הצעות",
              label: "מינימום להשוואה",
              note: "אותו מפרט טכני בכל אחת.",
              source: { label: "התחדשות בינוי ויזמות" },
            },
            {
              value: "אישור פקע״ר",
              label: "לכל רכיב מיגון",
              note: "דלת, חלון, מערכת סינון: מספר אישור בכתב.",
              source: { label: "פיקוד העורף", href: "https://www.oref.org.il" },
            },
          ]}
        />
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
          <Prose>
          <h2 id="why-different">למה בחירת קבלן ממ״ד היא לא כמו שיפוצים רגילים</h2>
          <p>
            ממ״ד הוא פרויקט עם דרישות תקן, מסמכים, אישורים, וחישובים הנדסיים.
            קבלן שיפוצים טוב בחדר רגיל לא בהכרח קבלן מתאים לממ״ד. אתם מחפשים מישהו
            שעשה ממ״דים, עדיף באזור שלכם, ויודע להתנהל מול פיקוד העורף.
          </p>

          <h2 id="checklist">רשימת בדיקה לפני חתימה</h2>
          <h3>מסמכים שחייבים לראות</h3>
          <ul>
            <li>תעודת רישום קבלן בפנקס הקבלנים, עם סיווג תואם להיקף העבודה.</li>
            <li>תעודת ביטוח עבודות קבלניות וצד ג׳ בתוקף.</li>
            <li>ת.ז./עוסק/ח.פ. של החברה והקשר הרשמי שלה.</li>
            <li>המלצות עם פרטי קשר, לא רק שם.</li>
            <li>תיק עבודות (תמונות מפרויקטים דומים).</li>
          </ul>

          <h3>שאלות חובה</h3>
          <ol>
            <li>כמה ממ״דים בניתם בשנתיים האחרונות?</li>
            <li>מי הקונסטרוקטור שלכם? אפשר לדבר איתו?</li>
            <li>באילו דלתות ומערכות סינון אתם עובדים?</li>
            <li>מה המדיניות על תוספות באמצע פרויקט?</li>
            <li>מי הצוות שלכם? מישהו קבוע או קבלני משנה?</li>
            <li>מה לוח הזמנים הריאלי (לא &quot;מיידי&quot;)?</li>
            <li>מה לא כלול במחיר?</li>
          </ol>

          <h3>דגלים אדומים</h3>
          <ul>
            <li>מחיר זול משמעותית מהאחרים. כמעט תמיד פירושו חוסר משהו.</li>
            <li>לחץ לחתום &quot;היום&quot; או &quot;לפני שהמחיר עולה&quot;.</li>
            <li>סירוב לתת מפרט מפורט או חוזה ארוך.</li>
            <li>מקדמה מעל 20-25%.</li>
            <li>אין המלצות שאפשר להתקשר אליהן.</li>
            <li>&quot;אנחנו עושים הכל, לא צריך מפקח&quot;: אדום בוהק.</li>
          </ul>

          <h2 id="our-approach">איך אנחנו עוזרים</h2>
          <p>
            אנחנו מחזיקים רשימה של קבלנים שעבדו איתנו בעבר, קבלנים שאנחנו יודעים שהם
            מגיעים בזמן, מתחייבים למחיר, ומטפלים נכון אחרי המסירה. אנחנו לא מחויבים
            לאף אחד מהם. ההמלצה שלנו מותנית במה שנכון לפרויקט הספציפי שלכם. לחוסר
            תלות זו יש משמעות: אם צריך להגיד לא למישהו, אנחנו אומרים לא.
          </p>
          <p>
            מדריכים נוספים שכדאי לקרוא:{" "}
            <Link href="/guides/mamad-mistakes">טעויות נפוצות בבניית ממ״ד</Link>,{" "}
            <Link href="/guides/mamad-cost">כמה עולה ממ״ד</Link>.
          </p>
          <p>
            השוואה מפורטת:{" "}
            <Link href="/compare/katlan-rashum-vs-hafer">
              קבלן רשום מול חאפר: איך לזהות את ההבדל
            </Link>{" "}
            (כולל 8 סימני אזהרה שחובה להכיר).
          </p>
          </Prose>

          <aside>
            <TableOfContents items={TOC_ITEMS} />
          </aside>
        </div>
      </Section>

      {/* Trust differentiators — three sharp angles for choosing a contractor. */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              סימני אזהרה ועלויות נסתרות
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              שלוש נקודות שמפרידות בין קבלן רשום לחאפר
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <article
              className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
              aria-labelledby="contractor-warn-cash"
            >
              <div className="text-2xl mb-2" aria-hidden>⚠️</div>
              <h3 id="contractor-warn-cash" className="font-extrabold text-red-900 text-lg mb-2">
                דרישת מזומן או היעדר חשבונית
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                קבלן רשום חייב לפי חוק להוציא <strong>חשבונית מס עם מע״מ</strong>. דרישה
                לתשלום במזומן או הימנעות מחשבונית = סימן מובהק לעבודה מחוץ למסלול החוק.
                גם &ldquo;קבלה&rdquo; ללא מע״מ אינה חשבונית מס ואינה מגינה עליכם משפטית.
                תמיד לדרוש את מספר רישום הקבלן ולאמת ב-{" "}
                <a
                  href="https://www.gov.il/he/departments/topics/registered_contractors"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-red-900 underline underline-offset-4"
                >
                  רשם הקבלנים
                </a>
                .
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
              aria-labelledby="contractor-hidden-insurance"
            >
              <div className="text-2xl mb-2" aria-hidden>💰</div>
              <h3 id="contractor-hidden-insurance" className="font-extrabold text-amber-900 text-lg mb-2">
                ביטוח עבודות = הגנה שלכם
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                ביטוח עבודות קבלניות חייב לכלול: <strong>עבודות, צד ג׳ (≥2 מיליון ₪),
                חבות מעבידים</strong>. אם עובד נפצע באתר ללא ביטוח, האחריות הכלכלית
                והמשפטית עוברת אליכם. דרשו תעודת ביטוח בתוקף לפני התחלת עבודה.{" "}
                &ldquo;הביטוח יסודר אחר-כך&rdquo; משמעו לא מתחילים פרויקט.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
              aria-labelledby="contractor-savings-contract"
            >
              <div className="text-2xl mb-2" aria-hidden>✓</div>
              <h3 id="contractor-savings-contract" className="font-extrabold text-emerald-900 text-lg mb-2">
                חוזה של 20+ עמודים, לא של חצי
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                חוזה קבלנות תקין כולל: <strong>מפרט טכני מפורט, תכניות אדריכלות
                וקונסטרוקציה, אבני דרך, ערבויות, לוחות זמנים, סנקציות על איחורים,
                מנגנון יישוב מחלוקות</strong>. חוזה קצר מ-20 עמודים = דגל אדום. לעומק
                ראו את ההשוואה{" "}
                <Link
                  href="/compare/katlan-rashum-vs-hafer"
                  className="font-bold text-emerald-900 underline underline-offset-4"
                >
                  קבלן רשום מול חאפר
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </Section>

      <FAQ items={faqs} />

      <RelatedArticles currentSlug="choosing-mamad-contractor" />

      <RelatedLinks
        seed="guides/choosing-mamad-contractor"
        targets={[
          "building-mamad",
          "room-reinforcement",
          "compare-rashum-hafer",
          "mamad-mistakes",
          "mamad-cost",
        ]}
      />

      <ContactCTA />
    </>
  );
}
