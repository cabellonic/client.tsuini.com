import React from 'react';
import { Outlet } from 'react-router-dom';
// Components
import MainHeader from './Header';
import Drawer from './Drawer';
import Player from './Player';

const PublicLayout: React.FC = () => {
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const toggleDrawer = () => setOpenDrawer(p => !p);

	return (
		<div>
			<MainHeader toggleDrawer={toggleDrawer} />
			<Drawer toggleDrawer={toggleDrawer} show={openDrawer} />
			<Outlet />
			<Player />
		</div>
	);
};

export default PublicLayout;
