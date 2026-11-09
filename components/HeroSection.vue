<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData } from '~/data/portfolioData'

const copiedEmail = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText(portfolioData.personal.email)
  copiedEmail.value = true
  setTimeout(() => { copiedEmail.value = false }, 2500)
}
</script>

<template>
  <div id="hero">
    <section class="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
      <div class="md:col-span-2 space-y-6">
        <h2 class="text-4xl sm:text-5xl font-serif font-bold leading-tight">
          Building Scalable End-to-End Systems with <span class="text-classic-accent">Vue & Node</span>.
        </h2>
        <p class="text-classic-lightMuted dark:text-classic-muted text-lg leading-relaxed transition-colors duration-300">
          {{ portfolioData.personal.about }}
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a
            :href="portfolioData.personal.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 bg-classic-accent hover:bg-classic-accentHover text-white font-medium rounded transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-95"
          >
            LinkedIn Profile
          </a>
          <button
            @click="copyEmail"
            class="px-6 py-3 bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border hover:border-classic-accent font-medium rounded transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-95"
          >
            {{ copiedEmail ? '✓ Email Copied!' : 'Copy Email' }}
          </button>
        </div>
      </div>

      <!-- Impact Metrics Card -->
      <div class="bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border p-6 rounded-lg space-y-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <h3 class="font-serif text-lg font-bold border-b border-classic-lightBorder dark:border-classic-border pb-3 text-classic-accent transition-colors duration-300">Key Engineering Impact</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="metric in portfolioData.metrics" :key="metric.label" class="space-y-1">
            <div class="text-2xl font-bold font-serif">{{ metric.value }}</div>
            <div class="text-xs text-classic-lightMuted dark:text-classic-muted leading-tight transition-colors duration-300">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>