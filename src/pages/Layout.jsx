import React from 'react';
import { Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Layout = () => {
  return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cognito Access Client</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="callback">Callback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="signout">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet /> 
  </>)
};

export default Layout;