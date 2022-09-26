import React from 'react';
import IconButton from '@mui/material/IconButton';
import DevicesIcon from '@mui/icons-material/Devices';
// Styles
import styles from './index.module.scss';

type Props = {};

const DeviceController: React.FC<Props> = () => {
	return (
		<IconButton sx={{ color: 'white' }}>
			<DevicesIcon sx={{ fontSize: 20 }} />
		</IconButton>
	);
};

export default DeviceController;
