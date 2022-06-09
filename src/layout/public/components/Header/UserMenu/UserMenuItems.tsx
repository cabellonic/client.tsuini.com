import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { UserContext } from '@contexts/user.context';
// Styles
import styles from './UserMenuItems.module.scss';

type UserMenuItemsProps = {};

const UserMenuItems: React.FC<UserMenuItemsProps> = () => {
	const { user, logout } = useContext(UserContext);

	if (!user) return <></>;

	return (
		<>
			<Link className={styles.user_menu_item} to={`/users/${user.username}`}>
				Mi perfil
			</Link>
			<span className={styles.user_menu_item} onClick={logout}>
				Cerrar sesión
			</span>
		</>
	);
};

export default UserMenuItems;
