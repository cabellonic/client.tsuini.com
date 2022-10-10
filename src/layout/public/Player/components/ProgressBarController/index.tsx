import { useContext, useEffect, useState } from 'react';
// Components
import Slider from '@mui/material/Slider';
// Context
import { PlayerContext } from '../../context/player.context';
// Service
import { useSetPlaybackSeekMutation } from '@/services';
// Utils
import * as utils from '@/utils';
// Styles
import styles from './index.module.scss';

type Props = {};

const ProgressBar: React.FC<Props> = () => {
	const [position, setPosition] = useState<number>(0);
	const [isChangingPosition, setIsChangingPosition] = useState<boolean>(false);
	const { playbackState } = useContext(PlayerContext);
	const [setPlaybackSeek, { isLoading: isSeeking }] = useSetPlaybackSeekMutation();

	useEffect(() => {
		if (!isChangingPosition) setPosition(playbackState?.position ?? 0);
	}, [playbackState?.position]);

	const handleChangeCommitted = async (_event: any, newValue: number | number[]) => {
		if (!playbackState?.duration || isSeeking) return;
		try {
			await setPlaybackSeek(newValue as number);
		} catch (error) {
			console.log(error);
		} finally {
			setIsChangingPosition(false);
		}
	};

	const handleChange = (_event: any, newValue: number | number[]) => {
		if (!playbackState?.duration) return;
		setIsChangingPosition(true);
		setPosition(newValue as number);
	};

	return (
		<section className={styles.progress_bar_wrapper}>
			<span className={styles.current_time}>{utils.msToTimeFormat(position)}</span>
			<Slider
				aria-label='time-indicator'
				size='small'
				disabled={!Boolean(playbackState)}
				value={position || 0}
				min={0}
				step={1}
				max={playbackState?.duration || 0}
				onChange={handleChange}
				onChangeCommitted={handleChangeCommitted}
				sx={{
					height: 8,
					color: '#fff',
					'& .MuiSlider-thumb': {
						width: 8,
						height: 8,
						transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
						// '&:before': {
						// 	boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
						// },
						'&.Mui-disabled': {
							opacity: 0.5,
						},
						backgroundColor: '#fff',
						'&:before': {
							boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
						},
						'&:hover, &.Mui-focusVisible, &.Mui-active': {
							boxShadow: 'none',
						},
						'&.Mui-active': {
							width: 16,
							height: 16,
						},
					},
					'& .MuiSlider-rail': {
						opacity: 0.28,
					},
				}}
			/>
			<span className={styles.total_time}>{utils.msToTimeFormat(playbackState?.duration)}</span>
		</section>
	);
};

export default ProgressBar;
