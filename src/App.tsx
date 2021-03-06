import { Route, Routes } from 'react-router-dom';

import UserProvider from './common/contexts/user.context';
import TsuiniPlayer from '@components/TsuiniPlayer';
import PublicRoutes from '@routes/public';
import PrivateRoutes from '@routes/private';

const App = () => {
	return (
		<UserProvider>
			<Routes>
				<Route path='/*' element={<PublicRoutes />} />
				<Route path='/dashboard/*' element={<PrivateRoutes />} />
			</Routes>
			<TsuiniPlayer />
		</UserProvider>
	);
};

export default App;
