import React from 'react';
import { Link } from 'react-router-dom';

import '@app/styles/components/ui/cardCategory.scss';

interface CardCategoryProps {
	title: string;
	image: string; 
	link: string;
}

export const CardCategory: React.FC<CardCategoryProps> = ({title, image, link}: CardCategoryProps) => {
	return (
		<Link to={link} className="card-category">
			<img src={image} alt={title} className="card-category__image" />
			<p className="card-category__title">{title}</p>
		</Link>
	);
};
