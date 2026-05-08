import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const PATH = "/contact";
const TITLE = "צור קשר | התחדשות בינוי ויזמות | קבלו הצעת מחיר";
const DESCRIPTION =
  "צרו קשר עם התחדשות בינוי ויזמות: בניית ממ״ד, מיגון ובנייה פרטית. ייעוץ ראשוני ללא עלות, חזרה באותו יום. 054-671-2130 או WhatsApp.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="צור קשר"
        title="בואו נדבר"
        subtitle="ייעוץ ראשוני ללא התחייבות. אפשר להתקשר, לשלוח הודעה בוואטסאפ, או להשאיר פרטים כאן. נחזור אליכם באותו יום עסקים."
        crumbs={[{ name: "צור קשר", href: PATH }]}
      />

      <JsonLd data={localBusinessJsonLd()} />

      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">השאירו פרטים</h2>
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl bg-[var(--color-primary)] text-white p-6">
              <h2 className="text-xl font-bold mb-3">פרטי יצירת קשר</h2>
              <ul className="space-y-3 text-white/90">
                <li>
                  <div className="text-xs uppercase tracking-wide text-white/60">טלפון</div>
                  <a href={`tel:${site.phoneDial}`} className="text-lg font-bold hover:text-[var(--color-accent)]">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-wide text-white/60">וואטסאפ</div>
                  <a href={site.whatsappUrl} target="_blank" rel="noopener" className="text-lg font-bold hover:text-[var(--color-accent)]">
                    שליחת הודעה
                  </a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-wide text-white/60">אימייל</div>
                  <a href={`mailto:${site.email}`} className="text-lg font-bold hover:text-[var(--color-accent)]" dir="ltr">
                    {site.email}
                  </a>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-wide text-white/60">אזור שירות</div>
                  <div>{site.serviceArea}</div>
                </li>
                <li>
                  <div className="text-xs uppercase tracking-wide text-white/60">שעות פעילות</div>
                  <div>{site.hours}</div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-[var(--color-border)] p-6">
              <h3 className="font-bold mb-2">מה אפשר לשאול בשיחה?</h3>
              <ul className="text-sm text-[var(--color-muted)] space-y-1 list-disc pe-5">
                <li>האם ריאלי לבנות ממ״ד בבית שלי?</li>
                <li>מה הפתרון הנכון לתקציב שלי?</li>
                <li>מה לוח הזמנים הריאלי?</li>
                <li>מה לעשות אם כבר יש לי הצעת מחיר מקבלן?</li>
                <li>איך מתחילים?</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
