import React from 'react';
// Models
import { ISlide } from '@/app/models/Slide';
// Styles
import styles from './Thumbnail.module.scss';

type ThumbnailProps = {
	slide: ISlide;
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
