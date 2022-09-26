import { configureStore } from '@reduxjs/toolkit';
import userReducer from './states/user';

export const AppStore = configureStore({
	reducer: {
		user: userReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof AppStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof AppStore.dispatch;
