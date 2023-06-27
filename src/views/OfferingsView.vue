<template>
    <div class="main-layout">
        <NavBar />
        <section class="image-banner">
            <h1>Offerings</h1>
            <img src="../assets/images/rosemary.jpg" alt="A short leafed rosemary plant">
        </section>
        <main>
            <aside class="sticky-aside">
                <ul class="nav-links">
                    <li><a href="#somatic-work">What is Somatic Work</a></li>
                    <li><a href="#somatic-experiencing">Somatic Experiencing</a></li>
                    <li><a href="#reiki">Reiki</a></li>
                    <li><a href="#voice">Voice</a></li>
                    <li><a href="#movement-yoga">Movement/Yoga</a></li>
                </ul>
            </aside>
            <section id="somatic-work">
                <div class="section-wrapper">
                    <h2>What is Somatic Work?</h2>
                    <p>Somatic practices like Somatic Experiencing explore how our feelings, memories, conscious thoughts, behaviors and sensations are all experienced in our body. These modalities differ from psychotherapy. Rather than prioritizing only speaking the story of events that have affected us, we make space for the felt experience of the body.</p>
                    <p>This might look like noticing sensations in the body connected to thoughts that cause us discomfort and helping the body learn to feel safe. <b>This work is purposely slow because when our body is holding trauma responses, what it needs is time, space and support.</b> We will take our time to help the body process what it is holding physiologically.</p>
                    <p>With my background as an educator, I believe in teaching my clients about how their nervous system functions. <b>I find that understanding why our bodies behave the way that they do can be deeply relieving and empowering. Our bodies are not defective, they are protective.</b></p>
                </div>
            </section>
            <section id="somatic-experiencing">
                <div class="section-wrapper">
                    <h2>Somatic Experiencing (SE™)</h2>
                    <img src="../assets/images/open_book.jpg" alt="A closeup image of an open book with a sewn in bookmark">
                    <p>Somatic Experiencing (SE™) is a “body-oriented therapeutic model for healing trauma and stress. It is based on a multidisciplinary intersection of physiology, psychology, ethology, biology, neuroscience, indigenous healing practices, and medical biophysics and has been clinically applied for more than four decades. It is the life’s work of Dr. Peter A. Levine."</p>
                    <p>In my personal experience, SE has empowered me to create a deep relationship with my body and to trust and care for myself in new ways. <b>By learning how to listen more deeply, patterns of trauma and overwhelm find their way toward softening and resolution.</b> Our capacity for connection with others becomes more engaged. We experience more of what it feels like to be alive and develop an environment of curiosity for the experiences of our body. <b>With increased resilience, we can find ways to move through each day's inevitable challenges with less discomfort and more support from the inside out.</b></p>
                </div>
            </section>
            <section class="primary" id="reiki">
                <div class="section-wrapper">
                    <h2>Other Modalities I Integrate with Somatic Experiencing</h2>
                    <ul class="other-modalities-links nav-links">
                        <li><a href="#reiki">Reiki</a></li>
                        <li><a href="#voice">Voice</a></li>
                        <li><a href="#movement-yoga">Movement/Yoga</a></li>
                    </ul>

                    <h3>Reiki</h3>
                    <p>
                        I combine reiki with Somatic Experiencing as a tool for supporting the nervous system. Reiki is a form of hands-on (or distance) energy healing that originated in Japan, that brings relief from suffering and supports overall health.
                    </p>
                    <p>
                        Reiki can be used to work with physical pain, emotional distress and grief. It is also useful in tapping into our intuition and felt sense of the body and is an empowering practice of trusting in our bodies innate capacity to heal. Reiki can be used in my sessions in-person or remotely. During the Reiki portion of the practice, we may continue to be in dialogue or may use this part of the session as a quiet time for the nervous system to integrate the SE work.
                    </p>
                    <p>
                        In my personal experience, Reiki is a soft place to land. It provides an opportunity to listen to the body and connect with a sense of safety and being supported, which is especially supportive for trauma resolution work.
                    </p>
                </div>
            </section>
            <section id="voice">
                <div class="section-wrapper">
                    <a class="chevron-link" href="#reiki"></a>
                    <h3>Voice</h3>
                    <p>
                        Connecting with the voice can be a powerful tool in working with stress and trauma.  We may make contact with the voice through humming, sighing, and for those who are interested, singing.  Working with the voice in an empowered way can be particularly effective for those whose voice has ever felt stifled.
                    </p>
                    <p>
                        For me, the voice practices I use on a daily basis for myself help me to create a sense of space inside my body.  And with trauma, a lack of space inside (tension in the muscles, fascia, viscera etc.) often causes a lot of discomfort. <b>Being able to free my voice (with no expectation of how it sounds) has been a foundational part of my healing journey.</b>
                    </p>
                </div>
            </section>
            <section class="primary" id="movement-yoga">
                <div class="section-wrapper">
                    <a class="chevron-link primary" href="#reiki"></a>
                    <h3>Movement/Yoga</h3>
                    <p>
                        Sometimes when we feel stuck, it proves useful to listen to how our bodies would like to move.  And in times of overwhelm, movement can be a wonderful tool that we can do almost anywhere to help our body to regulate.  We may explore using movement in our sessions to help feel sensation and release tension.  For those for whom Yoga is a supportive practice, we may also use Yoga postures to create spaciousness or practice working with activation.
                    </p>
                    <p>
                        In my experience, movement practice can be a wonderful medicine.  And it is particularly useful that it is a constant tool we carry with us throughout our days.  I believe in empowering my clients to be in relationship with their bodies' innate healing wisdom through their everyday movement outside of sessions if they feel comfortable.
                    </p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
    components: { NavBar }
}
</script>

<style lang="scss">
    @layer view {
        .image-banner h1 {
            z-index: 1;
            position: relative;
        }

        h1 {
            font-size: var(--fs-700);
            font-weight: 600;
            margin-block: 0.5em;
        }

        .sticky-aside {
            display: none;
        }

        @media (width > 1200px) {
            .sticky-aside {
                display: block;
                position: sticky;
                top: 10%;
                z-index: 1;
                float: left;
                margin-left: 2rem;
            }
        }

        .section-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            max-width: 70rem;
            margin-inline: auto;
        }

        aside:not(.sticky-aside) {
            img {
                object-fit: cover;
                object-position: center;
                width: 100%;
            }
        }

        section:not(.primary) .section-wrapper {
            padding-block: 0;
            // margin-block-start: 2rem;
        }

        .primary + section {
            margin-block-start: 5rem;
        }

        // .section-wrapper {
        //     margin-block-start: 5rem;
        // }

        .other-modalities-links {
            display: block;
            display: flex;
            justify-content: space-around;
        }

        .nav-links li {
            opacity: 0.5;

            border-bottom-width: 3px;
            border-bottom-style: solid;
            transition: 200ms all ease;

            > a {
                display: block;
            }

            &:hover {
                opacity: 1;
            }
        }

        @media (width > 1200px){
            .other-modalities-links {
                display: none;
            }
        }

        .chevron-link {
            text-align: center;
            display: block;
            height: 1rem;
            background-color: var(--color-text);

            -webkit-mask: url(../assets/icons/chevron-up.svg) no-repeat center;
            mask: url(../assets/icons/chevron-up.svg) no-repeat center;

            &.primary {
                background-color: var(--color-accent);
            }
        }

    }
</style>
