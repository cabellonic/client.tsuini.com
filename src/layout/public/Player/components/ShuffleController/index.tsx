import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShuffleIcon from '@mui/icons-material/Shuffle';
// Styles
import styles from './index.module.scss';

type Props = {};

const ShuffleController: React.FC<Props> = () => {
	return (
		<span className={styles.shuffle_controller}>
			<IconButton aria-label='Aleatorio' sx={{ color: '#fff' }}>
				<ShuffleIcon fontSize='medium' />
			</IconButton>
		</span>
	);
};

export default ShuffleController;
