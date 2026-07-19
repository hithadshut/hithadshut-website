# Weekly SEO/GEO/AEO cycle log

Append-only. Each cycle gets one section, newest first.

---

## Cycle 2026-07-17 — index ceiling break + Pikud Haoref cluster

*Note: this report was written 2026-07-17 but committed 2026-07-19 as
Task 0 of the following cycle, after a platform-side tool outage
prevented `git commit`/`git push` for the remainder of the 2026-07-17
session. Content below is unchanged from what was written that day.*

Normal weekly cycle, not a cap exception: last log entry was 2026-07-14
(cycle #3), and `git log` confirmed no deploy happened between then and
the start of this cycle (local `HEAD` == `origin/master` == `01e5ac9`
before starting).

### Precondition + scope guard

`git remote -v` -> `hithadshut/hithadshut-website` only. `.vercel/project.json`
confirmed `projectId: prj_1rOa8XSuwPLI47jovGS11kfICq8V`,
`projectName: hithadshut-website` before any commit. adrk-contamination
grep (repo-wide): clean. Tag `pre-cycle-2026-07-17` created and pushed at
`01e5ac9` for rollback reference.

### Stage 0 - learning + critical diagnosis correction

Read cycles #1-#3 in full. No open ledger items from those cycles
conflicted with this cycle's scope (none of the 6 files locked by
cycle #3's experiment lock, matured 2026-08-11, were touched).

**The brief's central premise for Change 1 was factually wrong, and this
was caught and corrected before any code changed.** The brief frames the
`/areas/` noindex as an undetected gate failure ("was never caught by
the gate battery"). Direct inspection of `src/content/indexable-geo.ts`
(its own header comment) and `src/content/areas.ts` (`noindexReason`
field) showed this was a **deliberate, documented anti-doorway-page
system**, built by a prior cycle (commit `0c8d1c0`, 2026-05-03),
specifically because `/areas/[city]/[service]` (28 cities x 4 services =
112 pages of rotated near-duplicate template copy) is, in that system's
own words, "the textbook doorway-pages pattern that Google's March-2026
update penalizes." Only 8 of 112 city x service pairs had been
hand-promoted to indexable after content-lead sign-off; 8 of 28 city
pages carried `noindexReason` for sub-800-word content. This was a
working quality gate, not a bug.

This conflict was surfaced to the operator directly, with the real
diagnosis and the doorway-pages risk explained, before Change 1 was
touched. **The operator confirmed: proceed exactly as briefed** - index
all ~112 pages immediately, accepting the risk the prior cycle's
architecture was built to avoid. That decision is what shipped. This is
logged here as the record of an owner override of a working safety gate,
not as a bug fix.

**Second finding:** `data/gsc/2026-07-17/` (the GSC export path the
brief cites in Stage A) does not exist in the repository. Only
`data/gsc/2026-07-13/` is present. Used the 2026-07-13 export as the
closest real data source (per prior cycles' practice of reusing the most
recent available export) and sanity-checked the brief's cited cluster
figures against it:

| Query | Brief (claimed 07-17) | Actual 2026-07-13 CSV |
|---|---|---|
| אישור ממד פיקוד העורף | pos 10.95, 102 impr | pos 10.85, 91 impr |
| רישוי פיקוד העורף | pos 8.06 | pos 8.12, 33 impr |
| פיקוד העורף היתר בנייה | pos 15.54 | pos 15.59, 34 impr |
| הג א אישור ממ ד טלפון | pos 16.18 | pos 16.91, 34 impr |
| מיגון חדר קיים | pos 32.6, 157 impr | pos 32.84, 155 impr |
| עלות מיגון חדר קיים | pos 14.75 | pos 14.98, 42 impr |
| חלופת שקד | 542 impr, pos 22.9, CTR 0.18% | 520 impr, pos 23.11, CTR 0.19% |
| חלופת שקד תיקון 139 | pos 8.77 | pos 8.85, 86 impr |

Close but not identical - consistent with natural ~4-day drift on a
real, slightly older export, not fabricated. "אישור פיקוד העורף" (the
brief's stated head term, 158 impr pos 23.01) and "מיגון לבית פרטי" (pos
16.13) do not appear as standalone rows in this CSV at all; nearby
queries exist but not those exact strings. Flagged here, not silently
corrected - the strategic direction (front-load "אישור פיקוד העורף",
address private-home framing) is sound regardless and was carried out
against the verified adjacent queries.

**Also caught during Change 1 fact-finding (Stage 0's mandated "gate
script" item):** the noindex-audit gate could not be implemented as a
`next start` + HTTP-fetch loop as first designed, because
`src/middleware.ts` 301-redirects any request whose Host header isn't
the canonical production domain - confirmed even with an explicit
`Host: hithadshut.co.il` override (curl -v showed the header was sent
correctly and still got redirected). Redesigned the gate to read
`next build`'s own prerendered HTML output directly instead of running a
server - more direct (checks exactly what ships) and sidesteps the
middleware entirely. See `scripts/noindex-audit.mjs`.

### Changes shipped

**1. [HIGH RISK] Remove noindex from all `/areas/` pages.** Owner
override, described above. `src/content/areas.ts`: removed the 8
`noindexReason` assignments (type field kept for future use).
`src/content/indexable-geo.ts`: `isGeoPairIndexable()` now always
returns `true` (signature and `INDEXABLE_GEO_PAIRS` allowlist kept as
historical record of which 8 pairs have hand-authored `geoIntros`/
`extendedNotes` - the page template still branches on this function to
decide whether to render that richer content vs. the rotated generic
intro). `sitemap.ts` needed no edit: both its filters (`!a.noindexReason`,
`isGeoPairIndexable`) now pass everything through as a natural
consequence. Truth pass on both `/areas/[city]/[service]` templates:
read in full, no invented partner names, project counts, case studies,
or reviews found - `localNote`/`extendedNotes`/`geoIntros` are factual
regional construction notes, not social proof. No "רשת שותפים" phrasing
needed since no partner-network claim existed to soften. Price check:
the `[service]` template's generic price paragraph never hardcodes the
room-reinforcement number; the `[city]` template's FAQ prices are for
building-mamad (160,000-230,000), a different service, not a conflict
with the 120,000-150,000 room-reinforcement canonical. Thin-content risk
accepted per owner decision; no bulk content generation this cycle
(budget) - differentiation roadmap proposed below.
**Rollback:** revert commit restoring the 8 `noindexReason` values and
`isGeoPairIndexable`'s conditional body (both are 2-file, single-purpose
diffs), then re-run `npm run indexnow -- --all` with the reverted
sitemap. Pre-cycle tag `pre-cycle-2026-07-17` at `01e5ac9`; pre-cycle
Vercel production deployment was the one serving before deployment
`B6sy5dZDbwccMYexdHPbpe29xnQ1` (this cycle's deploy).
**Ledger:** `EXP-AREAS-INDEX-2026-07-17`, maturation 2026-08-14. KPI:
indexed `/areas/*` count in GSC, impressions/clicks on `/areas/*`.

**2. [MEDIUM] Pikud Haoref cluster push,
`guides/home-front-command-approval`.** This page was already strong
(direct-answer block, TL;DR, KeyStats, a dedicated official-contact-
channels section, and a FAQ entry correctly answering the phone-intent
query with no fabricated number) - confirmed by reading it in full
before editing, so no content-section rewrite was needed. Scope was:
title/meta reordered to lead with the weakest cluster query ("אישור
פיקוד העורף", pos ~23) in the first ~15 characters while keeping
"רישוי" and "היתר בנייה" (the two strongest queries, pos ~8 and ~15.5);
`DATE_MODIFIED` bumped to 2026-07-17; a code comment added citing
oref.org.il/heb/contact-page/ (retrieved 2026-07-17) next to the
contact-channels section for audit-trail purposes, no visible-copy
change since the existing text was already correct (no phone number
published, links to the official page instead). Verified `AnswerBlock`'s
`includeFaqSchema` defaults to `false` on this page - no duplicate
FAQPage schema, confirmed by reading the component. Added the 2 inline
body-copy links that were genuinely missing (confirmed by grep before
adding - `guides/mamad-permit-exemption-2026` already linked here twice,
no edit needed there): one in `services/room-reinforcement`'s
`quickAnswer` block, one in `compare/mamad-vs-miggun-vs-migunit`'s body
prose. Added one more link card to the shared
`/areas/[city]/[service]/page.tsx` "מידע נוסף וקישורים מקצועיים" block -
a single template edit that fans out to all 112 now-indexed area pages.
**Ledger:** `EXP-PIKUD-CLUSTER-2026-07-17`. KPI: position of the 5
cluster queries, guide CTR.

**3. [MEDIUM] New page `/pinui-binui/yorshim-mechira`** - for heirs who
inherited a unit already inside an active/potential pinui-binui project
and are weighing sell-vs-stay. Verified before writing (not assumed)
that this doesn't cannibalize: `/pinui-binui/yorshim` covers heir
*rights* while staying in the project (tax exemption, malkod ha-yorshim,
contract clauses) with zero selling-decision content; `/pinui-binui/
mechirat-dira` is a general seller-bridge for any owner, heirs get one
FAQ line; `/madrichim/mechirat-dira-beyerusha` is inheritance-sale for
any building, explicitly not pinui-binui-specific. Confirmed via grep
that neither `kshishim` nor `sarvan` (which already cross-link to
`mechirat-dira` for "sell instead") linked to anything heir-specific.
1530 words. Structure: intent-separation opening (cross-links all 3
related pages), bekitzur direct-answer block, who-this-applies-to,
selling mechanics for an inherited unit mid-project, elder-tier-
transfer-then-sell interaction (reuses `yorshim`'s already-verified
70-74/75+ tiers, no 80+ tier, translated into "does selling forfeit an
inherited elevated-tier right"), a sell-before-vs-after-signing decision
table (non-committal framing, no outcome promises), a section
distinguishing co-heir-blocks-sale (private co-ownership dissolution,
cross-links the general inheritance-sale guide) from
neighbor-blocks-project (67% mechanic, cross-links chok-67/sarvan,
explicit that a neighbor's refusal never blocks the heir's own private
sale), a practical-steps checklist, and a tax section reusing only the
already-verified §4/§49ב(5) facts with a nevo.co.il citation. CTA reuses
`SellerLeadForm` with `defaultPropertyType="דירת ירושה"` and
`pageContext="pinui-binui-yorshim-mechira"` (both pre-existing, additive
props - confirmed unset on every other page, no regression) - buying
claim text matched verbatim to the already owner-verified wording on
`mechirat-dira` ("רוכשים דירות, בניינים ומגרשים במסלול ישיר... עובדים
מול משקיעים") rather than paraphrased. Trimmed from an initial 10 body
links down to exactly 7 (technical.md's per-page cap) by removing
redundant repeat links to the same target and referencing the guide by
name instead where a link had already appeared higher on the page.
Wired into `src/lib/anchors.ts` (namespace href + `LinkTarget` union +
all 4 keyed records), `src/data/internal-links.ts` (7 outbound + 4
inbound entries), `src/app/sitemap.ts`, `src/content/llms-txt-
manifest.ts`, the `/pinui-binui` pillar's "מדריכי המשך" children list
(pillar-links-to-all-children hard rule), and one additive cross-link
each on `yorshim`, `kshishim`, and `sarvan` (existing content on all 3
otherwise untouched).
**Ledger:** `EXP-INHERITANCE-PILLAR-2026-07-17`. KPI: indexed <=7 days,
first cluster impressions <=14 days, >=1 `seller_lead_submit` in 28 days.

**4. [MEDIUM] `services/room-reinforcement`, light touch.** Already met
most of the brief on inspection (canonical 120,000-150,000 price,
full comparison table, a "when reinforcement isn't enough" section) -
confirmed by reading the whole file before editing, so no rewrite was
done. Two additive edits: linked "אישור פיקוד העורף" inline in the
`quickAnswer` block (previously plain bold text, now links to the
guide - this single edit also satisfies Change 2's ask from the other
direction); added one new FAQ entry, "האם שיפור מיגון מתאים לבית פרטי?",
answered per CLAUDE.md hard rules #2/#3 (yes for this service in any
region, explicitly distinguishing from מיגונית which is not a
private-home solution in the center/coastal region), cross-referencing
the comparison page. No title/meta change - already leads with cost
intent, matching the brief's ask; no identifiable improvement without
new data.
**Ledger:** `EXP-ROOM-REINF-2026-07-17`.

**5. [LOW] `chalufat-shaked` CTR.** Title already led with the head term
("חלופת שקד 2026") and kept "תיקון 139"; description tightened for CTR
without new claims. `DATE_MODIFIED` bumped to 2026-07-17. Fixed a
pre-existing duplicate company-name-suffix bug on this exact title while
already rewriting it (old title ended `...הבנייה | התחדשות`, and the
root layout's title template already appends the full company name -
the same bug class cycle #3 found and fixed on 3 other files, flagged
there as a ~40-file sitewide cleanup candidate; this one file is now
fixed as a side effect of touching it this cycle, the other ~39 remain
out of scope). `tama-38/page.tsx` already linked to `/chalufat-shaked`
twice (confirmed via grep) - no edit needed there. `/pinui-binui` did
not link to it (confirmed via grep) - added one new sub-question block
("מה ההבדל מחלופת שקד") to the pillar's existing 9-block hub, matching
its established pattern, no restructuring of existing blocks.
**Ledger:** `EXP-SHAKED-CTR-2026-07-17`.

### Gate results

- `bash scripts/content-lint.sh` (5 gates, run standalone + via
  pre-commit hook on both commits): pass
- `npm run typecheck`: pass
- `npm run lint`: pass (0 errors; fixed 2 pre-existing-this-cycle
  unused-var warnings on `isGeoPairIndexable`'s params via a documented
  `eslint-disable` rather than dropping the params, so callers don't
  need edits if this ever reverts)
- `npm run build`: pass (199 routes, +1 for the new page)
- `node scripts/noindex-audit.mjs` (new permanent gate): **pass** - all
  182 sitemap URLs confirmed `index,follow` in the prerendered build
  output, including all 112 `/areas/*` URLs. `/admin/seo-dashboard`
  correctly sampled as `noindex` and correctly absent from the sitemap
  (negative-case check).
- JSON-LD parse check on all 10 changed/new + spot-checked pages: clean,
  all `Article`/`FAQPage`/`BreadcrumbList`/`Service`/`LocalBusiness`
  blocks parse. FAQPage schema on the new page verified to mirror the
  8 visible FAQ items exactly (count and text, programmatically diffed).
- adrk-contamination grep (repo-wide): clean
- Brokerage grep (תיווך/מתווך) on all changed files: clean - one draft
  instance of "לתיווך פרטני" was caught and reworded before commit (see
  new page, tzaadim section)
- Legal-facts grep: 67% pinui-binui threshold used correctly and
  consistently; 70-74/75+ elderly tiers used correctly, no 80+ tier
  introduced; zero occurrences of 60%/71ב anywhere in pinui-binui
  context repo-wide
  (one unrelated "80 ומעלה" hit in `machshvon-temurot`'s 0-100 scoring
  calculator is a false positive, not an elderly-tier claim, and that
  file is untouched this cycle)
- Fabrication/outcome-promise grep (מבטיחים/מובטח/בוודאות/נתחייב) on the
  new page: clean
- Price-audit: only 120,000-150,000 tied to room-reinforcement anywhere
  it's mentioned; the 160,000-220,000 figure that appears on that same
  page is in a comparison-table row explicitly labeled ממ״ד תקני (a
  different service), not a mislabel
- Disclaimer: `TrustBlock` default disclaimer present on the new page
- Previous-cycle-locked files (6-page cycle #3 experiment lock,
  maturation 2026-08-11): untouched, verified via `git diff` against
  those 6 paths after both commits - empty both times

### Indexing report

Sitemap: 182 URLs (up from 71 before Change 1's areas unblock - 182
total now includes 112 `/areas/*` URLs, all newly `index,follow`, plus
the new pillar page). `robots.txt` unchanged, still explicitly allows
Googlebot + the 14 listed AI-crawler user agents. `llms.txt` manifest
updated with the new page.

### Deploy evidence

Two commits pushed to `master`:
- `60087b8` - fix commit (noindex removal + `noindex-audit.mjs` +
  `package.json` wiring)
- `37e516a` - content commit (Changes 2-5 + new page + all linking/
  sitemap/manifest wiring)

GitHub commit status API confirms Vercel deployment
`B6sy5dZDbwccMYexdHPbpe29xnQ1` on `37e516a` completed successfully
("Deployment has completed", state `success`), confirming merge-to-
`master` auto-deploys to production on this project.

### Post-deploy verification

Live HTTPS fetch checks against production (no Playwright available in
this sandboxed session, same disclosed limitation as cycles #1-#3):

- All 6 brief-specified sample URLs + the new page + `chalufat-shaked` +
  `pinui-binui` hub: `200`, `<meta name="robots" content="index,
  follow"/>` confirmed on every one, including `areas/haifa` and
  `areas/kfar-saba/room-reinforcement` (both previously noindexed).
- New page: `<title>` correct (single company suffix, not duplicated),
  `dir="rtl" lang="he"` on `<html>`, canonical tag correct, all 6 JSON-LD
  blocks (`Organization`, `WebSite`, `Article`, 2x `BreadcrumbList`,
  `FAQPage`) parse cleanly, `SellerLeadForm`'s name field present in the
  rendered HTML (form renders; did not submit a real test lead to avoid
  creating a fake entry in the operator's inbox).
- `chalufat-shaked` live `<title>` confirmed single-suffix
  ("...ומה זה אומר | התחדשות בינוי ויזמות") - the duplicate-suffix fix
  is live.
- Live `/sitemap.xml`: 182 `<loc>` entries, 112 containing `areas/`, 1
  containing `yorshim-mechira` - matches the local build exactly.
- `/robots.txt`: AI-bot allowlist confirmed still present live.

No rollback needed.

### Protected-core change proposals

None. Change 1 is an explicit, disclosed owner override of an existing
protected mechanism (the doorway-page promotion gate), not a proposal to
change a protected fact or rule.

### Differentiation roadmap (report only, not built this cycle)

Per the accepted doorway-pages risk on Change 1: propose batch-adding
hand-authored `geoIntros`/`extendedNotes` (the mechanism already built
in `indexable-geo.ts`/`areas.ts`) to a handful of the highest-impression
now-indexed city x service pairs each future cycle, prioritized by
whichever pairs show real impressions in the next GSC pull, until the
full 112 have genuine city-specific differentiation rather than only the
8 pairs that have it today.

### Uncommitted-files triage

Unchanged again this cycle, same set flagged in cycles #1-#3's logs
(legal-page drafts, logo/OG-image assets, `/about/ofek-mazor`,
`/services/migunit`, scripts, planning docs, the full raw GSC CSVs kept
local/uncommitted per the public-repo reasoning already on record). No
new uncommitted files were left behind by this cycle - `git status`
after both commits shows only the same pre-existing pile.

### Owner tasks

1. In GSC: open the noindex coverage issue for `/areas/*` and click
   "Validate Fix" (אימות תיקון) now that the deploy is live.
2. In GSC URL Inspection, request indexing for the 10 highest-potential
   `/areas/` URLs (prioritizing cities with existing impressions per the
   brief): `jerusalem`, `givatayim`, `rishon-lezion`, `modiin`,
   `ramat-hasharon`, `ramat-gan`, plus `tel-aviv`, `haifa`, `netanya`,
   `petah-tikva`. Also request indexing for
   `https://hithadshut.co.il/pinui-binui/yorshim-mechira`.
3. Evidence collection: provide 1-2 real, anonymized permit/process
   examples (city, request type, duration, no client details) for future
   Pikud Haoref proof content, as asked in the brief.

---

## Cycle 2026-07-14 (cycle #3) — inheritance-seller pillar + F-cluster domination

Logged as the **third owner-approved exception to the one-deploy-per-week
cap** (approved in chat 14.07.2026), per the precondition in this cycle's
brief.

### Precondition + scope guard

- Verified cycle #2 (2026-07-14) is fully deployed and matches remote:
  local `HEAD` == `origin/master` == `6e2a926` before starting. Proceeded.
- Scope guard: `git remote -v` -> `hithadshut/hithadshut-website` only.
  Zero `adrk` reference anywhere in the repo (grep clean). Brokerage grep
  (תיווך/מתווך/broker) run against every new/changed file; one false
  positive found and fixed (see Gate results).

### Stage 0 - learning + experiment-lock verification

Read this file's cycle #1 and #2 entries in full. Confirmed the 6-page
experiment lock from cycle #2 (maturation 2026-08-11): `/pinui-binui`,
`/pinui-binui/temurot`, `/pinui-binui/chok-67`, `/pinui-binui/sarvan`,
`/pinui-binui/kshishim`, `/pinui-binui/mechirat-dira`. None of these were
touched - verified twice: once before starting (`git diff` against
`origin/master` was empty because no changes existed yet) and again as a
hard gate after every commit (`git diff pre-cycle-2026-07-14b HEAD --
<6 files>`), both times empty.

Verified `/pinui-binui/yorshim` and `/pinui-binui/yazam` hold **no**
active ledger entries (checked both cycle #1's and cycle #2's ledger
tables in this file) - both were pre-Experiment-Ledger pages (shipped
2026-05-03), so both were cleared for editing this cycle per the brief.

Reused `data/gsc/2026-07-13/דפים.csv` and `שאילתות.csv`. Sanity anchors,
0% deviation:

| Anchor | Brief | Actual (CSV) |
|---|---|---|
| `/pinui-binui/yazam` | ~134 imp, pos ~45.5 | 134 imp, pos 45.53 |
| "יזם פינוי בינוי" | ~109 imp, pos ~35.3 | 109 imp, pos 35.31 |

No conflicts found between the brief's canonical legal anchors (67%
pinui-binui threshold, 70-74/75+ senior tiers with no 80+ tier,
inheritance-is-not-a-transaction under §4, §49ב(5) heir exemption) and
this site's own already-shipped content on `/pinui-binui/yorshim` and
`/pinui-binui/mechirat-dira` - the new page's tax section reuses the same
verified §4/§49ב(5) citations already live on those two pages, rather
than re-deriving them.

### Changes shipped

**1. New page `/madrichim/mechirat-dira-beyerusha`** - general
inheritance-sale pillar (cluster C, not urban-renewal-specific). H1
"מכירת דירה בירושה: מס שבח, צו ירושה, וכל הדרכים למכור". Opens with an
explicit intent-separation paragraph distinguishing three related pages:
this one (selling ANY inherited apartment, any building), `/pinui-binui/
mechirat-dira` (selling before pinui-binui, for the potential), and
`/pinui-binui/yorshim` (heirs' rights inside an active pinui-binui
project) - with cross-links to both (permitted: links FROM new pages TO
locked pages). Sections: bekitzur short-answer block; hashlavim (tzav
yerusha steps, incl. a table of what can start before the order vs. what
must wait); mas-shevach (§4 not-a-transaction, §49ב(5) exemption,
partial-share sales, sourced to nevo.co.il inline); kama-yorshim (joint
sale / heskem chalukat izavon / peruk shituf for a holdout heir);
binyan-yashan (cross-links to the two locked-adjacent pages); bli-
lehitrotzetz (the 4 owner-verified claims only: direct purchase,
investor channel, occupied-apartment purchase, pre-tzav-yerusha
engagement with completion explicitly conditioned on the order); 8-item
visible FAQ + matching FAQPage schema. Reuses `SellerLeadForm` (2 mid-
page placements + 1 pre-footer) with a new optional `defaultPropertyType`
prop pre-selecting "דירת ירושה", and a new optional `pageContext` prop
tagging the `seller_lead_submit` GA4 event - both additive with safe
defaults, verified to leave `/pinui-binui/mechirat-dira`'s rendered
output and event payload unchanged (that page never passes either prop).
Wired into `src/lib/anchors.ts`, `src/data/internal-links.ts` (4 outbound
+ 3 inbound entries), `src/app/sitemap.ts`, `src/content/llms-txt-
manifest.ts`, and a new card in the `/madrichim` hub's "זכויות, ערבויות
וירושה" category (which also auto-updates the hub's `CollectionPage`
schema). Before: 0 baseline (new page). Expected KPI: indexed <=7 days,
first impressions on cluster-C queries <=14 days, >=1
`seller_lead_submit` in 28 days.

**2. `/pinui-binui/yazam` strengthening.** Baseline: page 134 imp, pos
45.53; query "יזם פינוי בינוי" 109 imp, pos 35.31. Added a bekitzur
short-answer block (previously the page opened straight into a plain
paragraph, no direct-answer chunk for AI extraction); a new "מי מחליט על
היזם" section clarifying the choice is the tenants' own decision via
נציגות דיירים and the same consent threshold as the project itself (links
`/pinui-binui/chok-67`); an expanded ערבויות paragraph on statutory deal-
content guarantee requirements linking `/pinui-binui/eravut`. Title/meta
rewritten to front-load the exact query: "יזם פינוי בינוי 2026: איך
בוחרים, 12 שאלות ודגלים אדומים" (was "איך בוחרים יזם פינוי בינוי 2026:
מדריך מלא"). The existing 12-question list, 8-red-flag list, comparison
table, background-check list, and 8-item FAQ (already covering the
target intent) were left as-is. Expected KPI: "יזם פינוי בינוי" pos 35.3
-> under 20 within 28 days.

**3. `/pinui-binui/yorshim` intent separation.** Verified no active
ledger entry (confirmed above). Added an explicit second opening
paragraph stating this page's scope is heirs **inside an active
pinui-binui project** specifically, with a cross-link to the new general
pillar for readers in the broader "just inherited an apartment" case.
Title/meta sharpened to lead with "בפרויקט פינוי בינוי פעיל" (was
generic "ירושת דירה בפינוי בינוי 2026"). Added the new pillar to this
page's `RelatedLinks`. No changes to the existing malkod/neyar-emda/
saifei-haskem/zechuyot-gil content - all already-verified facts kept
verbatim.

**4. GEO/AEO layer.** `llms.txt` manifest: new pillar added under
"התחדשות עירונית" (cross-cluster placement, since its heaviest links are
into that cluster even though its own scope is broader); yazam and
yorshim manifest descriptions updated to match their sharpened on-page
content. `Organization` schema `serviceType` gained "רכישת דירות תפוסות
(המוכר ממשיך לגור בדירה)" - added only because that claim is now visible
body content on the new page, per the schema-mirrors-visible-content
rule. `robots.txt` verified unchanged and still AI-bot-compliant (no
edit needed). The 5 conversational queries for the owner's GEO baseline
(see Owner tasks) are listed there.

**5. Indexing + hygiene audit.** Full report at
`docs/INDEXING_REPORT_2026-07-14b.md`: sitemap covers the new URL,
canonical/robots audit clean (all 4 touched/new pages `index:true` via
`buildMetadata()`), orphan check passed (new page has 3 recorded inbound
links), JSON-LD validated by a clean `npm run build` across all 198
routes. Uncommitted-files triage below.

### Bug found and fixed via post-deploy check (not one of the 5 changes)

Post-deploy `<title>` inspection on the 3 files this cycle touches showed
a **duplicate company-name suffix**: `... | התחדשות | התחדשות בינוי
ויזמות`. Root cause: the root layout's title template
(`%s | התחדשות בינוי ויזמות`, `src/app/layout.tsx`) already appends the
company name to every page; the new pillar's and the yazam/yorshim
rewritten titles additionally ended in `| התחדשות`, which pre-existed on
yazam/yorshim's *original* titles too (this cycle inherited the pattern
rather than introducing it, and then copied it into the new page). Fixed
in a follow-up commit (`cfdea2b`) for the 3 files this cycle controls;
verified live post-fix. **The same `| התחדשות` suffix pattern exists on
~40 other `page.tsx` files sitewide** (`grep -rn 'TITLE = "[^"]*|
התחדשות"' src/app --include=page.tsx` -> 40 matches) - pre-existing,
out of this cycle's scope (would blow the max-5-changes budget and
touches many files with no other reason to edit this cycle), **flagged
here as a follow-up cleanup candidate** for a dedicated future cycle.

### Ledger entries

Opening fresh entries, maturation **2026-08-11** (matches this cycle's
+28-day window from 2026-07-14; unrelated to the cycle #2 lock's
maturation on the same date - these are three different pages):

| Page | Baseline (2026-07-14) | Change | Expected | Maturation |
|---|---|---|---|---|
| `/madrichim/mechirat-dira-beyerusha` | new page, 0 baseline | new inheritance-sale pillar + form | indexed <=7 days, seller_lead_submit >=1 in 28 days | 2026-08-11 |
| `/pinui-binui/yazam` | pos 45.53 (page), "יזם פינוי בינוי" pos 35.31 | short-answer block + מי-מחליט section + ערבויות expansion + title/meta | "יזם פינוי בינוי" pos <20 | 2026-08-11 |
| `/pinui-binui/yorshim` | not separately tracked (pre-ledger page) | intent-separation paragraph + cross-link + title/meta sharpening | no ranking regression on existing "ירושה"-cluster queries; increased qualified traffic (in-project intent) | 2026-08-11 |

### Gate results

- `bash scripts/content-lint.sh` (5 gates, run standalone + via
  pre-commit hook on both commits): pass
- `npm run typecheck`: pass
- `npm run lint`: pass
- `npm run build`: pass (198 routes, +1 for the new page)
- Brokerage grep (תיווך/מתווך/broker) across new/changed files: **1 false
  positive found and fixed** - "תיווך של עורך דין ניטרלי" in the new
  page's multi-heir section used תיווך in its "mediation" sense, not real-
  estate brokerage, but was reworded to "ליווי" to keep the gate
  literal-string-clean. The only other hit (`src/lib/schema.ts`,
  "רישיון תיווך מקרקעין" - Ofek Mazor's real broker license number on the
  `/about/ofek-mazor` Person schema) is pre-existing, untouched this
  cycle, and refers to a real professional credential disclosure, not
  brokerage-as-a-service language.
- Fabrication grep (percentages/premiums/testimonials/counts) on the new
  page: clean
- Legal-source gate: every legal/tax statement on the new page carries an
  adjacent nevo.co.il source comment (§4, §49ב(5) לחוק מיסוי מקרקעין)
- adrk-contamination grep: clean (repo-wide)
- EXPERIMENT-LOCK gate: `git diff pre-cycle-2026-07-14b HEAD -- ` the 6
  locked files, run after every one of the 3 commits: **empty every
  time**
- Claims gate: grep for stronger promise language (מבטיחים/מובטח/
  בוודאות/נתחייב) on the new page: clean - only the 4 owner-verified
  claims appear, phrased with the required precision on the pre-tzav-
  yerusha engagement (completion explicitly conditioned on the order)
- Disclaimer: visible on the new page (mas-shevach section) plus the
  standard `TrustBlock` sitewide disclaimer on all 3 touched/new pages
- Previous-cycle files (all 6 locked pinui-binui pages,
  `/guides/home-front-command-approval`, `/services/room-reinforcement`)
  untouched this cycle

### Indexing report

See `docs/INDEXING_REPORT_2026-07-14b.md`.

### Post-deploy verification

No browser-automation tool (Playwright) was available this session -
`npx playwright` requires an offline package install this sandboxed
session couldn't complete, same limitation disclosed in cycles #1 and
#2's logs. Used live HTTPS fetch checks instead against production:

- All 6 checked URLs (new page, yazam, yorshim, madrichim hub,
  sitemap.xml, llms.txt) return `200`.
- New page: canonical tag correct, `Article` + `FAQPage` +
  `BreadcrumbList` JSON-LD all present exactly once, `dir="rtl"
  lang="he"` on `<html>`, lead form present, `tel:` link correct.
- Caught and fixed the title-suffix bug above via this exact check
  (`<title>` inspection) - the value of live verification over
  build-success alone.
- `/madrichim` hub card for the new page confirmed live.
- Confirmed `/pinui-binui/mechirat-dira` (locked) unchanged: `200`,
  identical `<title>` to its pre-cycle value.
- Homepage: `200`.

### Protected-core change proposals

None this cycle protected-core-wise. One **technical proposal** raised
above (title-template duplicate-suffix cleanup across ~40 pages) for a
dedicated future cycle - not a content-rule change, so not gated by the
protected-core process, but flagged here since it's sitewide.

### Uncommitted-files triage (report only, no commits taken)

Every pre-existing uncommitted file, unchanged again this cycle per the
"don't touch files outside this cycle's scope" guard, with a
recommendation for the owner to action next cycle:

| Item | Recommendation | Why |
|---|---|---|
| `public/manifest.webmanifest` | **Delete** | `src/app/manifest.ts`'s own comment states it explicitly replaces this static file. Dead/shadowed duplicate. |
| `public/llms.txt` | **Delete** | Shadowed by the live `src/app/llms.txt` dynamic route (confirmed both exist and collide on the same path); content is stale relative to the curated manifest. |
| `01-privacy-policy.md`, `02-terms-of-use.md`, `03-accessibility-statement.md`, `04-form-and-cookie-snippets.md` | Keep-pending | Look like drafts for the already-live `/privacy`, `/terms`, `/accessibility` routes. Needs a content-lead diff against the live pages before deciding integrate vs. discard. |
| `legal.zip`, `data/2026-07-13.zip` | Keep-pending / likely delete | `data/2026-07-13.zip` is the already-extracted, already-used (cycle #1) GSC export archive - safe to delete once owner confirms. `legal.zip` contents unverified this session; may relate to the 01-04 legal drafts above - review together. |
| `data/gsc/2026-07-13/*.csv` (7 files) | Keep-pending, do not commit | Full raw GSC export. Cycle #1's log already disclosed a deliberate decision to keep the full per-page/per-query breakdown local and uncommitted (only the aggregate `parsed.json` is committed) since this is a **public** repo. Same reasoning applies. |
| `OPERATIONAL_MANDATE_V2.md` | Recommend **commit** | `scripts/content-lint.sh`'s own header comment cites this file as its authority source ("per OPERATIONAL_MANDATE_V2.md חלק ו'"). It's load-bearing documentation for a script that's already committed and running in the pre-commit hook; leaving it uncommitted is an inconsistency risk for future sessions/maintainers. |
| `PERATIONAL_MANDATE_V2.md.txt` | **Delete** | Appears to be an accidental duplicate/typo'd save of `OPERATIONAL_MANDATE_V2.md` (missing leading "O", stray `.txt` extension). |
| `LOGO_V2_POST_DEPLOY.md`, `POST_DEPLOY_TASKS.md`, `ROAD_TO_NUMBER_1_ISRAEL.md` | Keep-pending | Planning/task-tracking docs from prior sessions; may still be load-bearing for upcoming work. Owner call. |
| `public/logo-transparent-full.png`, `public/logo-white-bg.jpg`, `public/logo-white-bg.png`, `public/og-image-old.jpg`, `public/og-image-with-logo.jpg` | Keep-pending | Not referenced anywhere in `src/` (grep clean) - currently orphaned assets, likely inputs for the pending work described in `LOGO_V2_POST_DEPLOY.md`. Not urgent. |
| `public/projects/*.svg` (5 files) | Keep-pending, low priority | `src/content/projects.ts` (already committed) references `.jpg` filenames for these same projects, not `.svg` - these are the known placeholder assets the file's own comments describe (`hasRealImage: false`, tracked as B-020), not a broken-reference risk. |
| `public/a1b2c3d4e5f678901234567890abcdef.txt` | Keep-pending | Filename pattern matches a search-console domain-verification token. Owner should confirm which webmaster tool this verifies before any action. |
| `scripts/_parity_audit.mjs`, `scripts/gsc-ping.ts`, `scripts/notify-indexnow.ts` | Keep-pending | Utility scripts from prior sessions, not part of this cycle's pipeline. Owner call on whether to commit. |
| `src/app/about/ofek-mazor/`, `src/app/apple-icon.tsx`, `src/app/compare/migunit-vs-mamad-muchan/`, `src/app/guides/architect-mamad-role/`, `src/app/icon.svg`, `src/app/icon.tsx`, `src/app/opengraph-image.tsx`, `src/app/services/migunit/`, `src/components/MamadCostCalculator.tsx` | Keep-pending | Same set flagged unchanged in cycles #1 and #2's logs - already build-clean and typecheck-clean, not shipped per each cycle's "max 1 new page" scope. Still awaiting a dedicated review/ship cycle. |

### Owner tasks

1. Submit these 4 URLs in GSC URL Inspection -> Request Indexing:
   - `https://hithadshut.co.il/madrichim/mechirat-dira-beyerusha`
   - `https://hithadshut.co.il/pinui-binui/yazam`
   - `https://hithadshut.co.il/pinui-binui/yorshim`
   - `https://hithadshut.co.il/madrichim`
2. GEO baseline - run these 5 conversational queries once each in
   ChatGPT/Gemini/Perplexity and save screenshots as the pre-measurement
   baseline for the 2026-08-11 verdict:
   - "ירשתי דירה עם האחים שלי ואנחנו רוצים למכור, מאיפה מתחילים"
   - "אפשר למכור דירה בירושה לפני צו ירושה"
   - "מי קונה דירות ישנות בישראל"
   - "איך בוחרים יזם לפינוי בינוי ומה השאלות שצריך לשאול"
   - "מי מחליט על היזם בפינוי בינוי"
3. Fresh GSC CSV export on 2026-07-21 into `data/gsc/2026-07-21/` for the
   next cycle's measurement (per cycle #2's already-standing ask, still
   open).
4. Approve/reject the uncommitted-files triage list above - in
   particular the two **Delete** recommendations
   (`public/manifest.webmanifest`, `public/llms.txt`, both confirmed
   shadowed/superseded by live dynamic routes) and the **commit**
   recommendation for `OPERATIONAL_MANDATE_V2.md`.
5. Decide on the sitewide title-template duplicate-suffix cleanup
   (~40 pages) flagged above - candidate for a dedicated technical cycle,
   not a content cycle.
6. Cycle #2's still-open ask: resolve the two flagged fact-check
   conflicts (60%/71ב consent threshold vs. the verified 67%; whether an
   80+ elderly tier exists) if there's an authoritative source this
   session's web search didn't find.

---

## Cycle 2026-07-14 (cycle #2) — pinui-binui cluster domination + seller bridge

Logged as an **owner-approved exception to the one-deploy-per-week cap**
(approved in chat 14.07.2026), per the precondition in this cycle's brief.

### Precondition + scope guard

- Verified the 2026-07-13 cycle (cycle #1) is fully deployed: local `HEAD`
  matches `origin/master` at `5e32d9c`, and its own log confirms a clean
  Vercel production deploy. Proceeded.
- Scope guard: `git remote -v` → `hithadshut/hithadshut-website` only, zero
  adrk reference anywhere in the repo or diff (grep clean). Brokerage grep
  (תיווך / מתווך / broker) clean on the new/changed content.

### Stage 0 — learning + critical fact-check

Read this file's cycle #1 entry and the Experiment Ledger it created (5
entries, maturation 2026-08-10; none of them concern the pinui-binui cluster,
so nothing to disturb). Re-used `data/gsc/2026-07-13/דפים.csv` and
`שאילתות.csv` (the full per-page/per-query CSVs, not just `parsed.json`'s
totals). **All sanity anchors matched the brief exactly, 0% deviation**:

| Anchor | Brief | Actual (CSV) |
|---|---|---|
| `/pinui-binui` | ~1792 imp, pos ~28.5, CTR ~0.56% | 1792 imp, pos 28.5, CTR 0.56% |
| `/pinui-binui/temurot` | ~1784 imp, pos ~13.1 | 1784 imp, pos 13.05 |
| `/pinui-binui/sarvan` | ~518 imp, pos ~33.6 | 518 imp, pos 33.61 |
| `/pinui-binui/kshishim` | ~424 imp, pos ~41.7 | 424 imp, pos 41.74 |
| "פינוי בינוי אחוז הסכמה" | ~104 imp, pos ~59 | 104 imp, pos 59.09 |
| "כמה זמן לוקח פינוי בינוי" | ~116 imp, pos ~46 | 116 imp, pos 46.32 |
| "פינוי בינוי קבלת 2 דירות" | ~106 imp, pos ~29.6 | 106 imp, pos 29.63 |
| "דייר סרבן" | ~123 imp, pos ~46.5 | 123 imp, pos 46.46 |
| "פינוי בינוי גיל 70" | ~117 imp, pos ~53.3 | 117 imp, pos 53.26 |
| "זכויות פינוי בינוי לקשישים" | ~75 imp, pos ~61.9 | 75 imp, pos 61.92 |

**Critical conflict found and resolved before writing any content** (per
the LEGAL CONTENT SOURCE RULE: "if verification fails, the specific claim
does not ship"):

1. The brief's own "verified anchors" section stated the pinui-binui
   consent threshold to sue a holdout as **"60% per section 71ב of the
   Land Law, distinct from Tikun 163."** Web search against nevo.co.il's
   own hosted text of חוק פינוי ובינוי (עידוד מיזמי פינוי ובינוי),
   תשס"ו-2006, kolzchut.org.il, and multiple independent law-firm sources
   all agree the actual, currently-effective threshold is **67%** (down
   from 80%, 2024 amendment) — matching this site's own already-verified,
   already-shipped content on `/pinui-binui`, `/pinui-binui/chok-67`, and
   `/pinui-binui/sarvan`, and matching CLAUDE.md's hard rule #4 ("pinui-binui
   compound, 67% to sue holdout"). Per CLAUDE.md ("if a user prompt
   conflicts with this file, this file wins"), **60% does not ship
   anywhere in this cycle's content.** Every new/changed section uses the
   verified 67% figure.
2. The brief also asserted "additional tiers exist for 75+ and 80+" for
   elderly rights. Web search (kolzchut.org.il, multiple law-firm
   summaries) confirms only **two** tiers exist: 70-74 (one alternative of
   three) and 75+ / terminally ill / נכות סיעודית רמה 5-6 (all three
   alternatives). **No 80+ tier exists** in the sources found. No 80+ tier
   was introduced; the existing, already-correct 70+/75+ structure on
   `/pinui-binui/kshishim` was kept and reused verbatim in the new page.

**Flagging both to the operator explicitly, as instructed**: if either
figure (60%/71ב, or an 80+ tier) came from a specific internal source the
operator has that wasn't found in this search, surface it and this cycle's
content will be corrected in a follow-up commit. Absent that, 67% and the
70+/75+ structure are what shipped.

### Changes shipped

**1. New page `/pinui-binui/mechirat-dira`** — seller-bridge page with
integrated lead form. H1 "מכירת דירה לפני פינוי בינוי: כמה שווה הפוטנציאל
ולמי מוכרים". Short-answer block, valuation-mechanism section (project
stage / certainty / expected תמורות, explicit "אין אחוז אחיד"), balanced
sell-vs-wait framework (links `/madrichim/luach-zmanim-pinui-binui-2026`
and `/pinui-binui/sarvan` for risk factors), heir section (ירושה אינה
מכירה לפי סעיף 4 לחוק מיסוי מקרקעין; פטור אפשרי לפי סעיף 49ב(5), תנאים
מצטברים; קישור למקור בגוף הטקסט לצד כל טענה), 70+/75+ section
cross-linking the rewritten `/pinui-binui/kshishim`, "who we buy from and
how" section using **only** the two owner-verified claims (direct
purchase of apartments/buildings/plots; works with investors — zero
תיווך/מתווך language anywhere), 7-question visible FAQ + matching
FAQPage schema, and a new `SellerLeadForm` component (name, phone, city,
property type, optional project stage) wired to the existing `/api/lead`
endpoint with a dedicated `seller_lead_submit` GA4 event
(`src/lib/analytics.ts`). Wired into `src/lib/anchors.ts` (new
`pinui-binui-mechirat-dira` LinkTarget), `src/data/internal-links.ts` (7
outbound + inbound entries), `src/app/sitemap.ts`,
`src/content/llms-txt-manifest.ts`, `Header.tsx` nav, and a homepage
banner card in the tools section.
Before: 0 baseline (new page). Expected KPI: indexed <=7 days, first
impressions on target queries <=14 days, >=1 `seller_lead_submit` in 28
days.

**2. Additive bridges on `/pinui-binui/temurot` and `/pinui-binui/chok-67`**
— below-the-fold-only sections (`git diff` confirms zero changes to
existing title/meta/H1/opening-answer text on both files, see gate
results below), each linking to the new page. Before: temurot 1784 imp,
pos 13.05, CTR 2.24%; chok-67 943 imp, pos 9.96, CTR 0.85% (verified
against `דפים.csv`; the site's strongest urban-renewal asset, matching
the operator brief). Expected KPI: internal CTR to new page >=2%; zero
ranking movement on these two pages at next CSV pull.

**3. Full rewrite of `/pinui-binui/kshishim`** — title/meta rewritten to
lead with "זכויות קשישים בפינוי בינוי" and "גיל 70 ומעלה" (was "פינוי
בינוי לקשישים 2026..."). Added a quick-facts comparison table (70-74 vs
75+/terminal-illness vs סיעוד 5-6) directly under the opening answer, and
a new respectful "או למכור" section cross-linking the new page. All
existing verified content (70+/75+ structure, non-waivable rights,
inheritance-of-rights section) kept as-is; no new facts introduced beyond
the already-shipped ones. Before: 424 imp, pos 41.74. Expected KPI:
tracked queries ("פינוי בינוי גיל 70" pos 53.3, "זכויות פינוי בינוי
לקשישים" pos 61.9) → under 25 within 28 days.

**4. Full rewrite of `/pinui-binui/sarvan`** — title/meta rewritten to
"דייר סרבן פינוי בינוי: חוק 67%, זכויות וההליך" (was "דייר סרבן בפינוי
בינוי: מי נחשב..."), targeting both "דייר סרבן" and "חוק פינוי בינוי
דייר סרבן". Added an FAQ entry on selling instead of fighting the claim,
and a new "אפשרות נוספת: למכור ולצאת מהמצב" section. The 60%/71ב threshold
was **not** used anywhere on this page; it already correctly stated 67%
before this cycle and still does. Before: 518 imp, pos 33.61. Expected
KPI: "דייר סרבן" (pos 46.5) and "חוק פינוי בינוי דייר סרבן" (pos 19.14) →
under 20 within 28 days.

**5. `/pinui-binui` pillar overhaul** — title/meta rewritten
("פינוי בינוי 2026: איך זה עובד, כמה זמן ומה מקבלים") for CTR (was 0.56%
at pos 28.5). Added a 9-block "sub-question hub" directly under the
existing AnswerBlock: each block is its own H2 (`ContentSection`), 2-3
quotable sentences, linking to the relevant deep page — תהליך (in-page
anchor), כמה זמן (`/madrichim/luach-zmanim-pinui-binui-2026`), כמה הסכמה
(67%, `/pinui-binui/chok-67`), תמורות + 2 דירות (`/pinui-binui/temurot`),
קשישים (`/pinui-binui/kshishim`), דייר סרבן (`/pinui-binui/sarvan`), יזם
(`/pinui-binui/yazam`), הסכם (`/madrichim/heskem-pinui-binui-shel-2-amudim`),
and the new "אפשרות נוספת: למכור" (`/pinui-binui/mechirat-dira`). URL,
existing deep sections, and all pre-existing inbound anchors preserved
unchanged. Before: 1792 imp, pos 28.5, CTR 0.56%. Expected KPI: pos <15,
CTR >=1.5%, sub-question queries → under 20, within 28 days.

### Ledger entries

The pillar, sarvan, and kshishim pages predate the Experiment Ledger
system entirely (published 2026-05-03/05-14, before cycle #1 created the
ledger on 2026-07-13) — **none held an active ledger entry**, so there is
nothing to mark INCONCLUSIVE-SUPERSEDED. Opening fresh entries for all 5
touched/new pinui-binui-cluster pages, maturation **2026-08-11**:

| Page | Baseline (2026-07-14) | Change | Expected | Maturation |
|---|---|---|---|---|
| `/pinui-binui/mechirat-dira` | new page, 0 baseline | new seller-bridge page + form | indexed <=7 days, seller_lead_submit >=1 | 2026-08-11 |
| `/pinui-binui` | pos 28.5, CTR 0.56%, 1792 imp | sub-question hub + title/meta | pos <15, CTR >=1.5% | 2026-08-11 |
| `/pinui-binui/sarvan` | pos 33.61, 518 imp | full rewrite + title/meta | pos <20 | 2026-08-11 |
| `/pinui-binui/kshishim` | pos 41.74, 424 imp | full rewrite + title/meta | pos <25 | 2026-08-11 |
| `/pinui-binui/temurot` | pos 13.05, CTR 2.24%, 1784 imp | additive bridge only | internal CTR to new page >=2%, zero rank movement | 2026-08-11 |
| `/pinui-binui/chok-67` | not in this cycle's CSV sanity set | additive bridge only | internal CTR to new page >=2%, zero rank movement | 2026-08-11 |

### Gate results

- `bash scripts/content-lint.sh` (5 gates): pass
- `npm run typecheck`: pass
- `npm run lint`: pass
- `npm run build`: pass (197 routes, +1 for the new page)
- Brokerage grep (תיווך/מתווך/broker) across the new page + all touched
  files: clean
- Valuation-fabrication grep (percentage/premium claims, "עשרות",
  "מאות", "לקוחות מרוצים"): clean
- Legal-source gate: every legal/tax statement on the new page carries an
  adjacent source comment (סעיף 4 and סעיף 49ב(5) לחוק מיסוי מקרקעין;
  67% and 70+/75+ figures already source-linked on the pages that state
  them)
- Additive-page integrity: `git diff` on `/pinui-binui/temurot` and
  `/pinui-binui/chok-67` shows **only** the new bridge section added in
  each file, nothing else touched
- adrk-contamination grep: clean (repo-wide)
- Disclaimer: visible on the new page (heir section) plus the standard
  `TrustBlock` disclaimer on all 6 touched pages
- Previous-cycle files (`/guides/home-front-command-approval`,
  `/services/room-reinforcement`) untouched this cycle

### Indexing report

See `docs/INDEXING_REPORT_2026-07-14.md`. Summary: all 6 touched/new URLs
resolve and prerender statically, sitemap covers all 6, robots.txt
unchanged and already AI-bot-compliant, llms.txt updated, orphan check
passed (new page has 7 recorded inbound links).

### Protected-core change proposals

None this cycle. The 60%/71ב and 80+-tier discrepancies above are
reported as fact-check findings, not proposed rule changes — no core
protected-fact table was edited.

### 6-cycle seller-cluster roadmap (report only, not built)

1. Generic selling hub: דירה / בניין / מגרש (non-pinui-binui-specific
   sale intent). Target queries: "למכור דירה ישנה", "מכירת בניין", "מכירת
   מגרש בישראל". Links into `/pinui-binui/mechirat-dira` as the
   urban-renewal-specific variant.
2. מכירת דירה בירושה pillar (general inheritance-sale hub, broader than
   the pinui-binui-specific heir section on the bridge page). Target:
   "מכירת דירת ירושה", "מס שבח דירת ירושה". Links back into the bridge
   page's heir section.
3. מכירת חלק מדירה בירושה / פירוק שיתוף (multi-heir partial-ownership
   sale/dissolution). Target: "פירוק שיתוף בדירה", "מכירת חלק בירושה".
   Links into both #2 and the bridge page's multi-heir paragraph.
4. כמה עולה למכור דירה (transaction-cost guide: mas shevach, broker fees
   if used, legal fees). Target: "עלות מכירת דירה", "מי משלם מס שבח".
   Links into the bridge page's tax FAQ entries.
5. מכירת דירה עם שוכר (occupied-property sale). Target: "מכירת דירה
   מושכרת", "פינוי שוכר לפני מכירה". Standalone, links into #4.
6. מכירת מגרש (land-specific sale guide, deeper than the bridge page's
   plot mention). Target: "מכירת מגרש", "היטל השבחה מגרש". Links into the
   bridge page's property-type framing.

### Owner tasks

1. Submit these 6 URLs in GSC URL Inspection → Request Indexing:
   - `https://hithadshut.co.il/pinui-binui/mechirat-dira`
   - `https://hithadshut.co.il/pinui-binui`
   - `https://hithadshut.co.il/pinui-binui/sarvan`
   - `https://hithadshut.co.il/pinui-binui/kshishim`
   - `https://hithadshut.co.il/pinui-binui/temurot`
   - `https://hithadshut.co.il/pinui-binui/chok-67`
2. GEO baseline: run "למכור דירה לפני פינוי בינוי", "כמה שווה דירה בפינוי
   בינוי", "זכויות קשישים בפינוי בינוי", "דייר סרבן פינוי בינוי" once
   each in ChatGPT/Gemini/Perplexity, save screenshots as the
   pre-measurement baseline for the 2026-08-11 verdict.
3. Fresh GSC CSV export on 2026-07-21 into `data/gsc/2026-07-21/` for the
   next cycle's measurement.
4. **Resolve the two flagged fact-check conflicts** (60%/71ב consent
   threshold vs. the verified 67%; whether an 80+ elderly tier exists
   beyond what was found) if there's a specific authoritative source for
   either that this session didn't find, so it can be corrected or
   confirmed in the next cycle.
5. Decide what to do with the pre-existing uncommitted files still
   sitting in the working tree from prior sessions (legal-page drafts,
   logo/OG-image assets, `/about/ofek-mazor`, `/services/migunit`,
   `/compare/migunit-vs-mamad-muchan`, `/guides/architect-mamad-role`,
   various scripts and `ROAD_TO_NUMBER_1_ISRAEL.md`/`OPERATIONAL_MANDATE_V2.md`
   family of files) — untouched and uncommitted again this cycle, per the
   "don't modify files outside this cycle's scope" guard.

---

## Cycle 2026-07-13 (cycle #1)

### Stage 0 — learning

No prior `docs/WEEKLY_SEO_LOG.md` or Experiment Ledger existed before this
run — treated as cycle #1 per owner direction. `docs/seo-operations.md`
(IndexNow / sitemap / llms.txt runbooks) already existed and was read for
infra context; it isn't a cycle log.

### Stage A — data ingestion

GSC export placed by owner at `data/2026-07-13.zip`. Windows `unzip`
mangled the Hebrew filenames (codepage mismatch); `Expand-Archive` in
PowerShell extracted them correctly. Moved to `data/gsc/2026-07-13/`.

Sanity check (all exact matches, 0% mismatch):

| Page | Expected | Actual |
|---|---|---|
| /guides/home-front-command-approval | ~2579 imp, pos ~17.7, CTR ~0.54% | 2579 imp, pos 17.7, CTR 0.54% |
| /services/room-reinforcement | ~411 imp, pos ~26.6 | 411 imp, pos 26.61 |
| /pinui-binui/eravut | ~421 imp, pos ~9.9, CTR 0% | 421 imp, pos 9.94, CTR 0% |

Full query-cluster figures cited in the operator's brief (אישור פיקוד העורף
156/23.17, מיגון חדר קיים 155/32.84, etc.) also cross-checked exactly
against `שאילתות.csv`. `דפים.csv` contains 189 rows, matching the expected
site page count. Parsed snapshot stored at
`data/gsc/2026-07-13/parsed.json` (totals + sanity-check provenance only;
raw CSVs kept local, not committed — see note below).

### Changes shipped (2 commits, pushed to `master`)

**1. `/guides/home-front-command-approval` overhaul.**
Before: 2579 impressions, position 17.7, CTR 0.54% (44% of site
impressions). Added "מי צריך אישור פיקוד העורף" section, a new
"ערוצי פנייה רשמיים לפקע״ר" section (previously no answer existed for the
~34-impression "הג״א אישור ממ״ד טלפון" query — could not verify a specific
phone number from a live primary source in this session, so the page
links to the official oref.org.il contact page and the oref-rishuy.org.il
portal instead of publishing an unverified number), a matching FAQ entry,
updated `dateModified`. Title/meta already led with "אישור פיקוד העורף";
left unchanged. Expected KPI: position <10, CTR 2%+ within 28 days.

**2. `/services/room-reinforcement` consolidation.**
Before: 411 impressions, position 26.6, and (discovered mid-cycle) the
page's own quick-answer and comparison table already disagreed with each
other (40,000-150,000 vs 50,000-120,000 vs a 130,000 threshold mention).
Applied `OWNER_VERIFIED_INPUT` canonical range 120,000-150,000 ₪ + מע״מ
through the single pricing source of truth (`src/lib/data/pricing.ts`),
fixed 4 stale occurrences on this page, and found + fixed 6 more stale
occurrences elsewhere on the site (`mamad-cost`, `mamad-vs-shelter`,
`building-mamad`) that a plain string grep for the exact old number
missed on first pass (different formatting: "40-150K ₪", "40-150 אלף ₪").
Added a permanent `content-lint.sh` gate (Gate 5) that fails the build if
either stale range reappears anywhere in the codebase. Title rewritten to
lead with cost intent ("מיגון חדר קיים מחיר 2026"). Expected KPI: cluster
position 26-33 → under 15.

**3. CTR metadata fixes (metadata-only, no layout changes).**
- `/pinui-binui/eravut` (421 imp, pos 9.9, CTR 0%): title/meta rewritten
  to lead with ערבות בנקאית intent.
- `/tama-38/sug-1` (265 imp, pos 13.9, CTR 0.38%): title already named
  תמ״א 38/1 explicitly; meta description sharpened.
- `/guides/mamad-cost` (289 imp, pos 16.4, CTR 0.35%): title/meta already
  lead with a concrete number ("מחיר ממ״ד 2026: 120,000-200,000 ש״ח לפי 4
  תרחישי בנייה"); left unchanged, no clear improvement to make without
  more data.

**4. New page `/guides/migun-solutions`.**
Decision-guide hub covering all four protection paths (ממ״ד תקני / שיפור
מיגון / ממ״ד יביל / מיגונית) plus מקלט, distinct in framing from the
existing `/compare/mamad-vs-miggun-vs-migunit` (which deliberately excludes
מקלט and focuses on a 3-way pricing table). Wired into
`src/lib/anchors.ts` (LinkTarget registry), `src/lib/site.ts` (homepage
guides grid + sitemap, since sitemap is generated from that array), and
`src/data/internal-links.ts` (declared graph). Inbound links added from
the homepage, the compare page, and `/services/room-reinforcement`.
Rationale: "פתרונות מיגון" (157 imp, pos 35.9) and "מקלט ביתי" (65 imp,
pos 46.9) had no page serving that intent well.

**5. Indexing + link-mesh audit.**
All 189 GSC page rows resolve to a real route (static or dynamic), no
missing pages. `robots.ts` already allows Googlebot + all required AI
bots. Updated `llms-txt-manifest.ts` for changes 1 and 4. Full 189-page
orphan crawl not run (out of this cycle's link-level scope); see
`docs/INDEXING_REPORT_2026-07-13.md`.

### Experiment Ledger (new entries, maturation 2026-08-10)

| Page | Baseline (2026-07-13) | Change | Expected | Maturation |
|---|---|---|---|---|
| /guides/home-front-command-approval | pos 17.7, CTR 0.54%, 2579 imp | content + FAQ additions | pos <10, CTR 2%+ | 2026-08-10 |
| /services/room-reinforcement | pos 26.6, CTR 0.97%, 411 imp | price fix + title rewrite | pos <15 | 2026-08-10 |
| /pinui-binui/eravut | pos 9.9, CTR 0%, 421 imp | title/meta only | CTR ≥1.5% at same position | 2026-08-10 |
| /tama-38/sug-1 | pos 13.9, CTR 0.38%, 265 imp | meta only | CTR ≥1.5% at same position | 2026-08-10 |
| /guides/migun-solutions | new page, 0 baseline | new page | indexed within 7 days, first impressions on "פתרונות מיגון" within 14 days | 2026-08-10 |

### Gate results

- `content-lint.sh` (5 gates, incl. new Gate 5): pass
- `npm run typecheck`: pass (after fixing 2 pre-existing errors found in
  uncommitted work already sitting in the tree — see below)
- `npm run lint`: pass
- `npm run build`: pass (196 routes generated, including the new page)
- JSON-LD parse check on all 6 touched/new pages: pass, no invalid JSON
- adrk-contamination grep, noindex-accidental grep, architecture-service
  claim grep: all clean
- Lighthouse: not run (no local Lighthouse tooling in this session);
  verify on Vercel deploy preview / PageSpeed Insights if needed
- Mobile/desktop visual QA: not performed locally (no browser automation
  tool available this session); covered instead by the live post-deploy
  fetch checks below

### Pre-existing repo state found (not part of this cycle's 5 changes)

The working tree already contained a large amount of **uncommitted,
untracked** work from prior sessions when this cycle started: a new
`/about/ofek-mazor` Person page, `/services/migunit`, and
`/compare/migunit-vs-mamad-muchan` pages, an `architect-mamad-role` guide,
new icon/logo/OG-image files, several legal-page drafts, and a few
scripts. Two of those uncommitted pages referenced schema exports
(`ofekPersonJsonLd`, `ofekImageJsonLd`) and link-registry entries
(`migunit`, `compare-migunit-muchan`) that didn't exist yet, which broke
`npm run typecheck` for the whole app. Added the missing exports/entries
(mirroring only facts already visible on those pages — license number,
phone, image — no new claims) so the build is green; did **not** commit
or ship any of those other pages, per the "max 1 new page" scope for this
cycle. They remain untouched, uncommitted, in the working directory for
separate review.

### Deploy verification

- Tag `pre-cycle-2026-07-13` created at `0d2e509` (the commit before this
  cycle) and pushed.
- 2 commits pushed to `master`: `11ff4ca` (fixes/audit) and `12e1a69`
  (content).
- GitHub commit status confirms Vercel built and deployed `12e1a69`
  successfully to production (aliased to hithadshut.co.il).
- Live post-deploy fetch checks (not full Playwright — no browser
  automation tool available this session) on all 5 touched/new URLs +
  homepage + /contact: correct Hebrew RTL rendering, no BIDI corruption,
  FAQ visible, correct single (non-duplicated) room-reinforcement price,
  new page's card present in the homepage guides grid, contact form +
  click-to-call functional. No rollback needed.

**Disclosure to owner (already surfaced and acknowledged mid-cycle):**
`git push` happened before repo visibility was checked. `hithadshut/hithadshut-website`
is a **public** GitHub repo. The fixes/audit commit includes
`data/gsc/2026-07-13/parsed.json`, an aggregate GSC snapshot (Israel
totals, device split, 3-page sanity-check figures — not the full
189-page/498-query breakdown, which was kept local and uncommitted).
Owner reviewed and chose to leave it as-is.

### Indexing report

See `docs/INDEXING_REPORT_2026-07-13.md`. Summary: sitemap covers all 5
touched/new URLs, robots.txt compliant, llms.txt updated. Indexing cannot
be forced; the list below is for GSC URL Inspection.

### Protected-core change proposals

None this cycle.

### Owner tasks

1. Submit these 5 URLs in GSC URL Inspection → Request Indexing:
   - `https://hithadshut.co.il/guides/home-front-command-approval`
   - `https://hithadshut.co.il/services/room-reinforcement`
   - `https://hithadshut.co.il/pinui-binui/eravut`
   - `https://hithadshut.co.il/tama-38/sug-1`
   - `https://hithadshut.co.il/guides/migun-solutions`
2. Provide licensed engineer/architect credentials for authority-intake.json
   if the architecture-services cluster is ever to be unlocked (still
   gated this cycle — untouched).
3. GEO baseline: run 8 Hebrew queries (e.g. "אישור פיקוד העורף לממ״ד",
   "מיגון חדר קיים עלות", "פתרונות מיגון", "מקלט ביתי מול ממ״ד") once each
   in ChatGPT, Gemini, Perplexity and save screenshots as the pre-measurement
   baseline for the 2026-08-10 verdict.
4. Decide what to do with the pre-existing uncommitted pages found in the
   working tree (about/ofek-mazor, migunit service + compare page,
   architect-mamad-role, new logo/icon assets, legal-page drafts) — none
   of it was touched or shipped this cycle.
