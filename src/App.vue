<template>
  <div id="app-wrapper">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: { RouterView }
}
</script>

<style scoped>
@layer view {
  #app-wrapper {
    position: relative;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;

    scroll-behavior: smooth;
    scroll-padding-top: 8%;
  }
}

</style>
