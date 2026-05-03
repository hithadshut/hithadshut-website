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
