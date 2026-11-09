<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'
</script>

<template>
  <section id="skills" class="py-12 border-t border-classic-lightBorder dark:border-classic-border transition-colors duration-300 scroll-mt-20">
    <h3 class="text-2xl font-serif font-bold mb-8">Full Stack Technology Stack & Credentials</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Frontend Stack -->
      <div class="bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <h4 class="font-serif font-semibold text-lg text-classic-accent mb-4">Frontend Layer</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in portfolioData.frontendSkills"
            :key="skill"
            class="px-3 py-1.5 bg-classic-lightBg dark:bg-classic-bg border border-classic-lightBorder dark:border-classic-border text-xs rounded font-mono transition-all duration-200 hover:border-classic-accent hover:scale-105 cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Backend & Database Stack -->
      <div class="bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <h4 class="font-serif font-semibold text-lg text-classic-accent mb-4">Backend & Databases</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in portfolioData.backendSkills"
            :key="skill"
            class="px-3 py-1.5 bg-classic-lightBg dark:bg-classic-bg border border-classic-lightBorder dark:border-classic-border text-xs rounded font-mono transition-all duration-200 hover:border-classic-accent hover:scale-105 cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Certifications -->
      <div class="bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <h4 class="font-serif font-semibold text-lg text-classic-accent mb-4">Certifications</h4>
        <ul class="space-y-2.5">
          <li v-for="cert in portfolioData.certifications" :key="cert" class="flex items-center text-classic-lightMuted dark:text-classic-muted text-xs transition-colors duration-300">
            <span class="w-2 h-2 bg-classic-accent rounded-full mr-2.5 transition-transform duration-300 hover:scale-125"></span>
            {{ cert }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>