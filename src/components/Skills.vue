<template>
  <section
    id="skills"
    class="w-full py-20 px-6 md:px-12 lg:px-24 bg-white"
    aria-labelledby="skills-title"
    itemscope
    itemtype="https://schema.org/ItemList"
  >
    <!-- Section Heading -->
    <div class="text-center mb-14">
      <h2
        id="skills-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900"
      >
        Skills & Expertise
      </h2>
      <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
        A comprehensive overview of my core technical strengths and professional
        capabilities.
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Card Component Start -->
      <article
        class="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
        <ul class="space-y-2 text-gray-700">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SQL</li>
        </ul>
      </article>
      <!-- Card Component End -->

      <article
        class="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          Frameworks & Libraries
        </h3>
        <ul class="space-y-2 text-gray-700">
          <li>Vue.js</li>
          <li>React.js</li>
          <li>Nuxt.js</li>
          <li>Vuex</li>
          <li>Pinia</li>
          <li>Redux</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
        </ul>
      </article>

      <article
        class="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          Tools & Technologies
        </h3>
        <ul class="space-y-2 text-gray-700">
          <li>Git & Version Control</li>
          <li>RESTful APIs</li>
          <li>Agile / Scrum</li>
        </ul>
      </article>

      <article
        class="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          Core Competencies
        </h3>
        <ul class="space-y-2 text-gray-700">
          <li>Single Page Applications (SPA)</li>
          <li>Component Architecture</li>
          <li>UI/UX Implementation</li>
          <li>Performance Optimization</li>
          <li>Responsive Design</li>
          <li>Cross-Browser Compatibility</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script needed for static SEO content
</script>
