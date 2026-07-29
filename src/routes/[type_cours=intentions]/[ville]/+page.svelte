<!-- src/routes/[type_cours=intentions]/[ville]/+page.svelte -->
<script>
  import { activeCity, activeIntention } from '$lib/stores/seoStore';
  import Hero from "../../../components/Hero.svelte";
  import About from "../../../components/About.svelte";
  import Products from "../../../components/Products.svelte";
  import Service from "../../../components/Service.svelte";
  import Social from "../../../components/Social.svelte";
  import FAQ from "../../../components/Faq.svelte";
  import Resa from "../../../components/Resa.svelte";
  import Formulaire from "../../../components/Formulaire.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  // Mettre à jour réactivement les stores SEO
  $: {
    activeCity.set(data.ville);
    activeIntention.set(data.intention);
  }
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="description" content={data.seo.description} />
  <meta property="og:title" content={data.seo.ogTitle} />
  <meta property="og:description" content={data.seo.ogDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cours-guitare-domicile-lyon.com/{data.intention.slug}/{data.ville.slug}" />
  <meta property="og:image" content="/coursdeguitare.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<About />
<Products />
<Service />
<Social />
<FAQ />
<Resa />
<Formulaire />
