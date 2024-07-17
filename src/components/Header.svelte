<script>
        import { onMount, onDestroy } from "svelte";
        import StratoOne from "../assets/stratocastorOne.png";
        let header;
          let scrollTimeout;

      function handleScroll() {
    header.classList.add('sticky');

    // Réinitialise et définit le timeout à chaque événement de scroll
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Retire la classe sticky quand le scroll s'arrête
      header.classList.remove('sticky');
    }, 100); // 100 millisecondes d'attente pour considérer que le scroll est arrêté
  }
    onMount(() => {
  if (typeof window !== 'undefined') {
      // Assurez-vous que ces appels sont à l'intérieur de ce bloc
      window.addEventListener('scroll', handleScroll);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      // Assurez-vous que ces appels sont à l'intérieur de ce bloc
      window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<!-- <script>
import StratoOne from "../assets/stratocastorOne.png";
</script> -->

<header bind:this={header}>
        <div class="container-strat">
                <img class="strato" src={StratoOne} alt="Guitare" />
        </div>
        <div class="sticky hidden"></div>

        <div class="menu">
                <a href="#cours_de_guitare">Cours</a>
                <a href="#Tarifs">Tarifs</a>
                <a href="#A_propos">Profil</a>
                <a href="#Contact">Contact</a>
        </div>
</header>

<style>
        header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 80px;
                background-color: var(--bgHeader);
                padding: 20px;
                position: fixed;
                width: 100vw;
                z-index: 3;
                 transition: opacity 0.5s ease-in-out;
        }
        .sticky {
                opacity: 0;
                transition: 0.3s ease-in-out;
        }
        .hidden {
                display: none;
        }
        .strato {
                margin-left: -30px;
                height: 70px;
        }
        .container-strat {
                display: flex;
                align-items: left;
                justify-content: left;
                gap: 0px;
                grid-column: 1/3;
                grid-row: 1;
        }

        .menu {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                gap: 20px;
        }
        .menu a {
                text-decoration: none;
                color: white;
                color: white;
                font-weight: 400;
                font-size: 1rem;
                transition: 0.4s ease-in-out;
        }
        .menu a:hover {
                color: var(--CTA);
        }
</style>
