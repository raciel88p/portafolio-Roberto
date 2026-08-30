// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanityIntegration from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://robertoperez.com',
  output: 'static',
  adapter: vercel(),
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
