import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import UserloginModel from '../pages/UserloginModel';

function Header(){
    return (
        <ReactBootStrap.Navbar bg="light" expand="lg">
            <ReactBootStrap.Navbar.Brand id="logo" href="/">Jewels Ecommerce</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
                    <UserloginModel />
                    <ReactBootStrap.NavDropdown title="Category" id="basic-nav-dropdown"  >
                        <ReactBootStrap.NavDropdown.Item href="/rings" id="rings">Rings</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/necklace" id="necklace">Necklace</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="/earrings" id="earrings">Earrings</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="/all-products">All Products</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Form inline>
                    <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default Header;
