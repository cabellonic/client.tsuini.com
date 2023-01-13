import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { PlayerContext } from '../../context/player.context';
// Styles
import styles from './index.module.scss';

type Props = {};

const SongImage: React.FC<Props> = () => {
	const { currentTrack } = useContext(PlayerContext);

	if (!currentTrack) return null;

	return (
		<Link to={`/albums/${currentTrack.album?.uri?.split(':')[2]}`} className={styles.song_image}>
			<img src={currentTrack.album?.images[0]?.url} alt={currentTrack.name} />
		</Link>
	);
};

export default SongImage;
