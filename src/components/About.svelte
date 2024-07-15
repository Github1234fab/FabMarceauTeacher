<script>
        import ProfilPicture from "../assets/Marceau.jpg";
        import Button from "../components/ButtonCTA.svelte";
        import Block from "../components/Block.svelte";

        let tab = [
                {
                        title: "+ 17 000",
                        paragraph: "Je compte plus de 17 000 heures de cours de Guitare à mon actif !",
                        icon: "icon",
                },
                {
                        title: "6",
                        paragraph: "J'ai 6 casquettes: Musicien, Professeur, Directeur d'école de musique et Formateur de professeurs de musique. Photographe et développeur Web!",
                        icon: "icon",
                },
                {
                        title: "2",
                        paragraph: "J'enseigne sur deux lieux: Lyon 6 et les monts du Lyonnais.",
                        icon: "icon",
                },
        ];
</script>

<section class="About" id="About">
        <div class="wrapper-text">
                <img src={ProfilPicture} alt="" class="img" />
                <div class="wrapper-text">
                        <h1>À propos</h1>
                        <p>
                                J'ai lu un jour dans une revue pédgaogique, qu'enseigner consiste à éveiller les consiences à penser par elle même. Je crois que c'est exactement ce que je cherche à faire dès lors que je donne un cours de Guitare Je vise l'autonomie de l'élève. Expérimenter c'est comprendre et comprendre c'est apprendre. Lorsque l'on sait comment les choses fonctionnent alors,
                                libre à nous de créer, de jouer et d'évoluer comme bon nous semble dans la matière que l'on apprend. <br />J'ai donné plus de 17 000 heures de cours de Guitare ! À l'école de musique Issétys, école que j'ai créé en 2009 et dans laquelle j'enseigne encore, je dis souvent aux professeurs avec qui je collabore: "regardez bien l'attitude de votre élève quand il arrive
                                dans la salle et observez bien son attitude quand il repart". La musique appaise, la musique épanouit. Elle nous demande une grande concentration et elle requiert que notre esprit et notre corps soit à 100% connecté et relié. <br /> J'ai 52 ans aujorud'hui et j'enseigne depuis que j'ai 20 ans. J'ai été musicien professionnel, j'ai une licence de musicologie, j'aie
                                une médaille d'or de guitare jazz et un DEM de musique actuelle. J'ai beauoucp joué et beaucoup étudié. Mais ça j'allais dire, c'est le minimum syndical ! <br /> Ce qui compte pour enseigner, c'est la passion d'une part, l'envie et le besoin de transmettre d'autre part et pour finir, avoir suffisamment d'empathie et de technique pédagogique pour s'adapter à chaque élève
                                et lui permettre de grandir et d'évoluer dans sa pratique.
                        </p>
                        <Button />
                </div>
        </div>
        <div class="wrapper-frames-circle">
                {#each tab as info}
                        <Block icon={info.icon} title={info.title} paragraph={info.paragraph} />
                {/each}
        </div>
</section>

<style>
        .About {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                padding: 20px;
        }
        .img {
                grid-column: 1/2;
                grid-row: 1;
                width: 400px;
                height: 400px;
                margin: 0 auto;
                display: block;
                margin-top: 20px;
        }
        .wrapper-text {
                grid-column: 1;
                grid-row: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: center;
                justify-self: center;
                gap: 20px;
                margin-top: 50px;
                margin-bottom: 40px;
                padding: 20px;
        }
        .wrapper-text h1{
                     font-size: 2rem;
        }
        .wrapper-text p {
                line-height: 25px;
                margin-bottom: 50px;
        }
        .wrapper-frames-circle {
                grid-column: 1/3;
                grid-row: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                margin-bottom: 50px;
        }

        @media screen and (max-width: 768px) {
                .About {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                }
                .img {
                        grid-column: 1;
                        grid-row: 1;
                        width: 250px;
                        height:250px;
                        align-self: center;
                        margin-top: -20px;
                        /* border-radius: 50%; */
                        /* transform: rotate(2deg); */
                }
                .wrapper-text {
                        grid-column: 1;
                        grid-row: 2;
                        gap: 20px;
                        margin-top:20px;
                }
                .wrapper-frames-circle {
                        grid-column: 1/3;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 40px;
                }
        }
</style>
