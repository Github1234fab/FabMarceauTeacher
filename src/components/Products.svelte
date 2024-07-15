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

<section class="products" id="Products">
        <h1>Compétences</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem dolores esse adipisci reprehenderit deleniti quod harum eius. Illum culpa unde, tenetur ea doloribus architecto natus. Iste fugiat odio nobis?</p>
        <div class="wrapper-competence-value">
                <div class="wrapper-values">
                        <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                        <h2>100%</h2>
                        <p>Pédagogie</p>
                </div>
                <div class="wrapper-values">
                        <i class="fa-solid fa-chart-line fa-2xl"></i>
                        <h2>100%</h2>
                        <p>Progression</p>
                </div>
                <div class="wrapper-values">
                        <i class="fa-solid fa-face-smile-wink fa-2xl"></i>
                        <h2>100%</h2>
                        <p>Bonne Humeur</p>
                </div>
        </div>
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
                padding: 100px;
                background: radial-gradient(rgb(109, 109, 212), rgb(10, 10, 105));
                z-index: 0;
        }
        .products h1 {
                font-weight: 800;
                color: var(--white);
                font-size: 2rem;
        
        }
        .products p {
                font-weight: 400;
                color: var(--white);
                line-height: 25px;
                text-align: center;
                margin-top: -30px;
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

        @media screen and (max-width: 1370px) {
                .wrapper-cardA,
                .wrapper-cardB {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 40px;
                        width: 60%;
                }
        }

        @media screen and (max-width: 800px) {
                .products {
                        padding: 50px;
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
