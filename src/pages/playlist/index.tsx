import { useGetPlaylistByIDQuery } from '@/services/playlist.service';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
	const { id } = useParams();
	const { data: playlist, isLoading } = useGetPlaylistByIDQuery(id!);

	if (isLoading) return <h2>Loading...</h2>;

	if (!playlist) return <h2>No existe el artista...</h2>;

	return (
		<div>
			<h3>{playlist.name}</h3>
			{playlist.description && <p>{playlist.description}</p>}
			<small>Total songs: {playlist.total_songs}</small>
			<hr />
			<section>
				{playlist.songs.map(song => (
					<div key={song.id}>
						<span>{song.name}</span>
						<span>- {song.added_at}</span>
						<span>- {song.added_by}</span>
					</div>
				))}
			</section>
		</div>
	);
};

export default PlaylistPage;
