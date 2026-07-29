// src/routes/[type_cours=intentions]/[ville]/+page.js
import { error } from '@sveltejs/kit';
import { villesSEO } from '$lib/data/villes.js';
import { intentionsSEO } from '$lib/data/intentions.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const slugVille = params.ville ? params.ville.toLowerCase() : '';
	const typeCours = params.type_cours;

	// Récupérer la configuration de la ville
	const villeInfo = villesSEO[slugVille];
	if (!villeInfo) {
		throw error(404, 'Ville non desservie pour les cours de guitare à domicile');
	}

	// Récupérer l'intention
	const intentionInfo = intentionsSEO[typeCours];
	if (!intentionInfo) {
		throw error(404, 'Type de cours de guitare non supporté');
	}

	// Générer les balises SEO ciblées
	const seo = {
		title: `${intentionInfo.name} à domicile ${villeInfo.prepArticle} - Professeur Expérimenté`,
		description: `${intentionInfo.description} Cours personnalisés de guitare pour tous niveaux ${villeInfo.prepArticle}. Par Fabien Marceau, prof diplômé et très expérimenté.`,
		ogTitle: `${intentionInfo.name} à domicile ${villeInfo.prepArticle}`,
		ogDescription: `${intentionInfo.description} Tous niveaux ${villeInfo.prepArticle}.`
	};

	return {
		ville: villeInfo,
		intention: intentionInfo,
		seo
	};
}
