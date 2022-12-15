
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavBarElements";
import { ReactComponent as IconMenu }  from '../All41Basic-prototype.svg';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <IconMenu width = '100px' height = '100px'/>
          <NavLink to="/Home"  style={({isActive}) => (isActive ? {
            background: '#98F3C4',
            color: '#ffffff'
          }:{})}>
            Home
          </NavLink>
          <NavLink to="/About">
            About
          </NavLink>
          <NavLink to="/Blogs">
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;