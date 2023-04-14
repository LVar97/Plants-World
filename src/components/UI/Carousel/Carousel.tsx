import React from 'react';

import { Carousel as CoreCarousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

import { Button, ButtonType } from '@app/components/UI/Button/Button';

import { expandArrow } from '@image/icon/index';
import '@app/styles/components/ui/carousel.scss';

interface CarouselProps {
	photos: Array<string>;
	itemClassName: string;
}

export const Carousel: React.FC<CarouselProps> = ({ photos, itemClassName }: CarouselProps) => {
	const [carouselRef, setCarouselRef] = React.useState<CarouselRef | null>(null);

	return (
		<div className="carousel-container">
			<Button type={ButtonType.Link} onClick={carouselRef?.prev}>
				<img src={expandArrow} alt="Prev button" className="btn-left" />
			</Button>
			<CoreCarousel ref={setCarouselRef}>
				{photos.map((item: string) => (
					<img src={item} alt="Carousel item" className={itemClassName} key={item} />
				))}
			</CoreCarousel>
			<Button type={ButtonType.Link} onClick={carouselRef?.next}>
				<img src={expandArrow} alt="Next button" className="btn-right" />
			</Button>
		</div>
	);
};
