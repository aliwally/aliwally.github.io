<script>
    import { base } from '$app/paths'
</script>

<main>
    <section class="job-section">
        <h1>Experiences abroad</h1>
        
        <div class="job">
            <h2>
                Double diploma (application)
            </h2>
            <p>
                I have recently applied for a double diploma with Sherbrooke's University, Quebec. This course is a master's degree in computer science,
                specialized in the field of game developement.<br>
                I hope I will get to study there for my next academic year (2025-2026).
            </p>
        </div>

        <div class="job">
            <h2>
                School exchange
            </h2>
            <p>
                In middle school I was lucky enough to go to Chicago as part of a student exchange program. 
                I spent two weeks living with an American family, which allowed me to discover the American culture, 
                their schools and overall lifestyle, which was very interesting.
            </p>
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
</style>