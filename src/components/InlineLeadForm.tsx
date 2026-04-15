import ContactForm from "./ContactForm";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

type Props = {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  tone?: "light" | "dark";
};

export default function InlineLeadForm({
  title = "רוצים ממ״ד? בואו נדבר.",
  subtitle = "השאירו פרטים ונחזור אליכם תוך שעות עם הצעה מותאמת.",
  defaultService,
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-dark-section text-white" : "bg-soft"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
        <Reveal variant="right">
          <div className="h-1 w-16 gold-line mb-6" />
          <h2 className={`text-3xl md:text-4xl font-black leading-tight ${dark ? "text-white" : "text-[var(--color-primary)]"}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/75" : "text-[var(--color-muted)]"}`}>
            {subtitle}
          </p>
          <div className="mt-8 space-y-3">
            <a
              href={`tel:${site.phoneDial}`}
              className={`flex items-center gap-3 font-bold text-lg ${dark ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"} hover:opacity-80`}
            >
              <span className="inline-flex w-10 h-10 rounded-full bg-[var(--color-accent)]/15 items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1l-2.22 2.2z"/>
                </svg>
              </span>
              {site.phone}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener"
              className={`flex items-center gap-3 font-bold ${dark ? "text-white/90" : "text-[var(--color-ink)]"} hover:opacity-80`}
            >
              <span className="inline-flex w-10 h-10 rounded-full bg-[var(--color-whatsapp)]/15 items-center justify-center text-[var(--color-whatsapp)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M.057 24l1.687-6.163A11.867 11.867 0 010 11.5C0 5.149 5.373 0 12 0s12 5.149 12 11.5c0 6.35-5.373 11.5-12 11.5a12.39 12.39 0 01-5.896-1.486L.057 24z"/></svg>
              </span>
              דברו איתנו בוואטסאפ
            </a>
          </div>
          <ul className={`mt-8 space-y-2 text-sm ${dark ? "text-white/70" : "text-[var(--color-muted)]"}`}>
            <li>✔ חברת בינוי ויזמות — אנחנו הקבלנים, לא מתווכים</li>
            <li>✔ ליווי מלא — תכנון, רישוי, ביצוע, אישורים</li>
            <li>✔ צוות מקצועי מורשה — קבלנים, מהנדסים, אדריכלים</li>
            <li>✔ שקיפות מלאה — מחיר סופי, לו״ז ברור</li>
          </ul>
        </Reveal>
        <Reveal variant="left">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-deep)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 2L15 8l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-[var(--color-primary)]">קבלו הצעת מחיר</h3>
            </div>
            <p className="text-sm text-[var(--color-muted)] mb-5">
              נחזור אליכם תוך שעות ספורות. אין התחייבות.
            </p>
            <ContactForm defaultService={defaultService} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
