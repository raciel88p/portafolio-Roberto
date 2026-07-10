import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Roberto Pérez Salazar Blog',

  projectId: '2grwsc7l',
  dataset: 'production',

  plugins: [structureTool()],

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
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
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
          },
          {
            name: 'body',
            title: 'Contenido',
            type: 'text',
          },
        ],
      },
    ],
  },
})
