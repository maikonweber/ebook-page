import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		minify: 'terser',
		sourcemap: true
	},
	server: {
		port: 3000,
		host: true
	},
	optimizeDeps: {
		include: ['@sveltejs/kit']
	}
});
