import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper';
// Components
import Slide from './Slide';
import Thumbnail from './Thumbnail';
// Data
import { slider } from '@/app/data/slider';
// Styles
import 'swiper/scss';
import styles from './index.module.scss';

type SliderProps = {};

const Slider: React.FC<SliderProps> = () => {
	const [thumbsSlider, setThumbsSlider] = useState<any>(null);

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
				{slider.map((slide, index) => (
					<SwiperSlide className={styles.slide_wrapper} key={slide.id}>
						<Slide slide={slide} reverse={index % 2 === 0} />
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				className={styles.thumbnails}
				modules={[Thumbs]}
				onSwiper={setThumbsSlider}
				slidesPerView={slider.length}
				watchSlidesProgress
			>
				{slider.map(slide => (
					<SwiperSlide className={styles.thumbnail_wrapper} key={slide.id}>
						<Thumbnail slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
