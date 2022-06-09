import React, { useEffect } from 'react';
import { usePlayerDevice } from 'react-spotify-web-playback-sdk';
// Components
import PlayerButtons from './PlayerButtons';
import ProgressBar from './ProgressBar';
// Services
import * as spotifyService from '@services/spotify.service';
// Styles
import styles from './index.module.scss';

type PlayerControllerProps = {};

const PlayerController: React.FC<PlayerControllerProps> = () => {
	const playerDevice = usePlayerDevice();

	useEffect(() => {
		const setDevice = async () => {
			try {
				if (playerDevice?.device_id === undefined) return;
				await spotifyService.setDevice(playerDevice.device_id);
			} catch (error) {}
		};
		setDevice();
	}, [playerDevice?.device_id]);

	return (
		<nav className={styles.player_middle_controls}>
			<PlayerButtons />
			<ProgressBar />
		</nav>
	);
};

export default PlayerController;
