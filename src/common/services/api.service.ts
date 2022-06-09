import axios, { AxiosError, AxiosRequestConfig } from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URI;

type HeadersType = {
	'Content-Type': string;
	Authorization?: string;
};

const getHeaders = () => {
	const headers: HeadersType = {
		'Content-Type': 'application/json',
	};
	const token = localStorage.getItem('accessToken');
	if (token) headers.Authorization = `Bearer ${token}`;
	return headers;
};

export const get = async (
	url: string,
	options: AxiosRequestConfig = { withCredentials: true }
) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.get(url, {
			headers,
			...options,
		});
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};

export const post = async (
	url: string,
	body: any,
	options: AxiosRequestConfig = { withCredentials: true }
) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.post(url, body, {
			headers,
			...options,
		});
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};

export const update = async (
	url: string,
	body: any,
	options: AxiosRequestConfig = { withCredentials: true }
) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.put(url, body, {
			headers,
			...options,
		});
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};

export const remove = async (
	url: string,
	options: AxiosRequestConfig = { withCredentials: true }
) => {
	const headers = getHeaders();
	try {
		const { data } = await axios.delete(url, {
			headers,
			...options,
		});
		return { data };
	} catch (error) {
		if (error instanceof AxiosError) return { error };
		throw new AxiosError('Unknown error');
	}
};
