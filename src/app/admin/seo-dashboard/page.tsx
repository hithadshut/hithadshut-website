import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  // Belt-and-suspenders: noindex via metadata + robots header (set in
  // middleware/headers if you want to harden further). The page renders
  // OK in any browser but Google won't crawl it. The URL is also not in
  // sitemap.ts on purpose.
  robots: { index: false, follow: false, nocache: true },
  title: "SEO Dashboard (internal)",
};

const TIER_1_PAGES = [
  { url: "/", label: "Homepage" },
  { url: "/services/building-mamad", label: "בניית ממ״ד" },
  { url: "/services/prefab-mamad", label: "ממ״ד יביל" },
  { url: "/services/room-reinforcement", label: "שיפור מיגון" },
  { url: "/guides/mamad-cost", label: "מחיר ממ״ד 2026" },
  { url: "/guides/mamad-process", label: "תהליך בניית ממ״ד" },
  { url: "/guides/home-front-command-approval", label: "אישורי פיקוד העורף" },
  { url: "/guides/mamad-permit-exemption-2026", label: "מסלול פטור 2026" },
  { url: "/guides/choosing-mamad-contractor", label: "בחירת קבלן ממ״ד" },
  { url: "/guides/mamad-mistakes", label: "10 טעויות בבניית ממ״ד" },
  { url: "/guides/mamad-vs-shelter", label: "ממ״ד מול מקלט" },
  { url: "/guides/mamad-air-filter-system", label: "מערכת סינון" },
  { url: "/compare/mamad-vs-miggun-vs-migunit", label: "ממ״ד / מיגון / מיגונית" },
  { url: "/compare/mamad-vs-hamad", label: "ממ״ד מול חמ״ד" },
  { url: "/compare/mamad-tzamud-vs-hitzoni", label: "ממ״ד צמוד מול חיצוני" },
  { url: "/compare/katlan-rashum-vs-hafer", label: "קבלן רשום מול חאפר" },
  { url: "/pinui-binui", label: "פינוי בינוי" },
  { url: "/pinui-binui/kshishim", label: "זכויות קשישים בפינוי בינוי" },
  { url: "/tama-38/pkia-2026", label: "תמ״א 38 פוקעת 2026" },
  { url: "/chalufat-shaked", label: "חלופת שקד" },
];

const SITE = "https://hithadshut.co.il";
const GSC_BASE = `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent("sc-domain:hithadshut.co.il")}&id=`;
const RICH_RESULTS_BASE = "https://search.google.com/test/rich-results?url=";
const PAGESPEED_BASE = "https://pagespeed.web.dev/analysis?url=";

const ACTION_ITEMS = [
  {
    key: "indexation",
    title: "Indexation sweep — Tier 1 pages",
    cadence: "Weekly",
    detail: "Check each Tier 1 page in GSC. Update INDEXATION_TRACKING.md.",
  },
  {
    key: "rankings",
    title: "Update RANKING_TRACKER.md",
    cadence: "Monthly",
    detail: "50 keywords. Use GSC → Performance → Queries.",
  },
  {
    key: "outreach",
    title: "Send 5-8 outreach emails",
    cadence: "Weekly",
    detail: "Per OUTREACH_TARGETS.md. Personalize each.",
  },
  {
    key: "gbp",
    title: "Publish GBP post + reply to reviews",
    cadence: "Weekly",
    detail: "1 post + 100% reply rate to new reviews.",
  },
  {
    key: "ai-visibility",
    title: "AI visibility check",
    cadence: "Monthly",
    detail: "ChatGPT + Perplexity + Gemini. Update AI_VISIBILITY_TRACKER.md.",
  },
  {
    key: "refresh",
    title: "Quarterly content refresh",
    cadence: "Quarterly",
    detail: "Per CONTENT_REFRESH_CALENDAR.md.",
  },
];

export default function Page() {
  return (
    <div dir="rtl" lang="he" className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">
            Internal · Not indexed · Not linked from public navigation
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            SEO Dashboard
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Quick links into Search Console, Rich Results Test, and PageSpeed
            for the Tier 1 money pages. Bookmark this page; do not share the
            URL externally — it&apos;s noindexed but not authenticated.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            Action items
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {ACTION_ITEMS.map((a) => (
              <article
                key={a.key}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-extrabold text-gray-900">{a.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-1 rounded">
                    {a.cadence}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{a.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            Tier 1 pages — quick tools
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-start px-4 py-3 font-bold text-gray-900">Page</th>
                  <th className="text-start px-4 py-3 font-bold text-gray-900">View</th>
                  <th className="text-start px-4 py-3 font-bold text-gray-900">GSC</th>
                  <th className="text-start px-4 py-3 font-bold text-gray-900">Rich Results</th>
                  <th className="text-start px-4 py-3 font-bold text-gray-900">PageSpeed</th>
                </tr>
              </thead>
              <tbody>
                {TIER_1_PAGES.map((p) => {
                  const fullUrl = `${SITE}${p.url}`;
                  const enc = encodeURIComponent(fullUrl);
                  return (
                    <tr key={p.url} className="border-t border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <span className="block">{p.label}</span>
                        <span className="block text-xs text-gray-500 font-mono">{p.url}</span>
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={p.url}
                          className="text-blue-700 hover:underline text-xs"
                        >
                          live →
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`${GSC_BASE}${enc}`}
                          target="_blank"
                          rel="noopener"
                          className="text-blue-700 hover:underline text-xs"
                        >
                          inspect →
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`${RICH_RESULTS_BASE}${enc}`}
                          target="_blank"
                          rel="noopener"
                          className="text-blue-700 hover:underline text-xs"
                        >
                          test →
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`${PAGESPEED_BASE}${enc}&form_factor=mobile`}
                          target="_blank"
                          rel="noopener"
                          className="text-blue-700 hover:underline text-xs"
                        >
                          mobile →
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            External tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Google Search Console", href: "https://search.google.com/search-console" },
              { label: "Bing Webmaster Tools", href: "https://www.bing.com/webmasters" },
              { label: "Google Business Profile", href: "https://business.google.com" },
              { label: "Schema validator", href: "https://validator.schema.org/" },
              { label: "Facebook OG debugger", href: "https://developers.facebook.com/tools/debug/" },
              { label: "LinkedIn Post Inspector", href: "https://www.linkedin.com/post-inspector/" },
              { label: "Vercel deployments", href: "https://vercel.com" },
              { label: "GitHub repo", href: "https://github.com/hithadshut/hithadshut-website" },
            ].map((t) => (
              <a
                key={t.href}
                href={t.href}
                target="_blank"
                rel="noopener"
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="block font-bold text-gray-900 text-sm">{t.label}</span>
                <span className="block text-xs text-gray-500 truncate">{t.href}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500">
          Reminder: this page is excluded from sitemap.xml and carries
          robots: noindex. It is reachable by direct URL only. Add basic
          auth via middleware if the URL leaks.
        </footer>
      </div>
    </div>
  );
}
