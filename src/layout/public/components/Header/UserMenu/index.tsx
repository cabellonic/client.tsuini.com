import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	IoMdNotifications,
	IoMdMail,
	IoMdArrowDropdown,
	IoMdArrowDropup,
} from 'react-icons/io';
// Context
import { UserContext } from '@contexts/user.context';
// Components
import AuthMenu from './AuthMenu';
import UserMenuItems from './UserMenuItems';
// Styles
import styles from './index.module.scss';

const UserMenu: React.FC = () => {
	const { user } = useContext(UserContext);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

	if (!user) return <AuthMenu />;

	const handleToggleUserMenu = () => {
		setIsUserMenuOpen(prevState => !prevState);
	};

	return (
		<nav className={styles.user_menu}>
			<Link className={styles.item} to='/notifications'>
				<IoMdNotifications className={styles.icon} />
				<span className={styles.count}>99</span>
			</Link>
			<Link className={styles.item} to='/messages'>
				<IoMdMail className={styles.icon} />
				{/* <span className={styles.count}>99</span> */}
			</Link>
			<span
				className={`${styles.item} ${isUserMenuOpen ? styles.active : ''}`}
				onClick={handleToggleUserMenu}
			>
				<img
					className={styles.avatar}
					src={user.avatar}
					alt={`${user.displayName}`}
				/>
				<span className={styles.user_name}>{user.displayName}</span>
				<span className={styles.arrow_down}>
					{isUserMenuOpen ? (
						<IoMdArrowDropup className={styles.icon} />
					) : (
						<IoMdArrowDropdown className={styles.icon} />
					)}
				</span>
				{isUserMenuOpen && (
					<aside className={styles.user_menu_list}>
						<UserMenuItems />
					</aside>
				)}
			</span>
		</nav>
	);
};

export default UserMenu;
