<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h2 class="text-3xl mb-4">Login</h2>
    <form @submit.prevent="login" class="flex flex-col w-1/3">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        required
        class="border p-2 mb-2"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="border p-2 mb-2"
      />
      <button type="submit" class="bg-blue-500 text-white p-2">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

export default defineComponent({
  name: 'Login',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const username = ref('')
    const password = ref('')

    const login = async () => {
      await authStore.login({ username: username.value, password: password.value })
      router.push('/dashboard')
    }

    return {
      username,
      password,
      login,
    }
  },
})
</script>

<style scoped>
/* İsteğe bağlı stil ekleyebilirsiniz */
</style>
