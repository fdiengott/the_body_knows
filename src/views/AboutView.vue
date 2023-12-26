<template>
  <div class="main-layout">
    <NavBar />
    <section>
      <h1>Meet Josephine</h1>
      <img alt="Therapist Josephine is seen with short hair and dangling wooden earrings gazing to the right with a soft smile. The background is soft, lush woods gently blurred." class="headshot" loading="lazy" src="../assets/images/Jo_pic_1.webp">
    </section>
    <main class="about">
      <section class="vertical-offset-image"></section>
      <section>
        <div class="section-wrapper">
          <p><b>I am a Somatic Experiencing Practitioner, Reiki Master and Voice Educator. I combine these modalities to help clients connect with their bodies, and move through stress and trauma.</b></p>

          <p>Originally from Maine, my body is a child of the forest and the sea.  I have made my way to cities in the last 10 years working in the performing arts as an actor, vocalist and creator.  My body-centered performing arts training was my first look into the physiological process of discovering and healing trauma in the body.</p>

          <p>I have also spent 7 years as an educator in voice, movement, yoga and writing.  I have taught in classrooms, homes and studios around NYC and internationally.  Working with children has taught me endlessly about curiosity and gentleness, which I bring to my therapeutic work.</p>

          <p>My trauma education began in my study of Trauma-Informed Yoga and the transformative experience of teaching yoga to survivors of sexual trauma.  <b>Realizing that body-based trauma work was my deepest calling, I went on become a Reiki Master Teacher and study Somatic Experiencing and now have a private practice in Brooklyn and online.</b> I specialize in serving queer folks and allies to this community.</p>

          <p>Curiosities in life outside of my therapeutic work include avid reading, solo nature adventures, herbalism, wildcrafting, painting, ceramics, travel, fire-escape herb gardening, performing and taking in the visual and performing arts.  I live in Brooklyn with my spouse, my best friend and our sweet kitty, Franklin.</p>
        </div>
        <div class="vertical-offset"></div>
        <aside>
          <img alt="Therapist Josephine with short hair and dangling wooden earrings smiles broadly while looking at and touching white flowers in a squatting position.  She is surrounded by tall plants and grasses with woods in the background." class="headshot secondary" loading="lazy" src="../assets/images/Jo_pic_2.webp">
        </aside>
      </section>
      <section>
        <div class="section-wrapper">
          <h2>Who I Work With</h2>
  <p><b>I work with people who are ready to begin to develop or continue to strengthen their relationship to embodiment.</b></p>

  <p>I specialize in working with queer folks, care workers (birth workers, bodyworkers, parents, educators, therapists, healers etc.) and artists. With this said - my practice is open to all who feel ready to slowly develop compassion for whatever their body is holding.</p>

  <p>As I am not a psychotherapist, some prior experience in either talk therapy or other contemplative practices can be helpful for clients of this work. Since we will focus on the story the body has to tell (in whatever kind of <a href="offerings">session</a> we are doing), it is helpful if some work has already been done on the cognitive level.</p>
        </div>
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: { NavBar, FooterComponent }
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
      margin-inline-start: 1em;

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
