import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './header.scss';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Budapest e-robogó</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link className="link" to="/#scooters">Robogók és árak</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link" to="/#contact">Kapcsolat</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default Header;
  