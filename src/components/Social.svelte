<script>
        import Concert from "../assets/Cours-guitare-concert.jpg";
</script>

<section class="social">
        <div class="wrapper-text">
                <h1>Directeur, Formateur, <span>Professeur</span></h1>
                <p>Ma passion pour la musique et la pédagogie m'a conduit en 2009 à créer l'École de musique issétys. Aujourd'hui l'école de musique Issétys enseigne la guitare, le piano, la basse, le chant, le ukulélé et la batterie.</p>
        </div>
        <div class="wrapper-media">
                <div class="wrapper-video wrapper-position-A">
                        <h2>Directeur - fondateur <br />de L'école de Musique <span>ISSÉTYS Lyon 6</span></h2>
                        <div class="iframe-container">
                                <iframe class="iframe" title="interview Issetys ecole de musique" src="https://www.youtube.com/embed/yH6rYXOxqQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                        </div>
                        <p>Ma mère était institutrice et m'a donné cette passion pour la pédagogie. C'est un bonheur de former chaque jour des musiciens, depuis 17 ans. Ils témoignent ici, lors d'un reportage tourné à l'école de musique Issétys.</p>
                </div>
                <div class="wrapper-img wrapper-position-B">
                        <h2>Formateur et <span>Professeur</span></h2>
                        <img src={Concert} alt="" class="concert" />
                        <p>Enseigner, transmettre au plus expérimentés comme à ceux qui n'ont jamais pratiqué. Enseigner aux adultes, comme aux enfants. Chaque élève a un profil différent.</p>
                </div>
        </div>
</section>

<style>
        .iframe-container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 500px;
                overflow: hidden;
        }
        .iframe {
                justify-content: center;
                align-self: center;
                width: 100%;
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
                padding: 50px;
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
        }
        .social h1 span {
                font-size: 2rem;
                font-weight: 800;
                color: black;
        }

        .social p {
                font-size: 1rem;
                font-weight: 300;
                line-height: 25px;
                color: white;
                text-align: center;
        }
        .concert {
                border-radius: 10px;
                width: 380px;
                height: 350px;
                box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.259);
        }

        .wrapper-media {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                margin-top: 50px;
                padding: 30px;
                margin-bottom: 50px;
                gap: 40px;
        }
        .wrapper-img h2 span,
        .wrapper-video h2 span {
                color: white;
        }

        .wrapper-video,
        .wrapper-img {
                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: left;
                gap: 20px;
        }
        .wrapper-video p,
        .wrapper-img p {
                font-size: 1rem;
                font-weight: 500;
                line-height: 25px;
                color: white;
                width: 90%;
                text-align: left;
        }
        .wrapper-position-A {
                grid-column: 1;
                grid-row: 1;
        }
        .wrapper-position-B {
                grid-column: 2;
                grid-row: 2;
                margin-bottom: 50px;
        }

        @media screen and (max-width: 1440px) {
                .social {
                        padding: 20px;
                        /* height: calc(100vh + 900px); */
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
                        /* height: calc(100vh + 1100px); */
                        height: auto;
                }
                .concert {
                        width: 380px;
                        height: 350px;
                }
        }
        @media screen and (max-width: 810px) {
                .wrapper-video,
                .wrapper-img {
                        display: flex;
                        flex-direction: column;
                        align-items: centert;
                        justify-content: center;
                        gap: 20px;
                }
                .wrapper-video p,
                .wrapper-img p {
                        font-size: 1rem;
                        font-weight: 600;
                        line-height: 25px;
                        color: white;
                        width: 80%;
                        text-align: center;
                }
                .social {
                        padding: 20px;
                        height: auto;
                        /* min-height: auto; */
                        /* height: calc(100vh + 800px); */
                }
                .wrapper-text {
                        width: 80%;
                }
                .concert {
                        width: 280px;
                        height: 250px;
                }

                .wrapper-position-A {
                        grid-column: 1;
                        grid-row: 1;
                }
                .wrapper-position-B {
                        grid-column: 1;
                        grid-row: 2;
                }
                .wrapper-media {
                        display: flex;
                        flex-direction: column;
                        margin-top: 20px;
                        padding: 30px;
                        gap: 50px;
                }
        }
        @media screen and (max-width: 425px) {
                .social {
                        /* height: calc(100vh + 1300px); */
                       height: auto;
                }
        }
</style>
