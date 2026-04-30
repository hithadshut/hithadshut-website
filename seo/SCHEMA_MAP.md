# Schema Map

עמוד → סכימות פעילות → סטטוס אימות.

---

## Currently Active

| URL | Schemas | Source | Validated |
|---|---|---|---|
| / | Organization, WebSite | layout.tsx (JsonLd component) | needs Rich Results Test (W3) |
| /services/* | Service, BreadcrumbList, FAQPage | per-page emit | needs validation |
| /guides/* | Article (collective author), BreadcrumbList, FAQPage | per-page emit | needs validation |
| /compare/* | Article + FAQPage on some, BreadcrumbList | per-page (commit dc3b670 fixed dup FAQPage) | needs revalidation post-fix |
| /areas/[city] | likely BreadcrumbList + Service | per-page | audit W5 |
| /areas/[city]/[service] | likely BreadcrumbList + Service | per-page | audit W5 |
| /contact | likely BreadcrumbList | per-page | audit |
| /about | likely BreadcrumbList | per-page | W2 add Person when bio live |

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
