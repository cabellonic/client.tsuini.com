import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import DashboardLayout from '@/layout/dashboard';
import DashboardPage from '@/pages/dashboard';

type PrivateRoutesProps = {
	user: boolean;
};

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ user }) => {
	if (!user) return <Navigate to={'/'} replace />;

	return (
		<DashboardLayout>
			<Routes>
				<Route path='/' element={<DashboardPage />} />
			</Routes>
		</DashboardLayout>
	);
};

export default PrivateRoutes;
