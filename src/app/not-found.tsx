import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="bg-hero-gradient text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-7xl font-extrabold text-[var(--color-accent)]">404</div>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">העמוד לא נמצא</h1>
        <p className="mt-3 text-white/80">
          ייתכן שהקישור לא מעודכן, או שהעמוד הועבר. אפשר לחזור לדף הבית או לדבר איתנו ישירות.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <CTAButton href="/">חזרה לדף הבית</CTAButton>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-5 py-3"
          >
            צור קשר
          </Link>
        </div>
      </div>
    </section>
  );
}
