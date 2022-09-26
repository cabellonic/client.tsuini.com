import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './index.module.scss';

type Props = {};

const SongArtist: React.FC<Props> = () => {
	return (
		<Link className={styles.song_artist} to='/'>
			Kenshi Yonezu
		</Link>
	);
};

export default SongArtist;
