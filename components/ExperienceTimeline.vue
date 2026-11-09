<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'
</script>

<template>
  <section id="experience" class="py-12 border-t border-classic-lightBorder dark:border-classic-border transition-colors duration-300 scroll-mt-20">
    <h3 class="text-2xl font-serif font-bold mb-8">Professional Experience</h3>
    
    <div class="space-y-8">
      <article
        v-for="(job, index) in portfolioData.experiences"
        :key="index"
        class="bg-classic-lightCard dark:bg-classic-card border border-classic-lightBorder dark:border-classic-border p-6 rounded-lg transition-all duration-300 hover:border-classic-accent hover:shadow-lg hover:-translate-y-1 shadow-sm"
      >
        <div class="flex flex-col sm:flex-row justify-between sm:items-center border-b border-classic-lightBorder/60 dark:border-classic-border/60 pb-4 mb-4 transition-colors duration-300">
          <div>
            <h4 class="text-xl font-serif font-bold">{{ job.role }}</h4>
            <p class="text-classic-accent font-medium text-sm">{{ job.company }}</p>
          </div>
          <div class="text-right mt-2 sm:mt-0">
            <span class="text-xs text-classic-lightMuted dark:text-classic-muted font-mono block transition-colors duration-300">{{ job.period }}</span>
            <span class="text-xs text-classic-lightMuted dark:text-classic-muted block transition-colors duration-300">{{ job.location }}</span>
          </div>
        </div>
        <ul class="space-y-2 text-classic-lightMuted dark:text-classic-muted text-sm leading-relaxed transition-colors duration-300">
          <li v-for="(bullet, bIndex) in job.bullets" :key="bIndex" class="flex items-start group">
            <span class="text-classic-accent mr-2 transition-transform duration-200 group-hover:translate-x-1">›</span>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>