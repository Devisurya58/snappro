import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return (
    <nav className="main-nav">
      
      <center>
       <NavLink to="/mountain">Mountain &nbsp;&nbsp; </NavLink>
        <NavLink to="/beach">Beaches  &nbsp;&nbsp;</NavLink>
        <NavLink to="/bird">Birds &nbsp;&nbsp; </NavLink>
        <NavLink to="/food">Food &nbsp;&nbsp;</NavLink>
        </center>
      
      
    </nav>
  );
}

export default Navigation;
