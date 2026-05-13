/**
 * Single source of truth for Article schema dates per service page.
 * Values are pulled from `git log` (first commit = datePublished,
 * last commit = dateModified). See reports/week-1-review/SERVICE-LAYOUT-DIFF.md.
 *
 * To refresh after a content edit:
 *   git log --diff-filter=A --format="%aI" -- src/app/services/<slug>/page.tsx | tail -1   # published
 *   git log -1 --format="%aI" -- src/app/services/<slug>/page.tsx                          # modified
 */

export type ServiceSlug =
  | "building-mamad"
  | "room-reinforcement"
  | "prefab-mamad"
  | "private-construction"
  | "renovations"
  | "extensions";

export type ServiceDates = {
  datePublished: string;
  dateModified: string;
};

export const SERVICE_DATES: Record<ServiceSlug, ServiceDates> = {
  "building-mamad": {
    datePublished: "2026-04-15T10:51:59+03:00",
    dateModified: "2026-05-13T15:28:04+03:00",
  },
  "room-reinforcement": {
    datePublished: "2026-04-15T10:51:59+03:00",
    dateModified: "2026-05-13T15:28:04+03:00",
  },
  "prefab-mamad": {
    datePublished: "2026-04-15T10:51:59+03:00",
    dateModified: "2026-05-13T15:28:04+03:00",
  },
  "private-construction": {
    datePublished: "2026-04-15T13:11:25+03:00",
    dateModified: "2026-05-07T22:16:27+03:00",
  },
  "renovations": {
    datePublished: "2026-04-15T13:11:25+03:00",
    dateModified: "2026-05-07T22:16:27+03:00",
  },
  "extensions": {
    datePublished: "2026-04-15T13:11:25+03:00",
    dateModified: "2026-05-07T22:16:27+03:00",
  },
};

/**
 * Resolve dates from a service page path (e.g. "/services/building-mamad").
 * Returns undefined if the slug is unknown so the caller can fall back gracefully.
 */
export function getServiceDates(path: string): ServiceDates | undefined {
  const slug = path.replace(/^\/services\//, "").replace(/\/$/, "");
  return SERVICE_DATES[slug as ServiceSlug];
}
