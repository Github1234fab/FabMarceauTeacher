<script>
        import FrameCircle from "../components/FrameCircle.svelte";
        import CreditCard from "../assets/CreditCard.svg";
        import Check from "../assets/Check.svg";
        import Calendar from "../assets/Calendar.svg";
        import FrameCircle2 from "./FrameCircle2.svelte";
        let tabReservation = [
                { icon: Calendar, title: "Réservez", paragraph: "Pour réservez votre cours, c'est simple! Vous réservez votre créneau en cliquant sur le bouton 'Je réserve'.", button: "Je réserve", lien: "https://doodle.com/bp/fabienmarceau1/rservez-votre-cours-de-guitare-domicile" },
                { icon: Check, title: "Checkez", paragraph: "Vous recevez ensuite un mail de validation de créneau que vous allez confirmer à votre tour", button: "Je valide", lien: "mailto:fabienMarceauPro@gmail.com" },
                { icon: CreditCard, title: "Payer", paragraph: "Une fois votre créneau validé, il ne vous reste plus qu'à procéder au paiement de votre cours en ligne et vous tenir prêt pour votre cours de Guitare", button: "Je paie", lien: "https://buy.stripe.com/6oEg2y0v7gde2Pe7ss" },
        ];
</script>

<section class="reservation" id="reservation">
        <h1 class="title">Cliquez, <span>Réservez !</span></h1>
        <div class="wrapper-frames-circles">
                {#each tabReservation as info}
                        <FrameCircle2 icon={info.icon} title={info.title} paragraph={info.paragraph} button={info.button} lien={info.lien} />
                {/each}
        </div>
</section>

<style>
        .reservation {
                display: flex;
                height: auto;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                padding: 50px;
                background-color: white;
        }

        .reservation h1 {
                font-weight: 800;
                font-size: 2rem;
                text-align: center;
                color: var(--bgHero);
                margin-top: 50px;
        }
        .reservation h1 span {
                color: var(--CTA);
        }

        .wrapper-frames-circles {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                margin-top: 10px;
                margin-bottom: 50px;
        }

        @media screen and (max-width: 1440px) {
                .reservation {
                        display: flex;
                        height: 1000px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 70px;
                        padding: 50px;
                        background-color: var(--bgSectionA);
                }
        }
        @media screen and (max-width: 1024px) {
                .reservation {
                        display: flex;
                        height: 2600px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 70px;
                        padding: 50px;
                        background-color: var(--bgSectionA);
                }
                .wrapper-frames-circles {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 50px;
                }
        }
        @media screen and (max-width: 768px) {
                .reservation {
                        display: flex;
                        height: auto;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding: 50px;
                        background-color: var(--bgSectionA);
                }

                .wrapper-frames-circles {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 50px;
                }
                .title {
                        max-width: 160px;
                        text-align: center;
                }
        }
</style>
