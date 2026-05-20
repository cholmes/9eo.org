# 9eo.org

Personal site for Chris Holmes.

## Deploy

Static site — drops straight into GitHub Pages.

1. Push the repo contents to your `gh-pages`-enabled repo (e.g. `cholmes/9eo.org` on the default branch).
2. In **Settings → Pages**, set the source to the branch root (`/`).
3. The included `CNAME` file points the Pages site at `9eo.org` — add the matching DNS records at your registrar:
   - `ALIAS`/`ANAME` (or four `A` records) on the apex `9eo.org` → GitHub Pages IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
   - `CNAME` on `www.9eo.org` → `<your-username>.github.io`.

## Files

- `index.html` — the site
- `styles.css` — all styles, including theme tokens
- `tweaks-panel.jsx` — Tweaks scaffold (drag-panel, hooks, controls)
- `tweaks.jsx` — site-specific tweak controls (accent, surface, type, decor, density)
- `image-slot.js` — drag-and-drop portrait slot

## Editing content

All content is plain HTML inside `index.html` — sections are clearly delimited by comment banners. Edit in any text editor; no build step.
