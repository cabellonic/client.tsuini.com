import { ArtistEntity } from './Artist';
import { UserEntity } from './User';

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
}
