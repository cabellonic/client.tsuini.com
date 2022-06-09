import React from 'react';
import {
	IoPlay,
	IoPause,
	IoPlaySkipBack,
	IoPlaySkipForward,
	IoShuffle,
	IoRepeat,
} from 'react-icons/io5';
import {
	useSpotifyPlayer,
	usePlaybackState,
} from 'react-spotify-web-playback-sdk';
// Services
import * as playerService from '@services/player.service';
// Styles
import styles from './PlayerButtons.module.scss';

const PlayerButtons: React.FC = () => {
	const player = useSpotifyPlayer();
	const playbackState = usePlaybackState();

	const handleShuffle = async () => {
		if (!playbackState) return;
		await playerService.toggleShuffle(!playbackState.shuffle);
	};

	const handleSkipBack = () => {
		if (!player) return;
		player.previousTrack();
	};

	const handleRepeat = async () => {
		if (!playbackState) return;
		await playerService.toggleRepeat((playbackState.repeat_mode + 1) % 2);
	};

	const handleSkipForward = () => {
		if (!player) return;
		player.nextTrack();
	};

	const handleToggle = () => {
		if (!player) return;
		player.togglePlay();
	};

	return (
		<div className={styles.player_buttons}>
			<span
				className={
					playbackState?.shuffle
						? `${styles.button} ${styles.active}`
						: styles.button
				}
				onClick={handleShuffle}
			>
				<IoShuffle />
			</span>

			<span className={styles.button} onClick={handleSkipBack}>
				<IoPlaySkipBack />
			</span>

			<span className={styles.toggle_play} onClick={handleToggle}>
				{playbackState?.paused ? <IoPlay /> : <IoPause />}
			</span>

			<span className={styles.button} onClick={handleSkipForward}>
				<IoPlaySkipForward />
			</span>

			<span
				className={
					playbackState?.repeat_mode
						? `${styles.button} ${styles.active}`
						: styles.button
				}
				onClick={handleRepeat}
			>
				<IoRepeat />
			</span>
		</div>
	);
};

export default PlayerButtons;
