<template>
    <header>
        <nav class="navbar">
            <div>The Body Knows Somatics</div>
            <div>
                <HamburgerComponent :isSidebarActive="isSidebarActive" :handleHamburger="handleHamburger" />
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
import HamburgerComponent from './HamburgerComponent.vue';

export default {
    components: { RouterLink, HamburgerComponent },
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

<style>
.navbar {
    display: flex;
    justify-content: space-between;
}

.hidden {
    display: none;
}
</style>
