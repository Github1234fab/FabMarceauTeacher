<script>
import Button from "../components/ButtonCTA.svelte";

</script>

<section class="CTA">
        <h1>Visez le meilleur, choisissez la passion et l'expérience</h1>
        <p>Apprendre, se perfectionner, progresser, découvrir. Quoi de mieux que d'être accompagné par un professionnel . C'est l'occasion de bénéficier d'une grande expertise et de poser toutes vos questions, d'aborder tout ce que vous voulez en étant accompagné, dans la bienveillance et la bonne humeur!</p> 
 <Button/>
</section>



<style>
.CTA {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/FabienMarceauB.jpg");
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
        gap: 50px;
        background-color: var(--bgSectionB);
        height: 1200px;
        padding: 50px;

}
.CTA h1 {
        font-size: 2rem;
        font-weight: 800;
        color: white;
        margin-top: 400px;
}
.CTA p {
        font-size: 1rem;
        line-height: 25px;
        font-weight: 400;
                color: white;
}       


</style>