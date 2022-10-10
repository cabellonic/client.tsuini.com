import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import RepeatIcon from '@mui/icons-material/Repeat';
// Context
import { PlayerContext } from '../../context/player.context';
// Services
import { useSetPlaybackRepeatMutation } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {};

const RepeatController: React.FC<Props> = () => {
	const { playbackState } = useContext(PlayerContext);
	const [setRepeat, { isLoading: isSettingRepeat }] = useSetPlaybackRepeatMutation();

	const handleChangeRepeatState = async () => {
		if (!playbackState || isSettingRepeat) return;
		const currentStatus = Boolean(playbackState.repeat_mode);
		try {
			if (currentStatus) await setRepeat('off');
			else await setRepeat('context');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<span
			className={styles.repeat_controller}
			data-active={Boolean(playbackState?.repeat_mode)}
			onClick={handleChangeRepeatState}
		>
			<IconButton disabled={!Boolean(playbackState)} aria-label='Repetir en bucle'>
				<RepeatIcon fontSize='medium' />
			</IconButton>
		</span>
	);
};

export default RepeatController;
