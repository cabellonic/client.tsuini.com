import * as api from '@services/api.service';
// Models
import { User } from '@models/User';
import { Tokens } from '@models/Tokens';

export const loginWithSpotify = async () => {
	const response = await api.get('/auth/spotify/login');
	if (response.error) throw response.error;
	if (response.data.authorizeURL) {
		window.open(response.data.authorizeURL, '_self');
	}
};

export const logout = () => {
	window.open(`${import.meta.env.VITE_API_URI}/auth/logout`, '_self');
};

type CheckType = {
	user: User;
	tokens: Tokens;
};

export const check = async (): Promise<CheckType | null> => {
	const response = await api.get('/auth/check');
	if (response.error) {
		localStorage.removeItem('accessToken');
		throw response.error;
	}
	if (response.data) {
		localStorage.setItem('accessToken', response.data.tokens.accessToken);
		return { user: response.data.user, tokens: response.data.tokens };
	}
	return null;
};
