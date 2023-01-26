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
      initialValue: 'novice',
      validation: (rule: Rule) => rule.required().min(6).max(10),
      options: {
        list: ['novice', 'beginner', 'competent', 'proficient', 'expert'],
      },
    },
  ],
}
