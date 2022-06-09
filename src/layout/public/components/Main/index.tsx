import React from 'react';
// Styles
import styles from './index.module.scss';

type MainProps = {
	children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
	return <main className={styles.main_content}>{children}</main>;
};

export default Main;
