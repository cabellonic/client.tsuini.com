export const msToTimeFormat = (ms: number | undefined) => {
	if (!ms) return '00:00';
	const seconds = Math.floor((ms / 1000) % 60);
	const minutes = Math.floor((ms / (1000 * 60)) % 60);
	const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

	return (
		`${hours ? `${hours}:` : ''}` +
		`${minutes < 10 ? `0${minutes}` : minutes}:` +
		`${seconds < 10 ? `0${seconds}` : seconds}`
	);
};
