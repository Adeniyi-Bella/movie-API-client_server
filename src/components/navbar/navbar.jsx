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
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbar-logo" as={Link} to="/">
          Home Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mal-auto">
            {isAuth() && (
              <Nav.Link as={Link} to={`/users/${user}`}>
                Your Profile
              </Nav.Link>
            )}
            {isAuth() && (
              <Nav.Link as={Link} to={`/users/${user}/favoriteMovies`}>
                FAVORITE MOVIES
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
      </Container>
    </Navbar>
  );
}