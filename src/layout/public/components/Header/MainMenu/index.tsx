import React from 'react';
import { createPortal } from 'react-dom';
// Components
import MenuItems from './MenuItems';
// Hooks
import { useWindowResize } from '@hooks/useWindowResize';
// Styles
import styles from './index.module.scss';
import Brand from '../Brand';
import ToggleButton from './ToggleButton';

const MainMenu: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const { isMobile } = useWindowResize();

	const handleMenuToggle = () => {
		setIsMenuOpen(prevState => {
			if (isMobile) return !prevState;
			return true;
		});
	};

	if (!isMobile) {
		return (
			<nav className={styles.main_menu}>
				<div className={styles.menu_wrapper}>
					<Brand />
					<MenuItems />
				</div>
			</nav>
		);
	}

	return (
		<nav className={styles.main_menu}>
			<ToggleButton isMenuOpen={isMenuOpen} onClick={handleMenuToggle} />
			<Brand />
			{isMenuOpen &&
				createPortal(
					<aside className={styles.menu_mobile}>
						<MenuItems />
					</aside>,
					document.getElementById('menu')!
				)}
		</nav>
	);
};

export default MainMenu;
