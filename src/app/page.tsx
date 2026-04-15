import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import { services, guides, compare, site } from "@/lib/site";

const faqs = [
  {
    q: "אתם הקבלן הבונה?",
    a: "לא. אנחנו מלווים אתכם מקצה לקצה — מייעוץ ראשון, דרך מיון אנשי מקצוע ובדיקת הצעות מחיר, ועד ליווי מול פיקוד העורף. את הביצוע מבצע הקבלן שנבחר.",
  },
  {
    q: "כמה זמן לוקח לבנות ממ\"ד?",
    a: "במסלול פטור מהיתר, הזמן הכולל (מתכנון ועד מסירה) הוא בדרך כלל 2–4 חודשים — תלוי במורכבות וזמני אישור פיקוד העורף [טעון אימות מקצועי].",
  },
  {
    q: "כמה עולה בניית ממ\"ד?",
    a: "ממ\"ד סטנדרטי (~9 מ\"ר) בבית פרטי נע לרוב בטווח של 100,000–150,000 ₪. הטווח הרחב נובע מסוג גמר, תנאי שטח, דרישות עובי קירות וכד' [טעון אימות מקצועי].",
  },
  {
    q: "למה צריך אתכם אם יש קבלן?",
    a: "בלי מומחיות מקצועית, קשה לבחון הצעת מחיר, לזהות סיכונים בחוזה, או לדעת אם מה שמציעים לכם באמת ממ\"ד תקני. אנחנו הצד המקצועי שלכם, לא של הקבלן.",
  },
  {
    q: "איך מתחילים?",
    a: "שיחת ייעוץ ראשונה ללא עלות. אפשר להתקשר ל-054-671-2130, לשלוח וואטסאפ או להשאיר פרטים — נחזור באותו יום עסקים.",
  },
];

const trust = [
  { n: "01", t: "בצד שלכם", d: "לא מוכרים לכם שום דבר ולא עובדים לקבלן. מלווים מקצועית את ההחלטות שלכם." },
  { n: "02", t: "שקיפות מלאה", d: "מחירים ריאליים, הסברים ברורים, ומה שלא ידוע — נאמר כלא ידוע." },
  { n: "03", t: "ידע רגולטורי", d: "מכירים את מסלולי הרישוי, את אישורי פיקוד העורף ואת הצעדים הנכונים." },
  { n: "04", t: "ניסיון בשטח", d: "אחרי כמה פרויקטים במרכז הארץ — אנחנו יודעים איפה הפרויקטים נתקעים ואיך להקדים תרופה." },
];

const process = [
  { n: 1, t: "שיחת ייעוץ ראשונה", d: "ללא עלות וללא התחייבות. מבינים אם ממ\"ד הוא הפתרון הנכון לכם." },
  { n: 2, t: "תכנון ואישורים", d: "אדריכל, קונסטרוקטור, הגשה לפיקוד העורף — הכל מלווה." },
  { n: 3, t: "בחירת קבלן וחוזה", d: "השוואת הצעות מקצועית, חוזה חזק, תשלומים לפי ביצוע." },
  { n: 4, t: "ליווי עד המפתח", d: "ביקורות באבני דרך, תיקון סטיות, אישור גמר — אנחנו איתכם עד הסוף." },
];

const serviceIcons: Record<string, string> = {
  "building-mamad": "🛡️",
  "room-reinforcement": "🧱",
  "migunit": "📦",
  "prefab-mamad": "🏗️",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
              ליווי מקצועי • כל הארץ
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              בניית ממ״ד ומיגון הבית — מהתכנון ועד המפתח
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              אנחנו לא הקבלן ולא המשווק. אנחנו הצד המקצועי שלכם — מייעוץ ראשוני, דרך
              בחירת אנשי מקצוע וליווי מול פיקוד העורף, ועד אישור גמר. בלי הפתעות, בלי
              שיחות שיווק, בלי עבודה עליכם.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/contact" size="lg">התחילו עם ייעוץ חינם</CTAButton>
              <CTAButton href={`tel:${site.phoneDial}`} variant="ghost" size="lg">
                📞 {site.phone}
              </CTAButton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <li>✔ ייעוץ ראשוני ללא עלות</li>
              <li>✔ ללא התחייבות</li>
              <li>✔ ליווי מקצה לקצה</li>
              <li>✔ שקיפות מלאה</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-dark)] mb-2">שירותים</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
              פתרון נכון לכל בית
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              לא כל בית דומה. אנחנו עוזרים לבחור בין ממ״ד חדש, מיגון חדר קיים או מיגונית —
              לפי מה שבאמת מתאים לכם.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)] p-6 transition"
              >
                <div className="text-3xl mb-3" aria-hidden>{serviceIcons[s.slug]}</div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{s.summary}</p>
                <div className="mt-4 text-sm font-bold text-[var(--color-accent-dark)]">
                  קראו עוד ←
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/compare/${compare.slug}`}
              className="inline-block text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-primary-dark)]"
            >
              לא בטוחים מה מתאים לכם? הישוו בין האפשרויות ←
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-soft-gradient border-y border-[var(--color-border)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-dark)] mb-2">למה אנחנו</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
              ליווי שמשחק בצד שלכם
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trust.map((t) => (
              <div key={t.n} className="bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-[var(--shadow-card)]">
                <div className="text-xs font-extrabold text-[var(--color-accent-dark)] mb-2">{t.n}</div>
                <h3 className="font-bold text-[var(--color-primary)] mb-1">{t.t}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-dark)] mb-2">איך זה עובד</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
              4 שלבים — מהשיחה הראשונה עד המפתח
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <li key={p.n} className="relative bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <div className="absolute -top-3 start-6 w-8 h-8 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-extrabold flex items-center justify-center shadow-[var(--shadow-cta)]">
                  {p.n}
                </div>
                <h3 className="font-bold text-[var(--color-primary)] mt-2 mb-1">{p.t}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" className="bg-soft-gradient border-y border-[var(--color-border)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-dark)] mb-2">מדריכים</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
                כל מה שצריך לדעת — לפני שמתחילים
              </h2>
              <p className="mt-3 text-[var(--color-muted)]">
                מחירים, מסלולי רישוי, אישורי פיקוד העורף, בחירת קבלן, טעויות נפוצות.
                הידע שחוסך לכם כסף וזמן.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="block rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] p-6 transition"
              >
                <h3 className="font-bold text-[var(--color-primary)] mb-1">{g.title}</h3>
                <div className="text-sm font-bold text-[var(--color-accent-dark)]">לקריאה ←</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <ContactCTA />
    </>
  );
}
