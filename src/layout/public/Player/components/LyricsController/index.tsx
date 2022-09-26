import React from 'react';
import IconButton from '@mui/material/IconButton';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
// Styles
import styles from './index.module.scss';

type Props = {};

const LyricsController: React.FC<Props> = () => {
	return (
		<IconButton sx={{ color: 'white' }}>
			<MicExternalOnIcon sx={{ fontSize: 20 }} />
		</IconButton>
	);
};

export default LyricsController;
