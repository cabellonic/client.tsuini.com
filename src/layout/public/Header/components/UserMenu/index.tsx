import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// MUI Components
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
// MUI Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
// Services
import { useGetMeQuery, useLogoutMutation } from '@/services';
// Styles
import styles from './index.module.scss';

type Props = {};

const UserMenu: React.FC<Props> = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const { data: user } = useGetMeQuery();
	const [logout] = useLogoutMutation();

	const handleLogout = async () => {
		await logout();
		localStorage.removeItem('accessToken');
		navigate(0);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (!user) return null;

	return (
		<nav className={styles.user_menu}>
			<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
				<Badge badgeContent={4} color='error'>
					<MailIcon />
				</Badge>
			</IconButton>

			<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
				<Badge badgeContent={170} color='error'>
					<NotificationsIcon />
				</Badge>
			</IconButton>

			<Tooltip title='Perfil de usuario'>
				<MenuItem className={styles.user_info} onClick={handleClick}>
					<Avatar alt={user.displayName} sx={{ width: 35, height: 35 }} src={user.avatar} />
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>{user.displayName}</Box>
					<KeyboardArrowDownIcon />
				</MenuItem>
			</Tooltip>

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
						mt: -0.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<Link to='/me' className={styles.dropdown_link}>
					<MenuItem>
						<Avatar alt={user.displayName} src={user.avatar} />
						Ir a mi perfil
					</MenuItem>
				</Link>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<PersonAdd fontSize='small' />
					</ListItemIcon>
					Realizar pedido
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize='small' />
					</ListItemIcon>
					Configuración
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Cerrar sesión
				</MenuItem>
			</Menu>
		</nav>
	);
};

export default UserMenu;
