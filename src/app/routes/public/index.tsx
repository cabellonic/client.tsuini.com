import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import HomePage from '@pages/home';
import PublicLayout from '@/layout/public';

type PublicRoutesProps = {};

const PublicRoutes: React.FC<PublicRoutesProps> = () => {
	return (
		<PublicLayout>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</PublicLayout>
	);
};

export default PublicRoutes;
