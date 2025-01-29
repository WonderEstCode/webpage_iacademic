<script>
	// @ts-nocheck
	import Hero from '../lib/components/hero.svelte';
	import Partners from '$lib/components/partners.svelte';
	import PagesCourses from '$lib/components/pagesCourses.svelte';
	import About from '$lib/components/about.svelte';
</script>

<Hero />

<PagesCourses />
<About />
<div class="scroll-margin-top flex items-center justify-center lg:ms-14">
	<h2 class="mb-7 mt-12 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
		Entes certificadores & Partners
	</h2>
</div>
<Partners />

<style>
	.scroll-margin-top {
		scroll-margin-top: 85px;
	}
</style>
