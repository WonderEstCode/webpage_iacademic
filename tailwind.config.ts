const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts,md}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('flowbite/plugin')],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito']
			}
		}
	}
};

module.exports = config;
