import React from 'react';
// Components
import DeviceController from './components/DeviceController';
import FavoriteController from './components/FavoriteController';
import LyricsController from './components/LyricsController';
import NextSongController from './components/NextSongController';
import PlayController from './components/PlayController';
import PreviousSongController from './components/PreviousSongController';
import ProgressBarController from './components/ProgressBarController';
import RepeatController from './components/RepeatController';
import ShuffleController from './components/ShuffleController';
import SongArtist from './components/SongArtist';
import SongImage from './components/SongImage';
import SongName from './components/SongName';
import VolumeController from './components/VolumeController';
import PlayerProvider from './context/player.context';
// Styles
import styles from './index.module.scss';

type Props = {};

const Player: React.FC<Props> = () => {
	return (
		<PlayerProvider>
			<section className={styles.player}>
				<div className={styles.song_info}>
					<SongImage />

					<span className={styles.song_data}>
						<SongName />
						<SongArtist />
					</span>

					<span className={styles.song_favorite}>
						<FavoriteController />
					</span>
				</div>
				<div className={styles.player_middle_controls}>
					<span>
						<ShuffleController />
						<PreviousSongController />
						<PlayController />
						<NextSongController />
						<RepeatController />
					</span>
					<ProgressBarController />
				</div>

				<div className={styles.player_right_controlls}>
					<DeviceController />
					<LyricsController />
					<VolumeController />
				</div>
			</section>
		</PlayerProvider>
	);
};

export default Player;
