import { defineStore } from 'pinia'
import { GetFormList } from '@/api/form'

export const useAppStore = defineStore('app', {
  state: (): AppStoreState => ({
    formsList: [],
    formsCount: 0,
  }),
  actions: {
    async getFormsCount() {},
    async getFormsList() {
      let lastKey = ''
      const limit = 20
      while (this.formsList.length < this.formsCount) {
        const payload = lastKey ? { last: lastKey, limit } : { limit }
        const [res, err] = await GetFormList(payload)
        if (err) return err
        lastKey = res[res.length - 1].key
        this.formsList.push(...res)
      }
    },
  },
  getters: {
    eventForms: (state) =>
      state.formsList.filter((f) => f.formType === 'event'),
    staticForms: (state) =>
      state.formsList.filter((f) => f.formType === 'static'),
  },
})
