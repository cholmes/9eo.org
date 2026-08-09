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

- `index.html` — the home page
- `styles.css` — all styles, including theme tokens and blog styles
- `tweaks-panel.jsx` — Tweaks scaffold (drag-panel, hooks, controls)
- `tweaks.jsx` — site-specific tweak controls (accent, surface, type, decor, density)
- `image-slot.js` — drag-and-drop portrait slot
- `_posts/` — all blog posts (markdown)
- `_layouts/` — Jekyll layouts for blog pages
- `blog/index.html` — the blog listing page
- `_config.yml` — Jekyll config (permalinks, RSS feed)
- `assets/img/posts/` — locally-hosted post images

## Editing content

Home page content is plain HTML inside `index.html` — sections are clearly delimited by comment banners. Edit in any text editor; no build step needed locally. GitHub Pages runs Jekyll automatically on push, which renders the blog and RSS feed.

## Writing a new blog post

Create a markdown file in `_posts/` named `YYYY-MM-DD-your-slug.md`:

```markdown
---
title: "My Post Title"
date: 2026-08-09
---

Post content in markdown. Images go in `assets/img/posts/<slug>/` and are
referenced as `![alt](/assets/img/posts/<slug>/image.png)`.
```

Push to `main` and GitHub Pages publishes it at `9eo.org/blog/your-slug/` and adds it to the RSS feed at `/feed.xml`.

Optional front matter for ported/cross-posted content:

```yaml
source: medium               # short tag shown in the blog listing
source_name: "Medium"        # "Originally published on …" label
source_url: https://…        # the original's URL
also_at_name: "cloudnativegeo.org"   # optional second home
also_at_url: https://…
image: /assets/img/posts/…   # og:image for link previews
```

## The blog archive

`_posts/` holds ~160 posts ported in August 2026 from cholmes.medium.com (including Planet Stories and Radiant Earth Insights publication posts), cholmes.wordpress.com (2005–2013), the OGC blog, and cloudnativegeo.org. Each carries a `source_url` back to the original. Post images were copied to `assets/img/posts/`; animated GIFs over 1.5 MB stayed on Medium's CDN to keep the repo lean.

## Local preview (optional)

```sh
bundle install
bundle exec jekyll serve
```
