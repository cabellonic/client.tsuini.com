import React, { useCallback, useContext } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';
// Contexts
import { UserContext } from '@contexts/user.context';
// Components
import PlayerSongInfo from './PlayerSongInfo';
import PlayerMiddleControls from './PlayerMiddleControls';
import PlayerRightControls from './PlayerRightControls';
// Styles
import styles from './index.module.scss';

const TsuiniPlayer: React.FC = () => {
	const { user } = useContext(UserContext);

	const getOAuthToken = useCallback((callback: any) => {
		callback(localStorage.getItem('accessToken'));
	}, []);

	if (!user) {
		return (
			<section className={styles.guest_message}>
				<span>¡Bienvenido a Tsuini.com,</span>
				<span>¡Inicia sesión con Spotify y utiliza nuestro reproductor!</span>
			</section>
		);
	}

	return (
		// @ts-ignore: Children prop always be defined
		<WebPlaybackSDK
			initialDeviceName='Tsuini Web Player'
			getOAuthToken={getOAuthToken}
			connectOnInitialized={true}
			initialVolume={0.15}
		>
			<section className={styles.player}>
				<PlayerSongInfo />
				<PlayerMiddleControls />
				<PlayerRightControls />
			</section>
		</WebPlaybackSDK>
	);
};

export default TsuiniPlayer;
