import React from 'react';
// Components
import Helmet from '@components/Helmet';

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = () => {
	return (
		<section>
			<Helmet
				seo={{
					title: 'Dashboard - Tsuini.com',
				}}
			/>
			Dashboard
		</section>
	);
};

export default DashboardPage;
