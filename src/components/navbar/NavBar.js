import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
const NavBar = () =>{
   return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Categories</Nav.Link>
                    <Nav.Link href="#features">Products</Nav.Link>
                    <Nav.Link href="#pricing">Offers</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#features">Sign Up</Nav.Link>
                </Nav>
        </Navbar>     
   )
}

export default NavBar;