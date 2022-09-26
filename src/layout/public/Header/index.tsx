import React from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
// Components
import Brand from './components/Brand';
import GuestMenu from './components/GuestMenu';
import MainMenu from './components/MainMenu';
import Toggler from './components/Toggler';
import UserMenu from './components/UserMenu';
// Styles
import styles from './index.module.scss';

type Props = {
	toggleDrawer: () => void;
};

const MainHeader: React.FC<Props> = ({ toggleDrawer }) => {
	const userState = useSelector((store: RootState) => store.user);

	return (
		<AppBar position='static'>
			<section className={styles.main_header}>
				<Toggler toggleDrawer={toggleDrawer} />
				<Brand />
				<MainMenu />
				{userState.id ? <UserMenu /> : <GuestMenu />}
			</section>
		</AppBar>
	);
};

export default MainHeader;
