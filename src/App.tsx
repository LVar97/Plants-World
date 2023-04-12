import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import Layout from 'antd/lib/layout';
import { Header } from '@app/components/Header/Header';
import { MainPages } from '@app/pages/MainPages';
import { Footer } from '@app/components/Footer/Footer';
import { Catalog } from '@app/pages/Catalog';
import { indoorList } from '@app/common/ProductsLists';

export const App: React.FC = () => (
	<div>
		<Router>
			<Layout>
				<Header />
				<Routes>
					<Route path="/" element={<MainPages />} />
					<Route path="/indoor-plant" element={<Catalog list={indoorList} title="Indoor Plans" />} />
				</Routes>
				<Footer />
			</Layout>
		</Router>
	</div>
);
