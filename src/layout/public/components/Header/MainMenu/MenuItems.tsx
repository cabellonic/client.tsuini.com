import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Styles
import styles from './MenuItems.module.scss';

const MenuItems: React.FC = () => {
	const location = useLocation();
	const menu: any = []; // Temporal fix

	return (
		<>
			{menu.map(({ label, path }: { label: string; path: string }) => {
				const isActive = location.pathname.includes(path);
				return (
					<Link
						key={path}
						className={`${styles.menu_item} ${isActive ? styles.active : ``}`}
						to={path}
					>
						{label}
					</Link>
				);
			})}
		</>
	);
};

export default MenuItems;
