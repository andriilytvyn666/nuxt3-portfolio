import {Rule} from 'sanity'

export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'level',
      type: 'string',
      title: 'Level',
      initialValue: 'novice',
      validation: (rule: Rule) => rule.required().min(6).max(10),
      options: {
        list: ['novice', 'begginer', 'competent', 'proficient', 'expert'],
      },
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/webp'},
    },
  ],
}
