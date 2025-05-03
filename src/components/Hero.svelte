<script>
  import Button from "../components/ButtonCTA.svelte";
  import Strat from "../assets/stratocastorTwo.png";
</script>

<section class="hero">
  <div class="wrapper-hero">
    <h1>Cours de <span>Guitare</span> à domicile</h1>
    <h2>Cours de guitare et coaching, à Lyon 6 et Lyon-Ouest</h2>
    <h3>Avec Fabien Marceau, professeur de guitare <br> <span> reconnu</span> et <span>expérimenté  !</span></h3>
    <!-- <p>
      Vous souhaitez apprendre la guitare ou vous perfectionner? <br />Vous êtes débutant, expérimenté ou pro? <br /> Vous souhaitez un programme personnalisé ou un coaching? <br />
      Vous souhaitez apprendre en restant chez vous, sans avoir à vous déplacer? <br />
    </p> -->
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
    background-image: radial-gradient(circle at 13% 47%, rgba(140, 140, 140, 0.03) 0%, rgba(140, 140, 140, 0.03) 25%, transparent 25%, transparent 100%), radial-gradient(circle at 28% 63%, rgba(143, 143, 143, 0.03) 0%, rgba(143, 143, 143, 0.03) 16%, transparent 16%, transparent 100%),
      radial-gradient(circle at 81% 56%, rgba(65, 65, 65, 0.03) 0%, rgba(65, 65, 65, 0.03) 12%, transparent 12%, transparent 100%), radial-gradient(circle at 26% 48%, rgba(60, 60, 60, 0.03) 0%, rgba(60, 60, 60, 0.03) 6%, transparent 6%, transparent 100%),
      radial-gradient(circle at 97% 17%, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 56%, transparent 56%, transparent 100%), radial-gradient(circle at 50% 100%, rgba(25, 25, 25, 0.03) 0%, rgba(25, 25, 25, 0.03) 36%, transparent 36%, transparent 100%),
      radial-gradient(circle at 55% 52%, rgba(69, 69, 69, 0.03) 0%, rgba(69, 69, 69, 0.03) 6%, transparent 6%, transparent 100%), linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
    color: white;
    position: relative;
  }

  .wrapper-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 20px;
    border-radius: 20px;
    z-index: 3;
    backdrop-filter: blur(10px);
    margin-top: 0px;
    border: 1px dotted rgb(93, 93, 93);
  }

  .hero h1 {
    font-family: "inter";
    letter-spacing: -0.1rem;
    font-size: 4.5rem;
    font-weight: 900;
    color: rgb(46, 45, 45);
    margin-top: 10px;
    text-align: center;
    z-index: 3;
  }
  .hero span {
    color: orange;
    z-index: 3;
  }
  .hero h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 25px;
    color: orange;
    text-align: center;
    z-index: 3;
    padding: 20px;
  }
  .hero h2 span {
    font-weight: 900;
    color: var(--bgHero);
  }
  .hero h3 {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 25px;
    color: rgb(46, 45, 45);
    text-align: center;
    z-index: 3;
    padding: 0px;
  }
  .hero h3 span {
    font-weight: 900;
    color: rgb(39, 39, 38);
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
    .wrapper-hero {
      width: 100%;
    }
    .hero {
      height: auto;
      padding: 10px;
      background-size: cover;
    }
    .hero h1 {
      font-size: 3rem;
      line-height: 47px;
    }
    .hero h2 {
      font-size: 1.4rem;
    }
   
  }
</style>
