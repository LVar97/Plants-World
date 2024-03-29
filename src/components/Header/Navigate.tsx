import React from 'react';
import clsx from 'clsx';

import { expandArrow } from '@image/icon/index';

interface NavigateProps {
	open: boolean;
	onOpen: (value: boolean) => void;
}

export const Navigate: React.FC<NavigateProps> = (props: NavigateProps) => {
	return (
		<nav className="navigate text-size_small">
			<div className="navigate__dropdown-label" onClick={() => props.onOpen(!props.open)}>
				<p>Catalog</p>
				<img src={expandArrow} alt="Arrow" className={clsx('dropdown-btn', props.open && 'dropdown-btn_open')} />
			</div>
			<a>About</a>
			<a>Information</a>
			<a>Contact</a>
		</nav>
	);
};
