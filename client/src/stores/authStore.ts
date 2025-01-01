import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    token: null as string | null,
  }),
  actions: {
    async login(credentials: { username: string; password: string }) {
      const response = await axios.post('http://localhost:3000/auth/login', credentials)
      this.user = response.data.user
      this.token = response.data.token
      localStorage.setItem('token', this.token!) // Token'ı yerel depolamada sakla
    },
    async logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token') // Token'ı yerel depolamadan kaldır
    },
    async fetchUser() {
      const token = localStorage.getItem('token')
      if (token) {
        const response = await axios.get('http://localhost:3000/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.user = response.data
      }
    },
  },
})
