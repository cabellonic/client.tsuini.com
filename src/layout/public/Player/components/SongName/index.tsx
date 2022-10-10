import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { PlayerContext } from '../../context/player.context';
// Styles
import styles from './index.module.scss';

type Props = {};

const SongName: React.FC<Props> = () => {
	const { currentTrack } = useContext(PlayerContext);

	if (!currentTrack) return null;

	return (
		<Link className={styles.song_name} to='/'>
			{currentTrack.name}
		</Link>
	);
};

export default SongName;
