import React from 'react';

import { Carousel as CoreCarousel } from 'antd';
import { Button, ButtonType } from '@app/components/UI/Button/Button';
import { expandArrow } from '@image/icon/index';

import '@app/styles/components/ui/carousel.scss';
import { CarouselRef } from 'antd/es/carousel';

interface CarouselProps {
	photos: Array<string>;
	itemClassName: string;
}

export const Carousel: React.FC<CarouselProps> = ({ photos, itemClassName }: CarouselProps) => {
	const [carouselRef, setCarouselRef] = React.useState<CarouselRef | null>(null);

	return (
		<div className="carousel-container">
			<Button type={ButtonType.Link} onClick={carouselRef?.prev}>
				<img src={expandArrow} className="btn-left" />
			</Button>
			<CoreCarousel ref={setCarouselRef}>
				{photos.map((item: string) => (
					<img src={item} className={itemClassName} />
				))}
			</CoreCarousel>
			<Button type={ButtonType.Link} onClick={carouselRef?.next}>
				<img src={expandArrow} className="btn-right" />
			</Button>
		</div>
	);
};
