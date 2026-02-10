<template>
  <div class="main-layout">
    <NavBar />
    <section>
      <h1>Meet Josephine SEP, CYT, RMT</h1>
      <img 
        alt="Therapist Josephine is seen with short hair and dangling wooden earrings gazing to the right with a soft smile. The background is soft, lush woods gently blurred." 
        class="headshot" 
        loading="lazy" 
        srcset="../assets/images/Jo_pic_1-640.jpg 640w, ../assets/images/Jo_pic_1-768.jpg 768w, ../assets/images/Jo_pic_1-1024.jpg 1024w, ../assets/images/Jo_pic_1-1366.jpg 1366w, ../assets/images/Jo_pic_1-1600.jpg 1600w, ../assets/images/Jo_pic_1.webp 2400w"
        sizes="
          (min-width: 640px) 768px,
          (min-width: 768px) 1024px,
          (min-width: 1024px) 1366px,
          (min-width: 1366px) 1600px,
          (min-width: 1600px) 2400px,
          100vw
        "
        src="../assets/images/Jo_pic_1.webp"
      >
    </section>
    <main class="about">
      <section class="vertical-offset-image"></section>
      <section>
        <div class="section-wrapper">
          <p><b>I am a Somatic Experiencing Practitioner, Reiki Master and Voice Educator. I combine these modalities along with Somatic Touch Therapy, to help clients connect with their bodies, and move through stress and trauma.</b></p>

          <p>Originally from Maine, my body is a child of the forest and the sea.  I have made my way to cities in the last 10 years working in the performing arts as an actor, vocalist and creator.  My body-centered performing arts training was my first look into the physiological process of discovering and healing trauma in the body.</p>

          <p>I have also spent 7 years as an educator in voice, movement, yoga and writing.  I have taught in classrooms, homes and studios around NYC and internationally.  Working with children has taught me endlessly about curiosity and gentleness, which I bring to my therapeutic work.</p>

          <p>My trauma education began in my study of Trauma-Informed Yoga and the transformative experience of teaching yoga to survivors of sexual trauma.  <b>Realizing that that body-based trauma work was my deepest calling, I went on to become a Somatic Experiencing Practitioner and Reiki Master and to study the Somatic Touch Therapy work of Kathy Kain. I am also currently deepening my vocal studies in relation to attachment and trauma. I am proud to be a member of Somatic Experiencing International and to assist SE trainings to support the next generation of SE practitioners.</b> I specialize in serving queer folks and allies to this community.</p>

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
      <section class="primary">
        <div class="section-wrapper">
          <h2>Where I Work</h2>
          <ul class="work-list">
            <li>I see clients nationally and internationally via Zoom</li>
            <li>I have an office in Clinton Hill, Brooklyn</li>
          </ul>
        </div>
      </section>
      <section>
        <div class="section-wrapper">
          <h2>My Education</h2>
          <ul class="education-list">
            <li>
              <div>Somatic Experiencing International 3 Year Professional Program</div>
              <ul><li>Approved SE Training Assistant</li></ul>
            </li>
            <li>
              <div>Somatic Touch Skills with Kathy Kain Modules 1, 2, and 3</div>
              <ul><li>Approved Somatic Touch Skills Assistant</li></ul>
            </li>
            <li>Reiki Master Training with Reiki Master Tara Tonini</li>
            <li>The Voice Keeps the Score: Sound As A Portal To Embodiment Training with Linda Thai</li>
            <li>Certificate in Somatic Embodiment and Regulation Strategies with Linda Thai</li>
            <li>Luis Mojica Somatics Course</li>
            <li>IRF (Inner Relationship Focusing) Parts Work Level 1 with Maureen Gallagher</li>
            <li>Exhale to Inhale Trauma Informed Yoga Teacher Training in NYC</li>
            <li>200-Hour Yoga Teacher Training with Kusum Institute</li>
            <li>Birth Doula Training with Debra Pascali Bonaro in NYC</li>
            <li>Hypnobirth Childbirth class with Gili Levitin</li>
            <li>Introduction to Chinese Medicine Philosophy with acupuncturist Jasmine Stine</li>
            <li>BFA in Theatre with minor in Health Communication - Emerson College</li>
            <li>Health Coach Certification with The Institute for Integrative Nutrition</li>
            <li>Linklater Voice Training - 2013 - present with various teachers</li>
            <li>Singing Training - 20 years with multiple teachers</li>
          </ul>
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
    li {
      list-style-type: "–  ";
    }

    li li {
      margin-inline-start: 2rem;
    }

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
      max-height: clamp(20rem, 15vw + 30rem, 66vh);
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

    .education-list {
      display: grid;
      gap: 1rem;
    }
  }
</style>
