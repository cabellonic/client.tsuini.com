import { useGetAlbumsQuery } from '@/services';
import { useGetMyPlaylistsQuery } from '@/services/playlist.service';
import { Link } from 'react-router-dom';
// Tabla
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const HomePage = () => {
	const { data: albums, isLoading } = useGetAlbumsQuery();
	const { data: playlists, isLoading: isLoadingPlaylist } = useGetMyPlaylistsQuery();

	if (!playlists) return <h2>No existe el artista...</h2>;

	if (isLoading || isLoadingPlaylist) return <h2>Loading...</h2>;

	return (
		<>
			<section>
				<h3>Playlists</h3>
				{playlists.map(playlist => {
					return (
						<div key={playlist.id}>
							<Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
							<hr />
						</div>
					);
				})}
			</section>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Albums</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{albums?.map(album => (
							<TableRow key={album.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell>
									<Link to={`/albums/${album.id}`}>{album.name}</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default HomePage;
