// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://service-gdm.de',
  output: 'static',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // CSS inline ins HTML: spart den render-blockierenden Stylesheet-Request
  build: { inlineStylesheets: 'always' },
  // Bild-Cache an einem Ort, den Dokploy als Build-Cache mountet —
  // optimierte Bilder überleben so den nächsten Deploy
  cacheDir: './node_modules/.cache/astro',
  integrations: [
    // Interne Seiten gehören nicht in die Sitemap (tragen zusätzlich noindex)
    sitemap({ filter: (seite) => !seite.includes('/styleguide') && !seite.includes('/404') }),
  ],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['service-gdm.de', 'www.service-gdm.de', 'gdm.stolz-marketing.de'],
    },
  },
});
