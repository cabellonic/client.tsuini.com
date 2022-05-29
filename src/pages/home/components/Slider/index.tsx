import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper';
// Components
import SliderPlaceholder from './SliderPlaceholder';
import Slide from './Slide';
import Thumbnail from './Thumbnail';
// Hooks
import { useSlider } from '@hooks/useSlider';
// Styles
import 'swiper/scss';
import styles from './index.module.scss';

type SliderProps = {};

const Slider: React.FC<SliderProps> = () => {
	const [thumbsSlider, setThumbsSlider] = useState<any>(null);
	const { isLoading, slides, error } = useSlider();

	if (isLoading) return <SliderPlaceholder />;

	if (error) {
		return (
			<div className={styles.slider}>
				<span className={styles.error_message}>
					Ocurrió un error al cargar el slider
				</span>
			</div>
		);
	}

	return (
		<>
			<Swiper
				className={styles.slider}
				modules={[Autoplay, Thumbs]}
				autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
				thumbs={{
					swiper: thumbsSlider,
					slideThumbActiveClass: styles.thumbnail_active,
				}}
				loop
			>
				{slides.map((slide, index) => (
					<SwiperSlide className={styles.slide_wrapper} key={slide.id}>
						<Slide slide={slide} reverse={index % 2 === 0} />
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				className={styles.thumbnails}
				modules={[Thumbs]}
				onSwiper={setThumbsSlider}
				slidesPerView={slides.length}
				watchSlidesProgress
			>
				{slides.map(slide => (
					<SwiperSlide className={styles.thumbnail_wrapper} key={slide.id}>
						<Thumbnail slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
