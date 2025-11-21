import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="Main navigation">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" aria-label="Home - Noor Mohrez Lab 5">Noor Mohrez Lab 5</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-label="Navigate to Home page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" aria-label="Navigate to About page">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" aria-label="Navigate to Projects page">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;