import { Rule } from 'sanity'

export default {
  name: 'course',
  type: 'document',
  title: 'Courses',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description:
        'Course provider logo. 128x128 WebP image with a solid background.',
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
      name: 'provider',
      type: 'string',
      title: 'Provider',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'completionDate',
      type: 'date',
      title: 'Completion date',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
