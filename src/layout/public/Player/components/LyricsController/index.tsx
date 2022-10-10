import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
// Context
import { PlayerContext } from '../../context/player.context';
// Styles
import styles from './index.module.scss';

type Props = {};

const LyricsController: React.FC<Props> = () => {
	const { currentTrack } = useContext(PlayerContext);

	const handleLyrics = () => {
		if (!currentTrack) return;
		console.log('Open song lyrics...');
	};

	return (
		<span className={styles.lyrics_controller} data-active={Boolean(currentTrack)} onClick={handleLyrics}>
			<IconButton disabled={!Boolean(currentTrack)} sx={{ color: 'white' }} aria-label='Ver letra'>
				<MicExternalOnIcon sx={{ fontSize: 20 }} />
			</IconButton>
		</span>
	);
};

export default LyricsController;
