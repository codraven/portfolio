import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://codraven.github.io/portfolio
export default defineConfig({
  site: 'https://codraven.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
