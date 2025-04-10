<script>
        import Concert from "../assets/Cours-guitare-concert.jpg";
</script>

<section class="social">
        <div class="wrapper-text">
                <h1>Fabien Marceau<br /><span>Professeur de guitare expérimenté</span></h1>
                <p>J'ai créé l'école de musique ISSÉTYS en 2009. J'ai formé de nombreux professeurs à une pédagogie nouvelle et dépoussiérée. <br> L'école de musique Issétys enseigne la guitare, le piano, la basse, le chant, le ukulélé et la batterie.</p>
        </div>
        <div class="wrapper-media">
                <div class="wrapper-video">
                        <!-- <h2>Interview de l'école de musique, ISSÉTYS-Lyon 6</h2> -->
                        <iframe class="iframe" title="interview Issetys ecole de musique" src="https://www.youtube.com/embed/yH6rYXOxqQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                </div>
                <!-- <div class="wrapper-img">
                        <h2>Concert des élèves Issétys, 06/2024</h2>
             <img src={Concert} alt="" class="concert" /> 
                </div> -->
        </div>
</section>

<style>
        .iframe {
                justify-content: center;
                align-self: center;
                width: 50%;
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
                padding: 50px;
                background: radial-gradient(rgb(109, 109, 212), rgb(10, 10, 105));

        }
        .wrapper-text {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 60px;
                min-width: 90%;
                margin-top: 20px;
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
                color: rgb(219, 216, 216);
        }

        .social p {
                font-size: 1rem;
                font-weight: 600;
                line-height: 25px;
                color: white;
                text-align: center;
                width: 100%;
        }
        .wrapper-media {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
                padding: 0px;
        }
        /* .concert {
                border-radius: 10px;
                width: auto;
                height: 57%;
                box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.259);
        } */

        .wrapper-video {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100vw;
                height: 500px;
                gap: 20px;
                padding: 10px;
        }
        @media screen and (max-width: 768px) {
                .iframe {
                 min-width: 80%;
                 height: 100%;
                }
        }
    
</style>
