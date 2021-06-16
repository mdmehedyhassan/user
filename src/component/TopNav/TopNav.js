import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo.png'

const TopNav = () => {
    return (
        <div >
            <Navbar bg="" expand="lg">
                <Navbar.Brand href="#home">datatellers <img src={Logo} style={{width: '50px'}} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <NavDropdown title="SOLUTIONS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action-1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Action-2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Action-3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Action-4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action-1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Action-2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Action-3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Action-4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="COMPANY" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action-1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Action-2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Action-3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Action-4</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">CAREERS</Nav.Link>
                        <Nav.Link href="#">NETWORK</Nav.Link>
                        <Nav.Link href="#">CONTACTS</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TopNav;