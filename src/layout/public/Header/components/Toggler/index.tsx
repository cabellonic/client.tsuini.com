import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// Styles
import styles from './index.module.scss';

type Props = {
	toggleDrawer: () => void;
};

const Toggler: React.FC<Props> = ({ toggleDrawer }) => {
	return (
		<IconButton
			size='large'
			aria-label='Abrir menu'
			color='inherit'
			onClick={toggleDrawer}
			sx={{ display: { xs: 'block', md: 'none' } }}
		>
			<MenuIcon />
		</IconButton>
	);
};

export default Toggler;
