<template>
  <nav class="fixed top-0 w-full z-10 bg-white">
    <div class="container mx-auto flex justify-center">
      <ul class="flex space-x-7">
        <li v-for="section in sections" :key="section" class="nav-item">
          <a class="font-semibold text-gray-600 group cursor-pointer">
            <span
              class="after:absolute after:bg-neutral-900 after:bottom-2 after:h-[3px] flex group-hover:after:w-full items-center p-[18px_0px] relative"
              >{{ section }}</span
            >
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sections = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
