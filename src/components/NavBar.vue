<template>
    <header>
        <nav class="navbar">
            <div>The Body Knows Somatics</div>
            <div>
                <button
                    class="hamburger hamburger--collapse js-hamburger"
                    :class="{ 'is-active': isSidebarActive }"
                    v-on:click="handleHamburger"
                    type="button"
                    >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <div :class="{ hidden: !isSidebarActive }">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/offerings">Offerings</RouterLink>
                    <RouterLink to="/about">Meet Josephine</RouterLink>
                    <RouterLink to="/fees">Fees</RouterLink>
                    <RouterLink to="/contact">Book a Free Consultation</RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink },
    data() {
        return {
            isSidebarActive: false
        }
    },
    methods: {
        handleHamburger() {
            this.isSidebarActive = !this.isSidebarActive
        }
    },
}
</script>

<!-- hamburger from https://jonsuh.com/hamburgers/ -->
<style lang="scss">
@import "../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

.navbar {
    display: flex;
    justify-content: space-between;
}

.hidden {
    display: none;
}
</style>
