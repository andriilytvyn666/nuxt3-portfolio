type Course = {
  _id: string
  logo: Image
  name: string
  provider: string
  completionDate: string
}

type Education = {
  _id: string
  logo: Image
  schoolName: localeString
  major: string
  degree: string
  enrollmentDate: string
  graduationDate: string
}

type Project = {
  _id: string
  image: Image
  name: string
  updateDate: string
  link: string
}

type localeString = {
  en: string
  uk: string
}

type Image = {
  asset: { _ref: string }
}
