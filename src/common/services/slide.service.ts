import * as api from '@services/api.service';
// Types
import { NewSlideEntry, SlideEntry } from '@models/Slide';

export const getSlides = async (): Promise<Array<SlideEntry>> => {
	const response = await api.get('/slides');
	if (response.error) throw response.error;
	return response.data;
};

export const getSlide = async (id: string): Promise<SlideEntry> => {
	const response = await api.get(`/slides/${id}`);
	if (response.error) throw response.error;
	return response.data;
};

export const addSlide = async (slide: NewSlideEntry): Promise<SlideEntry> => {
	const response = await api.post('/slides', slide);
	if (response.error) throw response.error;
	return response.data;
};
