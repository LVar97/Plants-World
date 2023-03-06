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

export const App: React.FC = () => (
	<div>
		<Router>
			<Layout>
				<Header />
				<Routes>
					<Route path="/" element={<MainPages />} />
				</Routes>
				<Footer />
			</Layout>
		</Router>
	</div>
);
