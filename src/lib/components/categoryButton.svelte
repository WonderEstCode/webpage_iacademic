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
	class="-ms-px -mt-px inline-flex items-center gap-x-2 rounded-md border border-[#5b49d1] bg-[#4b3ab7] px-4 py-3 text-sm font-medium text-[#f4f6fa] shadow-sm hover:bg-[#4a3bb3] focus:z-10 focus:bg-[#4a3bb3] focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:mt-0 sm:first:ms-0 dark:border-[#5b49d1] dark:bg-[#5b49d1] dark:text-[#f4f6fa] dark:hover:bg-[#4a3bb3] dark:focus:bg-[#4a3bb3]"
>
	{categoryName}
</button>
