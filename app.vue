<script setup>
import { ref, provide } from 'vue'

// Dark theme by default
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
}

provide('isDark', isDark)
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div :class="{ 'dark': isDark }">
    <div class="bg-classic-lightBg dark:bg-classic-bg text-classic-lightText dark:text-classic-text min-h-screen font-sans selection:bg-classic-accent selection:text-white transition-colors duration-300">
      <NuxtPage />
    </div>
  </div>
</template>