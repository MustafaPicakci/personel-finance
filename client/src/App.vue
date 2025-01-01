<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useAuthStore } from './stores/authStore'

export default defineComponent({
  name: 'App',
  setup() {
    const authStore = useAuthStore()

    onMounted(async () => {
      await authStore.fetchUser() // Uygulama yüklendiğinde kullanıcıyı kontrol et
    })
  },
})
</script>
