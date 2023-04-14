import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'antd/es/button/button';

import '@app/styles/components/ui/productCard.scss';
import { heart } from '@image/icon/index';

interface ProductCardProps {
	id: number;
	image: string;
	title: string;
	cost: number;

	// isSale?: boolean;
	// isNew?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => (
	<div className="product-card">
		<div onClick={() => console.log('like')}>
			<img
				src={heart}
				alt="Heart"
				className="product-card__like"
			/>
		</div>
		<Link to={`/product-page/${props.id}`} className="product-card__link">
			<img src={props.image} alt={props.title} className="product-card__image" />
			<div className="product-card__text-block text-size_small">
				<p className="product-card__title">{props.title}</p>
				<p className="product-card__cost">From {props.cost}$</p>
			</div>
			<Button
				shape="round"
				type="primary"
				size="large"
				// block
			>
				Add to Bag
			</Button>
		</Link>
	</div>
);
