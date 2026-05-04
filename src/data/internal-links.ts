/**
 * Single source of truth for the internal-link graph, per technical.md §6.
 *
 * Every new page on hithadshut.co.il declares its outbound links here AND
 * identifies inbound links from existing pages that should point to it.
 * The page authoring workflow (`/new-page` step 6) is where these entries
 * are added.
 *
 * Rules of thumb:
 *  - Anchor text varies. Never repeat the same anchor for the same target.
 *  - Anchor text reflects user search intent, not the page title verbatim.
 *  - No more than 7 internal links inside a single page's body.
 *  - Pillar pages link to ALL their children. Children link to their pillar.
 *  - Money pages link to relevant guide pages and back.
 */

export type InternalLinkContext =
  | "inline"
  | "related"
  | "footer-cta"
  | "breadcrumb";

export type InternalLink = {
  /** Source page URL (path, e.g. "/pinui-binui/"). */
  fromUrl: string;
  /** Target page URL (path, e.g. "/pinui-binui/kshishim/"). */
  toUrl: string;
  /** Anchor text shown to the user. */
  anchorText: string;
  /** Where on the source page this link appears. */
  context: InternalLinkContext;
  /**
   * Optional free-form note (e.g. "added with /pinui-binui/ pillar
   * launch, 2026-05-03"). Helps maintainers reason about why a link
   * exists when refactoring later.
   */
  note?: string;
};

/**
 * The graph itself. Empty seed; entries are appended as pages ship.
 * Reading helpers below operate on this single array.
 */
