import React from 'react';
import { IoMdMenu } from 'react-icons/io';
// Styles
import styles from './ToggleButton.module.scss';

type ToggleButtonProps = {
	isMenuOpen: boolean;
	onClick: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ isMenuOpen, onClick }) => {
	return (
		<span
			className={`${styles.toggle} ${isMenuOpen ? styles.active : ''}`}
			onClick={onClick}
		>
			<IoMdMenu className={styles.icon} />
		</span>
	);
};

export default ToggleButton;
