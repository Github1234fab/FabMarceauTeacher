<script>
        import ProfilPicture from "../assets/Marceau.jpg";
        import Button from "../components/ButtonCTA.svelte";
        import Block from "../components/Block.svelte";
        import ButtonCta from "../components/ButtonCTA.svelte";

        let tab = [
                {
                        title: "+ 17 000",
                        paragraph: "Plus de 17 000 heures de cours de Guitare données !",
                          icon: "fa-solid fa-clock",
                       
                },
                {
                        title: "9",
                        paragraph: "Maîtrise de 9 styles: Rock, Jazz, Blues, Funk, Finger-style, Pop, Bossa Nova, Metal,  Folk.",
                        icon: "fa-solid fa-guitar",
                },
                {
                        title: "2",
                        paragraph: "J'enseigne la Guitare sur deux sites géographiques: Lyon 6 et les monts du Lyonnais.",
                        icon: "fa-solid fa-location-dot",
                },
        ];
</script>

<section class="About" id="A_propos">
        <div class="wrapper-frames-circle">
                {#each tab as info}
                        <Block icon={info.icon} title={info.title} paragraph={info.paragraph} />
                {/each}
        </div>
        <div class="wrapper-text">
                <img src={ProfilPicture} alt="" class="img" />
                <div class="wrapper-text">
                        <h1>À propos</h1>
                        <p>
                                J'ai lu un jour dans une revue pédagogique, qu'enseigner consiste à éveiller les consiences à penser par elle même. Je crois que c'est exactement ce que je cherche à faire dès lors que je donne un cours de Guitare Je vise l'autonomie de l'élève. Expérimenter c'est comprendre et comprendre c'est apprendre. Lorsque l'on sait comment les choses fonctionnent alors,
                                libre à nous de créer, de jouer et d'évoluer comme bon nous semble dans la matière que l'on apprend. <br /><br>J'ai donné plus de 17 000 heures de cours de Guitare à l'école de musique Issétys installée à Lyon 6, école que j'ai créé en 2009. Je dis souvent aux professeurs avec qui je collabore: "regardez l'attitude de votre élève quand il arrive dans la salle et
                                observez son attitude quand il repart". La musique appaise, la musique nous épanouit. Elle requiert une immense concentration car elle se fabrique avec notre esprit et notre corps, connectés, reliés ensemble à 100%. <br/><br>
                                J'ai été musicien professionnel, j'ai une licence de musicologie, une médaille d'or de guitare jazz , un DEM de musique actuelle, une licence de Science de l'éducation. J'ai beauoucp joué et beaucoup étudié. Mais ça j'allais dire, c'est le minimum syndical ! <br /><br> Ce qui compte pour enseigner, c'est la passion d'une part, l'envie et le besoin de transmettre d'autre part et pour finir, avoir suffisamment
                                d'empathie et de technique pédagogique pour s'adapter à chaque élève, dans le but de lui permettre d'évoluer dans sa pratique, de devenir autonome.
                        </p>
                </div>
                <ButtonCta />
        </div>
        
</section>

<style>
        .About {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                padding: 20px;
                z-index: 0;
        }
        .img {
                grid-column: 1/2;
                grid-row: 2;
                width: 400px;
                height: 400px;
                margin: 0 auto;
                display: block;
                margin-top: 20px;
                border-radius: 50%;
                transform: rotate(2deg);
                z-index: 0;
        }
        .wrapper-text {
                grid-column: 1;
                grid-row: 3;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: center;
                justify-self: center;
                gap: 20px;
                margin-top: 50px;
                padding: 20px;
        }
        .wrapper-text h1 {
                font-size: 2rem;
        }
        .wrapper-text p {
                line-height: 25px;
                margin-bottom: 10px;
                padding: 50px;
        }
        .wrapper-frames-circle {
                grid-column: 1/3;
                grid-row: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                margin-bottom: 50px;
                margin-top: 100px;
        }
      

        @media screen and (max-width: 768px) {
                .About {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                }
                .img {
                        grid-column: 1;
                        grid-row: 2;
                        width: 250px;
                        height: 250px;
                        align-self: center;
                        margin-top: -20px;
                }
                .wrapper-text {
                        grid-column: 1;
                        grid-row: 3;
                        gap: 20px;
                        margin-top: 20px;
                }
                .wrapper-text p {
                        grid-column: 1/3;
                        grid-row: 2;
                        gap: 20px;
                        margin-top: 20px ;
                        padding: 10px;
                }
                .wrapper-frames-circle {
                        grid-column: 1/3;
                        grid-row: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 40px;
                }
        }
</style>
