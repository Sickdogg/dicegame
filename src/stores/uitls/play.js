import { writable } from 'svelte/store';

export const isPlaying = writable(false);
export const isAutoPlaying = writable(false);