<template>
    <NavBar />
    <section class="contact-container">
        <div class="section-wrapper">
            <h1>Contact</h1>
            <p>I would love to connect with you for a free 30 minute intro call.</p>
            <form data-netlify="true" method="post" name="contact">
                <input type="hidden" name="contact" value="contact" />

                <fieldset class="form-group">
                    <input type="text" name="name" id="name-input" required placeholder=" ">
                    <label for="name-input">Name</label>
                </fieldset>
                <fieldset class="form-group">
                    <input type="text" name="pronouns" id="pronouns-input" required placeholder=" ">
                    <label for="pronouns-input">Pronouns</label>
                </fieldset>
                <fieldset class="form-group">
                    <input type="email" name="email" id="email-input" required placeholder=" ">
                    <label for="email-input">Email</label>
                </fieldset>
                <fieldset class="form-group">
                    <textarea name="message" id="message-input" rows="8" required placeholder=" "></textarea>
                    <label for="message-input">Message</label>
                </fieldset>

                <button class="submit" type="submit">
                    <span>Submit</span>
                </button>
            </form>
        </div>
    </section>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
    components: { NavBar }
}
</script>

<style scoped lang="scss">
    @layer component {
        .contact-container {
            padding: 2rem;
            margin: 0 auto;
        }

        form {
            margin-block-start: 1.5rem;
        }

        .form-group {
            position: relative;
            padding: 6px 0;

            label {
                font-size: 14px;
                color: var(--color-primary);
                position: absolute;
                top: -10px;
                left: 10px;
                background-color: var(--color-bg);
                transition: all .3s ease;
            }

            input,
            textarea {
                padding: 10px;
                border-radius: 5px;
                border: 1px solid var(--color-primary);
                margin-bottom: 20px;
                outline: 0;
                width: 100%;
                background-color: transparent;
            }

            input + label,
            textarea + label {
                top: 10px;
                background-color: transparent;
            }

            input:focus + label,
            textarea:focus + label,
            input:not(:placeholder-shown) + label,
            textarea:not(:placeholder-shown) + label {
                top: -10px;
                background-color: var(--color-bg);
                font-weight: 600;
                font-size: 14px;
            }

            textarea:focus + label {
                top: -8px;
            }

            textarea {
                resize: none;
            }
        }

        .submit {
            --transition: all 0.4s ease-in-out;

            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            background: var(--color-primary);
            box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            border: none;
            cursor: pointer;
            transition: var(--transition);

            span {
                --reduced-size: scale(0.95);

                text-align: center;
                text-decoration: none;
                width: 100%;
                padding: 18px 25px;
                color: var(--white-soft);
                font-size: 1.125em;
                font-weight: 700;
                letter-spacing: 0.3em;
                z-index: 20;
                transition: all 0.3s ease-in-out;
            }

            &::after {
                content: " ";
                width: 0%;
                height: 100%;
                background: var(--color-accent);
                position: absolute;
                transition: var(--transition);
                right: 0;
            }

            &:hover {
                transform: scale(1.05);

                span {
                    color: var(--color-text);
                    animation: scaleUp 0.3s ease-in-out;
                }

                &::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
            }

            &:active {
                transform: scale(1);

                span {
                    transform: var(--reduced-size);
                }
            }
        }

        @keyframes scaleUp {
            0% {
                transform: scale(1);
            }

            50% {
                transform: var(--reduced-size);
            }

            100% {
                transform: scale(1);
            }
        }
    }
</style>
