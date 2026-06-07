import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://kgovind-coder.github.io/portfolio
export default defineConfig({
  site: 'https://kgovind-coder.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
