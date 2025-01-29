<script>
	import facebook from '../../lib/assets/social-media/facebook.svg';
	import whatsapp from '$lib/assets/social-media/whatsapp.svg';
	import instagram from '$lib/assets/social-media/instagram.svg';
	import linkedin from '$lib/assets/social-media/linkedin.svg';
	import gmail from '$lib/assets/social-media/gmail.svg';
	import ultraLogo from '$lib/assets/logo_ultra.svg';
	import { Image } from '@unpic/svelte';

	let currentYear = new Date().getFullYear();
</script>

<footer class="bg-transparent">
	<main
		class="flex w-full flex-col items-center justify-center px-8 py-8 text-white md:flex-row md:px-36 md:py-16"
	>
		<div class="mb-6 flex min-w-0 flex-1 flex-col items-center text-center md:mb-0">
			<a href="/" class="mb-2 flex items-center space-x-2">
				<Image
					alt="Logo Centic"
					src="/logo_centic.webp"
					width={56}
					height={46}
					layout="constrained"
				/>
				<span class="self-center whitespace-nowrap text-2xl font-semibold">Centic</span>
			</a>
			<span class="text-xs text-gray-400">© {currentYear} Centic. All Rights Reserved.</span>
		</div>

		<div class="mb-6 flex min-w-0 flex-1 justify-center space-x-2 md:mb-0">
			<a
				target="_blank"
				href="https://www.facebook.com/CenticCentrodeEntrenamiento/"
				class="h-8 w-8"
			>
				<Image src={facebook} alt="facebook" width={100} height={80} layout="constrained" />
			</a>
			<a target="_blank" href="https://www.instagram.com/centicsas/?hl=es" class="h-8 w-8">
				<Image src={instagram} alt="instagram" width={100} height={80} layout="constrained" />
			</a>
			<a href="https://wa.me/3125443868" target="_blank" class="h-8 w-8">
				<Image src={whatsapp} alt="whatsapp" width={100} height={80} layout="constrained" />
			</a>
			<a
				target="_blank"
				href="https://www.linkedin.com/company/centic-sas/posts/?feedView=all"
				class="h-8 w-8"
			>
				<Image src={linkedin} alt="linkedin" width={100} height={80} layout="constrained" />
			</a>
			<a
				href="mailto:c.diaz@centicsas.com?Subject=Quiero%20más%20información%20sobre..."
				target="_blank"
				class="h-8 w-8"
			>
				<Image src={gmail} alt="gmail" width={100} height={80} layout="constrained" />
			</a>
		</div>

		<div class="flex min-w-0 flex-1 flex-col items-center text-center">
			<Image
				alt="Logo Ultra Developments"
				class="mb-2 h-4"
				src={ultraLogo}
				width={120}
				height={100}
				layout="constrained"
			/>
			<p class="text-xs text-gray-400">
				Esta página web fue hecha por <span class="font-semibold">Ultra Developments SAS</span>.
				<a
					href="mailto:gerencia@ultradev.com.co"
					class="font-thin text-white underline"
					target="_blank">Contáctanos</a
				>
			</p>
		</div>
	</main>

	<hr class="my-2 border-gray-500 sm:mx-auto" />

	<div class="py-5 text-center text-gray-300">
		<p class="text-xs">
			ITIL® is a registered trademark of AXELOS Limited, used under permission of AXELOS Limited.
			The Swirl logo™ is a trademark of AXELOS Limited, used under permission of AXELOS Limited.
			All rights reserved.
		</p>
	</div>
</footer>
