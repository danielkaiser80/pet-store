import React, {useState, createContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './layouts/Header';
import Content from './layouts/Content';
import List from './assets/pet/List';
import Dashboard from './assets/store/Dashboard';

export const SearchContext = createContext<{ query: string; setQuery: React.Dispatch<React.SetStateAction<string>> }>({
    query: '',
    setQuery: () => {
    },
});

function App({children}) {
    const [query, setQuery] = useState<string>('');

    return (
        <SearchContext.Provider value={{query, setQuery}}>
            <Router>
                <Container>
                    <Header/>
                    <Content>
                        {children}
                    </Content>
                </Container>
            </Router>
        </SearchContext.Provider>
    );
}

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/pets" element={<List/>}/>
        </Routes>
    );
}

export default () => (
    <App>
        <MainRoutes/>
    </App>
)
