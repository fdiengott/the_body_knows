<script>
import { RouterLink } from 'vue-router';
// import TestComponent from '../components/TestComponent.vue';
export default {
  name: 'HomeView',
  components: { RouterLink },
  // setup() {
  //   const id = 'freddy';

  //   return { id }
  // }

}

// const id = 'freddy';
</script>

<template>
  <main>
    <!-- <TestComponent :id="id" /> -->
    <h1>
      Somatic Experiencing Therapy and Bodywork
    </h1>
    <RouterLink to="/">Learn More</RouterLink>


  </main>
</template>
