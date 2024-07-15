<script>
        import FrameCircle from "./FrameCircle.svelte";
        import Contract from "../assets/file-signature-solid.svg";
        import Money from "../assets/money-check-dollar-solid.svg";
        import Balance from "../assets/scale-balanced-solid.svg";

        const tabServices = [
                { icon: Contract, title: "Fiabilité", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem dolores esse adipisci reprehenderit " },
                {
                        icon: Balance,
                        title: "Avance de crédit d'impôt",
                        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem dolores esse adipisci reprehenderit ",
                },
                {
                        icon: Money,
                        title: "Tarifs compétitifs",
                        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem dolores esse adipisci reprehenderit ",
                },
        ];
</script>

<section class="service" id="Services">
        <div class="wrapper-text">
                <h1><span>Tarifs</span> et avantages</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit vel natus minus fuga cupiditate dolore provident inventore nesciunt consequuntur atque quidem laboriosam quaerat asperiores minima dicta nemo, modi id!</p>
                <div class="tarif">
                        <h1>Tarif Unique</h1>
                        <h2>99 euros/1 heure</h2>
                </div>
        </div>

        <div class="wrapper-frames-circles">
                {#each tabServices as info}
                        <FrameCircle icon={info.icon} title={info.title} paragraph={info.paragraph} />
                {/each}
        </div>
</section>

<style>
        .service {
                display: flex;
                height: 100vh;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 30px;
                padding: 50px;
                background-color: var(--bgSectionA);
        }
        .wrapper-text {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
        }
        .service h1 {
                font-weight: 800;
                font-size: 2rem;
                text-align: center;
        }
        .service h1 span {
                color: var(--CTA);
        }
        .service p {
                font-weight: 400;
                text-align: center;
                line-height: 25px;
        }
        .tarif {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                padding: 25px;
                background-color: var(--CTA);
                border-radius: 10px;
                margin-top: 40px;
                box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.254);
        }
        .wrapper-frames-circles {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 50px;
                margin-top: 50px;
                margin-bottom: 50px;
        }
        @media screen and (max-width: 768px) {
                .service {
                        display: flex;
                        height: 1700px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 70px;
                        padding: 50px;
                        background-color: var(--bgSectionA);
                }
                .wrapper-text {
                        margin-top: -50px;
                }

                .wrapper-frames-circles {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 70px;
                }
        }
</style>
