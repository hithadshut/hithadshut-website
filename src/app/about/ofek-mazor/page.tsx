import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  ofekPersonJsonLd,
  organizationJsonLd,
  breadcrumbJsonLd,
} from "@/lib/schema";
import { site } from "@/lib/site";

const PATH = "/about/ofek-mazor";
const TITLE = "אופק מזור — מנכ״ל התחדשות בינוי ויזמות | אודות";
const DESCRIPTION =
  "אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות. מתווך מקרקעין מורשה (#3246290). מוביל את החברה בבניית ממ״דים, מיגון, בנייה פרטית, שיפוצים והרחבות בכל הארץ.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="הנהגה"
        title="אופק מזור — מנכ״ל ומייסד"
        subtitle="מוביל את התחדשות בינוי ויזמות. מתווך מקרקעין מורשה (#3246290). אחראי על כל פרויקט מהשיחה הראשונה ועד מסירת המפתח."
        crumbs={[
          { name: "אודות", href: "/about" },
          { name: "אופק מזור", href: PATH },
        ]}
      />

      <JsonLd
        data={[
          organizationJsonLd(),
          ofekPersonJsonLd(),
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
                  רישיון
                </div>
                <div className="font-bold text-[var(--color-primary)]">
                  מתווך מקרקעין מורשה
                </div>
                <div className="text-[var(--color-muted)]">
                  רשם המתווכים, משרד המשפטים — רישיון{" "}
                  <span className="font-bold text-[var(--color-ink)]">#3246290</span>
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
                אופק מזור הוא המנכ״ל והמייסד של חברת התחדשות בינוי ויזמות. הוא מוביל
                את הפעילות העסקית והמקצועית של החברה: מהפנייה הראשונה של לקוח, דרך
                תכנון, רישוי, ביצוע ומסירה, ועד תיק הפרויקט הסופי. אופק זמין לכל
                לקוח של החברה, ולא מעביר את התקשורת לקבלן משנה או לאיש מכירות.
              </p>

              <h2>למה זה משנה ללקוחות שלנו</h2>
              <p>
                בניית ממ״ד או מיגון של בית הם פרויקטים שמשפיעים על הביטחון הפיזי של
                המשפחה ועל שווי הנכס. בקטגוריה הזאת, אנשים שואלים בצדק: מי האדם
                שעומד מאחורי החברה, ומה האחריות האישית שלו על העבודה. בהתחדשות
                התשובה קצרה: אופק מזור.
              </p>
              <p>
                הליווי האישי של אופק מתבטא בכמה דברים מעשיים:
              </p>
              <ul>
                <li>
                  <strong>שיחה ראשונה אישית.</strong> כשאתם פונים, אופק עצמו או
                  מנהל פרויקט בכיר עונה — לא מוקד טלמרקטינג.
                </li>
                <li>
                  <strong>חוזה אחד, גורם אחד.</strong> החוזה איתנו, האחריות עלינו.
                  אין שרשרת של קבלני משנה שמתחמקים זה מזה.
                </li>
                <li>
                  <strong>נוכחות בשטח.</strong> אופק נכנס לפרויקטים. לא רק חתימה
                  בהתחלה ובסוף.
                </li>
                <li>
                  <strong>פתרון בעיות באופן ישיר.</strong> אם משהו לא בסדר —
                  פונים לאופק. לא מתקבל ״תשאלו את הקבלן״.
                </li>
              </ul>

              <h2>הרישיון: מתווך מקרקעין מורשה</h2>
              <p>
                אופק מזור הוא מתווך מקרקעין מורשה במדינת ישראל,{" "}
                <strong>רישיון מספר 3246290</strong>, שניתן לו על ידי רשם המתווכים
                במשרד המשפטים. הרישיון הזה מסמן ידע מקצועי בשוק הנדל״ן הישראלי,
                בחוקים שמסדירים עסקאות מקרקעין ובהשלכות תכנוניות של בנייה ושיפוץ.
              </p>
              <p>
                בקטגוריה של בניית ממ״ד והרחבות, ההיכרות עם שוק הנדל״ן עוזרת ללקוחות
                בכמה היבטים מעשיים: השפעה של תוספת ממ״ד על שווי הבית, שיקולי תכנון
                מול תב״ע, יחס לוועדה המקומית, ובחירה בין פתרונות מיגון לפי המצב
                הקנייני של הנכס. אופק מבין את התמונה הרחבה, לא רק את הקירות.
              </p>

              <h2>הגישה: שקיפות, מקצועיות, אחריות</h2>
              <p>
                <strong>שקיפות.</strong> מחיר פריט-פריט. כל מרכיב של הפרויקט במחיר
                נפרד. אין &quot;חבילה כוללת&quot; שמסתירה איפה הולך הכסף. כל תוספת
                בכתב לפני שמבצעים אותה.
              </p>
              <p>
                <strong>מקצועיות.</strong> כל פרויקט עובד עם מהנדס קונסטרוקציה
                רשום ועם אדריכל. הגשה לפיקוד העורף מבוצעת על ידי מהנדס מורשה במערכת
                רישוי פקע״ר. לא קיצורי דרך בחלקים שמשפיעים על הבטיחות של הממ״ד.
              </p>
              <p>
                <strong>אחריות.</strong> אחריות קבלן לפי חוק המכר: שנה על תקלות
                כלליות, שלוש שנים על מערכות, שבע שנים על קונסטרוקציה. שירות שוטף
                גם אחרי תקופת האחריות. החברה שבנתה היא גם זו שחוזרת.
              </p>

              <h2>מה אנחנו מבצעים בפועל</h2>
              <p>
                התחדשות בינוי ויזמות מבצעת מגוון פרויקטי בנייה, עם פוקוס מסחרי
                בקטגוריות הבאות:
              </p>
              <ul>
                <li>
                  <Link href="/services/building-mamad">בניית ממ״ד</Link> תקני
                  פיקוד העורף, צמוד או חיצוני, לבתים פרטיים ולדירות.
                </li>
                <li>
                  <Link href="/services/room-reinforcement">מיגון חדר קיים</Link>{" "}
                  לבתים שאי אפשר לבנות בהם ממ״ד חדש.
                </li>
                <li>
                  <Link href="/services/migunit">מיגונית</Link> חיצונית
                  להתקנה מהירה.
                </li>
                <li>
                  <Link href="/services/private-construction">בנייה פרטית</Link>{" "}
                  של בתים ווילות, מהמגרש ועד המפתח.
                </li>
                <li>
                  <Link href="/services/renovations">שיפוצים</Link> מקיפים
                  לדירות ולבתים.
                </li>
                <li>
                  <Link href="/services/extensions">הרחבות ותוספות בנייה</Link>{" "}
                  לבתים קיימים.
                </li>
              </ul>

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
                  <Link href="/contact">צרו קשר</Link> — מוקפד, חוזר תוך שעות
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
            </Prose>
          </div>
        </div>
      </Section>

      <ContactCTA
        title="רוצים לדבר עם אופק על פרויקט?"
        subtitle="השאירו פרטים. אופק חוזר אליכם אישית תוך שעות ספורות בשעות הפעילות."
      />
    </>
  );
}
