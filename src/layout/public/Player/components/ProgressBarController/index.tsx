import React from 'react';
import Slider from '@mui/material/Slider';
// Styles
import styles from './index.module.scss';

type Props = {};

function formatDuration(value: number) {
	const minute = Math.floor(value / 60);
	const secondLeft = value - minute * 60;
	return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}

const ProgressBar: React.FC<Props> = () => {
	const [position, setPosition] = React.useState(32);
	const duration = 200;

	return (
		<section className={styles.progress_bar_wrapper}>
			<span className={styles.current_time}>{formatDuration(position)}</span>
			<Slider
				aria-label='time-indicator'
				size='small'
				value={position}
				min={0}
				step={1}
				max={duration}
				onChange={(_, value) => setPosition(+value)}
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
			<span className={styles.total_time}>{formatDuration(duration)}</span>
		</section>
	);
};

export default ProgressBar;
