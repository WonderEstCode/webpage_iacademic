<script>
	import { Image } from '@unpic/svelte';
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<section class="relative isolate overflow-hidden bg-[#121b1d] px-6 lg:overflow-visible lg:px-0">
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<svg
			class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="e813992c-7d03-4cc4-a2bd-151760b470a0"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M100 200V.5M.5 .5H200" fill="none" />
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
			/>
		</svg>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-24 xl:max-w-[80%]">
		<div
			class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
		>
			<div
				class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
			>
				<div class="lg:pr-4">
					<div class="lg:max-w-lg">
						<p class="text-red-00 text-base font-semibold leading-7 text-red-500">
							Más sobre nosotros
						</p>
						<h2 class="mb-5 mt-2 text-3xl font-bold text-white sm:text-[40px]/[48px]">
							Impulsamos el talento en Tecnologías de la Información.
						</h2>
						<p class="mt-6 text-lg font-normal leading-8 text-gray-300">
							En <strong>CENTIC SAS</strong>, nos especializamos en la transferencia de conocimiento
							para garantizar que cada profesional obtenga las habilidades necesarias para destacar
							en su campo. Con más de 8 años de experiencia y alianzas con entidades globales, hemos
							certificado a más de 6,500 personas, apoyados por un amplio catálogo de programas y
							contenidos formativos.
						</p>
					</div>
					<div class="mt-8 lg:pr-4">
						<Timeline order="vertical">
							<TimelineItem
								title="Fundación y Alianzas Estratégicas"
								date="Desde 2015"
								classTime="!text-[#dfdfdf]"
							>
								<svelte:fragment slot="icon">
									<span
										class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
									>
										<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
									</span>
								</svelte:fragment>
								<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
									Establecimiento de CENTIC SAS y comienzo de alianzas con PeopleCert, Certiprof,
									Scrum Study e ISACA para ofrecer certificaciones reconocidas.
								</p>
							</TimelineItem>
							<TimelineItem
								title="Crecimiento y Expansión"
								date="2018 - 2020"
								classTime="!text-[#dfdfdf]"
							>
								<svelte:fragment slot="icon">
									<span
										class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
									>
										<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
									</span>
								</svelte:fragment>
								<p class="text-base font-normal text-gray-500 dark:text-gray-400">
									Lanzamiento de nuevos programas de certificación y sin certificación, alcanzando
									las primeras 5,000 personas certificadas.
								</p>
							</TimelineItem>
							<TimelineItem
								title="Consolidación y Futuro"
								date="2021 en adelante"
								classTime="!text-[#dfdfdf]"
							>
								<svelte:fragment slot="icon">
									<span
										class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
									>
										<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
									</span>
								</svelte:fragment>
								<p class="text-base font-normal text-gray-500 dark:text-gray-400">
									Expansión de alianzas globales y superación de 6,500 certificaciones, reafirmando
									nuestro compromiso con la calidad educativa en T.I.
								</p>
							</TimelineItem>
						</Timeline>
					</div>
				</div>
			</div>
			<div
				class="hidden lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block lg:overflow-hidden"
			>
				<div class="-mx-3 flex items-center justify-between sm:-mx-4">
					<div class="flex w-full flex-col space-y-4 px-3 sm:px-4 xl:w-1/2">
						<picture>
							<source media="(min-width: 1024px)" srcset="/about-us/1.webp" />
							<Image
								alt="Hombre en videollamada en una oficina moderna con varias personas en la pantalla, trabajando en un ambiente profesional."
								class="w-full rounded-2xl"
								src="/about-us/1.webp"
								layout="constrained"
								width={1500}
								height={1000}
								loading="lazy"
							/>
						</picture>

						<picture>
							<source media="(min-width: 1024px)" srcset="/about-us/2.webp" />
							<Image
								alt="Mujer joven con auriculares, hablando y tomando notas mientras realiza una videollamada desde su oficina."
								class="w-full rounded-2xl"
								src="/about-us/2.webp"
								layout="constrained"
								width={1000}
								height={1500}
								loading="lazy"
							/>
						</picture>
					</div>

					<div class="relative flex w-full items-center justify-center px-3 sm:px-4 xl:w-1/2">
						<picture>
							<source media="(min-width: 1024px)" srcset="/about-us/3.webp" />
							<Image
								alt="Grupo de personas revisando gráficos financieros y usando una calculadora durante una reunión en una oficina."
								class="w-full rounded-2xl"
								src="/about-us/3.webp"
								layout="constrained"
								width={1000}
								height={1500}
								loading="lazy"
							/>
						</picture>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
