import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const navigationbar = () => {
  return (
    <Navbar className="border-bottom" style={{ backgroundColor: "#07273d"}}>
      <Container>
        {/* <Navbar.Brand href="#home">Elder Techies</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-hover">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-hover">About Us</Nav.Link>
            <Nav.Link href="#pricing" className="nav-hover">Our Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigationbar;
