<script>
import Button from "../components/ButtonCTA.svelte";

</script>

<section class="CTA">
        <h1>Visez le meilleur, choisissez l'expérience</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quis veritatis? Aperiam repellendus accusamus maiores reprehenderit aut? Veniam sunt voluptatem quibusdam nam voluptatum ab consectetur, officia odit voluptatibus aut nesciunt?</p> 
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
}
.CTA p {
        font-size: 1.3rem;
        font-weight: 400;
                color: white;
}       


</style>