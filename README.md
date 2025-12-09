# Jaime Bowen — new web

Astro site powered by Bun that renders all of the original Jekyll markdown/posts,
keeps [the-monospace-web](./the-monospace-web) aesthetics, and ships Markdown,
LaTeX, and Google Analytics out of the box.

## Stack

- [Astro 5](https://astro.build/) with Bun scripts (`bunx astro ...`)
- Markdown content collections with `remark-math` + `rehype-katex` for LaTeX
- Vendored CSS from *the monospace web* (`src/styles/monospace-*.css`)
- Static assets live in `public/assets` (copied from the old `web/assets`)

## Getting started

```bash
cp .env.example .env          # optional, sets PUBLIC_GOOGLE_ANALYTICS_ID
bun install                   # install dependencies
bun run dev                   # start a local dev server
bun run build                 # output static site into dist/
```

Environment variables prefixed with `PUBLIC_` are exposed to the client. If you
want to disable Google Analytics locally, leave `PUBLIC_GOOGLE_ANALYTICS_ID`
unset in `.env`.

## Content model

- Blog posts live in `src/content/posts/`. Each post keeps its original filename
  (e.g. `2021-06-01-the-brew-experiment.md`) so the permalinks stay identical to
  Jekyll (`/:year-:month-:day-:title/`). Frontmatter expects `title`, `date`,
  optional `subtitle`, and `tags`.
- Static pages such as projects/about/publications live in `src/pages/*.md` and
  use `../layouts/PageLayout.astro`.
- Assets (images, PDFs, etc.) can be referenced with `/assets/...` once dropped
  into `public/assets/`.

Latex equations can be written inside any Markdown file using `$...$` or
`$$...$$`; KaTeX renders them automatically.

## Styling tweaks

`src/styles/global.css` imports the reset/theme from *the monospace web* and
adds layout-specific rules. Update those files (or the vendored ones in
`src/styles/monospace-*.css`) if you want to customize the look.

## Deployment

A GitHub Pages workflow (`.github/workflows/deploy.yml`) builds the site with
Bun and publishes `dist/` whenever `main` changes. Enable Pages for the repo and
point it at the `GitHub Pages` environment (created by the workflow).

You can still refer to `web/` (the original Jekyll site) and
`the-monospace-web/` for any migration notes or style references.
