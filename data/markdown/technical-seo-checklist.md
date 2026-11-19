# Technical SEO Checklist

A technical SEO checklist for crawlability, indexation, site speed, structured data, and infrastructure health.

> Free printable & editable version: [Technical SEO Checklist on ChecklistForge](https://checklistforge.com/checklist/technical-seo-checklist) — tick items online or download as PDF.

## Crawlability

- [ ] Open robots.txt and confirm it does not block CSS, JavaScript, or important page directories.
- [ ] Run a crawl and resolve every broken internal link and redirect chain it reports.
- [ ] Ensure key content is server-rendered or hydrated so crawlers can read it without executing complex scripts.
- [ ] Eliminate infinite crawl spaces created by faceted navigation, filters, or calendar parameters. — _Parameterized URLs can multiply into thousands of near-identical pages and drain crawl budget._
- [ ] Build a logical internal linking structure so every important page is reachable within a few clicks.
- [ ] Review server logs to confirm crawlers are spending time on valuable pages, not junk URLs.

## Indexation

- [ ] Audit noindex directives and confirm they appear only on pages you want excluded.
- [ ] Use search console coverage reports to find valid pages that are not being indexed.
- [ ] Resolve 'crawled but not indexed' and 'discovered but not indexed' statuses on priority pages.
- [ ] Remove or consolidate duplicate pages that split indexing signals.
- [ ] Request indexing for new or significantly updated high-value pages.

## Site Architecture

- [ ] Map your URL hierarchy and keep important pages close to the homepage in depth.
- [ ] Group related content into clear topic clusters linked to a central hub page.
- [ ] Use descriptive, lowercase, hyphenated URLs without session IDs or tracking parameters.
- [ ] Add breadcrumb navigation to reinforce hierarchy for users and crawlers.
- [ ] Avoid deep folder nesting that buries pages many levels below the root.

## Core Web Vitals and Speed

- [ ] Measure largest contentful paint and reduce it by optimizing the main hero image or text block.
- [ ] Cut layout shift by reserving space for images, ads, and embeds before they load.
- [ ] Improve responsiveness by deferring non-critical JavaScript and splitting large bundles.
- [ ] Compress and serve images in modern formats with appropriate dimensions.
- [ ] Enable browser caching, compression, and a content delivery network for static assets. — _A CDN shortens the physical distance between your files and the user, which speeds first load._
- [ ] Remove render-blocking resources from the critical path of above-the-fold content.

## Mobile and HTTPS

- [ ] Confirm the site uses responsive design and renders correctly across phone screen sizes.
- [ ] Set a proper viewport meta tag and ensure tap targets are large enough to use comfortably.
- [ ] Force HTTPS site-wide and redirect all HTTP requests to the secure version.
- [ ] Fix mixed-content warnings by serving every asset over HTTPS.
- [ ] Verify the SSL certificate is valid, current, and set to auto-renew.

## Structured Data

- [ ] Add JSON-LD markup that matches the content type of each template, such as articles or products.
- [ ] Validate every schema block with a structured data testing tool and fix reported errors.
- [ ] Implement breadcrumb, organization, and site-search markup where appropriate.
- [ ] Avoid marking up content that is not visible to users on the page.
- [ ] Monitor rich result reports for enhancements that lose eligibility after changes.

## Sitemaps, Robots, and Canonicals

- [ ] Generate an XML sitemap that lists only canonical, indexable, 200-status URLs.
- [ ] Reference the sitemap in robots.txt and submit it through search console.
- [ ] Split very large sitemaps into multiple files under the per-file URL limit.
- [ ] Set a self-referencing canonical tag on every indexable page.
- [ ] Point duplicate and parameter URLs to their correct canonical version. — _Conflicting canonical and noindex signals confuse crawlers, so keep directives consistent on each URL._
- [ ] Keep the sitemap automatically updated as pages are published, changed, or removed.

---
Source: [Technical SEO Checklist](https://checklistforge.com/checklist/technical-seo-checklist) by ChecklistForge · License: CC BY 4.0
