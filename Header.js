// src/components/Header.js

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#4CAF50"/>
              <g transform="translate(8, 8)">
                <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="white"/>
                <circle cx="6" cy="18" r="2" fill="white"/>
                <circle cx="18" cy="18" r="2" fill="white"/>
                <circle cx="12" cy="6" r="1.5" fill="white"/>
                <path d="M8 14L12 16L16 14" stroke="white" strokeWidth="1"/>
              </g>
            </svg>
            <span>BuyNothing</span>
          </a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-dropdown">
            <span>Community</span>
            <div className="dropdown-content">
              <a href="/howto">How To Buy Nothing</a>
              <a href="/quickstart">Quick Start Guide</a>
              <a href="/join">Join</a>
              <a href="/sustaining_members">Sustaining Members</a>
              <a href="/community">BN Tips</a>
              <a href="/find-a-group">Find Your Community</a>
              <a href="/commitment">Community Commitment</a>
              <a href="/guidelines">Community Guidelines</a>
              <a href="/safety">Safety</a>
              <a href="/public_library">BN Library</a>
              <a href="/academy">BN Academy</a>
            </div>
          </div>
          
          <div className="nav-dropdown">
            <span>Build</span>
            <div className="dropdown-content">
              <a href="/join">Join</a>
              <a href="/build">Build BN</a>
              <a href="/howto">How To Buy Nothing</a>
              <a href="/start_building">Start a Group</a>
              <a href="/listyourgifteconomy">List Your Group</a>
              <a href="/find-a-group">Find Your Group</a>
              <a href="/group-update">Update Your Group</a>
              <a href="/public_library">BN Library</a>
              <a href="/academy">BN Academy</a>
            </div>
          </div>
          
          <a href="/help">Get Help</a>
          
          <div className="nav-dropdown">
            <span>Donate</span>
            <div className="dropdown-content">
              <a href="/sustaining_members">Sustaining Membership</a>
              <a href="/donate">Make a Charitable Donation</a>
              <a href="/contribute">Make a Direct Contribution</a>
              <a href="/swag">Buy Nothing Swag</a>
            </div>
          </div>
          
          <a href="/about">About</a>
        </nav>
        
        <div className="auth-buttons">
          <a href="#" className="login-btn">Login</a>
          <a href="#" className="signup-btn">Sign Up</a>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
