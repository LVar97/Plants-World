import React from 'react';
import { Button } from '../Button/Button';

import '@app/styles/components/ui/productCard.scss';
import { heart } from '@image/icon/index';
import { Link } from 'react-router-dom';

interface ProductCardProps {
	id: number;
	image: string;
	title: string;
	cost: number;

	isSale?: boolean;
	isNew?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => (
	<div className="product-card">
		<img src={heart} onClick={() => console.log('like')} className="product-card__like" />
		<Link to={`/product-page/${props.id}`} className="product-card__link">
			<img src={props.image} alt={props.title} className="product-card__image" />
			<div className="product-card__text-block text-size_small">
				<p className="product-card__title">{props.title}</p>
				<p className="product-card__cost">From {props.cost}$</p>
			</div>
			<Button>
				Add to Bag
			</Button>
		</Link>
	</div>
);
