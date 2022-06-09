import React, { useEffect } from 'react';
import {
	IoVolumeHigh,
	IoVolumeMedium,
	IoVolumeLow,
	IoVolumeMute,
} from 'react-icons/io5';
import {
	usePlaybackState,
	useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';
// Styles
import styles from './PlayerVolume.module.scss';

type PlayerVolumeProps = {};

const PlayerVolume: React.FC<PlayerVolumeProps> = () => {
	const [volume, setVolume] = React.useState<number>(0.25);
	const [isClicked, setIsClicked] = React.useState<boolean>(false);
	const playbackState = usePlaybackState();
	const player = useSpotifyPlayer();

	useEffect(() => {
		const playerVolume = localStorage.getItem('tsuiniPlayerVolume') || '0.25';
		setVolume(+playerVolume);
	}, []);

	const handleVolume = async (volume: number) => {
		if (!player || !playbackState) return;
		await player.setVolume(volume);
		if (volume) localStorage.setItem('tsuiniPlayerVolume', volume.toString());
	};

	const setVolumeBarWidth = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const { offsetLeft, offsetWidth } = event.currentTarget;
		const clickX = event.clientX - offsetLeft;
		if (clickX < 0 || clickX > offsetWidth) return;
		setVolume(clickX / offsetWidth);
		return clickX / offsetWidth;
	};

	const handleMute = async () => {
		if (volume) {
			setVolume(0);
			return await handleVolume(0);
		}
		const savedVolume = localStorage.getItem('tsuiniPlayerVolume') || 0.25;
		setVolume(+savedVolume);
		await handleVolume(+savedVolume);
	};

	const handleClick = async (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		setIsClicked(false);
		const volumePercentage = setVolumeBarWidth(event);
		if (volumePercentage) await handleVolume(volumePercentage);
	};

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!isClicked) return;
		setVolumeBarWidth(event);
	};

	return (
		<nav className={styles.volume}>
			<span className={styles.volume_icon} onClick={handleMute}>
				{volume === 0 && <IoVolumeMute />}
				{volume > 0 && volume < 0.33 && <IoVolumeLow />}
				{volume >= 0.33 && volume < 0.66 && <IoVolumeMedium />}
				{volume >= 0.66 && <IoVolumeHigh />}
			</span>
			<div
				className={styles.sound_bar_wrapper}
				onClick={handleClick}
				onMouseDown={() => setIsClicked(true)}
				onMouseMove={handleMouseMove}
			>
				<div
					className={styles.sound_bar}
					style={{ width: `${volume * 100}%` }}
				/>
			</div>
		</nav>
	);
};

export default PlayerVolume;
