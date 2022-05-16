import { Route, Routes } from 'react-router-dom';

import PublicRoutes from '@routes/public';
import PrivateRoutes from '@routes/private';

const App = () => {
	const user = true;

	return (
		<Routes>
			<Route path='/*' element={<PublicRoutes />} />
			<Route path='/dashboard/*' element={<PrivateRoutes user={user} />} />
		</Routes>
	);
};

export default App;
