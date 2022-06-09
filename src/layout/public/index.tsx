import React from 'react';
// Components
import Header from './components/Header';
import Main from './components/Main';

type PublicLayoutProps = {
	children?: React.ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	);
};

export default PublicLayout;
