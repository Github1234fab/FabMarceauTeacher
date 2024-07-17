<script>
        import StratoOne from "../assets/stratocastorOne.png";
        // import StratoTwo from "../assets/stratocastorTwo.png";
        // import StratoThree from "../assets/stratocastorThree.png";
        // import StratoFour from "../assets/stratocastorFour.png";
</script>

<header>
        <div class="container-strat">
                <img class="strato" src={StratoOne} alt="Guitare" />
                <!-- <img class="strato" src={StratoTwo} alt="Guitare" />
                <img class="strato" src={StratoThree} alt="Guitare" />
                <img class="strato" src={StratoFour} alt="Guitare" /> -->
        </div>

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
