import React from 'react';
// Styles
import styles from './index.module.scss';

type PlaceholderProps = {};

const Placeholder: React.FC<PlaceholderProps> = () => {
	return <figure className={styles.placeholder} />;
};

export default Placeholder;
