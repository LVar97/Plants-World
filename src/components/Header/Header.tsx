import React from 'react';

import logo from '@image/logo.svg';
import '@app/styles/components/header.scss';
import { Navigate } from '@app/components/Header/Navigate';
import { ServiceNavigate } from '@app/components/Header/ServiceNavigate';

export const Header = () => {
	return (
		<header className="site-header">
			<div className="container site-header__container">
				<div className="site-header__box">
					<img src={logo} alt="Plants World" className="site-header__logo" />
					<Navigate />
				</div>
				
				<ServiceNavigate />
			</div>
		</header>
	);
};
