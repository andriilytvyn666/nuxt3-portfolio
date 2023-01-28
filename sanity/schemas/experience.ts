import { Rule } from 'sanity'

export default {
  name: 'experience',
  type: 'document',
  title: 'Work Experience',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Company logo. 128x128 WebP image with a solid background.',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Job title',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'dateOfEmployment',
      type: 'date',
      title: 'Date of employment',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'dateOfDismissal',
      type: 'date',
      title: 'Date of dismissal',
    },
  ],
}
