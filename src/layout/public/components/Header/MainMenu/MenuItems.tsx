import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Components
import MenuItemsPlaceholder from './MenuItemsPlaceholder';
// Hooks
import { useMenu } from '@hooks/useMenu';
// Styles
import styles from './MenuItems.module.scss';

const MenuItems: React.FC = () => {
	const location = useLocation();
	const { menuItems, error, isLoading } = useMenu();

	if (error) return <>Error al cargar el menu...</>;

	if (isLoading) return <MenuItemsPlaceholder />;

	return (
		<>
			{menuItems.map(({ label, path }) => {
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
