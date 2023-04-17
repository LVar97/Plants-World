import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import '@app/scss/components/header.scss';
import { Navigate } from '@app/components/Header/Navigate';
import { ServiceNavigate } from '@app/components/Header/ServiceNavigate';

import logo from '@image/logo.svg';

interface IMenuItems {
	label: React.ReactNode;
	key: string;
}

const shopItems: Array<IMenuItems> = [
	{
		label: <Link to="/indoor-plant">Indoor Plants</Link>,
		key: 'indoor-plant',
	},
	{
		label: <Link to="/outdoor-plant">Outdoor Plants</Link>,
		key: 'outdoor-plant',
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
	},
];

export const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<header className="site-header">
				<div className="container site-header__container">
					<div className="site-header__box">
						<Link to="/">
							<img src={logo} alt="Plants World" className="site-header__logo" />
						</Link>
						<Navigate onOpen={setOpen} open={open} />
					</div>

					<ServiceNavigate />
				</div>
			</header>
			<div className={clsx('navigate__dropdown', open && 'open-site-menu')}>
				<div className="container navigate__dropdown-container">
					{shopItems.map((item) => <p key={item.key} className="text-size_small">{item.label}</p>)}
				</div>
			</div>
		</>
	);
};
