import React from 'react';
// Components
import Helmet from '@components/Helmet';
import Slider from './components/Slider';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<main>
			<Helmet
				seo={{
					title: 'Home - Tsuini.com',
				}}
			/>
			<Slider />
		</main>
	);
};

export default HomePage;
