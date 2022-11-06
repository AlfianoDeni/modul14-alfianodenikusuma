import React from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap"
import './syle.css'


function Navbr(){
    return (
    <>
    <Navbar bg="white" variant="blue">
        <Container>
            {/* <Navbar.Brand href='#'>Netlab Bookstore</Navbar.Brand> */}
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}

export default Navbr;