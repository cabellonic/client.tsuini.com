import * as api from '@services/api.service';

const SPOTIFY_API_URL: string = import.meta.env.VITE_SPOTIFY_API_URL!;

export const getDevices = async (): Promise<Array<any> | null> => {
	const response = await api.get(`${SPOTIFY_API_URL}/me/player/devices`, {
		withCredentials: false,
	});
	if (response.error) throw response.error;
	if (response.data) return response.data.devices;
	return null;
};

export const setDevice = async (deviceId: string): Promise<void> => {
	const response = await api.update(
		`${SPOTIFY_API_URL}/me/player`,
		{ device_ids: [deviceId] },
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
};

export const toggleShuffle = async (shuffleState: boolean): Promise<void> => {
	const response = await api.update(
		`${SPOTIFY_API_URL}/me/player/shuffle?state=${shuffleState}`,
		null,
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
};

export const toggleRepeat = async (repeatMode: number): Promise<void> => {
	const repeatState = repeatMode === 0 ? `off` : `context`;

	const response = await api.update(
		`${SPOTIFY_API_URL}/me/player/repeat?state=${repeatState}`,
		null,
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
};

export const checkSaveStatus = async (songId: string): Promise<boolean> => {
	const response = await api.get(
		`${SPOTIFY_API_URL}/me/tracks/contains?ids=${songId}`,
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
	return response.data[0];
};

export const saveTrack = async (songId: string): Promise<void> => {
	const response = await api.update(
		`${SPOTIFY_API_URL}/me/tracks`,
		{ ids: [songId] },
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
};

export const removeTrack = async (songId: string): Promise<void> => {
	const response = await api.remove(
		`${SPOTIFY_API_URL}/me/tracks?ids=${songId}`,
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
};

export const getTrack = async (songId: string): Promise<any> => {
	const response = await api.get(`/tracks/${songId}`, {
		withCredentials: false,
	});
	if (response.error) throw response.error;
	if (response.data) return response.data;
	return null;
};
