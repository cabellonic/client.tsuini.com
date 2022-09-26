import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './index.module.scss';

type Props = {};

const SongName: React.FC<Props> = () => {
	return (
		<Link className={styles.song_name} to='/'>
			感電
		</Link>
	);
};

export default SongName;
