import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './index.module.scss';

type Props = {};

const SongImage: React.FC<Props> = () => {
	return (
		<Link to='/' className={styles.song_image}>
			<img alt='Kenshi Yonezu' src='https://pbs.twimg.com/profile_banners/757750475945107456/1577833739/1500x500' />
		</Link>
	);
};

export default SongImage;
