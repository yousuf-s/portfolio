<template>
  <section
    id="education"
    class="w-full py-20 px-6 md:px-12 lg:px-24 bg-white"
    aria-labelledby="education-title"
  >
    <!-- Section Header -->
    <div class="text-center mb-14">
      <h2
        id="education-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900"
      >
        Education
      </h2>
      <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
        My academic qualifications and the foundation of my professional
        journey.
      </p>
    </div>

    <!-- Education Card -->
    <article
      class="max-w-3xl mx-auto bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      itemscope
      itemtype="https://schema.org/EducationalOrganization"
    >
      <meta itemprop="address" content="Kadapa, Andhra Pradesh, India" />
      <meta
        itemprop="degree"
        content="Bachelor of Technology in Civil Engineering"
      />
      <h3 class="text-2xl font-semibold text-gray-900 mb-2" itemprop="name">
        Annamacharya Institute of Technology and Sciences
      </h3>

      <p class="text-gray-700 font-medium" itemprop="department">
        Bachelor of Technology in Civil Engineering
      </p>

      <p class="text-sm text-gray-500 mb-6">
        <time itemprop="startDate">September 2014</time> –
        <time itemprop="endDate">November 2018</time> · Kadapa, Andhra Pradesh
      </p>

      <ul class="space-y-3 text-gray-700 leading-relaxed">
        <li>
          • Successfully transitioned from Civil Engineering to Software
          Development through self-learning and internship opportunity.
        </li>
        <li>
          • Strengthened problem-solving, analytical thinking, and technical
          fundamentals.
        </li>
        <li>
          • Actively engaged in project-based learning and hands-on academic
          work.
        </li>
      </ul>
    </article>
  </section>
</template>

<script lang="ts" setup>
// No script logic needed for static SEO content
</script>
