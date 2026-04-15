import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/compare/mamad-vs-miggun-vs-migunit";
const TITLE = "ממ״ד מול מיגון חדר קיים מול מיגונית — מה מתאים לכם?";
const DESCRIPTION =
  "השוואה ברורה בין ממ\"ד, מיגון חדר קיים ומיגונית — עלות, זמן, רמת הגנה, אישורים, ולמי כל פתרון מתאים.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const rows: { label: string; mamad: string; reinforce: string; migunit: string }[] = [
  {
    label: "מה זה",
    mamad: "חדר חדש מבטון מזוין, לפי תקן פקע״ר",
    reinforce: "חיזוק של חדר קיים בבית",
    migunit: "יחידה ממוגנת חיצונית, לרוב טרומית",
  },
  {
    label: "רמת הגנה",
    mamad: "גבוהה — תקני לכל דבר",
    reinforce: "חלקית, משתנה לפי היקף החיזוק",
    migunit: "טובה אם מאושרת פקע״ר; נמוכה יותר אם לא",
  },
  {
    label: "אישור פיקוד העורף",
    mamad: "חובה ומתקבל",
    reinforce: "תלוי היקף — לא תמיד ניתן",
    migunit: "תלוי ביצרן — לבקש אישור פקע״ר בכתב",
  },
  {
    label: "שימוש יומיומי",
    mamad: "כן — חדר שינה/עבודה/ילדים",
    reinforce: "כן — החדר ממשיך לשמש ברגיל",
    migunit: "לרוב לא — יחידה חיצונית",
  },
  {
    label: "זמן ביצוע",
    mamad: "2–4 חודשים במסלול פטור",
    reinforce: "2–5 שבועות בהיקף מצומצם",
    migunit: "יום הצבה + שבועות הכנה ואישורים",
  },
  {
    label: "טווח מחירים",
    mamad: "~100,000–200,000 ₪",
    reinforce: "עשרות אלפים בודדים עד ~100 אלף",
    migunit: "~30,000–80,000 ₪",
  },
  {
    label: "היתר/רישוי",
    mamad: "בדרך כלל פטור מהיתר או רישוי מקוצר",
    reinforce: "לרוב לא דורש היתר",
    migunit: "תלוי בגודל ובתב״ע",
  },
  {
    label: "שינוי למבנה הקיים",
    mamad: "משמעותי — הרחבה/שינוי מבני",
    reinforce: "קטן עד בינוני",
    migunit: "אין — יחידה חיצונית",
  },
  {
    label: "מתאים במיוחד ל…",
    mamad: "בית עם מקום ואפשרות מבנית",
    reinforce: "בתים שאין אפשרות לממ״ד",
    migunit: "בתים עם חצר וללא ממ״ד אפשרי",
  },
];

const faqs = [
  {
    q: "איזה פתרון הכי טוב מבחינת הגנה?",
    a: "ממ\"ד תקני — ללא מחלוקת. זה הפתרון היחיד שמוגדר רשמית כ'מרחב מוגן דירתי' על ידי פיקוד העורף. מיגונית מאושרת פקע\"ר גם עומדת בתקן, אבל היא חיצונית (צריך לצאת אליה בחירום). מיגון חדר קיים — משתנה, לרוב ברמת הגנה נמוכה יותר.",
  },
  {
    q: "אם אני לא יכול לבנות ממ\"ד — מה עדיף, מיגון חדר או מיגונית?",
    a: "תלוי במצב הבית. אם יש חצר גדולה עם גישה טובה — מיגונית מאושרת פקע\"ר נותנת רמת הגנה טובה. אם אין מקום בחוץ או שאיש במשפחה מתקשה לצאת מהר — מיגון חדר קיים עדיף פרקטית, גם אם רמת ההגנה נמוכה יותר.",
  },
  {
    q: "מיגונית במקום ממ\"ד — זה כדאי?",
    a: "תלוי. הפער המרכזי: בממ\"ד נכנסים מהבית פנימה, במיגונית צריך לצאת החוצה. באזורי קו קדמי שבהם זמני ההתרעה קצרים, הממ\"ד משמעותית עדיף. גם מבחינת נוחות — ממ\"ד משמש חדר ביום-יום. המיגונית היא פתרון כשאי-אפשר ממ\"ד.",
  },
  {
    q: "מה ההמלצה הכנה שלכם?",
    a: "אם אפשר מבחינה מבנית ותקציבית — ממ\"ד הוא הפתרון הנכון. אם לא — לבחון אם מיגונית מאושרת פקע\"ר אפשרית במקום, ובמידה שגם זה לא — מיגון חדר קיים. בהחלטה הזו אנחנו ניגשים איתכם למקום ובודקים יחד את האפשרויות הריאליות.",
  },
  {
    q: "האם פתרון זמני עדיף על כלום?",
    a: "כן, תמיד. שיפור כלשהו במצב המיגון טוב יותר מאי-פעולה. אבל חשוב לא להציג פתרון חלקי כ'ממ\"ד' ולא לחייב עצמך בהשקעה גדולה בפתרון בינוני אם אפשר בינוני פלוס בתקציב דומה.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="השוואה"
        title="ממ״ד מול מיגון חדר קיים מול מיגונית"
        subtitle="בטבלה אחת: עלות, זמן, רמת הגנה, אישורים, ולמי כל פתרון באמת מתאים — בלי לכפוף את התשובה לשירות שלנו."
        crumbs={[{ name: "השוואה", href: PATH }]}
      />

      <Section>
        <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--color-soft)] text-[var(--color-primary)]">
              <tr>
                <th className="text-start p-4 font-bold">פרמטר</th>
                <th className="text-start p-4 font-bold">ממ״ד</th>
                <th className="text-start p-4 font-bold">מיגון חדר קיים</th>
                <th className="text-start p-4 font-bold">מיגונית</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[var(--color-soft)]">
                  <td className="p-4 font-bold text-[var(--color-ink)]">{r.label}</td>
                  <td className="p-4 text-[var(--color-muted)]">{r.mamad}</td>
                  <td className="p-4 text-[var(--color-muted)]">{r.reinforce}</td>
                  <td className="p-4 text-[var(--color-muted)]">{r.migunit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[var(--color-muted)]">
          המידע בטבלה כללי ומהווה הכוונה. כל מקרה נבחן פרטנית. מספרים מסומנים [טעון אימות מקצועי]
          בהתאם למשתנים האזוריים והרגולטוריים.
        </p>

        <div className="mt-10">
          <Prose>
            <h2>המלצה לפי מצב</h2>
            <ul>
              <li>
                <strong>יש מקום ותקציב לבנות ממ״ד חדש</strong> — זה הפתרון הכי חזק, והעתיד של הבית.
                קראו על <Link href="/services/building-mamad">בניית ממ״ד</Link>.
              </li>
              <li>
                <strong>אין אפשרות פיזית לממ״ד, יש חצר</strong> — מיגונית מאושרת פקע״ר.{" "}
                <Link href="/services/migunit">פרטים על מיגוניות</Link>.
              </li>
              <li>
                <strong>אין חצר, אין אפשרות ממ״ד, יש חדר לחיזוק</strong> — מיגון חדר קיים.{" "}
                <Link href="/services/room-reinforcement">פרטים</Link>.
              </li>
              <li>
                <strong>לא בטוחים</strong> — שיחת ייעוץ ראשונה ללא עלות תבהיר הרבה תוך 15–20 דקות.
              </li>
            </ul>
          </Prose>
        </div>
      </Section>

      <FAQ items={faqs} />
      <ContactCTA />
    </>
  );
}
