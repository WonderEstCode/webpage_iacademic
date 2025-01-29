<script lang="ts">
	export let categoryName: string;
	export let categoryKey: string;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('categorySelect', { categoryName, categoryKey });
	}
</script>

<button
	on:click={handleClick}
	type="button"
	class="-ms-px -mt-px inline-flex items-center gap-x-2 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:z-10 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:mt-0 sm:first:ms-0 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
>
	{categoryName}
</button>
