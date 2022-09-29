import CircularProgress from '@mui/material/CircularProgress';
// Styles
import styles from './index.module.scss';

type LoadingScreenProps = {};

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
	return (
		<div className={styles.loading_screen}>
			<CircularProgress classes={{ root: styles.spinner_root, circle: styles.spinner }} />
		</div>
	);
};

export default LoadingScreen;
