<script>
        import Button from "../components/ButtonCTA.svelte";
        import Strat from "../assets/stratocastorTwo.png";
</script>

<section class="hero">
        <div class="wrapper-hero">
        <h1>Cours de <span>Guitare</span></h1>

        <h2>Apprenez la guitare avec un professeur de guitare <span> reconnu</span> et <span>expérimenté !</span></h2>
        <p>
                Vous souhaitez apprendre la guitare ou vous perfectionner? <br />Vous êtes débutant, expérimenté ou pro? <br /> Vous souhaitez un programme personnalisé ou un coaching? <br />
                Vous souhaitez apprendre en restant chez vous, sans avoir à vous déplacer? <br /> Alors, ne bougez surtout pas...
        </p>
        <div class="button"><Button /></div>
        </div>
</section>

<style>
        .hero {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 700px;
                background-image: url("../assets/guitareSoleil.jpg");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                color: white;
                overflow: hidden;
                position: relative;
        }
        .wrapper-hero {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 40px;
                padding: 20px;
                background-color: rgba(255, 255, 255, 0.121);
                border-radius: 20px;
                z-index: 3;
                backdrop-filter: blur(10px);
                margin-top: 50px;
              
        }
        .hero::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 100%;
                width: 100%;
                background-color: rgba(26, 26, 26, 0.5);
                z-index: 1;
        }

        .hero h1 {
                font-family: "inter";
                letter-spacing: -0.1rem;
                font-size: 4.5rem;
                font-weight: 900;
                color: rgb(255, 255, 255);
                margin-top: 10px;
                text-align: center;
                z-index: 3;
        }
        .hero span {
                color: rgb(248, 229, 20);
                z-index: 3;
        }
        .hero h2 {
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 25px;
                color: white;
                text-align: center;
                z-index: 3;
        }
        .hero h2 span {
                font-weight: 900;
                color: var(--bgHero);
        }
        .hero p {
                line-height: 25px;
                font-weight: 400;
                color: white;
                text-align: center;
                z-index: 3;
        }

        .button {
                margin-top: 20px;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                z-index: 0;
                color: black;
                z-index: 3;
        }

        @media screen and (max-width: 768px) {
                .hero {
                        height: 900px;
                        padding: 30px;
                        background-size: cover;
                }
                .hero h1 {
                        font-size: 2.5rem;
                }
                .hero h2 {
                        font-size: 1rem;
                }
                .hero p {
                        font-size: 0.8rem;
                }
        }
</style>
