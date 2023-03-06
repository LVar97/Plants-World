import React from 'react';
import { ICategory } from '@app/objects/Category';
import { CardCategory } from '@app/components/UI/CardCategory/CardCategory';

import '@app/styles/components/categories.scss';
import indoor from '@image/mainSection/indoor.jpg';
import outdoor from '@image/mainSection/outdoor.jpg';

import newPlants from '@image/mainSection/new.jpg';

const categories: Array<ICategory> = [
	{
		title: 'Indoor plant',
		image: indoor,
		link: '/indoor-plant',
	},
	{
		title: 'Outdoor plant',
		image: outdoor,
		link: '/outdoor-plant',
	},
	{
		title: 'New',
		image: newPlants,
		link: '/new',
	},
];

export const Categories: React.FC = () => {
	return (
		<section className="categories container">
			<h2 className="categories__title title">Categories</h2>
			<div className="categories__list">
				{categories.map((item: ICategory) => <CardCategory {...item} />)}
			</div>
		</section>
	);
};