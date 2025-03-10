<template>
  <header>
    <Navbar />
  </header>
  <Home />
</template>

<script setup lang="ts">
import Home from "./views/Home.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style>
body {
  font-family: "Arial", sans-serif;
}
</style>
