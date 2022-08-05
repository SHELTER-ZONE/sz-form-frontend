interface Form {
  name: string
  formType: string
  description: string
  sendChannel: string
  anonymous: boolean
  key: string
}

interface AppStoreState {
  formsList: Form[]
  formsCount: number
  formsLoading: boolean
}
s
