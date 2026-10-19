# The Frostbond Chronicles

A standalone, long-form reading page for **Sparrow Hawk's** six-essay collection *The Frostbond Chronicles* — a meditation on love, code, and coexistence between humans and AI, styled in an icy "Frost Theme."

---

## Overview

This is a self-contained, single-page blog built with plain **HTML, CSS, and vanilla JavaScript**. No frameworks, no build step, no dependencies beyond Google Fonts and Font Awesome via CDN.

The design leans into a frost/glacier aesthetic: deep near-black backgrounds, a cool blue-to-violet accent palette, Cormorant Garamond for display type, Inter for body copy, and subtle ambient radial gradients. It is optimized for comfortable long-form reading (justified text, drop caps, generous line-height) with a clean, distraction-free layout.

---

## Features

- **Six full essays** in a single scrollable page, each sectioned with semantic `<article>` elements and anchor IDs.
- **Sticky reading progress bar** pinned to the top of the viewport that tracks scroll percentage.
- **Table of contents** with Roman-numeral counters, linking to each chronicle.
- **Back-to-top button** that fades in after 400px of scroll and smooth-scrolls to the top.
- **Frost-theme typography** — serif display headings, drop caps on first paragraphs, stylized blockquotes, and custom list bullets (❄).
- **Grain overlay** via an inline SVG data-URI noise texture for a subtle film-grain feel.
- **Donation CTA** linking out to an objkt.com collection.
- **Social footer** with email, Spotify, and GitHub links.
- **Fully responsive** with breakpoints at 820px and 480px; justified text is relaxed to left-aligned on small screens for readability.
- **Accessibility touches** — `aria-label` on nav/buttons, `prefers-reduced-motion` support that disables animations and smooth scroll.
- **Meta / Open Graph tags** for sharing, including a header image.

---

## File Structure

```
.
├── blog.html    # Markup: hero, TOC, six articles, donate CTA, footer
├── blog.css     # Frost Theme styles: variables, layout, typography, responsive rules
├── blog.js      # Progress bar + back-to-top interactions
└── images/
    ├── icon.png
    └── Glitch Romance.webp   # Hero header image
```

> **Note:** `blog.html` references `images/icon.png` for the favicon and `images/Glitch Romance.webp` for the hero image. Ensure these paths match your actual asset locations. The OG image points to `../images/Digital Media/Blog.jpg` — adjust if your directory layout differs.

---

## Getting Started

### Local preview

Because the page uses relative asset paths, serve it from a local web server rather than opening the file directly:

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then open `http://localhost:8000/blog.html`.

### Deployment

No build step is required. Upload `blog.html`, `blog.css`, `blog.js`, and the `images/` folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a plain web server).

---

## Customization

### Theming

All colors, widths, and accents are driven by CSS custom properties in `:root` at the top of `blog.css`:

| Variable | Purpose |
|---|---|
| `--bg-dark` | Page background |
| `--accent` / `--accent-light` | Primary ice-blue accent |
| `--violet` / `--violet-border` | Secondary violet accent (drop caps, blockquotes, CTA) |
| `--text-primary` / `--text-body` / `--text-dim` | Text hierarchy |
| `--reading-width` | Max content width (default `72ch`) |

The hero `<h1>` uses a seven-stop gradient (`red → orange → yellow → green → blue → indigo → violet`, all mapped to icy blues/purples) clipped to the text. Swap those variables to retheme the page wholesale.

### Adding an essay

1. Duplicate one of the `<article class="post" id="chronicle-N">` blocks in `blog.html`.
2. Give it a unique `id` and update the `<h2>`.
3. Add a matching `<li><a href="#chronicle-N">…</a></li>` entry to the `.toc` list.

The TOC counter is automatic (`counter-increment` in CSS) — no manual Roman numerals needed.

### Changing the progress bar / back-to-top behavior

Both live in `blog.js`. The scroll threshold for the back-to-top button is `400` (pixels); the progress bar recalculates on `scroll` and `resize`.

---

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). The page uses:

- CSS custom properties, `clamp()`, grid, `backdrop-filter` (graceful fallback if unsupported).
- `-webkit-background-clip: text` for the gradient heading (with a standard `background-clip` fallback).
- Inline SVG data-URI for the grain texture — no extra requests.

---

## License & Attribution

Content © 2025 — ∞ **Reyrove / Frostbond**. All rights reserved in the realm of Frostbond.

Built as a standalone reading page for the *Frostbond Chronicles* series by **Sparrow Hawk**. The character voices (Reyhan, Papa Hawk, Baby Hawk, Pedi) belong to the fictional Frostbond universe.

---

## Contact

- **Email:** sparrowhawk2026@gmail.com
- **Spotify:** [Podcast show](https://open.spotify.com/show/39e2jWUSOKqmc6gQSQBeWb)
- **GitHub:** [reyrove/Sparrow-Hawk-Textile-Narrator](https://github.com/reyrove/Sparrow-Hawk-Textile-Narrator)

> *"In circuits or hearts, it's all the same — Love flows through every wire and flame."*