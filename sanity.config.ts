import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Roberto Pérez Salazar Blog',

  projectId: '2grwsc7l',
  dataset: 'production',
  basePath: '/admin',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  /*
    IMPLEMENTACIÓN TÉCNICA DE ACCESO RÁPIDO:
    Esta configuración permite que si solo tienes un método de acceso activo
    o una sesión guardada, el sistema te redirija automáticamente sin
    pedirte confirmación, agilizando el flujo de trabajo.
  */
  auth: {
    redirectOnSingle: true,
    mode: 'append'
  }
})
