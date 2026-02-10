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
                    <p><b>My <i>virtual</i> practice has openings at all tiers of the need-based sliding scale.</b></p>
                    <p><b>My <i>in-person</i> practice in Brooklyn currently has openings at the full rate (sliding scale currently full).</b></p>
                    <p><b>For SE students: I am an approved Personal Session Provider at the Beginning Level. SE students feel free to reach out for student rates.</b></p>

                    <div class="vertical-offset"></div>

                    <p>A note about fees and reduced-price sessions: I recognize that individual sessions can be a financial burden, and I am strongly committed to making this work financially accessible while also honoring my capacity to hold space effectively and care for myself.</p>

                    <p>It is important to me to have transparency around money with my clients - so here is how my pricing model works…</p>

                    <p>Due to the time, preparation and effort that goes into such individual work, the rate for individual sessions is $175. This rate also accounts for my ongoing case supervision and continuing education to deepen the work I offer.</p>

                    <p>You can choose your session frequency (weekly, bi-weekly) or in some cases monthly, based on what is most financially comfortable/your preference.</p>

                    <p>The bottom tier (130-150) is available for folks who make less than 45K per year. Please take a look at the image below which highlights what rate you would pay based on your access to financial resources.</p>

                    <img alt="A diagram explaining the three price tiers and who should pay each one" class="scale-up" loading="lazy" src="../assets/images/bottle-sliding-scale-image.png">
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
