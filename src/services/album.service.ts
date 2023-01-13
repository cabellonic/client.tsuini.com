import { baseApi } from './base.service';
import { AlbumEntity } from '@/models';

export const AlbumApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAlbums: builder.query<Array<AlbumEntity>, void>({
			query: () => `/albums`,
			providesTags: ['Album'],
		}),

		getAlbumByID: builder.query<AlbumEntity, string>({
			query: id => `/albums/${id}`,
			providesTags: ['Album'],
		}),

		getAlbumFromSpotify: builder.query<AlbumEntity, string>({
			query: id => `/albums/spotify/${id}`,
			providesTags: ['Album'],
		}),

		getAlbum: builder.query<AlbumEntity, string>({
			query: criteria => `/albums/filter${criteria}`,
			providesTags: ['Album'],
		}),

		createAlbum: builder.mutation<AlbumEntity, AlbumEntity>({
			query: Album => ({
				url: `/albums`,
				method: 'POST',
				body: Album,
			}),
			invalidatesTags: ['Album'],
		}),
	}),
});

export const {
	useGetAlbumsQuery,
	useGetAlbumByIDQuery,
	useGetAlbumFromSpotifyQuery,
	useGetAlbumQuery,
	useCreateAlbumMutation,
} = AlbumApi;
