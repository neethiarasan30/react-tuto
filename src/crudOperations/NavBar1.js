import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

export const NavBar1 = () => {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
            <Nav.Link as={Link} to='/createproduct'>Create Products</Nav.Link>
            <Nav.Link ></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}
