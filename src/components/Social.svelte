<script>
        import Concert from "../assets/Cours-guitare-concert.jpg";
</script>

<section class="social">
        <div class="wrapper-text">
                <h1>Fabien Marceau<br /><span>Directeur, Formateur, Professeur</span></h1>
                <p>J'ai créé l'école de musique ISSÉTYS en 2009. J'ai formé de nombreux professeurs à une pédagogie nouvelle et dépoussiérée. L'école de musique Issétys enseigne la guitare, le piano, la basse, le chant, le ukulélé et la batterie.</p>
        </div>
        <div class="wrapper-media">
                <div class="wrapper-video">
                        <!-- <div class="iframe-container"> -->
                        <h2>Interview des élèves et du directeur de <span> l'école de musique, ISSÉTYS-Lyon 6</span></h2>
                        <iframe class="iframe" title="interview Issetys ecole de musique" src="https://www.youtube.com/embed/yH6rYXOxqQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                        <!-- </div> -->
                        <!-- <p>Ma mère était institutrice et m'a donné cette passion pour la pédagogie. C'est un bonheur de former chaque jour des musiciens, depuis 17 ans. Ils témoignent ici, lors d'un reportage tourné à l'école de musique Issétys.</p> -->
                </div>
                <div class="wrapper-img">
                        <h2>Fabien Marceau, <span>Formateur et Professeur</span></h2>
                        <img src={Concert} alt="" class="concert" />
                        <!-- <p>Enseigner, transmettre aux plus expérimentés comme à ceux qui n'ont jamais pratiqué. Enseigner aux adultes, comme aux enfants. Chaque élève a un profil différent et ce qui compte c'est de s'adapter à chaque profil. À son profil d'apprentissage, ses aptitudes, sa motivation, ses envies, ses besoins, son planning, (...).</p> -->
                        <p>Concert des élèves Issétys, 06/2024</p>
                </div>
        </div>
</section>

<style>
        .iframe {
                justify-content: center;
                align-self: center;
                width: 45%;
                height: 100%;
                border-radius: 10px;
                box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.259);
        }
        .social {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: auto;
                /* height: calc(100vh + 500px); */
                gap: 50px;
                padding: 200px;
                background-color: var(--CTA);
        }
        .wrapper-text {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                width: 60%;
                margin-top: 50px;
        }
        .social h1 {
                font-size: 2rem;
                font-weight: 800;
                color: white;
                text-align: center;
        }
        .social h1 span {
                font-size: 2rem;
                font-weight: 800;
                color: black;
        }

        .social p {
                font-size: 1rem;
                font-weight: 600;
                line-height: 25px;
                color: white;
                text-align: center;
        }
        .wrapper-media {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
                padding: 30px;
                margin-bottom: 50px;
                gap: 40px;
        }
        .concert {
                border-radius: 10px;
                width: 380px;
                height: 350px;
                box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.259);
        }

        .wrapper-img h2 span,
        .wrapper-video h2 span {
                color: white;
        }

        .wrapper-video,
        .wrapper-img {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100vw;
                height: 500px;
                gap: 20px;
                padding: 10px;
        }
        .wrapper-video h2,
        .wrapper-img h2 {
                font-size: 1.2rem;
                font-weight: 700;
                line-height: 25px;
                color: white;
                width: 90%;
                text-align: center;
        }
        .wrapper-video h2 span,
        .wrapper-img h2 span {
                font-size: 1.2rem;
                font-weight: 700;
                line-height: 25px;
                color: rgb(33, 33, 33);
                width: 90%;
                text-align: center;
        }

        @media screen and (max-width: 1440px) {
                .social {
                        padding: 20px;
                        height: auto;
                }
                .concert {
                        width: 380px;
                        height: 350px;
                }
        }
        @media screen and (max-width: 1024px) {
                .social {
                        padding: 20px;
                        height: auto;
                }
                .concert {
                        width: 380px;
                        height: 350px;
                }
        }
        @media screen and (max-width: 810px) {
                .iframe {
                        width: 95%;
                        height: 100%;
                }

                .social {
                        padding: 20px;
                        height: auto;
                }
                .wrapper-text {
                        width: 80%;
                }
                .concert {
                        width: 280px;
                        height: 250px;
                }

                .wrapper-media {
                        display: flex;
                        flex-direction: column;
                        padding: 30px;
                        gap: 0px;
                }
        }
        @media screen and (max-width: 425px) {
                .social {
                        height: auto;
                }
        }
</style>
