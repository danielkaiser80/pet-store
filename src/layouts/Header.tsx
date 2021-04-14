import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { SearchContext } from '../App';

const Header = () => {
	const history = useHistory();
	const { setQuery } = useContext(SearchContext);
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/">
				Petstore
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="pets">
					Pets
				</Nav.Link>
			</Nav>

			<Form inline onSubmit={() => history.push('/pets')}>
				<FormControl
					type="text"
					placeholder="Search"
					className="mr-sm-2"
					onChange={({ target }) => {
						setQuery(target.value);
					}}
				/>
			</Form>
		</Navbar>
	);
};

export default Header;
