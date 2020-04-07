import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button, Navbar,Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class Navbars extends Component {
    render() {

        return (
            // <ul>
            //     <li><Link to='/'>Home</Link></li>
            //     <li><Link to='About'>About</Link></li>
            // </ul>
            <Navbar className="navbar-bg fixed-top px-5" bg="light" expand="lg">
                {/* <Navbar.Brand href="/">
                    <img src="public/logo192.png"/>
                    React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Brand className="mx-5" href="#home">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="mx-5 px-5" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/"><i className="fa fa-home home-icon"></i> Home</Nav.Link>
                        <Nav.Link href="about"><i className="fa fa-exclamation about-icon"></i> About</Nav.Link>
                        <NavDropdown title="Info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="contact"><i className="fa fa-clock"></i> Contact</NavDropdown.Item>
                            <NavDropdown.Item href="clock"><i className="fa fa-clock"></i>Clock</NavDropdown.Item>
                            <NavDropdown.Item href="analog"><i className="fa fa-user-clock"></i>Analog</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="forms"><i className="fa fa-file-code"></i>Form</NavDropdown.Item>
                            <NavDropdown.Item href="weather"><i className="fa fa-smog"></i>Weather</NavDropdown.Item>
                            <NavDropdown.Item href="form-validator"><i className="fa fa-file-contract"></i>Form-Validator</NavDropdown.Item>
                            <NavDropdown.Item href="form-validator-two"><i className="fa fa-file-alt"></i>Form-Validator-Two</NavDropdown.Item>
                            <NavDropdown.Item href="carousel"><i className="fa fa-file-image"></i>Carousel</NavDropdown.Item>
                            <NavDropdown.Item href="file-upload"><i className="fa fa-file-image"></i>File Upload</NavDropdown.Item>
                            <NavDropdown.Item href="car-list"><i className="fa fa-file-image"></i>Car List</NavDropdown.Item>
                            <NavDropdown.Item href="todos"><i className="fa fa-file-image"></i>Todos</NavDropdown.Item>
                            <NavDropdown.Item href="this"><i className="fa fa-file-image"></i>This</NavDropdown.Item>
                            <NavDropdown.Item href="dummy-list"><i className="fa fa-file-image"></i>Dummy List</NavDropdown.Item>
                            <NavDropdown.Item href="dummy-login"><i className="fa fa-file-image"></i>Dummy Login</NavDropdown.Item>
                            <NavDropdown.Item href="dummy-signup"><i className="fa fa-file-image"></i>Dummy Signup</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="login"><i className="fa fa-sign-in login-icon"></i> Login</Nav.Link>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbars;
