import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/BookDetail">Book Details</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;