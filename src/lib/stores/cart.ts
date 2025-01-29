import type { Course } from '$lib/types';
import { writable } from 'svelte/store';

function createCart() {
	let storedCart: Course[] = [];
	if (typeof window !== 'undefined' && window.localStorage) {
		storedCart = JSON.parse(localStorage.getItem('cart') ?? '[]');
	}

	const { subscribe, set, update } = writable(storedCart);

	return {
		subscribe,
		addItem: (item: Course) =>
			update((cart) => {
				const updatedCart = [...cart, item];
				if (typeof window !== 'undefined' && window.localStorage) {
					localStorage.setItem('cart', JSON.stringify(updatedCart));
				}
				return updatedCart;
			}),
		removeItem: (id: string) =>
			update((cart) => {
				const updatedCart = cart.filter((item) => item.id !== id);
				if (typeof window !== 'undefined' && window.localStorage) {
					localStorage.setItem('cart', JSON.stringify(updatedCart));
				}
				return updatedCart;
			}),
		clear: () => {
			if (typeof window !== 'undefined' && window.localStorage) {
				localStorage.removeItem('cart');
			}
			set([]);
		},
		findItem: (id: string): boolean => {
			if (typeof window !== 'undefined' && window.localStorage) {
				const currentCart = JSON.parse(localStorage.getItem('cart') ?? '[]') as Course[];
				return currentCart.some((item) => item.id === id);
			}
			return false;
		}
	};
}

export const cart = createCart();
