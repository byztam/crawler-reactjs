import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <NavLink href="#"><i className="fa fa-life-ring"/>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><i className="fa fa-rss"/>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><i className="far fa-comments"/>Pages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><i className="far fa-paper-plane" />Contact</NavLink>
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