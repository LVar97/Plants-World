import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

export const App: React.FC = () => (
	<div>
		<Router>
			<Routes>
				<Route path="/" element={<div />} />
			</Routes>
		</Router>
	</div>
);
