import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
	root: './src',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		assetsDir: './',
		sourcemap: command === 'serve',
	},
	plugins: [react()],
}));
