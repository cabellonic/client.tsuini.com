import React from 'react';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';
// Styles
import styles from './index.module.scss';

type Props = {};

const GuestMenu: React.FC<Props> = () => {
	const handleLogin = async () => {
		const response = await axios.get(`${import.meta.env.VITE_API_URI}/auth/login`, {
			withCredentials: true,
		});
		const { data } = response;
		window.open(data.authUrl, '_self');
	};

	return (
		<nav className={styles.login_menu}>
			<span className={styles.login_button} onClick={handleLogin} aria-label='Iniciar Sesión con Spotify'>
				<GoogleIcon />
				Iniciar Sesión
			</span>
		</nav>
	);
};

export default GuestMenu;
