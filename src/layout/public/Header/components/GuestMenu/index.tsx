import { FAKE_USER } from '@/data/user';
import { login } from '@/redux/states/user';
import GoogleIcon from '@mui/icons-material/Google';
import { RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Styles
import styles from './index.module.scss';

type Props = {};

const GuestMenu: React.FC<Props> = () => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(login(FAKE_USER));
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
