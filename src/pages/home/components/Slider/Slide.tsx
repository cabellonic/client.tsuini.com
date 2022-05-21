import React from 'react';
import { Link } from 'react-router-dom';
// Models
import { ISlide } from '@/app/models/Slide';
// Styles
import styles from './Slide.module.scss';

type SlideProps = {
	slide: ISlide;
	reverse: boolean;
};

const Slide: React.FC<SlideProps> = ({ slide, reverse }) => {
	const { image, link, title, description, button } = slide;

	if (!description) {
		return (
			<div className={styles.slide}>
				<Link to={link} className={styles.image_only_wrapper}>
					<img src={image} alt={title} />
				</Link>
			</div>
		);
	}

	return (
		<div className={`${styles.slide} ${reverse ? styles.reverse : ''}`}>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
				<Link className={styles.button} to={link}>
					{button || 'Ver más'}
				</Link>
			</div>
			<div className={styles.image_wrapper}>
				<img src={image} alt={title} />
			</div>
		</div>
	);
};

export default Slide;
