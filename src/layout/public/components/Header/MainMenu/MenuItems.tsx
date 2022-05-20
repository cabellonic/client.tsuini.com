import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Data
import { menu } from '@/app/data/menu';
// Styles
import styles from './MenuItems.module.scss';

const MenuItems: React.FC = () => {
	const location = useLocation();
	return (
		<>
			{menu.map(({ label, path }) => {
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
