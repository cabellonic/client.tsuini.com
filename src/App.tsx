import { Routes, Route, Outlet, Link } from 'react-router-dom';
import PublicLayout from './layout/public';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';

function App() {
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
