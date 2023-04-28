import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { navLinks } from '../constants';

// Navbar component that displays the navigation bar
function Navbar() {
  // State to keep track of the active navigation item
  const [active, setActive] = useState('');

  return (
    <nav className="nav">
      <div className="nav-div">
        {/* Navigation link for the home page with logo */}
        <Link
          to="/"
          className="nav-icon"
          onClick={() => {
            // Reset the active state and scroll to the top of the page when the home link is clicked
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <div className="nav-title">
          <span></span>
        </div>

        {/* Render the navigation items */}
        <ul className="nav-items">
          {/* Loop through the navLinks array and render each navigation item */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active == link.title ? 'active' : 'not-active'}`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Export the Navbar component
export default Navbar;
