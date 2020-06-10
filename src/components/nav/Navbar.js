import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarHeader = props => {
  const logout = () => {
    sessionStorage.removeItem("authenticated")
    sessionStorage.removeItem("userId")
  }
  const isAuthenticated = () => sessionStorage.getItem("authenticated") !== null;

  const [isOpen, setIsOpen] = useState(false)
  const [navHide, setNavHide] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  const toggleHide = () => {
    if(isAuthenticated()){
      return ""
    }
    else{
      return "d-none"
    }
  }
  
  if(isAuthenticated()){

    return (
      <div>
        <Navbar color="dark" expand="lg" className={toggleHide()}>
          <NavbarBrand>
          <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink ="http://www.w3.org/1999/xlink"
              >       
                <image
                  xlinkHref="https://i.ibb.co/6gn3mmJ/reactshell.png"
                  height={50}
                  width={50}
                />
              </svg>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/messages">
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/articles">
                  News
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tasks">
                  Tasks
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
  export default NavbarHeader