import React from 'react';
import IconButton from '@mui/material/IconButton';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
// Styles
import styles from './index.module.scss';

type Props = {};

const PreviousSongController: React.FC<Props> = () => {
	return (
		<span className={styles.previous_song_controller}>
			<IconButton aria-label='Cancion anterior' sx={{ color: '#fff' }}>
				<FastRewindRounded fontSize='large' />
			</IconButton>
		</span>
	);
};

export default PreviousSongController;
