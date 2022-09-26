import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// Data
import { MENU_ITEMS } from '@/data/menu';
// Styles
import styles from './index.module.scss';

type Props = {
	toggleDrawer: () => void;
	show: boolean;
};

const Drawer: React.FC<Props> = ({ show, toggleDrawer }) => {
	return (
		<SwipeableDrawer anchor='left' open={show} onClose={() => toggleDrawer()} onOpen={() => toggleDrawer()}>
			<header className={styles.drawer_header}>
				<h2 className={styles.brand}>Tsuini.com</h2>;
			</header>
			<Divider />
			<Box sx={{ width: 250 }} role='presentation' onClick={() => toggleDrawer()} onKeyDown={() => toggleDrawer()}>
				<List>
					{MENU_ITEMS.map(({ label, path }, index) => (
						<ListItem key={label} disablePadding>
							<ListItemButton>
								{/* <ListItemIcon>{icon}</ListItemIcon> */}
								<ListItemText primary={label} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</SwipeableDrawer>
	);
};

export default Drawer;
