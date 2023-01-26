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
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
