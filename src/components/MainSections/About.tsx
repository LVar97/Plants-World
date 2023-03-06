import React from 'react';

import Carousel from 'antd/lib/carousel';
import { ABOUT_TEXT } from '@app/vendor/texts';

import '@app/styles/components/about.scss';

export const About: React.FC = () => {
	return (
		<section className="about container">
			<h2 className="about__title title">About</h2>
			<div className="about__content">
				<Carousel></Carousel>

				<p className="about__text">{ABOUT_TEXT}</p>
			</div>
		</section>
	);
};
