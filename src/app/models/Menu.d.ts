export interface MenuItem {
	id: string;
	label: string;
	path: string;
	order: number;
	icon?: string;
}

export type NewMenuItem = Omit<MenuItem, 'id'>;
