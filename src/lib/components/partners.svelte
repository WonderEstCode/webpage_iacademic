<script>
	import partner1 from '$lib/assets/partners/1.svg';
	import partner2 from '$lib/assets/partners/2.svg';
	import partner3 from '$lib/assets/partners/3.svg';
	import partner4 from '$lib/assets/partners/4.svg';
	import partner5 from '$lib/assets/partners/5.webp';
	import partner6 from '$lib/assets/partners/6.webp';
</script>

<body>
	<main>
		<div
			class="slider"
			style="
            --width: 150px;
            --height: 150px;
            --quantity: 6;
        "
		>
			<div class="list">
				<div class="item" style="--position: 1">
					<img src={partner1} alt="Isaca" width="100" height="120" />
				</div>
				<div class="item" style="--position: 2">
					<img src={partner2} alt="PeopleCert" width="100" height="120" />
				</div>
				<div class="item" style="--position: 3">
					<img src={partner3} alt="ScrumStudy" width="100" height="120" />
				</div>
				<div class="item" style="--position: 4">
					<img src={partner4} alt="CertiProf" width="100" height="120" />
				</div>
				<div class="item" style="--position: 5">
					<img src={partner5} alt="Dasa" width="100" height="120" />
				</div>
				<div class="item" style="--position: 6">
					<img src={partner6} alt="FundaCompucesco" width="100" height="120" />
				</div>
			</div>
		</div>
	</main>
</body>

<style>
	body {
		margin: 0;
	}
	main {
		width: min(1200px, 90vw);
		margin: auto;
	}
	.slider {
		width: 100%;
		height: var(--height);
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
	}
	.slider .list {
		display: flex;
		width: 100%;
		min-width: calc(var(--width) * var(--quantity));
		position: relative;
	}
	.slider .list .item {
		width: var(--width);
		height: var(--height);
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 100%;
		animation: autoRun 12s linear infinite;
		animation-delay: calc((12s / var(--quantity)) * (var(--position) - 1)) !important;
	}
	.slider .list .item img {
		width: 90%;
		height: 90%;
		object-fit: contain;
		filter: brightness(0) invert(1);
		transition: filter 0.5s;
	}
	@keyframes autoRun {
		from {
			left: 100%;
		}
		to {
			left: calc(var(--width) * -1);
		}
	}
</style>
