import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeDropdown}>
          </Link>
        </div>
      </div>

     
      <div className="navbar-menu-wrapper">
        <button
          className="navbar-toggle"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          Menu ▼
        </button>

        {dropdownOpen && (
          <ul className="navbar-dropdown">
            <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
            <li><Link to="/Movies" onClick={closeDropdown}>Movies</Link></li>
            <li><Link to="/Shows" onClick={closeDropdown}>Shows</Link></li>
            <li><Link to="/MyAccount" onClick={closeDropdown}>My Account</Link></li>
            <li><Link to="/signUp" onClick={closeDropdown}>Sign Up</Link></li>
            <li><Link to="/cart" onClick={closeDropdown}>Cart</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
