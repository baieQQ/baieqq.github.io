import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    refresh: null,
    me: {
      name: '',
      email: '',
      role: '',
      id: '',
      avatar_url: '',
      created_at: ''
    }
  }),
  actions: {
    async createUser() {
      const me = {
        name: 'test_user',
        email: 'user@test.com',
        password: 'this_is_password',
        avatar_url: 'https://www.google.com/'
      }
      const res = await rosAPI.formDataPOST(`/user`, me)
      this.me = res
    },
  },
  getters: {
    isLogin() {
      return !!this.refresh
    }
  }
})
