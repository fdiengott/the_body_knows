<template>
  <div class="app-wrapper">
    <div id="header-scroll-listener"></div>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

window.addEventListener('load', () => {
  const handleIntersect = () => {
    // console.log('intersecting');

  }
  const options = {
    // root: null
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(document.querySelector('#header-scroll-listener'));
})

export default {

  setup() {
    return {
      sticking: false
    }
  },
  components: { RouterView }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;

  scroll-behavior: smooth;
  scroll-padding-top: 8%;
}
</style>
