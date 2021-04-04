import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

/*import Logo from "../assets/img/logo1.png";*/

const NavbarElement = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-top">
      <Navbar className='navbar' color="white" light expand="md" fixed="top">
      <a className="brand" href="/"><h3 className="logo-name" alt="logo">ELON'S kitchen</h3></a>
        {/*<a className="brand" href="/"><img src={Logo} className="logo" alt="logo"/></a>*/}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#products">Выпечка</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Записаться на классы</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">О нас</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Контакты</NavLink>
            </NavItem> 
            <NavItem>
            <ul className="header-social">
            <li><a  href="https://www.instagram.com/a.saltanat_a/" style={{display: "table-cell", color:"#595b59"}} target="_blank" rel="noreferrer" aria-hidden="true">
              <i className="fab fa-instagram fa-lg icon"></i>
            </a></li>
            </ul>
            </NavItem>
          </Nav>
          
        </Collapse>
       
      </Navbar>
    </div>
  );
}

export default NavbarElement;