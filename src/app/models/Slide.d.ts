export interface SlideEntry {
	id: number;
	title: string;
	image: string;
	link: string;
	description: string;
	imageOnly: boolean;
	imageMobile?: string;
	button?: string;
}

export type NewSlideEntry = Omit<SlideEntry, 'id'>;
