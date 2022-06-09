import React from 'react';
// Components
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';
// Styles
import styles from './index.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_wrapper}>
				<MainMenu />
				<UserMenu />
			</div>
		</header>
	);
};

export default Header;
