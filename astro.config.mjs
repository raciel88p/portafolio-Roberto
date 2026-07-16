// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanityIntegration from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://robertoperez.com',
  integrations: [
    sitemap(),
    sanityIntegration({
      projectId: '2grwsc7l',
      dataset: 'production',
      useCdn: true,
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});