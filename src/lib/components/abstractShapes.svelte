<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let isMobile = false;

	onMount(() => {
		isMobile = window.innerWidth < 768; // Detectar si es mobile

		// Animación para las figuras moradas
		gsap.to('.shape-purple', {
			duration: 15,
			x: isMobile ? 'random(-10, 10)' : 'random(-31, 58)', // Movimiento lateral controlado
			y: isMobile ? 'random(-10, 10)' : 'random(-10, 40)',
			rotate: 'random(0, 360)',
			scale: 'random(1.1, 0.8 )',
			opacity: 'random(0.7, 1)',
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut'
		});

		// Animación para las figuras grises
		gsap.to('.shape-gray', {
			duration: 10,
			x: isMobile ? 'random(-20, 20)' : 'random(-10, 10)',
			y: isMobile ? 'random(-30, 30)' : 'random(-40, 70)',
			rotate: 'random(0, 360)',
			scale: 'random(0.85, 1.15)',
			opacity: 'random(0.7, 1)',
			yoyo: true,
			repeat: -1,
			ease: 'power1.inOut'
		});

		// Animación para los rectángulos flotantes
		gsap.to('.shape-rectangle', {
			duration: 8,
			x: isMobile ? 'random(-5, 5)' : 'random(-20, 20)', // Movimiento de lado a lado
			y: isMobile ? 'random(-5, 5)' : 'random(-20, 20)',
			scale: 'random(0.9, 1.2)',
			rotate: 'random(0, 15)', // Ligero giro para dar dinamismo
			opacity: 'random(0.5, 0.8)',
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut'
		});
	});
</script>

<div class="shapes-container">
	{#each Array(9).fill(0) as _, i}
		<!-- Primera figura (Morado) -->
		<svg
			class="shape shape-purple"
			viewBox="0 0 540 960"
			width="150"
			height="200"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="translate(100 100)">
				<path
					d="M58.9 -93.8C78.1 -90.9 96.6 -78.7 106.4 -61.5C116.1 -44.3 117.1 -22.2 114.8 -1.3C112.4 19.5 106.9 39 94.9 52.3C82.9 65.6 64.4 72.6 47.6 80.9C30.7 89.1 15.3 98.6 -1.6 101.3C-18.5 104 -37 100.1 -50.9 90.1C-64.7 80.1 -73.9 64 -82.8 48C-91.8 32 -100.4 16 -106 -3.2C-111.6 -22.5 -114.3 -45 -103.1 -57.2C-92 -69.4 -67.1 -71.2 -47.6 -74C-28.1 -76.7 -14.1 -80.4 2.9 -85.4C19.8 -90.4 39.7 -96.7 58.9 -93.8"
					fill="rgba(113, 93, 242, 0.5)"
				></path>
			</g>
		</svg>

		<!-- Segunda figura (Gris Claro) -->
		<svg
			class="shape shape-gray"
			viewBox="0 0 540 960"
			width="130"
			height="180"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="translate(100 100)">
				<path
					d="M68.3 -79.6C73 -63.6 50.5 -31.8 39.6 -10.8C28.8 10.1 29.6 20.3 24.9 27.6C20.3 34.9 10.1 39.5 -10.1 49.6C-30.4 59.7 -60.8 75.5 -63.6 68.1C-66.4 60.8 -41.7 30.4 -41.5 0.1C-41.4 -30.2 -66 -60.3 -63.2 -76.3C-60.3 -92.3 -30.2 -94.2 0.8 -95C31.8 -95.8 63.6 -95.6 68.3 -79.6"
					fill="rgba(204, 204, 204, 0.5)"
				></path>
			</g>
		</svg>

		<!-- Rectángulo flotante -->
	{/each}
</div>

<style>
	/* Evitar desbordamiento */
	html,
	body {
		overflow-x: hidden;
	}

	.shapes-container {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.shape {
		transition: all 0.5s ease-out;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	/* Rectángulo flotante */
	.shape-rectangle {
		position: absolute;
		width: 40px;
		height: 70px;
		background-color: rgba(28, 242, 216, 0.8);
		border-radius: 8px;
	}

	/* Desktop: Figuras más centradas */
	@media (min-width: 768px) {
		.shape {
			right: 20%;
			left: auto;
			width: 180px;
			height: 230px;
		}
	}

	/* Mobile: Figuras centradas con movimientos suaves */
	@media (max-width: 767px) {
		.shape {
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: 120px;
			height: 160px;
		}
	}
</style>
