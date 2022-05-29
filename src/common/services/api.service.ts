import axios, { AxiosError } from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URI;

const getHeaders = () => {
	const headers = { 'Content-Type': 'application/json' };
	return headers;
};

export const get = async (url: string) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.get(url, { headers });
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};

export const post = async (url: string, body: any) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.post(url, body, { headers });
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};

export const update = async (url: string, body: any) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.put(url, body, { headers });
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};

export const remove = async (url: string) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.delete(url, { headers });
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};
