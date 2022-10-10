import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
// Context
import { PlayerContext } from '../../context/player.context';
// Services
import { useSetPlaybackPreviousMutation } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {};

const PreviousSongController: React.FC<Props> = () => {
	const { playbackState } = useContext(PlayerContext);
	const [setPreviousTrack, { isLoading: isSettingPreviousTrack }] = useSetPlaybackPreviousMutation();

	const handlePreviousTrack = async () => {
		if (!playbackState || isSettingPreviousTrack) return;
		try {
			await setPreviousTrack();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<span
			className={styles.previous_song_controller}
			data-active={Boolean(playbackState)}
			onClick={handlePreviousTrack}
		>
			<IconButton disabled={!Boolean(playbackState)} aria-label='Cancion anterior' sx={{ color: '#fff' }}>
				<FastRewindRounded fontSize='large' />
			</IconButton>
		</span>
	);
};

export default PreviousSongController;
