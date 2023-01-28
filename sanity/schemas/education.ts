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
      name: 'schoolName',
      type: 'localeString',
      title: 'School name',
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
      initialValue: 'bachelor',
      options: {
        list: ['associate', 'bachelor', 'master', 'phd'],
      },
    },
    {
      name: 'enrollmentDate',
      type: 'date',
      title: 'Entollment date',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'graduationDate',
      type: 'date',
      title: 'Graduation date',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
