import React from 'react';

import { ABOUT_TEXT } from '@app/vendor/texts';

import '@app/styles/components/advantages.scss';

export const Advantages: React.FC = () => {
	return (
		<section className="advantages">
			<h2 className="advantages__title title">Our advantages</h2>
			<div className="advantages__container container">
				<div className="advantages__content"></div>
			</div>
		</section>
	);
};
