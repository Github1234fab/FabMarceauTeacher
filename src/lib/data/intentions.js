// src/lib/data/intentions.js

/**
 * @typedef {Object} IntentionSEO
 * @property {string} slug - Le paramètre d'URL (ex: 'cours-de-guitare-electrique')
 * @property {string} name - Le nom propre de l'intention (ex: 'Cours de guitare électrique')
 * @property {string} keyword - Le mot-clé principal visé (ex: 'guitare électrique')
 * @property {string} titleWord - Le mot clé pour le titre (ex: 'Électrique')
 * @property {string} description - Description marketing pour l'intention
 */

/** @type {Record<string, IntentionSEO>} */
export const intentionsSEO = {
	'cours-de-guitare-debutant': {
		slug: 'cours-de-guitare-debutant',
		name: 'Cours de guitare débutant',
		keyword: 'guitare débutant',
		titleWord: 'Débutant',
		description: 'Débutez la guitare sur des bases solides avec une méthode simple et progressive.'
	},
	'cours-de-guitare-electrique': {
		slug: 'cours-de-guitare-electrique',
		name: 'Cours de guitare électrique',
		keyword: 'guitare électrique',
		titleWord: 'Électrique',
		description: 'Maîtrisez les riffs, les solos et les effets de la guitare électrique.'
	},
	'cours-de-guitare-acoustique': {
		slug: 'cours-de-guitare-acoustique',
		name: 'Cours de guitare acoustique',
		keyword: 'guitare acoustique',
		titleWord: 'Acoustique',
		description: 'Découvrez le plaisir de la guitare folk, des accords ouverts et de l\'accompagnement de chansons.'
	},
	'cours-de-guitare-classique': {
		slug: 'cours-de-guitare-classique',
		name: 'Cours de guitare classique',
		keyword: 'guitare classique',
		titleWord: 'Classique',
		description: 'Apprenez la guitare classique, le jeu aux doigts et la lecture de partitions ou de tablatures.'
	},
	'cours-de-guitare-improvisation': {
		slug: 'cours-de-guitare-improvisation',
		name: 'Cours d\'improvisation guitare',
		keyword: 'improvisation guitare',
		titleWord: 'Improvisation',
		description: 'Apprenez à improviser vos propres solos en utilisant les gammes et les modes.'
	},
	'cours-de-guitare-jazz': {
		slug: 'cours-de-guitare-jazz',
		name: 'Cours de guitare jazz',
		keyword: 'guitare jazz',
		titleWord: 'Jazz',
		description: 'Explorez l\'harmonie jazz, le swing, les accords enrichis et l\'improvisation.'
	},
	'cours-de-guitare-blues': {
		slug: 'cours-de-guitare-blues',
		name: 'Cours de guitare blues',
		keyword: 'guitare blues',
		titleWord: 'Blues',
		description: 'Maîtrisez le blues à la guitare, le shuffle, le pentatonique et le feeling.'
	},
	'cours-de-guitare-rock': {
		slug: 'cours-de-guitare-rock',
		name: 'Cours de guitare rock',
		keyword: 'guitare rock',
		titleWord: 'Rock',
		description: 'Jouez les plus grands standards du rock, des power chords aux solos mythiques.'
	},
	'cours-de-guitare-technique': {
		slug: 'cours-de-guitare-technique',
		name: 'Cours de technique guitare',
		keyword: 'technique guitare',
		titleWord: 'Technique',
		description: 'Développez votre vélocité, votre précision de main droite et vos techniques de jeu (legato, tapping, picking).'
	}
};
