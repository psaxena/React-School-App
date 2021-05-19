import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="topnav">
      <NavLink exact activeClassName="active" to='/' >Schedule Today</NavLink>
      <NavLink activeClassName="active" to='/team'>Staff</NavLink>
      <NavLink activeClassName="active" to='/contact'>Contact Us</NavLink>
      <NavLink activeClassName="active" to='/about'>About</NavLink>
    </div>
  );
  
}

export default NavBar;