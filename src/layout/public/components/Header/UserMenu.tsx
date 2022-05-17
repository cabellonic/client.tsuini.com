import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './UserMenu.module.scss';

const UserMenu: React.FC = () => {
	return (
		<nav className={styles.user_menu}>
			<Link className={styles.item} to='/notifications'>
				Notifications
			</Link>
			<Link className={styles.item} to='/messages'>
				Messages
			</Link>
			<Link className={styles.item} to='/profile'>
				<img
					className={styles.avatar}
					src='https://via.placeholder.com/40'
					alt='User avatar'
				/>
				User name 🔻
			</Link>
		</nav>
	);
};

export default UserMenu;
