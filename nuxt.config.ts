// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // Enable SSR so Nuxt pre-renders static HTML during generation
  ssr: true,

  // Force Nitro to prerender the root index route into static HTML
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // App head settings optimized for Google Search ranking & rich snippets
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Yousuf Syed | Full Stack Engineer & Vue/Nuxt Specialist in Hyderabad',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Portfolio of Yousuf Syed, Full Stack Engineer with 5 years of professional experience specializing in Vue.js, Nuxt.js, Node.js, Express.js, MongoDB, MySQL, and TypeScript based in Hyderabad, India.' 
        },
        { name: 'author', content: 'Yousuf Syed' },
        { name: 'keywords', content: 'Yousuf Syed, Full Stack Engineer Hyderabad, Vue.js Developer, Nuxt.js Specialist, Node.js Developer, Express, MongoDB, MySQL, Software Engineer India' },
        
        // Open Graph / Social Media SEO (Google Discover & Social Shares)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Yousuf Syed | Full Stack Engineer & Vue/Nuxt Specialist' },
        { property: 'og:description', content: 'Explore the portfolio of Yousuf Syed, a Full Stack Engineer with 5 years of experience building scalable web apps using Vue.js, Nuxt.js, Node.js, Express, MongoDB, and MySQL.' },
        { property: 'og:url', content: 'https://yousuf-syed.vercel.app' },
        { property: 'og:site_name', content: 'Yousuf Syed Portfolio' },
        
        // Twitter Card SEO
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yousuf Syed | Full Stack Engineer' },
        { name: 'twitter:description', content: 'Full Stack Engineer specializing in Vue.js, Nuxt.js, Node.js, Express, MongoDB, and MySQL.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://yousuf-syed.vercel.app' }
      ]
    }
  }
})