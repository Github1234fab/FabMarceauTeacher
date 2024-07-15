<script>
        import FrameCircle from "./FrameCircle.svelte";
        import Contract from "../assets/file-signature-solid.svg";
        import Money from "../assets/money-check-dollar-solid.svg";
        import Balance from "../assets/scale-balanced-solid.svg";

        const tabServices = [
                { icon: Contract, title: "Fiabilité", paragraph: "Signez le contrat qui définit le cadre des cours  à domicile et vous protègera entre autre de l'annulation intempestive. Réservez votre cours, procéder au paiement et 'let's go for learn! '" },
                {
                        icon: Balance,
                        title: "Avance de crédit d'impôt",
                        paragraph: "Avec le service à la personne, vous bénéficiez d'une réduction d'impôt de 50% sur le montant des cours. Vous avancez 119 euros, mais vous n'en payerez au final que la moitiée, c'est à dire 59,50 euros!!",
                },
                {
                        icon: Money,
                        title: "Tarifs compétitifs",
                        paragraph: "Un cours d'une heure à domicile pour 59,50 euros, c'est un tarif unique et compétitif. Vous ne trouverez pas moins cher pour un cours donné par un professionnel, à domicile !",
                },
        ];
</script>

<section class="service" id="Services">
        <div class="wrapper-text">
                <h1><span>Tarifs</span> et avantages</h1>
                <p>Un prix unique de 119 euros, et vous n'en payez que la moitiée!</p>
                <div class="tarif">
                        <h1>Tarif Unique</h1>
                        <h2> 59,5 euros/1 heure</h2>
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
        .tarif h2{
                color: var(--bgHero);
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
                        height: 1600px;
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
