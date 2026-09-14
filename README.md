# Harborstone — GitHub Pages edition

## Publish

1. Extract this ZIP.
2. Upload its contents directly to your GitHub repository root. `index.html` must appear alongside `styles.css`, `app.js`, and the `assets` folder — not inside a `harborstone` or `dist` folder. Upload the extracted files, not the ZIP itself.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**. If you use a different branch, select the branch containing these files.
4. Wait for the Pages deployment to finish, then open the URL shown in Settings → Pages. A project site normally includes the repository name in its URL.

All local asset and page links use relative paths to support both a root domain and a GitHub Pages repository subpath. No build step or dependencies are required. `.nojekyll` marks this as a plain static site.

## Local preview

Run `python3 -m http.server 8000` in the extracted folder, then visit http://localhost:8000.

## Before launch

- Set `FORM_ENDPOINT` in `app.js` to connect your inquiry provider. Until connected, the form only downloads a request file; it does not send inquiries.
- Metadata is configured for https://qforman-dev.github.io/Harborstone/. If you use a custom domain, update the URLs in `index.html`, `robots.txt`, and `sitemap.xml`.

This ZIP contains the latest Harborstone design and no Git history or Sites account configuration.
