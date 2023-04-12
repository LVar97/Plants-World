import React from 'react';
import { Link } from 'react-router-dom';

import '@app/styles/components/ui/categoryCard.scss';

interface CategoryCardProps {
	title: string;
	image: string; 
	link: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({title, image, link}: CategoryCardProps) => {
	return (
		<Link to={link} className="card-category">
			<img src={image} alt={title} className="card-category__image" />
			<p className="card-category__title text-size_medium-m">{title}</p>
		</Link>
	);
};
