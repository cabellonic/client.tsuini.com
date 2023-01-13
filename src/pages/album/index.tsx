import { useCreateAlbumMutation, useGetAlbumByIDQuery, useGetMeQuery } from '@/services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongList from './components/SongList';

const AlbumPage = () => {
	const { id } = useParams();
	const { data: user } = useGetMeQuery();
	const { data: album, isLoading } = useGetAlbumByIDQuery(id!);
	const [isFromSpotify, setIsFromSpotify] = useState<boolean>(false);
	const [createAlbum] = useCreateAlbumMutation();

	const handleCreateAlbum = async () => {
		if (!album || !user) return;
		await createAlbum({ ...album, uploader: user });
	};

	useEffect(() => {
		if (isLoading) return;
		if (album) setIsFromSpotify(!Boolean(album.uploader));
	}, [id, album, isLoading]);

	if (isLoading) return <h2>Loading...</h2>;

	if (!album) return <h2>No existe el album...</h2>;

	return (
		<div>
			{isFromSpotify && (
				<span
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '2rem',
						width: '100%',
						backgroundColor: 'red',
						color: 'white',
					}}
				>
					Álbum traido de Spotify
				</span>
			)}
			<h2>Album: {album.name}</h2>
			<SongList album={album} songs={album.songs} />
			<hr />
			{isFromSpotify && (
				<div>
					<p>El álbum no existe</p>
					<button onClick={handleCreateAlbum}>CREAR!</button>
				</div>
			)}
			<hr />
		</div>
	);
};

export default AlbumPage;
