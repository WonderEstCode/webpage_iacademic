<script>
	// @ts-nocheck
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { page } from '$app/stores';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="z-[-2] flex min-h-screen flex-col bg-gradient-to-l from-[#ffffff] to-indigo-200">
	<Navbar />

	<main class="flex-grow">
		<slot></slot>
	</main>

	<Contact />
	<Footer />
</div>
