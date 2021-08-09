/** @type {import('@sveltejs/kit').Config} */
import { imagetools } from 'vite-imagetools';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [imagetools()]
		}
	}
};

export default config;
