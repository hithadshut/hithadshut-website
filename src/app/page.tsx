import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import HeroBackground from "@/components/HeroBackground";
import FounderSection from "@/components/FounderSection";
import TrustStrip from "@/components/TrustStrip";
import HomeQuickAnswer from "@/components/HomeQuickAnswer";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/schema";
import { protectionServices, constructionServices, guides, compare, site } from "@/lib/site";

const faqs = [
  {
    q: "כמה עולה לבנות ממ\"ד?",
    a: "ממ״ד סטנדרטי (9 מ״ר) בבית פרטי: 160,000-200,000 ₪ + מע״מ. ממ״ד 12 מ״ר: 200,000-220,000 ₪ + מע״מ. באזורי קו קדמי או עובי קירות 40 ס״מ קיימת תוספת של 15-25%. המחיר תלוי בתנאי השטח, מפרט הגמר ומורכבות הפרויקט. אצלנו מקבלים הצעת מחיר שקופה עם כל רכיב בפני עצמו.",
  },
  {
    q: "כמה זמן לוקח לבנות ממ\"ד?",
    a: "במסלול פטור מהיתר, הזמן הכולל מתכנון ועד מסירה הוא בדרך כלל 2-4 חודשים. בחוזה איתנו מוגדר לוח זמנים מפורט עם אבני דרך, וסנקציות על איחורים שאינם כוח עליון.",
  },
  {
    q: "מה ההבדל בין ממ\"ד למיגון חדר קיים?",
    a: "ממ\"ד הוא מרחב מוגן דירתי שנבנה לפי תקן פיקוד העורף: קירות בטון מזוין, דלת הדף תקנית, מערכת סינון. מיגון חדר קיים הוא חיזוק של חדר קיים לרמת הגנה משופרת, אך אינו ממ\"ד תקני. הפתרון הנכון תלוי במבנה ובצרכים שלכם.",
  },
  {
    q: "האם צריך היתר בנייה?",
    a: "ברוב הבתים הפרטיים עד 2 קומות לא נדרש היתר, אלא מסלול פטור מהיתר המבוסס על אישור פקע״ר והצהרת מהנדס/אדריכל. בבנייה מורכבת יותר נדרש רישוי מקוצר או רישוי רגיל. אנחנו מטפלים בכל התהליך מול פיקוד העורף והרשויות.",
  },
  {
    q: "איך מתחילים?",
    a: `שיחת ייעוץ ראשונה ללא עלות. אפשר להתקשר ל-${site.phone}, לשלוח וואטסאפ או להשאיר פרטים ונחזור תוך שעות ספורות עם מפגש סיור וייעוץ בבית שלכם.`,
  },
];

const whyUs = [
  {
    icon: "shield" as const,
    title: "חברת בינוי ויזמות",
    desc: "לא מתווכים, לא קבלני משנה. אנחנו מתכננים, מבצעים ומוסרים.",
  },
  {
    icon: "key" as const,
    title: "ליווי מ-א׳ ועד ת׳",
    desc: "תכנון, רישוי, ביצוע, אישורי פיקוד העורף, מסירה ואחריות.",
  },
  {
    icon: "team" as const,
    title: "צוות מקצועי ומורשה",
    desc: "קבלנים רשומים, מהנדסים ואדריכלים. לא קבלני משנה מזדמנים.",
  },
  {
    icon: "certificate" as const,
    title: "שקיפות מלאה",
    desc: "מחיר סופי בחוזה, לוח זמנים ברור, אחריות מלאה. בלי הפתעות.",
  },
];

const processSteps = [
  { n: 1, title: "פנייה ראשונית", desc: "שיחה טלפונית או טופס. מבינים את הצורך ומתאמים סיור." },
  { n: 2, title: "סיור וייעוץ", desc: "ביקור בבית, מדידות, הבנת המגבלות וההעדפות. ייעוץ מקצועי ללא עלות." },
  { n: 3, title: "תכנון ואישורים", desc: "אדריכל וקונסטרוקטור, תכניות מפורטות, הגשה לפיקוד העורף ולרשויות." },
  { n: 4, title: "ביצוע ומסירה", desc: "בנייה עם צוות קבוע, בקרת איכות, אישור פקע״ר סופי, מסירת מפתח ואחריות." },
];

