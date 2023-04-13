import React, { useState } from 'react';
import { Button, ButtonType } from '@app/components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '@app/components/UI/Carousel/Carousel';
import Radio, { RadioChangeEvent } from 'antd/es/radio';

import { rightArrow, sun, globe, paw, drop, termo } from '@image/icon/index';
import '@app/styles/components/productPage.scss';
const goBack = -1;

const plant = {
	name: 'Ficus lyrata Bambino',
	type: 'Evergreen tree; indoor',
	size: ['30-40', '80-90', '120-130'],
	sizeInfo: 'Height of Ficus Lirata Bambino does not exceed 1.5 meters, it is important for placement of these plants in rooms', // not required
	distribution: 'tropical and lowland forests in Western Africa',
	potColors: [],
	conditions: {  // not required
		lighting: 'It is better to place the pot with the plant closer to the light source, then the color of the leaves will be more saturated, and the crown is compact. Can grow a short distance from the window.',
		watering: 'Watering should be moderate. Between waterings the top layer of soil should dry on 2-3 sm. Avoid stagnation of water.',
		temperature: 'Prefers moderate air temperature in the range of +18 + 24 ° C. Withstands a slight decrease or increase in temperature. Avoid drafts.',
		danger: 'Keep away from children and animals, because considered poisonous due to the latex in the sap. Avoid this plant if you have a latex allergy.',
	},
	images: [
		'https://images.unsplash.com/photo-1603095737639-f75134da4085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
		'https://images.unsplash.com/photo-1597912037121-c78840e356e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
		'https://images.unsplash.com/photo-1643819131797-46919f3009f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
	],
	interiorImage: 'https://images.unsplash.com/photo-1619602707513-05a6ef9e3bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
};

export const ProductPage = () => {
	const navigate = useNavigate();
	const [size, setSize] = useState<string>('');

	return (
		<div className="product-page text-size_small">
			<div className="product-page__wrapper container">
				<Button type={ButtonType.Link} onClick={() => navigate(goBack)}>
					<img src={rightArrow} alt="Go Back button" className="product-page__back-btn" />
				</Button>
				<div className="product-page__general-block">
					<div className="product-page__carousel">
						<Carousel photos={plant.images} itemClassName="product-page__carousel-item" />
					</div>
					<div className="product-page__general-info">
						<h2>{plant.name}</h2>
						<p>Plant type: {plant.type}</p>

						<Radio.Group options={plant.size} onChange={(e: RadioChangeEvent) => setSize(e.target.value)} value={size} optionType="button" />
						<p>{plant.sizeInfo}</p>
						<div className="product-page__distribution">
							<img src={globe} className="icon-margin"/>
							<p>From {plant.distribution}</p>
						</div>
					</div>
				</div>
			</div>

			<p className="product-page__record">We work directly with over 70 specialist growers to bring you the best quality plants.</p>
			
			{plant.conditions && (
				<div className="product-page__conditions-block">
					<img src={plant.interiorImage} alt="Big product photo" className="product-page__conditions-img" />
					<ul className="product-page__conditions-list">
						<li>
							<img src={sun} />
							{plant.conditions.lighting}
						</li>
						<li>
							<img src={drop} />
							{plant.conditions.watering}
						</li>
						<li>
							<img src={termo} />
							{plant.conditions.temperature}
						</li>
						<li>
							<img src={paw} />
							{plant.conditions.danger}
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}