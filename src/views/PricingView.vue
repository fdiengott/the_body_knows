<template>
    <div class="main-layout">
        <NavBar />
        <section class="image-banner">
            <h1>Pricing</h1>
            <img alt="Four small plastic pots hold young shoots of plants - several with dark soil as if recently watered. The top and bottom of the image show that there are more pots of soil above and below the ones we see clearly." loading="lazy" src="../assets/images/potted_plants.webp">
        </section>
        <main>
            <section>
                <div class="section-wrapper">
                    <p><b>I currently have openings in my practice. At this time, all of my reduced-price sessions are full, but please feel free to reach out if you’d like to be added to my waitlist.</b></p>

                    <div class="vertical-offset"></div>

                    <p>A note about fees and reduced-price sessions: I recognize that individual sessions can be a financial burden, and I am strongly committed to making this work financially accessible while also honoring my capacity to hold space effectively and care for myself.</p>

                    <p>It is important to me to have transparency around money with my clients - so here is how my pricing model works…</p>

                    <p>Due to the time, preparation, and effort that goes into such individual work, the rate for individual sessions is sliding scale $150-170 for 50 mins virtual or 60 mins in-person. This rate also accounts for my ongoing case supervision and continuing education to deepen the work I offer.</p>

                    <p>You can choose your session frequency (weekly, bi-weekly) or in some cases monthly, based on what is most financially comfortable/your preference.</p>

                    <p>In the interest of accessibility, I save at least 1/3 of my practice for reduced-price sliding scale ($115-150) for those in need. These rates are available for folks who make less than 40K per year. Please take a look at the image below which highlights what rate you would pay based on your access to financial resources.</p>

                    <img alt="" class="scale-up" loading="lazy" src="../assets/images/sliding-scale-image-edited.png">
                </div>
            </section>
            <section class="primary">
                <div class="section-wrapper"></div>
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

<style scoped lang="scss">
    h1 {
        z-index: 1;
        position: relative;
        font-size: var(--fs-800);
        color: var(--white-soft);
    }

    h1::after {
        background-color: #00000060;
        background-color: var(--black-transparent);
    }

    .income-cell {
        padding-right: 3em;
    }

    @media (width < 768px) {
        .image-banner img {
            object-position: center;
            object-fit: cover;
            height: 100%;
            max-width: 100vw;
        }
    }

    .scale-up {
        max-width: 150%;
        transform: translateX(-20%);
    }
</style>
