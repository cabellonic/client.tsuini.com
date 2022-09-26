import React from 'react';
import IconButton from '@mui/material/IconButton';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
// Styles
import styles from './index.module.scss';

type Props = {};

const NextSongController: React.FC<Props> = () => {
	return (
		<span className={styles.next_song_controller}>
			<IconButton aria-label='Siguiente canción' sx={{ color: '#fff' }}>
				<FastForwardRounded fontSize='large' />
			</IconButton>
		</span>
	);
};

export default NextSongController;
