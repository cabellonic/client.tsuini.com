import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { PlayerContext } from '../../context/player.context';
// Styles
import styles from './index.module.scss';

type Props = {};

const SongArtist: React.FC<Props> = () => {
	const { currentTrack } = useContext(PlayerContext);

	if (!currentTrack) return null;

	return (
		<div className={styles.song_artists}>
			{currentTrack.artists.map((artist, index) => (
				<span key={artist.uri}>
					<Link className={styles.song_artist} to='/'>
						{artist.name}
					</Link>
					{index < currentTrack.artists.length - 1 && ', '}
				</span>
			))}
		</div>
	);
};

export default SongArtist;
