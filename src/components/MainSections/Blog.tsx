import React from 'react';

import blogI from '@image/mainSection/blog-1.jpg';
import blogII from '@image/mainSection/blog-2.jpg';
import blogIII from '@image/mainSection/blog-3.jpg';
import { Link } from 'react-router-dom';

import { rightArrow } from '@app/image/icon';
import '@app/styles/components/blog.scss';

const articles = [
	{
		title: 'How to choose houseplants in the store',
		image: blogI,
		text: 'As with any business, you should start by answering the right questions. Here are some of the answers...',
		link: '/blog?3651',
	},
	{
		title: 'Mistakes in caring for houseplants',
		image: blogII,
		text: 'Laziness is the main enemy of all our problems. The person is arranged so that he wants to get the maximum result and with...',
		link: '/blog?3652',
	},
	{
		title: 'Which pot to choose for a houseplant',
		image: blogIII,
		text: 'Pot - a container in which plants are planted directly, with drainage holes for water...',
		link: '/blog?3653',
	},
];

export const Blog: React.FC = () => (
	<section className="blog container">
		<h2 className="blog__title title">Blog</h2>
		<div className="blog__list">
			{articles.map((item) => (
				<a className="blog__card" href={item.link}>
					<img src={item.image} alt="" className="blog__img" />
					<h4 className="blog__card-title">{item.title}</h4>
					<p className="blog__text">{item.text}</p>
					<Link to={item.link} className="blog__link">
						Read
						<img src={rightArrow} />
					</Link>
				</a>
			))}
		</div>
	</section>
);