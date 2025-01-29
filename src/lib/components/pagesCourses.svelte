<script>
	import { AngleRightOutline } from 'flowbite-svelte-icons';
	import { onDestroy, onMount } from 'svelte';

	let courses = [
		{
			type: 'Curso en vivo',
			title: 'ITIL ® 4 Fundamentos',
			description:
				'Domina los conceptos básicos de ITIL ® y optimiza la gestión de servicios de TI.',
			duration: '16 horas',
			includes: 'Material en línea, simuladores y examen',
			certificate: 'Con Certificado',
			route: 'courses/itil-4-fundamentos'
		},
		{
			type: 'Curso en vivo',
			title: 'Agile Coach ',
			description:
				'Desarrolla habilidades de coaching ágil para guiar a equipos y organizaciones hacia el éxito.',
			duration: '16 horas',
			includes: 'Certificado por CertiProf, clases virtuales en vivo',
			certificate: 'Con Certificado',
			route: 'courses/agile-coach'
		},
		{
			type: 'Curso en vivo',
			title: 'SCRUM',
			description:
				'Elige entre varias certificaciones Scrum y valida tus conocimientos en agilidad y gestión de equipos.',
			duration: '16 horas',
			includes: 'Certificado por CertiProf, clases virtuales en vivo',
			certificate: 'Con Certificado',
			route: 'courses/scrum'
		},
		{
			type: 'Curso en vivo',
			title: 'Certified ISO 22301',
			description:
				'Elige entre las certificaciones de Auditor Interno o Auditor Líder ISO 22301 y garantiza la continuidad del negocio.',
			duration: '16 horas',
			includes: 'Certificado por CertiProf, clases virtuales en vivo',
			certificate: 'Con Certificado',
			route: 'courses/certified-iso-22301'
		}
	];

	let currentIndex = 0;
	let itemsPerSlide = 2;

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
			itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
			currentIndex = 0;
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
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

<div class="max-w-4/5 mx-auto my-16 w-4/5 bg-transparent p-8 text-white" id="best-courses">
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
		<div class="order-2 flex items-center justify-end lg:order-1 lg:w-2/5 xl:w-1/2">
			<video
				bind:this={videoElement}
				class="h-auto w-full rounded-xl"
				muted
				controls
				controlsList="nofullscreen nodownload noplaybackrate nopictureinpicture"
				disablePictureInPicture
			>
				<source src="/certiprof.mp4" type="video/mp4" />
				Tu navegador no soporta la reproducción de video.
			</video>
		</div>
		<div class="order-1 flex flex-col justify-center lg:order-2 lg:w-3/5 xl:w-1/2">
			<p class="text-red-00 text-base font-semibold leading-7 text-red-500">
				Nuestro cursos con clases en vivo
			</p>
			<h2 class="mb-10 mt-2 text-3xl font-semibold text-white sm:text-[40px]/[48px]">
				Más solicitados
			</h2>
			<div class="relative overflow-hidden">
				<div
					class="flex space-x-4 transition-transform duration-500 ease-in-out"
					style={`transform: translateX(calc(-${currentIndex * (100 / itemsPerSlide)}% ));`}
				>
					{#each courses as course (course.title)}
						<a
							href={course.route}
							class="relative min-w-[calc(50%-1rem)] flex-shrink-0 rounded-lg border border-gray-800 bg-gray-800 p-6 shadow-lg transition duration-300 hover:border hover:border-gray-600 hover:bg-gray-950 sm:min-w-full md:min-w-[calc(50%-1rem)]"
							style="width: calc(100% / {itemsPerSlide} - 1rem);"
						>
							<p class="mb-2 text-sm font-semibold text-red-500">{course.type}</p>
							<h3 class="mb-4 text-xl font-bold text-white">{course.title}</h3>
							<p class="mb-4 text-gray-300">{course.description}</p>
							<div class="flex justify-between space-x-2 text-sm">
								<span class="rounded-full border border-red-600 px-2 py-1 text-gray-200">
									{course.duration}
								</span>
								<AngleRightOutline size="lg" />
							</div>
						</a>
					{/each}
				</div>
			</div>
			<div class="mb-2 mt-4 flex justify-between">
				<button
					on:click={previous}
					class="rounded-lg bg-gray-800 px-3 py-2 text-white hover:bg-gray-900"
				>
					Anterior
				</button>
				<button
					on:click={next}
					class="rounded-lg bg-gray-800 px-3 py-2 text-white hover:bg-gray-900"
				>
					Siguiente
				</button>
			</div>
		</div>
	</div>
</div>
