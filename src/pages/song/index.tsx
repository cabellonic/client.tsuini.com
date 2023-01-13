import { useEffect, useState } from 'react';
import { useCreateSongMutation, useGetMeQuery, useGetSongByIDQuery } from '@/services';
import { useParams } from 'react-router-dom';

const SongPage = () => {
	const { id } = useParams();
	const { data: user } = useGetMeQuery();
	const { data: song, isLoading } = useGetSongByIDQuery(id!);
	const [isFromSpotify, setIsFromSpotify] = useState<boolean>(false);
	const [createSong] = useCreateSongMutation();

	const handleCreateSong = async () => {
		if (!song || !user) return;
		await createSong({ ...song, uploader: user });
	};

	useEffect(() => {
		if (isLoading) return;
		if (song) setIsFromSpotify(!Boolean(song.uploader));
	}, [id, song, isLoading]);

	if (isLoading) return <h2>Loading...</h2>;

	if (!song) return <h2>No existe el songa...</h2>;

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
					Canción traida de spotify
				</span>
			)}
			<h2>Song: {song.name}</h2>
			<code>{JSON.stringify(song)}</code>
			{isFromSpotify && (
				<div>
					<p>La canción no existe</p>
					<button onClick={handleCreateSong}>CREAR!</button>
				</div>
			)}
		</div>
	);
};

export default SongPage;
