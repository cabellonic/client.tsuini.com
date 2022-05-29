import React from 'react';
// Models
import { SlideEntry } from '@models/Slide';
// Styles
import styles from './Thumbnail.module.scss';

type ThumbnailProps = {
	slide: SlideEntry;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ slide }) => {
	return (
		<div className={styles.thumbnail} key={slide.id}>
			<span className={styles.thumbnail_text} key={slide.id}>
				{slide.title}
			</span>
		</div>
	);
};

export default Thumbnail;
