<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const intersectOptions = {}

export default {
  name: 'HomeView',
  components: { RouterLink },
  methods: {
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.textContainer.classList.add('show');
        }
      })
    },
    getIntersectionObserver() {
      return new IntersectionObserver(this.handleIntersect, intersectOptions);
    },
  },
  setup() {
    const textContainer = ref(null);

    return {
      textContainer,
      observer: null
    }
  },
  mounted() {
    this.observer = this.getIntersectionObserver();

    this.observer.observe(this.textContainer);
  },
}
</script>

<template>
  <main>
    <div class="title-card">
      <div class="text-container" ref="textContainer">
        <h1>Somatic Experiencing Therapy and Bodywork</h1>

        <RouterLink class="link-hover" to="/about">Learn More</RouterLink>
      </div>
      <img src="../assets/images/yellow-gingko-unspash.jpg" alt="" srcset="">
    </div>


  </main>
</template>

<style scoped lang="scss">
.link-hover {
  display: grid;
  justify-content: center;
  padding: 0.2rem 0.4rem;
}

@layer component {
  .title-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;

    // background-image: url('../assets/images/raphael-wild-unsplash.jpg');
    // height: 90vh;
    height: 100%;
    // background-size: cover;

    color: #fff;

    position: relative;

    img {
      z-index: -2;
      position: absolute;
      transition: 250ms filter linear;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  h1 {
    // TODO make this text-size way bigger
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 600;
  }

  .text-container {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 0;

      background-color: #dfdfdf;
      mix-blend-mode: multiply;
      filter: blur(12px);
    }

    > * {
      opacity: 0;
      transform: translate(-100%);
      filter: blur(3px);
      transition: all 1s ease-in-out;
    }

    &.show {

      > * {
        opacity: 1;
        transform: translate(0);
        filter: blur(0);

        &:nth-child(2) {
          display: block;
          transition-delay: 200ms;
        }
      }
    }
  }
}
</style>
