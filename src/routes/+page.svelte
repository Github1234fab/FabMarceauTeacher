<script>
  import Hero from "../components/Hero.svelte";
  import About from "../components/About.svelte";
  import Products from "../components/Products.svelte";
  import Service from "../components/Service.svelte";
  import Social from "../components/Social.svelte";
  import CTA from "../components/CTA.svelte";
  import Formulaire from "../components/Formulaire.svelte";
  import Resa from "../components/Resa.svelte";
  import FAQ from "../components/Faq.svelte";
  // import TestForm from "../components/TestForm.svelte";

  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Le composant est monté');
  });



 


</script>

<svelte:head>
  <title>Cours de Guitare à domicile - Lyon 6 & Monts du Lyonnais</title>
  <meta name="description" content="Profitez de cours de guitare à domicile sur Lyon 6 et les Monts du Lyonnais. Pédagogie personnalisée, tous niveaux, ambiance conviviale." />
  <meta property="og:title" content="Cours de Guitare à domicile - Lyon, par professeur diplômé et très expérimenté." />
  <meta property="og:description" content="Cours de guitare personnalisés pour tous les niveaux, à domicile. Disponible sur Lyon 6 et les Monts du Lyonnais." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cours-guitare-domicile-lyon.com/" />
  <meta property="og:image" content="/coursdeguitare.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>



<Hero />
<About />
<Products />
<!-- <TestForm /> -->

 <Service />
<Social />
<FAQ />
<Resa />
<Formulaire /> 
