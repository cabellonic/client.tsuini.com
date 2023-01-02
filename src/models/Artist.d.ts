import { UserEntity } from './User';

export interface ArtistEntity {
	id: string;
	name: string;
	avatar: string;
	spotifyUrl: string;
	uploader: UserEntity;
}
