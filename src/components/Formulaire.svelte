<!-- +++++++++++++++++Text+++++++++++++++++ -->
<div class="formulaire">
        <div class="wrapper-text">
                <h1 class="form-title">Formulaire de <span>contact</span></h1>
                <!-- <h2 class="form-contactez">Contactez-moi dès aujourdhui!</h2> -->
                <div class="coordonnees">
                        <a href="mailto:fabien.marceau@gmail.com " class="contact-form"> <i class="fa-regular fa-envelope icon-coordonnees"></i> fabien.marceau@gmail.com</a>
                        <a href="tel:0660376567" class="contact-form"><i class="fa-solid fa-phone-volume icon-coordonnees"></i> 0660 376 567</a>
                </div>
        </div>

        <!-- +++++++++++++++++Coordonnées+++++++++++++++++ -->

        <!-- +++++++++++++++++Formulaire+++++++++++++++++ -->

        <section class="section-form" id="Contact">
                <form name="contact" method="POST" netlify-honeypot="bot-field" class="wrapper-form" netlify>
                        <input type="hidden" name="form-name" value="contact" />

                        <!-- +++++++++++++++++Inputs en wrapper pour disposition+++++++++++++++++ -->
                        <div class="wrapper-inputs">
                                <input name="nom" type="text" id="nom" required placeholder="Nom" />
                                <input name="prenom" type="text" id="prenom" required placeholder="Prénom" />
                        </div>

                        <!-- +++++++++++++++++Inputs en wrapper pour disposition+++++++++++++++++ -->
                        <div class="wrapper-inputs">
                                <input name="email" type="email" id="email" required placeholder="Adresse mail" />
                                <input name="telephone" type="tel" id="telephone" required placeholder="Téléphone" />
                        </div>

                        <!-- +++++++++++++++++Champ demande+++++++++++++++++ -->
                        <textarea name="demande" id="demande" class="demande" placeholder="Votre demande"></textarea>
                        <!-- +++++++++++++++++Button submit+++++++++++++++++ -->
                        <input class="btn-grad" type="submit" value="Envoyez" />
                </form>
        </section>
</div>

<style>
        .formulaire {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 50px;
                padding: 50px;
                background-color: var(--bgSectionA);
        }
        .section-form {
                display: flex;
                flex-direction: column;
                height: auto;
                width: 100%;
                padding: 20px;
                background-color: var(--bgHero);
                justify-content: center;
                align-items: center;
        }

        .wrapper-text {
                display: flex;
                flex-direction: column;
                z-index: 2;
                justify-self: center;
                align-self: center;
                margin-top: 40px;
        }
        .wrapper-form{
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                justify-content: center;
          
        }
        .form-title {
                text-transform: uppercase;
                font-size: 2rem;
                color: var(--bgHero);
                font-weight: 700;
                margin-bottom: 0px;
                letter-spacing: -0.04em;
                margin-top: 50px;
                text-align: center;
                margin-bottom: 20px;
        }
        .form-title span {
                color: var(--CTA);
        }

        .wrapper-inputs {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 20px;
                margin-bottom: 20px;
        }
        input {
                background-color: transparent;
                border: 2px solid rgb(217, 216, 216);
                font-weight: 600;
                padding: 20px;
                border-radius: 15px;
                width: 100%;
                text-align: left;
                color: var(--bgHero);
                font-size: 1rem;
                font-family: "Raleway";
        }
        input:hover {
                animation: bounce 0.4s ease-in-out;
        }
        input::placeholder {
                color: var(--bgHero);
                font-size: var(--m);
        }
        .demande {
                border: 2px solid rgb(220, 219, 219);
                font-weight: 400;
                padding: 10px;
                border-radius: 15px;
                width: 90%;
                margin: 0 auto;
                min-height: 200px;
                background-color: transparent;
                color: var(--bgHero);
                font-size: 1rem;
                font-family: "Raleway";
        }
        .demande:hover {
                animation: bounce 0.4s ease-in-out;
        }
        .demande::placeholder {
                color: var(--bgHero);
                font-size: 0.7em;
                font-size: 0.9rem;
        }

     
         .btn-grad {background-image: linear-gradient(to right, #EB3349 0%, #F45C43  51%, #EB3349  100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 25px;
            text-align: center;

            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px rgba(37, 37, 37, 0.329);
            border-radius: 10px;
            display: block;
            max-width: 150px;
            border: none;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         
        @keyframes bounce {
                0% {
                        transform: scale(1) translateY(-2px);
                }
                25% {
                        transform: scale(1) translateY(3px);
                }
                50% {
                        transform: scale(1) translateY(-1px);
                }
                75% {
                        transform: scale(1) translateY(2px);
                }
                100% {
                        transform: scale(1) translateY(0);
                }
        }
        .coordonnees {
                margin-top: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 50px;
        }
        .icon-coordonnees {
                color: var(--bgHero);
        }
        .contact-form {
                font-weight: 500;
                color: var(--bgHero);
                letter-spacing: -0.05em;
                font-size: var(--m);
                text-align: center;
                word-spacing: 6px;
                text-decoration: none;
        }

        @media screen and (max-width: 768px) {
                .coordonnees {
                        flex-direction: column;
                        margin-top: 20px;
                        gap: 5px;
                }
                .wrapper-inputs {
                        display: flex;
                        flex-direction: column;
                        min-width: 300px;
                }
                input {
                        width: 90%;
                        justify-content: center;
                        align-items: center;
                }
                .demande {
                        width: 100%;
                        margin: 0 auto;
                }
        }
</style>
