import axios from 'axios'
import { defineStore } from 'pinia'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    budgets: [] as any[],
  }),
  actions: {
    async fetchBudgets(userId: string) {
      const response = await axios.get(`http://localhost:3000/budgets/${userId}`)
      this.budgets = response.data
    },
    async addBudget(budget: any) {
      await axios.post('http://localhost:3000/budgets', budget)
      this.fetchBudgets(budget.userId) // Güncel bütçeleri yeniden yükle
    },
  },
})
