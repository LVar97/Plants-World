import React from 'react';

import { ABOUT_TEXT } from '@app/vendor/texts';
import { Carousel } from '@app/components/UI/Carousel/Carousel';

import '@app/styles/components/about.scss';
import three from '@image/mainSection/aboutCarousel/room1.jpg';
import two from '@image/mainSection/aboutCarousel/withDog.jpg';
import one from '@image/mainSection/aboutCarousel/showcase.jpg';
import four from '@image/mainSection/aboutCarousel/people.jpg';
import five from '@image/mainSection/aboutCarousel/restaurant.jpg';

const images = [ one, two, three, four, five ];
export const About: React.FC = () => {
	return (
		<section className="about container">
			<h2 className="about__title title">About</h2>
			<div className="about__content">
				<div className="about__carousel">
					<Carousel photos={images} itemClassName="about__carousel-item" />
				</div>

				<p className="about__text">{ABOUT_TEXT}</p>
			</div>
		</section>
	);
};
