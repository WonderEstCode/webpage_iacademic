<script>
	// @ts-nocheck
	import Hero from '../lib/components/hero.svelte';
	import PagesCourses from '$lib/components/pagesCourses.svelte';
	import About from '$lib/components/about.svelte';
</script>

<Hero />

<PagesCourses />
<About />

<style>
	.scroll-margin-top {
		scroll-margin-top: 85px;
	}
</style>