export const internalLinks: InternalLink[] = [
  // 2026-05-03: inbound links to /pinui-binui pillar from the 3
  // existing pages content-lead approved per brief B §11.
  {
    fromUrl: "/",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Homepage main-services intro paragraph; added with /pinui-binui pillar launch.",
  },
  {
    fromUrl: "/about",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "About page 'מי אנחנו' section; added with /pinui-binui pillar launch.",
  },
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Building-mamad service intro, renewal-alternative paragraph; added with /pinui-binui pillar launch.",
  },
  // 2026-05-03: /pinui-binui/temurot/ sub-page launch.
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/contact",
    anchorText: "ייעוץ ראשוני ללא עלות",
    context: "inline",
    note: "Tax section CTA inline link.",
  },
  // 2026-05-03: /pinui-binui/chok-67/ sub-page launch.
  {
    fromUrl: "/pinui-binui/chok-67",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/chok-67",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Forward link from haganot section to live sibling sub-page.",
  },
  // 2026-05-03: /pinui-binui/kshishim/ sub-page launch.
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/pinui-binui/chok-67",
    anchorText: "חוק 67%",
    context: "inline",
    note: "Inline link in גיל 70+ section to live sibling sub-page.",
  },
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in inheritance bullet to live sibling sub-page.",
  },
  // Planned forward-link: kshishim → /pinui-binui/eravut. The anchor
  // "ערבויות בנקאיות תקניות בהסכם" currently renders as PLAIN TEXT
  // (Phase 1 close-out per content-lead Correction 3) since /eravut
  // is the Phase 3 deliverable. The eravut launch commit will
  // activate this anchor as a Link. Tracked here so the link graph
  // is honest about future intent.
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בנקאיות תקניות בהסכם",
    context: "inline",
    note: "PLANNED — currently plain text. Activates when /pinui-binui/eravut ships in Phase 3.",
  },
  // 2026-05-03: /pinui-binui/yorshim/ sub-page launch (Gal 1, Phase 1.1).
  {
    fromUrl: "/pinui-binui/yorshim",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/yorshim",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in sa'ifei haskem section to live sibling sub-page.",
  },
  {
    fromUrl: "/pinui-binui/yorshim",
    toUrl: "/pinui-binui/chok-67",
    anchorText: "חוק 67%",
    context: "inline",
    note: "Inline link in moresh-lo-chatam section to live sibling sub-page.",
  },
  {
    fromUrl: "/pinui-binui/yorshim",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in zechuyot-gil section to live sibling sub-page.",
  },
  // 2026-05-03: /pinui-binui/eravut/ sub-page launch (Gal 1, Phase 1.2).
  {
    fromUrl: "/pinui-binui/eravut",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/eravut",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in chok-mehor section to live sibling sub-page.",
  },
  // 2026-05-03: /pinui-binui/yazam/ sub-page launch (Gal 1, Phase 1.3).
  {
    fromUrl: "/pinui-binui/yazam",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/yazam",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in 12-shealot section to live sibling sub-page.",
  },
  // 2026-05-03: /pinui-binui/sarvan/ sub-page launch (Gal 1, Phase 1.4).
  {
    fromUrl: "/pinui-binui/sarvan",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar (technical.md §6).",
  },
  {
    fromUrl: "/pinui-binui/sarvan",
    toUrl: "/pinui-binui/chok-67",
    anchorText: "חוק 67%",
    context: "inline",
    note: "Inline link in ma-ze-sarvan section to live sibling sub-page.",
  },
  {
    fromUrl: "/pinui-binui/sarvan",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in haganot section to live sibling sub-page.",
  },
  // 2026-05-04: Block A — inbound links from existing pinui-binui pages
  // to the 4 new Gal-1 sub-pages (yorshim, eravut, yazam, sarvan).
  // Pillar /pinui-binui → 4 new sub-pages
  {
    fromUrl: "/pinui-binui",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושת דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in kshishim section of pillar; covers death-during-project scenario.",
  },
  {
    fromUrl: "/pinui-binui",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in temurot section of pillar; covers contract-guarantee structure.",
  },
  {
    fromUrl: "/pinui-binui",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in kdai section of pillar; covers developer selection.",
  },
  {
    fromUrl: "/pinui-binui",
    toUrl: "/pinui-binui/sarvan",
    anchorText: "דייר סרבן בפינוי בינוי",
    context: "inline",
    note: "Inline link in chok-67 section of pillar; covers holdout-tenant process.",
  },
  // /pinui-binui/kshishim → /yorshim, /eravut
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושת דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in leagen section heir-clause bullet; replaces prior /temurot link.",
  },
  // Note: /kshishim → /eravut planned forward-link is now activated as a real <Link>
  // (was plain text per Phase 1 Correction 3, now live with Block A).
  // The planned-forward-link entry above (line ~127) is superseded by this commit.
  // /pinui-binui/temurot → /eravut, /yorshim
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבות בנקאית או חוק מכר לכל שלב",
    context: "inline",
    note: "Inline link in chova section item 3 (non-waivable clauses).",
  },
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושת דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in masim section heir-position-paper bullet (semantic equivalent to FAQ #6 placement).",
  },
  // /pinui-binui/chok-67 → /sarvan
  {
    fromUrl: "/pinui-binui/chok-67",
    toUrl: "/pinui-binui/sarvan",
    anchorText: "דייר סרבן בפינוי בינוי",
    context: "inline",
    note: "Inline link in dayar-sarvan section; routes the most prominent holdout-tenant mention.",
  },
  // /pinui-binui/eravut → /yazam
  {
    fromUrl: "/pinui-binui/eravut",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in im-yazam-msarev section; activates previously plain-text reference.",
  },
  // 2026-05-04: Gal 3 Block A — inbound links for 6 new memad sub-pages
  // from existing memad hub, guides, and a cross-cluster link from /pinui-binui.
  // /services/building-mamad → all 6 memad sub-pages (new "מדריכים מפורטים" section).
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/memad/bayit-prati",
    anchorText: "ממ״ד לבית פרטי",
    context: "related",
    note: "Hub guide-cards section.",
  },
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/memad/dira-bekoma",
    anchorText: "ממ״ד בדירה בקומה",
    context: "related",
    note: "Hub guide-cards section.",
  },
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/memad/binyan-meshutaf",
    anchorText: "ממ״ד בבניין משותף",
    context: "related",
    note: "Hub guide-cards section.",
  },
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/memad/binyan-yashan",
    anchorText: "ממ״ד לבניין ישן",
    context: "related",
    note: "Hub guide-cards section.",
  },
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/memad/koma-elyona",
    anchorText: "ממ״ד בקומה עליונה",
    context: "related",
    note: "Hub guide-cards section.",
  },
  {
    fromUrl: "/services/building-mamad",
    toUrl: "/memad/tat-karkai",
    anchorText: "ממ״ד תת-קרקעי",
    context: "related",
    note: "Hub guide-cards section.",
  },
  // /services/room-reinforcement → 3 memad sub-pages (apartment-floor, old-building, shared-building).
  {
    fromUrl: "/services/room-reinforcement",
    toUrl: "/memad/dira-bekoma",
    anchorText: "ממ״ד בדירה בקומה",
    context: "inline",
    note: "Inline link in 'when-not-enough' section.",
  },
  {
    fromUrl: "/services/room-reinforcement",
    toUrl: "/memad/binyan-yashan",
    anchorText: "ממ״ד לבניין ישן",
    context: "inline",
    note: "Inline link in 'when-not-enough' section.",
  },
  {
    fromUrl: "/services/room-reinforcement",
    toUrl: "/memad/binyan-meshutaf",
    anchorText: "ממ״ד בבניין משותף",
    context: "inline",
    note: "Inline link in 'when-not-enough' section.",
  },
  // /guides/mamad-cost → bayit-prati, tat-karkai.
  {
    fromUrl: "/guides/mamad-cost",
    toUrl: "/memad/bayit-prati",
    anchorText: "ממ״ד בבית פרטי",
    context: "inline",
    note: "Inline in 'what-drives-price' section, location-impact bullet.",
  },
  {
    fromUrl: "/guides/mamad-cost",
    toUrl: "/memad/tat-karkai",
    anchorText: "ממ״ד תת-קרקעי",
    context: "inline",
    note: "Inline in 'what-drives-price' section, location-impact bullet.",
  },
  // /guides/mamad-process → bayit-prati, koma-elyona.
  {
    fromUrl: "/guides/mamad-process",
    toUrl: "/memad/bayit-prati",
    anchorText: "ממ״ד לבית פרטי",
    context: "inline",
    note: "Inline in 'our-approach' section.",
  },
  {
    fromUrl: "/guides/mamad-process",
    toUrl: "/memad/koma-elyona",
    anchorText: "ממ״ד בקומה עליונה",
    context: "inline",
    note: "Inline in 'our-approach' section, complex-installations follow-up.",
  },
  // /guides/home-front-command-approval → dira-bekoma, koma-elyona.
  {
    fromUrl: "/guides/home-front-command-approval",
    toUrl: "/memad/dira-bekoma",
    anchorText: "ממ״ד בדירה בקומה",
    context: "inline",
    note: "Inline in 'our-approach' section, apartment-floor approval specifics.",
  },
  {
    fromUrl: "/guides/home-front-command-approval",
    toUrl: "/memad/koma-elyona",
    anchorText: "ממ״ד בקומה עליונה",
    context: "inline",
    note: "Inline in 'our-approach' section, upper-floor approval specifics.",
  },
  // /pinui-binui → /memad/binyan-yashan (CROSS-CLUSTER LINK).
  {
    fromUrl: "/pinui-binui",
    toUrl: "/memad/binyan-yashan",
    anchorText: "ממ״ד לבניין ישן",
    context: "inline",
    note: "Cross-cluster link from urban-renewal pillar to memad cluster, in 'kdai' section old-building bullet.",
  },
  // /memad/dira-bekoma → /memad/koma-elyona (sibling cross-link).
  {
    fromUrl: "/memad/dira-bekoma",
    toUrl: "/memad/koma-elyona",
    anchorText: "ממ״ד בקומה עליונה",
    context: "inline",
    note: "Inline link after 3-pitronot ComparisonTable, complements rooftop-prefab row.",
  },
  // /memad/bayit-prati → /memad/tat-karkai (sibling cross-link).
  {
    fromUrl: "/memad/bayit-prati",
    toUrl: "/memad/tat-karkai",
    anchorText: "ממ״ד תת-קרקעי",
    context: "inline",
    note: "Inline link after 4-types ComparisonTable, deeper coverage of underground option.",
  },
  // /memad/koma-elyona → /memad/dira-bekoma sibling-link is already present
  // in the alternatives section of /memad/koma-elyona at launch (see Phase 2.5
  // commit). Logged here for the inbound graph.
  {
    fromUrl: "/memad/koma-elyona",
    toUrl: "/memad/dira-bekoma",
    anchorText: "ממ״ד בדירה בקומה",
    context: "inline",
    note: "Existing inline link in alternatives section (shipped Phase 2.5).",
  },
  // 2026-05-04: /tama-38/ pillar launch (Gal 3, Phase 3.1).
  {
    fromUrl: "/tama-38",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in opening — alternatives.",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in opening — cross-cluster alternative.",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/tama-38/pkia-2026",
    anchorText: "תמ״א 38 פוקעת",
    context: "inline",
    note: "Inline link in projektim-peilim section to expiration sub-page.",
  },
  // 2026-05-04: /memad/tat-karkai/ sub-page launch (Gal 2, Phase 2.6).
  {
    fromUrl: "/memad/tat-karkai",
    toUrl: "/services/building-mamad",
    anchorText: "תת-קרקעי",
    context: "inline",
    note: "Mandatory back-link from sub-page to commercial hub.",
  },
  {
    fromUrl: "/memad/tat-karkai",
    toUrl: "/guides/mamad-cost",
    anchorText: "מחיר ממ״ד 2026",
    context: "inline",
    note: "Inline link in aluyot section to cost guide.",
  },
  {
    fromUrl: "/memad/tat-karkai",
    toUrl: "/guides/home-front-command-approval",
    anchorText: "אישורי פיקוד העורף",
    context: "inline",
    note: "Inline link in ishurim section to approval guide.",
  },
  // 2026-05-04: /memad/koma-elyona/ sub-page launch (Gal 2, Phase 2.5).
  {
    fromUrl: "/memad/koma-elyona",
    toUrl: "/services/building-mamad",
    anchorText: "קומה עליונה",
    context: "inline",
    note: "Mandatory back-link from sub-page to commercial hub.",
  },
  {
    fromUrl: "/memad/koma-elyona",
    toUrl: "/memad/dira-bekoma",
    anchorText: "ממ״ד בדירה בקומה",
    context: "inline",
    note: "Inline link in alternatives section to sibling sub-page.",
  },
  {
    fromUrl: "/memad/koma-elyona",
    toUrl: "/guides/home-front-command-approval",
    anchorText: "אישורי פיקוד העורף",
    context: "inline",
    note: "Inline link in ishurim section to approval guide.",
  },
  // 2026-05-04: /memad/binyan-yashan/ sub-page launch (Gal 2, Phase 2.4).
  {
    fromUrl: "/memad/binyan-yashan",
    toUrl: "/services/building-mamad",
    anchorText: "בניין ישן",
    context: "inline",
    note: "Mandatory back-link from sub-page to commercial hub.",
  },
  {
    fromUrl: "/memad/binyan-yashan",
    toUrl: "/guides/mamad-cost",
    anchorText: "מחיר ממ״ד 2026",
    context: "inline",
    note: "Inline link in aluyot-yashan section to cost guide.",
  },
  {
    fromUrl: "/memad/binyan-yashan",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in metay-hitchadshut section to urban-renewal pillar.",
  },
  // 2026-05-04: /memad/binyan-meshutaf/ sub-page launch (Gal 2, Phase 2.3).
  {
    fromUrl: "/memad/binyan-meshutaf",
    toUrl: "/services/building-mamad",
    anchorText: "בניין משותף",
    context: "inline",
    note: "Mandatory back-link from sub-page to commercial hub.",
  },
  // 2026-05-04: /memad/dira-bekoma/ sub-page launch (Gal 2, Phase 2.2).
  {
    fromUrl: "/memad/dira-bekoma",
    toUrl: "/services/building-mamad",
    anchorText: "דירה בקומה",
    context: "inline",
    note: "Mandatory back-link from sub-page to commercial hub.",
  },
  {
    fromUrl: "/memad/dira-bekoma",
    toUrl: "/guides/home-front-command-approval",
    anchorText: "אישורי פיקוד העורף",
    context: "inline",
    note: "Inline link in ishurim section to approval guide.",
  },
  {
    fromUrl: "/memad/dira-bekoma",
    toUrl: "/services/room-reinforcement",
    anchorText: "שיפור מיגון",
    context: "inline",
    note: "Inline link in shipur-migun section to alternative service.",
  },
  // 2026-05-04: /memad/bayit-prati/ sub-page launch (Gal 2, Phase 2.1).
  {
    fromUrl: "/memad/bayit-prati",
    toUrl: "/services/building-mamad",
    anchorText: "בית פרטי",
    context: "inline",
    note: "Mandatory back-link from sub-page to commercial hub.",
  },
  {
    fromUrl: "/memad/bayit-prati",
    toUrl: "/guides/mamad-cost",
    anchorText: "מחיר ממ״ד 2026",
    context: "inline",
    note: "Inline link in ma-kolel section to detailed cost guide.",
  },
  {
    fromUrl: "/memad/bayit-prati",
    toUrl: "/guides/home-front-command-approval",
    anchorText: "אישורי פיקוד העורף",
    context: "inline",
    note: "Inline link in ishur-pakar section to approval guide.",
  },
];

/** All internal links pointing FROM a given URL. */
export function linksFrom(fromUrl: string): InternalLink[] {
  return internalLinks.filter((l) => l.fromUrl === fromUrl);
}

/** All internal links pointing TO a given URL. */
export function linksTo(toUrl: string): InternalLink[] {
  return internalLinks.filter((l) => l.toUrl === toUrl);
}

/**
 * Pages that have fewer than 2 inbound internal links — i.e. orphans
 * per technical.md §6 ("A page that is not linked from at least 2 other
 * pages is invisible to Google"). Returned as a list of toUrls with
 * their inbound count, sorted ascending.
 */
export function findOrphanCandidates(allPageUrls: string[]): Array<{
  url: string;
  inboundCount: number;
}> {
  return allPageUrls
    .map((url) => ({
      url,
      inboundCount: linksTo(url).length,
    }))
    .filter((entry) => entry.inboundCount < 2)
    .sort((a, b) => a.inboundCount - b.inboundCount);
}
