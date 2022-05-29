import React from 'react';
import { Link } from 'react-router-dom';
// Models
import { SlideEntry } from '@models/Slide';
// Styles
import styles from './Slide.module.scss';

type SlideProps = {
	slide: SlideEntry;
	reverse: boolean;
};

const Slide: React.FC<SlideProps> = ({ slide, reverse }) => {
	const { image, link, title, description, button, imageOnly, imageMobile } =
		slide;

	if (imageOnly) {
		return (
			<div className={`${styles.slide} ${styles.image_only}`}>
				<Link to={link} className={styles.image_wrapper}>
					<img
						className={imageMobile ? styles.image_desktop : ''}
						src={image}
						alt={title}
					/>
					{imageMobile && (
						<img
							className={styles.image_mobile}
							src={imageMobile}
							alt={title}
						/>
					)}
				</Link>
			</div>
		);
	}

	return (
		<div className={`${styles.slide} ${reverse ? styles.reverse : ''}`}>
			<div className={styles.image_wrapper}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
				<Link className={styles.button} to={link}>
					{button || 'Ver más'}
				</Link>
			</div>
		</div>
	);
};

export default Slide;
