import React from 'react';

import { HEAD_TEXT } from '@app/vendor/texts';

import '@app/styles/components/head.scss';
import head from '@image/mainSection/head.jpg';

export const Head = () => {
	return (
		<div className="head">
			<div className="head__container">
				<h1 className="head__title">
					<span>Plants</span><br />
					World
				</h1>
				<p className="head__subtitle">{HEAD_TEXT}</p>
			</div>

			<img src={head} alt="Head" className="head__image" />
		</div>
	);
};
