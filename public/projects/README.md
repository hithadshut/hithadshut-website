# /public/projects/ — Real Project Photos

This folder is the canonical location for real project photographs.
Filenames are referenced from `src/content/projects.ts`. Keep names
exactly as listed there — the page won't auto-discover other names.

## Required files (5 projects)

| Path | Subject |
|---|---|
| `private-villa-structure.jpg` | Two-story villa under construction (concrete frame + scaffolding) |
| `migunit-backyard-finished.jpg` | Finished migunit installed in a small backyard with synthetic grass |
| `extension-roof-pour.jpg` | Roof slab pour, rebar visible, fresh concrete |
| `mamad-foundation-rebar.jpg` | Foundation rebar layout for a mamad addition (before pour) |
| `mamad-walls-cast.jpg` | Reinforced concrete walls cast for an attached mamad |

## How to enable a project in the gallery

1. Save the JPG at the path above.
2. Open `src/content/projects.ts`.
3. Set `hasRealImage: true` for that project's entry.
4. Verify the page renders correctly: `npm run build`.

Until `hasRealImage` is `true`, the project card renders a description-
only placeholder — the description and metadata are still indexed, so
the structure works in advance of the upload.

## File rules

- JPG or WebP. Max 1.5MB per file (large enough for retina, small
  enough for mobile).
- Width ≥ 1200px for landscape, ≥ 900px for portrait.
- File names: kebab-case English. No spaces, no Hebrew, no IMG_1234.jpg.
- Alt text is defined in `src/content/projects.ts` per project — do
  not duplicate it in the file metadata.

## Privacy

- No street addresses. City + neighborhood at most.
- No identifying details of the home owner.
- No people in frame without explicit written consent.
