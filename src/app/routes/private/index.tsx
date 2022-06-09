import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Contexts
import { UserContext } from '@contexts/user.context';
// Layout
import DashboardLayout from '@layout/dashboard';
// Pages
import DashboardPage from '@pages/dashboard';

type PrivateRoutesProps = {};

const PrivateRoutes: React.FC<PrivateRoutesProps> = () => {
	const { user } = useContext(UserContext);

	if (!user || user.rank > 1) return <Navigate to={'/'} replace />;

	return (
		<DashboardLayout>
			<Routes>
				<Route path='/' element={<DashboardPage />} />
			</Routes>
		</DashboardLayout>
	);
};

export default PrivateRoutes;
