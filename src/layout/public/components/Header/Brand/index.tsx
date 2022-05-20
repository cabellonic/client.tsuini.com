import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './index.module.scss';

const Brand: React.FC = () => {
	return (
		<Link className={styles.brand} to='/'>
			<img className={styles.logo} src='/logo.png' alt='Logo' />
			<span className={styles.site_name}>Tsuini.com</span>
		</Link>
	);
};

export default Brand;
