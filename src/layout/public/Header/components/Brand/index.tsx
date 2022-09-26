import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
// Styles
import styles from './index.module.scss';

type Props = {};

const Brand: React.FC<Props> = () => {
	return (
		<NavLink end to='/' className={({ isActive }) => (isActive ? styles.brand_active : styles.brand)}>
			<img className={styles.site_logo} src='/logo.png' alt='Tsuini.com' />
			<Typography sx={{ display: { xs: 'none', sm: 'block' } }} className={styles.site_name}>
				Tsuini.com
			</Typography>
		</NavLink>
	);
};

export default Brand;
