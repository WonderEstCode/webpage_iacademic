<script>
	import { Image } from '@unpic/svelte';
	import { AngleLeftOutline, AngleRightOutline } from 'flowbite-svelte-icons';
	import { onDestroy } from 'svelte';

	let courses = [
		{
			type: 'Curso en vivo',
			title: 'ITIL ® 4 Fundamentos',
			description:
				'Domina los conceptos básicos de ITIL ® y optimiza la gestión de servicios de TI.',
			level: 'Intermedio',
			duration: '32 horas',
			includes: 'Material en línea, simuladores y examen',
			certificate: 'Con Certificado'
		},
		{
			type: 'Curso en vivo',
			title: 'Agile Coach',
			description:
				'Comprende cómo ser un catalizador de cambio a través de la agilidad y el coaching',
			level: 'Intermedio',
			duration: '32 horas',
			includes: 'Material en línea, simuladores y examen',
			certificate: 'Con Certificado'
		}
	];

	let currentIndex = 0;
	let itemsPerSlide = window.innerWidth < 768 ? 1 : 2;

	function next() {
		const maxIndex = courses.length - itemsPerSlide;
		if (currentIndex < maxIndex) {
			currentIndex++;
		}
	}

	function previous() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	function handleResize() {
		itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
		currentIndex = 0;
	}

	window.addEventListener('resize', handleResize);

	onDestroy(() => {
		window.removeEventListener('resize', handleResize);
	});
</script>

<div class="max-w-4/5 mx-auto mb-48 mt-16 w-4/5 bg-transparent p-8 text-white">
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
		<div class="order-2 lg:order-1 lg:w-1/3">
			<Image class="rounded-2xl" src="/8329.jpg" layout="constrained" width={450} height={350} />
		</div>
		<div class="order-1 flex flex-col justify-center lg:order-2 lg:w-2/3">
			<p class="text-red-00 text-base font-semibold leading-7 text-red-500">
				Cursos potenciados con IA
			</p>
			<h2 class="mb-10 mt-2 text-3xl font-semibold text-white sm:text-[40px]/[48px]">
				Próximamente
			</h2>
			<div class="relative overflow-hidden">
				<div
					class="flex space-x-4 transition-transform duration-500 ease-in-out"
					style={`transform: translateX(calc(-${currentIndex * (100 / itemsPerSlide)}% ));`}
				>
					{#each courses as course (course.title)}
						<div
							class="relative min-w-[calc(50%-1rem)] flex-shrink-0 rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 sm:min-w-full md:min-w-[calc(50%-1rem)]"
							style="width: calc(100% / {itemsPerSlide} - 1rem);"
						>
							<p class="mb-2 text-sm font-semibold text-red-500">{course.type}</p>
							<h4 class="mb-4 text-xl font-bold text-white">{course.title}</h4>
							<p class="mb-4 text-gray-300">{course.description}</p>
							<div class="flex items-center justify-between text-sm text-gray-400">
								<span>{course.level}</span>
								<span>{course.duration}</span>
							</div>
							{#if course.includes}
								<p class="mt-2 text-sm text-gray-400">{course.includes}</p>
							{/if}
							{#if course.certificate}
								<p class="text-sm text-gray-400">{course.certificate}</p>
							{/if}
						</div>
					{/each}
				</div>
				<div class="absolute inset-y-0 left-0 flex items-center">
					<button on:click={previous} class="rounded-full bg-transparent text-white">
						<AngleLeftOutline size="lg" />
					</button>
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center">
					<button on:click={next} class="rounded-full bg-transparent text-white">
						<AngleRightOutline size="lg" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
