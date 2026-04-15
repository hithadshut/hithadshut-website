import Link from "next/link";
import Logo from "./Logo";
import { site, protectionServices, constructionServices, guides, compare } from "@/lib/site";
import { getArea } from "@/content/areas";

const TOP_AREA_SLUGS = [
  "tel-aviv",
  "jerusalem",
  "haifa",
  "rishon-lezion",
  "petah-tikva",
  "ramat-gan",
  "herzliya",
  "raanana",
  "netanya",
  "beer-sheva",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-24 no-print relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2 md:col-span-2">
          <Logo variant="light" size="md" />
          <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
            חברת התחדשות — בינוי ויזמות. בניית ממ״ד, מיגון חדרים, מיגוניות, בנייה פרטית, שיפוצים והרחבות.
            ליווי מלא מהתכנון ועד מסירת המפתח.
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href={`tel:${site.phoneDial}`} className="flex items-center gap-2 hover:text-[var(--color-accent)] transition font-semibold">
              <span aria-hidden className="text-[var(--color-accent)]">📞</span> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-[var(--color-accent)] transition">
              <span aria-hidden className="text-[var(--color-accent)]">✉️</span> {site.email}
            </a>
            <div className="text-white/70 flex items-center gap-2">
              <span aria-hidden className="text-[var(--color-accent)]">📍</span> אזור שירות: {site.serviceArea}
            </div>
            <div className="text-white/70 flex items-center gap-2">
              <span aria-hidden className="text-[var(--color-accent)]">🕒</span> {site.hours}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">מיגון וממ״ד</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            {protectionServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-[var(--color-accent)]">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-3">
              <Link href={`/compare/${compare.slug}`} className="hover:text-[var(--color-accent)]">
                השוואה בין הפתרונות
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">בנייה ושיפוצים</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            {constructionServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-[var(--color-accent)]">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)] mt-6 mb-5">מדריכים</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            {guides.slice(0, 3).map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="hover:text-[var(--color-accent)]">
                  {g.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">אזורי שירות</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            {TOP_AREA_SLUGS.map((slug) => {
              const a = getArea(slug);
              if (!a) return null;
              return (
                <li key={slug}>
                  <Link href={`/areas/${slug}`} className="hover:text-[var(--color-accent)]">
                    {a.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-white/10 mt-3">
              <Link href="/areas" className="hover:text-[var(--color-accent)] font-semibold">
                כל האזורים ←
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">החברה</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-[var(--color-accent)]">אודות</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)]">צור קשר</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--color-accent)]">מדיניות פרטיות</Link></li>
            <li><Link href="/accessibility" className="hover:text-[var(--color-accent)]">הצהרת נגישות</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--color-accent)]">תנאי שימוש</Link></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} התחדשות — בינוי ויזמות. כל הזכויות שמורות.</div>
          <div>אתר זה אינו מהווה ייעוץ הנדסי או משפטי. כל החלטה דורשת בדיקה פרטנית.</div>
        </div>
      </div>
    </footer>
  );
}
