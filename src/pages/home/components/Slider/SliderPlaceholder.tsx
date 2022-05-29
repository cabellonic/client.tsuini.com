import React from 'react';
// Components
import PlaceholderAnimation from '@components/Placeholder';
// Styles
import styles from './SliderPlaceholder.module.scss';

const SliderPlaceholder: React.FC = () => {
	return (
		<>
			<div className={styles.slide_placeholder}>
				<PlaceholderAnimation />
			</div>
			<div className={styles.thumbs_placeholder}>
				<div className={styles.thumbs_placeholder_wrapper}>
					{Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className={styles.thumb_placeholder}>
							<PlaceholderAnimation />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SliderPlaceholder;
