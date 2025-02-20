<script>
	import { onMount } from 'svelte';
	import Zdog from 'zdog';
	import anime from 'animejs';

	let numPerceptrons = 100;
	let numConnections = 15;
	let perceptrons = [],
		connections = [];

	let illo;

	function vectorCompare(v1, v2) {
		return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
	}

	function animate() {
		// Rotación diagonal: combina los ejes X, Y y Z con valores lentos
		illo.rotate.x += 0.002;
		illo.rotate.y += 0.002;
		illo.rotate.z += 0.0015;
		illo.updateRenderGraph();
		requestAnimationFrame(animate);
	}

	onMount(() => {
		illo = new Zdog.Illustration({
			element: '.zdog',
			resize: true
		});

		for (let i = 0; i < numPerceptrons; i++) {
			let perceptron = new Zdog.Shape({
				addTo: illo,
				stroke: 3, // Borde más fino
				color: 'white', // Color del borde blanco
				fill: false, // Transparente en el interior
				translate: { x: 1, y: 2, z: 1 }
			});

			anime({
				targets: perceptron.translate,
				x: anime.random(-250, 250),
				y: anime.random(-250, 250),
				z: anime.random(-300, 300),
				duration: 1000
			});

			perceptrons.push(perceptron);
		}

		for (let i = 0; i < numConnections; i++) {
			let connection = new Zdog.Shape({
				addTo: illo,
				path: [{ line: { x: 0, y: 0, z: 0 } }, { line: { x: 0, y: 0, z: 0 } }],
				stroke: 2, // Menor grosor de las líneas
				color: '#1f3c88' // Azul oscuro moderno
			});

			let travel = () => {
				let p;
				do {
					p = perceptrons[(perceptrons.length * Math.random()) >> 0].translate;
				} while (vectorCompare(p, connection.path[1].line));

				let { x, y, z } = p;

				anime
					.timeline({
						easing: 'easeInOutExpo',
						duration: 500,
						update() {
							connection.updatePath();
						}
					})
					.add({
						targets: connection.path[1].line,
						x,
						y,
						z
					})
					.add({
						targets: connection.path[0].line,
						x,
						y,
						z
					})
					.finished.then(travel);
			};

			travel();
		}

		// Animación de giro diagonal del SVG
		anime({
			targets: '.svg-logo',
			rotateX: 360, // Rotación en X
			rotateY: 360, // Rotación en Y
			rotateZ: 360, // Rotación en Z (diagonal)
			duration: 10000, // Giro más lento
			easing: 'linear',
			loop: true
		});

		animate();
	});
</script>

<div class="container">
	<img class="svg-logo" src="/logos/mobile-white.svg" alt="Logo móvil" />
	<canvas class="zdog"></canvas>
</div>

<style>
	.container {
		position: absolute;
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.svg-logo {
		position: absolute;
		width: 14%;
		height: auto;
		top: 40%;
		transform-origin: center; /* Centra la rotación */
		clip-path: circle(50%); /* Forma de esfera */
	}

	.zdog {
		display: block;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 768px) {
		.container {
			width: 100%;
			height: 45%;
			top: 6%;
			opacity: 0.5;
		}
		.svg-logo {
			width: 20%;
			top: 45%;
		}
	}

	@media (min-width: 769px) {
		.container {
			width: 50%;
			height: 50%;
			top: 25%;
			right: 0;
		}
	}
	@media (min-width: 1400px) {
		.container {
			width: 70%;
			height: 90%;
			top: 5%;
			right: 0;
		}
		.svg-logo {
			width: 10%;
			top: 42%;
		}
	}
</style>
