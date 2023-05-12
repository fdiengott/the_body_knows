<script>
// import { defineComponent } from 'vue';
// import Home from '../components/Home.vue'
import TestComponent from '../components/TestComponent.vue';

export default {
  // name: 'HomeView',
  components: { TestComponent },
  setup() {
    const id = 'freddy';

    return { id }
  }

}

// const id = 'freddy';
</script>

<template>
  <main>
    <!-- <Home /> -->
    <TestComponent :id="id" />
  </main>
</template>
