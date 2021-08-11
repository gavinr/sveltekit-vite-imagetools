/** @type {import('@sveltejs/kit').Config} */
import { imagetools } from 'vite-imagetools';
import path from 'path';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$static: path.resolve('./static')
				}
			},
			plugins: [imagetools()]
		}
	}
};

export default config;
