<template>
  <header>
    <Navbar />
  </header>
  <Home />
</template>

<script setup lang="ts">
import Home from "./views/Home";
import Navbar from "./components/Navbar";
</script>

<style>
body {
  font-family: "Arial", sans-serif;
}
</style>