const mainServices = protectionServices.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* LocalBusiness on the home page only — Organization + WebSite are
          already in layout.tsx and apply site-wide. Per-area pages emit their
          own LocalBusiness with city-specific @id, so this top-level node is
          scoped to / to avoid graph collisions. */}
      <JsonLd data={localBusinessJsonLd()} />

      {/* ===== HERO ===== */}
      <section className="bg-hero-animated text-white relative overflow-hidden">
        <HeroBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="hero-in hero-in-1 inline-flex items-center gap-2 mb-6 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/40">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              חברת בינוי ויזמות · כל הארץ
            </div>
            <h1 className="hero-in hero-in-2 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
              בונים לכם ממ״ד
              <br />
              <span className="text-[var(--color-accent)]">מהתכנון ועד המפתח</span>
            </h1>
            <p className="hero-in hero-in-3 mt-7 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              חברת התחדשות בינוי ויזמות. בניית ממ״דים, מיגון חדרים ומיגוניות לפי תקן פקע״ר, עם מהנדס קונסטרוקציה רשום.
              תכנון, ביצוע ואישורי פיקוד העורף. הכל אצלנו, תחת גג אחד.
            </p>
            <div className="hero-in hero-in-4 mt-10 flex flex-wrap gap-3">
              <CTAButton href="/contact" size="lg">
                לקבלת הצעת מחיר ←
              </CTAButton>
              <CTAButton href={`tel:${site.phoneDial}`} variant="ghost" size="lg">
                📞 דברו עם מומחה: {site.phone}
              </CTAButton>
            </div>
            <ul className="hero-in hero-in-5 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">✓</span> קבלנים רשומים</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">✓</span> אישור פיקוד העורף</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">✓</span> עמידה בלו״ז</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-accent)]">✓</span> אחריות מלאה</li>
            </ul>
          </div>
        </div>

        {/* bottom gradient fade */}
        <div aria-hidden className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== TRUST STRIP (W2 — entity-level trust signals below hero) ===== */}
      <TrustStrip />

      {/* ===== QUICK ANSWER (S2 — direct-answer block for AI citation) ===== */}
      <HomeQuickAnswer />

      {/* ===== MAIN SERVICES (3 big cards) ===== */}
      <section id="services" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                השירותים שלנו
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                מיגון מקצועי לכל בית, לכל צורך
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                התחדשות מתמחה בבניית ממ״דים, מיגון חדרים ומיגוניות. כל פרויקט מבוצע
                לפי תקן פיקוד העורף, עם ליווי מלא עד אישור הגמר.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {mainServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 120}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group card-premium p-8 h-full flex flex-col relative overflow-hidden shine"
                >
                  <div aria-hidden className="absolute top-0 end-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-accent)]/10 to-transparent" />
                  <div className="relative">
                    <div className="inline-flex w-14 h-14 rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)] items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <ServiceIcon name={s.icon as "shield"} size={28} />
                    </div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-2">
                      {i === 0 ? "פופולרי" : i === 1 ? "מהיר" : "מיידי"}
                    </div>
                    <h3 className="text-2xl font-black text-[var(--color-primary)] mb-3 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed mb-6">{s.summary}</p>
                    <div className="inline-flex items-center gap-2 text-[var(--color-accent-dark)] font-extrabold group-hover:gap-3 transition-all">
                      למידע נוסף
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Link href={`/services/prefab-mamad`} className="text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                עוד אפשרות: ממ״ד מוכן / יחידה ממוגנת מהמפעל ←
              </Link>
              {" · "}
              <Link href={`/compare/${compare.slug}`} className="text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                השוואה בין הפתרונות ←
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-soft py-20 md:py-28 relative">
        <div aria-hidden className="absolute inset-0 dots-pattern opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                למה התחדשות
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                חברת בנייה שאפשר לסמוך עליה
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="card-premium p-7 h-full">
                  <div className="inline-flex w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] items-center justify-center mb-4">
                    <ServiceIcon name={t.icon} size={26} />
                  </div>
                  <h3 className="font-black text-lg text-[var(--color-primary)] mb-2">{t.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <FounderSection />

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-white py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                איך זה עובד
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                4 שלבים: מהשיחה הראשונה עד המפתח
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Horizontal timeline line */}
            <div aria-hidden className="hidden md:block absolute top-10 start-[10%] end-[10%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent" />

            <ol className="grid md:grid-cols-4 gap-6 relative">
              {processSteps.map((p, i) => (
                <Reveal key={p.n} delay={i * 120}>
                  <li className="relative text-center md:text-start">
                    <div className="relative z-10 mx-auto md:mx-0 w-20 h-20 rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center text-3xl font-black shadow-[var(--shadow-deep)] border-4 border-white">
                      {p.n}
                    </div>
                    <h3 className="font-black text-lg text-[var(--color-primary)] mt-5 mb-2">{p.title}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== MAIN CTA ===== */}
      <ContactCTA
        title="רוצים ממ״ד? בואו נדבר."
        subtitle="השאירו פרטים ונחזור אליכם תוך שעות ספורות עם הצעה מותאמת. אין התחייבות."
      />

      {/* ===== FAQ ===== */}
      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="מה שבעלי בתים שואלים אותנו הכי הרבה"
        tone="soft"
      />

      {/* ===== PROJECTS TEASER (S2 — real-work signal, B-020) ===== */}
      <ProjectsTeaser />

      {/* ===== "WE BUILD EVERYTHING" ===== */}
      <section className="bg-dark-section text-white py-20 md:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
        <div aria-hidden className="absolute -top-20 start-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
                לא רק ממ״דים
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                חברת התחדשות בונה הכל
              </h2>
              <p className="mt-4 text-lg text-white/75 max-w-2xl leading-relaxed">
                בנייה פרטית, שיפוצים, הרחבות, תוספות ווילות, באותה רמת מקצועיות,
                באותה שקיפות, עם אותו צוות מנוסה.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {constructionServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group card-dark p-7 h-full flex flex-col justify-between block"
                >
                  <div>
                    <div className="inline-flex w-12 h-12 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)] items-center justify-center mb-4">
                      <ServiceIcon name={s.icon as "villa"} size={26} />
                    </div>
                    <h3 className="font-black text-xl mb-2">{s.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{s.summary}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[var(--color-accent)] font-extrabold text-sm group-hover:gap-3 transition-all">
                    פרטים
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUIDES ===== */}
      <section id="guides" className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                מדריכים
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                כל מה שצריך לדעת לפני שמתחילים
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                מחירים, מסלולי רישוי, אישורי פיקוד העורף, טעויות נפוצות. הידע שחוסך לכם כסף וזמן.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 80}>
                <Link href={`/guides/${g.slug}`} className="card-premium p-7 h-full block group">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-2">מדריך</div>
                  <h3 className="font-black text-lg text-[var(--color-primary)] mb-3 leading-snug">{g.title}</h3>
                  <div className="text-sm font-bold text-[var(--color-accent-dark)] group-hover:underline">לקריאה ←</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
