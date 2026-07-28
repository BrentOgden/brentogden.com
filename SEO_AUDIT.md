# BrentOgden.com SEO Audit and Update

Audit date: July 27, 2026  
Canonical site: `https://brentogden.com`

## Scope reviewed

The audit covered every active React route, dynamic project case study, shared navigation and card component, root HTML metadata source, generated route HTML, canonical URL, social preview tag, JSON-LD graph, sitemap entry, robots directive, Netlify redirect/rewrite rule, manifest, indexable utility page, image alternative text, and visible heading structure.

Active canonical routes:

| Route | Page type | Structured data |
| --- | --- | --- |
| `/` | Portfolio home | `WebSite`, `Person`, `WebPage` |
| `/projects` | Project collection | `WebSite`, `Person`, `CollectionPage`, `ItemList` |
| `/about` | Profile/about page | `WebSite`, `Person`, `ProfilePage` |
| `/contact` | Contact page | `WebSite`, `Person`, `ContactPage` |
| `/projects/:id` | Nine project case studies | `WebSite`, `Person`, `WebPage`, `CreativeWork`, `BreadcrumbList` |

The legacy `Projects_old.jsx` file was reviewed but is not imported or routed, so it remains outside the indexable site and was intentionally left unchanged.

## Problems found

### Critical and high priority

- Every route inherited the same generic document title and had no route-specific meta description.
- Canonical tags, Open Graph tags, Twitter card tags, and route-level JSON-LD were absent.
- Dynamic case studies returned the same initial HTML metadata as the home page, limiting previews and route-specific discovery by non-JavaScript crawlers.
- The deployment used a catch-all `200` rewrite, so unknown URLs could return an indexable soft-404 response.
- `robots.txt` declared a sitemap that did not exist.
- The primary contact URL was `/contactform`, rather than a cleaner canonical `/contact` route.
- The FantasyCentral gallery link pointed to `/projects/fantasy-central`, but the project data uses `/projects/fantasycentral`.
- The old `public/index.html` contained nested duplicate HTML documents, two `#root` elements, an incorrect `John Doe` author, Create React App syntax in a Vite project, and a conflicting metadata source.

### Medium priority

- The projects page had no semantic `h1`; the contact page started with an `h2`.
- Several project links were buttons or invalid nested interactive elements, making their destinations less explicit to crawlers and assistive technology.
- Several preview and screenshot images used generic alternative text.
- The animated About-page introduction exposed only partial text until the animation completed.
- The web app manifest had blank identity fields and a theme that did not match the site.
- Resume PDFs and form-success pages had no explicit indexing controls.
- There was no branded 1200 × 630 social preview image.

## Changes made

### Route metadata and canonicalization

- Added a shared `SEO` component that updates the title, description, author, robots, Googlebot, canonical, Open Graph, Twitter, and JSON-LD tags after client-side navigation.
- Added a centralized `src/config/seo.mjs` source for the site URL, route copy, social image, Person/WebSite entities, page schemas, collection schema, case-study schema, and breadcrumbs.
- Added unique titles and descriptions for all 13 canonical URLs.
- Established `/contact` as the canonical contact route while retaining a permanent redirect from `/contactform`.
- Added a permanent redirect for the former FantasyCentral slug.
- Added a noindex client-side project-not-found state and a noindex wildcard 404 page.

### Static crawler and social-preview support

- Added `scripts/generate-seo-pages.mjs` to create route-specific HTML entry files before development and production builds.
- Added multi-page Vite inputs for the home, projects, about, contact, and all nine case-study entry files.
- Added complete Open Graph and Twitter cards, including image type, dimensions, and descriptive image text.
- Created a branded 1200 × 630 `public/og-image.png` for primary social previews.
- Added project-specific preview images and `article` Open Graph types for case studies.
- Preserved the existing Google Analytics and Search Console verification values in every generated entry file.

### Structured data

