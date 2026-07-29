// src/lib/data/villes.js

/**
 * @typedef {Object} VilleSEO
 * @property {string} slug - Le paramètre d'URL (ex: 'craponne')
 * @property {string} name - Le nom propre de la ville ou zone (ex: 'Craponne')
 * @property {string} prep - La préposition simple (ex: 'à', 'dans le')
 * @property {string} prepArticle - Préposition + article combinés (ex: 'à Craponne', 'dans le 6ème arrondissement de Lyon')
 * @property {string} dep - Le numéro ou nom du département (ex: 'Rhône (69)')
 */

/** @type {Record<string, VilleSEO>} */
export const villesSEO = {
	'lyon-1': { slug: 'lyon-1', name: 'Lyon 1er', prep: 'dans le', prepArticle: 'dans le 1er arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-2': { slug: 'lyon-2', name: 'Lyon 2ème', prep: 'dans le', prepArticle: 'dans le 2ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-3': { slug: 'lyon-3', name: 'Lyon 3ème', prep: 'dans le', prepArticle: 'dans le 3ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-4': { slug: 'lyon-4', name: 'Lyon 4ème', prep: 'dans le', prepArticle: 'dans le 4ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-5': { slug: 'lyon-5', name: 'Lyon 5ème', prep: 'dans le', prepArticle: 'dans le 5ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-6': { slug: 'lyon-6', name: 'Lyon 6ème', prep: 'dans le', prepArticle: 'dans le 6ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-7': { slug: 'lyon-7', name: 'Lyon 7ème', prep: 'dans le', prepArticle: 'dans le 7ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-8': { slug: 'lyon-8', name: 'Lyon 8ème', prep: 'dans le', prepArticle: 'dans le 8ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'lyon-9': { slug: 'lyon-9', name: 'Lyon 9ème', prep: 'dans le', prepArticle: 'dans le 9ème arrondissement de Lyon', dep: 'Rhône (69)' },
	'craponne': { slug: 'craponne', name: 'Craponne', prep: 'à', prepArticle: 'à Craponne', dep: 'Rhône (69)' },
	'francheville': { slug: 'francheville', name: 'Francheville', prep: 'à', prepArticle: 'à Francheville', dep: 'Rhône (69)' },
	'tassin-la-demi-lune': { slug: 'tassin-la-demi-lune', name: 'Tassin-la-Demi-Lune', prep: 'à', prepArticle: 'à Tassin-la-Demi-Lune', dep: 'Rhône (69)' },
	'saint-genis-les-ollieres': { slug: 'saint-genis-les-ollieres', name: 'Saint-Genis-les-Ollières', prep: 'à', prepArticle: 'à Saint-Genis-les-Ollières', dep: 'Rhône (69)' },
	'vaugneray': { slug: 'vaugneray', name: 'Vaugneray', prep: 'à', prepArticle: 'à Vaugneray', dep: 'Rhône (69)' },
	'grezieu-la-varenne': { slug: 'grezieu-la-varenne', name: 'Grézieu-la-Varenne', prep: 'à', prepArticle: 'à Grézieu-la-Varenne', dep: 'Rhône (69)' },
	'brindas': { slug: 'brindas', name: 'Brindas', prep: 'à', prepArticle: 'à Brindas', dep: 'Rhône (69)' },
	'chaponost': { slug: 'chaponost', name: 'Chaponost', prep: 'à', prepArticle: 'à Chaponost', dep: 'Rhône (69)' },
	'mornant': { slug: 'mornant', name: 'Mornant', prep: 'à', prepArticle: 'à Mornant', dep: 'Rhône (69)' },
	'sainte-foy-les-lyon': { slug: 'sainte-foy-les-lyon', name: 'Sainte-Foy-lès-Lyon', prep: 'à', prepArticle: 'à Sainte-Foy-lès-Lyon', dep: 'Rhône (69)' },
	'saint-martin-en-haut': { slug: 'saint-martin-en-haut', name: 'Saint-Martin-en-Haut', prep: 'à', prepArticle: 'à Saint-Martin-en-Haut', dep: 'Rhône (69)' }
};
