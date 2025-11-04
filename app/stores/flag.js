export const useFlagStore = defineStore('flag', {
  state: () => ({
    flag: false,
  }),

  getters: {
  },

  actions: {
    changeTrigger() {
      this.flag = !this.flag
    },
  }
})