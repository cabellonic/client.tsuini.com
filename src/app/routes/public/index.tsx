import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Layout
import PublicLayout from '@layout/public';
// Pages
import HomePage from '@pages/home';

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
