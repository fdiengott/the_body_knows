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

<template>
  <main>
    <NavBar :home="true" />
    <div class="title-card">
      <div class="text-container blur-background" ref="textContainer">
        <h1>Somatic Experiencing Therapy and Bodywork</h1>

        <RouterLink class="link-hover learn-more" to="/about">Learn More</RouterLink>
      </div>
      <img src="../assets/images/raphael-wild-unsplash.jpg" alt="" srcset="">
    </div>


  </main>
</template>

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
    text-wrap: balance;
    line-height: 1.2;
    font-weight: 600;
  }

  .text-container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      opacity: 0;
      filter: blur(3px);
      transition: all 1s ease-in-out;
    }

    &.show {

      > * {
        opacity: 1;
        filter: blur(0);

        &:nth-child(2) {
          display: block;
          transition-delay: 200ms;
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

      // &::before {
      //   content: '';
      //   display: block;
      //   width: 0;
      //   height: 3px;
      //   margin-left: auto;
      //   transition: var(--default-transition-speed) all linear;
      //   background-color: var(--color-primary);
      // }

      // &:hover::before {
      //   width: 100%;
      // }
    }
  }
}
</style>
