<template>
  <main>
    <NavBar :home="true" />
    <div class="title-card">
      <div class="text-container blur-background" ref="textContainer">
        <h1>Somatic Experiencing Therapy and Bodywork</h1>

        <RouterLink class="link-hover learn-more" to="/about">Learn More</RouterLink>
      </div>
      <img alt="A branch of green Gingko leaves, where some are illuminated by the sun. More leaves appear blurry in the background." loading="lazy" src="../assets/images/raphael-wild-unsplash.webp">
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';

const intersectOptions = {}

export default {
  name: 'HomeView',
  components: { RouterLink, NavBar },
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


<style scoped lang="scss">
@layer component {
  main {
    overflow: hidden;
  }

  .title-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    height: 100%;
    color: var(--white-soft);
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
    margin-bottom: 2rem;
    font-size: var(--fs-800);
    line-height: 1.2;
    font-weight: 600;
  }

  .text-container {
    --transition-delay: 300ms;

    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      opacity: 0;
      filter: blur(3px);
      transition: filter 1s ease-in-out, opacity 1s ease-in-out;
      transition-delay: var(--transition-delay);
    }

    &.show {

      > * {
        opacity: 1;
        filter: blur(0);

        &:nth-child(2) {
          display: block;
          transition-delay: calc(var(--transition-delay) + 200ms);
        }
      }
    }


    .learn-more {
      font-size: var(--fs-500);

      &::after {
        width: 100%;
      }

      &:hover::after {
        background-color: var(--color-primary);
      }
    }
  }
}
</style>
