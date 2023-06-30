import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {SearchContext} from '../App';

const Header = () => {
    const navigate = useNavigate();
    const {setQuery} = useContext(SearchContext);
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

            {/*We should probably remove the form here, as this breaks when pressing enter*/}
            <Form onSubmit={() => {
                navigate('/pets');
            }}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={({target}) => {
                        setQuery(target.value);
                    }}
                />
            </Form>
        </Navbar>
    );
};

export default Header;
