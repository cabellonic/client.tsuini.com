import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePlaybackState } from 'react-spotify-web-playback-sdk';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
// Service
import * as spotifyService from '@services/spotify.service';
// Styles
import styles from './index.module.scss';

type PlayerSongInfoProps = {};

const PlayerSongInfo: React.FC<PlayerSongInfoProps> = () => {
	const [isSaved, setIsSaved] = useState<boolean>(false);
	const playbackState = usePlaybackState();

	useEffect(() => {
		const fetchSaved = async () => {
			if (!playbackState?.track_window?.current_track?.id) return;
			const trackId = playbackState.track_window.current_track.id;
			const saved = await spotifyService.checkSaveStatus(trackId);
			setIsSaved(saved);
		};
		fetchSaved();
	}, [playbackState?.track_window?.current_track?.uri]);

	const handleSave = async () => {
		if (!playbackState?.track_window.current_track.id) return;
		const trackId = playbackState.track_window.current_track.id;
		if (!isSaved) await spotifyService.saveTrack(trackId);
		else await spotifyService.removeTrack(trackId);
		setIsSaved(await spotifyService.checkSaveStatus(trackId));
	};

	const song = playbackState?.track_window?.current_track;

	if (!song) return <div className={styles.song}></div>;

	return (
		<div className={styles.song}>
			<figure className={styles.song_image_wrapper}>
				<img src={song.album.images[0].url} alt={song.name} />
			</figure>
			<div className={styles.song_info}>
				<Link className={styles.song_name} to={`/songs/${song.id}`}>
					{song.name}
				</Link>
				<span className={styles.song_artists}>
					{song.artists.map(artist => artist.name).join(', ')}
				</span>
			</div>
			<div className={styles.save_in_favorites} onClick={handleSave}>
				{isSaved ? <IoHeart /> : <IoHeartOutline />}
			</div>
		</div>
	);
};

export default PlayerSongInfo;
