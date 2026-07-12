// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Sincronización con el dominio real del usuario
const projectId = (process.env.PUBLIC_SANITY_PROJECT_ID || '2grwsc7l').trim();
const dataset = (process.env.PUBLIC_SANITY_DATASET || 'production').trim();

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robertoperezsalazar.com',
  integrations: [
    sitemap(),
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2023-05-03',
      studioPath: '/admin',
    }),
    react()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
