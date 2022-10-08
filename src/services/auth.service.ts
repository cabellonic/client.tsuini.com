import { baseApi } from './base.service';
import { UserEntity } from '@/models';

export const authApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getMe: builder.query<UserEntity, void>({
			query: () => `/auth/me`,
		}),

		logout: builder.mutation<{ success: boolean; message: string }, void>({
			query: () => ({
				url: `/auth/logout`,
				method: 'GET',
			}),
		}),

		refreshToken: builder.mutation<{ accessToken: string; expires_in: number }, void>({
			query: () => ({
				url: `/auth/refresh`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetMeQuery, useLogoutMutation, useRefreshTokenMutation } = authApi;
