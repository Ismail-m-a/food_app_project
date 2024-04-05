import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <Navbar className="header" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <h2>
            <span> <Link  to="/" className="highlight-logo">Global tasty </Link></span>
            
            
            
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto align links to the right, kolla senare */}
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
);

export default Navigation;