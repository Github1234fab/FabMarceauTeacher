<script>
        import Card from "../components/Card.svelte";
        import StratoOne from "../assets/stratocastorOne.png";

        const tabA = [
                {
                        title: "Finger style",
                },
                {
                        title: "Arpèges",
                },
                {
                        title: "Improvisation",
                },
                {
                        title: "Accords",
                },
                {
                        title: "Rythmiques",
                },
                {
                        title: "Song & Tab",
                },
        ];
        const tabB = [
                {
                        title: "Théorie musicale",
                },
                {
                        title: "Riffs",
                },
                {
                        title: "Gammes & modes",
                },
                {
                        title: "Techniques de jeu",
                },
                {
                        title: "Harmonie",
                },
                {
                        title: "Étude de Styles",
                },
        ];
</script>

<section class="products" id="cours_de_guitare">
        <h1>Apprendre la Guitare en jouant</h1>
        <p>La meilleure manière d'apprendre la guitare ou de se perfectionner, c'est de jouer! Jouer et partager pour comprendre, jouer pour se tromper, jouer pour apprendre et progresser.</p>
        <div class="wrapper-competence-value">
                <div class="wrapper-values">
                        <i class="fa-solid fa-graduation-cap fa-2xl icon"></i>
                        <h2>100%</h2>
                        <p>Pédagogie</p>
                </div>
                <div class="wrapper-values">
                        <i class="fa-solid fa-chart-line fa-2xl icon"></i>
                        <h2>100%</h2>
                        <p>Progression</p>
                </div>
                <div class="wrapper-values">
                        <i class="fa-solid fa-face-smile-wink fa-2xl icon"></i>
                        <h2>100%</h2>
                        <p>Bonne Humeur</p>
                </div>
        </div>
               <h1 class="matière">Matières enseignées</h1>
        <div class="wrapper-cardA">
              
                {#each tabA as info}
                        <Card title={info.title} />
                {/each}
        </div>
        <div class="wrapper-cardB">
                {#each tabB as info}
                        <Card title={info.title} />
                {/each}
        </div>
</section>

<style>
        .products {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: auto;
                gap: 80px;
                padding: 200px;
                background: radial-gradient(rgb(109, 109, 212), rgb(10, 10, 105));
                z-index: 0;
        }
        .products h1 {
                font-weight: 800;
                color: var(--white);
                font-size: 2rem;
                text-align: center;
        }
        .matière{
                text-align: center;
        }
        .products p {
                font-weight: 400;
                color: var(--white);
                line-height: 25px;
                text-align: center;
                margin-top: -30px;
                text-align: center;
                margin-top: 2px;
                font-weight: 700;
        }
        .products, .icon, h2 {
                color: #e7e7e5;
                font-weight: 900;
        }
        .wrapper-cardA {
                margin-top: 30px;
        }
        .wrapper-cardA,
        .wrapper-cardB {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
                width: 100%;
        }
        .wrapper-competence-value {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                gap: 30px;
                width: 100%;
        }
        .wrapper-values {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 30px;
                padding: 20px;
                background-color: transparent;
                border-radius: 10px;
                width: 200px;
                height: 200px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.454);
        }

        @media screen and (max-width: 1440px) {
                .wrapper-cardB,
                .wrapper-cardA {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 40px;
                        width: 60%;
                }
        }
        @media screen and (max-width: 1184px) {
                .wrapper-cardB,
                .wrapper-cardA {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 40px;
                        width: 60%;
                }
        }

        @media screen and (max-width: 860px) {
                .wrapper-cardB,
                .wrapper-cardA {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 40px;
                        width: 90%;
                }
        }

        @media screen and (max-width: 768px) {
                .products {
                        padding: 100px;
                }
                .wrapper-competence-value {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        gap: 30px;
                        width: 100%;
                }
                .wrapper-cardA,
                .wrapper-cardB {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 40px;
                        width: 60%;
                }
                .products p {
                        font-weight: 400;
                        color: var(--white);
                        line-height: 25px;
                }
        }
</style>
