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
          <span class="block mb-4">
            <p
              class="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide"
            >
              Frontend
            </p>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Vuex</li>
            <li>Pinia</li>
            <li>Vuex</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </span>

          <span>
            <p
              class="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide"
            >
              Backend
            </p>
            <li>Node.js</li>
            <li>Express.js</li>
          </span>
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
          <li>Axios</li>
          <li>Fetch API</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </article>

      <article
        class="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          Core Competencies
        </h3>
        <ul class="space-y-2 text-gray-700">
          <li>Full Stack Development</li>
          <li>SPA Architecture</li>
          <li>SSR with Nuxt.js</li>
          <li>Component-Driven Design</li>
          <li>State Management</li>
          <li>RESTful API Design & Integration</li>
          <li>Performance Optimization</li>
          <li>Cross-Browser Development</li>
          <li>Agile/Scrum Methodologies</li>
          <li>Code Reviews & Mentoring</li>
          <li>Debugging & Problem Solving</li>
          <li>AI-Assisted Development & Prompt Engineering</li>
          <li>Responsive Design</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script needed for static SEO content
</script>
