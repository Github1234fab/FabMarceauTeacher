<script>
        import { onMount } from "svelte";
        import StratoOne from "../assets/stratocastorOne.png";
        let header;
        let windowWidth;

        let scrollTimeout;

        // Fonction pour mettre à jour la largeur de la fenêtre
        function updateWidth() {
                windowWidth = window.innerWidth;
        }

        function handleScroll() {
                header.classList.add("sticky");
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                        header.classList.remove("sticky");
                }, 900);
        }
        onMount(() => {
                if (typeof window !== "undefined") {
                        window.addEventListener("scroll", handleScroll);
                }

                window.addEventListener("resize", updateWidth);
                updateWidth(); // Initialisation de la largeur

                // Nettoyage lors de la destruction du composant
                return () => {
                        window.removeEventListener("resize", updateWidth);
                };
        });
</script>

<header bind:this={header}>
        <div class="container-strat">
                <img class="strato" src={StratoOne} alt="Guitare" />
        </div>
        <div class="sticky hidden header-big-height"></div>
        <div class="menu-vertical hidden"></div>

        <div class:menu-vertical={windowWidth < 450} class="menu">
                <a href="#cours_de_guitare">Cours</a>
                <a href="#Tarifs">Tarifs</a>
                <a href="#reservation">Réservation</a>
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
                transition: opacity 0.8s ease-in-out;
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
        .hidden {
                display: none;
        }

        .menu-vertical {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                gap: 6px;
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

        @media screen and (max-width: 450px) {
                header {
                        height: 250px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        background-color: var(--bgHeader);
                        padding: 20px;
                        gap: 20px;
                        opacity: 0.9;
                }
                .strato {
                        height: 70px;
                        margin-left: 3px;
                }
           
        }
</style>
