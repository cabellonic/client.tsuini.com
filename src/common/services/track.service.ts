import * as api from '@services/api.service';

const SPOTIFY_API_URL: string = import.meta.env.VITE_SPOTIFY_API_URL!;

export const checkSaveStatus = async (
	songId: string
): Promise<boolean | null> => {
	const response = await api.get(
		`${SPOTIFY_API_URL}/me/tracks/contains?ids=${songId}`,
		{ withCredentials: false }
	);
	if (response.error) throw response.error;
	if (response.data) return response.data[0];
	return null;
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
