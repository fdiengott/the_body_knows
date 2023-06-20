<template>
    <NavBar />
    <main>
        <section class="image-banner">
            <h1>Fees</h1>
            <img src="../assets/images/potted_plants.jpg" alt="A view from above of a dozen young seedlings sprouting from pots of soil">
        </section>
        <section>
            <div class="section-wrapper">
                <p>A note about fees and reduced-price sessions: <b>I recognize that individual sessions can be a financial burden, and I am strongly committed to making this work financially accessible while also honoring my capacity to hold space effectively and care for myself.</b></p>

                <p><b>It is important to me to have transparency around money with my clients - so here is how my pricing model works…</b></p>

                <p>Due to the time, preparation, and effort that goes into such individual work, the full rate for individual sessions is $175 for 50 mins virtual or 60 mins in-person.  This rate also accounts for my ongoing case supervision and continuing education to deepen the work I offer.</p>

                <p>In the interest of accessibility, I offer reduced-price sessions for those in need.  These discounts are available at $100, $125 and $150 and are designed for those for whom the full price is not accessible.</p>

                <p>Session frequency can also be discussed to find what is most financially comfortable for each client.</p>

                <p>There are times when the reduced-price appointments are full.  When this happens, I will be happy to put you on my waitlist.</p>

                <p>We will touch base about the financial aspect of working together in our initial free 30 minute Zoom call.  This call is required for all new clients so that we can both see if working together feels like a good fit at this time.</p>

                <h2>
                    Discounted Rates Income breakdown:
                </h2>

                <ul>
                    <li>30-50K: 125</li>
                    <li>>20-30K: 100</li>
                    <li>50-70K: 150</li>
                    <li>70K+: Full rate (at the frequency that fits your resources)</li>
                </ul>
            </div>
        </section>
    </main>
</template>
<script>
import NavBar from '../components/NavBar.vue';

export default {
    components: { NavBar }
}

</script>
<style lang="scss">
    h1 {
        z-index: 1;
        position: relative;
        font-size: var(--fs-700);
    }
</style>
