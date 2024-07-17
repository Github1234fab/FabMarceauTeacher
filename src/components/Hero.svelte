<script>
        import Button from "../components/ButtonCTA.svelte";
</script>

<section class="hero">
        <div class="wrapper-text">
                <h1>Cours de <span>Guitare</span></h1>
                <h2>Apprenez la guitare avec un professeur de guitare passionné !</h2>
                <p>Vous souhaitez apprendre la guitare ou vous perfectionner tout en restant chez vous, dans votre confort? <br /> Ne bougez surtout pas...j'arrive!</p>
             <div class="button"><Button /></div>
        </div>
</section>

<style>
        .hero {
                display: flex;
                background-color: #49494c;
                color: white;
                background-image: url("../assets/coursdeguitare.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                height: calc(100vh + 200px);
                align-items: center;
                justify-content: center;
                padding: 50px;
                /* padding: 50px; */
        }
        .wrapper-text {
         
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 20px;
                margin-top: 350px;
                background-color: #49494cc3;
                padding: 50px;
                border-radius: 10px 200px 80px 100px;
                margin-bottom: 40px;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.486);
        }
        .hero h1 {
                font-family: "inter";
                letter-spacing: -0.2rem;
                font-size: 4.5rem;
                font-weight: 700;
        }
        .hero span {
                color: var(--CTA);
        }
        .hero h2 {
                font-size: 1.5rem;
                font-weight: 300;
        }
        .hero p {
                line-height: 25px;
                font-weight: 200;
        }
        .button {
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 0;
                margin-top: 25px;
        }
   

        @media screen and (max-width: 550px) {
                .hero {
                        height: calc(100vh  +  100px);
                        align-items: center;
                        justify-content: center;
                        padding: 30px;
                }
                .wrapper-text {
                        margin-left: 0px;
                        margin-top: 150px;
                        min-height: 40%;
                        border-radius: 50px;
                        width: 100%;
                }

                .hero h1 {
                        font-size: 2.4rem;
                        flex: 1 1 auto;
                        letter-spacing: -0.3;
                }
                .hero h2 {
                        font-size: 1.2rem;
                        flex: 1 1 auto;
                }
                .hero p {
                        font-size: 0.9rem;
                        flex: 1 1 auto;
                }
        }
</style>
