<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData } from '~/data/portfolioData'

const copiedPhone = ref(false)
const copyPhone = () => {
  navigator.clipboard.writeText(portfolioData.personal.phone)
  copiedPhone.value = true
  setTimeout(() => { copiedPhone.value = false }, 2500)
}
</script>

<template>
  <section id="contact" class="scroll-mt-20">
    <footer class="py-12 border-t border-classic-lightBorder dark:border-classic-border text-center space-y-6 transition-colors duration-300">
      <h3 class="text-2xl font-serif font-bold">Get In Touch</h3>
      <p class="text-classic-lightMuted dark:text-classic-muted max-w-md mx-auto text-sm transition-colors duration-300">
        Looking for a Full Stack Engineer capable of building complete scalable web applications from database architecture to user interface? Let's connect.
      </p>
      
      <div class="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
        <a :href="`mailto:${portfolioData.personal.email}`" class="text-classic-accent hover:underline transition-transform duration-200 hover:scale-105">
          {{ portfolioData.personal.email }}
        </a>
        <span class="text-classic-lightBorder dark:border-classic-border">|</span>
        <button @click="copyPhone" class="text-classic-accent hover:underline transition-transform duration-200 hover:scale-105 active:scale-95">
          {{ copiedPhone ? '✓ Phone Copied!' : portfolioData.personal.phone }}
        </button>
        <span class="text-classic-lightBorder dark:border-classic-border">|</span>
        <a :href="portfolioData.personal.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-classic-accent transition-transform duration-200 hover:scale-105">
          LinkedIn
        </a>
      </div>

      <p class="text-xs text-classic-lightMuted dark:text-classic-muted pt-8 transition-colors duration-300">
        © {{ new Date().getFullYear() }} {{ portfolioData.personal.name }}. Built with Nuxt 3 SSG, Node.js & Tailwind CSS.
      </p>
    </footer>
  </section>
</template>