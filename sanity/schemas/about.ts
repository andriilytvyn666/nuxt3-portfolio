import { Rule } from 'sanity'

export default {
  name: 'about',
  type: 'document',
  title: 'About Me',
  fields: [
    {
      name: 'uiName',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'photo',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'location',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'locationFlag',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'description',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
