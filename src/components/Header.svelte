<script>
        import { onMount } from "svelte";
        import StratoOne from "../assets/stratocastorOne.png";
        import MenuIcon from "../assets/bars-solid.svg";
        import { fade, slide } from "svelte/transition";

        let header;
        let windowWidth;
        let scrollTimeout;
        let burgerMenuOpen = false;

        // Fonction pour mettre à jour la largeur de la fenêtre
        function updateWidth() {
                windowWidth = window.innerWidth;
        }

        // Fonction pour gérer le scroll
        function handleScroll() {
                header.classList.add("sticky");
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                        header.classList.remove("sticky");
                }, 560);
        }

        // Fonction pour ouvrir/fermer le menu burger
        function toggleBurgerMenu() {
                burgerMenuOpen = !burgerMenuOpen;
        }

        onMount(() => {
                if (typeof window !== "undefined") {
                        window.addEventListener("scroll", handleScroll);
                        window.addEventListener("resize", updateWidth);
                        updateWidth(); // Initialisation de la largeur
                }

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

        <!-- Icone Menu Burger -->
        <button on:click={toggleBurgerMenu}><img src={MenuIcon} alt="" /></button>

        <!-- Menu Burger -->
        {#if burgerMenuOpen}
                <div class="burger-menu slide-in" transition:fade={{ duration: 600 }}>
                        <a href="#cours_de_guitare">Cours</a>
                        <a href="#Tarifs">Tarifs</a>
                        <a href="#reservation">Réservation</a>
                        <a href="#A_propos">Profil</a>
                        <a href="#Contact">Contact</a>
                </div>
        {/if}

        <!-- Menu Traditionnel -->
        <div class="menu">
                <a href="#cours_de_guitare">Cours</a>
                <a href="#Tarifs">Tarifs</a>
                <a href="#reservation">Réservation</a>
                <a href="#A_propos">Profil</a>
                <a href="#Contact">Contact</a>
        </div>
</header>

<style>

        button {
                display: flex;
                height: 35px;
                width: 35px;
                margin-left: calc(100vw - 30%);
                z-index: 4;
                background-color: transparent;
                border: none;
                display: none;
                position: relative;
        }

        .burger-menu {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                gap: 15px;
                position: absolute;
                border-radius: 20px;
                top: 120px;
                left: 60%;
                padding: 20px;
                width: auto;
                z-index: 0;
                background-color: var(--bgHeader);
      
        }
 
        header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-height: auto;
                background-color: rgb(236, 236, 236);
                padding: 20px;
                position: fixed;
                width: 100vw;
                z-index: 0;
                transition: opacity 0.8s ease-in-out;
                   z-index: 10;
        }

        .sticky {
                opacity: 0;
                transition: 0.3s ease-in-out;
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
                margin-right: 3%;
      
        }

        .menu a,
        .burger-menu a {
                text-decoration: none;
                color: rgb(48, 48, 48);
                font-weight: 400;
                font-size: 1rem;
                transition: 0.4s ease-in-out;
        }

        .menu a:hover,
        .burger-menu a:hover {
                color: var(--CTA);
        }

        @media screen and (max-width: 768px) {
                .menu {
                        display: none;
                }
                .burger-menu {
                        display: flex;
                        background-color: rgb(231, 232, 232);
                }
                button {
                        display: flex;
                        margin-left: calc(100vw - 40%);
                }
        }
</style>
