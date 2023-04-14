import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Radio, { RadioChangeEvent } from 'antd/es/radio';
import Button from 'antd/es/button/button';

import { ColorRadio } from '@app/components/UI/Radio/ColorRadio';
import { Carousel } from '@app/components/UI/Carousel/Carousel';

import {
	rightArrow, sun, globe, paw, drop, termo,
} from '@image/icon/index';

import '@app/styles/components/productPage.scss';

const goBack = -1;

const plant = {
	name: 'Ficus lyrata Bambino',
	type: 'Evergreen tree; indoor',
	price: [
		{
			size: '30-40',
			cost: 50,
		},
		{
			size: '80-90',
			cost: 75,
		},
		{
			size: '120-130',
			cost: 150,
		},
	],
	sizeInfo: 'Height of Ficus Lirata Bambino does not exceed 1.5 meters, it is important for placement of these plants in rooms', // not required
	distribution: 'tropical and lowland forests in Western Africa', // not required
	potColors: ['#4e6f50', '#2e343d', '#b27063', '#8b7756', '#fcecb9'],
	conditions: { // not required
		lighting: `It is better to place the pot with the plant closer to 
		the light source, then the color of the leaves will be more saturated, and the crown is compact. Can grow a short distance from the window.`,
		watering: `Watering should be moderate. 
		Between waterings the top layer of soil should dry on 2-3 sm. Avoid stagnation of water.`,
		temperature: `Prefers moderate air temperature in the range of +18 + 24 ° C. 
		Withstands a slight decrease or increase in temperature. Avoid drafts.`,
		danger: `Keep away from children and animals, because considered poisonous due to 
		the latex in the sap. Avoid this plant if you have a latex allergy.`,
	},
	images: [
		`https://images.unsplash.com/photo-1603095737639-f75134da4085
		?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80`,
		`https://images.unsplash.com/photo-1597912037121-c78840e356e7
		?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
		`https://images.unsplash.com/photo-1643819131797-46919f3009f7
		?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
	],
	interiorImage: `https://images.unsplash.com/photo-1619602707513-05a6ef9e3bd1
	?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
};

export const ProductPage = () => {
	const navigate = useNavigate();
	const [size, setSize] = useState<string>(plant.price.map((item) => item.size)[0]);
	const [price, setPrice] = useState<number>(0);

	useEffect(() => {
		const item = plant.price.find((el) => el.size === size);
		if (item) setPrice(item.cost);
	}, [size]);

	return (
		<div className="product-page text-size_small">
			<div className="product-page__wrapper container">
				<Button
					type="link"
					onClick={() => navigate(goBack)}
					className="product-page__back-btn text-size_small"
				>
					<img src={rightArrow} alt="Go Back button" className="icon-margin" />
				</Button>
				<div className="product-page__general-block">
					<div className="product-page__carousel">
						<Carousel photos={plant.images} itemClassName="product-page__carousel-item" />
					</div>
					<div className="product-page__general-info">
						<h2>{plant.name}</h2>
						<p>Plant type: {plant.type}</p>

						<div className="product-page__radio-group">
							<p>Choose plant height (sm)</p>
							<Radio.Group
								options={plant.price.map((item) => item.size)}
								onChange={(e: RadioChangeEvent) => setSize(e.target.value)}
								value={size}
								optionType="button"
								size="large"
							/>
						</div>
						<p>{plant.sizeInfo}</p>

						<div className="product-page__distribution">
							<img src={globe} alt="Globe" className="icon-margin" />
							<p>From {plant.distribution}</p>
						</div>

						<div className="product-page__radio-group">
							<p>Choose your pot color</p>
							<ColorRadio items={plant.potColors} />
						</div>

						<div className="product-page__action-block">
							<p className="text-size_medium">${price}</p>
							<Button
								shape="round"
								type="primary"
								size="large"
								className="product-page__action-btn"
							>
								Add to Bag
							</Button>
						</div>
					</div>
				</div>
			</div>

			<p className="product-page__record">We work directly with over 70 specialist growers to bring you the best quality plants.</p>

			{plant.conditions && (
				<div className="product-page__conditions-block">
					<img
						src={plant.interiorImage}
						alt="Big product"
						className="product-page__conditions-img"
					/>
					<ul className="product-page__conditions-list">
						<li>
							<img src={sun} alt="Sun" />
							{plant.conditions.lighting}
						</li>
						<li>
							<img src={drop} alt="Drop" />
							{plant.conditions.watering}
						</li>
						<li>
							<img src={termo} alt="Thermometer" />
							{plant.conditions.temperature}
						</li>
						<li>
							<img src={paw} alt="Paw" />
							{plant.conditions.danger}
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
