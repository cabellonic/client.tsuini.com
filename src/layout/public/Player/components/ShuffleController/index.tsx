import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import ShuffleIcon from '@mui/icons-material/Shuffle';
// Context
import { PlayerContext } from '../../context/player.context';
// Services
import { useSetPlaybackShuffleMutation } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {};

const ShuffleController: React.FC<Props> = () => {
	const { playbackState } = useContext(PlayerContext);
	const [setShuffle, { isLoading: isSettinghuffle }] = useSetPlaybackShuffleMutation();

	const toggleShuffle = async () => {
		if (!playbackState || isSettinghuffle) return;
		try {
			await setShuffle(!playbackState.shuffle);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<span className={styles.shuffle_controller} data-active={Boolean(playbackState?.shuffle)} onClick={toggleShuffle}>
			<IconButton disabled={!Boolean(playbackState)} aria-label='Aleatorio'>
				<ShuffleIcon fontSize='medium' />
			</IconButton>
		</span>
	);
};

export default ShuffleController;
