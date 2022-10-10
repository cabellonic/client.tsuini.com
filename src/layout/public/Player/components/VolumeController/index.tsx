import { useContext, useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import VolumeDownIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeMuteIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpIcon from '@mui/icons-material/VolumeUpRounded';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
// Context
import { PlayerContext } from '../../context/player.context';
// Utils
import * as utils from '@/utils';
// Styles
import styles from './index.module.scss';

type SoundSliderProps = {
	volume: number;
	handleChange: (event: any, value: number | number[]) => void;
	handleChangeCommitted: (event: any, value: number | number[]) => void;
	isOnMobile?: boolean;
};

const SoundSlider: React.FC<SoundSliderProps> = ({ volume, handleChange, handleChangeCommitted, isOnMobile }) => {
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
			onChange={handleChange}
			onChangeCommitted={handleChangeCommitted}
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

const DEFAULT_VOLUME = parseFloat(utils.getFromLocalStorage('tsuini-player-volume', '0.3'));

const VolumeController: React.FC<VolumeControllerProps> = () => {
	const { tsuiniPlayer } = useContext(PlayerContext);
	const [volume, setVolume] = useState<number>(DEFAULT_VOLUME);
	const [savedVolume, setSavedVolume] = useState<number>(DEFAULT_VOLUME);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const isOnMobile = useMediaQuery('(max-width: 768px)');

	const toggleVolumeMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(p => (!p ? event.currentTarget : null));
	};

	const handleChange = async (_event: any, value: number | number[]) => {
		if (Array.isArray(value)) return;

		try {
			if (tsuiniPlayer) await tsuiniPlayer.setVolume(value);
			setVolume(value);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChangeCommitted = async (_event: any, value: number | number[]) => {
		if (value > 0) utils.setToLocalStorage('tsuini-player-volume', value);
	};

	const handleMute = async () => {
		if (volume > 0) {
			try {
				if (tsuiniPlayer) await tsuiniPlayer.setVolume(0);
				setSavedVolume(volume);
				setVolume(0);
			} catch (error) {
				console.error(error);
			}
		} else {
			try {
				if (tsuiniPlayer) await tsuiniPlayer.setVolume(savedVolume);
				setVolume(savedVolume);
			} catch (error) {
				console.error(error);
			}
		}
	};

	useEffect(() => {
		const fetchVolume = async () => {
			if (!tsuiniPlayer) return;

			try {
				const volume = await tsuiniPlayer.getVolume();
				setVolume(volume);
				setSavedVolume(volume);
			} catch (error) {
				console.error(error);
			}
		};
		fetchVolume();
	}, [tsuiniPlayer]);

	return (
		<>
			<IconButton
				sx={{ color: 'white', mr: 1 }}
				onClick={e => {
					if (isOnMobile) return toggleVolumeMenu(e);
					else handleMute();
				}}
			>
				{volume === 0 && <VolumeOffIcon sx={{ fontSize: 22 }} />}
				{volume > 0 && volume < 0.2 && <VolumeMuteIcon sx={{ fontSize: 22 }} />}
				{volume > 0.2 && volume < 0.5 && <VolumeDownIcon sx={{ fontSize: 22 }} />}
				{volume >= 0.5 && <VolumeUpIcon sx={{ fontSize: 22 }} />}
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
					<SoundSlider
						volume={volume}
						handleChange={handleChange}
						handleChangeCommitted={handleChangeCommitted}
						isOnMobile
					/>
				</Popover>
			) : (
				<SoundSlider volume={volume} handleChange={handleChange} handleChangeCommitted={handleChangeCommitted} />
			)}
		</>
	);
};

export default VolumeController;
