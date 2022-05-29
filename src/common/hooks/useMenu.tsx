import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
// Services
import { getMenuItems } from '@services/menu.service';
// Models
import { MenuItem } from '@models/Menu';

export const useMenu = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<AxiosError>();
	const [menuItems, setMenuItems] = useState<Array<MenuItem>>([]);

	useEffect(() => {
		getMenuItems()
			.then(setMenuItems)
			.catch(setError)
			.finally(() => setIsLoading(false));
	}, []);

	return { isLoading, error, menuItems };
};
