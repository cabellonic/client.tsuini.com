import { ArtistEntity, AlbumEntity, UserEntity } from './index';

export interface SongEntity {
	id: string;
	name: string;
	discNumber: number;
	duration: number;
	spotifyUrl: string;
	trackNumber: number;
	uploader: UserEntity;
	artists: Array<ArtistEntity>;
	album: AlbumEntity;
}
