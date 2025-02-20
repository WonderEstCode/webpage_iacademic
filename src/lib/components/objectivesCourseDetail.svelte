<script lang="ts">
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { List, Li } from 'flowbite-svelte';
	import { Image } from '@unpic/svelte';

	export let title = 'Título del Curso';
	export let subtitle = 'Subtítulo del Curso';
	export let prerequisites: string;
	export let objectives = [];
	export let examInfo = [];
	export let imgSrc = '';
	export let description = '';
</script>

<body
	class="relative isolate overflow-hidden bg-[#121b1d] px-10 pb-24 pt-8 sm:pb-24 sm:pt-14 lg:overflow-visible lg:px-0"
>
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
	<div class="container mx-auto w-full lg:w-[90%]">
		<div
			class="grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
		>
			<!-- Sección de texto -->
			<div
				class="flex flex-col items-center sm:items-start lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
			>
				<div class="relative lg:pr-4">
					<div class="glow-background" style="top: 95%; left: 1%;"></div>
					<div class="relative z-10 lg:max-w-lg">
						<p class="text-base font-semibold leading-7 text-[#5b49d1] sm:text-left">
							{subtitle}
						</p>
						<h1
							class="mt-2 text-3xl font-bold tracking-tight text-[#f4f6fa] sm:text-left sm:text-4xl"
						>
							{title}
						</h1>
						<div class="glow-background" style="top: 90%; left: 1%;"></div>
						<p class="mt-6 text-lg font-normal leading-8 text-gray-300 sm:text-left">
							{prerequisites}
						</p>
					</div>
				</div>
			</div>

			<!-- Sección de imagen -->
			<div
				class="-my-20 flex justify-center p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-16 lg:overflow-hidden"
			>
				<Image
					class="w-[32rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-700/10 sm:w-[47rem]"
					src={imgSrc}
					layout="constrained"
					width={1500}
					height={1000}
				/>
			</div>

			<!-- Sección de contenido adicional -->
			<div
				class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
			>
				<div class="mx-auto sm:mx-0 lg:pr-4">
					<div class="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
						<p>{description}</p>
						<h2 class="mt-6 text-lg font-bold tracking-tight text-[#f4f6fa] sm:text-xl">
							Objetivos
						</h2>
						<ul role="list" class="mt-8 space-y-8 text-gray-400">
							{#each objectives as objective}
								<li class="flex gap-x-3">
									<CheckOutline class="text-[#5b49d1] " />
									<span>
										<strong class="font-semibold text-[#f4f6fa]">{objective}</strong>
									</span>
								</li>
							{/each}
						</ul>
						<h2 class="my-6 text-lg font-bold tracking-tight text-[#f4f6fa] sm:text-xl">
							Formato y duración del examen
						</h2>
						<List tag="ul" class="space-y-1 text-gray-200 dark:text-gray-400" list="none">
							{#each examInfo as info}
								<Li>{info}</Li>
							{/each}
						</List>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
