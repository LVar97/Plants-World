import React from 'react';

import clsx from 'clsx';
import moment from 'moment';

import { expandArrow } from '@image/icon/index';
import '@app/styles/components/footer.scss';

interface IDropListItem {
	title: string;
	link: string;
}

const company = [
	{
		title: 'About Us',
		link: '',
	},
	{
		title: 'Contact',
		link: '',
	}
];

const info = [
	{
		title: 'Plant Shipping Restrictions',
		link: '',
	},
];

interface DropListProps {
	list: Array<IDropListItem>;
	title: string;
}

const DropList: React.FC<DropListProps> = ({ list, title }: DropListProps) => {
	const [isVisible, setIsVisible] = React.useState<boolean>(false);

	return (
		<div className={clsx('drop-list', isVisible && 'drop-list_active')}>
			<div className="drop-list__title-block" onClick={() => setIsVisible(!isVisible)}>
				<h4 className="drop-list__title text-size_medium">{title}</h4>
				<img src={expandArrow} className="drop-list__arrow" />
			</div>
			<ul className="drop-list__list">
				{list.map((item) => (
					<li key={item.title} className="text-size_small">
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="site-footer__content container">
				<div className="site-footer__info-block">
					<DropList list={company} title="Company" />
					<DropList list={info} title="Information" />
				</div>
				<div className="site-footer__social-block">

				</div>
			</div>
			<p className="site-footer__copyright text-size_small">
				&copy; {moment().format('YYYY')} Karelina Varvara
			</p>
		</footer>
	);
};
