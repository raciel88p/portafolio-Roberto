import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
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
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
