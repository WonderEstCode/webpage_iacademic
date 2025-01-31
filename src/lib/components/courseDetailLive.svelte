<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import {
		BadgeCheckOutline,
		CashOutline,
		ClockOutline,
		DesktopPcOutline
	} from 'flowbite-svelte-icons';
	import Carousel from './carousel.svelte';
	import type { ScheduledCourse } from '$lib/types';

	export let courseTitle: string;
	export let courseDescription: string;
	export let duration: string;
	export let courses: ScheduledCourse[] | [] = [];
	export let certifiedEntity: string;

	$: whatsappLink =
		'https://wa.me/3125443868?text=Hola,%20me%20gustaría%20saber%20las%20fechas%20disponibles%20para%20el%20curso%20' +
		encodeURIComponent(courseTitle);

	$: whatsappSpecialPriceLink =
		'https://wa.me/3125443868?text=Hola,%20me%20gustaría%20saber%20si%20hay%20algún%20precio%20especial%20disponible%20para%20el%20curso%20' +
		encodeURIComponent(courseTitle);
</script>

<body
	class="max-w-5/5 w-5/5 mx-auto mb-0 mt-0 bg-cover bg-center"
	style="background-image: url('/background-hero.webp');"
>
	<main class="md:pt-[3rem]">
		<section class="max-w-4/5 mx-auto mb-0 grid w-4/5 grid-cols-1 gap-5 p-12 pt-28 md:grid-cols-5">
			<div class="md:col-span-2">
				<Heading
					tag="h1"
					class="mb-4 text-neutral-50"
					customSize="text-xl font-black sm:text-2xl md:text-3xl xl:text-4xl pt-8"
				>
					{courseTitle}
				</Heading>
				<p class="text-md mb-4 font-normal text-neutral-100 lg:text-base xl:text-xl">
					{courseDescription}
				</p>
				<a
					href={whatsappLink}
					target="_blank"
					rel="noopener noreferrer"
					class=" inline-flex items-center gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-[#f4f6fa] transition-all duration-500 hover:bg-white/5"
				>
					Contáctanos por WhatsApp
				</a>
			</div>

			<div class="md:col-span-3">
				{#if courses && courses.length > 0}
					<Carousel {courses} />
				{:else}
					<span></span>
				{/if}
			</div>
		</section>

		<section class="max-w-5/5 w-5/5 bg-[#121b1d] shadow-md">
			<div
				class="max-w-4/5 mx-auto mb-0 flex w-4/5 flex-col space-y-4 p-6 text-neutral-50 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:flex lg:flex-row lg:space-y-0"
			>
				<div class="flex w-full items-start md:w-full lg:w-1/4">
					<div class="mr-2"><BadgeCheckOutline size="xl" /></div>
					<div>
						<span class="text-base font-light">Certificado por</span>
						<Heading
							tag="h3"
							class="mb-4 text-neutral-50"
							customSize="text-lg font-black sm:text-xl xl:text-2xl"
						>
							{certifiedEntity}
						</Heading>
					</div>
				</div>

				<div class="flex w-full items-start md:w-full lg:w-1/4">
					<div class="mr-2"><ClockOutline size="xl" /></div>
					<div>
						<span class="text-base font-light">Duración</span>
						<Heading
							tag="h3"
							class="mb-4 text-neutral-50"
							customSize="text-lg font-black sm:text-xl xl:text-2xl"
						>
							{duration}
						</Heading>
					</div>
				</div>

				<div class="flex w-full items-start md:w-full lg:w-1/4">
					<div class="mr-2"><DesktopPcOutline size="xl" /></div>
					<div>
						<span class="text-base font-light">Clases en vídeo</span>
						<Heading
							tag="h3"
							class="mb-4 text-neutral-50"
							customSize="text-lg font-black sm:text-xl xl:text-2xl"
						>
							IA
						</Heading>
					</div>
				</div>

				<div class="flex w-full items-start md:w-full lg:w-1/4">
					<div class="mr-2"><CashOutline size="xl" /></div>
					<div>
						<span class="text-base font-light">¿Precio especial?</span>
						<a
							href={whatsappSpecialPriceLink}
							target="_blank"
							rel="noopener noreferrer"
							class="relative mb-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:cursor-pointer hover:after:scale-x-100"
						>
							<Heading tag="h3" customSize="text-lg font-black sm:text-xl xl:text-2xl">
								Obtener
							</Heading>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</body>
