<template>
  <section
    id="home"
    class="bg-gray-50 flex flex-col justify-center items-center text-center h-screen px-6"
  >
    <h1 class="text-4xl md:text-6xl font-bold">
      Hello, I am
      <div
        class="flex items-center justify-center h-full relative bg-gray-200 px-4 py-2 rounded-md w-[50rem] mt-3"
      >
        <span class="absolute blinking-cursor">{{ typingText }}</span>
      </div>
    </h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const typingText = ref("");
const roles = [
  "Syed Yousuf",
  "Front-End Developer",
  "Vue.js Enthusiast",
  "Software Engineer",
];
let index = 0;
let isTyping = true; // Flag to control the loop

const typeEffect = async () => {
  while (isTyping) {
    for (let i = 0; i < roles[index].length; i++) {
      typingText.value = roles[index].slice(0, i + 1);
      await new Promise((r) => setTimeout(r, 100));
    }
    await new Promise((r) => setTimeout(r, 2000));
    for (let i = roles[index].length; i >= 0; i--) {
      typingText.value = roles[index].slice(0, i);
      await new Promise((r) => setTimeout(r, 50));
    }
    index = (index + 1) % roles.length;
  }
};

onMounted(() => {
  isTyping = true; // Ensure loop starts
  typeEffect();
});
</script>

<style>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.blinking-cursor::after {
  content: "|";
  display: inline-block;
  margin-left: 5px;
  animation: blink 1s step-end infinite;
}
</style>
