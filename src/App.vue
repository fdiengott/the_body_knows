<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-wrapper">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/modalities">Modalities</RouterLink>
        <RouterLink to="/fees">Fees</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
