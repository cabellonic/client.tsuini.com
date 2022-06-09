import React, { useEffect } from 'react';
import {
	usePlaybackState,
	useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';
// Styles
import styles from './ProgressBar.module.scss';

const ProgressBar: React.FC = () => {
	const [rangeWidth, setRangeWidth] = React.useState<number>(0);
	const [trackPosition, setTrackPosition] = React.useState<string>('0:00');
	const [trackDuration, setTrackDuration] = React.useState<string>('0:00');
	const [isClicked, setIsClicked] = React.useState<boolean>(false);
	const playbackState = usePlaybackState(true);
	const player = useSpotifyPlayer();

	const transformMilisecondsToTimeString = (miliseconds: number) => {
		const hours = Math.floor(miliseconds / 3600000);
		const minutes = Math.floor((miliseconds % 3600000) / 60000);
		const seconds = Math.floor((miliseconds % 60000) / 1000);
		if (hours) {
			return `
			${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
				seconds < 10 ? `0${seconds}` : seconds
			}
			`;
		}
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	useEffect(() => {
		if (!playbackState || !playbackState?.position) return;
		setRangeWidth((playbackState.position / playbackState.duration) * 100);
		setTrackPosition(transformMilisecondsToTimeString(playbackState.position));

		// Trying to avoid the async call every 1 second made by the usePlaybackState(true) hook
		// Sadly the track position does not reset to 0 when the track ends or when the track is changed
		// I'll work on a solution to this later
		//
		// let counter = 0;
		// const interval = setInterval(() => {
		// 	if (playbackState.paused) {
		// 		clearInterval(interval);
		// 		return;
		// 	}
		// 	counter += 1000;
		// 	setRangeWidth(
		// 		((playbackState.position + counter) / playbackState.duration) * 100
		// 	);
		// }, 1000);

		// return () => clearInterval(interval);
	}, [playbackState?.position, playbackState?.paused]);

	useEffect(() => {
		if (!playbackState || !playbackState?.duration) return;
		setTrackDuration(transformMilisecondsToTimeString(playbackState.duration));
	}, [playbackState?.duration]);

	const setProgressBarWidth = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!player || !playbackState) return;
		const { offsetLeft, offsetWidth } = event.currentTarget;
		const clickX = event.clientX - offsetLeft;
		if (clickX < 0 || clickX > offsetWidth) return;
		const clickPercent = (clickX / offsetWidth) * 100;
		setRangeWidth(clickPercent);
		return clickPercent;
	};

	const setTrackProgress = async (barWidth: number) => {
		if (!player || !playbackState) return;
		const newPosition = Math.floor((barWidth * playbackState.duration) / 100);
		await player.seek(newPosition);
	};

	const handleClick = async (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		setIsClicked(false);
		const barWidth = setProgressBarWidth(event);
		if (barWidth) await setTrackProgress(barWidth);
	};

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!isClicked) return;
		setProgressBarWidth(event);
	};

	return (
		<div className={styles.timer}>
			<span className={styles.current_time}>{trackPosition}</span>
			<div
				className={styles.progress_bar_wrapper}
				onClick={handleClick}
				onMouseDown={() => setIsClicked(true)}
				onMouseMove={handleMouseMove}
			>
				<div
					className={styles.progress_bar}
					style={{ width: `${rangeWidth}%` }}
				/>
			</div>
			<span className={styles.song_duration}>{trackDuration}</span>
		</div>
	);
};

export default ProgressBar;
