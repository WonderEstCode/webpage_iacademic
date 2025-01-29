<script>
	let publicKey = 'pub_test_xW7INY9Pos3fDjwtdv0sZawNtLyTnQ92';
	let redirectUrl = 'https://youtube.com';
	let monto = 100000; // en pesos colombianos
	let moneda = 'COP';
	let referencia, firma;
	const amountincents = monto * 100;

	async function obtenerReferenciaYFirma() {
		const res = await fetch('/api/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ monto: amountincents, moneda })
		});
		const data = await res.json();
		referencia = data.referencia;
		firma = data.firma;
	}

	async function redirigirAWompi() {
		await obtenerReferenciaYFirma();
		const checkoutUrl = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${moneda}&amount-in-cents=${amountincents}&reference=${referencia}&signature:integrity=${firma}&redirect-url=${redirectUrl}`;
		window.location.href = checkoutUrl;
	}
</script>

<form on:submit={redirigirAWompi}>
	<button type="submit">Pagar con Wompi</button>
</form>

// Así está quedando la url
//https://checkout.wompi.co/p/?public-key=pub_test_xW7INY9Pos3fDjwtdv0sZawNtLyTnQ92&currency=COP&amount-in-cents=10000000&reference=3b4393bafed398ba2&signature%3Aintegrity=656284effe3279d37dc9836bee454b734f9161ca40905d7961a3fbe59ea78cc9
//https://checkout.wompi.co/p/?public-key=pub_test_xW7INY9Pos3fDjwtdv0sZawNtLyTnQ92&currency=COP&amount-in-cents=10000000&reference=3b4393bafed398ba2&signature:integrity=4b65daf6c4ebd99e65b518c5e21c9a8f0c7a0d07604c0b04dfb65f1ef96d8d5f&redirect-url=https://youtube.com
