# jeromemaleski.github.io

Personal site, built with [Astro](https://astro.build) and published to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `master`.

## Write a post

1. `npm run new -- "My post title"` creates `src/content/posts/my-post-title.md` as a draft
   (or copy `src/content/posts/_template.md`).
2. `npm run dev` and open http://localhost:4321 to preview. Drafts show only here.
3. When it's ready, set `draft: false`, then commit and push. The site updates in about a minute.

Style rules for posts: two heading levels (title and `##`), no footnotes (use a
blockquote for asides, cite sources inline), `---` for a ❦ section break.

## Edit the site

| What | Where |
|---|---|
| Bio and links | `src/pages/index.astro` |
| Post page layout | `src/pages/posts/[...slug].astro` |
| Colors, fonts, spacing | `src/styles/global.css` |
| Files served as-is (CV PDF, images) | `public/` |

## Commands

| Command | Does |
|---|---|
| `npm install` | Install dependencies (once) |
| `npm run dev` | Local preview at localhost:4321 |
| `npm run build` | Build to `dist/` |
| `npm run new -- "Title"` | Start a new draft post |
