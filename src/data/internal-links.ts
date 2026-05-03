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
