import React from 'react';
import IconButton from '@mui/material/IconButton';
import RepeatIcon from '@mui/icons-material/Repeat';
// Styles
import styles from './index.module.scss';

type Props = {};

const RepeatController: React.FC<Props> = () => {
	return (
		<span className={styles.repeat_controller}>
			<IconButton aria-label='Repetir en bucle' sx={{ color: '#fff' }}>
				<RepeatIcon fontSize='medium' />
			</IconButton>
		</span>
	);
};

export default RepeatController;
