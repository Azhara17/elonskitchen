import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Instagram from "../assets/img/Instagram-icon.png";

const NavbarElement = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-top">
      <Navbar className='navbar' color="light" light expand="md" fixed="top">
        <a className="brand" href="/"><h1>Elon's Kitchen</h1></a>
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
            <a  href="https://www.instagram.com/a.saltanat_a/" style={{display: "table-cell"}} target="_blank">
                <img className="instagram-icon" src={Instagram} alt="insta-icon" style={{width:"25px", height:"25px"}}/>
                </a>
            </NavItem>
          </Nav>
          
        </Collapse>
       
      </Navbar>
    </div>
  );
}

export default NavbarElement;