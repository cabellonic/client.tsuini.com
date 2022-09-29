import { Route, Routes } from 'react-router-dom';
// Services
import { useGetMeQuery } from './services/auth.service';
// Components
import PublicLayout from './layout/public';
import LoadingScreen from './common/components/LoadingScreen';
// Pages
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';

function App() {
	const { isLoading } = useGetMeQuery();

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
