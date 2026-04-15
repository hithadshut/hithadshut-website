import { site } from "@/lib/site";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 no-print pb-safe">
      <div className="mx-3 mb-3 grid grid-cols-2 gap-2 bg-white border border-[var(--color-border)] shadow-[0_-8px_32px_rgba(10,22,40,0.15)] rounded-2xl p-2">
        <a
          href={`tel:${site.phoneDial}`}
          className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--color-primary)] text-white font-extrabold text-sm"
          aria-label="התקשרו אלינו"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1l-2.22 2.2z"/>
          </svg>
          חייגו עכשיו
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-extrabold text-sm shadow-[var(--shadow-cta)]"
        >
          קבלו הצעה ←
        </Link>
      </div>
    </div>
  );
}
