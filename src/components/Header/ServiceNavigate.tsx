import React from 'react';
import { Link } from 'react-router-dom';

import { bag, user } from '@image/icon/index';

export const ServiceNavigate: React.FC = () => {
	return (
		<nav className="navigate">
			<Link to="/bag">
				<img src={bag} alt="Bag" />
			</Link>
			<Link to="/user">
				<img src={user} alt="User" />
			</Link>
		</nav>
	);
};
