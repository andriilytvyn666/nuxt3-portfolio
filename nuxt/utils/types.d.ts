type Course = {
  _id: string
  logo: image
  name: string
  provider: string
  completionDate: string
}

type Education = {
  _id: string
  logo: image
  schoolName: localeString
  major: string
  degree: string
  enrollmentDate: string
  graduationDate: string
}

type Project = {
  _id: string
  image: image
  name: string
  updateDate: string
  link: string
}

type Experience = {
  _id: string
  logo: image
  title: string
  company: string
  dateOfEmployment: string
  dateOfDismissal?: string
}

type Skill = {
  _id: string
  logo: image
  name: string
  level: string
}

type localeString = {
  en: string
  uk: string
}

type image = {
  asset: { _ref: string }
}
