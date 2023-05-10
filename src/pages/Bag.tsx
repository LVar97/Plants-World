import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table, { ColumnsType } from 'antd/es/table';
import Button from 'antd/es/button';
import { DeleteOutlined } from '@ant-design/icons';

import { IProduct } from '@app/objects/Product';
import { indoorList } from '@app/common/ProductsLists';
import { Counter } from '@app/components/UI/Counter/Counter';

import '@app/scss/components/bag.scss';
import { rightArrow } from '@image/icon/index';

const columns: ColumnsType<IProduct> = [
	{
		title: 'Image',
		dataIndex: 'image',
		key: 'image',
		width: 150,
		render: (value: string) => <img src={value} alt="product" style={{ width: 150, height: 150, objectFit: 'cover' }} />,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		className: 'text-size_small',
	},
	{
		title: 'Pot color',
		dataIndex: 'potColor',
		key: 'potColor',
		render: (color: string) => (
			<div
				style={{
					width: 20, height: 20, borderRadius: '50%', background: color,
				}}
			/>
		),
	},
	{
		title: 'Price',
		dataIndex: 'cost',
		key: 'cost',
		className: 'text-size_small',
	},
	{
		title: 'Count',
		dataIndex: 'count',
		key: 'count',
		render: (value: number) => (
			<Counter
				count={value}
				onChange={(count: number) => console.log(count)}
				max={10}
				min={1}
			/>
		),
	},
	{
		title: 'Action',
		dataIndex: '',
		key: 'x',
		render: (record: IProduct) => (
			<Button
				icon={<DeleteOutlined />}
				type="text"
				size="large"
				onClick={() => console.log(record.id)}
			/>
		),
	},
];
const goBack = -1;

export const Bag = () => {
	const navigate = useNavigate();

	const total = indoorList.reduce((prev, value) => value.cost + prev, 0);

	return (
		<div className="bag container">
			<Button
				type="link"
				onClick={() => navigate(goBack)}
				className="bag__back-btn back-btn text-size_small"
			>
				<img src={rightArrow} alt="Go Back button" className="icon-margin" />
			</Button>
			<h2 className="bag__title title">Bag</h2>
			<Table
				columns={columns}
				dataSource={indoorList}
				showHeader={false}
				className="bag__table"
				pagination={{
					hideOnSinglePage: true,
				}}
			/>
			<div className="bag__action-block">
				<p className="text-size_small">Total: <span className="rounded-field">{total}</span></p>
				<Button
					shape="round"
					type="primary"
					size="large"
				>
					Pay
				</Button>
			</div>
		</div>
	);
};
