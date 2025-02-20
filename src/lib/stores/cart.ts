import type { BaseCourse } from '$lib/types';
import { writable } from 'svelte/store';

function createCart() {
	let storedCart: BaseCourse[] = [];

	// Inicialización del carrito con manejo de errores
	if (typeof window !== 'undefined' && window.localStorage) {
		try {
			storedCart = JSON.parse(localStorage.getItem('cart') ?? '[]');
		} catch (e) {
			console.error('Error al cargar el carrito desde localStorage:', e);
			storedCart = [];
		}
	}

	const { subscribe, set, update } = writable(storedCart);

	const updateLocalStorage = (cart: BaseCourse[]) => {
		if (typeof window !== 'undefined' && window.localStorage) {
			try {
				localStorage.setItem('cart', JSON.stringify(cart));
			} catch (e) {
				console.error('Error al guardar el carrito en localStorage:', e);
			}
		}
	};

	return {
		subscribe,
		addItem: (item: BaseCourse) =>
			update((cart) => {
				// Ahora usamos key en lugar de id para la comparación
				if (cart.some((existingItem) => existingItem.key === item.key)) {
					return cart;
				}
				const updatedCart = [...cart, item];
				updateLocalStorage(updatedCart);
				return updatedCart;
			}),
		removeItem: (key: string) =>
			update((cart) => {
				// Actualizamos para usar key
				const updatedCart = cart.filter((item) => item.key !== key);
				updateLocalStorage(updatedCart);
				return updatedCart;
			}),
		clear: () => {
			if (typeof window !== 'undefined' && window.localStorage) {
				localStorage.removeItem('cart');
			}
			set([]);
		}
	};
}

export const cart = createCart();
