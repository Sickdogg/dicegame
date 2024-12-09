// src/stores/store.js
import { writable } from 'svelte/store';

// 定義 store
export const bet = writable(1);
export const money = writable(0);
export const result = writable([0,1,2,3,4,5]);
export const iconState = writable(0);
export const moreAndLess = writable(0);
export const countGame = writable([0,0,0,0,0,0]);