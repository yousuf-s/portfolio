<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="home d-flex flex-column justify-content-center align-items-center text-center bg-light vh-100">
        <div class="word-cloud position-absolute w-100 h-100"></div>
        <h1 class="display-4">
            Hello, I' am
            <div class="d-flex align-items-center justify-content-center vw-100 h-100 position-relative"
                style="background-color: #ededed;">
                <span class="position-absolute blinking-cursor">{{ typingText }}</span>
            </div>
        </h1>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const typingText = ref("");
const roles = ["Front-End Developer", "Vue.js Enthusiast", "Software Engineer"];
let index = 0;

const typeEffect = async () => {
    while (true) {
        for (let i = 0; i < roles[index].length; i++) {
            typingText.value = roles[index].slice(0, i + 1);
            await new Promise(r => setTimeout(r, 100));
        }
        await new Promise(r => setTimeout(r, 1000));
        for (let i = roles[index].length; i >= 0; i--) {
            typingText.value = roles[index].slice(0, i);
            await new Promise(r => setTimeout(r, 50));
        }
        index = (index + 1) % roles.length;
    }
};

onMounted(() => typeEffect());
</script>

<style>
.word-cloud {
    background-image: url('/assets/word-cloud.png');
    opacity: 0.2;
    z-index: -1;
}

/* Blinking Cursor Effect */
@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.blinking-cursor::after {
    content: '|';
    /* This is the blinking cursor */
    display: inline-block;
    margin-left: 5px;
    /* Adjust the space between the text and the cursor */
    animation: blink 1s step-end infinite;
    /* Blinking effect */
}
</style>