import React from 'react';
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
			|||
		</span>
	);
};

export default ToggleButton;
