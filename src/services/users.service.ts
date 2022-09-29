import { baseApi } from './base.service';
import { UserEntity } from '@/models';

export const userApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getUsers: builder.query<UserEntity, void>({
			query: () => `/users`,
		}),

		getUserByID: builder.query<UserEntity, string>({
			query: id => `/users/${id}`,
		}),

		getUser: builder.query<UserEntity, string>({
			query: criteria => `/users/filter${criteria}`,
		}),
	}),
});

export const { useGetUsersQuery } = userApi;
