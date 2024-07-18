<script>
        import { onMount} from "svelte";
        import StratoOne from "../assets/stratocastorOne.png";
        let header;

        let scrollTimeout;

        function handleScroll() {
                header.classList.add("sticky");
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                        header.classList.remove("sticky");
                }, 300);
        }
        onMount(() => {
                if (typeof window !== "undefined") {
                        window.addEventListener("scroll", handleScroll);
                }
        });

        //comportement bizarre à l'ouverture du projet , pour  l'instant, on Destroy en commentaire
        // onDestroy(() => {
        //         if (typeof window !== "undefined") {
        //                 window.removeEventListener("scroll", handleScroll);
        //         }
        // });
</script>



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
