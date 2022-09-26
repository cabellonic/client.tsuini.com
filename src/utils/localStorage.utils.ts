export const getFromLocalStorage = (key: string, defaultValue?: any) => {
	const value = localStorage.getItem(key);
	if (value) return JSON.parse(value);
	return defaultValue;
};

export const setToLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};
