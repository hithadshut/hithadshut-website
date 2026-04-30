# Schema Map

עמוד → סכימות פעילות → סטטוס אימות.

---

## Currently Active (post-W3)

| URL | Schemas | Source | Validated |
|---|---|---|---|
| / | Organization, WebSite, Person (Ofek inline via FounderSection) | layout.tsx + components | needs Rich Results Test |
| /about | Organization | per-page | OK |
| /about/ofek-mazor | Organization, Person, BreadcrumbList | W2 new page | needs RR Test |
| /services/* | Service, BreadcrumbList, FAQPage | ServicePageLayout (FAQ default emits FAQPage) | needs validation |
| /guides/mamad-cost | Article(author=Person), Person, BreadcrumbList, FAQPage | per-page | needs validation |
| /guides/mamad-process | Article(author=Person), Person, HowTo, FAQPage (via FAQ default) | per-page | needs validation |
| /guides/home-front-command-approval | Article(author=Person), Person, FAQPage | per-page | needs validation |
| /guides/choosing-mamad-contractor | Article(author=Person), Person, FAQPage | per-page | needs validation |
| /guides/mamad-mistakes | Article(author=Person), Person, FAQPage | per-page | needs validation |
| /compare/mamad-vs-miggun-vs-migunit | FAQPage, BreadcrumbList | per-page | OK |
| /compare/mamad-tzamud-vs-hitzoni | FAQPage, BreadcrumbList | per-page | OK |
| /compare/migunit-vs-mamad-muchan | FAQPage, BreadcrumbList | per-page | OK |
| /compare/katlan-rashum-vs-hafer | Article(author=Person), Person, FAQPage, BreadcrumbList | per-page | needs validation |
| /areas | FAQPage | per-page | OK |
| /areas/[city] | LocalBusiness, Service, FAQPage, BreadcrumbList | per-page | audit W4/W5 |
| /areas/[city]/[service] | LocalBusiness, Service, FAQPage, BreadcrumbList | per-page | audit W5 |

## FAQ schema audit (W3 result)
✓ All pages with visible FAQ emit exactly one FAQPage. No duplicates (the dup-fix from commit dc3b670 holds — pages with `includeSchema={false}` on `<FAQ>` correctly emit `faqJsonLd(faqs)` separately).

## Planned (by week)

### W2
- [ ] Person schema on /about/ofek-mazor (with sameAs once Ofek confirms social URLs)
- [ ] Article author switch from collective (`#organization`) to Person (`#ofek-mazor`) on guides

### W3
- [ ] Audit FAQPage emission on every page that visually shows FAQ (use Rich Results Test on each)
- [ ] Add datePublished + dateModified to every Article (currently exists in helper, verify per-page passes them)

### W4
- [ ] LocalBusiness schema on / (alongside Organization + WebSite)
- [ ] sameAs populated on Organization once GBP / social profiles exist

### W6
- [ ] Quantitative facts in Article schema where possible (mainEntity → HowTo with steps; or `about` → DefinedTerm)

### W7
- [ ] ImageObject schema on /projects images
- [ ] CreativeWork or Project schema (custom) per project case study

### W8
- [ ] Review schema (per real review) + AggregateRating only when ≥5 real reviews live

### W12
- [ ] Final validation pass: every page passes Google Rich Results Test with no errors, only warnings allowed

## Anti-patterns to avoid
- ❌ AggregateRating without real reviews
- ❌ Recipe / Product / Course / Event (irrelevant to services)
- ❌ Multiple Organization schemas with conflicting `@id`
- ❌ Article datePublished in future
- ❌ FAQPage where the visible page does not show those FAQs verbatim
- ❌ HowTo where steps are marketing prose, not actionable

## Validation tools
- https://search.google.com/test/rich-results
- https://validator.schema.org/
- Bing Webmaster Tools structured data inspector (post-W1 setup)
