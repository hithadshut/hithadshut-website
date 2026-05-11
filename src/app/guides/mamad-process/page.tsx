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
  howToJsonLd,
  ofekPersonJsonLd,
  OFEK_PERSON_ID,
} from "@/lib/schema";

const DATE_PUBLISHED = "2026-04-15";
const DATE_MODIFIED = "2026-04-30";

// Approx word count for the main prose on this page (~7 steps + intro + 3 permit tracks + failures list + closing).
const WORD_COUNT = 620;

const TOC_ITEMS = [
  { id: "overview", label: "מבט על: 7 שלבי התהליך" },
  { id: "permit-tracks", label: "מסלולי רישוי: מה ההבדל" },
  { id: "failures", label: "איפה נכשלים פרויקטים" },
  { id: "our-approach", label: "איך אנחנו עושים את זה" },
];

const PATH = "/guides/mamad-process";
const TITLE = "תהליך בניית ממ״ד | שלב אחר שלב | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "תהליך בניית ממ״ד שלב אחר שלב: תכנון הנדסי, הגשה לפקע״ר ולוועדה, חפירה ויסודות, יציקת קונסטרוקציה, דלת ומערכות, מסירת מפתח. מסלולי רישוי, זמנים ומסמכים מלאים.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const steps = [
  { name: "ייעוץ ראשוני וסקר היתכנות", text: "בוחנים את הבית, את המקום הפיזי להקמת הממ\"ד, את התב\"ע ואת האפשרויות ההנדסיות. בשלב זה מחליטים האם בכלל ממ\"ד הוא הפתרון, או שעדיף מיגון חדר/מיגונית." },
  { name: "תכנון אדריכלי וקונסטרוקטיבי", text: "אדריכל מכין תכנית הממ\"ד בתוך הבית, קונסטרוקטור מחשב חיזוקים ויסודות, יועץ חשמל/מיזוג משלים את התכנון. זה השלב שבו הפרויקט הופך לממשי." },
  { name: "קביעת מסלול רישוי", text: "לפי גובה הבניין, מיקום ותב\"ע: פטור מהיתר (בתים עד 2 קומות), רישוי מקוצר, או רישוי רגיל. בכל מסלול, אישור פיקוד העורף הוא תנאי מוקדם." },
  { name: "הגשה ואישור פיקוד העורף", text: "הגשת בקשה אלקטרונית עם התכניות וההצהרות. פיקוד העורף משיב לרוב בתוך ~14 ימי עבודה: אישור, הערות או דחייה." },
  { name: "הגשה לוועדה המקומית", text: "אם נדרש, מגישים בקשה להיתר/רישוי מקוצר לוועדה המקומית עם הנספחים. במסלול פטור: רק הודעה בסיום הביצוע." },
  { name: "ביצוע", text: "פירוק/הכנות, יציקת יסוד, קירות ותקרה מבטון מזוין, התקנת דלת הדף, חלון, מערכת אוורור וסינון, גמר פנים, חשמל ומיזוג." },
  { name: "בדיקות ואישור גמר", text: "בדיקות אטימות, בדיקת בטון, בדיקת מערכת סינון. לאחר סיום העבודה, הודעה לרשות הרישוי ולפיקוד העורף (במסלול פטור: בתוך 45 ימים) וקבלת אישור סופי." },
];

