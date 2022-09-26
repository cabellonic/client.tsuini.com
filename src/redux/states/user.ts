// User state redux toolkit

import { UserEntity } from '@/models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserEntity = {
	provider: '',
	id: '',
	spotifyPlan: '',
	displayName: '',
	avatar: '',
	username: '',
	email: '',
	profileUrl: '',
	rank: 0,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<UserEntity>) => action.payload,

		logout: () => initialState,

		update: (state, action: PayloadAction<UserEntity>) => ({
			...state,
			...action.payload,
		}),
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
