<script>
	import { Heading, Button, Span, Li, List, P } from 'flowbite-svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { Image } from '@unpic/svelte';
	import AbstractShapes from './abstractShapes.svelte';

	function scrollToBestCourses() {
		const bestCoursesSection = document.getElementById('best-courses');
		if (bestCoursesSection) {
			const offset = 100;
			const sectionPosition =
				bestCoursesSection.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
		}
	}
</script>

<div
	class="hero-section flex flex-col items-center justify-start text-center md:items-start md:justify-center md:text-start"
>
	<Image
		src="/background-hero.webp"
		layout="fullWidth"
		alt="Hero background image"
		class="absolute inset-0 h-full w-full object-cover"
		breakpoints={[480, 768, 1024, 1280, 1920]}
		aspectRatio={16 / 9}
		loading="eager"
	/>

	<!-- Figuras animadas (detrás del contenido, pero encima del fondo) -->
	<AbstractShapes />

	<!-- Contenido principal -->
	<div class="relative z-10 mt-32 flex flex-col items-center md:ml-32 md:mt-0 lg:ml-48 2xl:ml-72">
		<Heading
			tag="h1"
			class="mb-4 !text-[#1cf2d8]"
			customSize="text-4xl font-black sm:text-3xl md:text-4xl xl:text-5xl"
		>
			<Span
				gradient
				gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200"
			>
				EDUCACIÓN<br /> DEL FUTURO CON <br />
			</Span>
			IACADEMIC
		</Heading>
		<List tag="ul" class="mb-8 space-y-4 text-gray-200" list="none">
			<Li icon class="gap-3">
				<CheckOutline class="h-5 w-5 text-gray-200 " />
				<P class="text-gray-200 md:text-lg xl:text-xl">
					Clases en vídeo con <strong>nivel de producción premium</strong>
				</P>
			</Li>
			<Li icon class="gap-3">
				<CheckOutline class="h-5 w-5 text-gray-200 " />
				<P class="text-gray-200 md:text-lg xl:text-xl">
					Chat con <strong>IA experta</strong> en cada curso.
				</P>
			</Li>
			<Li icon class="gap-3">
				<CheckOutline class="h-5 w-5 text-gray-200 " />
				<P class="text-gray-200 md:text-lg xl:text-xl">
					Pregunta por <strong>voz</strong>, la IA responde.
				</P>
			</Li>
		</List>

		<Button
			class="w-auto self-center !bg-[#10796ce0] text-white hover:!bg-[#1cf2d8]/80 md:self-start"
		>
			<a href="#best-courses" on:click|preventDefault={scrollToBestCourses}>
				¡Explora Iacademic!
			</a>
		</Button>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.hero-section {
		position: relative;
		height: 100vh;
	}
</style>
