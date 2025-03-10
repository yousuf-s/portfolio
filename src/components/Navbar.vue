<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'bg-transparent': !isScrolled, 'bg-light': isScrolled }">
        <div class="container justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="section in sections" :key="section">
                    <a class="nav-link">{{ section }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sections = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];
const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
