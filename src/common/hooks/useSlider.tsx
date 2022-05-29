import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
// Services
import { getSlides } from '@services/slide.service';
// Models
import { SlideEntry } from '@models/Slide';

export const useSlider = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<AxiosError>();
	const [slides, setSlides] = useState<Array<SlideEntry>>([]);

	useEffect(() => {
		getSlides()
			.then(setSlides)
			.catch(setError)
			.finally(() => setIsLoading(false));
	}, []);

	return { isLoading, error, slides };
};
