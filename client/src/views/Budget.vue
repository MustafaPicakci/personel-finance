<template>
  <div>
    <h2 class="text-2xl">Budget Management</h2>
    <button @click="fetchBudgets">Fetch Budgets</button>
    <ul>
      <li v-for="budget in budgets" :key="budget.id">{{ budget.amount }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBudgetStore } from '../stores/budgetStore'

export default defineComponent({
  name: 'Budget',
  setup() {
    const budgetStore = useBudgetStore()
    const fetchBudgets = () => {
      budgetStore.fetchBudgets('yourUserId') // Kullanıcı ID'sini buraya ekleyin
    }

    return {
      budgets: budgetStore.budgets,
      fetchBudgets,
    }
  },
})
</script>
