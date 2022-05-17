import React from 'react';
// Components
import Header from './components/Header';

type PublicLayoutProps = {
	children?: React.ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default PublicLayout;
