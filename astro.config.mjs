// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanityIntegration from '@sanity/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://robertoperez.com',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sitemap(),
    sanityIntegration({
      projectId: '2grwsc7l',
      dataset: 'production',
      useCdn: true,
    }),
    react()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
