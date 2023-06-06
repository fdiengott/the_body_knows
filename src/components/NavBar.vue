<template>
    <header :class="sticking && 'sticking'">
        <nav class="nav">
            <RouterLink class="link-hover" to="/" v-on:click="closeSidebar">
                The Body Knows Somatics
            </RouterLink>
            <div class="navbar">
                <HamburgerComponent :isSidebarActive="isSidebarActive" :handleHamburger="handleHamburger" />
                <div class="navbar-container">
                    <ul class="nav-links" :class="{ isActive: isSidebarActive }">
                        <li><RouterLink class="link-hover" to="/" v-on:click="closeSidebar" :tabindex="isSidebarActive ? 0 : -1">Home</RouterLink></li>
                        <li><RouterLink class="link-hover" to="/offerings" v-on:click="closeSidebar" :tabindex="isSidebarActive ? 0 : -1">Offerings</RouterLink></li>
                        <li><RouterLink class="link-hover" to="/about" v-on:click="closeSidebar" :tabindex="isSidebarActive ? 0 : -1">Meet Josephine</RouterLink></li>
                        <li><RouterLink class="link-hover" to="/fees" v-on:click="closeSidebar" :tabindex="isSidebarActive ? 0 : -1">Fees</RouterLink></li>
                        <li><RouterLink class="link-hover" to="/contact" v-on:click="closeSidebar" :tabindex="isSidebarActive ? 0 : -1">Book a Free Consultation</RouterLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import HamburgerComponent from './HamburgerComponent.vue';

// ? perhaps add a click listener on the window, if clicked away, close nav bar

export default {
    components: { RouterLink, HamburgerComponent },
    data() {
        return {
            isSidebarActive: false,
            sticking: false
        }
    },
    methods: {
        handleHamburger() {
            this.isSidebarActive = !this.isSidebarActive
        },
        closeSidebar() {
            this.isSidebarActive = false
        }
    },
    created: function() {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.closeSidebar();
            }
        });
    },
}
</script>

<style>
/* TODO make sure this works for mobile!!!!!! */
/* TODO make these component layered */
header {
    position: sticky;
    top: 0;
    z-index: 1;
}
.nav {
    --nav-block-padding: 10px;
    --nav-inline-padding: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--nav-block-padding) var(--nav-inline-padding);
    background-color: var(--color-primary);
    color: #fff;
    height: 100%;
}

.nav > a {
    font-size: 1.4rem;
    padding: 0.4rem;
}

.navbar {
    display: flex;
    align-items: end;
    flex-direction: column;
}

.navbar-container {
    position: relative;
}

.nav-links {
    position: absolute;
    transition: var(--default-transition-speed) transform ease-in-out;
    transform: translate(120%);
    display: flex;
    flex-direction: column;
    min-width: 200px;
    right: calc(-1 * var(--nav-inline-padding));
    top: var(--nav-block-padding);
    align-items: end;
    background-color: var(--color-primary);
}

.nav-links.isActive {
    transform: translate(0);
}

.nav-links li {
    display: flex;
    justify-content: end;
    width: 100%;
}

.nav-links a {
    position: relative;
    width: 100%;
    padding: 20px;
    text-align: end;
    white-space: nowrap;
}

.link-hover::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    margin-left: auto;
    transition: var(--default-transition-speed) all linear;
    background-color: var(--color-accent);
}

.link-hover:hover::after {
    width: 100%;
}

/* .nav-links li::after {
    content: '';
    position: absolute;
    background-color: var(--color-accent);
    top: 0;
    right: 10px;

    width: 20px;
    width: 3px;
    height: 100%;
    opacity: 0;
    transform: translate(10px);

    transition: var(--default-transition-speed) all linear;
} */

.nav-links li:hover  {
    color: var(--color-accent);
}
/* .nav-links li:hover::after {
    opacity: 1;
    transform: translate(0);
    transform: translate(calc(-1 * var(--navbar-width)));
    width: 3px;
} */

/* .nav-links a:hover {
    background-color: var(--color-accent);
    color: var(--color-bg);
} */
</style>
