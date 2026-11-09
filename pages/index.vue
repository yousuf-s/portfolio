<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { portfolioData } from '~/data/portfolioData'

// SEO Structured Data (JSON-LD)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: portfolioData.personal.name,
        jobTitle: 'Associate Consultant | Full Stack Engineer',
        url: 'https://yousuf-syed.vercel.app',
        sameAs: [portfolioData.personal.linkedin],
        knowsAbout: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JavaScript', 'TypeScript', 'REST APIs'],
        worksFor: {
          '@type': 'Organization',
          name: 'Infosys'
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'India'
        }
      })
    }
  ]
})

// Smooth scroll handler with URL hash management
const scrollToSection = (e: MouseEvent, id: string) => {
  e.preventDefault()
  if (id === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname)
    }
    return
  }
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }
}

// Observe sections on manual scroll to update URL hash dynamically
onMounted(() => {
  const sections = document.querySelectorAll('section[id], div[id="hero"]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id === 'hero') {
            if (window.location.hash) {
              history.replaceState(null, '', window.location.pathname)
            }
          } else {
            history.replaceState(null, '', `#${id}`)
          }
        }
      })
    },
    { threshold: 0.3 }
  )

  sections.forEach((sec) => observer.observe(sec))

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-8 animate-fade-in">
    <HeaderNav :on-navigate="scrollToSection" />
    <HeroSection />
    <TechStack />
    <ExperienceTimeline />
    <ContactFooter />
  </div>
</template>

<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.7s ease-out forwards;
}
</style>