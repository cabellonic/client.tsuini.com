import React, { useContext } from 'react';
// Components
import Slider from '@mui/material/Slider';
// Service
import { useSetPlaybackSeekMutation } from '@/services';
// Context
import { PlayerContext } from '../../context/player.context';
// Utils
import * as utils from '@/utils';
// Styles
import styles from './index.module.scss';

type Props = {};

const ProgressBar: React.FC<Props> = () => {
	const [position, setPosition] = React.useState(0);
	const [duration, setDuration] = React.useState(0);
	const [isChangingPosition, setIsChangingPosition] = React.useState(false);
	const { playbackState } = useContext(PlayerContext);
	const [setPlaybackSeek, { isLoading: isSeeking }] = useSetPlaybackSeekMutation();

	React.useEffect(() => {
		if (!isChangingPosition) setPosition(playbackState?.position || 0);
		setDuration(playbackState?.duration || 0);
	}, [playbackState?.position, playbackState?.duration]);

	const handleMouseUp = async (_event: any, newValue: number | number[]) => {
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
				value={position}
				min={0}
				step={1}
				max={duration}
				onChange={handleChange}
				onChangeCommitted={handleMouseUp}
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
			<span className={styles.total_time}>{utils.msToTimeFormat(duration)}</span>
		</section>
	);
};

export default ProgressBar;
