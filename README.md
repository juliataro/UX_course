# Highway Heroes – website (highwayheroes.eu)

A static website (plain HTML, CSS and a little JavaScript) for Highway Heroes,
a 24/7 roadside assistance service in Estonia. No database, no plugins, nothing
to install on the server.

Everything that goes on the server is in the **`website/`** folder.

| Address | Page | File |
| --- | --- | --- |
| https://highwayheroes.eu/ | Estonian (main page) | `website/index.html` |
| https://highwayheroes.eu/en/ | English | `website/en/index.html` |
| any wrong address | "Page not found" | `website/404.html` |

## Uploading to Zone.ee (browser FTP)

1. Log in to Zone's **my.zone.ee**, open the web hosting for highwayheroes.eu and start the web FTP / file manager.
2. Go to the folder the domain is served from (on Zone this is normally the **`htdocs`** folder of highwayheroes.eu).
3. Upload **the contents** of `website/` into it (not the `website` folder itself), keeping the sub-folders `css`, `en`, `fonts`, `img`, `js`.
4. Make sure the hidden file **`.htaccess`** is uploaded too. Files starting with a dot are hidden on Mac (press `Cmd + Shift + .` in Finder to show them) and sometimes on Windows.
5. Open https://www.highwayheroes.eu – it should jump to https://highwayheroes.eu.

After the first upload, you only need to re-upload the files you changed.

## Details that were made up and must be checked before launch

| What | Currently on the site | Where |
| --- | --- | --- |
| Company name | Highway Heroes OÜ | footer + data for search engines |
| E-mail | info@highwayheroes.eu (create this mailbox at Zone!) | footer, `llms.txt`, search-engine data |
| Address | Tallinn, Estonia (city only) | footer, `llms.txt`, search-engine data |
| Service area | Tallinn, Harju County, highways E263, E67, E20 | "Coverage" section, `llms.txt`, search-engine data |
| Languages spoken | Estonian, English | search-engine data, `llms.txt` |

Phone number **53810300** (+372) comes from the design.
Estonian text was written by an AI, not a native speaker – please have it proofread.

## Changing text later

Text is in `website/index.html` (Estonian) and `website/en/index.html` (English).
Change both so they stay in sync. The same facts also appear in:

- the `<script type="application/ld+json">` block near the top of each page (information for Google and AI assistants),
- `<title>` and `<meta name="description">` (what Google shows in results),
- `website/llms.txt` (summary for AI assistants).

If you change `css/style.css` or `js/main.js`, raise the number in `?v=1` (to `?v=2` etc.) in both HTML files and `404.html`, so visitors' browsers fetch the new version.

## What is in the folder

- `css/style.css` – all styles (colours are listed at the top)
- `js/main.js` – phone/tablet menu and copyright year (the site works without it)
- `fonts/` – Barlow and Barlow Condensed, stored on the server instead of Google (GDPR)
- `img/` – hero photo in several sizes (WebP + JPEG fallback) and `og-image.jpg` (preview when the link is shared)
- `.htaccess` – www → non-www redirect, 404 page, compression, caching, security headers (HTTP → HTTPS is done by Zone)
- `robots.txt`, `sitemap.xml` – for search engines
- `llms.txt` – plain-text summary for AI assistants (ChatGPT, Claude, Perplexity …)
- `favicon.svg`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest` – browser and phone icons

## After launch

- Add the site to **Google Search Console** and **Bing Webmaster Tools**, and submit `https://highwayheroes.eu/sitemap.xml`.
- Create a **Google Business Profile** with the same name, phone and hours – the biggest single boost for "roadside assistance near me" searches.
