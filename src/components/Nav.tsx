import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Home link now points to an external URL */}
        <div className="nav-item">
          <a href="https://challenge13-fypj.onrender.com/" className="nav-link" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </div>

        {/* Potential Candidates link */}
        <div className="nav-item">
          <Link to="/saved-candidates" className="nav-link">Potential Candidates</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
