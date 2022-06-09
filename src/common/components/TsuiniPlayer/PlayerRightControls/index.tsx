import React from 'react';
// Components
import PlayerVolume from './PlayerVolume';
// Styles
import styles from './index.module.scss';

type PlayerRightControlsProps = {};

const PlayerRightControls: React.FC<PlayerRightControlsProps> = () => {
	return (
		<nav className={styles.player_right_controls}>
			<PlayerVolume />
		</nav>
	);
};

export default PlayerRightControls;
