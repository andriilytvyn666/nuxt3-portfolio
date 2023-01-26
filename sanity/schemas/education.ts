import { Rule } from 'sanity'

export default {
  name: 'education',
  type: 'document',
  title: 'Education',
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
      name: 'major',
      type: 'string',
      title: 'Major',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'degree',
      type: 'string',
      title: 'Degree',
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
