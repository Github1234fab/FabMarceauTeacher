<script>
  import Button from "../components/ButtonCTA.svelte";
  import Strat from "../assets/stratocastorTwo.png";
</script>

<section class="hero">
  <div class="wrapper-hero">
    <h1>Cours de <span>Guitare</span> à domicile à Lyon</h1>
    <h2>Cours de guitare et coaching, à Lyon 6 et Lyon-Ouest</h2>
    <h3>Fabien Marceau, professeur de guitare, exéprimenté et reconnu à Lyon <br> <span> Directeur de l'école de musique Issétys</span></h3>
    <!-- <p>
      Vous souhaitez apprendre la guitare ou vous perfectionner? <br />Vous êtes débutant, expérimenté ou pro? <br /> Vous souhaitez un programme personnalisé ou un coaching? <br />
      Vous souhaitez apprendre en restant chez vous, sans avoir à vous déplacer? <br />
    </p> -->
    <div class="button"><Button /></div>
  </div>
</section>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L40,250.7C80,245,160,235,240,213.3C320,192,400,160,480,160C560,160,640,192,720,208C800,224,880,224,960,218.7C1040,213,1120,203,1200,208C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    color: white;
    position: relative;
    padding: 20px;
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
