<script>
	import { AngleRightOutline } from 'flowbite-svelte-icons';
	import { onDestroy, onMount } from 'svelte';

	let courses = [
		{
			type: 'Curso con IA experta',
			title: 'ITIL ® 4 Fundamentos',
			description:
				'Domina los conceptos básicos de ITIL ® y optimiza la gestión de servicios de TI.',
			duration: '16 horas',
			includes: 'Material en línea, simuladores y examen',
			certificate: 'Con Certificado',
			route: 'courses/itil-4-fundamentos'
		},
		{
			type: 'Curso con IA experta',
			title: 'SCRUM',
			description:
				'Elige entre varias certificaciones Scrum y valida tus conocimientos en agilidad y gestión de equipos.',
			duration: '16 horas',
			includes: 'Certificado por CertiProf, clases virtuales en vivo',
			certificate: 'Con Certificado',
			route: 'courses/scrum'
		},
		{
			type: 'Explora todos los cursos',
			title: 'Ver todos los cursos',
			description: 'Descubre toda nuestra oferta de cursos y encuentra el ideal para ti.',
			duration: 'Flexibilidad',
			includes: 'Acceso ilimitado a todos los cursos',
			certificate: 'Con Certificado',
			route: 'courses'
		}
	];

	let currentIndex = 0;
	let itemsPerSlide = 1;

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
		if (typeof window !== 'undefined') {
			const width = window.innerWidth;
			itemsPerSlide = width >= 1280 ? 2 : 1; // 1 en lg, 2 en xl
			currentIndex = 0;
		}
	}

	onMount(() => {
		handleResize();
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
		}
	});

	let videoElement;

	const handleIntersection = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				videoElement.play();
			} else {
				videoElement.pause();
			}
		});
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			const observer = new IntersectionObserver(handleIntersection, {
				threshold: 0.5
			});
			if (videoElement) observer.observe(videoElement);
		}
	});
</script>

<div class="bg-[#121b1d] py-16 text-white" id="best-courses">
	<div class="mx-auto w-full max-w-[90%]">
		<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
			<!-- Video -->
			<div class="order-1 flex flex-col justify-start lg:order-1 lg:w-1/2">
				<div class="mb-8 xl:hidden">
					<p class="text-base font-semibold leading-7 text-[#a294ff]">
						Lo que incluye la plataforma
					</p>
					<h3 class="mt-2 text-2xl font-semibold sm:text-3xl">Explora nuestros recursos</h3>
				</div>
				<video
					bind:this={videoElement}
					class="h-auto w-full max-w-full rounded-xl object-cover"
					muted
					controls
					controlsList="nofullscreen nodownload noplaybackrate nopictureinpicture"
					disablePictureInPicture
				>
					<source src="/certiprof.mp4" type="video/mp4" />
					Tu navegador no soporta la reproducción de video.
				</video>
			</div>

			<!-- Courses -->
			<div class="order-2 flex flex-col justify-start lg:w-1/2">
				<p class="text-base font-semibold leading-7 text-[#a294ff]">
					Nuestros cursos con Inteligencia Artificial
				</p>
				<h2 class="mb-8 mt-2 text-2xl font-semibold sm:text-3xl">Más solicitados</h2>
				<div class="relative overflow-hidden">
					<div
						class="flex space-x-4 transition-transform duration-500 ease-in-out"
						style={`transform: translateX(calc(-${currentIndex * (100 / itemsPerSlide)}%));`}
					>
						{#each courses as course (course.title)}
							<a
								href={course.route}
								class="relative flex-shrink-0 rounded-lg bg-[#1d262d] p-6 transition duration-300 hover:bg-[#2a333b]"
								style="width: calc(100% / {itemsPerSlide} - 1rem);"
							>
								<p class="mb-2 text-sm font-semibold text-[#a294ff]">{course.type}</p>
								<h3 class="mb-4 text-xl font-bold text-white">{course.title}</h3>
								<p class="mb-4 text-gray-300">{course.description}</p>
								<div class="flex justify-between space-x-2 text-sm">
									<span class="rounded-full border border-[#a294ff] px-2 py-1 text-gray-200">
										{course.duration}
									</span>
									<AngleRightOutline size="lg" />
								</div>
							</a>
						{/each}
					</div>
				</div>
				<div class="mt-4 flex justify-between">
					<button
						on:click={previous}
						class="rounded-lg bg-[#1d262d] px-3 py-2 text-gray-300 hover:bg-[#2a333b]"
					>
						Anterior
					</button>
					<button
						on:click={next}
						class="rounded-lg bg-[#1d262d] px-3 py-2 text-gray-300 hover:bg-[#2a333b]"
					>
						Siguiente
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
