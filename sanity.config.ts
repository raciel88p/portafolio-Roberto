import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { schemaTypes } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Roberto Pérez Salazar Blog',

  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '2grwsc7l',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
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
