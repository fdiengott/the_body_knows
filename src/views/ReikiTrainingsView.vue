<template>
    <div class="main-layout">
        <NavBar />
        <section class="image-banner">
            <h1><div>Reiki Trainings</div> with Reiki Master Teacher Josephine</h1>
            <img alt="" loading="lazy" src="../assets/images/reiki-training-greenery.webp">
        </section>
        <main>
            <section id="">
                <div class="section-wrapper">
                    <p>I am currently offering Reiki Level 1 training in a hybrid format with the first few hours online and a full Saturday in-person in Brooklyn. Reiki Level 2 and Masters Training will be offered in the future.``</p>

                    <p>Reiki Training is for everyone whether or not you have received Reiki before. In the training, you will be attuned to the Reiki energy and learn how to bring this practice into your every day life.</p>
                </div>
            </section>
            <section id="">
                <div class="section-wrapper">
                    <h2>In Reiki Level 1 You Will Learn:</h2>
                    <img alt="" loading="lazy" src="../assets/images/reiki-level-1-post.webp">

                    <ul class="bulleted-list">
                        <li>The history or Reiki</li>
                        <li>What it feels like to give and receive Reiki sessions</li>
                        <li>The main hand placements and how to use touch with integrity, care and confidence</li>
                        <li>How to use Reiki as a self-care practice</li>
                        <li>How to share the practice with loved ones, pets and plants</li>
                        <li>How you might bring Reiki to your work</li>
                    </ul>

                    <p>This training is particularly recommended for care workers who would like to use Reiki as self care for themselves and perhaps share with their communities. This may include therapists, birth workers, teachers, medical professionals, parents etc.</p>
                </div>
            </section>
            <section class="primary" id="">
                <div class="section-wrapper">
                    <h2>Schedule</h2>
                    <p>The training takes place over 2 days (10.5 hours total including breaks)</p>

                    <h3>Day One</h3>
                    <p>Wednesday April 3rd: 6pm-9:30pm (via Zoom/will be recorded if some students can’t make it, although live attendance is suggested)</p>

                    <h3>Day Two</h3>
                    <p>Saturday April 6th: 11am-6pm in Clinton Hill, Brooklyn</p>

                    <p>Investment: $275</p>
                </div>
            </section>
            <section id="">
                <div class="section-wrapper">
                    <p>If you're ready to register, or have any questions, feel free to <a href="/contact">reach out</a>! You can also request a 15 minute Zoom for us to get to know each other prior to registration.</p>
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
    .image-banner {
        position: relative;

        h1 {
            z-index: 1;
            position: relative;
            text-align: center;
        }

        img {
            width: 100%;
            position: absolute;
            bottom: 0;
        }
    }

    h1 {
        font-size: var(--fs-700);
        font-weight: 600;
        margin-block: 0.5em;
    }

    .section-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 70rem;
        margin-inline: auto;
    }

    section:not(.primary) .section-wrapper {
        padding-block: 0;
    }

    .primary+section {
        margin-block-start: 5rem;
    }

    .bulleted-list {
        list-style: outside;
    }

    :where(h2, h3) + p {
        margin-block-start: 0;
    }
}
</style>
