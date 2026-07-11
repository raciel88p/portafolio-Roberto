import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Roberto Pérez Salazar Blog',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '2grwsc7l',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [
      {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'author',
            title: 'Autor',
            type: 'string',
            initialValue: 'Roberto Pérez Salazar',
          },
          {
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'publishedAt',
            title: 'Fecha de Publicación',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
          },
          {
            name: 'body',
            title: 'Contenido',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
          },
        ],
      },
    ],
  },
})
