import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// Services
import { useGetMeQuery, useRefreshTokenMutation } from './services/auth.service';
// Components
import PublicLayout from './layout/public';
import LoadingScreen from './common/components/LoadingScreen';
// Pages
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';

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
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
