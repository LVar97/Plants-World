import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IProduct } from '@app/objects/Product';
import { ProductCard } from '@app/components/UI/ProductCard/ProductCard';

import '@app/styles/components/catalog.scss';
import Breadcrumb from 'antd/es/breadcrumb';
import { useBreadCrumb } from '@app/hooks/useBreadCrumb';

interface CatalogProps {
	list: Array<IProduct>;
	title: string;
}

const breadcrumbNameMap: Record<string, string> = {
  '/indoor-plant': 'Indoor plants',
	'/outdoor-plant': 'Outdoor plants',
	'/sale': 'Sale',
	'/new': 'New',
	'/seeds': 'Seeds',
};

export const Catalog: React.FC<CatalogProps> = ({ list, title }: CatalogProps) => {
	const { breadcrumbItems } = useBreadCrumb(breadcrumbNameMap);

	return (
		<div className="container catalog">
			<Breadcrumb items={breadcrumbItems} separator="|" className="catalog__breadcrumb" />
			<h2 className="catalog__title title">{title}</h2>
			<div className="catalog__product-list-wrap">
				{list.map((item: IProduct) => <ProductCard {...item} />)}
			</div>
		</div>
	);
}