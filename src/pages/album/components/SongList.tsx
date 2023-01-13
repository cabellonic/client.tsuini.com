import { AlbumEntity, SongEntity } from '@/models';
import { useSetPlaybackPlayMutation } from '@/services';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type SongListProps = {
	songs: Array<SongEntity>;
	album: AlbumEntity;
};

const SongList: React.FC<SongListProps> = ({ album, songs }) => {
	const [setPlay, { isLoading: isSettingPlay }] = useSetPlaybackPlayMutation();

	const handleClick = async (song: SongEntity) => {
		if (isSettingPlay) return;
		try {
			const context_uri = `spotify:album:` + album.id;
			const offset_uri = `spotify:track:` + song.id;
			setPlay({ context_uri, offset: { uri: offset_uri } });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='right'>#</TableCell>
						<TableCell>Nombre</TableCell>
						<TableCell align='right'>Duración</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{songs.map(song => (
						<TableRow key={song.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align='right' width='auto' onClick={() => handleClick(song)}>
								{song.trackNumber}
							</TableCell>
							<TableCell>{song.name}</TableCell>
							<TableCell align='right'>{song.duration}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SongList;
