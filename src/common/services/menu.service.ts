import * as api from '@services/api.service';
// Types
import { MenuItem, NewMenuItem } from '@models/Menu';

export const getMenuItems = async (): Promise<Array<MenuItem>> => {
	const response = await api.get('/menu');
	if (response.error) throw response.error;
	return response.data;
};

export const getMenuItem = async (id: string): Promise<MenuItem> => {
	const response = await api.get(`/menu/${id}`);
	if (response.error) throw response.error;
	return response.data;
};

export const addMenuItem = async (menuItem: NewMenuItem): Promise<MenuItem> => {
	const response = await api.post('/menu', menuItem);
	if (response.error) throw response.error;
	return response.data;
};
