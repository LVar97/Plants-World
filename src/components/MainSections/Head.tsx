import React from 'react';

import { HEAD_TEXT } from '@app/vendor/texts';
import { Button, ButtonType } from '@app/components/UI/Button/Button';

import '@app/styles/components/head.scss';
import head from '@image/mainSection/head.jpg';

export const Head = () => {
	return (
		<div className="head">
			<div className="container">
				<h1>Plants World</h1>
				<p>{HEAD_TEXT}</p>
				<Button type={ButtonType.Fill}>Shop Now</Button>
			</div>

			<img src={head} alt="Head" className="head__image" />
		</div>
	);
};
