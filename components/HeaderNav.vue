<script setup lang="ts">
import { ref, inject } from 'vue'

const isDark = inject('isDark', ref(true))
const toggleTheme = inject('toggleTheme', () => {})

defineProps<{
  onNavigate: (e: MouseEvent, id: string) => void
}>()
</script>

<template>
  <header class="flex justify-between items-center pb-8 border-b border-classic-lightBorder dark:border-classic-border transition-colors duration-300 sticky top-0 bg-classic-lightBg/90 dark:bg-classic-bg/90 backdrop-blur-md z-50 pt-4">
    <div class="transform transition-transform hover:scale-[1.01] cursor-pointer" @click="(e) => onNavigate(e, 'hero')">
      <h1 class="text-3xl font-serif font-bold tracking-wide">Yousuf Syed</h1>
      <p class="text-classic-accent font-medium text-sm tracking-wider uppercase mt-1">
        Full Stack Engineer | Vue.js • Node.js • Express • MongoDB • MySQL
      </p>
    </div>
    
    <div class="flex items-center space-x-6">
      <nav class="hidden sm:flex space-x-6 text-sm font-medium">
        <a href="#skills" @click="(e) => onNavigate(e, 'skills')" class="hover:text-classic-accent transition-colors duration-200">Tech Stack</a>
        <a href="#experience" @click="(e) => onNavigate(e, 'experience')" class="hover:text-classic-accent transition-colors duration-200">Experience</a>
        <a href="#contact" @click="(e) => onNavigate(e, 'contact')" class="hover:text-classic-accent transition-colors duration-200">Contact</a>
      </nav>

      <!-- Theme Toggle Button -->
      <button
        @click="toggleTheme"
        class="relative w-16 h-8 rounded-full bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border p-1 shadow-sm transition-colors duration-300 focus:outline-none flex items-center"
        :title="isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
      >
        <div
          class="absolute w-6 h-6 rounded-full bg-classic-accent shadow-md transform transition-transform duration-300 flex items-center justify-center text-white text-xs"
          :class="isDark ? 'translate-x-0' : 'translate-x-8'"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </div>
        <div class="w-full flex justify-between px-1.5 text-xs select-none pointer-events-none">
          <span>🌙</span>
          <span>☀️</span>
        </div>
      </button>
    </div>
  </header>
</template>