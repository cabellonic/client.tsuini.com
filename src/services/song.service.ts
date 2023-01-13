import { baseApi } from './base.service';
import { SongEntity } from '@/models';

export const SongApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getsongs: builder.query<SongEntity, void>({
			query: () => `/songs`,
			providesTags: ['Song'],
		}),

		getSongByID: builder.query<SongEntity, string>({
			query: id => `/songs/${id}`,
			providesTags: ['Song'],
		}),

		getSongFromSpotify: builder.query<SongEntity, string>({
			query: id => `/songs/spotify/${id}`,
			providesTags: ['Song'],
		}),

		getSong: builder.query<SongEntity, string>({
			query: criteria => `/songs/filter${criteria}`,
			providesTags: ['Song'],
		}),

		createSong: builder.mutation<SongEntity, SongEntity>({
			query: Song => ({
				url: `/songs`,
				method: 'POST',
				body: Song,
			}),
			invalidatesTags: ['Song'],
		}),
	}),
});

export const {
	useGetsongsQuery,
	useGetSongByIDQuery,
	useGetSongFromSpotifyQuery,
	useGetSongQuery,
	useCreateSongMutation,
} = SongApi;
