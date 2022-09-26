import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
// Data
import { MENU_ITEMS } from '@/data/menu';
// Styles
import styles from './index.module.scss';

type MenuProps = {};

const MainMenu: React.FC<MenuProps> = () => {
	return (
		<Box style={{ height: 'inherit' }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			{MENU_ITEMS.map(({ label, path }) => (
				<NavLink
					className={({ isActive }) => (isActive ? styles.main_menu_link_active : styles.main_menu_link)}
					key={label}
					to={path}
				>
					{label}
				</NavLink>
			))}
		</Box>
	);
};

export default MainMenu;
