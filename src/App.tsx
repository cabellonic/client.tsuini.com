import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// Services
import { useGetMeQuery, useRefreshTokenMutation } from './services/auth.service';
// Components
import LoadingScreen from './common/components/LoadingScreen';
import PublicLayout from './layout/public';
// Pages
import { AlbumPage, ArtistPage, HomePage, SongPage, NotFoundPage } from './pages';

function App() {
	const { data: user, isLoading } = useGetMeQuery();
	const [refreshToken] = useRefreshTokenMutation();

	const getToken = useCallback(async () => {
		const result = await refreshToken();
		if ('data' in result) localStorage.setItem('accessToken', result.data.accessToken);
	}, []);

	useEffect(() => {
		if (!user) return;
		const refreshInterval = setInterval(
			(function interval() {
				getToken();
				return interval;
			})(),
			1000 * 60 * 10,
		);
		return () => clearInterval(refreshInterval);
	}, [user, getToken]);

	if (isLoading) return <LoadingScreen />;

	return (
		<Routes>
			<Route path='/' element={<PublicLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/artists/:id' element={<ArtistPage />} />
				<Route path='/albums/:id' element={<AlbumPage />} />
				<Route path='/songs/:id' element={<SongPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