- Added a consistent `WebSite` and `Person` entity graph across the site.
- Added `ProfilePage` markup to About, `ContactPage` markup to Contact, and `CollectionPage` plus `ItemList` markup to Projects.
- Added a `CreativeWork` and `BreadcrumbList` to every case study.
- Added a stable public profile image for the `Person` entity.

### Crawl and deployment controls

- Generated `public/sitemap.xml` containing exactly the 13 canonical URLs.
- Updated `robots.txt` to allow crawling and declare the sitemap.
- Replaced the broad SPA fallback with explicit Netlify rewrites for every canonical route and a true `404` response for unknown URLs.
- Forced clean-route rewrites so the `/projects` directory cannot shadow the canonical collection URL.
- Disabled Netlify Pretty URLs in `netlify.toml` to keep the extensionless, non-trailing-slash canonical policy stable.
- Added noindex headers for source and built resume PDF locations.
- Added noindex directives to `success.html` and `404.html`.
- Removed the obsolete conflicting `public/index.html`.

### Content semantics and crawlability

- Added one visible `h1` to each active top-level page while preserving existing wording and styling.
- Replaced invalid nested button/link combinations with valid crawlable links while preserving the existing panel behavior.
- Corrected the FantasyCentral case-study destination.
- Improved project preview and screenshot alternative text.
- Added accessible labels to icon-only social links.
- Exposed the complete About-page typewriter copy to screen readers and crawlers while retaining the visible animation.
- Added intrinsic dimensions and decoding/loading hints to relevant images.

### Manifest and icons

- Completed the web manifest with the portfolio name, short name, description, scope, start URL, display mode, theme colors, and maskable icon purposes.
- Copied the existing favicon and app-icon files into `public` so every referenced URL is emitted by Vite.

## Canonical URL inventory

1. `https://brentogden.com/`
2. `https://brentogden.com/projects`
3. `https://brentogden.com/about`
4. `https://brentogden.com/contact`
5. `https://brentogden.com/projects/denver-socials`
6. `https://brentogden.com/projects/b-squared-solutions`
7. `https://brentogden.com/projects/mile-high-mashup`
8. `https://brentogden.com/projects/fantasycentral`
9. `https://brentogden.com/projects/psp-compass`
10. `https://brentogden.com/projects/sustainable-geospatial`
11. `https://brentogden.com/projects/a-denver-roofing`
12. `https://brentogden.com/projects/jb-simply-clean`
13. `https://brentogden.com/projects/ranger-golden-stud`

## Validation performed

Passed:

- `node scripts/generate-seo-pages.mjs` — generated metadata for 13 canonical URLs.
- `node scripts/validate-seo.mjs` — validated 13 route entry files and nine case studies.
- TypeScript transpilation syntax check — passed for 25 JavaScript/JSX modules.
- Asset, manifest, sitemap XML, route-entry, local-reference, social-image-dimension, and active-heading validation — passed for all 13 route HTML files.
- Canonical/title/description uniqueness, Open Graph/Twitter completeness, JSON-LD parsing, sitemap-to-canonical parity, redirect coverage, PDF noindex rules, 404 noindex rules, manifest identity, and project slug integrity — passed.

Not completed in this environment:

- A full `npm ci` and `npm run build` could not be executed because the available npm package gateway returned HTTP `503 Service Temporarily Unavailable`. An offline install also failed because a required package tarball was not cached. No build-success claim is made.

The project is configured so a normal `npm run build` first regenerates and validates all SEO entry files. Run the following once npm access is available:

```bash
npm ci
npm run build
```

Netlify should publish the generated `dist` directory using the included `netlify.toml`.

## Files intentionally removed

- `public/index.html` — obsolete and conflicting duplicate HTML source.

## Unrelated behavior preserved

No project descriptions, case-study copy, visual design system, component names, animation behavior, filtering behavior, lightbox behavior, form fields, project data, or general page layout was rewritten. Changes were limited to SEO, crawl behavior, semantic headings/links, accessibility metadata closely tied to discovery, and deployment routing required to serve the correct metadata.
