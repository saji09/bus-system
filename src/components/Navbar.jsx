import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from './favicon.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bus-list">BusList</Link>
        </li>
        <li>
          <Link to="/booking">BusSeatBooking</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
