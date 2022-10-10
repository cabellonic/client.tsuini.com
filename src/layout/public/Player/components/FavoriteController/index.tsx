import { useContext, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// Context
import { PlayerContext } from '../../context/player.context';
// Styles
import styles from './index.module.scss';

type Props = {};

const FavoriteController: React.FC<Props> = () => {
	const { currentTrack } = useContext(PlayerContext);
	const [liked, setLiked] = useState(false);

	const handleLike = () => setLiked(p => !p);

	useEffect(() => {
		if (!currentTrack) return;
	}, [currentTrack]);

	if (!currentTrack) return null;

	return (
		<IconButton sx={{ color: 'white' }} onClick={handleLike}>
			{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
		</IconButton>
	);
};

export default FavoriteController;
