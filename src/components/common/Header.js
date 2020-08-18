import React, { useState } from 'react';
import './css/Header.css';
import Config from './../../../package.json';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Button
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="bg-transparent" color="light" light expand="md">
            <NavbarBrand href="/">
                <img className="header-logo" src="./logo192.png" alt=""/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto nav-header" navbar>
                    <NavItem>
                        <Link to={'/' + Config.name}><i className="fa fa-life-ring"/>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/' + Config.name}><i className="fa fa-rss"/>Blog</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/' + Config.name}><i className="far fa-comments"/>Pages</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/' + Config.name}><i className="far fa-paper-plane" />Contact</Link>
                    </NavItem>
                </Nav>
                <NavbarText>
                    <Button className="border-radius-50 btn-sigin">SIGN IN</Button>
                </NavbarText>
            </Collapse>
        </Navbar>
    );
}

export default Header;