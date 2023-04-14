import React from 'react';
import { Link } from 'react-router-dom';

import { Button, ButtonType } from '@app/components/UI/Button/Button';

import {
	heart, bag, search, user,
} from '@image/icon/index';

export const ServiceNavigate: React.FC = () => {
	return (
		<nav className="navigate">
			<Button type={ButtonType.Link}>
				<img src={search} alt="Search" />
			</Button>
			<Link to="/favorites">
				<img src={heart} alt="Like" />
			</Link>
			<Link to="/bag">
				<img src={bag} alt="Bag" />
			</Link>
			<Link to="/user">
				<img src={user} alt="User" />
			</Link>
		</nav>
	);
};
