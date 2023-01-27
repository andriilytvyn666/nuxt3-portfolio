import { Rule } from 'sanity'

export default {
  name: 'contact',
  type: 'document',
  title: 'Contacts',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: '128x128 WebP image with a solid background.',
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
      name: 'contact',
      type: 'string',
      title: 'Contact',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
