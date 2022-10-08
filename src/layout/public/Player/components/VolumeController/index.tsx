import React from 'react';
import Slider from '@mui/material/Slider';
import VolumeDownIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeMuteIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpIcon from '@mui/icons-material/VolumeUpRounded';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import useMediaQuery from '@mui/material/useMediaQuery';
// Utils
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage.utils';
// Styles
import styles from './index.module.scss';

type SoundSliderProps = {
	volume: number;
	handleVolume: (event: any, value: number | number[]) => void;
	isOnMobile?: boolean;
};

const SoundSlider: React.FC<SoundSliderProps> = ({ volume, handleVolume, isOnMobile }) => {
	return (
		<Slider
			aria-label='Volume'
			orientation={isOnMobile ? 'vertical' : 'horizontal'}
			defaultValue={0.3}
			value={volume}
			classes={{
				vertical: styles.slider_vertical,
			}}
			min={0}
			max={1}
			step={0.01}
			onChange={handleVolume}
			sx={{
				// display: { xs: 'none', md: 'flex' },
				height: 6,
				maxWidth: 120,
				color: 'white',
				'& .MuiSlider-track': {
					border: 'none',
				},
				'& .MuiSlider-thumb': {
					width: 6,
					height: 6,
					backgroundColor: '#fff',
					'&:before': {
						boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
					},
					'&:hover, &.Mui-focusVisible, &.Mui-active': {
						boxShadow: 'none',
					},
					'&.Mui-active': {
						width: 16,
						height: 16,
					},
				},
			}}
		/>
	);
};

type VolumeControllerProps = {};

const initialVolume = () => +getFromLocalStorage('tsuini-player-saved-volume', '0.33');

const VolumeController: React.FC<VolumeControllerProps> = () => {
	const [volume, setVolume] = React.useState(initialVolume);
	const [savedVolume, setSavedVolume] = React.useState(initialVolume);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const isOnMobile = useMediaQuery('(max-width: 768px)');

	const toggleVolumeMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(p => (!p ? event.currentTarget : null));
	};

	const handleMuted = () => {
		setVolume(previousVolume => {
			// Si está muteado, desmuteo con el volumen anterior
			if (previousVolume === 0) {
				const savedVolumeFromLocalStorage = getFromLocalStorage('tsuini-player-saved-volume', '0.33');
				setToLocalStorage('tsuini-player-volume', savedVolume || savedVolumeFromLocalStorage);

				if (savedVolume) return savedVolume;
				return +savedVolumeFromLocalStorage;
			}
			// Si no está muteado, guardo el volumen anterior y lo muteo
			setSavedVolume(previousVolume);
			setToLocalStorage('tsuini-player-saved-volume', previousVolume.toString());
			setToLocalStorage('tsuini-player-volume', '0');
			return 0;
		});
	};

	const handleVolume = (_event: Event, newValue: number | number[]) => {
		setToLocalStorage('tsuini-player-volume', newValue.toString());
		setVolume(newValue as number);
	};

	return (
		<>
			<IconButton
				sx={{ color: 'white', mr: 1 }}
				onClick={e => {
					if (isOnMobile) return toggleVolumeMenu(e);
					else handleMuted();
				}}
			>
				{volume === 0 && <VolumeOffIcon sx={{ fontSize: 22 }} />}
				{volume > 0 && volume < 20 && <VolumeMuteIcon sx={{ fontSize: 22 }} />}
				{volume > 20 && volume < 50 && <VolumeDownIcon sx={{ fontSize: 22 }} />}
				{volume >= 50 && <VolumeUpIcon sx={{ fontSize: 22 }} />}
			</IconButton>

			{isOnMobile ? (
				<Popover
					anchorEl={anchorEl}
					id='account-menu'
					open={open}
					onClose={toggleVolumeMenu}
					PaperProps={{
						elevation: 1,
						sx: {
							backgroundColor: 'rgba(19, 50, 88)',
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
						},
					}}
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					transformOrigin={{ vertical: 'top', horizontal: 'center' }}
				>
					<SoundSlider volume={volume} handleVolume={handleVolume} isOnMobile />
				</Popover>
			) : (
				<SoundSlider volume={volume} handleVolume={handleVolume} />
			)}
		</>
	);
};

export default VolumeController;
