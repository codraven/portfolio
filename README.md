# Portfolio — Kurri Govinda Reddy

Personal portfolio of **Kurri Govinda Reddy** — AI / ML Engineer & Software Engineer (AI).

🔗 **Live:** https://codraven.github.io/portfolio

## Stack

- [Astro](https://astro.build) — static site generator
- Hand-crafted CSS (no UI framework) — "Engineering Dossier" dark editorial-technical theme
- Fonts: Fraunces (display), Spline Sans (body), JetBrains Mono (technical)
- Deployed to GitHub Pages via GitHub Actions

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/portfolio
npm run build    # output to ./dist
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Enable Pages once under **Settings → Pages → Source: GitHub Actions**.

## Edit content

All content lives in the frontmatter of [`src/pages/index.astro`](src/pages/index.astro) as plain data arrays (`STATS`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `CERTS`). Edit those to update the site.
