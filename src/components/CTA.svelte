<script>
        import Button from "../components/ButtonCTA.svelte";
</script>

<section class="CTA">
        <div class="wrapper">
                <h1>Visez le meilleur, choisissez la <span>passion</span> et <span>l'expérience.</span></h1>
                <p>Apprendre, se perfectionner, progresser, découvrir. Quoi de mieux que d'être accompagné par un professionnel . C'est l'occasion de bénéficier d'une grande expertise et de poser toutes vos questions, d'aborder tout ce que vous voulez en étant accompagné, dans la bienveillance et la bonne humeur!</p>
                <Button />
        </div>
</section>

<style>
        .CTA {
                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: left;
                height: auto;
                background-color: var(--bgSectionB);
                height: auto;
        }
        .CTA h1 {
                font-size: 2rem;
                font-weight: 800;
                color: white;
                margin-top: 2%;
                margin-bottom: 2%;
        }
        .CTA h1 span {
                color: var(--CTA);
        }
        .CTA p {
                font-size: 1rem;
                line-height: 25px;
                font-weight: 400;
                color: white;
                margin-bottom: 20px;
        }
        .wrapper {
                padding: 50px;
                border-radius: 10px 200px 80px 100px;
                max-width: 600px;
                margin-top: 60%;
        }

        @media screen and (max-width: 768px) {
                .wrapper {
                        border-radius: 20px;
                        height: auto;
                        min-width: 300px;
                        margin-top: 720px;
                }
                .CTA {
                        padding: 10px;
                        height: 1400px;
                        background-image: url("../assets/FABIEN_MARCEAU_MEDIA.jpg");
         
                }
        }
</style>
