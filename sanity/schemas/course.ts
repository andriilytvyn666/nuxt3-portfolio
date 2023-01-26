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
      validation: (rule: Rule) => rule.required(),
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
      title: 'Completion Date',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
