import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const NavBar1 = () => {

  let navigate  =  useNavigate()

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='products'>Products1</Nav.Link>
            <Nav.Link onClick={() => {navigate('products')}}>Products2</Nav.Link>
            <Button variant="success" onClick={() => {navigate('products')}}>Products3</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  );
};
