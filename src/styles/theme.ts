import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/system';

import styles from './export.module.scss';

export const themeOptions: ThemeOptions = {
	palette: {
		type: 'light',
		primary: {
			main: '#364ab9',
			light: '#6c79c5',
			dark: '#263583',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#f50057',
		},
		text: {
			primary: 'rgba(0,0,0,0.87)',
			secondary: 'rgba(0,0,0,0.54)',
			disabled: 'rgba(0,0,0,0.38)',
			hint: 'rgba(0,0,0,0.38)',
		},
		error: {
			main: '#ef4133',
		},
		warning: {
			main: '#ff9700',
		},
		info: {
			main: '#2098f7',
		},
		success: {
			main: '#4bb14f',
		},
		divider: 'rgba(0,0,0,0.12)',
	},
};

export const theme = createTheme({
	palette: {
		primary: {
			main: styles['primary-main'],
			light: styles['primary-light'],
			dark: styles['primary-dark'],
			contrastText: styles['primary-contrast-text'],
		},
		secondary: {
			main: styles['secondary-main'],
			light: styles['secondary-light'],
			dark: styles['secondary-dark'],
			contrastText: styles['secondary-contrast-text'],
		},
		success: {
			main: styles['success-main'],
			light: styles['success-light'],
			dark: styles['success-dark'],
			contrastText: styles['success-contrast-text'],
		},
		warning: {
			main: styles['warning-main'],
			light: styles['warning-light'],
			dark: styles['warning-dark'],
			contrastText: styles['warning-contrast-text'],
		},
		error: {
			main: styles['error-main'],
			light: styles['error-light'],
			dark: styles['error-dark'],
			contrastText: styles['error-contrast-text'],
		},
		info: {
			main: styles['info-main'],
			light: styles['info-light'],
			dark: styles['info-dark'],
			contrastText: styles['info-contrast-text'],
		},
	},
});
