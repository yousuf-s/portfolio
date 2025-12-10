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
          Associate Consultant
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Infosys, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">May 2025</time> – Present
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Architecting and developing enterprise-level front-end solutions
            using Vue.js and React.js.
          </li>
          <li>
            • Collaborating with product and backend teams to convert business
            requirements into scalable implementations.
          </li>
          <li>
            • Ensuring code quality, maintainability, and performance through
            modern engineering standards.
          </li>
          <li>
            • Mentoring junior developers and conducting code reviews to
            maintain project-wide consistency.
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
          Software Engineer I
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Owfis Jobpe Technologies, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">Jan 2023</time> – Mar 2025
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Led UI development for AI-powered web applications, enhancing user
            engagement and productivity.
          </li>
          <li>
            • Built reusable component libraries using Vue.js and TypeScript to
            speed up development cycles.
          </li>
          <li>
            • Optimized performance through code splitting, lazy loading, and
            bundle size reduction.
          </li>
          <li>
            • Collaborated cross-functionally to ensure seamless API integration
            and high application stability.
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
          Software Engineer
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Mantra, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">Jun 2022</time> – Dec 2022
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Developed responsive, cross-browser compatible web interfaces
            using Vue.js.
          </li>
          <li>
            • Implemented Vuex-based state management to handle large, dynamic
            datasets.
          </li>
          <li>
            • Converted Figma designs into pixel-perfect, production-ready
            interfaces.
          </li>
          <li>
            • Improved front-end architecture and contributed to coding
            standardization.
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
          Software Developer Intern
        </h3>
        <p class="text-gray-700 font-medium" itemprop="hiringOrganization">
          Talentsprint Pvt. Ltd, Hyderabad
        </p>
        <p class="text-sm text-gray-500 mb-4">
          <time itemprop="datePosted">Jan 2022</time> – May 2022
        </p>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li>
            • Built interactive web applications using React.js during hands-on
            training.
          </li>
          <li>
            • Assisted senior developers with feature implementations and
            debugging tasks.
          </li>
          <li>
            • Learned version control, component-based architecture & responsive
            UI practices.
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script logic needed for static content.
</script>
