<script>
    import { base } from '$app/paths'
    import ContactButton from '../../assets/components/ContactButton.svelte';
</script>

<main>
    <section class="job-section">
        <h1>PPP (Personal Professional Project)</h1>
        
        {#each {length: 8} as _, i}
                <!-- svelte-ignore a11y-missing-attribute -->
                {#if i != 0}
                <img src="{base}/img/PPP/{i}.svg" class="slide">
                {/if}
        {/each}

        <ContactButton
        link="{base}/docs/PPP.pdf"
        icon="{base}/img/doc_icon.svg"
        text="PPP (pdf version)">
        </ContactButton>

        <h1 class="cov">Cover letters</h1>

        <ContactButton
        link="{base}/docs/Cover_Letter_Guerrilla.pdf"
        icon="{base}/img/doc_icon.svg"
        text="Cover Letter Guerrilla Games (EN)">
        </ContactButton>

    </section>

</main>

<style>
    main {
        font-weight: 500;
        font-size: 14px;
        color: #020409;
        padding: 0px 5rem;
        display: block;
        background-color: #fafbfe;
    }

    h1 {
        font-size: clamp(25px, 8vw, 45px);
        font-weight: bold;
        margin: auto;
        margin-bottom: 1rem;
    }

    section {
        display: block;
        margin-top: 4em;
        margin-bottom: 10em;
        display: grid;
        place-items: center;
        gap: 2em;
    }

    .slide {
        width: 80%;
        border-color: #595959;
        border-radius: 1.5em;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.6));
    }

    .cov {
        margin-top: 2em;
    }

    @media screen and (max-width: 800px) {
        main {
            padding: 0 0.5rem;
        }

        section {
            margin: 5em 0;
        }

        .slide {
            width: 100%;
        }
    }
</style>