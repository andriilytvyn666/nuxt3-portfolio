import { Rule } from 'sanity'

export default {
  name: 'skill',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: '128x128 WebP image.',
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
      name: 'level',
      type: 'string',
      title: 'Level',
      validation: (rule: Rule) => rule.required(),
      initialValue: 'novice',
      options: {
        list: ['novice', 'beginner', 'competent', 'proficient', 'expert'],
      },
    },
  ],
}
