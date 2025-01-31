<script>
	// @ts-nocheck
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { page } from '$app/stores';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { WhatsappSolid } from 'flowbite-svelte-icons';
</script>

<div class="z-[-2] flex min-h-screen flex-col bg-gradient-to-l from-[#ffffff] to-indigo-200">
	<Navbar />

	<main class="flex-grow">
		<slot></slot>
	</main>

	<Contact />
	<Footer />

	<a
		href="https://wa.me/3125443868"
		class="fixed bottom-4 right-4 z-50 flex transform items-center justify-center rounded-full
	bg-gray-800 bg-opacity-75 p-5 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-500 hover:shadow-xl"
		target="_blank"
		rel="noopener noreferrer"
	>
		<WhatsappSolid class="h-8 w-8" />
	</a>
</div>
