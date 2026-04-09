<template>
  <section
    id="experience"
    class="w-full py-20 px-6 md:px-12 lg:px-24"
    aria-labelledby="experience-title"
  >
    <!-- Section Header -->
    <div class="text-center mb-14">
      <h2
        id="experience-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900"
      >
        Professional Experience
      </h2>
      <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
        A summary of my professional journey, responsibilities, and achievements
        across leading organizations.
      </p>
    </div>

    <!-- Experience Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Experience Card -->
      <article
        class="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        itemscope
        itemtype="https://schema.org/JobPosting"
      >
        <meta itemprop="employmentType" content="Full-time" />
        <meta itemprop="industry" content="Software Development" />
        <h3 class="text-2xl font-semibold text-gray-900 mb-2" itemprop="title">
          Associate Consultant — Full Stack Developer
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Infosys, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">May 2025</time> – Present
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Architecting and developing enterprise-grade full stack
            applications using Vue.js and Nuxt.js with SSR optimization.
          </li>
          <li>
            • Designing and integrating RESTful APIs with Node.js/Express.js to
            ensure seamless data flow across large-scale systems.
          </li>
          <li>
            • Driving performance improvements using code splitting, lazy
            loading, and memoization to maintain sub-2s load times.
          </li>
          <li>
            • Leading code reviews and mentoring developers on Vue.js,
            TypeScript, and scalable component architecture.
          </li>
        </ul>
      </article>

      <!-- Experience Card -->
      <article
        class="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        itemscope
        itemtype="https://schema.org/JobPosting"
      >
        <h3 class="text-2xl font-semibold text-gray-900 mb-2" itemprop="title">
          Software Engineer I — Full Stack Developer
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Owfis Stark.ai, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">Jan 2023</time> – Mar 2025
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Led end-to-end development of AI-powered applications using
            Vue.js, Nuxt.js, and TypeScript with SSR-optimized architecture.
          </li>
          <li>
            • Built a Chrome Extension with Node.js/Express.js automation,
            boosting team productivity by 40%.
          </li>
          <li>
            • Developed a reusable component library across modules, reducing
            feature delivery time by 30%.
          </li>
          <li>
            • Improved performance by 50% through code splitting, lazy loading,
            and optimized bundle strategies.
          </li>
        </ul>
      </article>

      <!-- Experience Card -->
      <article
        class="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        itemscope
        itemtype="https://schema.org/JobPosting"
      >
        <h3 class="text-2xl font-semibold text-gray-900 mb-2" itemprop="title">
          Software Engineer — Frontend Developer
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Mantra, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">Jun 2022</time> – Dec 2022
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Developed responsive, cross-browser web applications using Vue.js
            and ES6+ with Vuex for scalable state management.
          </li>
          <li>
            • Translated Figma designs into pixel-perfect interfaces and
            improved load time by 25% using lazy loading and asset optimization.
          </li>
          <li>
            • Collaborated with backend teams on RESTful API integration and
            agile delivery cycles.
          </li>
          <li>
            • Contributed to frontend architecture and established Vue.js coding
            standards across the team.
          </li>
        </ul>
      </article>

      <!-- Experience Card -->
      <article
        class="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        itemscope
        itemtype="https://schema.org/JobPosting"
      >
        <h3 class="text-2xl font-semibold text-gray-900 mb-2" itemprop="title">
          Application Developer — Backend Developer
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          VNV Logixpace Pvt. Ltd, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">Feb 2021</time> – May 2022
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Built and maintained Node.js/Express.js backend services and
            RESTful APIs for dynamic frontend consumption.
          </li>
          <li>
            • Designed MySQL schemas and optimized queries to support core
            business logic and performance.
          </li>
          <li>
            • Implemented server-side validation, middleware, and error handling
            to improve API reliability and security.
          </li>
          <li>
            • Collaborated with frontend teams to define API contracts and
            ensured smooth integration across systems.
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script logic needed for static content.
</script>
