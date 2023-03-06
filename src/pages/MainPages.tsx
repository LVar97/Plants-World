import React from 'react';

import { Head } from '@app/components/MainSections/Head';
import { Categories } from '@app/components/MainSections/Categories';
import { About } from '@app/components/MainSections/About';

export const MainPages = () => {
	return (
		<main className="main">
			<Head />
			<Categories />
			<About />
		</main>
	);
};
