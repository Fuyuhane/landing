// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fuyuhane.com',
  // Astro 7 defaults compressHTML to 'jsx', which strips whitespace between text
  // and inline elements across lines (e.g. dropping the space before <em>). The
  // templates are authored for HTML whitespace rules, so keep the classic behavior.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