const faqs = [
  {
    q: "כמה זמן כולל לוקח תהליך בניית ממ\"ד?",
    a: "במסלול פטור מהיתר, הזמן הכולל מסוף התכנון ועד מסירה הוא בדרך כלל 2-4 חודשים (14 ימי עבודה לאישור פקע\"ר + 6-10 שבועות ביצוע + בדיקות). במסלולים אחרים הזמן ארוך יותר, לעיתים 6-9 חודשים כולל תקופת היתר.",
  },
  {
    q: "מתי אפשר לבנות במסלול פטור מהיתר?",
    a: "בבתים עד 2 קומות, ובכפוף לתנאים שקבועים בתקנות התכנון והבנייה, במקרים רבים אפשר לבנות ממ\"ד במסלול פטור. המסלול מבוסס על אישור פיקוד העורף, הצהרת עורך הבקשה (אדריכל/מהנדס) והגשת הודעה בסיום. כל מקרה לגופו. יש לבדוק מראש.",
  },
  {
    q: "מה קורה אם פיקוד העורף דוחה את הבקשה?",
    a: "ברוב המקרים מדובר בהערות לתיקון, לא בדחייה מוחלטת. מתקנים את התכנית, מגישים מחדש ומקבלים אישור תוך ימי עבודה בודדים. דחייה אמיתית היא מקרה נדיר שמתרחש בעיקר בבקשות שהוגשו בלי תכנון קונסטרוקטיבי תקין או עם רכיבים לא מאושרי פקע\"ר.",
  },
  {
    q: "האם אפשר לגור בבית בזמן הבנייה?",
    a: "ברוב המקרים כן, בהינתן ניהול עבודה נכון (הגנה על שאר הבית, ניקיון, ניהול רעש). בשלבי הריסה/יציקה ייתכן צורך לצאת למספר ימים. זה נושא שחשוב לסכם עם הקבלן מראש.",
  },
  {
    q: "מי אחראי על מה?",
    a: "אדריכל: תכנון הכללי. קונסטרוקטור: חישוב סטטי וחיזוקים. עורך בקשה (לרוב האדריכל): ניהול מול פקע\"ר והוועדה. קבלן: ביצוע. מפקח (מומלץ): בקרת איכות באתר. אנחנו: ליווי הלקוח ותיאום כל הגורמים.",
  },
  {
    q: "מה קורה ברישוי מקוצר מול רישוי רגיל?",
    a: "רישוי מקוצר קל ומהיר יותר, מתאים למקרים פשוטים יותר. רישוי רגיל לוקח יותר זמן וכולל פרסומים והתנגדויות, לפרויקטים מורכבים או בתנאים מסוימים. פיקוד העורף תמיד מחויב, ההבדל הוא בפן הרישוי האזרחי.",
  },
  {
    q: "מתי מגישים הודעה בסיום העבודה?",
    a: "במסלול פטור מהיתר, עורך הבקשה מגיש לרשות הרישוי ולפיקוד העורף הודעה על סיום הביצוע, לרוב בתוך 45 ימים מתום העבודה, בצירוף מסמכים כנדרש. זה חשוב: בלי זה הממ\"ד לא 'סגור' פורמלית.",
  },
  {
    q: "מי משלם על מה?",
    a: "אתם משלמים על תכנון (אדריכל, קונסטרוקטור, יועצים), על אגרות והיטלים, ועל הביצוע. הליווי שלנו אינו עמלה מקבלן, יש הסדר ישיר איתכם.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="מדריך תהליך"
        title="איך בונים ממ״ד: תהליך שלב אחר שלב"
        subtitle="מסלולי רישוי, אישורי פיקוד העורף, לוחות זמנים ריאליים, ומה לעשות בכל שלב כדי שהפרויקט לא ייתקע."
        crumbs={[{ name: "מדריכים", href: "/madrichim" }, { name: "תהליך בניית ממ״ד", href: PATH }]}
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
          howToJsonLd({ name: "איך בונים ממ\"ד", description: DESCRIPTION, steps }),
          ofekPersonJsonLd(),
        ]}
      />

      <TldrBlock
        bullets={[
          <><strong>בניית ממ״ד בישראל היא תהליך של 7 שלבים:</strong> מייעוץ ראשוני וסקר היתכנות, דרך תכנון אדריכלי-קונסטרוקטיבי, קביעת מסלול רישוי, אישור פיקוד העורף והוועדה, ביצוע, בדיקות ואישור גמר.</>,
          <><strong>זמן כולל מקצה לקצה: 2-4 חודשים</strong> במסלול פטור מהיתר (תכנון ~2-4 שבועות + אישור פקע״ר עד 14 ימי עבודה + ביצוע 6-10 שבועות). במסלול רישוי רגיל: 6-9 חודשים.</>,
          <><strong>שלושה מסלולי רישוי:</strong> פטור מהיתר (רוב הבתים עד 2 קומות, על בסיס אישור פקע״ר והצהרת עורך בקשה), רישוי מקוצר (ועדה מקומית, מסמכים מצומצמים), או רישוי רגיל (היתר בנייה מלא עם פרסומים).</>,
          <><strong>מי מאשר מה:</strong> פיקוד העורף מאשר את תקן המיגון; הוועדה המקומית מאשרת תכנון ובנייה אזרחית; עורך הבקשה (אדריכל/מהנדס) מגיש הודעת סיום בתוך 45 ימים במסלול פטור.</>,
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
          eyebrow="נתונים מאומתים · תהליך 2026"
          title="המספרים החשובים"
          stats={[
            {
              value: "7 שלבים",
              label: "מהייעוץ ועד אישור גמר",
              note: "ייעוץ → תכנון → רישוי → פקע״ר → ועדה → ביצוע → גמר.",
              source: { label: "התחדשות בינוי ויזמות" },
            },
            {
              value: "2-4 חודשים",
              label: "זמן כולל במסלול פטור",
              note: "במסלול רישוי רגיל: 6-9 חודשים.",
              source: { label: "התחדשות בינוי ויזמות" },
            },
            {
              value: "עד 14 ימי עבודה",
              label: "אישור פקע״ר במסלול פטור",
              note: "הגשה אלקטרונית מסודרת.",
              source: { label: "פיקוד העורף", href: "https://www.oref-rishuy.org.il" },
            },
            {
              value: "6-10 שבועות",
              label: "ביצוע ממ״ד סטנדרטי",
              note: "9-12 מ״ר, מתחילת הקונסטרוקציה ועד גמר.",
              source: { label: "התחדשות בינוי ויזמות" },
            },
            {
              value: "45 ימים",
              label: "הודעת סיום ביצוע",
              note: "במסלול פטור: לרשות הרישוי ולפקע״ר.",
              source: { label: "מינהל התכנון", href: "https://www.iplan.gov.il" },
            },
            {
              value: "3 מסלולים",
              label: "פטור / מקוצר / רגיל",
              note: "פיקוד העורף נדרש בכולם.",
              source: { label: "מינהל התכנון", href: "https://www.iplan.gov.il" },
            },
          ]}
        />
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
          <Prose>
          <h2 id="overview">מבט על: 7 שלבי התהליך</h2>
          <ol>
            {steps.map((s, i) => (
              <li key={i}>
                <strong>{s.name}.</strong> {s.text}
              </li>
            ))}
          </ol>

          <h2 id="permit-tracks">מסלולי רישוי: מה ההבדל</h2>
          <h3>מסלול פטור מהיתר</h3>
          <p>
            מתאים לרוב הבתים הנמוכים (עד 2 קומות). מבוסס על אישור פיקוד העורף והצהרת עורך הבקשה.
            לא נדרש הליך ועדה רגיל. חובה להגיש הודעה בסיום העבודה (לרוב בתוך 45 ימים).
          </p>
          <h3>מסלול רישוי מקוצר</h3>
          <p>
            מסלול אמצע: פחות בירוקרטיה מהיתר רגיל, אבל עדיין דורש בקשה לוועדה. מתאים למקרים שלא
            נכנסים לפטור אך לא דורשים היתר מורכב.
          </p>
          <h3>מסלול רישוי רגיל (היתר בנייה)</h3>
          <p>
            הדרך המסורתית: בקשה לוועדה, פרסומים, מענה להתנגדויות, קבלת היתר. לוקח חודשים. בממ״ד
            בודד לרוב לא נדרש, אלא אם המבנה או התב״ע מחייבים זאת.
          </p>

          <h2 id="failures">איפה נכשלים פרויקטים</h2>
          <ul>
            <li>לא סוגרים תכנון לפני מחיר, ואז מגלים שהמחיר לא שלם.</li>
            <li>מגישים לפיקוד העורף בקשה חלקית, והיא חוזרת עם הערות ומתעכבת.</li>
            <li>מתחילים לבצע לפני אישור פקע״ר, ואז נדרשים לחזור אחורה.</li>
            <li>לא עוקבים אחרי אבני דרך, ונעצרים בלי לדעת למה.</li>
            <li>לא עושים בדיקות בזמן, ומקבלים ממ״ד שלא עובר.</li>
          </ul>

          <h2 id="our-approach">איך אנחנו עושים את זה</h2>
          <p>
            בהתחדשות אנחנו מבצעים את כל התהליך בעצמנו: תכנון, רישוי, בנייה, גמר ואישור פקע״ר.
            חברה אחת, חוזה אחד, מנהל פרויקט אחד שמלווה אתכם מהסיור הראשון ועד מסירת המפתח. קראו גם{" "}
            <Link href="/guides/choosing-mamad-contractor">איך בוחרים קבלן ממ״ד</Link>{" "}
            ו-<Link href="/guides/home-front-command-approval">אישורי פיקוד העורף</Link>.
          </p>
          <p>
            לעיון בתהליך הספציפי לפי סוג הבית: 8 השלבים המפורטים זמינים במדריך על{" "}
            <Link href="/memad/bayit-prati">ממ״ד לבית פרטי</Link>. להתקנות מורכבות יותר, ראו את המדריך על{" "}
            <Link href="/memad/koma-elyona">ממ״ד בקומה עליונה</Link>{" "}
            שמכסה את שיקולי החיזוק הקונסטרוקטיבי, משאבת הבטון, והלוגיסטיקה בגובה.
          </p>
          </Prose>

          <aside>
            <TableOfContents items={TOC_ITEMS} />
          </aside>
        </div>
      </Section>

      {/* Trust differentiators — three sharp angles for process. */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              מה שכל מי שעשה את זה היה רוצה לדעת מראש
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              שלוש נקודות שתופסות יותר פרויקטים מכל דבר אחר
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <article
              className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
              aria-labelledby="proc-warn-pre-approval"
            >
              <div className="text-2xl mb-2" aria-hidden>⚠️</div>
              <h3 id="proc-warn-pre-approval" className="font-extrabold text-red-900 text-lg mb-2">
                התחלת ביצוע לפני אישור פקע״ר
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                הטעות הכי יקרה בפרויקט ממ״ד: להתחיל לחפור או ליצוק לפני שהאישור של פיקוד
                העורף בידיים. אם פקע״ר חוזר עם הערות תכנוניות אחרי תחילת הביצוע, ייתכן
                שיידרש לפרק עבודה שכבר נעשתה. <strong>לעולם לא להתחיל ביצוע לפני אישור
                בכתב</strong>. האישור מגיע בדרך כלל תוך 14 ימי עבודה במסלול פטור.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
              aria-labelledby="proc-hidden-completion"
            >
              <div className="text-2xl mb-2" aria-hidden>💰</div>
              <h3 id="proc-hidden-completion" className="font-extrabold text-amber-900 text-lg mb-2">
                העלות שלא תמיד אומרים: הודעת סיום
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                במסלול פטור (סעיף 30ב׳), חובה להגיש <strong>הודעת סיום ביצוע</strong>{" "}
                לרשות הרישוי ולפיקוד העורף תוך 45 ימים מתום העבודה. ההגשה דורשת מסמכים
                שהקבלן והאדריכל מכינים. ממ״ד שלא הוגש בו דיווח סיום אינו &ldquo;סגור&rdquo;
                פורמלית, ולא יוכר במכירה עתידית של הנכס. ודאו שזה נכלל בחוזה.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
              aria-labelledby="proc-savings-30b"
            >
              <div className="text-2xl mb-2" aria-hidden>💡</div>
              <h3 id="proc-savings-30b" className="font-extrabold text-emerald-900 text-lg mb-2">
                החיסכון: סעיף 30ב׳ עד אוקטובר 2026
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                מסלול הפטור (תקנה 30ב׳, הוראת שעה) חוסך <strong>4-6 שבועות</strong> של
                בירוקרטיה ועלויות תכנון/אגרות של 15,000-25,000 ₪. בתוקף עד{" "}
                <strong>אוקטובר 2026</strong> לבתים צמודי קרקע ולבניינים עד 2 קומות.
                לפרטים מלאים ראו את{" "}
                <Link
                  href="/guides/mamad-permit-exemption-2026"
                  className="font-bold text-emerald-900 underline underline-offset-4"
                >
                  מדריך מסלול הפטור
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </Section>

      <FAQ items={faqs} />

      <RelatedArticles currentSlug="mamad-process" />

      <RelatedLinks
        seed="guides/mamad-process"
        targets={[
          "building-mamad",
          "room-reinforcement",
          "compare-main",
          "home-front-command-approval",
          "choosing-mamad-contractor",
        ]}
      />

      <ContactCTA />
    </>
  );
}
