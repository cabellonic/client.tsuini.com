import { useEffect, useState } from 'react';

type useWindowResizeProps = {
	width: number | undefined;
	height: number | undefined;
};

const __MOBILE_RESOLUTION__ = 768;

export const useWindowResize = () => {
	const [windowSize, setWindowSize] = useState<useWindowResizeProps>({
		width: undefined,
		height: undefined,
	});

	const isMobile =
		windowSize.width && windowSize.width <= __MOBILE_RESOLUTION__;

	useEffect(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { windowSize, isMobile };
};
