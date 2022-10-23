import { useEffect, useState, createContext } from 'react';
// Utils
import * as utils from '@/utils';

const INITIAL_VOLUME = parseFloat(utils.getFromLocalStorage('tsuini-player-volume', '0.33'));

export type PlayerContextType = {
	tsuiniPlayer: Spotify.Player | null;
	localDeviceId: string | null;
	playbackState: Spotify.PlaybackState | null;
	currentTrack: Spotify.Track | null;
	previousTracks: Array<Spotify.Track>;
	nextTracks: Array<Spotify.Track>;
};

const PlayerContextInitialState: PlayerContextType = {
	tsuiniPlayer: null,
	localDeviceId: null,
	playbackState: null,
	currentTrack: null,
	previousTracks: [],
	nextTracks: [],
};

export const PlayerContext = createContext<PlayerContextType>(PlayerContextInitialState);

type Props = {
	children: React.ReactNode;
};

const PlayerProvider: React.FC<Props> = ({ children }) => {
	const [tsuiniPlayer, setTsuiniPlayer] = useState<Spotify.Player | null>(null);
	const [localDeviceId, setLocalDeviceId] = useState<string | null>(null);
	const [playbackState, setPlaybackState] = useState<Spotify.PlaybackState | null>(null);
	const [currentTrack, setCurrentTrack] = useState<Spotify.Track | null>(null);
	const [previousTracks, setPreviousTracks] = useState<Array<Spotify.Track>>([]);
	const [nextTracks, setNextTracks] = useState<Array<Spotify.Track>>([]);

	const loadSpotifyScript = () => {
		const script = document.createElement('script');
		script.src = 'https://sdk.scdn.co/spotify-player.js';
		script.async = true;

		document.body.appendChild(script);
	};

	const createPlayer = (): Spotify.Player | null => {
		const accessToken = localStorage.getItem('accessToken');

		if (!accessToken) return null;

		return new window.Spotify.Player({
			name: 'Tsuini Player',
			getOAuthToken: callback => {
				callback(accessToken);
			},
			volume: INITIAL_VOLUME,
		});
	};

	const onPlayerReady = ({ device_id }: { device_id: string }) => setLocalDeviceId(device_id);

	const onPlayerStateChange = (state: Spotify.PlaybackState) => {
		if (!state?.track_window) return;
		setPlaybackState({ ...state });
		setCurrentTrack({ ...state.track_window.current_track });
		setPreviousTracks([...state.track_window.previous_tracks]);
		setNextTracks([...state.track_window.next_tracks]);
	};

	useEffect(() => {
		loadSpotifyScript();

		window.onSpotifyWebPlaybackSDKReady = async () => {
			const tsuiniPlayer = createPlayer();
			if (!tsuiniPlayer) return console.error('Could not create player, no access token found.');

			tsuiniPlayer.addListener('ready', onPlayerReady);
			tsuiniPlayer.addListener('player_state_changed', onPlayerStateChange);
			tsuiniPlayer.connect();

			setTsuiniPlayer(tsuiniPlayer);
		};

		return () => tsuiniPlayer?.disconnect();
	}, []);

	useEffect(() => {
		if (!tsuiniPlayer) return;
		if (!playbackState) return;
		if (playbackState.paused) return;

		const intervalId = window.setInterval(async () => {
			const newState = await tsuiniPlayer.getCurrentState();
			if (!newState) return;
			setPlaybackState({ ...newState });
			setCurrentTrack({ ...newState?.track_window?.current_track });
		}, 1000);

		return () => window.clearInterval(intervalId);
	}, [playbackState?.paused]);

	return (
		<PlayerContext.Provider
			value={{ tsuiniPlayer, localDeviceId, playbackState, currentTrack, previousTracks, nextTracks }}
		>
			{children}
		</PlayerContext.Provider>
	);
};

export default PlayerProvider;
