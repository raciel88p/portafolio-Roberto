export default {
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
}
