import React from 'react';
import AppBar from '@mui/material/AppBar';
// Components
import Brand from './components/Brand';
import GuestMenu from './components/GuestMenu';
import MainMenu from './components/MainMenu';
import Toggler from './components/Toggler';
import UserMenu from './components/UserMenu';
// Hooks
import { useGetMeQuery } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {
	toggleDrawer: () => void;
};

const MainHeader: React.FC<Props> = ({ toggleDrawer }) => {
	const { data: user } = useGetMeQuery();

	return (
		<AppBar position='static'>
			<section className={styles.main_header}>
				<Toggler toggleDrawer={toggleDrawer} />
				<Brand />
				<MainMenu />
				{user ? <UserMenu /> : <GuestMenu />}
			</section>
		</AppBar>
	);
};

export default MainHeader;
