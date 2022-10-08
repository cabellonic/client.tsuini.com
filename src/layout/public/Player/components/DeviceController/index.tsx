import React, { useState, useContext } from 'react';
// MUI Components
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// MUI Icons
import DevicesIcon from '@mui/icons-material/Devices';
import ComputerIcon from '@mui/icons-material/Computer';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
// Services
import { useGetPlaybackDevicesMutation, useSetPlaybackDeviceMutation } from '@/services';
// Context
import { PlayerContext } from '../../context/player.context';
// Models
import { Devices } from '@/models';
// Styles
import styles from './index.module.scss';

type Props = {};

const DeviceController: React.FC<Props> = () => {
	const [getPlaybackDevices] = useGetPlaybackDevicesMutation();
	const [setPlaybackDevice] = useSetPlaybackDeviceMutation();
	const { localDeviceId } = useContext(PlayerContext);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [devices, setDevices] = useState<Devices | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
		if (!localDeviceId) return;
		setAnchorEl(event.currentTarget);
		const result = await getPlaybackDevices();
		if ('data' in result) setDevices(result.data);
		if ('data' in result) console.log(result.data);
	};

	const handleClose = () => setAnchorEl(null);

	const handleChangeDevice = async (deviceId: string) => {
		await setPlaybackDevice({ device_ids: [deviceId] });
	};

	return (
		<>
			<IconButton sx={{ color: 'white' }} onClick={handleClick}>
				<DevicesIcon sx={{ fontSize: 20 }} />
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					},
				}}
				transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}
				anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
			>
				{devices?.devices.map(device => (
					<MenuItem
						key={device.id}
						classes={{ root: styles.device }}
						className={device.is_active ? styles.active : ''}
						onClick={() => handleChangeDevice(device.id)}
					>
						{device.type === 'Computer' && <ComputerIcon sx={{ fontSize: 20 }} />}
						{device.type === 'Smartphone' && <SmartphoneIcon sx={{ fontSize: 20 }} />}
						{device.type === 'Speaker' && <SpeakerIcon sx={{ fontSize: 20 }} />}
						<div className={styles.device__name}>{device.name}</div>
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default DeviceController;
