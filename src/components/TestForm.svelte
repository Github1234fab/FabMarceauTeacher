<script>
  let Nom = "";
  let Email = "";
  let Demande = "";
  let Téléphone = "";
  let message = ""; // Pour afficher le message de confirmation ou d'erreur

  const sheetUrl = "https://script.google.com/macros/s/AKfycbzdYfv_82fHcJ86gxjsHzmKgtMDdNOhOBuL5MZqgxXRiSbiQbD2N5uAvFx2zQmV_lcuig/exec";

  async function submitForm() {
  // Envoi des données sans lire la réponse, mais avec un message de confirmation
  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      mode: "no-cors", // 🔴 Permet d’éviter l’erreur mais empêche de lire la réponse
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Nom, Email, Demande, Téléphone }),
    });

    // Affiche le message de succès
    message = "Formulaire soumis avec succès !";
  } catch (error) {
    message = "Erreur lors de l'envoi du formulaire.";
    console.error(error);
  }
}

//   async function submitForm() {
//     // Test d'accès à l'API
//     await fetch(sheetUrl, { method: "GET", mode: "no-cors" });

//     // Envoi des données
//     const response = await fetch(sheetUrl, {
//       method: "POST",
//       mode: "no-cors", // 🔴 Permet d’éviter l’erreur mais empêche de lire la réponse
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ Nom, Email, Demande, Téléphone }),
//     });

//     console.log("Formulaire soumis !");
//   }
</script>

<form on:submit|preventDefault={submitForm}>
  <input type="text" bind:value={Nom} placeholder="Nom" required />
  <input type="email" bind:value={Email} placeholder="Email" required />
  <input type="text" bind:value={Demande} placeholder="Demande" required />
  <input type="tel" bind:value={Téléphone} placeholder="Téléphone" required />

  <button type="submit">Envoyer</button>

  {#if message}
    <p>{message}</p>
    <!-- Affiche le message de succès ou d'erreur -->
  {/if}
</form>
