import React from 'react';
import './NavBar.css';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
      <div className='main-nav'>
        <Navbar variant="light" expand="lg">
          <Container fluid>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="New"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Women's</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item> <Link to="/womentops" path="WomenTops">Top's</Link></NavDropdown.Item>
                  <NavDropdown.Item href="WomenBottoms">Bottom's</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Dresses</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Shoes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Accessories & Socks</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Men's</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Top's</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Bottom's</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Dresses</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Shoes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Accessories & Socks</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Women"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Women</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Dresses</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Men"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Jeans"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Shoes & Accessories"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Swimsuits"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Aries"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-link"
                  title="Clearance"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}