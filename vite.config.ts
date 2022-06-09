import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': `${path.resolve(__dirname, 'src/common/components')}`,
			'@contexts': `${path.resolve(__dirname, 'src/common/contexts')}`,
			'@hooks': `${path.resolve(__dirname, 'src/common/hooks')}`,
			'@layout': `${path.resolve(__dirname, 'src/layout')}`,
			'@models': `${path.resolve(__dirname, 'src/app/models')}`,
			'@modules': `${path.resolve(__dirname, 'src/modules')}`,
			'@pages': `${path.resolve(__dirname, 'src/pages')}`,
			'@routes': `${path.resolve(__dirname, 'src/app/routes')}`,
			'@scss': `${path.resolve(__dirname, 'src/app/styles/variables')}`,
			'@services': `${path.resolve(__dirname, 'src/common/services')}`,
			'@styles': `${path.resolve(__dirname, 'src/app/styles')}`,
		},
	},
});
