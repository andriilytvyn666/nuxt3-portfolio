import { Rule } from 'sanity'

export default {
  name: 'about',
  type: 'document',
  title: 'About Me',
  fields: [
    {
      name: 'photo',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'location',
      type: 'string',
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
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
