<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-5xl font-bold mb-4 text-center">Personal Finance App</h1>
    <p class="text-lg mb-8 text-center">Manage your budgets and track your expenses easily.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-4">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Track Expenses</h2>
        <p>Keep an eye on your spending habits and make informed decisions.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Create Budgets</h2>
        <p>Set budgets for different categories and stick to them.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Manage Credit Cards</h2>
        <p>Track your credit card payments and avoid late fees.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Get Insights</h2>
        <p>Analyze your spending patterns and make adjustments.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Set Financial Goals</h2>
        <p>Define your financial goals and track your progress.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-2">Receive Notifications</h2>
        <p>Get reminders for upcoming payments and budget limits.</p>
      </div>
    </div>

    <router-link
      to="/login"
      class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >Login</router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>

<style scoped>
/* İsteğe bağlı stil ekleyebilirsiniz */
</style>
