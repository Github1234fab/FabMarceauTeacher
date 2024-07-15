<script>
        import Concert from "../assets/concert.jpg";
</script>

<section class="social">
        <div class="wrapper-text">
                <h1>Directeur, Formateur, enseignant</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iste aspernatur neque, repudiandae tempore sapiente nam explicabo adipisci aliquid cupiditate delectus aliquam error suscipit velit eveniet possimus ullam dolores ipsam?</p>
        </div>
        <div class="wrapper-media">
                <div class="wrapper-video wrapper-position-A">
                        <h2>L'école de <span>Fabien</span></h2>
                        <div class="iframe-container">
                                <iframe class="iframe" title="interview Issetys ecole de musique" src="https://www.youtube.com/embed/yH6rYXOxqQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                        </div>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam vel corrupti consequuntur dignissimos quasi architecto fugiat dolor? Corrupti esse, praesentium tenetur consequuntur, in voluptas qui et iusto officiis incidunt expedita!</p>
                </div>
                <div class="wrapper-img wrapper-position-B">
                        <h2>Les élèves de <span>Fabien</span></h2>
                        <img src={Concert} alt="" class="concert" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam vel corrupti consequuntur dignissimos quasi architecto fugiat dolor? Corrupti esse, praesentium tenetur consequuntur, in voluptas qui et iusto officiis incidunt expedita!</p>
                </div>
        </div>
</section>

<style>
        .iframe-container {
                position: relative;
                width: 100%;
                padding-bottom: 56.25%; /* 16:9 aspect ratio */
                height: 0;
                overflow: hidden;
        }
        .iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
        }
        .social {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: auto;
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
                margin-top: 30px;
        }
        .social h1 {
                font-size: 2rem;
                font-weight: 800;
                color: white;
        }
        .social p {
                font-size: 1rem;
                font-weight: 400;
                line-height: 25px;
                color: white;
        }
        .concert {
                border-radius: 10px;
                height: 300px;
                box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.259);
        }

        .wrapper-media {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                margin-top: 50px;
                padding: 30px;
                margin-bottom: 50px;
        }
        .wrapper-img h2 span,
        .wrapper-video h2 span {
                color: white;
        }

        .wrapper-video,
        .wrapper-img {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 20px;
        }
        .wrapper-video p,
        .wrapper-img p {
                font-size: 1rem;
                font-weight: 200;
                line-height: 25px;
                color: white;
                width: 90%;
        }
        .wrapper-position-A {
                grid-column: 1;
                grid-row: 1;
        }
        .wrapper-position-B {
                grid-column: 2;
                grid-row: 2;
        }

        @media screen and (max-width: 1200px) {
                .wrapper-video,
                .wrapper-img {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                }
                .wrapper-video p,
                .wrapper-img p {
                        font-size: 1rem;
                        font-weight: 200;
                        line-height: 25px;
                        color: white;
                        width: 60%;
                        text-align: center;
                }
                .social {
                        padding: 20px;
                }
                .wrapper-text {
                        width: 80%;
                }
                .concert {
                        height: 150px;
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
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                        margin-top: 20px;
                        padding: 30px;
                        gap: 50px;
                }
        }

        @media screen and (max-width: 768px) {
                .wrapper-video,
                .wrapper-img {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                }
                .wrapper-video p,
                .wrapper-img p {
                        font-size: 1rem;
                        font-weight: 300;
                        line-height: 25px;
                        color: white;
                        width: 80%;
                        text-align: center;
                }
                .social {
                        padding: 20px;
                }
                .wrapper-text {
                        width: 80%;
                }
                .concert {
                        height: 150px;
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
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                        margin-top: 20px;
                        padding: 30px;
                        gap: 50px;
                }
        }
</style>
