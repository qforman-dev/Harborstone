# Harborstone website

A lightweight static website with no framework, installation, or build step. The `dist` folder is the deployable site. Shared CSS components cover navigation, buttons, cards, section layouts, forms, and mobile behavior. `app.js` handles the menu, form, and copyright year.

## Before a public launch

1. Connect inquiries. In `dist/app.js`, set `FORM_ENDPOINT` to your form service's HTTPS endpoint. It must support multipart form data, cross-origin submission where applicable, JSON responses, and meaningful non-2xx error responses. Configure the recipient, spam protection, and field validation with the provider. Test delivery to your real inbox; a successful HTTP response only confirms provider acceptance. Until connected, the form downloads a local request file and explicitly says nothing is sent.
2. Choose the final domain. Replace the preview origin in `dist/index.html` (canonical, Open Graph, and Organization JSON-LD) and in `dist/robots.txt` and `dist/sitemap.xml`. The private preview requires platform access and is not a public search-indexing launch.
3. Replace `dist/privacy.html` with a policy reflecting your actual contact provider, hosting, information handling, retention, and contact details. Update the form privacy text as needed. The current page is an honest preview notice and is excluded from search indexing.
4. Add a real business email and optional phone number if you want direct contact alongside the form. Confirm any Boston location wording before adding a physical location or address to the site or schema.
5. The selected-work section now uses the three supplied website examples. The portfolio now displays non-clickable screenshots without View design links. Add verified live URLs and case-study details when ready; no client relationship or performance result is claimed.

## Editing and maintenance

- `dist/index.html`: all homepage copy and sections.
- `dist/styles.css`: shared colors, typography, layout components, responsive rules, focus and reduced-motion handling.
- `dist/app.js`: accessible mobile menu and form endpoint adapter.
- `dist/assets/harborstone.png`: supplied logo, cropped and resized for the web.
- `dist/favicon.png`: small version of the supplied logo.
- `dist/privacy.html`: preview privacy notice.
- `dist/robots.txt`, `dist/sitemap.xml`: crawl foundations.

Serve the `dist` folder with a static server. A plain static host can publish it without a backend. The site has no third-party fonts, analytics, external image requests, or client-side library downloads. Test again after changing the form provider, domain, or hosting. Measure real Core Web Vitals once the public site has enough traffic; no field-performance score is claimed for the preview.
