type Course = {
  _id: string
  logo: Image
  name: string
  provider: string
  completionDate: string
}

type Image = {
  asset: { _ref: string }
}
