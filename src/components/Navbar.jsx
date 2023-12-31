import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../favicon4.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/" className="logo-link">
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/login">BusList</Link>
        </li>
        <li>
          <Link to="/booking">BusSeatBooking</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* /* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
