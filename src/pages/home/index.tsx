import React from 'react';
// Components
import Helmet from '@/common/components/Helmet';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<section>
			<Helmet
				seo={{
					title: 'Home - Tsuini.com',
				}}
			/>
			Home page
		</section>
	);
};

export default HomePage;
