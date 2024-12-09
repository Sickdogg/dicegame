// src/stores/store.js
import { writable } from 'svelte/store';

// 定義 store
export const bet = writable(1); //only more than 1
export const money = writable(0);
export const result = writable([0,1,2,3,4,5]); //value is 1~6 mean (diece number)
export const iconState = writable([0,0,0,0,0,0]); //value 0 is mean 1 and so on
export const moreAndLess = writable([0,0]); //index 0 is small and index 1 is big
export const countGame = writable([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]);//value 0~7 mean how many times about this deice number is 
export const haveBet = writable(false);