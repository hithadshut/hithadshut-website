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
    note: "PLANNED - currently plain text. Activates when /pinui-binui/eravut ships in Phase 3.",
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
  // 2026-05-04: Block A - inbound links from existing pinui-binui pages
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
  // 2026-05-04: /pinui-binui/machshvon-temurot/ launch (Gal 4, Phase J).
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar.",
  },
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in ma-bodek section (m² parameter explanation).",
  },
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in ma-lo-bodek limitations section.",
  },
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in ma-lo-bodek limitations section.",
  },
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושה דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in ma-lo-bodek limitations section.",
  },
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in ma-bodek (senior age) and ma-lo-bodek sections.",
  },
  {
    fromUrl: "/pinui-binui/machshvon-temurot",
    toUrl: "/pinui-binui/sarvan",
    anchorText: "דייר סרבן בפינוי בינוי",
    context: "inline",
    note: "Inline link in ma-lo-bodek limitations section.",
  },
  // 2026-05-04: Gal 3 Block A - inbound links for 6 new memad sub-pages
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
  // 2026-05-04: /madrichim/hashvaa-yazamim-mobililim-2026/ article launch (Gal 3, Phase 4.9).
  {
    fromUrl: "/madrichim/hashvaa-yazamim-mobililim-2026",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in opening section.",
  },
  // 2026-05-04: /madrichim/zechut-baalut-vs-zechut-yorshim/ article launch (Gal 3, Phase 4.8).
  {
    fromUrl: "/madrichim/zechut-baalut-vs-zechut-yorshim",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושה דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in opening section.",
  },
  {
    fromUrl: "/madrichim/zechut-baalut-vs-zechut-yorshim",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in zechuyot-gil-yorshim section.",
  },
  // 2026-05-04: /madrichim/matey-shipur-migun-adif/ article launch (Gal 3, Phase 4.7).
  {
    fromUrl: "/madrichim/matey-shipur-migun-adif",
    toUrl: "/services/room-reinforcement",
    anchorText: "שיפור מיגון",
    context: "inline",
    note: "Inline link in opening section.",
  },
  {
    fromUrl: "/madrichim/matey-shipur-migun-adif",
    toUrl: "/memad/binyan-yashan",
    anchorText: "ממ״ד לבניין ישן",
    context: "inline",
    note: "Inline link in metay-shipur-adif section.",
  },
  {
    fromUrl: "/madrichim/matey-shipur-migun-adif",
    toUrl: "/memad/bayit-prati",
    anchorText: "ממ״ד לבית פרטי",
    context: "inline",
    note: "Inline link in metay-mamad-adif section.",
  },
  // 2026-05-04: /madrichim/eravut-bankait-vs-chok-mehor/ article launch (Gal 3, Phase 4.6).
  {
    fromUrl: "/madrichim/eravut-bankait-vs-chok-mehor",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in opening section.",
  },
  // 2026-05-04: /madrichim/10-shealot-le-yazam/ article launch (Gal 3, Phase 4.5).
  {
    fromUrl: "/madrichim/10-shealot-le-yazam",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in opening section.",
  },
  {
    fromUrl: "/madrichim/10-shealot-le-yazam",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in shealot-4-6 section.",
  },
  {
    fromUrl: "/madrichim/10-shealot-le-yazam",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in shealot-9-10 section.",
  },
  // 2026-05-04: /madrichim/sof-tama-38-ma-laasot/ article launch (Gal 3, Phase 4.4).
  {
    fromUrl: "/madrichim/sof-tama-38-ma-laasot",
    toUrl: "/tama-38/pkia-2026",
    anchorText: "תמ״א 38 פוקעת",
    context: "inline",
    note: "Inline link in opening section.",
  },
  {
    fromUrl: "/madrichim/sof-tama-38-ma-laasot",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in alternativot section.",
  },
  {
    fromUrl: "/madrichim/sof-tama-38-ma-laasot",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in alternativot section.",
  },
  // 2026-05-04: /hashvaa/migun-vs-pinui/ comparison launch (Gal 3, Phase 4.3).
  {
    fromUrl: "/hashvaa/migun-vs-pinui",
    toUrl: "/services/room-reinforcement",
    anchorText: "שיפור מיגון",
    context: "inline",
    note: "Inline link in shtei-gishot section.",
  },
  {
    fromUrl: "/hashvaa/migun-vs-pinui",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in shtei-gishot section.",
  },
  {
    fromUrl: "/hashvaa/migun-vs-pinui",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in masgeret-haclata section.",
  },
  // 2026-05-04: /hashvaa/shaked-vs-tama/ comparison launch (Gal 3, Phase 4.2).
  {
    fromUrl: "/hashvaa/shaked-vs-tama",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in zechuyot-bniya section.",
  },
  {
    fromUrl: "/hashvaa/shaked-vs-tama",
    toUrl: "/tama-38/pkia-2026",
    anchorText: "תמ״א 38 פוקעת",
    context: "inline",
    note: "Inline link in maavar section.",
  },
  {
    fromUrl: "/hashvaa/shaked-vs-tama",
    toUrl: "/tama-38/sug-1",
    anchorText: "תמ״א 38/1",
    context: "inline",
    note: "Inline link in hechlatat-2026 section.",
  },
  // 2026-05-04: /hashvaa/pinui-vs-tama/ comparison launch (Gal 3, Phase 4.1).
  {
    fromUrl: "/hashvaa/pinui-vs-tama",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in metay-pinui section.",
  },
  {
    fromUrl: "/hashvaa/pinui-vs-tama",
    toUrl: "/tama-38",
    anchorText: "תמ״א 38",
    context: "inline",
    note: "Inline link in metay-tama section.",
  },
  {
    fromUrl: "/hashvaa/pinui-vs-tama",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in metay-tama section.",
  },
  {
    fromUrl: "/hashvaa/pinui-vs-tama",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in zechuyot-gil section.",
  },
  // 2026-05-04: /chalufat-shaked/ pillar launch (Gal 3, Phase 3.5).
  {
    fromUrl: "/chalufat-shaked",
    toUrl: "/tama-38/sug-2",
    anchorText: "תמ״א 38/2",
    context: "inline",
    note: "Inline link in opening - predecessor.",
  },
  {
    fromUrl: "/chalufat-shaked",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in opening - alternative.",
  },
  // 2026-05-04: /tama-38/sug-2/ sub-page launch (Gal 3, Phase 3.4).
  {
    fromUrl: "/tama-38/sug-2",
    toUrl: "/tama-38",
    anchorText: "תמ״א 38/2",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar.",
  },
  {
    fromUrl: "/tama-38/sug-2",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in 2026 section.",
  },
  {
    fromUrl: "/tama-38/sug-2",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in 2026 section.",
  },
  {
    fromUrl: "/tama-38/sug-2",
    toUrl: "/tama-38/pkia-2026",
    anchorText: "תמ״א 38 פוקעת",
    context: "inline",
    note: "Inline link in 2026 section.",
  },
  // 2026-05-04: /tama-38/sug-1/ sub-page launch (Gal 3, Phase 3.3).
  {
    fromUrl: "/tama-38/sug-1",
    toUrl: "/tama-38",
    anchorText: "תמ״א 38/1",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar.",
  },
  {
    fromUrl: "/tama-38/sug-1",
    toUrl: "/tama-38/pkia-2026",
    anchorText: "תמ״א 38 פוקעת",
    context: "inline",
    note: "Inline link in 2026 section.",
  },
  {
    fromUrl: "/tama-38/sug-1",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in alternatives section.",
  },
  // 2026-05-04: /tama-38/pkia-2026/ sub-page launch (Gal 3, Phase 3.2).
  {
    fromUrl: "/tama-38/pkia-2026",
    toUrl: "/tama-38",
    anchorText: "תמ״א 38",
    context: "inline",
    note: "Mandatory back-link from sub-page to pillar.",
  },
  {
    fromUrl: "/tama-38/pkia-2026",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in 3-efsharot section.",
  },
  {
    fromUrl: "/tama-38/pkia-2026",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in 3-efsharot section.",
  },
  // 2026-05-04: /tama-38/ pillar launch (Gal 3, Phase 3.1).
  {
    fromUrl: "/tama-38",
    toUrl: "/chalufat-shaked",
    anchorText: "חלופת שקד",
    context: "inline",
    note: "Inline link in opening - alternatives.",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in opening - cross-cluster alternative.",
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
  // 2026-05-04: Phase 5.1 Commit A - orphan-fix inbound links via RelatedLinks expansions.
  // Targets: /pinui-binui/machshvon-temurot, 6× /madrichim/*, 3× /hashvaa/*.
  {
    fromUrl: "/pinui-binui",
    toUrl: "/pinui-binui/machshvon-temurot",
    anchorText: "מחשבון פינוי בינוי",
    context: "related",
    note: "Pillar RelatedLinks card to calculator (orphan-fix).",
  },
  {
    fromUrl: "/pinui-binui",
    toUrl: "/madrichim/10-shealot-le-yazam",
    anchorText: "10 שאלות ליזם פינוי בינוי",
    context: "related",
    note: "Pillar RelatedLinks card to madrich article (orphan-fix).",
  },
  {
    fromUrl: "/pinui-binui",
    toUrl: "/madrichim/zechut-baalut-vs-zechut-yorshim",
    anchorText: "זכות בעלות מול זכות יורשים",
    context: "related",
    note: "Pillar RelatedLinks card to madrich article (orphan-fix).",
  },
  {
    fromUrl: "/pinui-binui",
    toUrl: "/hashvaa/pinui-vs-tama",
    anchorText: "פינוי בינוי מול תמ״א 38",
    context: "related",
    note: "Pillar RelatedLinks card to comparison page (orphan-fix).",
  },
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/pinui-binui/machshvon-temurot",
    anchorText: "כלי הערכה לפינוי בינוי",
    context: "related",
    note: "Sub-page RelatedLinks card to calculator (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/pinui-binui/yazam",
    toUrl: "/madrichim/10-shealot-le-yazam",
    anchorText: "מדריך שאלות לבחירת יזם",
    context: "related",
    note: "Sub-page RelatedLinks card to madrich article (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/pinui-binui/yazam",
    toUrl: "/madrichim/hashvaa-yazamim-mobililim-2026",
    anchorText: "השוואת יזמי פינוי בינוי",
    context: "related",
    note: "Sub-page RelatedLinks card to madrich article (orphan-fix).",
  },
  {
    fromUrl: "/pinui-binui/yorshim",
    toUrl: "/madrichim/zechut-baalut-vs-zechut-yorshim",
    anchorText: "ירושה בפינוי בינוי",
    context: "related",
    note: "Sub-page RelatedLinks card to madrich article (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/pinui-binui/eravut",
    toUrl: "/madrichim/eravut-bankait-vs-chok-mehor",
    anchorText: "ערבות בנקאית מול חוק מכר",
    context: "related",
    note: "Sub-page RelatedLinks card to madrich article (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/madrichim/sof-tama-38-ma-laasot",
    anchorText: "סוף תמ״א 38",
    context: "related",
    note: "Pillar RelatedLinks card to madrich article (orphan-fix).",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/hashvaa/pinui-vs-tama",
    anchorText: "מסלולי התחדשות עירונית",
    context: "related",
    note: "Pillar RelatedLinks card to comparison page (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/hashvaa/shaked-vs-tama",
    anchorText: "אלטרנטיבה לתמ״א 38",
    context: "related",
    note: "Pillar RelatedLinks card to comparison page (orphan-fix).",
  },
  {
    fromUrl: "/tama-38/pkia-2026",
    toUrl: "/madrichim/sof-tama-38-ma-laasot",
    anchorText: "מה דייר עושה אחרי תמ״א 38",
    context: "related",
    note: "Sub-page RelatedLinks card to madrich article (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/chalufat-shaked",
    toUrl: "/hashvaa/shaked-vs-tama",
    anchorText: "השוואה חלופת שקד תמ״א",
    context: "related",
    note: "Pillar RelatedLinks card to comparison page (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/services/room-reinforcement",
    toUrl: "/madrichim/matey-shipur-migun-adif",
    anchorText: "מתי שיפור מיגון עדיף",
    context: "related",
    note: "Service-page RelatedLinks card to madrich article (orphan-fix).",
  },
  {
    fromUrl: "/services/room-reinforcement",
    toUrl: "/hashvaa/migun-vs-pinui",
    anchorText: "שיפור מיגון מול פינוי בינוי",
    context: "related",
    note: "Service-page RelatedLinks card to comparison page (orphan-fix).",
  },
  {
    fromUrl: "/memad/binyan-yashan",
    toUrl: "/madrichim/matey-shipur-migun-adif",
    anchorText: "השוואת פתרונות מיגון",
    context: "related",
    note: "Sub-page RelatedLinks card to madrich article (orphan-fix, 2nd inbound).",
  },
  {
    fromUrl: "/memad/binyan-yashan",
    toUrl: "/hashvaa/migun-vs-pinui",
    anchorText: "מתי מיגון מספיק",
    context: "related",
    note: "Sub-page RelatedLinks card to comparison page (orphan-fix, 2nd inbound).",
  },
  // 2026-05-04: /madrichim/luach-zmanim-pinui-binui-2026/ article launch (Phase 5.1, Article 1).
  {
    fromUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in opening Quick Answer block.",
  },
  {
    fromUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in shlav-1-2 (developer selection) section.",
  },
  {
    fromUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in shlav-5-7 (demolition guarantees) section.",
  },
  {
    fromUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    toUrl: "/pinui-binui/sarvan",
    anchorText: "דייר סרבן בפינוי בינוי",
    context: "inline",
    note: "Inline link in goramim-mearichim (delay factors) section.",
  },
  {
    fromUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושה דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in goramim-mearichim (delay factors) section.",
  },
  // 2026-05-04: /madrichim/sheelot-shalemot-leyazam-pinui-binui/ article launch (Phase 5.1, Article 2).
  {
    fromUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    toUrl: "/madrichim/10-shealot-le-yazam",
    anchorText: "10 השאלות שכל דייר חייב לשאול יזם",
    context: "inline",
    note: "Inline link in opening Quick Answer block (sibling article).",
  },
  {
    fromUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    toUrl: "/pinui-binui/yazam",
    anchorText: "איך בוחרים יזם פינוי בינוי",
    context: "inline",
    note: "Inline link in opening Quick Answer block.",
  },
  {
    fromUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in ktegoria-2 (financial soundness) section.",
  },
  {
    fromUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    toUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    anchorText: "לוח זמנים פינוי בינוי",
    context: "inline",
    note: "Inline link in ktegoria-3 (execution experience) section.",
  },
  {
    fromUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in ktegoria-4 (contract terms) section.",
  },
  {
    fromUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in ktegoria-4 (contract terms) section.",
  },
  // 2026-05-04: /madrichim/heskem-pinui-binui-shel-2-amudim/ article launch (Phase 5.1, Article 3).
  {
    fromUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in opening section.",
  },
  {
    fromUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in prek-4 (compensations) section.",
  },
  {
    fromUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    toUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    anchorText: "לוח זמנים פינוי בינוי",
    context: "inline",
    note: "Inline link in prek-5 (timeline) section.",
  },
  {
    fromUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    toUrl: "/pinui-binui/eravut",
    anchorText: "ערבויות בפינוי בינוי",
    context: "inline",
    note: "Inline link in prek-8 (guarantees) section.",
  },
  {
    fromUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in prek-9 (special provisions) section.",
  },
  {
    fromUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    toUrl: "/pinui-binui/yorshim",
    anchorText: "ירושה דירה בפינוי בינוי",
    context: "inline",
    note: "Inline link in prek-9 (special provisions) section.",
  },
  // 2026-05-05: /madrichim/tax-meturgam-pinui-binui-2026/ article launch (Phase 5.1, Article 4).
  {
    fromUrl: "/madrichim/tax-meturgam-pinui-binui-2026",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Inline link in opening Quick Answer block.",
  },
  // 2026-05-05: /madrichim/dirot-temura-vs-dirot-mukdamot/ article launch (Phase 5.1, Article 5 - final).
  {
    fromUrl: "/madrichim/dirot-temura-vs-dirot-mukdamot",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in opening Quick Answer block.",
  },
  {
    fromUrl: "/madrichim/dirot-temura-vs-dirot-mukdamot",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in kashishim section.",
  },
  {
    fromUrl: "/madrichim/dirot-temura-vs-dirot-mukdamot",
    toUrl: "/madrichim/tax-meturgam-pinui-binui-2026",
    anchorText: "מסים בפינוי בינוי",
    context: "inline",
    note: "Inline link in malkodot (pitfalls) section, sibling article.",
  },
  // 2026-05-11: /madrichim hub page launch - hub links to all 11 child articles.
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    anchorText: "לוח זמנים לפינוי בינוי 2026",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    anchorText: "הסכם פינוי בינוי של 2 עמודים",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/tax-meturgam-pinui-binui-2026",
    anchorText: "מיסוי בפינוי בינוי 2026",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/dirot-temura-vs-dirot-mukdamot",
    anchorText: "דירות תמורה מול דירות מוקדמות",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/10-shealot-le-yazam",
    anchorText: "10 שאלות ליזם פינוי בינוי",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    anchorText: "25 שאלות שלמות ליזם",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/hashvaa-yazamim-mobililim-2026",
    anchorText: "השוואת יזמי פינוי בינוי 2026",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/eravut-bankait-vs-chok-mehor",
    anchorText: "ערבות בנקאית מול חוק מכר",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/zechut-baalut-vs-zechut-yorshim",
    anchorText: "זכות בעלות מול זכות יורשים",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/sof-tama-38-ma-laasot",
    anchorText: "סוף תמ״א 38: מה לעשות עכשיו",
    context: "related",
    note: "Hub card link to child article.",
  },
  {
    fromUrl: "/madrichim",
    toUrl: "/madrichim/matey-shipur-migun-adif",
    anchorText: "מתי שיפור מיגון עדיף על ממ״ד",
    context: "related",
    note: "Hub card link to child article.",
  },
  // 2026-05-11: /hashvaa hub page launch - hub links to all 3 child comparisons.
  {
    fromUrl: "/hashvaa",
    toUrl: "/hashvaa/pinui-vs-tama",
    anchorText: "פינוי בינוי מול תמ״א 38",
    context: "related",
    note: "Hub card link to child comparison.",
  },
  {
    fromUrl: "/hashvaa",
    toUrl: "/hashvaa/shaked-vs-tama",
    anchorText: "חלופת שקד מול תמ״א 38",
    context: "related",
    note: "Hub card link to child comparison.",
  },
  {
    fromUrl: "/hashvaa",
    toUrl: "/hashvaa/migun-vs-pinui",
    anchorText: "שיפור מיגון מול פינוי בינוי",
    context: "related",
    note: "Hub card link to child comparison.",
  },
  // 2026-05-11: Extra inbound links for previously orphaned madrichim articles.
  // Each needs ≥2 inbound links (hub provides 1, these provide 2nd+).
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/madrichim/dirot-temura-vs-dirot-mukdamot",
    anchorText: "דירות תמורה מול דירות מוקדמות",
    context: "related",
    note: "2nd inbound link for previously orphaned article (temurot → dirot comparison).",
  },
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/madrichim/dirot-temura-vs-dirot-mukdamot",
    anchorText: "ההבדל בין דירת תמורה לדירה מוקדמת",
    context: "related",
    note: "3rd inbound link for previously orphaned article (kshishim → dirot, relevant for seniors choosing apartments).",
  },
  {
    fromUrl: "/pinui-binui/eravut",
    toUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    anchorText: "הסכם פינוי בינוי: מה חייב להיות בו",
    context: "related",
    note: "2nd inbound link for previously orphaned article (eravut → heskem, guarantees are part of the agreement).",
  },
  {
    fromUrl: "/pinui-binui/chok-67",
    toUrl: "/madrichim/heskem-pinui-binui-shel-2-amudim",
    anchorText: "ניתוח הסכם פינוי בינוי",
    context: "related",
    note: "3rd inbound link for previously orphaned article (chok-67 → heskem, 67% consent triggers agreement signing).",
  },
  {
    fromUrl: "/pinui-binui/yazam",
    toUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    anchorText: "25 שאלות שלמות ליזם פינוי בינוי",
    context: "related",
    note: "2nd inbound link for previously orphaned article (yazam → sheelot-shalemot, developer due diligence).",
  },
  {
    fromUrl: "/madrichim/10-shealot-le-yazam",
    toUrl: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
    anchorText: "הגרסה המורחבת: 25 שאלות ליזם",
    context: "related",
    note: "3rd inbound link for previously orphaned article (sibling article cross-link).",
  },
  // 2026-05-11: Inbound links to /madrichim hub from key pages.
  {
    fromUrl: "/pinui-binui",
    toUrl: "/madrichim",
    anchorText: "מדריכי התחדשות עירונית",
    context: "related",
    note: "Pillar RelatedLinks inbound to madrichim hub.",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/madrichim",
    anchorText: "מדריכים מקצועיים",
    context: "related",
    note: "Pillar RelatedLinks inbound to madrichim hub.",
  },
  // 2026-05-11: Inbound links to /hashvaa hub from key pages.
  {
    fromUrl: "/pinui-binui",
    toUrl: "/hashvaa",
    anchorText: "השוואות מסלולי התחדשות",
    context: "related",
    note: "Pillar RelatedLinks inbound to hashvaa hub.",
  },
  {
    fromUrl: "/tama-38",
    toUrl: "/hashvaa",
    anchorText: "השוואות מסלולי התחדשות",
    context: "related",
    note: "Pillar RelatedLinks inbound to hashvaa hub.",
  },
  // 2026-07-13: weekly SEO/GEO cycle, Change 4 - new /guides/migun-solutions
  // decision hub. Outbound + inbound link graph per technical.md §6.
  {
    fromUrl: "/guides/migun-solutions",
    toUrl: "/services/building-mamad",
    anchorText: "בניית ממ״ד תקני",
    context: "inline",
    note: "New page outbound link, cycle 2026-07-13.",
  },
  {
    fromUrl: "/guides/migun-solutions",
    toUrl: "/services/room-reinforcement",
    anchorText: "מיגון חדר קיים",
    context: "inline",
    note: "New page outbound link, cycle 2026-07-13.",
  },
  {
    fromUrl: "/guides/migun-solutions",
    toUrl: "/services/prefab-mamad",
    anchorText: "ממ״ד מוכן",
    context: "related",
    note: "New page RelatedLinks, cycle 2026-07-13.",
  },
  {
    fromUrl: "/guides/migun-solutions",
    toUrl: "/compare/mamad-vs-miggun-vs-migunit",
    anchorText: "ממ״ד מול מיגון מול מיגונית",
    context: "inline",
    note: "New page outbound link, cycle 2026-07-13.",
  },
  {
    fromUrl: "/guides/migun-solutions",
    toUrl: "/guides/home-front-command-approval",
    anchorText: "מערכת הרישוי המקוונת של פיקוד העורף",
    context: "inline",
    note: "New page outbound link, cycle 2026-07-13.",
  },
  {
    fromUrl: "/guides/migun-solutions",
    toUrl: "/guides/mamad-vs-shelter",
    anchorText: "ממ״ד מול מקלט",
    context: "inline",
    note: "New page outbound link, cycle 2026-07-13.",
  },
  {
    fromUrl: "/",
    toUrl: "/guides/migun-solutions",
    anchorText: "פתרונות מיגון",
    context: "related",
    note: "Homepage guides grid card (src/lib/site.ts guides[]), cycle 2026-07-13.",
  },
  {
    fromUrl: "/compare/mamad-vs-miggun-vs-migunit",
    toUrl: "/guides/migun-solutions",
    anchorText: "פתרונות מיגון: מדריך החלטה",
    context: "related",
    note: "Compare-page RelatedLinks inbound, cycle 2026-07-13.",
  },
  {
    fromUrl: "/services/room-reinforcement",
    toUrl: "/guides/migun-solutions",
    anchorText: "ארבעת פתרונות המיגון",
    context: "related",
    note: "Room-reinforcement RelatedLinks inbound, cycle 2026-07-13. Also added home-front-command-approval to this page's RelatedLinks (Change 2).",
  },
  // 2026-07-14: weekly SEO/GEO cycle, seller-bridge page launch
  // (/pinui-binui/mechirat-dira) + pillar/sarvan/kshishim overhauls.
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/pinui-binui",
    anchorText: "פינוי בינוי",
    context: "inline",
    note: "Mandatory back-link from new page to pillar, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/pinui-binui/temurot",
    anchorText: "תמורות בפינוי בינוי",
    context: "inline",
    note: "Inline link in kama-shave (valuation mechanism) section, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/pinui-binui/machshvon-temurot",
    anchorText: "מחשבון פינוי בינוי",
    context: "inline",
    note: "Inline link in kama-shave section, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/madrichim/luach-zmanim-pinui-binui-2026",
    anchorText: "לוח הזמנים לפינוי בינוי 2026",
    context: "inline",
    note: "Inline link in mochrim-o-mechakim (sell-vs-wait) section, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/pinui-binui/sarvan",
    anchorText: "דייר סרבן",
    context: "inline",
    note: "Inline link in mochrim-o-mechakim risk-factors section, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/pinui-binui/kshishim",
    anchorText: "זכויות קשישים בפינוי בינוי",
    context: "inline",
    note: "Inline link in kshishim section, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/mechirat-dira",
    toUrl: "/contact",
    anchorText: "צור קשר",
    context: "related",
    note: "RelatedLinks card, cycle 2026-07-14.",
  },
  // Inbound to the new page from the pillar + additive bridges + rewrites.
  {
    fromUrl: "/pinui-binui",
    toUrl: "/pinui-binui/mechirat-dira",
    anchorText: "מכירת דירה לפני פינוי בינוי",
    context: "inline",
    note: "Pillar overhaul: 'מדריכי המשך' box + sub-question hub (sq-mechira) + RelatedLinks, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/temurot",
    toUrl: "/pinui-binui/mechirat-dira",
    anchorText: "מכירת דירה לפני פינוי בינוי",
    context: "inline",
    note: "Additive bridge section (o-lemchor), cycle 2026-07-14. Existing text/H1/meta/opening answer untouched.",
  },
  {
    fromUrl: "/pinui-binui/chok-67",
    toUrl: "/pinui-binui/mechirat-dira",
    anchorText: "מכירת דירה לפני פינוי בינוי",
    context: "inline",
    note: "Additive bridge section (o-lemchor), cycle 2026-07-14. Existing text/H1/meta/opening answer untouched.",
  },
  {
    fromUrl: "/pinui-binui/kshishim",
    toUrl: "/pinui-binui/mechirat-dira",
    anchorText: "מכירת דירה לפני פינוי בינוי",
    context: "inline",
    note: "Full overhaul: new 'או למכור' section + RelatedLinks, cycle 2026-07-14.",
  },
  {
    fromUrl: "/pinui-binui/sarvan",
    toUrl: "/pinui-binui/mechirat-dira",
    anchorText: "מכירת דירה לפני פינוי בינוי",
    context: "inline",
    note: "Full overhaul: new 'או למכור' section + FAQ entry + RelatedLinks, cycle 2026-07-14.",
  },
  {
    fromUrl: "/",
    toUrl: "/pinui-binui/mechirat-dira",
    anchorText: "שוקלים למכור דירה בבניין ישן?",
    context: "related",
    note: "Homepage tools-section banner card, cycle 2026-07-14.",
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
 * Pages that have fewer than 2 inbound internal links - i.e. orphans
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
