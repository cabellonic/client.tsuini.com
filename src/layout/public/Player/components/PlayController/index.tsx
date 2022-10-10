import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
// Context
import { PlayerContext } from '../../context/player.context';
// Services
import { useSetPlaybackPauseMutation, useSetPlaybackPlayMutation } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {};

const PlayController: React.FC<Props> = () => {
	const { playbackState } = useContext(PlayerContext);
	const [setPlay, { isLoading: isSettingPlay }] = useSetPlaybackPlayMutation();
	const [setPause, { isLoading: isSettingPause }] = useSetPlaybackPauseMutation();

	const togglePlay = async () => {
		if (!playbackState || isSettingPlay || isSettingPause) return;
		try {
			if (playbackState.paused) await setPlay();
			else await setPause();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<span className={styles.play_controller} data-active={Boolean(playbackState)}>
			<IconButton
				aria-label={playbackState?.paused ? 'pause' : 'play'}
				onClick={togglePlay}
				disabled={!Boolean(playbackState)}
				classes={{
					root: styles.play_controller_button_root,
				}}
			>
				{!playbackState || playbackState.paused ? (
					<PlayArrowRounded className={styles.play_controller_button_icon} />
				) : (
					<PauseRounded className={styles.play_controller_button_icon} />
				)}
			</IconButton>
		</span>
	);
};

export default PlayController;
