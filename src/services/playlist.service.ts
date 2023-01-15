import { baseApi } from './base.service';
import { NewPlaylistEntity, PlaylistEntity } from '@/models';

export const playlistApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getPlaylistByID: builder.query<PlaylistEntity, string>({
			query: id => `/playlists/${id}`,
			providesTags: ['Playlist'],
		}),

		getMyPlaylists: builder.query<Array<PlaylistEntity>, void>({
			query: () => `/playlists/me`,
			providesTags: ['Playlist'],
		}),

		getUserPlaylists: builder.query<Array<PlaylistEntity>, string>({
			query: userId => `/playlists/user/${userId}`,
			providesTags: ['Playlist'],
		}),

		createPlaylist: builder.mutation<PlaylistEntity, { playlist: NewPlaylistEntity; id: string }>({
			query: ({ playlist, id }) => ({
				url: `/playlists/user/${id}`,
				method: 'POST',
				body: playlist,
			}),
			invalidatesTags: ['Playlist'],
		}),
	}),
});

export const { useGetPlaylistByIDQuery, useGetMyPlaylistsQuery, useGetUserPlaylistsQuery, useCreatePlaylistMutation } =
	playlistApi;
