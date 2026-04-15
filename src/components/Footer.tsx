import Link from "next/link";
import Logo from "./Logo";
import { site, services, guides, compare } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white mt-20 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            ליווי בעלי בתים בבניית ממ&quot;ד ומיגון — מהייעוץ הראשון ועד מסירת המפתח.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${site.phoneDial}`} className="flex items-center gap-2 hover:text-[var(--color-accent)]">
              <span aria-hidden>📞</span> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-[var(--color-accent)]">
              <span aria-hidden>✉️</span> {site.email}
            </a>
            <div className="text-white/70">אזור שירות: {site.serviceArea}</div>
            <div className="text-white/70">שעות: {site.hours}</div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-4">שירותים</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-[var(--color-accent)]">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-4">מדריכים</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="hover:text-[var(--color-accent)]">
                  {g.short}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`/compare/${compare.slug}`} className="hover:text-[var(--color-accent)]">
                השוואה — ממ&quot;ד/מיגון/מיגונית
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-4">האתר</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-[var(--color-accent)]">אודות</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)]">צור קשר</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--color-accent)]">מדיניות פרטיות</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--color-accent)]">תנאי שימוש</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {site.name}. כל הזכויות שמורות.</div>
          <div>אתר זה אינו מהווה ייעוץ הנדסי או משפטי. כל החלטה דורשת בדיקה פרטנית.</div>
        </div>
      </div>
    </footer>
  );
}
