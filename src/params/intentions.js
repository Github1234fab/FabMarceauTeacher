// src/params/intentions.js

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return [
		'cours-de-guitare-debutant',
		'cours-de-guitare-electrique',
		'cours-de-guitare-acoustique',
		'cours-de-guitare-classique',
		'cours-de-guitare-improvisation',
		'cours-de-guitare-jazz',
		'cours-de-guitare-blues',
		'cours-de-guitare-rock',
		'cours-de-guitare-technique'
	].includes(param);
}
