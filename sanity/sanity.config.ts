import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { languageFilter } from '@sanity/language-filter'
import { defaultLanguage, supportedLanguages } from './fieldLocalization'

export default defineConfig({
  name: 'default',
  title: 'nuxt3-portfolio',

  projectId: 'oyqb1zv8',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    languageFilter({
      supportedLanguages: supportedLanguages,
      defaultLanguages: [defaultLanguage],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
