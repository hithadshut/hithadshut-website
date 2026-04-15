import ContactForm from "./ContactForm";
import CTAButton from "./CTAButton";
import { site } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  showForm?: boolean;
};

export default function ContactCTA({
  title = "מתלבטים? בואו נדבר — ייעוץ ראשוני ללא התחייבות",
  subtitle = "אפשר להתקשר, לשלוח וואטסאפ או להשאיר פרטים. נחזור אליכם באותו יום עסקים.",
  defaultService,
  showForm = true,
}: Props) {
  return (
    <section className="bg-soft-gradient border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href={`tel:${site.phoneDial}`} variant="secondary" size="lg">
              📞 {site.phone}
            </CTAButton>
            <CTAButton href={site.whatsappUrl} variant="primary" size="lg" aria-label="שליחת הודעה בוואטסאפ">
              💬 וואטסאפ
            </CTAButton>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
            <li>✔ ליווי מקצה לקצה — מייעוץ ראשוני ועד אישור גמר</li>
            <li>✔ שקיפות מלאה על מחירים, לוחות זמנים ותהליכים</li>
            <li>✔ מיון קבלנים — רק בעלי מקצוע עם רישיון, ביטוח ואחריות</li>
            <li>✔ אתם לא חתומים על שום דבר בשיחת הייעוץ הראשונה</li>
          </ul>
        </div>
        {showForm && (
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] p-6 md:p-8">
            <h3 className="text-lg font-bold mb-4">השאירו פרטים ונחזור אליכם</h3>
            <ContactForm defaultService={defaultService} />
          </div>
        )}
      </div>
    </section>
  );
}
