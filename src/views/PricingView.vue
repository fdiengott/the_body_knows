<template>
    <div class="main-layout">
        <NavBar />
        <section class="image-banner">
            <h1>Pricing</h1>
            <img alt="A view from above of a dozen young seedlings sprouting from pots of soil" loading="lazy" src="../assets/images/potted_plants.jpg">
        </section>
        <main>
            <section>
                <div class="section-wrapper">
                    <p><b>I currently have openings in my practice. At this time, all of my reduced-price sessions are full, but please feel free to reach out if you’d like to be added to my waitlist.</b></p>

                    <div class="vertical-offset"></div>

                    <p>A note about pricing and reduced-price sessions: <b>I recognize that individual sessions can be a financial burden, and I am strongly committed to making this work financially accessible while also honoring my capacity to hold space effectively and care for myself.</b></p>

                    <p><b>It is important to me to have transparency around money with my clients - so here is how my pricing model works…</b></p>

                    <p><b>Due to the time, preparation, and effort that goes into such individual work, the full rate for individual sessions is $175 for 50 mins virtual or 60 mins in-person.</b> This rate also accounts for my ongoing case supervision and continuing education to deepen the work I offer.</p>

                    <p>In the interest of accessibility, I offer reduced-price sessions for those in need. These discounts are available at $100, $125 and $150 and are designed for those for whom the full price is not accessible.</p>

                    <p>I mainly work with folks on a weekly basis. Bi-weekly is also an option for those for whom weekly sessions are not financially possible.</p>

                    <p>There are times when the reduced-price appointments are full. When this happens, I will be happy to put you on my waitlist.</p>

                    <p>We will touch base about the financial aspect of working together in our initial free 30 minute Zoom call. This call is required for all new clients so that we can both see if working together feels like a good fit at this time.</p>


                </div>
            </section>
            <section class="primary">
                <div class="section-wrapper">
                    <h2>
                        Discounted Rates Income breakdown
                    </h2>
                    <table>
                        <tr>
                            <td class="income-cell">less than 30K</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>30-50K</td>
                            <td>125</td>
                        </tr>
                        <tr>
                            <td>50-70K</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>70K+</td>
                            <td>175</td>
                        </tr>
                    </table>
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
</style>
