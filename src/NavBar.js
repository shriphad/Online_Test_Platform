import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import { Form, Button, FormControl } from "react-bootstrap";

function NavBar() {
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark" fixed="top" expand='lg' >
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;