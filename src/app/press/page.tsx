import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import { ofekPersonJsonLd, ofekImageJsonLd, organizationJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const PATH = "/press";
const TITLE = "ערכת עיתונאים | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "ביו, תמונות, לוגו, ציטוטים מוכנים ונתוני שוק מאומתים — כל מה שעיתונאי צריך לכתוב על נישת ממ״ד והתחדשות עירונית בישראל.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const QUOTES = [
  {
    topic: "תמ״א 38 פוקעת במאי 2026",
    quote:
      "תמ״א 38 פוקעת במאי 2026 ברוב הארץ. דיירים בפרויקטים פעילים שכבר קיבלו היתר ממשיכים לפי התוכנית המקורית. דיירים עם הסכם בלבד ללא היתר נמצאים בסיכון אמיתי — שלוש האפשרויות שלהם הן למהר להוציא היתר, לעבור לחלופת שקד, או לבטל את ההסכם. בלי ייעוץ משפטי דחוף הם עלולים לגלות שהם תקועים.",
  },
  {
    topic: "1.6 מיליון דירות ללא ממ״ד",
    quote:
      "בישראל יש מעל 1.6 מיליון דירות ללא ממ״ד תקני, בעיקר בבניינים שנבנו לפני 1992. עם פוקעת תמ״א 38 ועם המעבר לחלופת שקד, נסגר חלון ההזדמנות לבנות ממ״ד במסלול פטור — לבעלי דירות שעוד לא פעלו, מסלול הפטור עד אוקטובר 2026 הוא הזדמנות אחרונה להימנע מ-15,000-25,000 ₪ בעלויות בירוקרטיה.",
  },
  {
    topic: "הטעות הכי יקרה בבניית ממ״ד",
    quote:
      "אנחנו רואים את זה כל חודש: לקוח חתם על הצעה ל״חמ״ד״ במחיר של ממ״ד תקני, וגילה אחרי הביצוע שהוא קיבל שיפור מיגון, לא ממ״ד. ״חמ״ד״ אינו סיווג רשמי. הצעה שלא מציינת את תקן 4422, מערכת סינון לפי תקן 4570, ומספר אישור פיקוד העורף — לרוב מסתירה את ההבדל בין השתיים. ההפרש 50,000-150,000 ש״ח.",
  },
  {
    topic: "פינוי בינוי ודיירים בני 70+",
    quote:
      "דיירים בני 70 ומעלה זכאים לחלופות מיוחדות בכל פרויקט פינוי בינוי, ובני 75 ומעלה זכאים לכל החלופות האפשריות. רוב הדיירים לא יודעים את זה, ויזמים לא תמיד מציינים את זה בהסכם הראשוני. כשהדייר מסרב לחתום מסיבה שקשורה לזכויות גיל — הסירוב נחשב סביר באופן כמעט אוטומטי בבית המשפט.",
  },
  {
    topic: "ממ״ד יביל מול ממ״ד יצוק",
    quote:
      "ההצעות המסחריות לממ״ד יביל ב-80,000 ש״ח כולל הכל הן כמעט תמיד מטעות. המחיר הזה לא כולל הובלה (10,000-30,000 ש״ח), הנפה (3,000-15,000 ש״ח), הכנת בסיס בטון (8,000-20,000 ש״ח), ולפעמים גם לא את אישור פיקוד העורף לכתובת. במחיר אמיתי ממ״ד יביל מתחיל ב-130,000 ש״ח כולל הכל.",
  },
  {
    topic: "פערי שווי דירה עם וללא ממ״ד",
    quote:
      "דירה עם ממ״ד תקני נמכרת בפער של 8.2-21% מעל דירה ללא ממ״ד באותו אזור. הפער משתנה לפי עיר ולפי קרבה לאזורי קו קדמי. במזרח השפלה ובתל אביב הפער הקטן יותר; באזורי גבול הפער הגדול יותר. לכן ממ״ד הוא לא רק עניין של ביטחון — הוא עניין של ערך נכס לטווח ארוך.",
  },
  {
    topic: "מסלול פטור מהיתר עד אוקטובר 2026",
    quote:
      "סעיף 30ב׳ הוא הוראת שעה שמאפשרת לבעלי בתים צמודי קרקע ולבניינים עד 2 קומות לבנות ממ״ד בלי לעבור הליך היתר רגיל. החיסכון: 4-6 שבועות בירוקרטיה ועלויות תכנון של 15,000-25,000 ש״ח. ההוראה בתוקף עד אוקטובר 2026. אחרי הפקיעה לא ידוע אם תחזור — לכן מי שמתכנן לבנות, הזמן לפעול הוא עכשיו.",
  },
];

const STATS = [
  {
    label: "דירות בישראל ללא ממ״ד תקני",
    value: "1.6M",
    source: "בנק ישראל, 2024",
  },
  {
    label: "פער מחירים בין דירה עם וללא ממ״ד",
    value: "8.2-21%",
    source: "מקור משוערך לפי דוחות שמאות באזורי מרכז וגבול",
  },
  {
    label: "תוקף מסלול הפטור (סעיף 30ב׳)",
    value: "עד אוקטובר 2026",
    source: "הוראת שעה, משרד הפנים",
  },
  {
    label: "פוקעת תמ״א 38",
    value: "מאי 2026",
    source: "החלטת המועצה הארצית לתכנון ובנייה",
  },
  {
    label: "רף הסכמה לתביעת דייר סרבן בפינוי בינוי",
    value: "67%",
    source: "תיקון לחוק פינוי ובינוי (פיצויים)",
  },
  {
    label: "רף הסכמה לחלופת שקד",
    value: "80%",
    source: "תיקון 139 לחוק התכנון והבנייה",
  },
  {
    label: "זמן אישור פיקוד העורף לממ״ד במסלול פטור",
    value: "עד 14 ימי עבודה",
    source: "פיקוד העורף — מערכת רישוי",
  },
  {
    label: "ממ״ד תקני בבית פרטי, טווח מחיר",
    value: "160,000-220,000 ש״ח + מע״מ",
    source: "Hithadshut field data, 2026",
  },
];

const ASSET_FILES = [
  { label: "לוגו אופקי (PNG, רקע שקוף)", href: "/logo-header.png", note: "לכותרת באתר ובמייל" },
  { label: "לוגו אופקי @2x (PNG)", href: "/logo-header@2x.png", note: "לרשתיני / הדפסה" },
  { label: "לוגו אנכי (PNG, 876×918)", href: "/logo-full-vertical.png", note: "ל-Knowledge Panel ולמצגות" },
  { label: "לוגו רק אייקון (PNG)", href: "/logo-icon-only.png", note: "ל-avatar ולסושיאל" },
  { label: "לוגו אופקי במקור (1314×380)", href: "/logo-horizontal.png", note: "לעריכה גרפית" },
  { label: "אייקון 512×512", href: "/icon-512.png", note: "ל-PWA / icons" },
  { label: "תמונת אופק מזור", href: "/ofek-mazor.jpg", note: "לפרסום ולציטוטים" },
];

export default function Page() {
  return (
    <>
      <SchemaBreadcrumb items={[{ name: "ערכת עיתונאים", url: PATH }]} />
      <JsonLd
        data={[
          organizationJsonLd(),
          ofekPersonJsonLd(),
          ofekImageJsonLd(),
        ]}
      />

      <PageHero
        eyebrow="Press Kit"
        title="ערכת עיתונאים — התחדשות בינוי ויזמות"
        subtitle="ביו, תמונות, לוגו, ציטוטים מוכנים ונתוני שוק מאומתים. כל מה שעיתונאי צריך לכתבה על נישת ממ״ד והתחדשות עירונית בישראל."
        crumbs={[{ name: "ערכת עיתונאים", href: PATH }]}
      />

      {/* Quick contact */}
      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-5">
              יצירת קשר ישיר
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={`tel:${site.phoneDial}`}
                className="card-premium p-5 hover:shadow-lg transition"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">טלפון</div>
                <div className="font-bold text-[var(--color-primary)]">{site.phone}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">זמין עד 19:00, ימים א׳-ה׳</div>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="card-premium p-5 hover:shadow-lg transition"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">אימייל</div>
                <div className="font-bold text-[var(--color-primary)] break-all">{site.email}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">תגובה תוך 4 שעות בשעות העבודה</div>
              </a>
              <a
                href={`https://wa.me/${site.phoneE164.replace("+", "")}?text=${encodeURIComponent("שלום, אני עיתונאי/ת. אשמח לתאם ראיון.")}`}
                target="_blank"
                rel="noopener"
                className="card-premium p-5 hover:shadow-lg transition"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">WhatsApp</div>
                <div className="font-bold text-[var(--color-primary)]">{site.phone}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">לתיאום ראיון מהיר</div>
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Bio */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-[200px_minmax(0,1fr)] gap-8 items-start">
              <figure className="rounded-2xl overflow-hidden ring-1 ring-[var(--color-accent)]/30 bg-white">
                <Image
                  src="/ofek-mazor.jpg"
                  alt="אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות"
                  width={400}
                  height={500}
                  sizes="200px"
                  className="w-full h-auto"
                />
              </figure>
              <div>
                <div className="h-1 w-16 gold-line mb-5" />
                <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-2">
                  אופק מזור
                </h2>
                <div className="text-sm text-[var(--color-muted)] mb-5 font-medium">
                  מנכ״ל ומייסד · מתווך מקרקעין מוסמך, רישיון 3246290
                </div>
                <Prose>
                  <p>
                    <strong>ביו קצר (40 מילים):</strong> אופק מזור הוא מנכ״ל ומייסד
                    התחדשות בינוי ויזמות, חברת בנייה לממ״דים ומלווה דיירים בהתחדשות
                    עירונית. מתווך מקרקעין מוסמך (רישיון 3246290), מומחה לבניית
                    ממ״ד תקני, פינוי בינוי וחלופת שקד.
                  </p>
                  <p>
                    <strong>ביו ארוך (120 מילים):</strong> אופק מזור הוא מנכ״ל ומייסד
                    חברת התחדשות בינוי ויזמות, חברת בנייה ישראלית שמתמחה בבניית
                    ממ״דים תקניים, מיגון פרטי, בנייה פרטית ושיפוצים, ומלווה דיירים
                    בהתחדשות עירונית — פינוי בינוי, חלופת שקד ותמ״א 38. בעל רישיון
                    תיווך מקרקעין מוסמך (3246290) שהוצא על ידי משרד המשפטים. אופק
                    מנהל אישית כל פרויקט מהשיחה הראשונה ועד מסירת המפתחות, וזמין
                    לעיתונאים לתת זווית מקצועית, נתון מאומת, או דוגמה מהשטח על כל
                    נושא בנישה: מחיר ממ״ד 2026, מסלול פטור מהיתר, זכויות דיירים
                    קשישים בפינוי בינוי, פוקעת תמ״א 38, וההבדל בין הפתרונות שפיקוד
                    העורף מאשר לבית פרטי במרכז הארץ.
                  </p>
                </Prose>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Quotes */}
      <Section tone="white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                ציטוטים מוכנים
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                7 ציטוטים על הנושאים העיקריים בנישה. ניתן להשתמש כפי שהם או לקצר —
                המידע בכולם מאומת. המקור: אופק מזור, מנכ״ל התחדשות בינוי ויזמות.
              </p>
            </div>
          </Reveal>
          <div className="space-y-5">
            {QUOTES.map((q, i) => (
              <Reveal key={i}>
                <article className="card-premium p-6 md:p-7">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-3">
                    {q.topic}
                  </div>
                  <blockquote className="text-[var(--color-ink)] leading-8 italic border-r-4 border-[var(--color-accent)] pr-4">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <div className="mt-3 text-sm text-[var(--color-muted)]">
                    — אופק מזור, מנכ״ל התחדשות בינוי ויזמות
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Verified stats */}
      <Section tone="soft">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                נתונים מאומתים
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                שמונה נתונים שניתן לצטט ישירות בכתבה. כל נתון עם מקור — אם תרצו את
                המסמך המלא או את ההקשר המלא, צרו קשר.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={i}>
                <div className="card-premium p-5">
                  <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">
                    {s.value}
                  </div>
                  <div className="font-bold text-[var(--color-ink)] mb-1">{s.label}</div>
                  <div className="text-xs text-[var(--color-muted)]">מקור: {s.source}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Asset downloads */}
      <Section tone="white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                לוגו ותמונות להורדה
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                כל הקבצים מאושרים לשימוש מערכתי בהקשר של כתבה על החברה או על
                נישת ממ״ד והתחדשות עירונית. ייחוס: התחדשות בינוי ויזמות.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-3">
            {ASSET_FILES.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  download
                  className="card-premium p-4 flex items-start gap-3 hover:shadow-lg transition"
                >
                  <span aria-hidden className="text-2xl">⬇️</span>
                  <span className="flex-1">
                    <span className="block font-bold text-[var(--color-primary)]">{a.label}</span>
                    <span className="block text-sm text-[var(--color-muted)]">{a.note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            לקבצי מקור (PSD / SVG / Vector) צרו קשר ישיר.
          </p>
        </div>
      </Section>

      {/* Topics Ofek covers */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                נושאים שאופק יכול לדבר עליהם
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-[var(--color-ink)]">
              <li>✓ מחיר ממ״ד 2026 — מה כולל המחיר ומה לא</li>
              <li>✓ ההבדל בין ממ״ד תקני לשיפור מיגון</li>
              <li>✓ מסלול פטור מהיתר (סעיף 30ב׳)</li>
              <li>✓ אישורי פיקוד העורף — תהליך והתנהלות</li>
              <li>✓ תקני 4422, 4570, 4577 — מה דורש כל אחד</li>
              <li>✓ בחירת קבלן ממ״ד — דגלים אדומים וירוקים</li>
              <li>✓ ממ״ד יביל — מתי כן ומתי לא</li>
            </ul>
            <ul className="space-y-2 text-[var(--color-ink)]">
              <li>✓ פוקעת תמ״א 38 במאי 2026 — מה דייר עושה</li>
              <li>✓ חלופת שקד מול תמ״א 38</li>
              <li>✓ פינוי בינוי — חוק 67% וההשלכות</li>
              <li>✓ זכויות קשישים בפינוי בינוי (גיל 70+ ו-75+)</li>
              <li>✓ ירושה ומיסוי בפינוי בינוי</li>
              <li>✓ ערבויות בנקאיות וערבויות חוק מכר</li>
              <li>✓ דייר סרבן — תהליך משפטי והגנות</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/about/ofek-mazor"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              קראו עוד על אופק מזור ←
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
