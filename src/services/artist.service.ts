import { baseApi } from './base.service';
import { ArtistEntity } from '@/models';

export const artistApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getArtists: builder.query<ArtistEntity, void>({
			query: () => `/artists`,
			providesTags: ['Artist'],
		}),

		getArtistByID: builder.query<ArtistEntity, string>({
			query: id => `/artists/${id}`,
			providesTags: ['Artist'],
		}),

		getArtistFromSpotify: builder.query<ArtistEntity, string>({
			query: id => `/artists/spotify/${id}`,
			providesTags: ['Artist'],
		}),

		getArtist: builder.query<ArtistEntity, string>({
			query: criteria => `/artists/filter${criteria}`,
			providesTags: ['Artist'],
		}),

		createArtist: builder.mutation<ArtistEntity, ArtistEntity>({
			query: artist => ({
				url: `/artists`,
				method: 'POST',
				body: artist,
			}),
			invalidatesTags: ['Artist'],
		}),
	}),
});

export const {
	useGetArtistsQuery,
	useGetArtistByIDQuery,
	useGetArtistFromSpotifyQuery,
	useGetArtistQuery,
	useCreateArtistMutation,
} = artistApi;
