<script>
    let Nom = "";
    let Email = "";
    let Demande = "";
    let Téléphone = "";
    let message = ""; // Pour afficher le message de confirmation ou d'erreur

    const sheetUrl = "https://script.google.com/macros/s/AKfycbz-u1sRhgWRIDJB7n5_hiyhZvOwODmbjsMABMNF2fIBOgefH553zu0_XFTSIjSGNDH7bQ/exec"; 

    async function submitForm() {
        message = ""; // Réinitialiser le message

        try {
            const response = await fetch(sheetUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Nom, Email, Demande, Téléphone }),
            });

            const result = await response.json(); // Convertir la réponse en JSON

            if (result.status === "success") {
                message = "✅ Formulaire envoyé avec succès !";
                // Réinitialiser les champs du formulaire après envoi
                Nom = "";
                Email = "";
                Demande = "";
                Téléphone = "";
            } else {
                message = "❌ Une erreur est survenue. Veuillez réessayer.";
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            message = "❌ Impossible d'envoyer le formulaire. Vérifiez votre connexion.";
        }
    }
</script>

<form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={Nom} placeholder="Nom" required />
    <input type="email" bind:value={Email} placeholder="Email" required />
    <input type="text" bind:value={Demande} placeholder="Demande" required />
    <input type="tel" bind:value={Téléphone} placeholder="Téléphone" required />
    
    <button type="submit">Envoyer</button>

    {#if message}
        <p>{message}</p> <!-- Affiche le message de succès ou d'erreur -->
    {/if}
</form>
