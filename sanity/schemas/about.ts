import { Rule } from 'sanity'

export default {
  name: 'about',
  type: 'document',
  title: 'About Me',
  fields: [
    {
      name: 'uiName',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'photo',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'location',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'locationFlag',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: { accept: 'image/webp' },
    },
    {
      name: 'description',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'dreyfus',
      type: 'file',
      title: 'Dreyfus model PDF',
      options: { accepts: 'application/pdf' },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'cvEn',
      type: 'file',
      title: 'CV PDF English',
      options: { accepts: 'application/pdf' },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'cvUk',
      type: 'file',
      title: 'CV PDF Українська',
      options: { accepts: 'application/pdf' },
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
