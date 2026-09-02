# gianluca.gabrielli — one-page resume

Personal website, hosted with [GitHub Pages](https://pages.github.com/):
<https://staypirate.github.io/resumepagetest/>

Built with [Vite](https://vitejs.dev/) and plain CSS (no frameworks), dark
"terminal" theme with a typing hero. Content is from the old
one-page resume (<https://gianlu.ca/>), preserved verbatim.

## Stack

- Vite 7, TypeScript (`src/main.ts`, `src/style.css`)
- Static assets in `public/` (avatar, favicon, PDF/ODP papers)
- `base: "/resumepagetest/"` for the project Pages URL

## Local

```sh
npm install
npm run dev      # dev server on :5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## CI/CD

- `ci` — builds on push/PR, uploads the `dist` artifact
- `deploy` — on `main` only, deploys to GitHub Pages via
  `actions/deploy-pages@v4`
