import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Button from 'antd/es/button/button';

import '@app/scss/components/ui/productCard.scss';
import { ReactComponent as HeartIcon } from '@image/icon/heart.svg';

interface ProductCardProps {
	id: number;
	image: string;
	title: string;
	cost: number;

	isFavorite: boolean;
	// isSale?: boolean;
	// isNew?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
	const [like, setLike] = useState<boolean>(props.isFavorite);

	return (
		<div className="product-card">
			<div onClick={() => setLike((prev) => !prev)}>
				<HeartIcon className={clsx('product-card__like', like && '_active')} />
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
};
