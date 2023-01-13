import { ArtistEntity } from './Artist';
import { UserEntity } from './User';
import { SongEntity } from './Song';

export interface AlbumEntity {
	id: string;
	name: string;
	albumType: string;
	href: string;
	image: string;
	releaseDate: string;
	spotifyUrl: string;
	totalSongs: number;
	uploader: UserEntity;
	artists: Array<ArtistEntity>;
	songs: Array<SongEntity>;
}
