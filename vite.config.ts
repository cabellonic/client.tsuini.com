import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': `${path.resolve(__dirname, 'src')}`,
			'@layout': `${path.resolve(__dirname, 'src/layout')}`,
			'@components': `${path.resolve(__dirname, 'src/common/components')}`,
			'@hooks': `${path.resolve(__dirname, 'src/common/hooks')}`,
			'@models': `${path.resolve(__dirname, 'src/app/models')}`,
			'@routes': `${path.resolve(__dirname, 'src/app/routes')}`,
			'@styles': `${path.resolve(__dirname, 'src/app/styles')}`,
			'@modules': `${path.resolve(__dirname, 'src/modules')}`,
			'@pages': `${path.resolve(__dirname, 'src/pages')}`,
		},
	},
});
