import React from 'react';
import AppProvider from './context';
import Router from './routes';

function App() {
	return (
		<AppProvider>
			<div className="App">
				<Router />
			</div>
		</AppProvider>
	);
}

export default App;
