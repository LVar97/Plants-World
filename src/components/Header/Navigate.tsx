import React from 'react';

import Dropdown from 'antd/lib/dropdown';
import Space from 'antd/lib/space';
import { Link } from 'react-router-dom';

interface IMenuItems {
	label: React.ReactNode;
	key: string;
}

interface IDropdownMenu {
	title: string;
	items: Array<IMenuItems>;
}

const shopItems = [
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
]

const DropdownMenu: React.FC<IDropdownMenu> = ({ title, items }: IDropdownMenu) => (
	<Dropdown menu={{ items }} trigger={['click']}>
		<a onClick={(e) => e.preventDefault()} className="navigate__title">
			<Space>
				{title}
			</Space>
		</a>
	</Dropdown>
);

export const Navigate = () => {
	return (
		<nav className="navigate">
			<DropdownMenu title="Shop" items={shopItems} />
			<DropdownMenu title="Information" items={[]} />

			<a>About</a>
			<a>Contact</a>
		</nav>
	);
};
