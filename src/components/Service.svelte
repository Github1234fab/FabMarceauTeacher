<script>
  import FrameCircle from "./FrameCircle.svelte";
  import Contract from "../assets/file-signature-solid.svg";
  import Money from "../assets/money-check-dollar-solid.svg";
  import Balance from "../assets/scale-balanced-solid.svg";
  import Blob from "../assets/blob.svg";
  import ButtonCta from "./ButtonCTA.svelte";

  const tabServices = [
    { icon: Contract, title: "Fiabilité", paragraph: "Signez le contrat qui définit le cadre des cours  à domicile et vous protègera entre autre de l'annulation intempestive. Réservez votre cours, procéder au paiement et 'let's go for learn! '" },
    {
      icon: Balance,
      title: "Avance de crédit d'impôt",
      paragraph: "Avec le service à la personne, vous bénéficiez d'une réduction d'impôt de 50% sur le montant des cours. Vous avancez 79 euros, mais vous n'en payerez au final que la moitiée, c'est à dire 39.50 euros!!",
    },
    {
      icon: Money,
      title: "Tarifs compétitifs",
      paragraph: "Un cours d'une heure à domicile pour 59 euros, c'est un tarif unique et compétitif.  Débutant, expérimenté, pro? Faîtes le choix d'un coaching personnalisé en restant dans votre confort, sans avoir à vous déplacer !",
    },
  ];
</script>

<section class="service" id="Tarifs">
  <div class="wrapper-text">
    <h1 class="title"><span>Tarifs</span> et avantages</h1>
    <p>Un prix unique de 79 €, mais vous n'en payerez que la moitié, c'est à dire 39.50 €!</p>
    <div class="tarif">
      <h1>Tarif unique</h1>
      <h2>79 €/1 heure</h2>
      <h2>Le cours vous coûtera 39,50€</h2>
    </div>
  </div>

  <div class="wrapper-frames-circles">
    {#each tabServices as info}
      <FrameCircle icon={info.icon} title={info.title} paragraph={info.paragraph} />
    {/each}
  </div>
  <ButtonCta />
</section>

<style>
  .service {
    display: flex;
    height: auto;
    /* height: calc(100vh + 600px); */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 40px;
    background-color: var(--bgSectionA);
  }
  .wrapper-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 0px;
    margin-top: 40px;
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
    font-weight: 600;
    text-align: center;
    line-height: 25px;
  }
  .tarif {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 45px;
    background-color: var(--blue);
    border-radius: 10px 34px 2px 78px;
    margin-top: 30px;
    position: relative;

  }
  .tarif h1 {
    color: white;
    z-index: 2;
  }
  .tarif h2 {
    color: white;
    z-index: 2;
  }
  .wrapper-frames-circles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1440px) {
    .service {
      display: flex;

      height: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 70px;

      background-color: var(--bgSectionA);
    }
  }
  @media screen and (max-width: 1024px) {
    .service {
      display: flex;
      height: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 70px;
      background-color: var(--bgSectionA);
    }
  }
  @media screen and (max-width: 768px) {
    .service {
      display: flex;
      height: auto;
      padding: 100px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;

      background-color: var(--bgSectionA);
    }
    .wrapper-text {
      margin-top: -55px;
      gap: 30px;
    }

    .wrapper-frames-circles {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;
    }
    .title {
      margin-top: 50px;
    }
    .tarif h1 {
      font-size: 1.3rem;
    }
    .tarif h2 {
      font-size: 1rem;
      text-align: center;
    }
    .tarif {
      min-width: 200px;
    }
  }
</style>
