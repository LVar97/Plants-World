import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import logo from '@image/logo.svg';
import '@app/styles/components/header.scss';
import { Navigate } from '@app/components/Header/Navigate';
import { ServiceNavigate } from '@app/components/Header/ServiceNavigate';

interface IMenuItems {
	label: React.ReactNode;
	key: string;
}

const shopItems: Array<IMenuItems> = [
	{
		label: <Link to="/indoor-plants">Indoor Plants</Link>,
		key: 'indoor-plants',
	},
	{
		label: <Link to="/outdoor-plants">Outdoor Plants</Link>,
		key: 'outdoor-plants',
	},
	{
		label: <Link to="/seeds">Seeds</Link>,
		key: 'seeds',
	},
	{
		label: <Link to="/new">New</Link>,
		key: 'new',
	},
	{
		label: <Link to="/accesorise">Accesorise</Link>,
		key: 'accesorise',
	},
	{
		label: <Link to="/sale">Sale</Link>,
		key: 'sale',
	}
];

export const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<header className="site-header">
				<div className="container site-header__container">
					<div className="site-header__box">
						<img src={logo} alt="Plants World" className="site-header__logo" />
						<Navigate onOpen={setOpen} open={open} />
					</div>
					
					<ServiceNavigate />
				</div>
			</header>
			<div className={clsx('navigate__dropdown', open && 'open-site-menu')}>
				<div className="container navigate__dropdown-container">
					{shopItems.map((item) => <div key={item.key}>{item.label}</div>)}
				</div>
			</div>
		</>
	);
};
