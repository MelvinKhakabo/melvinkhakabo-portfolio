// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` must be the public URL of the deployed site.
// It is used for canonical links, Open Graph tags and sitemap.xml.
// Change it if Vercel gives you a different address.
export default defineConfig({
  site: 'https://melvinkhakabo.vercel.app',
  integrations: [sitemap()],
});