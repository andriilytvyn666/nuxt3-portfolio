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
      description:
        'Project image. 558x314 (approx. 16:9) WebP image with a solid background.',
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
      name: 'updateDate',
      type: 'date',
      title: 'Update date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
