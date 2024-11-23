import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional, for custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Sandile Energies</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/auth" className="navbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
