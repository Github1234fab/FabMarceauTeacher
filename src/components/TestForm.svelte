<script>
    let Nom = "";
    let Email = "";
    let Demande = "";
    let Téléphone = "";

    const sheetUrl = "https://script.google.com/macros/s/AKfycbx3gxGxfJM6k1bzzskfHYa0l6crpxgRc1Xfy2lxGqtnGOPU0bGa3TwJukUcDZjw9hLVCA/exec"; 
  
    async function submitForm() {
      const response = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Nom, Email, Demande, Téléphone }),
      });
  
      const text = await response.text();
      console.log("Réponse du serveur :", text);
    }
  </script>
  
  <form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={Nom} placeholder="Nom" required />
    <input type="email" bind:value={Email} placeholder="Email" required />
    <input type="text" bind:value={Demande} placeholder="Demande" required />
    <input type="tel" bind:value={Téléphone} placeholder="Téléphone" required />


    <button type="submit">Envoyer</button>
  </form>