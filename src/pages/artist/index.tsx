import { useEffect, useState } from 'react';
import { useCreateArtistMutation, useGetArtistByIDQuery, useGetMeQuery } from '@/services';
import { useParams } from 'react-router-dom';

const ArtistPage = () => {
	const { id } = useParams();
	const { data: user } = useGetMeQuery();
	const { data: artist, isLoading } = useGetArtistByIDQuery(id!);
	const [isFromSpotify, setIsFromSpotify] = useState<boolean>(false);
	const [createArtist] = useCreateArtistMutation();

	const handleCreateArtist = async () => {
		if (!artist || !user) return;
		await createArtist({ ...artist, uploader: user });
	};

	useEffect(() => {
		if (isLoading) return;
		if (artist) setIsFromSpotify(!Boolean(artist.uploader));
	}, [id, artist, isLoading]);

	if (isLoading) return <h2>Loading...</h2>;

	if (!artist) return <h2>No existe el artista...</h2>;

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
					Artista traido de spotify
				</span>
			)}
			<h2>Artist: {artist.name}</h2>
			<code>{JSON.stringify(artist)}</code>
			{isFromSpotify && (
				<div>
					<p>El Artista no existe</p>
					<button onClick={handleCreateArtist}>CREAR!</button>
				</div>
			)}
		</div>
	);
};

export default ArtistPage;
