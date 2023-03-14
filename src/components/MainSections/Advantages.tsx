import React from 'react';

import { QUALITY_TEXT, DELIVERY_TEXT, SECURE_TEXT } from '@app/vendor/texts';

import '@app/styles/components/advantages.scss';
import { cardSecurity, delivery, quarantee } from '@image/icon/index';

const advantages = [
	{
		icon: quarantee,
		title: 'Quality',
		text: QUALITY_TEXT,
	},
	{
		icon: delivery,
		title: 'Delivery',
		text: DELIVERY_TEXT,
	},
	{
		icon: cardSecurity,
		title: 'Secure payment',
		text: SECURE_TEXT,
	}
];

export const Advantages: React.FC = () => {
	return (
		<section className="advantages">
			<div className="advantages__container container">
				<h2 className="advantages__title title">Our advantages</h2>
				<div className="advantages__content">
					{advantages.map((item) => (
						<div className="advantages__item">
							<img src={item.icon} alt={`${item.title} icon`} className="advantages__icon" />
							<h4 className="advantages__subtitle">{item.title}</h4>
							<p className="advantages__text">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
