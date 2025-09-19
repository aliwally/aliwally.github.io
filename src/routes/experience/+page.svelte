<script>
    import { base } from '$app/paths'
</script>

<main>
    <section class="job-section">
        <h1>Places I've worked at</h1>

        <div class="job">
            <h2>
                <a href="https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/nos-directions-et-filiales/direction-du-materiel/" target="blank">
                    SNCF - CIE DATA (Eastern Engineering Cluster)
                </a>
            </h2>
            <p class="job-detail">2024 • Developer Intern</p>
            <p>
                Developper for AR (Augmented Reality) experiences using Unreal
                Engine 5. My job involved developping new features and testing
                them on a Microsoft Hololens 2.
            </p>
            <div class="languages">
                <a href="https://www.unrealengine.com/en-US" target="_blank">Unreal Engine</a>
                <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine" target="_blank">Blueprint</a> 
                <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C++</a> 
            </div>
        </div>
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
        margin-bottom: 2rem;
    }

    h2 {
        font-size: clamp(10px, 8vw, 25px);
        font-weight: bold;
        margin: auto;
    }

    h2 > a {
        color: #020409;
        display: inline-block;
        position: relative;
    }

    h2 > a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: blueviolet;
        transform-origin: bottom right;
        transition: all 0.25s ease-in-out;
    }

    h2 > a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
    }

    section {
        display: block;
        margin: 7em 0;
    }

    .job {
        font-size: 1em;
        background-color: transparent;
        border-radius: 2em;
        border: solid;
        border-color: #dedee1;
        text-align: left;
        width: auto;
        height: auto;
        padding: 1em 1.5em;
        margin: 1.5em 0;
    }

    .job-detail {
        font-weight: bold;
    }

    .languages {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .languages > a, .job > p > a {
        transition: all 0.3s ease-in-out;
    }

    .languages >  a:hover, .job > p > a:hover {
        color: rgb(64, 1, 166);
        font-weight: bold;
    }


    @media screen and (max-width: 800px) {
        main {
            padding: 0 0.5rem;
        }
    }
</style>
