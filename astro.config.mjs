// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Sincronización con el dominio real del usuario
const projectId = '2grwsc7l';
const dataset = 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robertoperezsalazar.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap(),
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2023-05-03',
      // @ts-ignore
      studioPath: '/admin',
    }),
    react()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
