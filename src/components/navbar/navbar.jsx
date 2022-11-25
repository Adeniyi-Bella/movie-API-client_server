import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function NavBar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  const isAuth = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  };

  return (
    // <Container>
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark"
    >
      
      <Navbar.Brand className="brand" href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mal-auto ml-auto">
            {isAuth() && (
              <Nav.Link as={Link} to={`/users/${user}`}>
                Your profile
              </Nav.Link>
            )}
            {isAuth() && (
              <Nav.Link as={Link} to={`/users/${user}/favoriteMovies`}>
                Favorite movies
              </Nav.Link>
            )}
            {isAuth() && (
              <Button style={{ textAlign: 'left', padding: '0' }}
                variant="link"
                onClick={() => {
                  onLoggedOut();
                }}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    // </Container>
  );
}