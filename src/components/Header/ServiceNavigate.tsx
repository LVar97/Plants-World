import React from 'react';
import { Link } from 'react-router-dom';

import { heart, bag, search, user } from '@image/icon/index';
import { Button, ButtonType } from '@app/components/UI/Button/Button';

export const ServiceNavigate: React.FC = () => {
	return (
		<nav className="navigate">
			<Button type={ButtonType.Link}>
				<img src={search} />
			</Button>
			<Link to="/favorites">
				<img src={heart} />
			</Link>
			<Link to="/bag">
				<img src={bag} />
			</Link>
			<Link to="/user">
				<img src={user} />
			</Link>
		</nav>
	);
};
