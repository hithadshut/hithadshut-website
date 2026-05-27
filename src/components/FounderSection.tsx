import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function FounderSection() {
  return (
    <section className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Brand visual column: first in DOM (RTL → appears on right; mobile → on top) */}
          <Reveal>
            <div className="flex flex-col items-center">
              <figure className="w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-[var(--color-accent)]/30 relative bg-white">
                <Image
                  src="/og-image.jpg"
                  alt="התחדשות בינוי ויזמות, חברת בנייה ישראלית לממ״ד והתחדשות עירונית"
                  width={1200}
                  height={630}
                  priority
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="mt-5 text-center">
                <div className="text-xl font-black text-[var(--color-primary)]">
                  התחדשות בינוי ויזמות
                </div>
                <div className="text-sm text-[var(--color-muted)] mt-1">
                  ממ״ד, מיגון, פינוי בינוי ובנייה פרטית
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal delay={120}>
            <div>
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                מי אנחנו
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                התחדשות, חברת בנייה אחת מקצה לקצה
              </h2>
              <p className="mt-6 text-lg text-[var(--color-muted)] leading-relaxed">
                התחדשות היא חברת בינוי ויזמות שמלווה בעלי דירות בעסקה הגדולה של חייהם:
                בניית ממ״ד, שיפור מיגון, פינוי בינוי, חלופת שקד ותמ״א 38. אנחנו לא יזם
                ולא קבלן משנה, אלא חברה אחת שעומדת מאחורי החוזה מתחילתו ועד מסירת
                המפתח.
              </p>
              <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                הקהל שלנו הוא בעלי דירות בני 50 ומעלה, שניצבים בפני החלטות שמשפיעות על
                שני העשורים הבאים שלהם. אנחנו מסבירים בעברית פשוטה, מציגים מספרים
                אמיתיים, ומסמנים בכנות מתי פתרון לא משתלם, גם כשהוא משלם לנו.
              </p>
              <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                שלושה דברים מבדילים בינינו לבין השוק: חוזה אחד בלי קבלן משנה אנונימי,
                מפרט טכני פריט פריט בלי חבילות סגורות, ולוח זמנים מחייב עם אבני דרך
                ברורות.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[var(--color-accent)]/30 bg-white px-5 py-4 shadow-card">
                <span
                  aria-hidden
                  className="inline-flex w-10 h-10 rounded-lg bg-[var(--color-primary)] text-[var(--color-accent)] items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="text-[var(--color-primary)] font-bold">
                  רוצים לדבר עם המומחים שלנו? חייגו{" "}
                  <a
                    href={`tel:${site.phoneDial}`}
                    className="text-[var(--color-accent-dark)] underline underline-offset-4 hover:text-[var(--color-accent)]"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="mt-5 text-sm">
                <Link
                  href="/about"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  קראו עוד על התחדשות ←
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
