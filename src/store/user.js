import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '장다미'
  }),
  getters: {
     placeholder: (state) => `what's good, ${state.name}?`
  },
})