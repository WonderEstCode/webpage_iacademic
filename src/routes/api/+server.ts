import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const { monto, moneda } = await request.json();

	const referencia = '3b4393bafed398ba4';
	const apiSecret = 'test_integrity_wXcCRXaxYLhOmPSOgBhhPrqWqzhfaS6w';
	const data = `${referencia}${monto}${moneda}${apiSecret}`;
	const encondedText = new TextEncoder().encode(data);
	const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const firma = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

	return json({ referencia, firma });
};
