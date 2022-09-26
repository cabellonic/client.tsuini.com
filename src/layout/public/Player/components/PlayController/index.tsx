import React from 'react';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
// Styles
import styles from './index.module.scss';

type Props = {};

const PlayController: React.FC<Props> = () => {
	const [isPlaying, setIsPlaying] = React.useState(false);

	const togglePlay = () => setIsPlaying(p => !p);

	return (
		<span className={styles.play_controller}>
			<IconButton
				aria-label={isPlaying ? 'pause' : 'play'}
				onClick={togglePlay}
				classes={{
					root: styles.play_controller_button_root,
				}}
			>
				{isPlaying ? (
					<PauseRounded className={styles.play_controller_button_icon} />
				) : (
					<PlayArrowRounded className={styles.play_controller_button_icon} />
				)}
			</IconButton>
		</span>
	);
};

export default PlayController;
