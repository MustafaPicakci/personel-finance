<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
    <p class="text-lg mb-8">Welcome to your personal finance dashboard!</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-4">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Current Balance</h2>
        <p>$5000</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Monthly Budget</h2>
        <p>$2000</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Upcoming Payments</h2>
        <p>2 payments due this month</p>
      </div>
    </div>

    <router-link
      to="/budget"
      class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >View Budgets</router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'Dashboard',
}
</script>

<style scoped>
/* İsteğe bağlı stil ekleyebilirsiniz */
</style>
