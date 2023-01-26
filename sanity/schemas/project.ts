import { Rule } from 'sanity'

export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
