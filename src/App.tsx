import React, { Dispatch, SetStateAction } from 'react';
import { useState, createContext } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Content from './layouts/Content';
import List from './assets/pet/List';
import Dashboard from './assets/store/Dashboard';

export const SearchContext = createContext<{ query: string; setQuery: Dispatch<SetStateAction<string>> }>({
	query: '',
	setQuery: () => {},
});

function App() {
	const [query, setQuery] = useState<string>('');

	return (
		<Router>
			<SearchContext.Provider value={{ query, setQuery }}>
				<Container>
					<Header />
					<Content>
						<Switch>
							<Route path="/pets">
								<List />
							</Route>
							{/* <Route path="/users">
						<Users />
					</Route> */}
							<Route path="/">
								<Dashboard />
							</Route>
						</Switch>
					</Content>
				</Container>
			</SearchContext.Provider>
		</Router>
	);
}

export default App;
