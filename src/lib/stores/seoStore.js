// src/lib/stores/seoStore.js
import { writable } from 'svelte/store';

/** 
 * @type {import('svelte/store').Writable<import('../data/villes').VilleSEO | null>} 
 */
export const activeCity = writable(null);

/** 
 * @type {import('svelte/store').Writable<import('../data/intentions').IntentionSEO | null>} 
 */
export const activeIntention = writable(null);
