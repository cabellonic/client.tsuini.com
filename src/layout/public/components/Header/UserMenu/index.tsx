import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdNotifications, IoMdMail, IoMdArrowDropdown } from 'react-icons/io';
// Styles
import styles from './index.module.scss';

const UserMenu: React.FC = () => {
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
			<Link className={styles.item} to='/profile'>
				<img
					className={styles.avatar}
					src='https://via.placeholder.com/40'
					alt='User avatar'
				/>
				<span className={styles.user_name}>@User_name</span>
				<span className={styles.arrow_down}>
					<IoMdArrowDropdown className={styles.icon} />
				</span>
			</Link>
		</nav>
	);
};

export default UserMenu;
