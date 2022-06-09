import React, { useContext } from 'react';
import { FaSpotify } from 'react-icons/fa';
// Context
import { UserContext } from '@contexts/user.context';
// Styles
import styles from './AuthMenu.module.scss';

const AuthMenu: React.FC = () => {
	const { login } = useContext(UserContext);

	return (
		<nav className={styles.auth_menu}>
			<span onClick={login} className={styles.login_button}>
				<FaSpotify className={styles.icon} /> Iniciar sesión
			</span>
		</nav>
	);
};

export default AuthMenu;
