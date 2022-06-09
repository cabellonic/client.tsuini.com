import React, { useEffect } from 'react';
import { usePlayerDevice } from 'react-spotify-web-playback-sdk';
// Components
import PlayerButtons from './PlayerButtons';
import ProgressBar from './ProgressBar';
// Services
import * as playerService from '@services/player.service';
// Styles
import styles from './index.module.scss';

type PlayerControllerProps = {};

const PlayerController: React.FC<PlayerControllerProps> = () => {
	const playerDevice = usePlayerDevice();

	useEffect(() => {
		const setDevice = async () => {
			if (playerDevice?.device_id === undefined) return;
			await playerService.setDevice(playerDevice.device_id);
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
