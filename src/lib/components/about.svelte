<script>
	import { Image } from '@unpic/svelte';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';

	let features = [
		{
			id: 'video',
			title: 'Clases en video de alta calidad',
			description: 'Cursos en video con producción de estudio.',
			image: '/about-us/1.webp'
		},
		{
			id: 'ia',
			title: 'Asistente IA especializado',
			description: 'Cada curso tiene una IA experta lista para responder tus dudas.',
			image: '/about-us/2.webp'
		},
		{
			id: 'voz',
			title: 'Interacción por voz',
			description: 'Habla con la IA en tiempo real y recibe respuestas inmediatas.',
			image: '/about-us/3.webp'
		}
	];

	let currentFeatureIndex = 0;

	function nextFeature() {
		currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
	}
</script>

<section
	class="relative isolate overflow-hidden bg-[#121b1d] px-2 py-24 lg:px-0"
	style="background-image: url('/background-hero.webp'); background-size: cover; background-position: center;"
>
	<div class="mx-auto max-w-[99%] px-6 lg:max-w-[92%] lg:px-24 xl:max-w-[87%]">
		<div
			class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10"
		>
			<div class="lg:pr-4">
				<div class="lg:max-w-lg">
					<p class="text-base font-semibold leading-7 text-gray-200">Descubre Iacademic</p>
					<h2 class="mb-5 mt-2 text-3xl font-bold text-[#f4f6fa] sm:text-[40px]/[48px]">
						La educación inteligente que se adapta a ti.
					</h2>
					<p class="mt-6 text-lg font-normal leading-8 text-gray-300">
						En <strong>Iacademic</strong>, transformamos la forma de aprender con una plataforma
						impulsada por inteligencia artificial. Aquí, cada estudiante tiene acceso a un sistema
						innovador que le permite aprender sin límites, con herramientas diseñadas para una
						experiencia inmersiva y personalizada.
					</p>
				</div>
			</div>

			<div class="relative flex w-full flex-col items-center">
				<div class="relative w-full max-w-lg">
					<Image
						alt="Imagen ilustrativa de Iacademic"
						class="w-full rounded-t-lg object-cover transition-opacity duration-500 ease-in-out"
						src={features[currentFeatureIndex].image}
						layout="constrained"
						width={600}
						height={350}
						loading="lazy"
					/>

					<div
						class="feature-card glass-effect relative w-full !rounded-t-none rounded-b-lg p-5 !text-white shadow-lg"
					>
						<div class="flex items-center">
							<!-- Contenedor del texto con longitud fija -->
							<div class="flex-1 pr-16">
								<h3
									class="min-h-[24px] truncate text-lg font-semibold text-white"
									style="width: 90%; max-width: 250px;"
								>
									{features[currentFeatureIndex].title}
								</h3>
								<p
									class="wrap mt-1 min-h-[36px] text-clip text-sm text-gray-300"
									style="width: 90%; max-width: 250px;"
								>
									{features[currentFeatureIndex].description}
								</p>
							</div>

							<!-- Botón centrado verticalmente -->
							<button
								class="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
								on:click={nextFeature}
							>
								<ChevronRightOutline class="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
