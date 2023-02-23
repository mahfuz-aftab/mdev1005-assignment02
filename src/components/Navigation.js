import React from 'react';
//import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (

      <Navbar className="navbar navbar-dark bg-dark">
      <Navbar.Brand href="#">Assignment#02</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/service">Service</Nav.Link>
          <Nav.Link href="/tools">Tools</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>

  );
};

export default Navigation;
