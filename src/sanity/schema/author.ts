import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'jobTitle',
      title: 'Cargo / Especialidad',
      type: 'string',
      initialValue: 'Consultor SEO y Marketing Digital',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía Corta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'linkedin',
      title: 'URL de LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'URL de YouTube',
      type: 'url',
    }),
    defineField({
      name: 'language',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          { title: 'Español', value: 'es' },
          { title: 'English', value: 'en' },
        ],
      },
      initialValue: 'es',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
