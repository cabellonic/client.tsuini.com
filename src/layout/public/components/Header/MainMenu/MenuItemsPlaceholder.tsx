import React from 'react';
// Components
import Placeholder from '@components/Placeholder';
// Styles
import styles from './MenuItemsPlaceholder.module.scss';

const MenuItemsPlaceholder: React.FC = () => {
	return (
		<div className={styles.menu_item_placeholder}>
			<Placeholder />
		</div>
	);
};

export default MenuItemsPlaceholder;
