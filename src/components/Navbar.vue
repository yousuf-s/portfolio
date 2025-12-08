<template>
  <nav
    class="fixed top-0 w-full z-10 bg-white shadow-md px-5 lg:px-10 py-3 transition-all"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div
        class="text-2xl font-bold text-gray-900 cursor-pointer flex gap-3 items-center"
        @click="scrollToSection('home')"
        title="Syed Yousuf | Frontend Developer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-code-xml"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
        Portfolio
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden text-gray-700 focus:outline-none"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-7">
        <li v-for="section in sections" :key="section.id" class="nav-item">
          <a
            class="font-semibold text-neutral-700 group cursor-pointer relative"
            :class="{
              'text-neutral-900 font-bold': activeSection === section.id,
            }"
            @click="scrollToSection(section.id)"
          >
            <span
              class="after:absolute after:bg-neutral-900 after:bottom-2 after:h-[3px] flex group-hover:after:w-full items-center p-[18px_0px] relative after:transition-all after:duration-300 after:ease-in-out"
              :class="{
                'after:w-full': activeSection === section.id,
              }"
            >
              {{ section.name }}
            </span>
          </a>
        </li>
      </ul>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md mt-3 py-4">
        <div
          class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          @click="isMenuOpen = !isMenuOpen"
        ></div>
        <div
          class="hero-section fixed top-0 left-0 bottom-0 flex flex-col w-1/2 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto animate-slideright"
        >
          <div
            class="text-2xl font-bold text-gray-900 flex justify-between items-center border-b-2 border-gray-400 pb-2 mb-4"
          >
            Portfolio
            <button @click="isMenuOpen = !isMenuOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <ul class="flex flex-col items-center space-y-4">
            <li v-for="section in sections" :key="section.id">
              <a
                class="hover:text-neutral-900 transition duration-300"
                :class="
                  activeSection === section.id
                    ? 'text-neutral-900 font-bold'
                    : 'font-semibold text-neutral-600'
                "
                @click="(isMenuOpen = !isMenuOpen), scrollToSection(section.id)"
              >
                {{ section.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sections = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "education", name: "Education" },
  { id: "contact", name: "Contact" },
];

const activeSection = ref("home");
const isMenuOpen = ref(false);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({ top: element.offsetTop - 70, behavior: "smooth" });
  }
};

const handleScroll = () => {
  let currentSection = "home";
  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
        currentSection = section.id;
      }
    }
  });
  activeSection.value = currentSection;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style>
.nav-item span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 0;
  background-color: #333;
  transition: width 0.3s ease-in-out;
}

.nav-item:hover span::after,
.nav-item .text-neutral-900 span::after {
  width: 100%;
}
</style>
