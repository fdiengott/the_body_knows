<!-- hamburger from https://jonsuh.com/hamburgers/ -->

<template>
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
</template>

<script>
export default {
    props: ['isSidebarActive', 'handleHamburger']
}
</script>

<style lang="scss">
@import "../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
</style>
