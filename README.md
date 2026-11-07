# Abhyuday Bhadauriya’s portfolio

React, TypeScript, Vite, and Tailwind. Published at
[GitHub Pages](https://abhay2doit.github.io/abhyuday-portfolio/).

## Development

```sh
npm ci
npm run dev
```

## Build and validate

```sh
npx tsc --noEmit -p tsconfig.app.json
npm run build
npm run check:static
npm run preview
```

The build creates a browser bundle and a temporary React server-rendering bundle.
`scripts/prerender.mjs` uses the same components and content data to write complete
HTML for the homepage, three case studies, and three AI Corner views. React
hydrates that content in the browser. The published site remains fully static;
GitHub Pages does not need a Node server.

Each page has its own title, description, self-referencing canonical URL, social
metadata, and JSON-LD. The homepage identifies the same person as the LinkedIn
and GitHub profile links. The build also writes a sitemap and a separate noindex
404 page. Real pages have physical HTML files, so direct visits do not depend on
an error-page fallback.

`npm run check:static` checks the built pages for readable profile content,
working internal links, per-page canonical URLs, identity schema, sitemap
coverage, and error-page behavior. The GitHub Actions workflow runs these checks
before publishing changes to `main`.

## Content

- `src/data/profile.ts`: identity, public profile links, and site URL.
- `src/data/projects.ts`: shared case-study summaries and detail content.
- `src/components/ExperienceSection.tsx`: work history. Dates follow LinkedIn;
  the February–April 2024 Observe.AI role overlap is intentional.
- `src/lib/seo.ts`: page metadata, published paths, and structured data.
- `public/social-card.png`: original portfolio social preview. Its optional
  macOS drawing helper is `scripts/create-social-image.swift`.

Keep content factual. Case studies currently describe qualitative outcomes;
no unsupported metrics or customer claims should be added.

## Visual theme and motion

The review branch uses a pure white background and blue emphasis for Applied AI.
The original abstract artwork is in `public/abstract-connections.png`; its
generation prompt is saved in `assets/abstract-connections.prompt.txt`.
The hero has a pause control, and all motion respects reduced-motion preferences.
Offscreen content reveals progressively with IntersectionObserver; the initial
server-rendered content stays visible without JavaScript.

## Crawlers and discovery

All public content is served in the initial HTML. `public/llms.txt` provides an
optional link index; it does not guarantee discovery or citations.

Standard robots.txt policy is read from the **hostname root**. This project is
hosted under `/abhyuday-portfolio/`, so its `public/robots.txt` is published below
that path and does not control origin-wide crawling. The hostname-root file is
currently absent, which does not itself disallow crawling. To explicitly manage
origin-wide bot rules, publish a root robots.txt through the GitHub user site or
a correctly configured custom-domain site. Do not point canonicals to a custom
domain until it actually serves the portfolio.

## Deployment

The **Deploy portfolio** workflow builds and checks pull requests targeting
`main`. Pushes to `main` publish `dist` through GitHub Pages. Pages must use
**GitHub Actions** as the publishing source, and the `github-pages` environment
must allow `main`. The build never publishes `dist-ssr`.
