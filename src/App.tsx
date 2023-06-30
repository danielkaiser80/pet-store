import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./layouts/Header";
import List from "./assets/pet/List";
import Dashboard from "./assets/store/Dashboard";

export const SearchContext = createContext<{
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}>({
  query: "",
  setQuery: () => {},
});

const App = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      <Router>
        <Container>
          <Header />
          <Container>{children}</Container>
        </Container>
      </Router>
    </SearchContext.Provider>
  );
};

export default () => (
  <App>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pets" element={<List />} />
    </Routes>
  </App>
);
