import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './MainMenu.module.scss';
// Data
import { menu } from '@/app/data/menu';

const MainMenu: React.FC = () => {
	return (
		<nav className={styles.main_menu}>
			<Link className={styles.menu_item} to='/'>
				<img className={styles.logo} src='/logo.png' alt='Logo' />
				<span className={styles.site_name}>Tsuini.com</span>
			</Link>

			{menu.map(({ label, path }) => (
				<Link key={path} className={styles.menu_item} to={path}>
					{label}
				</Link>
			))}
		</nav>
	);
};

export default MainMenu;
