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
import { ProductPage } from '@app/pages/ProductPage';
import { indoorList, outdoorList } from '@app/common/ProductsLists';
import ConfigProvider from 'antd/es/config-provider';

export const App: React.FC = () => (
	<div>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#4e6f50',
				},
			}}
		>
		<Router>
			<Layout>
				<Header />
				<Routes>
					<Route path="/" element={<MainPages />} />
					<Route path="/indoor-plant" element={<Catalog list={indoorList} title="Indoor Plans" />} />
					<Route path="/outdoor-plant" element={<Catalog list={outdoorList} title="Outdoor Plans" />} />
					<Route path="/product-page/:id" element={<ProductPage />} />
				</Routes>
				<Footer />
			</Layout>
		</Router>
		</ConfigProvider>
	</div>
);
