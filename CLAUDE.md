# CLAUDE.md

This file provides guidance for AI assistants working with this repository.

## Project Overview

Personal website for Erica Dingman, a Product Marketing Leader. The site is hosted at `ericadingman.com` via GitHub Pages and serves as a professional portfolio including an about page, resume, and pottery gallery.

## Technology Stack

This is a **zero-build static website**. No frameworks, no bundler, no package manager.

- **Markup**: Plain HTML5 with semantic elements (`<main>`, `<nav>`, `<header>`, `<section>`, `<footer>`)
- **Styling**: Vanilla CSS3 with custom properties, Flexbox, and CSS Grid
- **JavaScript**: None — the site has zero JavaScript
- **Fonts**: System font stack only (no external font loading)
- **Hosting**: GitHub Pages, branch `master`, custom domain via `CNAME`

## Repository Structure

```
ericadavidson.github.io/
├── images/                          # Static image assets
│   ├── about-hero-bg.jpg            # Hero background photo for About page
│   ├── home-bokeh-bg.jpg            # Bokeh background (currently unused)
│   ├── pottery-collection.jpg       # Pottery gallery image
│   ├── pottery-mug.jpg              # Pottery gallery image
│   ├── pottery-small-vase.jpg       # Pottery gallery image
│   └── pottery-vase.jpg             # Pottery gallery image
├── .gitignore                       # Ignores .DS_Store
├── CNAME                            # Custom domain: ericadingman.com
├── Erica_Davidson_Dingman_resume.pdf  # Downloadable resume PDF
├── about.html                       # About page
├── index.html                       # Homepage / entry point
├── pottery.html                     # Pottery gallery
├── resume.html                      # Online resume
└── styles.css                       # Single shared stylesheet (~410 lines)
```

## Pages

| File | Purpose | Notes |
|---|---|---|
| `index.html` | Homepage | Full-viewport centered layout; no nav bar (it is the entry point) |
| `about.html` | About page | Fixed-attachment hero background; bio and external links |
| `resume.html` | Online resume | Max-width card layout; links to downloadable PDF |
| `pottery.html` | Pottery gallery | Responsive CSS Grid; 4 items with hover zoom effect |

## Shared Stylesheet (`styles.css`)

CSS custom properties are defined on `:root`:

```css
--background   /* page background color */
--foreground   /* primary text color */
--muted        /* muted/secondary text */
--border       /* border color */
--primary      /* accent/brand color */
```

Stylesheet sections (in order):
1. Base reset and `:root` variables
2. Navigation bar (glassmorphism: `backdrop-filter: blur(8px)`, 90% white opacity)
3. Homepage styles
4. About page styles
5. Resume page styles
6. Pottery gallery styles
7. Responsive breakpoints:
   - `@media (min-width: 768px)` — pottery grid switches to 2-column layout
   - `@media (max-width: 640px)` — smaller fonts, adjusted resume padding, stacked job headers

## Navigation

Every page except `index.html` includes the shared `<nav>` bar. The nav uses an `active` class to highlight the current page's link. When adding or updating pages, keep nav links consistent across all HTML files.

## Deployment

Deployment is automatic via GitHub Pages:
1. Commit and push changes to the `master` branch
2. GitHub Pages serves the files directly — no build step required
3. Changes are live within seconds to a couple of minutes

There is no CI/CD pipeline, no linting, and no tests.

## Development Conventions

### HTML
- Use semantic HTML5 elements
- Keep Open Graph meta tags updated in `<head>` when changing page titles or descriptions
- Each page should include `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Do not add JavaScript unless explicitly requested

### CSS
- Add new styles to `styles.css` in the appropriate section (grouped by page/component)
- Use the existing CSS custom properties (`--primary`, `--muted`, etc.) for colors rather than hardcoded hex values
- Follow the existing mobile-first or breakpoint patterns already in the file

### Images
- Place all image files in the `images/` directory
- Prefer JPEG for photographs; keep file sizes reasonable for fast page loads
- Use `object-fit: cover` for images in card/grid layouts (already the convention in `pottery.html`)

### General
- Do not introduce a build tool, package manager, or JavaScript framework without explicit instruction — the simplicity is intentional
- Do not add `node_modules/`, lock files, or other build artifacts to the repository
- Keep the `.gitignore` updated if new OS/editor artifacts need to be excluded

## Key Content Details

- **Owner name**: Erica Dingman (previously Erica Davidson; both names appear in the codebase and PDF filename)
- **Title/tagline**: "Product Marketing Leader"
- **Custom domain**: `ericadingman.com`
- **Downloadable resume**: `Erica_Davidson_Dingman_resume.pdf`
- **Employment history** (in `resume.html`): Movable Ink (2021–present), Aircall (2019–2021), Adaptly/Accenture (2015–2019), Thrillist (2014–2015), MediaVest (2013–2014), Weil Gotshal & Manges (2012–2013)
- **Education**: Wesleyan University, BA Government (2008–2012)

## Git Branch Strategy

- `master` — production branch; changes here go live on GitHub Pages
- Feature/AI branches use the `claude/` prefix convention
