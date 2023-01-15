import { SongEntity } from './Song';

export interface PlaylistEntity {
	collaborative: boolean;
	description: string;
	spotifyUrl: string;
	followers: number;
	id: string;
	images: Array<string>;
	name: string;
	owner: {
		id: string;
		name: string;
	};
	public: boolean;
	songs: Array<SongEntity & { added_at: string; added_by: string }>;
	total_songs: number;
}

export interface NewPlaylistEntity {
	description: string;
	name: string;
	public: boolean;
	collaborative: boolean;
}
