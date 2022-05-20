import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './index.module.scss';

const UserMenu: React.FC = () => {
	return (
		<nav className={styles.user_menu}>
			<Link className={styles.item} to='/notifications'>
				🔔
			</Link>
			<Link className={styles.item} to='/messages'>
				✉️
			</Link>
			<Link className={styles.item} to='/profile'>
				<img
					className={styles.avatar}
					src='https://via.placeholder.com/40'
					alt='User avatar'
				/>
				<span className={styles.user_name}>@User_name</span>
				<span className={styles.caret}>🔻</span>
			</Link>
		</nav>
	);
};

export default UserMenu;
