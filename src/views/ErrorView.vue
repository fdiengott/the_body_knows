<template lang="">
    <div class="form-submit-card-wrapper">
        <div class="form-submit-card">
            <h1>Oops!</h1>
            <p>Looks like something went wrong.</p>
            <p>Please email
            <a class="email-link" href="mailto:thebodyknowssomatics@gmail.com">thebodyknowssomatics@gmail.com</a> and I'll be in touch within a week. </p>
            <div class="vertical-offset"></div>
            <RouterLink class="return-home" to="/">Home</RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .email-link {
        text-decoration: underline;

        &:hover {
            filter: contrast(0.7);
        }
    }
</style>
