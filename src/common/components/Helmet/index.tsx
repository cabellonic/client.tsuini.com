import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
// Models
import { SEO } from '@models/SEO';

type HelmetProps = {
	seo: SEO;
};

const Helmet: React.FC<HelmetProps> = ({ seo }) => {
	const { title, description } = seo;

	return (
		<ReactHelmet>
			<title>{title || 'test'}</title>
			{description && <meta name='description' content={description} />}
		</ReactHelmet>
	);
};

export default Helmet;
