<template>
  <div class="main-layout">
    <NavBar />
    <section>
      <h1>Meet Josephine</h1>
      <img alt="" class="headshot" loading="lazy" src="../assets/images/Jo_pic_3.jpg">
    </section>
    <main class="about">
      <section class="vertical-offset-image"></section>
      <section>
        <div class="section-wrapper">
          <p><b>I am a Somatic Therapist, Bodyworker and Educator.  Somatic Experiencing is the foundation of my work and I integrate my other modalities of Bodywork and Voice/Movement Education to help clients connect with their bodies, and move through stress and trauma.</b></p>

          <p>Originally from Maine, my body is a child of the forest and the sea.  I have made my way to cities in the last 10 years working in the performing arts as an actor, vocalist and creator.  My body-centered performing arts training was my first look into the physiological process of discovering and healing trauma in the body.</p>

          <p>I have also spent 7 years as an educator in voice, movement, yoga and writing.  I have taught in classrooms, homes and studios around NYC and internationally.  Working with children has taught me endlessly about curiosity and gentleness, which I bring to my therapeutic work.</p>

          <p>My trauma education began in my study of Trauma-Informed Yoga and the transformative experience of teaching yoga to survivors of sexual trauma.  <b>Realizing that body-based trauma work was my deepest calling, I went on become a Reiki Master Teacher and study Somatic Experiencing and now have a private practice in Brooklyn and online.</b></p>

          <p>I am currently in my final year of the 3-year Somatic Experiencing training. <b>I specialize in serving queer folks and allies to this community.</b></p>

          <p>Curiosities in life outside of my therapeutic work include avid reading, solo nature adventures, herbalism, wildcrafting, painting, ceramics, travel, fire-escape herb gardening, performing and taking in the visual and performing arts.  I live in Brooklyn with my partner, my best friend and our sweet kitty, Franklin.</p>
        </div>
        <div class="vertical-offset"></div>
        <aside>
          <img class="headshot secondary" src="../assets/images/Jo_pic_2.jpg" alt="">
        </aside>
      </section>
      <section>
        <div class="section-wrapper">
          <h2>Who I Work With</h2>
          <p><b>I work with people who are ready to begin to develop or continue to strengthen their relationship to embodiment.</b></p>

          <p>This does not mean that you need to have any background in the practices I offer, although for some that may be supportive.</p>

          <p><b>What the modalities I practice do ask, is for the client to be open to slowly connecting with the sensations of the body and to be curious about developing compassion for whatever the body is holding.</b></p>

          <p>Somatic work can serve as a useful addition for those in ongoing talk therapy or other contemplative therapeutic practices.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';


export default {
  components: { NavBar },
}
</script>


<style lang="scss" scoped>
  @layer view {
    .main-layout {
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    h1 {
      font-size: var(--fs-700);
      font-weight: 600;
      z-index: 1;
      margin-block: 0.5em;

      position: relative;
    }

    .headshot {
      max-height: clamp(20rem, 15vw + 30rem, 50rem);
      width: 100%;
      object-fit: cover;
      object-position: center;
      filter: brightness(1.5);

      &.secondary {
        filter: brightness(1.2);
      }
    }

    .vertical-offset-image {
      margin-block-end: var(--image-banner-spacing);
    }
  }
</style>
