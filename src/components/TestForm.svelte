<script>
    let Nom = "";
    let Email = "";
    let Demande = "";
    let Téléphone = "";
    let message = ""; // Message de confirmation ou d'erreur
  
    const sheetUrl = "https://script.google.com/macros/s/AKfycbxawIP7hChV6KuWiueMfBlBC67E-UDNKoa2v5ybyhrnaOSFzktW7GbaeBtGtc-Uha8Ysg/exec";
  
    // Fonction pour soumettre le formulaire
    async function submitForm() {
  // Test d'accès à l'API
  await fetch(sheetUrl, { method: "GET", mode: "no-cors" });

  // Envoi des données
  const response = await fetch(sheetUrl, {
    method: "POST",
    mode: "no-cors", // 🔴 Permet d’éviter l’erreur mais empêche de lire la réponse
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Nom, Email, Demande, Téléphone }),
  });

  console.log("Formulaire soumis !");
}
  </script>
  
  <form on:submit|preventDefault={submitForm}>
    <label for="Nom">Nom:</label>
    <input id="Nom" type="text" bind:value={Nom} required />
  
    <label for="Email">Email:</label>
    <input id="Email" type="email" bind:value={Email} required />
  
    <label for="Demande">Demande:</label>
    <textarea id="Demande" bind:value={Demande} required></textarea>
  
    <label for="Téléphone">Téléphone:</label>
    <input id="Téléphone" type="tel" bind:value={Téléphone} />
  
    <button type="submit">Soumettre</button>
  </form>
  
  {#if message}
    <p>{message}</p>
  {/if}
  