<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="app-wrapper">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
/* nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
} */
</style>
