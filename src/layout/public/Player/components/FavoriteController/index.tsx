import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// Styles
import styles from './index.module.scss';

type Props = {};

const FavoriteController: React.FC<Props> = () => {
	const [liked, setLiked] = React.useState(false);

	const handleLike = () => setLiked(p => !p);

	return (
		<IconButton sx={{ color: 'white' }} onClick={handleLike}>
			{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
		</IconButton>
	);
};

export default FavoriteController;
