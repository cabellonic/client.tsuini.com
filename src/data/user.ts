import { UserEntity } from '@/models/User';

export const FAKE_USER: UserEntity = {
	provider: 'Spotify',
	id: '1',
	spotifyPlan: 'premium',
	displayName: 'Lorem Ipsum',
	avatar: 'https://picsum.photos/200',
	username: 'lorem_ipsum',
	email: 'lorem@ipsum.com',
	profileUrl: 'https://open.spotify.com/user/lorem_ipsum',
	rank: 1,
};
