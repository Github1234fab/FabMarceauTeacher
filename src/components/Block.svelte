<script>
  export let title;
  export let paragraph;
  export let icon;
  import Button from "../components/ButtonCTA.svelte";
</script>

<div class="block">
  <div class="wrapper-text">
    <h1>{title}</h1>
    <i class="icon {icon} "></i>
    <p>{paragraph}</p>
  </div>
</div>

<style>
  .block {
        display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    padding: 30px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.142);
    border-radius: 8px;
    max-width: 300px;
   height: 400px;
  }
  .wrapper-text {
    display: grid;
    grid-template-columns: 200px, 100px, 200px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;

  }
  h1 {
    color: var(--bgHeader);
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
  }
  p {
    color: var(--bgHeader);
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
  .icon {
    font-size: 3rem;
    color: var(--CTA);
    text-align: center;
    color: grey;
  }

  @media screen and (max-width: 768px) {
    .block {
      min-height: auto;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
</style>
