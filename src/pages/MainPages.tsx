import React from 'react';

import { Head } from '@app/components/MainSections/Head';
import { Categories } from '@app/components/MainSections/Categories';
import { About } from '@app/components/MainSections/About';
import { Advantages } from '@app/components/MainSections/Advantages';

export const MainPages = () => {
	return (
		<main className="main">
			<Head />
			<Categories />
			<About />
			<Advantages />
		</main>
	);
};
