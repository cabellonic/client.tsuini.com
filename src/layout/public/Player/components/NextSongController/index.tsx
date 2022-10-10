import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
// Context
import { PlayerContext } from '../../context/player.context';
// Services
import { useSetPlaybackNextMutation } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {};

const NextSongController: React.FC<Props> = () => {
	const { playbackState } = useContext(PlayerContext);
	const [setNextTrack, { isLoading: isSettingNextTrack }] = useSetPlaybackNextMutation();

	const handleNextTrack = async () => {
		if (!playbackState || isSettingNextTrack) return;
		try {
			await setNextTrack();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<span className={styles.next_song_controller} data-active={Boolean(playbackState)} onClick={handleNextTrack}>
			<IconButton disabled={!Boolean(playbackState)} aria-label='Siguiente canción' sx={{ color: '#fff' }}>
				<FastForwardRounded fontSize='large' />
			</IconButton>
		</span>
	);
};

export default NextSongController;
