import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URI, credentials: 'include' }),
	endpoints: () => ({}),
	tagTypes: ['Artist', 'Song', 'Album', 'Playlist'],
});
